import { chevronLeftSvg, chevronRightSvg, copySvg, checkSvg, settingsSvg } from './icons'
import { copyVariantHtml } from './clipboard'
import { renderVariant } from './preview'
import { styles } from './styles'
import type { SlateBarLoadOptions } from './load-options'
import { readPlacementFromStorage, writePlacementToStorage } from './placement-storage'

export interface Variant {
  name: string
  html: string
}

interface ColorPreset {
  id: string
  label: string
  value: string
}

const COLOR_PRESETS: ColorPreset[] = [
  { id: 'obsidian', label: 'Obsidian', value: '#1c1c1e' },
  { id: 'graphite', label: 'Graphite', value: '#2c2c2e' },
  { id: 'slate', label: 'Slate', value: '#3a3a3c' },
  { id: 'midnight', label: 'Midnight', value: '#0a0f1e' },
  { id: 'navy', label: 'Navy', value: '#1a2744' },
  { id: 'indigo', label: 'Indigo', value: '#312e81' },
  { id: 'plum', label: 'Plum', value: '#3b0764' },
  { id: 'wine', label: 'Wine', value: '#4a0f2e' },
  { id: 'espresso', label: 'Espresso', value: '#2c1a0e' },
  { id: 'forest', label: 'Forest', value: '#052e16' },
  { id: 'teal', label: 'Teal', value: '#042f2e' },
  { id: 'ocean', label: 'Ocean', value: '#0c2340' },
]

const LS_KEY = 'slate-bar-color'
const DEFAULT_COLOR = '#1c1c1e'

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  cls?: string,
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag)
  if (cls) node.className = cls
  return node
}

export interface ToolbarHandle {
  root: HTMLElement
  update: (index: number) => void
  destroy: () => void
}

export function createToolbar(
  variants: Variant[],
  shadowRoot: ShadowRoot,
  loadOptions?: SlateBarLoadOptions,
): ToolbarHandle {
  let currentIndex = 0
  let settingsOpen = false
  let copyTimeout: ReturnType<typeof setTimeout> | null = null
  let barColor = localStorage.getItem(LS_KEY) || DEFAULT_COLOR

  // ── Inject styles ──
  const styleEl = document.createElement('style')
  styleEl.textContent = styles
  shadowRoot.appendChild(styleEl)

  // ── Container ──
  const container = el('div', 'sb-container')
  const wrapper = el('div', 'sb-wrapper')
  container.appendChild(wrapper)

  // ── Settings popover ──
  let popover: HTMLElement | null = null

  function buildPopover(): HTMLElement {
    const pop = el('div', 'sb-popover')
    pop.style.backgroundColor = barColor

    const title = el('p', 'sb-popover-title')
    title.textContent = 'Bar colour'
    pop.appendChild(title)

    const grid = el('div', 'sb-swatch-grid')
    for (const preset of COLOR_PRESETS) {
      const btn = el('button', 'sb-swatch')
      btn.setAttribute('aria-label', preset.label)

      const dot = el('span', 'sb-swatch-dot')
      dot.style.backgroundColor = preset.value
      if (preset.value === barColor) dot.classList.add('sb-swatch-dot--active')

      btn.appendChild(dot)
      btn.addEventListener('click', () => selectColor(preset.value))
      grid.appendChild(btn)
    }

    pop.appendChild(grid)

    const placeBlock = el('div', 'sb-placement-block')
    const placeLabel = el('label', 'sb-placement-label')
    placeLabel.setAttribute('for', 'sb-placement-field')
    placeLabel.textContent = 'Where it goes in the app'
    const placeField = document.createElement('textarea')
    placeField.id = 'sb-placement-field'
    placeField.className = 'sb-placement-field'
    placeField.setAttribute(
      'placeholder',
      'e.g. Directly below <MarketingHero /> in app/(marketing)/page.tsx — insert between Hero and Features.',
    )
    placeField.value =
      readPlacementFromStorage() || loadOptions?.placement?.trim() || ''
    placeField.addEventListener('input', () => {
      writePlacementToStorage(placeField.value)
    })
    placeBlock.append(placeLabel, placeField)
    pop.appendChild(placeBlock)

    return pop
  }

  function getPlacementForCopy(): string {
    const stored = readPlacementFromStorage()
    if (stored) return stored
    return loadOptions?.placement?.trim() ?? ''
  }

  function showPopover(): void {
    if (popover) return
    popover = buildPopover()
    wrapper.insertBefore(popover, pill)
    settingsOpen = true
    updateSettingsIcon()
  }

  function hidePopover(): void {
    if (!popover) return
    popover.classList.add('sb-popover--exit')
    const ref = popover
    popover.addEventListener('animationend', () => ref.remove(), { once: true })
    popover = null
    settingsOpen = false
    updateSettingsIcon()
  }

  function selectColor(color: string): void {
    barColor = color
    localStorage.setItem(LS_KEY, color)
    pill.style.backgroundColor = barColor
    if (popover) popover.style.backgroundColor = barColor

    // Update swatch active states
    const dots = shadowRoot.querySelectorAll('.sb-swatch-dot')
    dots.forEach((d) => {
      const htmlDot = d as HTMLElement
      if (htmlDot.style.backgroundColor === color || rgbToHex(htmlDot.style.backgroundColor) === color) {
        htmlDot.classList.add('sb-swatch-dot--active')
      } else {
        htmlDot.classList.remove('sb-swatch-dot--active')
      }
    })
  }

  // ── Main pill ──
  const pill = el('div', 'sb-pill')
  pill.style.backgroundColor = barColor

  // Prev button
  const prevBtn = el('button', 'sb-btn')
  prevBtn.setAttribute('aria-label', 'Previous variant')
  prevBtn.innerHTML = chevronLeftSvg
  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : variants.length - 1
    applyVariant()
  })

  // Counter
  const counter = el('span', 'sb-counter')

  // Next button
  const nextBtn = el('button', 'sb-btn')
  nextBtn.setAttribute('aria-label', 'Next variant')
  nextBtn.innerHTML = chevronRightSvg
  nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex < variants.length - 1 ? currentIndex + 1 : 0
    applyVariant()
  })

  // Variant name container
  const variantNameWrap = el('div', 'sb-variant-name')
  const variantLabel = el('span', 'sb-variant-label')

  variantNameWrap.appendChild(variantLabel)

  // Copy button
  const copyBtn = el('button', 'sb-copy')
  const copyInner = el('span', 'sb-copy-inner')
  copyBtn.appendChild(copyInner)

  function setCopyState(copied: boolean): void {
    copyInner.innerHTML = copied
      ? `${checkSvg}<span>Copied</span>`
      : `${copySvg}<span>Copy</span>`
    // Re-trigger the animation
    copyInner.style.animation = 'none'
    void copyInner.offsetHeight
    copyInner.style.animation = ''
  }

  copyBtn.addEventListener('click', async () => {
    if (copyTimeout) clearTimeout(copyTimeout)
    const html = variants[currentIndex]?.html ?? ''
    await copyVariantHtml(html, {
      cohesionContext: loadOptions?.cohesionContext,
      placement: getPlacementForCopy(),
      uiLibraries: loadOptions?.uiLibraries,
    })
    setCopyState(true)
    copyTimeout = setTimeout(() => setCopyState(false), 1500)
  })

  // Settings button
  const settingsBtn = el('button', 'sb-btn')
  settingsBtn.setAttribute('aria-label', 'Settings')
  const settingsIconWrap = el('span', 'sb-settings-icon')
  settingsIconWrap.innerHTML = settingsSvg
  settingsBtn.appendChild(settingsIconWrap)

  function updateSettingsIcon(): void {
    settingsIconWrap.classList.toggle('sb-settings-icon--open', settingsOpen)
    settingsBtn.classList.toggle('sb-btn--settings-active', settingsOpen)
  }

  settingsBtn.addEventListener('click', () => {
    if (settingsOpen) hidePopover()
    else showPopover()
  })

  // Dividers
  const div1 = el('div', 'sb-divider')
  const div2 = el('div', 'sb-divider')
  const div3 = el('div', 'sb-divider')

  // Assemble pill
  pill.append(prevBtn, counter, nextBtn, div1, variantNameWrap, div2, copyBtn, div3, settingsBtn)
  wrapper.appendChild(pill)

  // ── Outside click ──
  function onDocClick(e: MouseEvent): void {
    if (!settingsOpen) return
    const path = e.composedPath()
    if (!path.includes(wrapper)) hidePopover()
  }
  document.addEventListener('mousedown', onDocClick)

  // ── Apply variant ──
  function applyVariant(): void {
    counter.textContent = `${currentIndex + 1}/${variants.length}`

    // Animate the variant label swap
    variantLabel.style.animation = 'none'
    void variantLabel.offsetHeight
    variantLabel.textContent = variants[currentIndex]?.name ?? ''
    variantLabel.style.animation = ''

    renderVariant(variants[currentIndex]?.html ?? '')
  }

  // Initial render
  setCopyState(false)
  applyVariant()

  return {
    root: container,
    update(index: number) {
      currentIndex = Math.max(0, Math.min(index, variants.length - 1))
      applyVariant()
    },
    destroy() {
      document.removeEventListener('mousedown', onDocClick)
      if (copyTimeout) clearTimeout(copyTimeout)
      container.remove()
    },
  }
}

function rgbToHex(rgb: string): string {
  const match = rgb.match(/\d+/g)
  if (!match || match.length < 3) return rgb
  const [r, g, b] = match.map(Number)
  return '#' + [r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')
}
