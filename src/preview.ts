const PREVIEW_ID = 'slate-preview'

function getOrCreatePreview(): HTMLElement {
  const existing = document.getElementById(PREVIEW_ID)
  if (existing) return existing

  const el = document.createElement('div')
  el.id = PREVIEW_ID

  const sections = document.querySelectorAll('section')
  if (sections.length > 0) {
    const last = sections[sections.length - 1]
    last.parentNode?.insertBefore(el, last.nextSibling)
  } else {
    document.body.appendChild(el)
  }

  return el
}

export function renderVariant(html: string): void {
  const container = getOrCreatePreview()
  container.innerHTML = html
}

export function removePreview(): void {
  const el = document.getElementById(PREVIEW_ID)
  if (el) el.remove()
}
