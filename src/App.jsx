import { useEffect, useRef, useState } from 'react'
import CardOne from './components/CardOne'
import CardTwo from './components/CardTwo'
import CardThree from './components/CardThree'
import CardFour from './components/CardFour'
import CardFive from './components/CardFive'
import CardSix from './components/CardSix'
import { ChevronUp, ChevronDown } from 'lucide-react'
import DownloadMenu from './components/DownloadMenu'

const REELS = [
  { id: 'cta', Comp: CardSix, label: 'Shop', bg: '#0B0B0B' },
  { id: 'hero', Comp: CardOne, label: 'Hero', bg: '#0B0B0B' },
  { id: 'mission', Comp: CardTwo, label: 'Mission', bg: '#0B0B0B' },
  { id: 'specs', Comp: CardThree, label: 'Specs', bg: '#ffffff' },
  { id: 'kits', Comp: CardFour, label: 'Kits', bg: '#0B0B0B' },
  { id: 'tech', Comp: CardFive, label: 'Tech', bg: '#0B0B0B' },
]

export default function App() {
  const feedRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const el = feedRef.current
    if (!el) return
    const sections = el.querySelectorAll('[data-reel]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            const idx = Number(e.target.getAttribute('data-reel'))
            setActive(idx)
          }
        })
      },
      { root: el, threshold: [0.6, 0.9] }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const scrollTo = (idx) => {
    const el = feedRef.current?.querySelector(`[data-reel="${idx}"]`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  const go = (dir) => {
    const next = Math.max(0, Math.min(REELS.length - 1, active + dir))
    scrollTo(next)
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        go(1)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        go(-1)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  })

  return (
    <div
      className="fixed inset-0"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)',
      }}
    >
      <div
        ref={feedRef}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {REELS.map(({ id, Comp, bg }, i) => (
          <section
            key={id}
            data-reel={i}
            className="w-full h-screen snap-start snap-always flex items-center justify-center relative"
          >
            <ReelFrame cardId={id} bg={bg}><Comp /></ReelFrame>
          </section>
        ))}
      </div>

      {/* Progress rail */}
      <div
        className="fixed right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-40"
      >
        {REELS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="transition-all"
            style={{
              width: 6,
              height: i === active ? 22 : 6,
              borderRadius: 3,
              background: i === active ? '#E34F4F' : 'rgba(255,255,255,0.25)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: i === active ? '0 0 8px rgba(227,79,79,0.5)' : 'none',
            }}
            aria-label={`Go to reel ${i + 1}`}
          />
        ))}
      </div>

      {/* Desktop nav arrows */}
      <button
        onClick={() => go(-1)}
        className="fixed left-1/2 -translate-x-1/2 z-40 transition-opacity"
        style={{
          top: 12,
          opacity: active === 0 ? 0.15 : 0.6,
          background: 'none',
          border: 'none',
          cursor: active === 0 ? 'default' : 'pointer',
        }}
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => go(1)}
        className="fixed left-1/2 -translate-x-1/2 z-40 transition-opacity"
        style={{
          bottom: 12,
          opacity: active === REELS.length - 1 ? 0.15 : 0.6,
          background: 'none',
          border: 'none',
          cursor: active === REELS.length - 1 ? 'default' : 'pointer',
        }}
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}

function ReelFrame({ children, cardId, bg }) {
  const innerRef = useRef(null)

  return (
    <div
      className="relative"
      style={{
        width: 'min(calc(100vh * 9 / 16 - 48px), calc(100vw - 32px))',
        aspectRatio: '9 / 16',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 270,
          height: 480,
          transformOrigin: 'center',
          transform: 'scale(var(--reel-scale, 1))',
        }}
        ref={(el) => {
          innerRef.current = el
          if (!el) return
          const parent = el.parentElement
          if (!parent) return
          const update = () => {
            const h = parent.clientHeight
            el.style.setProperty('--reel-scale', String(h / 480))
          }
          update()
          const ro = new ResizeObserver(update)
          ro.observe(parent)
        }}
      >
        {children}
      </div>
      <div className="absolute inset-0 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <DownloadMenu cardRef={innerRef} cardId={cardId} bg={bg} />
        </div>
      </div>
    </div>
  )
}
