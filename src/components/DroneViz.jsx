/**
 * CSS 3D layered drone visualization.
 * Uses the real P100 Pro product cutout as the hero layer,
 * with depth-separated effects: glow plane, scan lines,
 * ground shadow, and particle ring — all at different Z depths
 * for real parallax on mouse movement.
 */

export default function DroneViz({ className = '', style = {} }) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {/* Layer 0 (Z: -40px) — ground shadow ellipse */}
      <div
        style={{
          position: 'absolute',
          bottom: '-18%',
          left: '12%',
          width: '76%',
          height: '22%',
          transform: 'translateZ(-40px)',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)',
          filter: 'blur(12px)',
          animation: 'dv-shadow 5.5s ease-in-out infinite',
        }}
      />

      {/* Layer 1 (Z: -20px) — red glow disc behind drone */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80%',
          height: '55%',
          transform: 'translateZ(-20px)',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(227,79,79,0.1) 0%, rgba(227,79,79,0.04) 40%, transparent 65%)',
          filter: 'blur(16px)',
          animation: 'dv-glow 4s ease-in-out infinite alternate',
        }}
      />

      {/* Layer 2 (Z: -10px) — tech scan ring */}
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '5%',
          width: '90%',
          height: '60%',
          transform: 'translateZ(-10px)',
          pointerEvents: 'none',
        }}
      >
        {/* Orbit ring */}
        <div
          style={{
            position: 'absolute',
            inset: '5%',
            borderRadius: '50%',
            border: '1px solid rgba(227,79,79,0.08)',
            animation: 'dv-ring-rotate 12s linear infinite',
          }}
        >
          {/* Scan dot */}
          <div
            style={{
              position: 'absolute',
              top: '-3px',
              left: '50%',
              marginLeft: '-3px',
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#E34F4F',
              boxShadow: '0 0 8px rgba(227,79,79,0.6), 0 0 20px rgba(227,79,79,0.3)',
            }}
          />
        </div>
        {/* Second ring */}
        <div
          style={{
            position: 'absolute',
            inset: '15%',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.03)',
            animation: 'dv-ring-rotate 18s linear infinite reverse',
          }}
        />
      </div>

      {/* Layer 3 (Z: 0) — THE ACTUAL DRONE IMAGE */}
      <img
        src="./p100-drone-cutout.png"
        alt="XAG P100 Pro"
        draggable={false}
        style={{
          position: 'absolute',
          top: '8%',
          left: '3%',
          width: '94%',
          height: 'auto',
          transform: 'translateZ(0px)',
          pointerEvents: 'none',
          filter:
            'drop-shadow(0 4px 12px rgba(0,0,0,0.4)) drop-shadow(0 0 30px rgba(227,79,79,0.08))',
        }}
      />

      {/* Layer 4 (Z: +25px) — floating data points */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: 'translateZ(25px)',
          pointerEvents: 'none',
        }}
      >
        {/* Spec callout — top right */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '2%',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            animation: 'dv-fade-in 1s ease-out 0.5s both',
          }}
        >
          <div style={{
            width: 3, height: 3, borderRadius: '50%',
            background: '#E34F4F',
            boxShadow: '0 0 4px rgba(227,79,79,0.6)',
          }} />
          <div style={{
            width: 18, height: 1,
            background: 'linear-gradient(90deg, rgba(227,79,79,0.5), transparent)',
          }} />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 7.5,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.1em',
            fontWeight: 500,
          }}>
            50kg
          </span>
        </div>

        {/* Spec callout — left */}
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '0%',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            animation: 'dv-fade-in 1s ease-out 0.8s both',
          }}
        >
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 7.5,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.1em',
            fontWeight: 500,
          }}>
            60L
          </span>
          <div style={{
            width: 16, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(227,79,79,0.5))',
          }} />
          <div style={{
            width: 3, height: 3, borderRadius: '50%',
            background: '#E34F4F',
            boxShadow: '0 0 4px rgba(227,79,79,0.6)',
          }} />
        </div>

        {/* Spec callout — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '22%',
            right: '8%',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            animation: 'dv-fade-in 1s ease-out 1.1s both',
          }}
        >
          <div style={{
            width: 3, height: 3, borderRadius: '50%',
            background: '#E34F4F',
            boxShadow: '0 0 4px rgba(227,79,79,0.6)',
          }} />
          <div style={{
            width: 14, height: 1,
            background: 'linear-gradient(90deg, rgba(227,79,79,0.5), transparent)',
          }} />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 7.5,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.1em',
            fontWeight: 500,
          }}>
            RTK
          </span>
        </div>
      </div>

      <style>{`
        @keyframes dv-shadow {
          0%, 100% { transform: translateZ(-40px) scale(1); opacity: 0.8; }
          50% { transform: translateZ(-40px) scale(1.05); opacity: 0.5; }
        }
        @keyframes dv-glow {
          0% { opacity: 0.6; }
          100% { opacity: 1; }
        }
        @keyframes dv-ring-rotate {
          to { transform: rotate(360deg); }
        }
        @keyframes dv-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
