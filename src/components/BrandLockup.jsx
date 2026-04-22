export default function BrandLockup({ theme = 'dark' }) {
  const isDark = theme === 'dark'

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <span
        className={`font-inter uppercase ${isDark ? 'text-white/40' : 'text-black/40'}`}
        style={{ fontSize: '7px', letterSpacing: '0.22em', fontWeight: 500 }}
      >
        Official XAG Distributor — USA
      </span>
      <div className="flex items-center gap-2.5">
        <img
          src="./agrifuture-logo.png"
          alt="AgriFuture"
          className="h-6 w-auto"
          style={{
            filter: isDark
              ? 'brightness(2) contrast(1.1)'
              : 'none',
          }}
        />
        <div className={`w-px h-4 ${isDark ? 'bg-white/15' : 'bg-black/15'}`} />
        <div className="flex flex-col gap-0.5">
          <span
            className={`font-inter font-semibold ${isDark ? 'text-white/80' : 'text-black/80'}`}
            style={{ fontSize: '9px', letterSpacing: '0.04em' }}
          >
            agrifuture.tech
          </span>
          <span
            className={`font-inter ${isDark ? 'text-white/30' : 'text-black/30'}`}
            style={{ fontSize: '7px', letterSpacing: '0.02em' }}
          >
            +1 724-923-6024
          </span>
        </div>
      </div>
    </div>
  )
}
