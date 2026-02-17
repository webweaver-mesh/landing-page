const platforms = [
  {
    id: 'macos',
    name: 'macOS',
    description: 'Apple silicon & Intel builds.',
  },
  {
    id: 'windows',
    name: 'Windows',
    description: 'Windows 10+ installer.',
  },
  {
    id: 'linux',
    name: 'Linux',
    description: 'Deb/RPM and tarball.',
  },
]

export default function DownloadsStep({ title, authedWith, onRestart }) {
  return (
    <div className="container-pad py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200 ring-1 ring-white/15">
              Step 2/2
            </div>
            <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              {title}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Signed in with <span className="font-semibold text-white">{authedWith}</span>.
              Choose your platform to download.
            </p>
          </div>
          <button
            type="button"
            onClick={onRestart}
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
          >
            Switch account
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {platforms.map((p) => (
            <div
              key={p.id}
              className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10"
            >
              <div className="text-base font-semibold text-white">{p.name}</div>
              <div className="mt-2 text-sm text-slate-300">{p.description}</div>
              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
              >
                Download for {p.name}
              </button>
              <p className="mt-3 text-xs text-slate-400">
                Demo action (no file download wired up).
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

