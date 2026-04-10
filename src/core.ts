import { createToolbar, type ToolbarHandle, type Variant } from './toolbar'
import { removePreview } from './preview'
import type { SlateBarLoadOptions } from './load-options'
import { syncPlacementFromLoadOptions } from './placement-storage'

export type { SlateBarLoadOptions } from './load-options'
export type { Variant }

const HOST_ID = 'slate-bar-root'

let handle: ToolbarHandle | null = null
let hostEl: HTMLElement | null = null

export const SlateBar = {
  load(variants: Variant[], options?: SlateBarLoadOptions): void {
    if (typeof window === 'undefined') return
    if (!variants.length) return

    if (options?.placement !== undefined) {
      syncPlacementFromLoadOptions(options.placement)
    }

    // If already mounted, tear down first so we can re-init with new variants
    if (handle) SlateBar.destroy()

    hostEl = document.createElement('div')
    hostEl.id = HOST_ID
    // Keep it out of the normal flow and invisible to screen readers for the host page
    hostEl.style.position = 'fixed'
    hostEl.style.zIndex = '2147483647'
    hostEl.style.pointerEvents = 'none'
    document.body.appendChild(hostEl)

    const shadow = hostEl.attachShadow({ mode: 'open' })
    handle = createToolbar(variants, shadow, options)
    shadow.appendChild(handle.root)
  },

  destroy(): void {
    if (typeof window === 'undefined') return
    if (handle) {
      handle.destroy()
      handle = null
    }
    if (hostEl) {
      hostEl.remove()
      hostEl = null
    }
    removePreview()
  },
}
