import type { ElectrobunConfig } from "electrobun";

import packageJson from "./package.json" with { type: "json" };

export default {
  app: {
    name: "PiClaw",
    identifier: "com.rcarmo.piclaw",
    version: packageJson.version,
    description: "Desktop shell for the PiClaw self-hosted AI workspace.",
  },
  runtime: {
    exitOnLastWindowClosed: true,
    mode: "piclaw-desktop-shell",
  },
  build: {
    bun: {
      entrypoint: "runtime/desktop/electrobun-main.ts",
      sourcemap: "linked",
    },
    copy: {
      "runtime/src": "runtime/src",
      "runtime/extensions/README.md": "runtime/extensions/README.md",
      "runtime/extensions/browser": "runtime/extensions/browser",
      "runtime/extensions/experimental": "runtime/extensions/experimental",
      "runtime/extensions/integrations": "runtime/extensions/integrations",
      "runtime/extensions/platform": "runtime/extensions/platform",
      "runtime/extensions/viewers": "runtime/extensions/viewers",
      "runtime/skills": "runtime/skills",
      "runtime/vendor": "runtime/vendor",
      "runtime/docs": "runtime/docs",
      "runtime/web/static": "runtime/web/static",
      "skel": "skel",
      "README.md": "README.md",
      "LICENSE": "LICENSE",
      "VERSION": "VERSION",
      "package.json": "package.json",
    },
    watch: [
      "runtime/desktop",
      "runtime/src",
      "runtime/extensions",
      "runtime/web/static",
      "skel",
    ],
    mac: {
      bundleCEF: false,
      defaultRenderer: "native",
      createDmg: false,
    },
    win: {
      bundleCEF: false,
      defaultRenderer: "native",
    },
    linux: {
      bundleCEF: false,
      defaultRenderer: "native",
    },
  },
  release: {
    generatePatch: false,
  },
} satisfies ElectrobunConfig;
