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
          {/* Mask to fade out lights in the center text area */}
          <radialGradient id="text-fade-gradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.3" />
            <stop offset="70%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </radialGradient>
          <mask id="text-area-mask">
            {/* White (visible) everywhere, but fades to transparent in center where text is */}
            <rect width="100" height="100" fill="url(#text-fade-gradient)" />
          </mask>
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

        {/* Traffic lights - Each on different streets, moving independently */}
        {/* Group all lights and apply mask to fade them out in text area */}
        <g mask="url(#text-area-mask)">
          <g className="animate-traffic-light-1">
            <circle r="0.5" fill="rgba(255,255,255,1)" />
          </g>
          <g className="animate-traffic-light-2">
            <circle r="0.5" fill="rgba(255,255,255,1)" />
          </g>
          <g className="animate-traffic-light-3">
            <circle r="0.5" fill="rgba(255,255,255,1)" />
          </g>
          <g className="animate-traffic-light-4">
            <circle r="0.5" fill="rgba(255,255,255,1)" />
          </g>
          <g className="animate-traffic-light-5">
            <circle r="0.5" fill="rgba(255,255,255,1)" />
          </g>
          <g className="animate-traffic-light-6">
            <circle r="0.5" fill="rgba(255,255,255,1)" />
          </g>
          <g className="animate-traffic-light-7">
            <circle r="0.5" fill="rgba(255,255,255,1)" />
          </g>
          <g className="animate-traffic-light-8">
            <circle r="0.5" fill="rgba(255,255,255,1)" />
          </g>
        </g>
      </svg>
    </div>
  );
}
