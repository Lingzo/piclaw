import { expect, test } from "bun:test";

import { estimateContextTokensFromSession } from "../../src/agent-pool/compaction.js";

function makeSession(messages: any[], usageTokens?: number): any {
  return {
    getContextUsage: usageTokens === undefined ? undefined : () => ({ tokens: usageTokens }),
    sessionManager: {
      buildSessionContext: () => ({ messages }),
    },
  };
}

test("estimateContextTokensFromSession trusts native usage before compaction", () => {
  const session = makeSession([
    { role: "user", content: [{ type: "text", text: "hello" }] },
    { role: "assistant", content: [{ type: "text", text: "hi" }] },
  ], 123_456);

  expect(estimateContextTokensFromSession(session)).toBe(123_456);
});

test("estimateContextTokensFromSession ignores stale assistant usage after compaction", () => {
  const stalePreCompactionUsage = {
    input: 220_000,
    output: 8_000,
    cacheRead: 0,
    cacheWrite: 0,
    totalTokens: 228_000,
  };
  const session = makeSession([
    {
      role: "compactionSummary",
      summary: "short compacted summary",
      tokensBefore: 228_000,
    },
    {
      role: "assistant",
      content: [{ type: "text", text: "kept assistant message" }],
      usage: stalePreCompactionUsage,
      stopReason: "stop",
    },
    {
      role: "toolResult",
      content: [{ type: "text", text: "small result" }],
    },
  ], 230_000);

  const estimated = estimateContextTokensFromSession(session);

  expect(estimated).toBeLessThan(100);
  expect(estimated).not.toBe(230_000);
});
