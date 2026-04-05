# AGENTS.md - PiClaw Developer Guide

Guidelines for agentic coding agents operating in the PiClaw repository.

## Project Overview

PiClaw is a personal coding assistant using Bun and TypeScript with web-based IDE, WhatsApp messaging, and AI agent orchestration.

## Directory Structure

```
piclaw/
├── runtime/                 # Main source code
│   ├── src/                # Backend (TypeScript)
│   ├── web/src/            # Frontend (Preact + htm)
│   ├── test/               # Test files (Bun test)
│   ├── extensions/         # Extension modules
│   ├── skills/             # Skill definitions
│   ├── vendor/             # Vendored dependencies
│   └── docs/               # API documentation
├── scripts/                # Build scripts
└── workitems/              # Task tracking
```

## Build/Lint/Test Commands

```bash
# Install dependencies
bun install

# Dev mode (watch)
bun run dev

# Build, typecheck, lint
bun run build
bun run typecheck
bun run lint

# Run all tests
bun run test

# Run single test file
bun test test/web/app-shell-bootstrap.test.ts

# Run single test by name
bun test --test-name-pattern "configureMarked" test/web/app-shell-bootstrap.test.ts

# Run with coverage
bun run test:coverage

# Run optional browser isolation tests
bun run test:optional:browser-isolation

# Full quality suite
bun run quality
```

Note: Tests use `PICLAW_DB_IN_MEMORY=1` for in-memory database.

## Code Style

### TypeScript

- Target: ES2022, Module: ES2022 with bundler resolution, Strict mode enabled
- Types: `bun-types` for runtime

### Imports

- Use ES modules with `.js` extensions (required for TypeScript)
- Group: external → internal → relative

```typescript
import { existsSync } from "node:fs";
import { type AgentControlCommand } from "./agent-control/index.js";
import { createLogger } from "./utils/logger.js";
```

### Naming

- Files: kebab-case (`agent-pool.ts`)
- Classes: PascalCase (`AgentPool`)
- Functions/variables: camelCase (`createLogger`)
- Constants: SCREAMING_SNAKE_CASE (`IDLE_TTL`)
- Interfaces: PascalCase, avoid `I` prefix (`AppApiSurface`)

### Types

- Explicit return types for public functions
- `type` for simple aliases, `interface` for complex types
- Avoid `any`; use `unknown` for unknown types
- Use optional properties (`?`) appropriately

### Error Handling

- Try/catch with meaningful names (`err`, `error`)
- Log errors with context using logger
- Empty catch blocks only for expected no-op cases

```typescript
main().catch((err) => {
  log.error("Fatal runtime error", { err });
  process.exit(1);
});
```

### Logging

- Use `createLogger` utility with structured logging
- Include context objects: `log.error("Failed", { chatJid, err })`

### Code Organization

- JSDoc comments for public APIs
- Keep files focused (single responsibility)
- Use barrel files (`index.ts`) for clean exports
- Separate: `src/` backend, `web/src/` frontend

### Web/Frontend (Preact + htm)

- Use `htm` for JSX-like syntax
- Named exports for components
- Preact hooks for state management

### Testing

- Bun's built-in test runner (`bun:test`)
- Tests in `test/` with `.test.ts` suffix
- Optional tests: `.optional.test.ts`
- Use `expect` from `bun:test`

```typescript
import { expect, test } from 'bun:test';

test('configureMarked sets markdown defaults', () => {
  let captured: Record<string, unknown> | null = null;
  configureMarked({
    setOptions: (options) => { captured = options; },
  });
  expect(captured).toEqual({ breaks: true, gfm: true });
});
```

### ESLint Rules

- Extends TypeScript recommended
- Allows `@typescript-eslint/ban-ts-comment` and `no-explicit-any`
- Unused vars must start with `_`
- Disallows useless assignments
- Allows empty catch blocks

### Dependencies

- Pinned exact versions only (no `^`/`~`)
- Vendor third-party code for offline operation

## Key Files

- `runtime/src/index.ts` - Entry point
- `runtime/src/runtime.ts` - Main runtime
- `runtime/src/agent-pool.ts` - Agent session management
- `runtime/web/src/app.ts` - Frontend entry
- `runtime/eslint.config.js` - ESLint config
- `runtime/tsconfig.json` - TypeScript config
