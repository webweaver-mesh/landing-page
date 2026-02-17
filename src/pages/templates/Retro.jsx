import { Link } from 'react-router-dom'
import TopBar from '../../components/TopBar.jsx'

const GREEN = '#97BF04'

export default function Retro() {
  return (
    <div className="min-h-screen bg-black" style={{ color: GREEN }}>
      <TopBar label="Template: Retro (Snake)" />
      <main className="container-pad py-12">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <p
              className="text-xs font-mono uppercase tracking-[0.25em]"
              style={{ color: GREEN }}
            >
              Retro arcade
            </p>
            <h1
              className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
              style={{ color: GREEN }}
            >
              Snake landing page.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-lime-200/90">
              A nostalgic, pixel-inspired layout for anything game-like: browser
              games, tiny tools, or playful launch pages. Think chunky blocks,
              grid lines, and one main color.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
              <button
                className="rounded-sm border-2 px-6 py-3 font-mono uppercase tracking-[0.2em]"
                style={{
                  borderColor: GREEN,
                  color: GREEN,
                }}
              >
                Start game
              </button>
              <button
                className="rounded-sm border-2 px-6 py-3 font-mono uppercase tracking-[0.2em] text-black"
                style={{
                  backgroundColor: GREEN,
                  borderColor: GREEN,
                }}
              >
                View scores
              </button>
            </div>
            <p className="mt-6 text-xs font-mono text-lime-200/80">
              Use a tight grid, square corners, and simple blocks to keep the retro
              feel. Two main colors: {GREEN} and black.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div
              className="relative aspect-square w-full max-w-sm border-2"
              style={{ borderColor: GREEN }}
            >
              <div className="absolute inset-2 grid grid-cols-8 grid-rows-8 gap-[2px]">
                {Array.from({ length: 64 }).map((_, i) => {
                  const isSnake = [3, 4, 5, 13, 21].includes(i)
                  const isFood = i === 46
                  return (
                    <div
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      style={{
                        backgroundColor: isSnake
                          ? GREEN
                          : isFood
                          ? '#222'
                          : 'transparent',
                        boxShadow: isSnake ? `0 0 0 1px #000` : 'none',
                      }}
                    />
                  )
                })}
              </div>
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between text-[0.65rem] font-mono">
                <span style={{ color: GREEN }}>SCORE 00042</span>
                <span style={{ color: GREEN }}>LEVEL 01</span>
              </div>
            </div>
          </div>
        </section>

        <div
          className="mt-12 flex flex-wrap gap-3 text-xs font-mono"
          style={{ color: GREEN }}
        >
          <Link
            to="/sample-templates"
            className="rounded-sm border-2 px-4 py-2 font-semibold"
            style={{ borderColor: GREEN }}
          >
            Back to sample templates
          </Link>
          <Link
            to="/"
            className="rounded-sm border-2 px-4 py-2 font-semibold"
            style={{ borderColor: GREEN }}
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}

