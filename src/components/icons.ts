const paths: Record<string, string> = {
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  diagonal: '<path d="M6 18 18 6M6 6h12v12"/>',
  down: '<path d="M12 4v16m-6-6 6 6 6-6"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6.5c4 2 10 2 14 0M5 17.5c4-2 10-2 14 0"/>',
  gamepad: '<path d="M7 7h10c3 0 5 10 3 11-2 1-4-3-5-3H9c-1 0-3 4-5 3C2 17 4 7 7 7Z"/><path d="M8 9v5m-2.5-2.5h5M16 10h.01M18 13h.01"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M21 20v-2a6 6 0 0 0-3-5"/>',
  trophy: '<path d="M8 3h8v6a4 4 0 0 1-8 0V3ZM8 5H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4m-4 1v7m-4 1h8"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6 6-2Z"/>',
  chart: '<path d="M4 20h16M7 16v-4m5 4V4m5 12V8"/>',
  spark: '<path d="m12 3 2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3Z"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3m-4 5v2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18m-12 5h6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
};

export function icon(name: string, className = ''): string {
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] ?? paths.globe}</svg>`;
}
