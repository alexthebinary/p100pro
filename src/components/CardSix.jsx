import BrandLockup from './BrandLockup'

export default function CardSix() {
  return (
    <div
      className="relative w-[270px] h-[480px] bg-black rounded-[18px] overflow-hidden scanlines grain cursor-pointer"
      onClick={() => window.open('https://agrifuture.tech/collections/p100-pro', '_blank')}
    >
      {/* Ken Burns field background */}
      <img
        src="./field-hero.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns-slow pointer-events-none"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Subtle rotating red conic halo */}
      <div
        aria-hidden
        className="absolute rotate-slow z-[1] pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          width: '500px',
          height: '500px',
          translate: '-50% -50%',
          background:
            'conic-gradient(from 0deg, transparent 0deg, rgba(227,79,79,0.12) 60deg, transparent 120deg, transparent 240deg, rgba(227,79,79,0.08) 300deg, transparent 360deg)',
          filter: 'blur(18px)',
        }}
      />

      {/* Twinkle dots — white */}
      <div
        className="absolute twinkle bg-white rounded-full z-[2]"
        style={{ top: '12%', left: '16%', width: 3, height: 3 }}
      />
      <div
        className="absolute twinkle bg-white/80 rounded-full z-[2]"
        style={{ top: '38%', left: '88%', width: 3, height: 3, animationDelay: '0.7s' }}
      />
      <div
        className="absolute twinkle bg-white/60 rounded-full z-[2]"
        style={{ top: '22%', left: '78%', width: 2, height: 2, animationDelay: '1.3s' }}
      />

      <div className="shine-sweep delay-2" />

      <div className="relative z-10 flex flex-col h-full justify-between p-5">
        {/* Top: Trust badge stickers */}
        <div className="flex items-center justify-center gap-2 animate-fade-rise">
          {[
            { line1: 'USA', line2: 'Stock' },
            { line1: 'Local', line2: 'Service' },
            { line1: '12 Month', line2: 'Warranty' },
          ].map(({ line1, line2 }, i) => (
            <div
              key={i}
              style={{
                width: 68,
                height: 68,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.15)',
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.08)',
              }}
            >
              <span
                className="font-inter uppercase"
                style={{
                  fontSize: '8px',
                  fontWeight: 700,
                  color: '#E34F4F',
                  letterSpacing: '0.08em',
                  lineHeight: 1.1,
                }}
              >
                {line1}
              </span>
              <span
                className="font-inter uppercase"
                style={{
                  fontSize: '9px',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.9)',
                  letterSpacing: '0.06em',
                  lineHeight: 1.1,
                }}
              >
                {line2}
              </span>
              <div
                style={{
                  width: 16,
                  height: 1.5,
                  borderRadius: 1,
                  background: '#E34F4F',
                  marginTop: 3,
                  opacity: 0.6,
                }}
              />
            </div>
          ))}
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center text-center">
          {/* From label */}
          <span
            className="font-inter text-white/50"
            style={{ fontSize: '12px' }}
          >
            From
          </span>

          {/* Big price */}
          <h2
            className="font-poppins font-medium text-white tracking-tight"
            style={{ fontSize: '42px', lineHeight: 0.95, letterSpacing: '-0.04em' }}
          >
            <span
              className="bg-clip-text text-transparent gradient-shimmer glow-pulse"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #E34F4F 0%, #FF7B7B 50%, #E34F4F 100%)',
                display: 'inline-block',
                textShadow: '0 0 30px rgba(227,79,79,0.5)',
                filter: 'drop-shadow(0 0 20px rgba(227,79,79,0.4))',
              }}
            >
              $17,999
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="font-instrument italic text-white/70 mt-2"
            style={{ fontSize: '18px', lineHeight: 1.15 }}
          >
            60L spray drone<br />ready to fly.
          </p>

          {/* Trust signals */}
          <div className="flex flex-col gap-1.5 mt-3 items-center">
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#4A7C3F', boxShadow: '0 0 4px rgba(74,124,63,0.6)' }}
              />
              <span
                className="font-inter text-white/60"
                style={{ fontSize: '9px', fontWeight: 500 }}
              >
                In Stock — Ships This Week
              </span>
            </div>
            <span
              className="font-inter text-white/35"
              style={{ fontSize: '7.5px', letterSpacing: '0.04em' }}
            >
              Local USA Stock + Service + Warranty
            </span>
          </div>

          {/* CTA Button */}
          <div
            className="mt-4 w-full rounded-full px-5 py-2.5 box-glow-pulse text-center"
            style={{
              background: 'linear-gradient(135deg, #E34F4F 0%, #C23A3A 100%)',
              boxShadow: '0 0 20px rgba(227,79,79,0.3), 0 0 40px rgba(227,79,79,0.15)',
            }}
          >
            <span
              className="font-grotesk text-white uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.18em' }}
            >
              Shop at AgriFuture.tech
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3">
          {/* Savings badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 self-center"
            style={{ background: 'rgba(227,79,79,0.15)', border: '1px solid rgba(227,79,79,0.3)' }}
          >
            <span
              className="font-inter uppercase"
              style={{ fontSize: '8px', letterSpacing: '0.1em', color: '#FF7B7B', fontWeight: 600 }}
            >
              Save up to $14,901 — sale pricing
            </span>
          </div>
          <BrandLockup theme="dark" />
        </div>
      </div>
    </div>
  )
}
