import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthStep from '../components/AuthStep.jsx'
import AuthPlaceholder from '../components/AuthPlaceholder.jsx'
import PaymentStep from '../components/PaymentStep.jsx'
import TopBar from '../components/TopBar.jsx'

export default function Business() {
  const [authed, setAuthed] = useState(null)
  const [showPayment, setShowPayment] = useState(false)

  const handleAuthed = (info) => {
    setAuthed(info)
    setShowPayment(false)
  }

  const handleRestart = () => {
    setAuthed(null)
    setShowPayment(false)
  }

  return (
    <div>
      <TopBar label="Business ($49/mo)" />
      {!authed ? (
        <div className="container-pad pt-6">
          <div className="flex flex-wrap gap-3">
            <Link
              to="/"
              className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              Back to home
            </Link>
            <Link
              to="/pricing"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
            >
              View pricing
            </Link>
          </div>
        </div>
      ) : null}
      {authed && !showPayment ? (
        <AuthPlaceholder planName="Business" onContinue={() => setShowPayment(true)} />
      ) : null}
      {authed && showPayment ? (
        <PaymentStep
          title="Business checkout ($49/mo)"
          authedWith={authed.method === 'email' ? authed.email : authed.method}
          onRestart={handleRestart}
          options={[
            { id: 'paypal', label: 'PayPal' },
            { id: 'credit-card', label: 'Credit card' },
            { id: 'bank-transfer', label: 'Bank transfer' },
            { id: 'invoices', label: 'Invoices' },
          ]}
        />
      ) : !authed ? (
        <AuthStep
          title="Sign in for Business"
          subtitle="Use Microsoft or AWS (plus Google/GitHub) to proceed to checkout."
          providers={[
            { id: 'microsoft', label: 'Microsoft' },
            { id: 'aws', label: 'AWS' },
            { id: 'google', label: 'Google' },
            { id: 'github', label: 'GitHub' },
          ]}
          allowEmail={false}
          onAuthed={handleAuthed}
        />
      ) : null}
    </div>
  )
}

