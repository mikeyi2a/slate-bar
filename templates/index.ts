export type { SectionTemplate } from './types'

export { hero } from './hero'
export { logos } from './logos'
export { features } from './features'
export { pricing } from './pricing'
export { testimonials } from './testimonials'
export { cta } from './cta'
export { faq } from './faq'
export { stats } from './stats'
export { footer } from './footer'
export { newsletter } from './newsletter'
export { team } from './team'

import { hero } from './hero'
import { logos } from './logos'
import { features } from './features'
import { pricing } from './pricing'
import { testimonials } from './testimonials'
import { cta } from './cta'
import { faq } from './faq'
import { stats } from './stats'
import { footer } from './footer'
import { newsletter } from './newsletter'
import { team } from './team'

/** All built-in templates, keyed by section type. */
export const allTemplates = {
  hero,
  logos,
  features,
  pricing,
  testimonials,
  cta,
  faq,
  stats,
  footer,
  newsletter,
  team,
} as const

/** Flat array of every built-in template. */
export const allTemplatesFlat = [
  ...hero,
  ...logos,
  ...features,
  ...pricing,
  ...testimonials,
  ...cta,
  ...faq,
  ...stats,
  ...footer,
  ...newsletter,
  ...team,
]

/** Section type names. */
export type SectionType = keyof typeof allTemplates
export const sectionTypes = Object.keys(allTemplates) as SectionType[]
