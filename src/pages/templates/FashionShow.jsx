import { Link } from 'react-router-dom'
import TopBar from '../../components/TopBar.jsx'
import fashionHero from '../../assets/templates/model.png'
import fashionDetail from '../../assets/templates/runway.png'

export default function FashionShow() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <TopBar label="Template: FashionShow" />
      <main className="container-pad py-12">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Studio Edition
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tighter sm:text-5xl">
              Fashion Week runway debut.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
              An editorial landing page for your next show, collection drop, or
              capsule campaign. Sharp typography, asymmetry, and bold headlines&mdash;no
              heavy development required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold">
              <button className="rounded-none border border-white px-6 py-3 tracking-[0.25em] hover:bg-white hover:text-black">
                RSVP
              </button>
              <button className="rounded-none border border-white/30 px-6 py-3 tracking-[0.25em] text-slate-200 hover:border-white hover:text-white">
                VIEW LOOKBOOK
              </button>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              Use strong grids and large type; model images can be simple placeholders.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/15 bg-black/60">
              <img
                src={fashionHero}
                alt="Editorial fashion runway hero visual"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-4 pointer-events-none border border-white/20" />
              {/* <div className="absolute inset-x-6 bottom-6 text-xs uppercase tracking-[0.25em] text-slate-200/80"> */}
              <div className="absolute left-5 top-5 text-[0.65rem] uppercase tracking-[0.3em] text-slate-300/90">
                Model &mdash; Studio light
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/15 bg-black/60">
                <img
                  src={fashionDetail}
                  alt="Fashion detail and lookbook preview"
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-3 pointer-events-none border border-white/15" />
                <div className="absolute left-5 top-5 text-[0.65rem] uppercase tracking-[0.3em] text-slate-300/90">
                  Editorial
                </div>
              </div>
              <div className="rounded-3xl border border-white/15 p-5 text-xs text-slate-300">
                Use this stack to feature backstage shots, fabric details, or show
                partners.
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 flex flex-wrap gap-3 text-xs text-slate-300">
          <Link
            to="/sample-templates"
            className="rounded-full border border-white/20 px-4 py-2 font-semibold hover:border-white hover:text-white"
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

