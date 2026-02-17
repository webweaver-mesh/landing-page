import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-pad py-16">
      <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
        <h1 className="text-2xl font-semibold text-white">Page not found</h1>
        <p className="mt-2 text-slate-300">The page you’re looking for doesn’t exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}

