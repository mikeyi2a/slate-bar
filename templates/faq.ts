import type { SectionTemplate } from './types'

const QUESTIONS = [
  { q: 'How does the free tier work?', a: 'You get full access to core features with generous limits. No credit card required.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Cancel your subscription at any time from the billing page, no questions asked.' },
  { q: 'Do you offer team plans?', a: 'Absolutely. Our Pro plan supports unlimited team members with role-based access.' },
  { q: 'Is my data secure?', a: 'All data is encrypted at rest and in transit. We are SOC 2 Type II certified.' },
]

export const faq: SectionTemplate[] = [
  {
    section: 'faq',
    name: 'Centered accordion style',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:40rem;margin:0 auto">
  <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 2.5rem;text-align:center">Frequently asked questions</h2>
  <div style="display:flex;flex-direction:column">
    ${QUESTIONS.map((item) => `<div style="padding:1.25rem 0;border-top:1px solid #f1f5f9"><h3 style="font-weight:600;margin:0 0 0.5rem;font-size:1rem">${item.q}</h3><p style="color:#64748b;font-size:0.875rem;line-height:1.6;margin:0">${item.a}</p></div>`).join('\n    ')}
  </div>
</section>`,
  },
  {
    section: 'faq',
    name: 'Two-column grid',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:64rem;margin:0 auto">
  <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 2.5rem;text-align:center">FAQ</h2>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem">
    ${QUESTIONS.map((item) => `<div><h3 style="font-weight:600;margin:0 0 0.5rem;font-size:1rem">${item.q}</h3><p style="color:#64748b;font-size:0.875rem;line-height:1.6;margin:0">${item.a}</p></div>`).join('\n    ')}
  </div>
</section>`,
  },
  {
    section: 'faq',
    name: 'Side-by-side with heading left',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;max-width:64rem;margin:0 auto;display:grid;grid-template-columns:1fr 2fr;gap:4rem;align-items:start">
  <div>
    <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 0.75rem">FAQ</h2>
    <p style="color:#64748b;line-height:1.6;margin:0">Can't find what you need? <a href="#" style="color:#6366f1;text-decoration:none;font-weight:600">Contact us</a></p>
  </div>
  <div style="display:flex;flex-direction:column">
    ${QUESTIONS.map((item) => `<div style="padding:1.25rem 0;border-top:1px solid #f1f5f9"><h3 style="font-weight:600;margin:0 0 0.5rem;font-size:1rem">${item.q}</h3><p style="color:#64748b;font-size:0.875rem;line-height:1.6;margin:0">${item.a}</p></div>`).join('\n    ')}
  </div>
</section>`,
  },
]
