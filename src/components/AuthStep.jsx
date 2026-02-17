import { useMemo, useState } from 'react'

function ProviderButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full items-center justify-center rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      Continue with {label}
    </button>
  )
}

export default function AuthStep({
  title,
  subtitle,
  providers,
  allowEmail = true,
  onAuthed,
}) {
  const [email, setEmail] = useState('')

  const providerList = useMemo(() => providers ?? [], [providers])

  return (
    <div className="container-pad py-12">
      <div className="mx-auto max-w-xl">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-white">{title}</h1>
              {subtitle ? (
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{subtitle}</p>
              ) : null}
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/15">
              Step 1/2
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {providerList.map((p) => (
              <ProviderButton
                key={p.id}
                label={p.label}
                onClick={() => onAuthed({ method: p.id })}
              />
            ))}
          </div>

          {allowEmail ? (
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <div className="text-xs font-semibold text-slate-400">or</div>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <form
                className="mt-4 grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  onAuthed({ method: 'email', email })
                }}
              >
                <label className="grid gap-2">
                  <span className="text-xs font-semibold text-slate-300">Email</span>
                  <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-xl bg-slate-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Continue with email
                </button>
                <p className="text-xs text-slate-400">
                  This is a UI-only demo (no real OAuth wired up).
                </p>
              </form>
            </div>
          ) : (
            <p className="mt-6 text-xs text-slate-400">
              This is a UI-only demo (no real OAuth wired up).
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

