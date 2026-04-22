import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import BrandLockup from './BrandLockup'

function AnimatedCounter({ end, duration = 1800 }) {
  const [value, setValue] = useState(0)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const progress = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setValue(0)
          setTimeout(() => setCycle(c => c + 1), 300)
        }, 2500)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, cycle])

  return <span>{value}</span>
}

export default function CardTwo() {
  return (
    <div
      className="relative w-[270px] h-[480px] bg-black rounded-[18px] overflow-hidden cursor-pointer"
      onClick={() => window.open('https://agrifuture.tech/collections/p100-pro', '_blank')}
    >
      {/* Field background — subtle, heavily darkened */}
      <div
        className="absolute inset-0 animate-ken-burns-slow"
        style={{
          backgroundImage: 'url(./p-series-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          filter: 'brightness(0.25) saturate(0.6)',
        }}
      />
      {/* Dark gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.85) 100%)',
        }}
      />
      <div className="shine-sweep delay-1" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between px-5 pt-6 pb-5">

        {/* Top — logo */}
        <div className="animate-fade-rise">
          <img
            src="./agrifuture-logo.png"
            alt="AgriFuture"
            className="h-5 w-auto"
            style={{ filter: 'brightness(2) contrast(1.1)' }}
          />
        </div>

        {/* Headline */}
        <div className="animate-fade-rise-delay" style={{ marginBottom: -4 }}>
          <h2
            className="font-inter text-white"
            style={{ fontSize: '26px', lineHeight: 1.2, letterSpacing: '-0.6px', fontWeight: 500 }}
          >
            Cover more acres.
            <br />
            Use less chemical.
            <br />
            <span className="font-instrument italic" style={{ color: '#E34F4F' }}>
              Spray smarter.
            </span>
          </h2>
        </div>

        {/* Stat counter card */}
        <div
          className="rounded-xl animate-fade-rise-delay-2"
          style={{
            padding: '14px 16px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex items-baseline gap-2">
            <span
              className="font-poppins text-white"
              style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1 }}
            >
              <AnimatedCounter end={47} duration={1800} />
            </span>
            <span
              className="font-inter text-white/40"
              style={{ fontSize: '13px', fontWeight: 400 }}
            >
              acres
            </span>
          </div>
          <p
            className="font-inter text-white/35"
            style={{ fontSize: '10px', marginTop: 4, lineHeight: 1.3 }}
          >
            sprayed in 2.5 hrs — one operator, one drone
          </p>
          {/* Progress bar */}
          <div
            style={{
              marginTop: 10,
              height: 3,
              borderRadius: 2,
              background: 'rgba(255,255,255,0.05)',
              overflow: 'hidden',
            }}
          >
            <div className="stat-bar-loop" />
          </div>
          <div
            className="flex justify-between font-inter"
            style={{ fontSize: '7.5px', marginTop: 5, color: 'rgba(255,255,255,0.2)' }}
          >
            <span>vs. 8 acres/hr manual</span>
            <span style={{ color: '#E34F4F', fontWeight: 600 }}>6x faster</span>
          </div>
        </div>

        {/* Quick specs — horizontal row */}
        <div
          className="flex items-center justify-between animate-fade-rise-delay-2"
          style={{ padding: '0 2px' }}
        >
          {[
            { val: '±10cm', label: 'Accuracy' },
            { val: '11 min', label: 'Recharge' },
            { val: 'IPX6K', label: 'Weather' },
          ].map(({ val, label }, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className="font-poppins text-white"
                style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '-0.3px' }}
              >
                {val}
              </span>
              <span
                className="font-inter text-white/30"
                style={{ fontSize: '7.5px', letterSpacing: '0.04em', marginTop: 1 }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom — CTA + lockup */}
        <div className="flex flex-col gap-2.5">
          <div
            className="w-full flex items-center justify-center gap-2 rounded-full py-2.5"
            style={{ background: '#E34F4F' }}
          >
            <span
              className="font-inter text-white uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.12em', fontWeight: 600 }}
            >
              View Kits
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-white arrow-bounce" />
          </div>
          <div className="flex items-center justify-center">
            <span
              className="font-inter text-white/25"
              style={{ fontSize: '7px', letterSpacing: '0.04em' }}
            >
              Local USA Stock + Service + Warranty
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .stat-bar-loop {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, #E34F4F, #FF7B7B);
          animation: stat-bar-fill 4.2s ease-in-out infinite;
        }
        @keyframes stat-bar-fill {
          0%   { width: 0%; }
          43%  { width: 78%; }
          90%  { width: 78%; }
          100% { width: 0%; }
        }
      `}</style>
    </div>
  )
}
