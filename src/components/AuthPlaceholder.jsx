export default function AuthPlaceholder({ planName, onContinue }) {
  return (
    <div className="container-pad py-12">
      <div className="mx-auto max-w-xl">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Placeholder for real authentication
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            In a real product, this step would hand off to your identity provider (OAuth,
            SSO, etc.) before showing the{' '}
            <span className="font-semibold text-white">{planName}</span> payment
            options.
          </p>
          <p className="mt-3 text-xs text-slate-400">
            This demo skips real authentication and payment. It&apos;s here to give you a
            sense of the flow you might implement.
          </p>
          <button
            type="button"
            onClick={onContinue}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  )
}

