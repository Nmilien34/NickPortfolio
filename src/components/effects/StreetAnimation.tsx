export function StreetAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-60">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Blur filters for light glow effect */}
          <filter id="light-blur-core">
            <feGaussianBlur stdDeviation="0.4" />
          </filter>
          <filter id="light-blur-middle">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
          <filter id="light-blur-outer">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Street Grid - Very subtle dark streets (barely visible) */}
        {/* Vertical Streets */}
        <line x1="15" y1="30" x2="15" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" />
        <line x1="30" y1="30" x2="30" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" />
        <line x1="50" y1="30" x2="50" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" />
        <line x1="70" y1="30" x2="70" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" />
        <line x1="85" y1="30" x2="85" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" />

        {/* Horizontal Streets */}
        <line x1="10" y1="35" x2="90" y2="35" stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" />
        <line x1="10" y1="45" x2="90" y2="45" stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" />
        <line x1="10" y1="55" x2="90" y2="55" stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" />
        <line x1="10" y1="65" x2="90" y2="65" stroke="rgba(255,255,255,0.05)" strokeWidth="0.15" />

        {/* Animated Light - White light moving through streets, avoiding text center */}
        <g className="animate-street-light">
          {/* Outer atmospheric glow */}
          <circle
            r="1.8"
            fill="rgba(255,255,255,0.12)"
            filter="url(#light-blur-outer)"
          />

          {/* Middle glow */}
          <circle
            r="1.2"
            fill="rgba(255,255,255,0.3)"
            filter="url(#light-blur-middle)"
          />

          {/* Core bright white center */}
          <circle
            r="0.6"
            fill="rgba(255,255,255,0.9)"
            filter="url(#light-blur-core)"
          />
        </g>
      </svg>
    </div>
  );
}
