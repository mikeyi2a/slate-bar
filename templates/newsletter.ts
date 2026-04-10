import type { SectionTemplate } from './types'

export const newsletter: SectionTemplate[] = [
  {
    section: 'newsletter',
    name: 'Centered with input',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;text-align:center;max-width:32rem;margin:0 auto">
  <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 0.75rem">Stay in the loop</h2>
  <p style="color:#64748b;margin:0 0 2rem;font-size:0.875rem;line-height:1.6">Get product updates, tips, and engineering stories — no spam.</p>
  <div style="display:flex;gap:0.5rem">
    <input type="email" placeholder="you@company.com" style="flex:1;padding:0.75rem 1rem;border:1px solid #e2e8f0;border-radius:0.5rem;font-size:0.875rem;outline:none;font-family:inherit" />
    <button style="padding:0.75rem 1.25rem;background:#111;color:#fff;border:none;border-radius:0.5rem;font-weight:600;font-size:0.875rem;cursor:pointer;font-family:inherit">Subscribe</button>
  </div>
</section>`,
  },
  {
    section: 'newsletter',
    name: 'Dark banner inline',
    html: `<section style="padding:3rem 2rem;font-family:system-ui,sans-serif;background:#0f172a;border-radius:1rem;max-width:64rem;margin:2rem auto">
  <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:2rem">
    <div>
      <h2 style="font-size:1.25rem;font-weight:800;color:#f8fafc;margin:0 0 0.25rem">Subscribe to our newsletter</h2>
      <p style="color:#94a3b8;font-size:0.875rem;margin:0">Monthly updates. Unsubscribe anytime.</p>
    </div>
    <div style="display:flex;gap:0.5rem">
      <input type="email" placeholder="Email address" style="padding:0.75rem 1rem;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.05);color:#f8fafc;border-radius:0.5rem;font-size:0.875rem;outline:none;min-width:14rem;font-family:inherit" />
      <button style="padding:0.75rem 1.25rem;background:#fff;color:#0f172a;border:none;border-radius:0.5rem;font-weight:600;font-size:0.875rem;cursor:pointer;font-family:inherit">Subscribe</button>
    </div>
  </div>
</section>`,
  },
]
