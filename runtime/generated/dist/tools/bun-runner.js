/**
 * tools/bun-runner.ts – Run workspace Bun scripts directly without a shell.
 *
 * Spawns the Bun runtime with a script path + argv array, keeps cwd/script
 * resolution inside the workspace, tracks the child process for abort/shutdown,
 * discards stdout, and captures stderr only.
 */
import { spawn } from "child_process";
import { existsSync, statSync } from "fs";
import path from "path";
import { WORKSPACE_DIR } from "../core/config.js";
import { killProcessTree, registerProcess, unregisterProcess } from "../utils/process-tracker.js";
const DEFAULT_TIMEOUT_SEC = 120;
const MAX_TIMEOUT_SEC = 3600;
const MAX_CAPTURED_STDERR_BYTES = 64 * 1024;
function resolveWorkspacePath(input) {
    const raw = String(input || "").trim();
    if (!raw)
        return null;
    const resolved = path.resolve(WORKSPACE_DIR, raw);
    const rel = path.relative(WORKSPACE_DIR, resolved);
    if (rel.startsWith("..") || path.isAbsolute(rel))
        return null;
    return resolved;
}
function displayWorkspacePath(absPath) {
    const rel = path.relative(WORKSPACE_DIR, absPath);
    if (!rel || rel === ".")
        return ".";
    return rel.split(path.sep).join("/");
}
function normalizeArgs(input) {
    if (input === undefined || input === null)
        return [];
    if (!Array.isArray(input)) {
        throw new Error("args must be an array of strings.");
    }
    return input.map((value, index) => {
        if (typeof value !== "string") {
            throw new Error(`args[${index}] must be a string.`);
        }
        if (value.includes("\0")) {
            throw new Error(`args[${index}] contains an invalid null byte.`);
        }
        return value;
    });
}
export function resolveBunScriptTarget(params) {
    const resolvedScript = resolveWorkspacePath(params.script);
    if (!resolvedScript) {
        throw new Error("script must resolve to a file inside the workspace.");
    }
    if (!existsSync(resolvedScript)) {
        throw new Error(`Script not found: ${params.script}`);
    }
    let scriptStats;
    try {
        scriptStats = statSync(resolvedScript);
    }
    catch {
        throw new Error(`Failed to stat script: ${params.script}`);
    }
    if (!scriptStats.isFile()) {
        throw new Error("script must be a file, not a directory.");
    }
    const resolvedCwd = params.cwd && String(params.cwd).trim()
        ? resolveWorkspacePath(params.cwd)
        : WORKSPACE_DIR;
    if (!resolvedCwd) {
        throw new Error("cwd must stay within the workspace.");
    }
    if (!existsSync(resolvedCwd)) {
        throw new Error(`cwd does not exist: ${params.cwd}`);
    }
    let cwdStats;
    try {
        cwdStats = statSync(resolvedCwd);
    }
    catch {
        throw new Error(`Failed to stat cwd: ${params.cwd}`);
    }
    if (!cwdStats.isDirectory()) {
        throw new Error("cwd must be a directory.");
    }
    const timeoutSec = Number.isFinite(params.timeoutSec)
        ? Math.min(Math.max(Number(params.timeoutSec), 1), MAX_TIMEOUT_SEC)
        : DEFAULT_TIMEOUT_SEC;
    return {
        scriptPath: resolvedScript,
        scriptDisplayPath: displayWorkspacePath(resolvedScript),
        cwd: resolvedCwd,
        cwdDisplayPath: displayWorkspacePath(resolvedCwd),
        args: normalizeArgs(params.args),
        timeoutSec,
    };
}
export async function runBunScript(params, signal) {
    const target = resolveBunScriptTarget(params);
    const bunPath = process.execPath || "bun";
    return await new Promise((resolve, reject) => {
        let settled = false;
        let child = null;
        let timedOut = false;
        let aborted = false;
        let stderrBytes = 0;
        let stderrTruncated = false;
        const stderrChunks = [];
        const cleanup = (timeoutHandle) => {
            if (timeoutHandle)
                clearTimeout(timeoutHandle);
            if (signal)
                signal.removeEventListener("abort", onAbort);
            if (child?.pid)
                unregisterProcess(child.pid);
        };
        const finish = (result) => {
            if (settled)
                return;
            settled = true;
            resolve(result);
        };
        const fail = (error, timeoutHandle) => {
            if (settled)
                return;
            settled = true;
            cleanup(timeoutHandle);
            reject(error);
        };
        const onAbort = () => {
            aborted = true;
            if (child?.pid)
                killProcessTree(child.pid);
        };
        const timeoutHandle = setTimeout(() => {
            timedOut = true;
            if (child?.pid)
                killProcessTree(child.pid);
        }, target.timeoutSec * 1000);
        if (signal) {
            if (signal.aborted) {
                onAbort();
            }
            else {
                signal.addEventListener("abort", onAbort, { once: true });
            }
        }
        child = spawn(bunPath, [target.scriptPath, ...target.args], {
            cwd: target.cwd,
            detached: true,
            env: process.env,
            stdio: ["ignore", "ignore", "pipe"],
        });
        if (child.pid)
            registerProcess(child.pid);
        child.stderr?.on("data", (chunk) => {
            const text = Buffer.isBuffer(chunk) ? chunk.toString("utf8") : String(chunk);
            stderrBytes += Buffer.byteLength(text, "utf8");
            const currentBytes = stderrChunks.reduce((sum, entry) => sum + Buffer.byteLength(entry, "utf8"), 0);
            const remaining = MAX_CAPTURED_STDERR_BYTES - currentBytes;
            if (remaining <= 0) {
                stderrTruncated = true;
                return;
            }
            if (Buffer.byteLength(text, "utf8") > remaining) {
                stderrTruncated = true;
                stderrChunks.push(Buffer.from(text, "utf8").subarray(0, remaining).toString("utf8"));
                return;
            }
            stderrChunks.push(text);
        });
        child.on("error", (error) => {
            fail(error, timeoutHandle);
        });
        child.on("close", (exitCode) => {
            cleanup(timeoutHandle);
            if (aborted || signal?.aborted) {
                reject(new Error("aborted"));
                return;
            }
            if (timedOut) {
                reject(new Error(`timeout:${target.timeoutSec}`));
                return;
            }
            finish({
                ...target,
                bunPath,
                exitCode,
                stderr: stderrChunks.join(""),
                stderrBytes,
                stderrTruncated,
            });
        });
    });
}
