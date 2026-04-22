import { ArrowRight } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import BrandLockup from './BrandLockup'
import DroneViz from './DroneViz'

export default function CardOne() {
  const wrapRef = useRef(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [6, -6]), { stiffness: 140, damping: 16 })
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [-4, 4]), { stiffness: 140, damping: 16 })
  const droneX = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 })
  const droneY = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 20 })

  const onMove = (e) => {
    const r = wrapRef.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative cursor-pointer"
      style={{ width: 270, height: 480, perspective: 1200, transformStyle: 'preserve-3d' }}
      onClick={() => window.open('https://agrifuture.tech/collections/p100-pro', '_blank')}
    >
      <motion.div
        className="absolute inset-0 rounded-[18px] overflow-hidden"
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 rounded-[18px] overflow-hidden">
          {/* Dark bg with subtle grid */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 35%, #161616 0%, #0a0a0a 65%)',
            }}
          />
          {/* Tech grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse at 50% 40%, black 20%, transparent 70%)',
            }}
          />
          {/* Red ambient glow behind drone */}
          <div
            className="absolute"
            style={{
              top: '15%',
              left: '10%',
              right: '10%',
              height: '45%',
              background: 'radial-gradient(ellipse, rgba(227,79,79,0.08) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          <div className="shine-sweep" />
        </div>

        {/* Drone visualization — rises from text area, loops */}
        <motion.div
          className="absolute dv-rise-loop"
          style={{
            left: '2%',
            top: '10%',
            width: '96%',
            height: '48%',
            pointerEvents: 'none',
            translateZ: 60,
            x: droneX,
            y: droneY,
            zIndex: 5,
            transformStyle: 'preserve-3d',
          }}
        >
          <DroneViz />
        </motion.div>

        {/* Content — no header logo, more space for product */}
        <div
          className="absolute inset-0 flex flex-col justify-end px-5 pb-5 rounded-[18px]"
          style={{ pointerEvents: 'none', zIndex: 10 }}
        >
          <div className="flex flex-col gap-3">
            {/* Product title — bigger with more room */}
            <div className="animate-fade-rise">
              <h2
                className="font-grotesk text-white uppercase"
                style={{
                  fontSize: '56px',
                  lineHeight: 0.86,
                  letterSpacing: '-1.5px',
                }}
              >
                P100
                <br />
                <span style={{ color: '#E34F4F' }}>Pro</span>
              </h2>
              <p
                className="font-inter text-white/45 mt-2"
                style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.06em' }}
              >
                60L Spray Drone · 50kg Payload
              </p>
            </div>

            {/* Price + savings */}
            <div className="animate-fade-rise-delay">
              <div className="flex items-baseline gap-2.5">
                <span
                  className="font-poppins text-white"
                  style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '-0.5px' }}
                >
                  $17,999
                </span>
                <span
                  className="font-inter text-white/25 line-through"
                  style={{ fontSize: '14px' }}
                >
                  $27,999
                </span>
              </div>
              <span
                className="font-inter"
                style={{ fontSize: '10px', color: '#E34F4F', fontWeight: 500, letterSpacing: '0.02em' }}
              >
                Save up to $14,901
              </span>
            </div>

            {/* CTA */}
            <div
              className="w-full flex items-center justify-center gap-2 rounded-full py-2.5 animate-fade-rise-delay-2"
              style={{
                background: '#E34F4F',
                pointerEvents: 'auto',
              }}
            >
              <span
                className="font-inter text-white uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.12em', fontWeight: 600 }}
              >
                Shop Now
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white arrow-bounce" />
            </div>

            {/* Trust + lockup */}
            <div className="flex items-center justify-center animate-fade-rise-delay-2">
              <span
                className="font-inter text-white/25"
                style={{ fontSize: '7px', letterSpacing: '0.04em' }}
              >
                Local USA Stock + Service + Warranty
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
