// Registry of the currently open desktop panel (location lists, calendars).
// Opening a panel closes the previously open one so two panels never show at once.
let current: { key: string; close: () => void } | null = null;

export function openPanel(key: string, close: () => void) {
  if (current && current.key !== key) current.close();
  current = { key, close };
}

export function closePanel(key: string) {
  if (current?.key === key) current = null;
}
