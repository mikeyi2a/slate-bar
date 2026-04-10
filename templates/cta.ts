import type { SectionTemplate } from './types'

export const cta: SectionTemplate[] = [
  {
    section: 'cta',
    name: 'Centered dark banner',
    html: `<section style="padding:5rem 2rem;font-family:system-ui,sans-serif;background:#0f172a;text-align:center">
  <div style="max-width:40rem;margin:0 auto">
    <h2 style="font-size:2rem;font-weight:800;color:#f8fafc;letter-spacing:-0.02em;margin:0 0 1rem">Ready to get started?</h2>
    <p style="color:#94a3b8;line-height:1.6;margin:0 0 2rem">Join thousands of teams already shipping faster.</p>
    <div style="display:flex;gap:0.75rem;justify-content:center">
      <a href="#" style="padding:0.75rem 1.5rem;background:#fff;color:#0f172a;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none">Start free trial</a>
      <a href="#" style="padding:0.75rem 1.5rem;border:1px solid rgba(255,255,255,0.2);color:#f8fafc;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none">Talk to sales</a>
    </div>
  </div>
</section>`,
  },
  {
    section: 'cta',
    name: 'Split with image',
    html: `<section style="display:grid;grid-template-columns:1fr 1fr;font-family:system-ui,sans-serif;max-width:72rem;margin:0 auto;border-radius:1rem;overflow:hidden;border:1px solid #e2e8f0">
  <div style="padding:4rem 3rem;display:flex;flex-direction:column;justify-content:center">
    <h2 style="font-size:2rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 1rem">Start building today</h2>
    <p style="color:#64748b;line-height:1.6;margin:0 0 2rem">No credit card required. Free for small teams.</p>
    <div><a href="#" style="display:inline-flex;padding:0.75rem 1.5rem;background:#111;color:#fff;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none">Create account</a></div>
  </div>
  <div style="background:#f1f5f9;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:0.875rem;min-height:280px">Image / illustration</div>
</section>`,
  },
  {
    section: 'cta',
    name: 'Minimal inline',
    html: `<section style="padding:4rem 2rem;font-family:system-ui,sans-serif;max-width:64rem;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:2rem">
  <div>
    <h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-0.02em;margin:0 0 0.5rem">Ship your next feature today</h2>
    <p style="color:#64748b;margin:0;font-size:0.875rem">Free plan includes everything you need to launch.</p>
  </div>
  <a href="#" style="padding:0.75rem 2rem;background:#111;color:#fff;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none;white-space:nowrap">Get started</a>
</section>`,
  },
]
