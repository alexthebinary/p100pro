import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import BrandLockup from './BrandLockup'

const TIERS = [
  {
    name: 'Lite',
    config: '4 Batteries · 4 Chargers · PCK',
    price: '$17,999',
    was: '$27,999',
    save: '$10,000',
  },
  {
    name: 'Standard',
    config: '6 Batteries · 2 Chargers',
    price: '$18,999',
    was: '$29,999',
    save: '$11,000',
    badge: 'POPULAR',
  },
  {
    name: 'Premium',
    config: '8 Batteries · 3 Chargers',
    price: '$19,999',
    was: '$34,900',
    save: '$14,901',
    badge: 'BEST VALUE',
  },
]

export default function CardFour() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(a => (a + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative w-[270px] h-[480px] bg-[#0a0a0a] rounded-[18px] overflow-hidden cursor-pointer"
      onClick={() => window.open('https://agrifuture.tech/collections/p100-pro', '_blank')}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, #141414 0%, #0a0a0a 65%)',
        }}
      />
      <div className="shine-sweep delay-3" />

      <div className="relative z-10 flex flex-col h-full justify-between px-5 pt-6 pb-5">
        {/* Header */}
        <div className="text-center animate-fade-rise">
          <h2
            className="font-grotesk text-white uppercase"
            style={{ fontSize: '26px', letterSpacing: '-0.5px' }}
          >
            Choose Your Kit
          </h2>
          <p
            className="font-inter text-white/35 mt-1.5"
            style={{ fontSize: '8.5px', letterSpacing: '0.03em' }}
          >
            All kits include RTK, 60L RevoSpray, Cooling Tower
          </p>
        </div>

        {/* Tier cards */}
        <div className="flex flex-col gap-2">
          {TIERS.map(({ name, config, price, was, save, badge }, i) => {
            const isActive = i === active
            return (
              <div
                key={name}
                className="rounded-xl relative"
                style={{
                  padding: '12px 14px',
                  border: isActive
                    ? '1.5px solid rgba(227,79,79,0.4)'
                    : '1px solid rgba(255,255,255,0.06)',
                  background: isActive
                    ? 'rgba(227,79,79,0.06)'
                    : 'rgba(255,255,255,0.02)',
                  boxShadow: isActive
                    ? '0 0 20px rgba(227,79,79,0.08), inset 0 1px 1px rgba(255,255,255,0.04)'
                    : 'none',
                  transition: 'all 0.5s ease',
                }}
              >
                {badge && (
                  <span
                    className="absolute rounded-full font-inter text-white uppercase"
                    style={{
                      top: -7,
                      right: 12,
                      fontSize: '6.5px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '2px 8px',
                      background: '#E34F4F',
                    }}
                  >
                    {badge}
                  </span>
                )}

                {/* Top row — name + config */}
                <div className="flex items-baseline justify-between">
                  <h3
                    className="font-inter text-white"
                    style={{
                      fontSize: '14px',
                      fontWeight: isActive ? 700 : 600,
                      transition: 'font-weight 0.3s',
                    }}
                  >
                    {name}
                  </h3>
                  <span
                    className="font-inter text-white/25 line-through"
                    style={{ fontSize: '10px' }}
                  >
                    {was}
                  </span>
                </div>

                {/* Config */}
                <p
                  className="font-inter text-white/35"
                  style={{ fontSize: '8px', marginTop: 2, letterSpacing: '0.02em' }}
                >
                  {config}
                </p>

                {/* Price row */}
                <div className="flex items-baseline justify-between" style={{ marginTop: 6 }}>
                  <span
                    className="font-poppins text-white"
                    style={{
                      fontSize: isActive ? '22px' : '18px',
                      fontWeight: 700,
                      letterSpacing: '-0.5px',
                      transition: 'font-size 0.5s ease',
                    }}
                  >
                    {price}
                  </span>
                  <span
                    className="font-inter"
                    style={{
                      fontSize: '9px',
                      fontWeight: 600,
                      color: isActive ? '#E34F4F' : 'rgba(227,79,79,0.5)',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    Save {save}
                  </span>
                </div>
              </div>
            )
          })}
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
              View All Kits
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-white arrow-bounce" />
          </div>
          <BrandLockup theme="dark" />
        </div>
      </div>
    </div>
  )
}
