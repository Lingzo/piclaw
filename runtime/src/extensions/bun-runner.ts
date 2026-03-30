/**
 * bun-runner – registers a Bun script execution tool.
 *
 * Runs workspace Bun scripts directly (no shell), with optional argv and cwd.
 * Stdout is discarded; stderr is captured and returned.
 */

import { Type, type Static } from "@sinclair/typebox";
import type { AgentToolResult, ExtensionAPI, ExtensionFactory } from "@mariozechner/pi-coding-agent";

import { runBunScript } from "../tools/bun-runner.js";

const BunRunSchema = Type.Object({
  script: Type.String({ description: "Workspace-relative script file to execute with Bun (for example `runtime/scripts/foo.ts`)." }),
  args: Type.Optional(Type.Array(Type.String(), { description: "Arguments passed to the script. No shell parsing is performed." })),
  cwd: Type.Optional(Type.String({ description: "Working directory relative to the workspace (defaults to the workspace root)." })),
  timeout_sec: Type.Optional(Type.Integer({ description: "Timeout in seconds.", minimum: 1, maximum: 3600 })),
});

type BunRunParams = Static<typeof BunRunSchema>;

const HINT = [
  "## Direct Bun scripts",
  "Use bun_run to execute a workspace Bun script directly without a shell.",
  "Pass script arguments as an array; do not rely on shell features like pipes or redirects.",
  "Scripts should write structured output to files themselves; bun_run only captures stderr.",
].join("\n");

function formatArgs(args: string[]): string {
  if (args.length === 0) return "(none)";
  return args.map((arg) => JSON.stringify(arg)).join(" ");
}

function buildResultText(result: {
  scriptDisplayPath: string;
  cwdDisplayPath: string;
  args: string[];
  exitCode: number | null;
  stderr: string;
  stderrTruncated: boolean;
}): string {
  const status = result.exitCode === 0
    ? `bun_run completed successfully for ${result.scriptDisplayPath}.`
    : `bun_run finished with exit code ${result.exitCode ?? "unknown"} for ${result.scriptDisplayPath}.`;
  const lines = [
    status,
    `cwd: ${result.cwdDisplayPath}`,
    `args: ${formatArgs(result.args)}`,
    "stdout: discarded",
  ];

  if (result.stderr) {
    lines.push("stderr:");
    lines.push(result.stderrTruncated ? `${result.stderr}\n[stderr truncated]` : result.stderr);
  } else {
    lines.push("stderr: (empty)");
  }

  return lines.join("\n");
}

export const bunRunner: ExtensionFactory = (pi: ExtensionAPI) => {
  pi.on("before_agent_start", async (event) => ({
    systemPrompt: `${event.systemPrompt}\n\n${HINT}`,
  }));

  pi.registerTool({
    name: "bun_run",
    label: "bun_run",
    description: "Run a workspace Bun script directly with optional arguments and cwd. No shell parsing, piping, or redirects; stdout is discarded and only stderr is captured.",
    promptSnippet: "bun_run: execute a workspace Bun script directly with optional arguments and cwd, capturing stderr only.",
    parameters: BunRunSchema,
    async execute(
      _toolCallId: string,
      params: BunRunParams,
      signal?: AbortSignal,
    ): Promise<AgentToolResult<Record<string, unknown>>> {
      try {
        const result = await runBunScript({
          script: params.script,
          args: params.args,
          cwd: params.cwd,
          timeoutSec: params.timeout_sec,
        }, signal);

        return {
          content: [{ type: "text", text: buildResultText(result) }],
          details: {
            ok: result.exitCode === 0,
            script: result.scriptDisplayPath,
            cwd: result.cwdDisplayPath,
            args: result.args,
            bun_path: result.bunPath,
            exit_code: result.exitCode,
            stderr: result.stderr,
            stderr_bytes: result.stderrBytes,
            stderr_truncated: result.stderrTruncated,
          },
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        const timedOut = message.startsWith("timeout:");
        const aborted = message === "aborted";
        return {
          content: [{
            type: "text",
            text: timedOut
              ? `bun_run timed out after ${params.timeout_sec ?? 120}s while running ${params.script}.`
              : aborted
                ? `bun_run was aborted while running ${params.script}.`
                : `bun_run failed: ${message}`,
          }],
          details: {
            ok: false,
            script: params.script,
            cwd: params.cwd || ".",
            args: Array.isArray(params.args) ? params.args : [],
            timeout_sec: params.timeout_sec ?? 120,
            timed_out: timedOut,
            aborted,
            error: message,
          },
        };
      }
    },
  });
};
