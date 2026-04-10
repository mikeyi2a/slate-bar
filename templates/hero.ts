import type { SectionTemplate } from './types'

export const hero: SectionTemplate[] = [
  {
    section: 'hero',
    name: 'Centered headline',
    html: `<section style="padding:5rem 2rem;text-align:center;font-family:system-ui,sans-serif;max-width:64rem;margin:0 auto">
  <p style="font-size:0.875rem;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:#6366f1;margin-bottom:1rem">Introducing our platform</p>
  <h1 style="font-size:3.5rem;font-weight:800;line-height:1.1;letter-spacing:-0.02em;margin:0 0 1.5rem">Build products that matter</h1>
  <p style="font-size:1.125rem;color:#64748b;max-width:36rem;margin:0 auto 2rem;line-height:1.6">Ship faster, iterate smarter, and delight your users with a platform designed for modern teams.</p>
  <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">
    <a href="#" style="display:inline-flex;align-items:center;padding:0.75rem 1.5rem;background:#111;color:#fff;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none">Get started</a>
    <a href="#" style="display:inline-flex;align-items:center;padding:0.75rem 1.5rem;border:1px solid #e2e8f0;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none;color:#111">Watch demo</a>
  </div>
</section>`,
  },
  {
    section: 'hero',
    name: 'Split — text left, image right',
    html: `<section style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;padding:4rem 2rem;max-width:72rem;margin:0 auto;font-family:system-ui,sans-serif">
  <div>
    <p style="font-size:0.75rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6366f1;margin-bottom:0.75rem">New release</p>
    <h1 style="font-size:3rem;font-weight:800;line-height:1.1;letter-spacing:-0.02em;margin:0 0 1.25rem">The smarter way to ship software</h1>
    <p style="color:#64748b;line-height:1.6;margin-bottom:2rem">Automated workflows, real-time collaboration, and built-in analytics—everything you need in one place.</p>
    <div style="display:flex;gap:0.75rem">
      <a href="#" style="padding:0.75rem 1.5rem;background:#111;color:#fff;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none">Start free trial</a>
      <a href="#" style="padding:0.75rem 1.5rem;border:1px solid #e2e8f0;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none;color:#111">Learn more</a>
    </div>
  </div>
  <div style="background:#f1f5f9;border-radius:1rem;aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:0.875rem">Image / screenshot</div>
</section>`,
  },
  {
    section: 'hero',
    name: 'Full-bleed dark with background',
    html: `<section style="position:relative;padding:6rem 2rem;text-align:center;font-family:system-ui,sans-serif;background:#0f172a;color:#f8fafc;overflow:hidden">
  <div style="position:relative;z-index:1;max-width:48rem;margin:0 auto">
    <h1 style="font-size:3.75rem;font-weight:800;line-height:1.05;letter-spacing:-0.025em;margin:0 0 1.5rem">Transform the way you work</h1>
    <p style="font-size:1.125rem;color:#94a3b8;max-width:32rem;margin:0 auto 2.5rem;line-height:1.6">AI-powered tools that adapt to your workflow, not the other way around.</p>
    <a href="#" style="display:inline-flex;align-items:center;padding:0.875rem 2rem;background:#6366f1;color:#fff;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none">Request early access</a>
  </div>
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(99,102,241,0.15),transparent 70%)"></div>
</section>`,
  },
  {
    section: 'hero',
    name: 'Dashboard preview below',
    html: `<section style="padding:4rem 2rem 0;text-align:center;font-family:system-ui,sans-serif;max-width:72rem;margin:0 auto">
  <h1 style="font-size:3rem;font-weight:800;line-height:1.1;letter-spacing:-0.02em;margin:0 0 1rem">Your command center</h1>
  <p style="font-size:1.125rem;color:#64748b;max-width:36rem;margin:0 auto 2rem;line-height:1.6">See everything that matters at a glance. Real-time metrics, team activity, and actionable insights.</p>
  <div style="display:flex;gap:0.75rem;justify-content:center;margin-bottom:3rem">
    <a href="#" style="padding:0.75rem 1.5rem;background:#111;color:#fff;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none">Try it free</a>
  </div>
  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:1rem 1rem 0 0;padding:2rem;min-height:320px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-size:0.875rem">Dashboard screenshot / app preview</div>
</section>`,
  },
]
