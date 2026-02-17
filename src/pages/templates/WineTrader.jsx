import { Link } from 'react-router-dom'
import TopBar from '../../components/TopBar.jsx'
import wineHero from '../../assets/templates/cuvee.png'
import wineDetail from '../../assets/templates/vineyard.jpg'

export default function WineTrader() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0a12] via-[#14020a] to-black text-rose-50">
      <TopBar label="Template: WineTrader" />
      <main className="container-pad py-12">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-300/80">
              Domaine du Nord
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              A French winery on the web.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-rose-100/80 sm:text-base">
              Tell the story of your vineyard, showcase your cuvées, and invite guests
              to tastings&mdash;all from a single, elegant landing page.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-rose-900 px-6 py-3 text-sm font-semibold tracking-wide text-rose-50 shadow-sm shadow-rose-900/50 ring-1 ring-rose-400/40 hover:bg-rose-800">
                Book a tasting
              </button>
              <button className="rounded-full bg-transparent px-6 py-3 text-sm font-semibold tracking-wide text-rose-200 ring-1 ring-rose-400/40 hover:bg-rose-900/40">
                View our wines
              </button>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-xs text-rose-200/90">
              {[
                ['3', 'Generations'],
                ['12ha', 'Organic vines'],
                ['AOP', 'Bordeaux'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-rose-400/30 px-4 py-3"
                >
                  <dt className="text-[0.7rem] uppercase tracking-[0.25em] text-rose-300/80">
                    {label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-rose-50">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="space-y-4 lg:justify-self-end">
            <div className="relative overflow-hidden rounded-3xl border border-rose-400/40 bg-gradient-to-br from-[#2a111c] via-[#1f060f] to-black">
              <img
                src={wineDetail}
                alt="Signature cuvée bottle illustration"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-y-0 right-[-20%] w-40 bg-gradient-to-b from-green-500/30 via-green-700/40 to-green-900/60 blur-2xl" />
              <div className="absolute inset-6 pointer-events-none border border-rose-400/50" />
              <div className="absolute inset-6 flex flex-col justify-end text-xs uppercase tracking-[0.25em] text-rose-100/90">
                <span>Welcome to our lovely vineyard</span>
                <span className="mt-2 text-[0.65rem] normal-case tracking-[0.2em]">
                  Use this column to list your appellations, highlight press quotes, or
                embed a vineyard photo.
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-rose-400/30 bg-black/40">
            {/* <div className="absolute left-5 top-5 text-[0.65rem] uppercase tracking-[0.3em] text-slate-300/90"> */}
              <img
                src={wineHero}
                alt="Tasting notes and vineyard details"
                className="h-full w-full object-cover opacity-80"
              />
              
              <div className="absolute inset-6 pointer-events-none border border-rose-400/50" />
              <div className="absolute inset-6 flex flex-col justify-end text-xs uppercase tracking-[0.25em] text-rose-100/90">
                <span>Meet our signature cuvée</span>
                <span className="mt-2 text-[0.65rem] normal-case tracking-[0.2em]">
                  2018 Cuvée des Collines — deep ruby, black cherry, subtle spice.
                </span>
              </div>
            </div>
          </aside>
        </section>

        <div className="mt-12 flex flex-wrap gap-3 text-xs text-rose-200/90">
          <Link
            to="/sample-templates"
            className="rounded-full border border-rose-400/40 px-4 py-2 font-semibold hover:bg-rose-900/40"
          >
            Back to sample templates
          </Link>
          <Link
            to="/"
            className="rounded-full border border-rose-400/20 px-4 py-2 font-semibold hover:bg-rose-900/30"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}

