import { useEffect } from 'react'
import { SlateBar, type Variant } from './core'
import type { SlateBarLoadOptions } from './load-options'

export type { SlateBarLoadOptions } from './load-options'
export type { Variant }

export function useSlateBar(variants: Variant[], options?: SlateBarLoadOptions): void {
  useEffect(() => {
    if (typeof window === 'undefined') return
    SlateBar.load(variants, options)
    return () => SlateBar.destroy()
  }, [variants, options?.cohesionContext, options?.placement])
}
