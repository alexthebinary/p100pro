import BrandLockup from './BrandLockup'

export default function CardThree() {
  return (
    <div
      className="relative w-[270px] h-[480px] bg-white rounded-[18px] overflow-hidden font-inter cursor-pointer"
      onClick={() => window.open('https://agrifuture.tech/collections/p100-pro', '_blank')}
    >
      {/* Subtle warm gray gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 60%, #F0F0F0 100%)',
          zIndex: 0,
        }}
      />

      {/* Drone image — right side, faded */}
      <img
        src="./p100-modular.png"
        alt="XAG P100 Pro modular"
        className="absolute pointer-events-none animate-float"
        style={{
          top: '60px',
          right: '-50px',
          width: '220px',
          opacity: 0.12,
          zIndex: 1,
          filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.15))',
        }}
      />

      <div className="shine-sweep delay-2" />

      <div className="relative z-20 flex flex-col h-full p-5 justify-between">
        {/* Top: P100 PRO title */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          <h3
            className="font-grotesk uppercase"
            style={{ fontSize: '18px', letterSpacing: '0.08em', color: '#1A1A1A' }}
          >
            P100 Pro
          </h3>
          <div
            className="mt-1"
            style={{ width: 28, height: 2, background: '#E34F4F' }}
          />
        </div>

        {/* Big headline */}
        <div>
          <h2
            className="font-inter tracking-tight animate-fade-in-up"
            style={{
              fontSize: '32px',
              lineHeight: 1.0,
              letterSpacing: '-1.2px',
              fontWeight: 600,
              color: '#1A1A1A',
              animationDelay: '0.2s',
              opacity: 0,
            }}
          >
            Precision
            <br />
            in every
            <br />
            <span
              className="bg-clip-text text-transparent gradient-shimmer"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #1A1A1A 0%, #E34F4F 100%)',
              }}
            >
              drop.
            </span>
          </h2>
        </div>

        {/* Spec rows */}
        <div
          className="flex flex-col gap-1.5 animate-fade-in-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          {[
            { label: 'TANK', value: '60L Smart Tank' },
            { label: 'SPRAY', value: '5-10m \u00B7 22 L/min' },
            { label: 'RADAR', value: '4D Imaging \u00B7 80m' },
            { label: 'BATTERY', value: '11 min \u00B7 962 Wh' },
            { label: 'SPEED', value: '13.8 m/s Max' },
          ].map((spec, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-lg px-3 py-1.5"
              style={{
                background: 'rgba(0,0,0,0.02)',
              }}
            >
              {/* Red accent bar */}
              <div
                style={{
                  width: 2,
                  height: 20,
                  background: '#E34F4F',
                  borderRadius: 1,
                  flexShrink: 0,
                }}
              />
              <div className="flex flex-col">
                <span
                  className="font-inter uppercase"
                  style={{
                    fontSize: '7px',
                    letterSpacing: '0.12em',
                    color: 'rgba(0,0,0,0.4)',
                    fontWeight: 500,
                  }}
                >
                  {spec.label}
                </span>
                <span
                  className="font-inter"
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#1A1A1A',
                  }}
                >
                  {spec.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge + lockup */}
        <div
          className="flex flex-col gap-3 animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <span
            className="rounded-full px-3 py-1.5 font-inter text-white flex items-center justify-center w-full"
            style={{
              fontSize: '7px',
              fontWeight: 600,
              background: '#1A1A1A',
              letterSpacing: '0.1em',
            }}
          >
            CENTIMETER-LEVEL RTK POSITIONING
          </span>
          <BrandLockup theme="light" />
        </div>
      </div>
    </div>
  )
}
