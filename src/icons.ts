const s = (inner: string, size = 14) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`

export const chevronLeftSvg = s('<polyline points="15 18 9 12 15 6"/>')

export const chevronRightSvg = s('<polyline points="9 18 15 12 9 6"/>')

export const copySvg = s(
  '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'
)

export const checkSvg = s('<polyline points="20 6 9 17 4 12"/>')

export const settingsSvg = s(
  '<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>'
)
