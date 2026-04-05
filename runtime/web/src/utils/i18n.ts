import { useState, useEffect } from '../vendor/preact-htm.js';

export type Locale = 'en' | 'zh';

export interface Translations {
  appTitle: string;
  chat: string;
  workspace: string;
  settings: string;
  search: string;
  searchPlaceholder: string;
  send: string;
  attach: string;
  attachFile: string;
  delete: string;
  rename: string;
  branch: string;
  newChat: string;
  connected: string;
  disconnected: string;
  connecting: string;
  thinking: string;
  typing: string;
  loading: string;
  error: string;
  retry: string;
  cancel: string;
  confirm: string;
  close: string;
  save: string;
  open: string;
  edit: string;
  copy: string;
  paste: string;
  cut: string;
  undo: string;
  redo: string;
  selectAll: string;
  language: string;
  theme: string;
  dark: string;
  light: string;
  notifications: string;
  enable: string;
  disable: string;
  agents: string;
  model: string;
  context: string;
  queue: string;
  clearQueue: string;
  stopAgent: string;
  resumeAgent: string;
  compact: string;
  fork: string;
  prune: string;
  restore: string;
  newBranch: string;
  renameBranch: string;
  deleteBranch: string;
  files: string;
  folders: string;
  upload: string;
  download: string;
  preview: string;
  terminal: string;
  editor: string;
  vnc: string;
  compose: string;
  timeline: string;
  sidepanel: string;
  followup: string;
  queued: string;
  more: string;
  less: string;
  showLess: string;
  showMore: string;
  noMoreMessages: string;
  scrollToBottom: string;
  back: string;
  forward: string;
  refresh: string;
  minimize: string;
  maximize: string;
  closeTab: string;
  openInNewTab: string;
  pin: string;
  unpin: string;
  unsavedChanges: string;
  unsavedChangesMessage: string;
  confirmDelete: string;
  confirmOverwrite: string;
  fileTooLarge: string;
  unsupportedFileType: string;
  connectionError: string;
  sessionExpired: string;
  loginRequired: string;
  welcome: string;
  welcomeMessage: string;
  typeMessage: string;
  sendMessage: string;
  agentsThinking: string;
  agentResponse: string;
  autoCompaction: string;
  manualCompaction: string;
  compactionNote: string;
  BTW: string;
  BTWRetry: string;
  BTWInject: string;
  chatOnly: string;
  renamingBranch: string;
  renameThisBranch: string;
  pruneThisBranch: string;
  newFile: string;
  upload: string;
  showHiddenFiles: string;
  hideHiddenFiles: string;
  openTerminalInTab: string;
  openVncInTab: string;
  showTerminalDock: string;
  hideTerminalDock: string;
  newSession: string;
  new: string;
  injectQueuedFollowup: string;
  cancelQueuedMessage: string;
  clearAttachments: string;
  openChatOnlyWindow: string;
  deleteThisBranch: string;
  searchScope: string;
  shareLocation: string;
  attachFile: string;
  sendEnter: string;
  renameCurrent: string;
  deleteCurrent: string;
  renameBranchHandle: string;
  deletePruneBranch: string;
  deleteFile: string;
  deleteMessage: string;
}

const translations: Record<Locale, Translations> = {
  en: {
    appTitle: 'PiClaw',
    chat: 'Chat',
    workspace: 'Workspace',
    settings: 'Settings',
    search: 'Search',
    searchPlaceholder: 'Search messages...',
    send: 'Send',
    attach: 'Attach',
    attachFile: 'Attach file',
    delete: 'Delete',
    rename: 'Rename',
    branch: 'Branch',
    newChat: 'New Chat',
    connected: 'Connected',
    disconnected: 'Disconnected',
    connecting: 'Connecting...',
    thinking: 'Thinking',
    typing: 'Typing',
    loading: 'Loading...',
    error: 'Error',
    retry: 'Retry',
    cancel: 'Cancel',
    confirm: 'Confirm',
    close: 'Close',
    save: 'Save',
    open: 'Open',
    edit: 'Edit',
    copy: 'Copy',
    paste: 'Paste',
    cut: 'Cut',
    undo: 'Undo',
    redo: 'Redo',
    selectAll: 'Select All',
    language: 'Language',
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',
    notifications: 'Notifications',
    enable: 'Enable',
    disable: 'Disable',
    agents: 'Agents',
    model: 'Model',
    context: 'Context',
    queue: 'Queue',
    clearQueue: 'Clear Queue',
    stopAgent: 'Stop Agent',
    resumeAgent: 'Resume Agent',
    compact: 'Compact',
    fork: 'Fork',
    prune: 'Prune',
    restore: 'Restore',
    newBranch: 'New Branch',
    renameBranch: 'Rename Branch',
    deleteBranch: 'Delete Branch',
    files: 'Files',
    folders: 'Folders',
    upload: 'Upload',
    download: 'Download',
    preview: 'Preview',
    terminal: 'Terminal',
    editor: 'Editor',
    vnc: 'VNC',
    compose: 'Compose',
    timeline: 'Timeline',
    sidepanel: 'Side Panel',
    followup: 'Follow-up',
    queued: 'Queued',
    more: 'More',
    less: 'Less',
    showLess: 'Show Less',
    showMore: 'Show More',
    noMoreMessages: 'No more messages',
    scrollToBottom: 'Scroll to bottom',
    back: 'Back',
    forward: 'Forward',
    refresh: 'Refresh',
    minimize: 'Minimize',
    maximize: 'Maximize',
    closeTab: 'Close Tab',
    openInNewTab: 'Open in New Tab',
    pin: 'Pin',
    unpin: 'Unpin',
    unsavedChanges: 'Unsaved Changes',
    unsavedChangesMessage: 'You have unsaved changes. Are you sure you want to leave?',
    confirmDelete: 'Are you sure you want to delete this?',
    confirmOverwrite: 'This will overwrite existing data. Continue?',
    fileTooLarge: 'File is too large',
    unsupportedFileType: 'Unsupported file type',
    connectionError: 'Connection error',
    sessionExpired: 'Session expired',
    loginRequired: 'Login required',
    welcome: 'Welcome',
    welcomeMessage: 'How can I help you today?',
    typeMessage: 'Type a message...',
    sendMessage: 'Send message',
    agentsThinking: 'Agents are thinking...',
    agentResponse: 'Agent response',
    autoCompaction: 'Auto Compaction',
    manualCompaction: 'Manual Compaction',
    compactionNote: 'Add a note for compaction focus',
    BTW: 'BTW',
    BTWRetry: 'Retry',
    BTWInject: 'Inject',
    chatOnly: 'Chat only',
    renamingBranch: 'Renaming...',
    renameThisBranch: 'Rename this branch',
    pruneThisBranch: 'Prune this branch agent',
    newFile: 'New file',
    upload: 'Upload files',
    showHiddenFiles: 'Show hidden files',
    hideHiddenFiles: 'Hide hidden files',
    openTerminalInTab: 'Open terminal in tab',
    openVncInTab: 'Open VNC in tab',
    showTerminalDock: 'Show terminal dock',
    hideTerminalDock: 'Hide terminal dock',
    newSession: 'New',
    new: 'New',
    injectQueuedFollowup: 'Inject queued follow-up as steer',
    cancelQueuedMessage: 'Cancel queued message',
    clearAttachments: 'Clear all attachments and references',
    openChatOnlyWindow: 'Open this chat in a new chat-only window',
    deleteThisBranch: 'Delete this branch',
    searchScope: 'Search scope',
    shareLocation: 'Share location',
    attachFile: 'Attach file',
    sendEnter: 'Send (Enter)',
    renameCurrent: 'Rename',
    deleteCurrent: 'Delete',
    renameBranchHandle: 'Rename the current branch handle',
    deletePruneBranch: 'Delete (prune) current agent/session branch',
    deleteFile: 'Delete file',
    deleteMessage: 'Delete message',
  },
  zh: {
    appTitle: 'PiClaw',
    chat: '聊天',
    workspace: '工作区',
    settings: '设置',
    search: '搜索',
    searchPlaceholder: '搜索消息...',
    send: '发送',
    attach: '附件',
    attachFile: '添加文件',
    delete: '删除',
    rename: '重命名',
    branch: '分支',
    newChat: '新聊天',
    connected: '已连接',
    disconnected: '已断开',
    connecting: '连接中...',
    thinking: '思考中',
    typing: '输入中',
    loading: '加载中...',
    error: '错误',
    retry: '重试',
    cancel: '取消',
    confirm: '确认',
    close: '关闭',
    save: '保存',
    open: '打开',
    edit: '编辑',
    copy: '复制',
    paste: '粘贴',
    cut: '剪切',
    undo: '撤销',
    redo: '重做',
    selectAll: '全选',
    language: '语言',
    theme: '主题',
    dark: '深色',
    light: '浅色',
    notifications: '通知',
    enable: '启用',
    disable: '禁用',
    agents: '代理',
    model: '模型',
    context: '上下文',
    queue: '队列',
    clearQueue: '清空队列',
    stopAgent: '停止代理',
    resumeAgent: '恢复代理',
    compact: '压缩',
    fork: '分叉',
    prune: '修剪',
    restore: '恢复',
    newBranch: '新建分支',
    renameBranch: '重命名分支',
    deleteBranch: '删除分支',
    files: '文件',
    folders: '文件夹',
    upload: '上传',
    download: '下载',
    preview: '预览',
    terminal: '终端',
    editor: '编辑器',
    vnc: 'VNC',
    compose: '输入',
    timeline: '时间线',
    sidepanel: '侧边栏',
    followup: '跟进',
    queued: '排队中',
    more: '更多',
    less: '更少',
    showLess: '收起更多',
    showMore: '展开更多',
    noMoreMessages: '没有更多消息',
    scrollToBottom: '滚动到底部',
    back: '返回',
    forward: '前进',
    refresh: '刷新',
    minimize: '最小化',
    maximize: '最大化',
    closeTab: '关闭标签',
    openInNewTab: '在新标签页打开',
    pin: '固定',
    unpin: '取消固定',
    unsavedChanges: '未保存的更改',
    unsavedChangesMessage: '您有未保存的更改。确定要离开吗？',
    confirmDelete: '确定要删除吗？',
    confirmOverwrite: '这将覆盖现有数据。继续？',
    fileTooLarge: '文件太大',
    unsupportedFileType: '不支持的文件类型',
    connectionError: '连接错误',
    sessionExpired: '会话已过期',
    loginRequired: '需要登录',
    welcome: '欢迎',
    welcomeMessage: '今天有什么可以帮您的？',
    typeMessage: '输入消息...',
    sendMessage: '发送消息',
    agentsThinking: '代理正在思考...',
    agentResponse: '代理回复',
    autoCompaction: '自动压缩',
    manualCompaction: '手动压缩',
    compactionNote: '添加压缩备注以集中注意力',
    BTW: '顺便说一句',
    BTWRetry: '重试',
    BTWInject: '注入',
    chatOnly: '仅聊天',
    renamingBranch: '重命名中...',
    renameThisBranch: '重命名此分支',
    pruneThisBranch: '修剪此分支代理',
    newFile: '新建文件',
    upload: '上传文件',
    showHiddenFiles: '显示隐藏文件',
    hideHiddenFiles: '隐藏显示文件',
    openTerminalInTab: '在标签页打开终端',
    openVncInTab: '在标签页打开VNC',
    showTerminalDock: '显示终端面板',
    hideTerminalDock: '隐藏终端面板',
    newSession: '新建',
    new: '新建',
    injectQueuedFollowup: '注入排队的跟进作为转向',
    cancelQueuedMessage: '取消排队的消息',
    clearAttachments: '清除所有附件和引用',
    openChatOnlyWindow: '在新聊天窗口中打开此聊天',
    deleteThisBranch: '删除此分支',
    searchScope: '搜索范围',
    shareLocation: '分享位置',
    attachFile: '附加文件',
    sendEnter: '发送 (Enter)',
    renameCurrent: '重命名',
    deleteCurrent: '删除',
    renameBranchHandle: '重命名当前分支',
    deletePruneBranch: '删除（修剪）当前代理/会话分支',
    deleteFile: '删除文件',
    deleteMessage: '删除消息',
  },
};

const LOCALE_STORAGE_KEY = 'piclaw_locale';

function getStoredLocale(): Locale {
  if (typeof localStorage === 'undefined') return 'en';
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === 'en' || stored === 'zh') return stored;
  const browserLang = navigator?.language?.toLowerCase() || '';
  if (browserLang.startsWith('zh')) return 'zh';
  return 'en';
}

function storeLocale(locale: Locale): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

let currentLocale: Locale = getStoredLocale();

export function getLocale(): Locale {
  return currentLocale;
}

export function setLocale(locale: Locale): void {
  currentLocale = locale;
  storeLocale(locale);
  window.dispatchEvent(new CustomEvent('localechange', { detail: locale }));
}

export function t(key: keyof Translations): string {
  return translations[currentLocale][key] || translations['en'][key] || key;
}

export function useLocale(): [Locale, (locale: Locale) => void] {
  const [locale, setLocaleState] = useState<Locale>(currentLocale);

  useEffect(() => {
    const handler = (e: Event) => {
      const newLocale = (e as CustomEvent<Locale>).detail;
      setLocaleState(newLocale);
    };
    window.addEventListener('localechange', handler);
    return () => window.removeEventListener('localechange', handler);
  }, []);

  return [locale, setLocaleState];
}

export function useTranslation() {
  const [locale] = useLocale();
  return {
    t: (key: keyof Translations) => translations[locale][key] || translations['en'][key] || key,
    locale,
  };
}

export const languages: { code: Locale; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
];
