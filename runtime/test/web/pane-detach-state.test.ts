import { expect, test } from 'bun:test';

import {
  createPendingPaneOwnershipState,
  finalizePendingPaneOwnership,
  matchesPaneDetachClaim,
} from '../../web/src/panes/pane-detach-state.js';

test('createPendingPaneOwnershipState creates a pending owner claim', () => {
  expect(createPendingPaneOwnershipState({
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    ownerWindowId: 'pane-win-1',
    sourceWindowId: 'pane-main',
    label: 'Notes',
    now: '2026-03-31T21:00:00.000Z',
  })).toEqual({
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    ownerWindowId: 'pane-win-1',
    detachedAt: '2026-03-31T21:00:00.000Z',
    requestedAt: '2026-03-31T21:00:00.000Z',
    label: 'Notes',
    sourceWindowId: 'pane-main',
  });
});

test('matchesPaneDetachClaim only accepts exact pane ownership claims', () => {
  const pending = createPendingPaneOwnershipState({
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    ownerWindowId: 'pane-win-1',
    now: '2026-03-31T21:00:00.000Z',
  });

  expect(matchesPaneDetachClaim(pending, {
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-1',
  })).toBe(true);

  expect(matchesPaneDetachClaim(pending, {
    panePath: '/workspace/notes.md',
    paneInstanceId: 'pane-inst-1',
    paneWindowId: 'pane-win-2',
  })).toBe(false);
});

test('finalizePendingPaneOwnership turns a pending claim into detached ownership state', () => {
  const pending = createPendingPaneOwnershipState({
    panePath: 'piclaw://terminal',
    paneInstanceId: 'pane-inst-2',
    ownerWindowId: 'pane-win-2',
    label: 'Terminal',
    now: '2026-03-31T21:00:00.000Z',
  });

  expect(finalizePendingPaneOwnership(pending, '2026-03-31T21:05:00.000Z')).toEqual({
    panePath: 'piclaw://terminal',
    paneInstanceId: 'pane-inst-2',
    ownerWindowId: 'pane-win-2',
    detachedAt: '2026-03-31T21:05:00.000Z',
    label: 'Terminal',
  });
});
