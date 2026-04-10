export interface CopyVariantOptions {
  cohesionContext?: string
  placement?: string
  uiLibraries?: string[]
}

const PROMPT_BODY = `Implement this component in my project.

Cohesion is the top priority:
- Study the existing site/app this will live in. Match its visual language: typography, color system, spacing rhythm, corner radii, elevation, and interaction patterns exactly. The result must feel native — not like a pasted template.
- Use this codebase's design tokens, theme variables, Tailwind config, and shared UI primitives. Do not introduce values that clash with neighbouring screens.
- Mirror the quality bar of similar sections already in the repo: hierarchy, whitespace, states, and motion.
- If the existing design system contradicts any of the quality guidelines below, follow the design system. Consistency with the product always wins over general best practices.

Design quality (apply where they do not conflict with the existing design system):
- Avoid generic purple gradients, glow effects, pure #000/#FFF (prefer tinted variants).
- Spacing in 4px multiples. Nested border radii: inner = outer - padding.
- WCAG AA contrast minimum (4.5:1 body text). Prefer AAA (7:1).
- Interactive elements: hover, focus (visible ring), active, disabled states.
- Animate only transform/opacity, 150-300ms, smooth easing. Respect prefers-reduced-motion.
- text-balance on headings, text-pretty on body, tabular-nums on data.
- aria-label on icon-only buttons. Keyboard-navigable.

Technical:
- Translate fully into the project's framework, file layout, and component patterns. Do not leave inline-style blobs if the project uses components and tokens.
- If UI libraries are specified below, build with their primitives. If the project uses its own component library or any other library not listed, use that instead.

`

function buildCopyText(html: string, options?: CopyVariantOptions): string {
  const place = options?.placement?.trim()
  const placeBlock = place
    ? `Placement (non-negotiable):\nImplement and wire this component at exactly this location in the production source tree. Update imports, parent layout, and sibling order:\n\n${place}\n\n`
    : ''

  const libs = options?.uiLibraries?.filter(Boolean)
  const libBlock =
    libs && libs.length > 0
      ? `UI libraries (use these):\nBuild with these component libraries' primitives, patterns, and conventions: ${libs.join(', ')}.\n\n`
      : ''

  const ctx = options?.cohesionContext?.trim()
  const ctxBlock = ctx
    ? `Project context:\n${ctx}\n\n`
    : ''
  return PROMPT_BODY + placeBlock + libBlock + ctxBlock + 'Reference markup:\n\n' + html
}

export async function copyVariantHtml(html: string, options?: CopyVariantOptions): Promise<boolean> {
  const text = buildCopyText(html, options)
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    try {
      document.execCommand('copy')
      document.body.removeChild(textarea)
      return true
    } catch {
      document.body.removeChild(textarea)
      return false
    }
  }
}
