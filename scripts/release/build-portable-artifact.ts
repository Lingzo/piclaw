#!/usr/bin/env bun
/**
 * Build a platform-native portable Piclaw artifact for the current runner.
 *
 * Outputs:
 * - Linux: self-extracting .run bundle
 * - macOS: .tar.gz bundle
 * - Windows: .zip bundle
 *
 * Every bundle contains the current Bun executable, packaged Piclaw app tree,
 * built web/runtime assets, skel files, and production node_modules installed
 * for the current OS/architecture.
 */

import {
  chmodSync,
  copyFileSync,
  createReadStream,
  createWriteStream,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { basename, join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";
import { pipeline } from "node:stream/promises";

interface Options {
  outputDir: string;
  keepWorkdir: boolean;
}

interface PlatformInfo {
  platform: "linux" | "macos" | "windows";
  arch: "x64" | "arm64";
  bundleName: string;
  artifactPath: string;
}

const repoRoot = resolve(import.meta.dir, "..", "..");
const defaultOutputDir = join(repoRoot, "artifacts", "release");

export async function buildPortableArtifactFromCli(argv = process.argv.slice(2)): Promise<void> {
  const options = parseOptions(argv);
  await buildPortableArtifact(options);
}

function parseOptions(argv: string[]): Options {
  const options: Options = {
    outputDir: defaultOutputDir,
    keepWorkdir: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--output-dir" && typeof argv[index + 1] === "string") {
      options.outputDir = resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg.startsWith("--output-dir=")) {
      options.outputDir = resolve(arg.slice("--output-dir=".length));
      continue;
    }
    if (arg === "--keep-workdir") {
      options.keepWorkdir = true;
      continue;
    }
    if (arg === "--help" || arg === "-h") {
      printHelpAndExit();
    }
    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function printHelpAndExit(): never {
  console.log(`Usage: bun run scripts/release/build-portable-artifact.ts [options]\n\nOptions:\n  --output-dir DIR   Directory for the generated artifact (default: artifacts/release)\n  --keep-workdir     Keep the temporary build directory for inspection\n  -h, --help         Show this help\n`);
  process.exit(0);
}

function run(command: string, args: string[], options: { cwd?: string; env?: NodeJS.ProcessEnv } = {}): void {
  const pretty = [command, ...args].join(" ");
  console.error(`[portable] ${pretty}`);
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? repoRoot,
    env: options.env ?? process.env,
    stdio: "inherit",
    shell: false,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`Command failed (${result.status ?? "signal"}): ${pretty}`);
}

function readPackageVersion(): string {
  const pkg = JSON.parse(readFileSync(join(repoRoot, "package.json"), "utf8")) as { version?: string };
  if (!pkg.version) throw new Error("package.json has no version");
  return pkg.version;
}

function currentPlatformInfo(outputDir: string, version: string): PlatformInfo {
  const arch = normalizeArch();
  const platform = normalizePlatform();
  const bundleName = `piclaw-${version}-${platform}-${arch}`;
  const extension = platform === "linux" ? ".run" : platform === "windows" ? ".zip" : ".tar.gz";
  return {
    platform,
    arch,
    bundleName,
    artifactPath: join(outputDir, `${bundleName}${extension}`),
  };
}

function normalizePlatform(): PlatformInfo["platform"] {
  if (process.platform === "linux") return "linux";
  if (process.platform === "darwin") return "macos";
  if (process.platform === "win32") return "windows";
  throw new Error(`Unsupported platform for portable artifacts: ${process.platform}`);
}

function normalizeArch(): PlatformInfo["arch"] {
  if (process.arch === "x64") return "x64";
  if (process.arch === "arm64") return "arm64";
  throw new Error(`Unsupported architecture for portable artifacts: ${process.arch}`);
}

function findPackedTarball(packDir: string): string {
  const glob = new Bun.Glob("piclaw-*.tgz");
  const matches = Array.from(glob.scanSync({ cwd: packDir, absolute: true })).sort();
  const latest = matches.at(-1);
  if (!latest) throw new Error(`No piclaw-*.tgz found in ${packDir}`);
  return latest;
}

function buildUnixLauncherScript(): string {
  return `#!/usr/bin/env sh\nset -eu\nSELF_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)\nROOT=$(CDPATH= cd -- "$SELF_DIR/.." && pwd)\nexport BUN_INSTALL="$ROOT/bun"\nexport PATH="$ROOT/bun/bin:$PATH"\nexec "$ROOT/bun/bin/bun" "$ROOT/app/runtime/src/index.ts" "$@"\n`;
}

function buildWindowsCmdLauncher(): string {
  return `@echo off\r\nsetlocal\r\nset "SELF_DIR=%~dp0"\r\nfor %%I in ("%SELF_DIR%..") do set "ROOT=%%~fI"\r\nset "BUN_INSTALL=%ROOT%\\bun"\r\nset "PATH=%ROOT%\\bun;%PATH%"\r\n"%ROOT%\\bun\\bun.exe" "%ROOT%\\app\\runtime\\src\\index.ts" %*\r\n`;
}

function buildWindowsPowerShellLauncher(): string {
  return `$ErrorActionPreference = 'Stop'\r\n$Root = Resolve-Path (Join-Path $PSScriptRoot '..')\r\n$env:BUN_INSTALL = Join-Path $Root 'bun'\r\n$env:PATH = (Join-Path $Root 'bun') + [IO.Path]::PathSeparator + $env:PATH\r\n& (Join-Path $Root 'bun/bun.exe') (Join-Path $Root 'app/runtime/src/index.ts') @args\r\nexit $LASTEXITCODE\r\n`;
}

function buildUnixInstallScript(bundleName: string): string {
  return `#!/usr/bin/env sh\nset -eu\nPREFIX=\${1:-/opt/piclaw}\nBIN_DIR=\${PICLAW_BIN_DIR:-/usr/local/bin}\nSELF_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)\nmkdir -p "$PREFIX/releases"\nrm -rf "$PREFIX/releases/${bundleName}"\ncp -a "$SELF_DIR" "$PREFIX/releases/${bundleName}"\nln -sfn "releases/${bundleName}" "$PREFIX/current"\nif [ "\${PICLAW_SKIP_BIN_LINK:-0}" != "1" ]; then\n  mkdir -p "$BIN_DIR"\n  cat > "$BIN_DIR/piclaw" <<EOF\n#!/usr/bin/env sh\nexec "$PREFIX/current/bin/piclaw" "\\$@"\nEOF\n  chmod 755 "$BIN_DIR/piclaw"\nfi\necho "Installed Piclaw to $PREFIX/current"\n`;
}

function buildWindowsInstallScript(bundleName: string): string {
  return [
    "$ErrorActionPreference = 'Stop'",
    "param(",
    "  [string]$Prefix = (Join-Path $env:LOCALAPPDATA 'Piclaw'),",
    "  [string]$BinDir = (Join-Path $env:LOCALAPPDATA 'Microsoft\\WindowsApps'),",
    "  [switch]$SkipBinLink",
    ")",
    "$SelfDir = Split-Path -Parent $MyInvocation.MyCommand.Path",
    "$Releases = Join-Path $Prefix 'releases'",
    `$Dest = Join-Path $Releases '${bundleName}'`,
    "New-Item -ItemType Directory -Force -Path $Releases | Out-Null",
    "if (Test-Path $Dest) { Remove-Item -Recurse -Force $Dest }",
    "Copy-Item -Recurse -Force $SelfDir $Dest",
    "$Current = Join-Path $Prefix 'current'",
    "if (Test-Path $Current) { Remove-Item -Recurse -Force $Current }",
    "New-Item -ItemType Junction -Path $Current -Target $Dest | Out-Null",
    "if (-not $SkipBinLink) {",
    "  New-Item -ItemType Directory -Force -Path $BinDir | Out-Null",
    "  '@echo off`r`n\"' + (Join-Path $Current 'bin\\piclaw.cmd') + '\" %*`r`n' | Set-Content -Encoding ASCII (Join-Path $BinDir 'piclaw.cmd')",
    "}",
    "Write-Host \"Installed Piclaw to $Current\"",
    "",
  ].join("\r\n");
}

function buildSelfExtractingStub(bundleName: string, version: string, arch: string): string {
  return `#!/usr/bin/env sh
set -eu

BUNDLE_NAME='${bundleName}'
PICLAW_VERSION='${version}'
PICLAW_PLATFORM='linux-${arch}'
DEFAULT_PREFIX='/opt/piclaw'
DEFAULT_BIN_DIR='/usr/local/bin'

usage() {
  cat <<EOF
Piclaw $PICLAW_VERSION self-extracting Linux bundle ($PICLAW_PLATFORM)

Usage:
  $0 --install [PREFIX]       Install to PREFIX (default: $DEFAULT_PREFIX)
  $0 --extract DIR            Extract payload under DIR without installing
  $0 --version                Print bundled Piclaw version
  $0 --help                   Show this help

Install environment variables:
  PICLAW_BIN_DIR=DIR          Launcher directory for --install (default: $DEFAULT_BIN_DIR)
  PICLAW_SKIP_BIN_LINK=1      Do not write DIR/piclaw launcher
EOF
}

payload_line() {
  awk '/^__PICLAW_PAYLOAD_BELOW__$/ { print NR + 1; exit 0; }' "$0"
}

extract_payload() {
  dest=$1
  mkdir -p "$dest"
  line=$(payload_line)
  if [ -z "$line" ]; then
    echo "Could not locate embedded payload marker" >&2
    exit 1
  fi
  tail -n +"$line" "$0" | tar -xzf - -C "$dest"
}

install_bundle() {
  prefix=$1
  bin_dir=\${PICLAW_BIN_DIR:-$DEFAULT_BIN_DIR}
  tmpdir=$(mktemp -d "\${TMPDIR:-/tmp}/piclaw-run.XXXXXX")
  cleanup() { rm -rf "$tmpdir"; }
  trap cleanup EXIT INT TERM

  extract_payload "$tmpdir"
  src="$tmpdir/$BUNDLE_NAME"
  if [ ! -x "$src/bin/piclaw" ]; then
    echo "Extracted payload is missing bin/piclaw" >&2
    exit 1
  fi

  mkdir -p "$prefix/releases"
  rm -rf "$prefix/releases/$BUNDLE_NAME"
  mv "$src" "$prefix/releases/$BUNDLE_NAME"
  ln -sfn "releases/$BUNDLE_NAME" "$prefix/current"

  if [ "\${PICLAW_SKIP_BIN_LINK:-0}" != "1" ]; then
    mkdir -p "$bin_dir"
    cat > "$bin_dir/piclaw" <<EOF
#!/usr/bin/env sh
exec "$prefix/current/bin/piclaw" "\$@"
EOF
    chmod 755 "$bin_dir/piclaw"
  fi

  echo "Installed Piclaw $PICLAW_VERSION to $prefix/current"
  if [ "\${PICLAW_SKIP_BIN_LINK:-0}" != "1" ]; then
    echo "Launcher: $bin_dir/piclaw"
  fi
}

command=\${1:---help}
case "$command" in
  --help|-h)
    usage
    exit 0
    ;;
  --version)
    echo "$PICLAW_VERSION"
    exit 0
    ;;
  --extract)
    if [ $# -lt 2 ]; then
      echo "--extract requires a destination directory" >&2
      exit 1
    fi
    extract_payload "$2"
    echo "Extracted $BUNDLE_NAME to $2/$BUNDLE_NAME"
    exit 0
    ;;
  --install)
    prefix=\${2:-$DEFAULT_PREFIX}
    install_bundle "$prefix"
    exit 0
    ;;
  *)
    echo "Unknown command: $command" >&2
    usage >&2
    exit 1
    ;;
esac

__PICLAW_PAYLOAD_BELOW__
`;
}

async function writeStubAndPayload(targetPath: string, stub: string, payloadPath: string): Promise<void> {
  const stream = createWriteStream(targetPath, { mode: 0o755 });
  stream.write(stub);
  await pipeline(createReadStream(payloadPath), stream, { end: true });
}

function copyBundledBun(bundleDir: string, platform: PlatformInfo["platform"]): void {
  const bunSource = process.execPath;
  if (platform === "windows") {
    const bunTargetDir = join(bundleDir, "bun");
    mkdirSync(bunTargetDir, { recursive: true });
    copyFileSync(bunSource, join(bunTargetDir, "bun.exe"));
    return;
  }

  const bunTargetDir = join(bundleDir, "bun", "bin");
  mkdirSync(bunTargetDir, { recursive: true });
  copyFileSync(bunSource, join(bunTargetDir, "bun"));
  chmodSync(join(bunTargetDir, "bun"), 0o755);
}

function writeLaunchers(bundleDir: string, platform: PlatformInfo["platform"], bundleName: string): void {
  mkdirSync(join(bundleDir, "bin"), { recursive: true });
  if (platform === "windows") {
    writeFileSync(join(bundleDir, "bin", "piclaw.cmd"), buildWindowsCmdLauncher());
    writeFileSync(join(bundleDir, "bin", "piclaw.ps1"), buildWindowsPowerShellLauncher());
    writeFileSync(join(bundleDir, "install.ps1"), buildWindowsInstallScript(bundleName));
    return;
  }

  writeFileSync(join(bundleDir, "bin", "piclaw"), buildUnixLauncherScript(), { mode: 0o755 });
  chmodSync(join(bundleDir, "bin", "piclaw"), 0o755);
  writeFileSync(join(bundleDir, "install.sh"), buildUnixInstallScript(bundleName), { mode: 0o755 });
  chmodSync(join(bundleDir, "install.sh"), 0o755);
}

function packagePortableArtifact(workdir: string, info: PlatformInfo): void {
  if (info.platform === "linux") {
    const payloadPath = join(workdir, `${info.bundleName}.tar.gz`);
    run("tar", ["-czf", payloadPath, "-C", workdir, info.bundleName]);
    return;
  }

  if (info.platform === "macos") {
    run("tar", ["-czf", info.artifactPath, "-C", workdir, info.bundleName]);
    return;
  }

  run("tar", ["-acf", info.artifactPath, "-C", workdir, info.bundleName]);
}

async function buildPortableArtifact(options: Options): Promise<void> {
  const version = readPackageVersion();
  const info = currentPlatformInfo(options.outputDir, version);
  const workdir = mkdtempSync(join(tmpdir(), "piclaw-portable-"));
  const packDir = join(workdir, "pack");
  const extractDir = join(workdir, "extract");
  const bundleDir = join(workdir, info.bundleName);

  try {
    mkdirSync(packDir, { recursive: true });
    mkdirSync(extractDir, { recursive: true });
    mkdirSync(bundleDir, { recursive: true });
    mkdirSync(options.outputDir, { recursive: true });

    run("bun", ["pm", "pack", "--destination", packDir]);
    const tarball = findPackedTarball(packDir);
    run("tar", ["-xzf", tarball, "-C", extractDir]);

    const appDir = join(extractDir, "package");
    if (!existsSync(join(appDir, "package.json"))) throw new Error("Pack extraction did not produce package/package.json");
    copyFileSync(join(repoRoot, "bun.lock"), join(appDir, "bun.lock"));
    const installCacheDir = join(workdir, "bun-cache");
    const installTmpDir = join(workdir, "tmp");
    const bunTmpDir = join(workdir, "bun-tmp");
    mkdirSync(installCacheDir, { recursive: true });
    mkdirSync(installTmpDir, { recursive: true });
    mkdirSync(bunTmpDir, { recursive: true });
    run("bun", ["install", "--production", "--frozen-lockfile"], {
      cwd: appDir,
      env: {
        ...process.env,
        BUN_INSTALL_CACHE_DIR: installCacheDir,
        BUN_TMPDIR: bunTmpDir,
        TMPDIR: installTmpDir,
        TMP: installTmpDir,
        TEMP: installTmpDir,
      },
    });

    copyBundledBun(bundleDir, info.platform);
    renameSync(appDir, join(bundleDir, "app"));
    writeLaunchers(bundleDir, info.platform, info.bundleName);

    writeFileSync(join(bundleDir, "VERSION"), `${version}\n`);
    writeFileSync(join(bundleDir, "MANIFEST.json"), JSON.stringify({
      name: "piclaw-portable",
      version,
      platform: info.platform,
      arch: info.arch,
      bun: basename(process.execPath),
      builtAt: new Date().toISOString(),
    }, null, 2) + "\n");

    if (info.platform === "linux") {
      const payloadPath = join(workdir, `${info.bundleName}.tar.gz`);
      run("tar", ["-czf", payloadPath, "-C", workdir, info.bundleName]);
      await writeStubAndPayload(info.artifactPath, buildSelfExtractingStub(info.bundleName, version, info.arch), payloadPath);
      chmodSync(info.artifactPath, 0o755);
    } else {
      packagePortableArtifact(workdir, info);
    }

    const stat = statSync(info.artifactPath);
    console.log(JSON.stringify({ artifact: info.artifactPath, version, platform: `${info.platform}-${info.arch}`, bytes: stat.size }, null, 2));
  } finally {
    if (options.keepWorkdir) {
      console.error(`[portable] kept workdir: ${workdir}`);
    } else {
      rmSync(workdir, { recursive: true, force: true });
    }
  }
}

if (import.meta.main) {
  buildPortableArtifactFromCli().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  });
}
