function PaymentMethodIcon({ id }) {
  if (id === 'paypal') {
    return (
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-600 text-white ring-1 ring-sky-500">
        <span className="text-base font-black tracking-tight">P</span>
      </div>
    )
  }

  if (id === 'credit-card') {
    return (
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white ring-1 ring-slate-800">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <rect
            x="3.5"
            y="6"
            width="17"
            height="12"
            rx="2"
            ry="2"
            fill="currentColor"
            opacity="0.9"
          />
          <rect x="4.5" y="9" width="15" height="1.5" rx="0.75" fill="#0f172a" />
          <rect x="6" y="13" width="4" height="1.5" rx="0.75" fill="#0f172a" />
          <rect x="11" y="13" width="3" height="1.5" rx="0.75" fill="#0f172a" />
        </svg>
      </div>
    )
  }

  if (id === 'bank-transfer') {
    return (
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M4 10h16M6 10v7m4-7v7m4-7v7m4-7v7M3 17h18M4 10l8-5 8 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }

  if (id === 'invoices') {
    return (
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M4 7l8 5 8-5M5 6h14a1 1 0 011 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7a1 1 0 011-1z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 ring-1 ring-slate-200">
      <span className="text-xs font-semibold">Pay</span>
    </div>
  )
}

const defaultOptions = [
  { id: 'paypal', label: 'PayPal' },
  { id: 'credit-card', label: 'Credit card' },
  { id: 'bank-transfer', label: 'Bank transfer' },
]

export default function PaymentStep({
  title,
  authedWith,
  onRestart,
  options = defaultOptions,
}) {
  return (
    <div className="min-h-[calc(100vh-73px)] bg-white text-slate-900">
      <div className="container-pad py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                Step 2/2
              </div>
              <h1 className="mt-3 text-2xl font-semibold sm:text-3xl">{title}</h1>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Signed in with <span className="font-semibold">{authedWith}</span>. Choose a
                payment method to continue.
              </p>
            </div>
            <button
              type="button"
              onClick={onRestart}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Switch account
            </button>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {options.map((o) => (
              <button
                key={o.id}
                type="button"
                className="rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20"
              >
                <div className="flex items-center gap-3">
                  <PaymentMethodIcon id={o.id} />
                  <div className="text-base font-semibold">{o.label}</div>
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  Demo checkout option (no real payment integration).
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-slate-50 p-6 text-sm text-slate-600">
            Tip: when you wire this up for real, keep payment forms on a dedicated route
            and use a provider SDK (Stripe/PayPal/etc.).
          </div>
        </div>
      </div>
    </div>
  )
}

