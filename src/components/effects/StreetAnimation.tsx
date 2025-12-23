export function StreetAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
      >
        {/* Define the light path (hidden, used for animation) */}
        <defs>
          <path
            id="light-path"
            d="M20,35 L20,54 L60,54 L60,40 L80,40 L80,61 L40,61 L40,47 L20,47 Z"
          />

          {/* Blur filters for light glow effect */}
          <filter id="light-blur-core">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
          <filter id="light-blur-middle">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
          <filter id="light-blur-outer">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Street Grid - Vertical Streets */}
        <line x1="20" y1="35" x2="20" y2="65" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" />
        <line x1="40" y1="35" x2="40" y2="65" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" />
        <line x1="60" y1="35" x2="60" y2="65" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" />
        <line x1="80" y1="35" x2="80" y2="65" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" />

        {/* Street Grid - Horizontal Streets */}
        <line x1="15" y1="40" x2="85" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" />
        <line x1="15" y1="47" x2="85" y2="47" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" />
        <line x1="15" y1="54" x2="85" y2="54" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" />
        <line x1="15" y1="61" x2="85" y2="61" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" />

        {/* Animated Light - Multi-layer glow */}
        <g className="animate-street-light">
          {/* Outer atmospheric glow */}
          <circle
            r="1.2"
            fill="rgba(150,180,255,0.2)"
            filter="url(#light-blur-outer)"
          />

          {/* Middle glow */}
          <circle
            r="0.8"
            fill="rgba(200,220,255,0.4)"
            filter="url(#light-blur-middle)"
          />

          {/* Core bright center */}
          <circle
            r="0.4"
            fill="rgba(255,255,255,0.9)"
            filter="url(#light-blur-core)"
          />
        </g>
      </svg>
    </div>
  );
}
