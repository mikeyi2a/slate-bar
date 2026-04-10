/** localStorage key for “where this block goes” (settings UI + copy payload). */
export const PLACEMENT_STORAGE_KEY = 'slate-bar-placement'

export function readPlacementFromStorage(): string {
  if (typeof localStorage === 'undefined') return ''
  return localStorage.getItem(PLACEMENT_STORAGE_KEY)?.trim() ?? ''
}

export function writePlacementToStorage(value: string): void {
  if (typeof localStorage === 'undefined') return
  const t = value.trim()
  if (t) localStorage.setItem(PLACEMENT_STORAGE_KEY, t)
  else localStorage.removeItem(PLACEMENT_STORAGE_KEY)
}

/** When loading from code: persist so settings UI and Copy stay in sync. */
export function syncPlacementFromLoadOptions(placement: string | undefined): void {
  if (typeof localStorage === 'undefined') return
  if (placement === undefined) return
  const t = placement.trim()
  if (t) localStorage.setItem(PLACEMENT_STORAGE_KEY, t)
  else localStorage.removeItem(PLACEMENT_STORAGE_KEY)
}
