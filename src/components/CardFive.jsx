import BrandLockup from './BrandLockup'

const SENSORS = [
  { icon: 'R', label: '4D Radar', val: '1.5-80m Detection', sub: 'Obstacle avoidance 2.5m' },
  { icon: 'T', label: 'Terrain', val: '0.5-100m Range', sub: 'Adaptive altitude hold' },
  { icon: 'F', label: 'FPV Camera', val: '1080p 30fps', sub: '1/2.9" CMOS live' },
  { icon: 'G', label: 'RTK', val: '±10cm Precision', sub: 'Centimeter positioning' },
  { icon: 'M', label: 'Mapping', val: 'RealTerra 2 · 12MP', sub: '2.7mm focal length' },
]

export default function CardFive() {
  return (
    <div
      className="relative w-[270px] h-[480px] bg-[#0a0a0a] rounded-[18px] overflow-hidden scanlines grain cursor-pointer"
      onClick={() => window.open('https://agrifuture.tech/collections/p100-pro', '_blank')}
    >
      {/* Field background — faint, darkened */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(./dimensional-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.18) saturate(0.5)',
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.85) 100%)',
        }}
      />
      {/* Red radial glow top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 85% 10%, rgba(227,79,79,0.08) 0%, transparent 50%)',
        }}
      />

      {/* Code grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />

      <div className="shine-sweep delay-1" />

      <div className="relative z-10 flex flex-col h-full justify-between p-5">
        <div>
          {/* Label */}
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E34F4F] urgent-dot" />
            <span
              className="font-inter text-white/60 uppercase"
              style={{ fontSize: '9px', letterSpacing: '0.28em' }}
            >
              Intelligent Systems
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-grotesk text-white uppercase tracking-tight"
            style={{ fontSize: '36px', lineHeight: 0.88, letterSpacing: '-1.2px' }}
          >
            See{' '}
            <span
              className="bg-clip-text text-transparent gradient-shimmer"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #E34F4F 0%, #FF7B7B 50%, #E34F4F 100%)',
                display: 'inline-block',
              }}
            >
              Everything.
            </span>
          </h2>
        </div>

        {/* Sensor rows */}
        <div className="flex flex-col gap-2">
          {SENSORS.map(({ icon, label, val, sub }, i) => (
            <div
              key={label}
              className="flex items-start gap-2.5 border border-white/[0.06] rounded-md p-2 animate-fade-in-up"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <div className="w-[18px] h-[18px] rounded bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span
                  className="font-inter font-bold text-[#E34F4F]"
                  style={{ fontSize: '9px' }}
                >
                  {icon}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div
                  className="font-inter text-white/40 uppercase"
                  style={{ fontSize: '7px', letterSpacing: '0.2em' }}
                >
                  {label}
                </div>
                <div
                  className="font-inter font-semibold text-white truncate"
                  style={{ fontSize: '10px', lineHeight: 1.15 }}
                >
                  {val}
                </div>
                <div
                  className="font-inter text-white/35 truncate"
                  style={{ fontSize: '8px' }}
                >
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        <BrandLockup theme="dark" />
      </div>
    </div>
  )
}
