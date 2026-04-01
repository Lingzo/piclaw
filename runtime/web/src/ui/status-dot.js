// @ts-nocheck

export function buildTurnDotClass({ steerQueued = false, pulsing = false } = {}) {
    const classes = ['turn-dot'];
    if (steerQueued) classes.push('turn-dot-queued');
    if (pulsing) classes.push('turn-dot-pulsing');
    return classes.join(' ');
}

export function buildComposeStatusDotClass({ pulsing = false } = {}) {
    const classes = ['compose-inline-status-dot'];
    if (pulsing) classes.push('compose-inline-status-dot-pulsing');
    return classes.join(' ');
}

export function shouldShowRunningStatusDot(status, { isLastActivity = false } = {}) {
    if (isLastActivity) return false;
    const type = typeof status?.type === 'string' ? status.type : '';
    const hasToolMetadata = Boolean(
        (typeof status?.tool_name === 'string' && status.tool_name.trim())
        || status?.tool_args,
    );
    if (hasToolMetadata) return false;
    return type !== 'tool_call' && type !== 'tool_status';
}
