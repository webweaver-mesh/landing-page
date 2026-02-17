import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthStep from '../components/AuthStep.jsx'
import DownloadsStep from '../components/DownloadsStep.jsx'
import TopBar from '../components/TopBar.jsx'

export default function Starter() {
  const [authed, setAuthed] = useState(null)

  return (
    <div>
      <TopBar label="Starter (Free)" />
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
      {authed ? (
        <DownloadsStep
          title="Download laPlace Starter"
          authedWith={authed.method === 'email' ? authed.email : authed.method}
          onRestart={() => setAuthed(null)}
        />
      ) : (
        <AuthStep
          title="Sign in to get Starter"
          subtitle="Authenticate with Google, GitHub, or email to unlock downloads."
          providers={[
            { id: 'google', label: 'Google' },
            { id: 'github', label: 'GitHub' },
          ]}
          allowEmail={true}
          onAuthed={setAuthed}
        />
      )}
    </div>
  )
}

