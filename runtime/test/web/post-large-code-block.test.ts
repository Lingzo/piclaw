import { expect, test } from 'bun:test';

import { getLargeCodeBlockMetadata } from '../../web/src/components/post.js';

test('getLargeCodeBlockMetadata collapses large code/tool output blocks with useful metadata', () => {
  const text = Array.from({ length: 60 }, (_, index) => `line ${index + 1}`).join('\n');
  expect(getLargeCodeBlockMetadata(text, { lineThreshold: 40, previewLines: 12 })).toEqual({
    shouldCollapse: true,
    lineCount: 60,
    byteLength: new TextEncoder().encode(text).byteLength,
    visibleLines: 12,
    omittedLines: 48,
  });
});

test('getLargeCodeBlockMetadata keeps small blocks inline', () => {
  expect(getLargeCodeBlockMetadata('small\nblock', { lineThreshold: 40, byteThreshold: 1024 })).toMatchObject({
    shouldCollapse: false,
    lineCount: 2,
    omittedLines: 0,
  });
});
