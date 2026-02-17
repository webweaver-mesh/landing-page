import { Link } from 'react-router-dom'

export default function TopBar({ label }) {
  return (
    <header className="border-b border-white/10">
      <div className="container-pad">
        <div className="flex items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <span className="h-3 w-3 rounded-full bg-gradient-to-tr from-sky-400 to-fuchsia-400" />
            </span>
            <span className="text-sm font-semibold tracking-wide">laPlace</span>
          </Link>

          <div className="text-sm font-semibold text-slate-300">{label}</div>
          <Link
            to="/pricing"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
          >
            View pricing
          </Link>
        </div>
      </div>
    </header>
  )
}

