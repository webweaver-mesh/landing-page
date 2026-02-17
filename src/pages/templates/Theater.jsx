import { Link } from 'react-router-dom'
import TopBar from '../../components/TopBar.jsx'

export default function Theater() {
  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar label="Template: Theater" />
      <main className="container-pad py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <section className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Noir Theater
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tonight at the theatre.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              A stark, black-and-white landing page for a contemporary playhouse.
              Announce the current season, spotlight the next premiere, and make it
              effortless to browse the program.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full border border-white px-6 py-3 text-sm font-semibold tracking-wide hover:bg-white hover:text-black">
                View tonight&apos;s program
              </button>
              <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold tracking-wide text-slate-200 hover:border-white hover:text-white">
                Season tickets
              </button>
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Minimal copy, no photography required—just typography and layout.
            </p>
          </section>

          <section className="w-full max-w-md lg:max-w-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/20 px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Next performance
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    &ldquo;Midnight Echoes&rdquo;
                  </p>
                </div>
                <p className="text-xs text-slate-400">8:30 PM · Main stage</p>
              </div>
              <div className="grid gap-3 rounded-2xl border border-white/15 p-5 text-xs text-slate-300 sm:grid-cols-2">
                {['Drama', 'Comedy', 'Dance', 'Live music'].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <span>{item}</span>
                    <span className="h-px w-8 bg-white/20" />
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-dashed border-white/20 p-6 text-xs text-slate-400">
                Use this column for a monochrome poster, schedule, or critics quote.
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 text-xs text-slate-400">
          <Link
            to="/sample-templates"
            className="rounded-full border border-white/15 px-4 py-2 font-semibold hover:border-white hover:text-white"
          >
            Back to sample templates
          </Link>
          <Link
            to="/"
            className="rounded-full border border-white/10 px-4 py-2 font-semibold hover:border-white hover:text-white"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}

