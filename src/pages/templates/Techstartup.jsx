import { Link } from 'react-router-dom'
import TopBar from '../../components/TopBar.jsx'

export default function Techstartup() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] text-slate-900">
      <TopBar label="Template: Techstartup" />
      <main className="container-pad py-12">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-yellow-300 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] shadow-[4px_4px_0px_0px_#000]">
              Beta
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Welcome to your new landing page.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
              A neobrutalist template for product launches, waitlists, and early-stage
              startups. Big blocks, strong borders, and just a few bold colors.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold">
              <button className="rounded-xl border-2 border-black bg-lime-300 px-6 py-3 shadow-[4px_4px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#000]">
                Get early access
              </button>
              <button className="rounded-xl border-2 border-black bg-white px-6 py-3 shadow-[4px_4px_0px_0px_#000] hover:bg-sky-100">
                View product tour
              </button>
            </div>
          </div>

          <aside className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-black bg-sky-200 p-5 shadow-[4px_4px_0px_0px_#000]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                Metrics
              </p>
              <ul className="mt-4 space-y-2 text-xs">
                <li className="flex items-center justify-between">
                  <span>Signups this week</span>
                  <span className="rounded bg-white px-2 py-1 font-mono text-[0.7rem]">
                    1,248
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Conversion</span>
                  <span className="rounded bg-white px-2 py-1 font-mono text-[0.7rem]">
                    4.3%
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_#000]">
              <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                Sections
              </p>
              <p className="mt-3 text-xs text-slate-700">
                Use bold cards for features, pricing, and FAQ. Keep copy short and
                scannable.
              </p>
            </div>
          </aside>
        </section>

        <div className="mt-12 flex flex-wrap gap-3 text-xs text-slate-800">
          <Link
            to="/sample-templates"
            className="rounded-full border-2 border-black bg-white px-4 py-2 font-semibold shadow-[3px_3px_0px_0px_#000] hover:bg-sky-100"
          >
            Back to sample templates
          </Link>
          <Link
            to="/"
            className="rounded-full border-2 border-black bg-lime-200 px-4 py-2 font-semibold shadow-[3px_3px_0px_0px_#000] hover:bg-lime-300"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}

