import type { SectionTemplate } from './types'

export const footer: SectionTemplate[] = [
  {
    section: 'footer',
    name: 'Four-column with logo',
    html: `<footer style="padding:4rem 2rem 2rem;font-family:system-ui,sans-serif;border-top:1px solid #f1f5f9;max-width:72rem;margin:0 auto">
  <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem">
    <div>
      <p style="font-weight:800;font-size:1.25rem;margin:0 0 0.75rem">Acme</p>
      <p style="color:#64748b;font-size:0.875rem;line-height:1.6;margin:0;max-width:16rem">Build faster, ship smarter. The modern platform for development teams.</p>
    </div>
    ${['Product|Features|Pricing|Changelog|Docs', 'Company|About|Blog|Careers|Press', 'Legal|Privacy|Terms|Security']
      .map(
        (col) => {
          const [heading, ...links] = col.split('|')
          return `<div>
      <p style="font-weight:600;font-size:0.875rem;margin:0 0 1rem">${heading}</p>
      ${links.map((l) => `<a href="#" style="display:block;color:#64748b;font-size:0.875rem;text-decoration:none;margin-bottom:0.5rem">${l}</a>`).join('')}
    </div>`
        },
      )
      .join('\n    ')}
  </div>
  <div style="border-top:1px solid #f1f5f9;padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center">
    <p style="color:#94a3b8;font-size:0.75rem;margin:0">© 2026 Acme Inc. All rights reserved.</p>
    <div style="display:flex;gap:1rem">
      <a href="#" style="color:#94a3b8;font-size:0.75rem;text-decoration:none">Twitter</a>
      <a href="#" style="color:#94a3b8;font-size:0.75rem;text-decoration:none">GitHub</a>
      <a href="#" style="color:#94a3b8;font-size:0.75rem;text-decoration:none">LinkedIn</a>
    </div>
  </div>
</footer>`,
  },
  {
    section: 'footer',
    name: 'Minimal centered',
    html: `<footer style="padding:3rem 2rem;font-family:system-ui,sans-serif;text-align:center;border-top:1px solid #f1f5f9">
  <div style="display:flex;justify-content:center;gap:2rem;margin-bottom:1.5rem;flex-wrap:wrap">
    ${['Product', 'Features', 'Pricing', 'Docs', 'Blog', 'Contact'].map((l) => `<a href="#" style="color:#64748b;font-size:0.875rem;text-decoration:none">${l}</a>`).join('\n    ')}
  </div>
  <p style="color:#94a3b8;font-size:0.75rem;margin:0">© 2026 Acme Inc.</p>
</footer>`,
  },
  {
    section: 'footer',
    name: 'Dark full-width',
    html: `<footer style="padding:4rem 2rem 2rem;font-family:system-ui,sans-serif;background:#0f172a;color:#f8fafc">
  <div style="max-width:72rem;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem">
    <div>
      <p style="font-weight:800;font-size:1.25rem;margin:0 0 0.75rem">Acme</p>
      <p style="color:rgba(255,255,255,0.5);font-size:0.875rem;line-height:1.6;margin:0;max-width:16rem">The platform for modern engineering teams.</p>
    </div>
    ${['Product|Features|Pricing|Docs', 'Company|About|Careers|Blog', 'Support|Help center|Status|Contact']
      .map(
        (col) => {
          const [heading, ...links] = col.split('|')
          return `<div>
      <p style="font-weight:600;font-size:0.875rem;margin:0 0 1rem">${heading}</p>
      ${links.map((l) => `<a href="#" style="display:block;color:rgba(255,255,255,0.5);font-size:0.875rem;text-decoration:none;margin-bottom:0.5rem">${l}</a>`).join('')}
    </div>`
        },
      )
      .join('\n    ')}
  </div>
  <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:1.5rem">
    <p style="color:rgba(255,255,255,0.3);font-size:0.75rem;margin:0">© 2026 Acme Inc. All rights reserved.</p>
  </div>
</footer>`,
  },
]
