import { Link } from 'react-router-dom'

export default function SampleTemplates() {
  const templates = [
    {
      name: 'Theater',
      description: 'Landing page of a theater with a prominent program button.',
      style: 'Black & white, minimalist.',
      href: '/templates/theater',
    },
    {
      name: 'Wine Trader',
      description: 'A classy French winery landing page with tasting notes and story.',
      style: 'Grapewine background, dark red elements and lettering.',
      href: '/templates/winetrader',
    },
    {
      name: 'Fashion Show',
      description: 'Editorial layout featuring bold headlines and model imagery.',
      style: 'High-contrast, sharp, magazine-inspired.',
      href: '/templates/fashionshow',
    },
    {
      name: 'Techstartup',
      description: 'A punchy hero that says “welcome to your new landing page.”',
      style: 'Neobrutalism with a few bold colors.',
      href: '/templates/techstartup',
    },
    {
      name: 'Retro Games',
      description: 'Playful “snake” themed layout with chunky blocks.',
      style: 'Retro pixels, main color #97BF04.',
      href: '/templates/retro',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="container-pad py-10">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Sample templates
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            Explore a few example configurations you can build with this layout.
            Use them as inspiration, then customize the sections and copy for your
            own product.
          </p>
        </header>

        <main className="grid gap-6 lg:grid-cols-3">
          {templates.map((tpl) => (
            <Link key={tpl.name} to={tpl.href} className="group block">
              <section className="h-full rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors group-hover:bg-white/10">
                <h2 className="text-base font-semibold">{tpl.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {tpl.description}
                </p>
                {tpl.style ? (
                  <p className="mt-3 text-xs uppercase tracking-wide text-slate-400">
                    {tpl.style}
                  </p>
                ) : null}
                <p className="mt-4 text-sm font-semibold text-sky-300 group-hover:text-sky-200">
                  Open template →
                </p>
              </section>
            </Link>
          ))}
        </main>
      </div>
    </div>
  )
}

