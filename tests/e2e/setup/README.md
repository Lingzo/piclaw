# E2E Test Environment Setup

## Prerequisites

1. A running PiClaw instance (local or microvm)
2. An OpenCode free-tier API key
3. The instance's internal secret (for E2E auth bootstrap)

## Quick Start

### 1. Get an OpenCode API key

Sign up at https://opencode.ai and get a free API key (starts with `oc-`).

### 2. Configure the test instance

```bash
cd tests/e2e
OPENCODE_API_KEY=oc-your-key-here bun run setup/configure-test-instance.ts
```

This will:
- Write provider credentials to `~/.pi/agent/auth.json`
- Configure the active model in `~/.pi/agent/models.json`
- Validate API connectivity
- Run a test completion

### 3. Validate the full test environment

```bash
PICLAW_E2E_URL=http://localhost:3000 \
PICLAW_INTERNAL_SECRET=your-secret \
bun run setup/validate-test-config.ts
```

This checks:
- Instance reachability
- E2E auth bootstrap endpoint
- Model availability
- Agent can complete a turn

### 4. Run the tests

```bash
PICLAW_E2E_URL=http://localhost:3000 \
PICLAW_INTERNAL_SECRET=your-secret \
bun run test
```

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `OPENCODE_API_KEY` | Yes (setup) | — | OpenCode free-tier API key |
| `OPENCODE_BASE_URL` | No | `https://api.opencode.ai/v1` | OpenCode API endpoint |
| `OPENCODE_MODEL` | No | `opencode/gpt-4.1-nano` | Model to use for tests |
| `PICLAW_E2E_URL` | Yes (tests) | `http://localhost:3000` | PiClaw instance URL |
| `PICLAW_INTERNAL_SECRET` | Yes (tests) | — | Instance internal secret for auth |

## OpenCode Free Tier Models

OpenCode provides free access to several models. Recommended for testing:

| Model | Speed | Context | Best for |
|-------|-------|---------|----------|
| `opencode/gpt-4.1-nano` | Fast | 128k | Quick validation, E2E |
| `opencode/gpt-4.1-mini` | Medium | 128k | More complex scenarios |

The nano model is ideal for E2E tests — fast responses, minimal latency, sufficient for validating UX flows.

## CI Integration

For CI/CD pipelines, set these as secrets:

```yaml
env:
  OPENCODE_API_KEY: ${{ secrets.OPENCODE_API_KEY }}
  PICLAW_E2E_URL: http://localhost:3000
  PICLAW_INTERNAL_SECRET: ${{ secrets.PICLAW_INTERNAL_SECRET }}
```

## Microvm Target

For running against the microvm-ui-test instance:

```bash
PICLAW_E2E_URL=http://microvm-test:3000 \
PICLAW_INTERNAL_SECRET=$(cat /path/to/secret) \
bun run test
```

See the `microvm-ui-test` skill for provisioning a test instance.
