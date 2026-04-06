/**
 * agent-pool/session.ts – pi-agent session creation and directory management.
 *
 * Handles the setup of per-chat agent sessions:
 *   - Creates the session directory under SESSIONS_DIR for each chat JID.
 *   - Configures the resource loader with workspace extensions and skills.
 *   - Uses SessionManager.continueRecent() to resume from the most recent
 *     session tree leaf (conversation context persistence).
 *
 * Consumers:
 *   - agent-pool.ts calls createDefaultSession() to initialise or replace
 *     the agent session for a chat.
 *   - ensureSessionDir() is also used by agent-control/handlers/session.ts.
 */

import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import {
  type AgentSession,
  type ExtensionFactory,
  createAgentSession,
  getAgentDir,
  SessionManager,
  type AuthStorage,
  type ModelRegistry,
  type SettingsManager,
} from "@mariozechner/pi-coding-agent";

import { SESSIONS_DIR, WORKSPACE_DIR } from "../core/config.js";
import { bindImmediateToolActivation } from "./tool-activation-live-update.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

type AgentSessionCreateOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tools: any[];
  extensionFactories?: ExtensionFactory[];
};

/** Ensure the session directory exists for a chat and return its path. */
export function ensureSessionDir(chatJid: string): string {
  const chatSessionDir = join(SESSIONS_DIR, sanitiseJid(chatJid));
  mkdirSync(chatSessionDir, { recursive: true });
  return chatSessionDir;
}

/** Ensure a named auxiliary session directory exists for a chat and return its path. */
export function ensureNamedSessionDir(chatJid: string, name: string): string {
  const dir = join(
    SESSIONS_DIR,
    `${sanitiseJid(chatJid)}__${sanitiseJid(name)}`,
  );
  mkdirSync(dir, { recursive: true });
  return dir;
}

/**
 * Create a fully-configured pi-agent session for the given chat.
 * Loads workspace resources (AGENTS.md, skills, extensions, prompt templates)
 * and resumes the most recent session tree.
 */
export async function createSessionInDir(
  sessionDir: string,
  options: {
    authStorage: AuthStorage;
    modelRegistry: ModelRegistry;
    settingsManager: SettingsManager;
    tools: NonNullable<AgentSessionCreateOptions["tools"]>;
    extensionFactories?: ExtensionFactory[];
  },
): Promise<AgentSession> {
  const result = await createAgentSession({
    cwd: WORKSPACE_DIR,
    agentDir: getAgentDir(),
    sessionManager: SessionManager.continueRecent(WORKSPACE_DIR, sessionDir),
    authStorage: options.authStorage,
    modelRegistry: options.modelRegistry,
    settingsManager: options.settingsManager,
    tools: options.tools,
  });

  const session = result.session;
  const runtime = (session as any).runtime ?? session;
  bindImmediateToolActivation(session as any);
  return runtime;
}

export async function createDefaultSession(
  chatJid: string,
  options: {
    authStorage: AuthStorage;
    modelRegistry: ModelRegistry;
    settingsManager: SettingsManager;
    tools: NonNullable<AgentSessionCreateOptions["tools"]>;
    extensionFactories?: ExtensionFactory[];
  },
): Promise<AgentSession> {
  const chatSessionDir = ensureSessionDir(chatJid);
  return createSessionInDir(chatSessionDir, options);
}

/** Replace characters that are unsafe for filesystem paths. */
export function sanitiseJid(jid: string): string {
  return jid.replace(/[^a-zA-Z0-9._-]/g, "_");
}
