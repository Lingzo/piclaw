#!/usr/bin/env bun
/**
 * Build a Linux self-extracting Piclaw .run artifact.
 *
 * The artifact is a POSIX shell stub with an appended tar.gz payload containing:
 * - the current Bun executable
 * - the packaged Piclaw app tree
 * - production node_modules installed for the current Linux architecture
 * - a bin/piclaw launcher that runs the packaged app with the bundled Bun
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

const repoRoot = resolve(import.meta.dir, "..", "..");
const defaultOutputDir = join(repoRoot, "artifacts", "release");

function parseOptions(argv = process.argv.slice(2)): Options {
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
  console.log(`Usage: bun run scripts/release/build-linux-run-artifact.ts [options]\n\nOptions:\n  --output-dir DIR   Directory for the generated .run file (default: artifacts/release)\n  --keep-workdir     Keep the temporary build directory for inspection\n  -h, --help         Show this help\n`);
  process.exit(0);
}

function run(command: string, args: string[], options: { cwd?: string; env?: NodeJS.ProcessEnv } = {}): void {
  const pretty = [command, ...args].join(" ");
  console.error(`[linux-run] ${pretty}`);
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? repoRoot,
    env: options.env ?? process.env,
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`Command failed (${result.status ?? "signal"}): ${pretty}`);
}

function readPackageVersion(): string {
  const pkg = JSON.parse(readFileSync(join(repoRoot, "package.json"), "utf8")) as { version?: string };
  if (!pkg.version) throw new Error("package.json has no version");
  return pkg.version;
}

function linuxArchSuffix(): string {
  if (process.platform !== "linux") throw new Error(`Linux .run artifacts must be built on Linux, got ${process.platform}`);
  if (process.arch === "x64") return "x64";
  if (process.arch === "arm64") return "arm64";
  throw new Error(`Unsupported Linux architecture for .run artifact: ${process.arch}`);
}

function findPackedTarball(packDir: string): string {
  const glob = new Bun.Glob("piclaw-*.tgz");
  const matches = Array.from(glob.scanSync({ cwd: packDir, absolute: true })).sort();
  const latest = matches.at(-1);
  if (!latest) throw new Error(`No piclaw-*.tgz found in ${packDir}`);
  return latest;
}

function buildLauncherScript(): string {
  return `#!/usr/bin/env sh\nset -eu\nSELF_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)\nROOT=$(CDPATH= cd -- "$SELF_DIR/.." && pwd)\nexport BUN_INSTALL="$ROOT/bun"\nexport PATH="$ROOT/bun/bin:$PATH"\nexec "$ROOT/bun/bin/bun" "$ROOT/app/runtime/src/index.ts" "$@"\n`;
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

async function main(): Promise<void> {
  const options = parseOptions();
  const version = readPackageVersion();
  const arch = linuxArchSuffix();
  const bundleName = `piclaw-${version}-linux-${arch}`;
  const workdir = mkdtempSync(join(tmpdir(), "piclaw-linux-run-"));
  const packDir = join(workdir, "pack");
  const extractDir = join(workdir, "extract");
  const bundleDir = join(workdir, bundleName);
  const payloadPath = join(workdir, `${bundleName}.tar.gz`);
  const outputPath = join(options.outputDir, `${bundleName}.run`);

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

    const bunSource = process.execPath;
    const bunTargetDir = join(bundleDir, "bun", "bin");
    mkdirSync(bunTargetDir, { recursive: true });
    copyFileSync(bunSource, join(bunTargetDir, "bun"));
    chmodSync(join(bunTargetDir, "bun"), 0o755);

    renameSync(appDir, join(bundleDir, "app"));

    mkdirSync(join(bundleDir, "bin"), { recursive: true });
    writeFileSync(join(bundleDir, "bin", "piclaw"), buildLauncherScript(), { mode: 0o755 });
    chmodSync(join(bundleDir, "bin", "piclaw"), 0o755);

    writeFileSync(join(bundleDir, "VERSION"), `${version}\n`);
    writeFileSync(join(bundleDir, "MANIFEST.json"), JSON.stringify({
      name: "piclaw-linux-run",
      version,
      platform: "linux",
      arch,
      bun: basename(process.execPath),
      builtAt: new Date().toISOString(),
    }, null, 2) + "\n");

    run("tar", ["-czf", payloadPath, "-C", workdir, bundleName]);
    await writeStubAndPayload(outputPath, buildSelfExtractingStub(bundleName, version, arch), payloadPath);
    chmodSync(outputPath, 0o755);

    const stat = statSync(outputPath);
    console.log(JSON.stringify({ artifact: outputPath, version, platform: `linux-${arch}`, bytes: stat.size }, null, 2));
  } finally {
    if (options.keepWorkdir) {
      console.error(`[linux-run] kept workdir: ${workdir}`);
    } else {
      rmSync(workdir, { recursive: true, force: true });
    }
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
