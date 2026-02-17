import { Link } from 'react-router-dom'

export default function Home() {
  const nav = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  const features = [
    {
      title: 'Fast setup',
      description: 'Start from a clean, modern layout you can customize in minutes.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M12 2l2.2 6.3H21l-5 3.6 1.9 6.3-5.9-4.1-5.9 4.1L8 11.9 3 8.3h6.8L12 2z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: 'Responsive by default',
      description: 'Looks great on phones, tablets, and desktops without extra work.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 17h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Great typography',
      description: 'Readable spacing, hierarchy, and contrast for a premium feel.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M4 6h16M8 6v14m8-14v14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Conversion-focused sections',
      description: 'Hero, features, testimonials, pricing, and a strong CTA.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M4 18V6m0 12h16M8 14l3-3 2 2 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Accessible UI',
      description: 'Semantic structure, visible focus, and sensible defaults.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M12 12a4 4 0 100-8 4 4 0 000 8z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4 20a8 8 0 0116 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Tailwind-powered',
      description: 'Quickly iterate using utility classes—no complex CSS setup.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M7 13c1.3-1.7 3-2.5 5.2-2.5 3.3 0 4.1 1.8 5.6 2.6 1.6.8 3.3.6 5.2-1.1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M-1 17c1.3-1.7 3-2.5 5.2-2.5 3.3 0 4.1 1.8 5.6 2.6 1.6.8 3.3.6 5.2-1.1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      ),
    },
  ]

  const testimonials = [
    {
      name: 'Ava Chen',
      role: 'Founder, Brightside',
      quote:
        'We shipped our new homepage in an afternoon. Clean layout, great spacing, and easy to tweak.',
    },
    {
      name: 'Noah Patel',
      role: 'Product Designer',
      quote:
        'The sections are exactly what I need for a quick launch: hero, proof, pricing, and CTA—done.',
    },
    {
      name: 'Mia Rodriguez',
      role: 'Indie Developer',
      quote:
        'Tailwind + React makes this super editable. I swapped colors and copy and it still looks polished.',
    },
  ]

  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      description: 'For personal projects and quick demos.',
      features: ['Landing page sections', 'Responsive layout', 'Tailwind configured'],
      cta: 'Continue',
      href: '/starter',
      emphasis: false,
    },
    {
      name: 'Pro',
      price: '$19',
      description: 'For small teams launching a product.',
      features: [
        'Everything in Starter',
        'Polished UI components',
        'Optimized page structure',
        'Priority updates',
      ],
      cta: 'Continue',
      href: '/pro',
      emphasis: true,
    },
    {
      name: 'Business',
      price: '$49',
      description: 'For production marketing sites at scale.',
      features: ['Everything in Pro', 'Design system support', 'Team handoff docs'],
      cta: 'Continue',
      href: '/business',
      emphasis: false,
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          aria-hidden="true"
        >
          <div className="absolute -top-48 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-sky-500/20 to-emerald-400/20 blur-3xl" />
          <div className="absolute -bottom-48 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-500/20 via-cyan-400/20 to-rose-400/20 blur-3xl" />
        </div>

        <header className="relative">
          <div className="container-pad">
            <div className="flex items-center justify-between py-6">
              <Link to="/" className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <span className="h-3 w-3 rounded-full bg-gradient-to-tr from-sky-400 to-fuchsia-400" />
                </span>
                <span className="text-sm font-semibold tracking-wide">laPlace</span>
              </Link>

              <nav className="hidden items-center gap-6 md:flex">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href="#pricing"
                  className="hidden rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-white md:block"
                >
                  Sign in
                </a>
                <Link
                  to="/sample-templates"
                  className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  View sample templates
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="relative">
          <section className="container-pad pb-16 pt-10 sm:pt-14">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Built with React + Tailwind
                </div>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  A sleek landing page for your projects
                </h1>
                <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
                  laPlace is a minimal, conversion-focused layout with all the key
                  sections: hero, proof, features, testimonials, pricing, and CTA.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    See pricing
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    Explore features
                  </a>
                </div>

                <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                  {[
                    { k: '5 min', v: 'Setup time' },
                    { k: '100%', v: 'Responsive' },
                    { k: 'A11y', v: 'Friendly' },
                  ].map((s) => (
                    <div
                      key={s.v}
                      className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                    >
                      <dt className="text-sm text-slate-300">{s.v}</dt>
                      <dd className="mt-1 text-lg font-semibold text-white">{s.k}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:justify-self-end">
                <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-1 shadow-glow ring-1 ring-white/10">
                  <div className="rounded-[22px] bg-slate-950/70 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      </div>
                      <span className="text-xs text-slate-400">overview</span>
                    </div>

                    <div className="mt-6 grid gap-4">
                      <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                        <div className="text-xs text-slate-400">Monthly visitors</div>
                        <div className="mt-2 text-3xl font-semibold text-white">
                          124,980
                        </div>
                        <div className="mt-3 h-2 w-full rounded-full bg-white/5">
                          <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                          <div className="text-xs text-slate-400">Conversion</div>
                          <div className="mt-2 text-2xl font-semibold text-white">
                            4.8%
                          </div>
                          <div className="mt-1 text-xs text-emerald-300">
                            +0.9% this week
                          </div>
                        </div>
                        <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                          <div className="text-xs text-slate-400">Bounce rate</div>
                          <div className="mt-2 text-2xl font-semibold text-white">
                            32%
                          </div>
                          <div className="mt-1 text-xs text-slate-400">
                            down from 41%
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                        <div className="text-xs text-slate-400">Top channels</div>
                        <div className="mt-3 grid gap-2 text-sm">
                          {[
                            ['Search', '48%'],
                            ['Social', '27%'],
                            ['Direct', '25%'],
                          ].map(([label, val]) => (
                            <div
                              key={label}
                              className="flex items-center justify-between text-slate-200"
                            >
                              <span>{label}</span>
                              <span className="text-slate-400">{val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-center text-xs text-slate-400">
                  A simple “product preview” block (no images required).
                </p>
              </div>
            </div>
          </section>

          <section className="container-pad pb-20">
            <div className="flex flex-col gap-6 border-y border-white/10 py-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-300">
                Trusted by teams shipping faster marketing sites.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-400">
                {['Northwind', 'Helio', 'Kite', 'Arcade', 'Caldera'].map((l) => (
                  <span key={l} className="hover:text-slate-200">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="features" className="container-pad pb-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Everything you need for a strong first impression
              </h2>
              <p className="mt-3 text-slate-300">
                Use this as a starting point, then swap copy, colors, and sections
                as your product evolves.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/[0.07]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="testimonials" className="container-pad pb-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Loved by builders
                </h2>
                <p className="mt-3 text-slate-300">
                  Short, punchy quotes help visitors trust your product quickly.
                </p>
              </div>
              <a
                href="#pricing"
                className="text-sm font-semibold text-white/90 hover:text-white"
              >
                View plans →
              </a>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10"
                >
                  <blockquote className="text-sm leading-relaxed text-slate-200">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-sky-400/40 to-fuchsia-400/40 ring-1 ring-white/10" />
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="pricing" className="container-pad pb-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Simple pricing
              </h2>
              <p className="mt-3 text-slate-300">
                Replace these tiers with your real plans. Keep it short and easy to
                compare.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={[
                    'rounded-3xl p-7 ring-1',
                    tier.emphasis
                      ? 'bg-white text-slate-900 ring-white/20'
                      : 'bg-white/5 text-white ring-white/10',
                  ].join(' ')}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3
                        className={[
                          'text-base font-semibold',
                          tier.emphasis ? 'text-slate-900' : 'text-white',
                        ].join(' ')}
                      >
                        {tier.name}
                      </h3>
                      <p
                        className={[
                          'mt-2 text-sm',
                          tier.emphasis ? 'text-slate-600' : 'text-slate-300',
                        ].join(' ')}
                      >
                        {tier.description}
                      </p>
                    </div>
                    {tier.emphasis ? (
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                        Popular
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-6 flex items-end gap-2">
                    <div className="text-4xl font-semibold">{tier.price}</div>
                    <div
                      className={[
                        'pb-1 text-sm',
                        tier.emphasis ? 'text-slate-600' : 'text-slate-400',
                      ].join(' ')}
                    >
                      /mo
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={[
                            'mt-0.5 h-5 w-5',
                            tier.emphasis ? 'text-emerald-600' : 'text-emerald-400',
                          ].join(' ')}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 5.29a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414l2.793 2.793 6.793-6.793a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span
                          className={tier.emphasis ? 'text-slate-700' : 'text-slate-200'}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={tier.href}
                    className={[
                      'mt-7 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
                      tier.emphasis
                        ? 'bg-slate-900 text-white hover:bg-slate-800'
                        : 'bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15',
                    ].join(' ')}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="container-pad pb-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                FAQ
              </h2>
              <p className="mt-3 text-slate-300">
                Answer the top questions your visitors ask before buying.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {[
                {
                  q: 'Can I customize the sections?',
                  a: 'Yes—everything is plain React components and Tailwind classes.',
                },
                {
                  q: 'Do I need any extra UI libraries?',
                  a: 'No. This is intentionally dependency-light for easy handoff.',
                },
                {
                  q: 'Is it mobile-friendly?',
                  a: 'Yes. The layout is designed to scale across breakpoints.',
                },
                {
                  q: 'Can I add routing later?',
                  a: 'Absolutely. You can drop in React Router when you need it.',
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
                >
                  <h3 className="text-sm font-semibold text-white">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="container-pad pb-20">
            <div className="rounded-3xl bg-gradient-to-r from-sky-500/15 via-fuchsia-500/10 to-emerald-400/15 p-1 ring-1 ring-white/10">
              <div className="rounded-[22px] bg-slate-950/70 p-10">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                  <div className="max-w-xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      Ready to launch?
                    </h2>
                    <p className="mt-3 text-slate-300">
                      Copy this page, change the copy, and ship. You’ll have a
                      professional landing page in a single file.
                    </p>
                  </div>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10">
          <div className="container-pad py-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-400">
                © {new Date().getFullYear()} laPlace. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-5 text-sm text-slate-400">
                <a className="hover:text-slate-200" href="#features">
                  Features
                </a>
                <a className="hover:text-slate-200" href="#pricing">
                  Pricing
                </a>
                <a className="hover:text-slate-200" href="#faq">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

