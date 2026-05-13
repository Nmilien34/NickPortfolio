const charcoal = '#555b60';
const accent = '#2f5f7c';
const sand = '#c39a62';

type HumanFigureProps = {
  x: number;
  hunched?: boolean;
  children?: React.ReactNode;
  className?: string;
};

function HumanFigure({ x, hunched = false, children, className = '' }: HumanFigureProps) {
  const lean = hunched ? -8 : 0;
  const headY = hunched ? 65 : 54;
  const torso = hunched
    ? 'M-10 82 C-22 112 -20 145 -8 174 C6 178 19 174 23 163 C10 133 13 103 4 82 C0 74 -7 74 -10 82 Z'
    : 'M-15 76 C-22 102 -20 143 -8 176 C6 181 21 176 24 163 C13 132 13 100 5 77 C1 67 -10 67 -15 76 Z';

  return (
    <g className={`evolution-walk-stage ${className}`} transform={`translate(${x} 0)`}>
      <g transform={`rotate(${lean} 0 116)`}>
        <ellipse cx="-3" cy={headY} rx="15" ry="17" fill={charcoal} />
        <path d={torso} fill={charcoal} />

        <path
          d="M-9 97 C-23 115 -34 132 -43 153 C-39 159 -31 162 -26 157 C-15 137 -4 122 10 107 C9 99 0 94 -9 97 Z"
          fill={charcoal}
        />
        <path
          d="M9 98 C22 112 35 124 50 135 C56 132 59 124 54 119 C41 109 29 96 16 83 C8 86 5 93 9 98 Z"
          fill={charcoal}
        />

        <path
          d="M-4 171 C-17 200 -29 226 -46 249 C-40 257 -28 258 -22 251 C-6 230 8 202 18 177 C15 169 4 166 -4 171 Z"
          fill={charcoal}
        />
        <path
          d="M16 171 C33 194 47 216 58 242 C66 245 77 239 76 230 C67 206 53 181 34 158 C25 157 17 162 16 171 Z"
          fill={charcoal}
        />

        <ellipse cx="-43" cy="251" rx="18" ry="7" fill={charcoal} transform="rotate(-8 -43 251)" />
        <ellipse cx="68" cy="239" rx="19" ry="7" fill={charcoal} transform="rotate(8 68 239)" />
      </g>
      {children}
    </g>
  );
}

function Stick() {
  return (
    <path
      d="M-56 111 C-62 151 -68 194 -75 245"
      fill="none"
      stroke="#8b7658"
      strokeLinecap="round"
      strokeWidth="9"
    />
  );
}

function Calculator() {
  return (
    <g transform="translate(38 116) rotate(8)">
      <rect width="34" height="46" x="-17" y="-23" rx="5" fill={accent} />
      <rect width="20" height="8" x="-10" y="-15" rx="2" fill="#f3f0ea" opacity="0.9" />
      {[-8, 0, 8].map((cx) =>
        [-2, 7, 16].map((cy) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.4" fill="#f3f0ea" opacity="0.85" />),
      )}
    </g>
  );
}

function CrtComputer() {
  return (
    <g transform="translate(42 113)">
      <rect x="-31" y="-38" width="62" height="48" rx="8" fill={charcoal} />
      <rect x="-21" y="-27" width="42" height="25" rx="4" fill="#f3f0ea" />
      <rect x="-34" y="12" width="68" height="13" rx="3" fill={charcoal} />
      <rect x="-45" y="30" width="90" height="20" rx="4" fill={charcoal} />
      <path d="M-31 36 H31" stroke="#f3f0ea" strokeLinecap="round" strokeWidth="4" opacity="0.9" />
      <rect x="-14" y="-20" width="28" height="12" rx="2" fill={accent} opacity="0.35" />
    </g>
  );
}

function Laptop() {
  return (
    <g transform="translate(44 116)">
      <path d="M-34 -24 H31 V14 H-34 Z" fill={charcoal} />
      <rect x="-24" y="-16" width="45" height="20" rx="2" fill="#f3f0ea" opacity="0.95" />
      <path d="M-43 22 H45 L57 37 H-57 Z" fill={charcoal} />
      <path d="M-28 28 H26" stroke={accent} strokeLinecap="round" strokeWidth="4" />
    </g>
  );
}

function Phone() {
  return (
    <g transform="translate(43 103) rotate(9)">
      <rect x="-10" y="-22" width="20" height="44" rx="5" fill={accent} />
      <rect x="-6" y="-16" width="12" height="27" rx="2" fill="#f3f0ea" opacity="0.9" />
      <circle cx="0" cy="16" r="2" fill="#f3f0ea" opacity="0.9" />
    </g>
  );
}

function AiHalo() {
  const nodes = [
    [-38, 44],
    [-18, 22],
    [12, 15],
    [42, 31],
    [55, 63],
    [34, 92],
  ];

  return (
    <g className="evolution-walk-ai-halo" fill="none" stroke={accent} strokeWidth="2.5" transform="translate(0 0)">
      <path d="M-42 66 C-29 24 21 5 53 37 C80 65 58 107 17 109" opacity="0.45" />
      <path d="M-18 22 L12 15 L42 31 L55 63 L34 92" opacity="0.35" />
      {nodes.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill={accent} stroke="none" />
      ))}
    </g>
  );
}

function Robot({ x }: { x: number }) {
  return (
    <g className="evolution-walk-stage evolution-walk-stage-7" transform={`translate(${x} 0)`}>
      <rect x="-20" y="46" width="40" height="34" rx="11" fill={charcoal} />
      <rect x="-28" y="88" width="56" height="72" rx="10" fill={charcoal} />
      <rect x="-15" y="103" width="30" height="14" rx="3" fill="#f3f0ea" opacity="0.9" />
      <path d="M-39 103 C-55 122 -63 141 -64 161 C-58 166 -50 166 -45 160 C-42 145 -34 130 -22 115 Z" fill={charcoal} />
      <path d="M38 102 C54 119 64 136 70 155 C66 162 57 165 51 159 C45 143 35 130 22 116 Z" fill={charcoal} />
      <path d="M-18 158 C-31 186 -40 212 -51 244 C-45 252 -32 254 -27 246 C-16 219 -5 191 8 163 Z" fill={charcoal} />
      <path d="M18 158 C35 182 49 207 59 236 C66 241 78 237 78 228 C69 203 55 178 36 154 Z" fill={charcoal} />
      <ellipse cx="-50" cy="247" rx="18" ry="7" fill={charcoal} transform="rotate(-8 -50 247)" />
      <ellipse cx="69" cy="235" rx="18" ry="7" fill={charcoal} transform="rotate(8 69 235)" />
      <path d="M0 46 V30" stroke={accent} strokeLinecap="round" strokeWidth="6" />
      <circle cx="0" cy="24" r="6" fill={accent} />
      <circle cx="-8" cy="61" r="3" fill="#f3f0ea" />
      <circle cx="8" cy="61" r="3" fill="#f3f0ea" />
    </g>
  );
}

export function EvolutionWalkAnimation() {
  return (
    <div className="evolution-walk relative mx-auto w-full max-w-6xl overflow-hidden px-1 sm:px-4" aria-hidden="true">
      <style>
        {`
          .evolution-walk svg {
            display: block;
            width: 100%;
            height: auto;
          }

          .evolution-walk-stage {
            animation: evolution-stage-focus 10.5s ease-in-out infinite;
          }

          .evolution-walk-stage-1 { animation-delay: 0s; }
          .evolution-walk-stage-2 { animation-delay: -9s; }
          .evolution-walk-stage-3 { animation-delay: -7.5s; }
          .evolution-walk-stage-4 { animation-delay: -6s; }
          .evolution-walk-stage-5 { animation-delay: -4.5s; }
          .evolution-walk-stage-6 { animation-delay: -3s; }
          .evolution-walk-stage-7 { animation-delay: -1.5s; }

          .evolution-walk-ai-halo {
            animation: evolution-ai-halo 3s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }

          .evolution-walk-ground {
            animation: evolution-ground-breathe 10.5s ease-in-out infinite;
          }

          @keyframes evolution-stage-focus {
            0%, 100% {
              opacity: 0.58;
            }

            12%, 22% {
              opacity: 1;
            }

            34% {
              opacity: 0.62;
            }
          }

          @keyframes evolution-ai-halo {
            0%, 100% {
              opacity: 0.6;
              transform: scale(0.96);
            }

            50% {
              opacity: 1;
              transform: scale(1.05);
            }
          }

          @keyframes evolution-ground-breathe {
            0%, 100% {
              opacity: 0.54;
            }

            50% {
              opacity: 0.75;
            }
          }

          @media (max-width: 640px) {
            .evolution-walk {
              max-width: 42rem;
              width: 82vw;
              margin-left: auto;
              margin-right: auto;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .evolution-walk-stage,
            .evolution-walk-ai-halo,
            .evolution-walk-ground {
              animation: none;
            }

            .evolution-walk-stage {
              opacity: 0.9;
            }
          }
        `}
      </style>

      <svg viewBox="0 0 1220 340" role="img" focusable="false">
        <defs>
          <linearGradient id="evolutionGroundBand" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor={sand} stopOpacity="0" />
            <stop offset="0.14" stopColor={sand} stopOpacity="0.22" />
            <stop offset="0.5" stopColor={sand} stopOpacity="0.56" />
            <stop offset="0.86" stopColor={sand} stopOpacity="0.22" />
            <stop offset="1" stopColor={sand} stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className="evolution-walk-ground">
          <path d="M66 268 C255 252 412 276 596 265 C789 253 968 254 1156 269" fill="none" stroke="url(#evolutionGroundBand)" strokeWidth="18" strokeLinecap="round" />
          <path d="M114 275 C338 283 573 281 808 274 C930 271 1044 272 1108 276" fill="none" stroke="#8b7658" strokeOpacity="0.22" strokeWidth="3" strokeLinecap="round" />
        </g>

        <HumanFigure x={118} hunched className="evolution-walk-stage-1">
          <Stick />
        </HumanFigure>

        <HumanFigure x={260} className="evolution-walk-stage-2">
          <Calculator />
        </HumanFigure>

        <HumanFigure x={402} className="evolution-walk-stage-3">
          <CrtComputer />
        </HumanFigure>

        <HumanFigure x={544} className="evolution-walk-stage-4">
          <Laptop />
        </HumanFigure>

        <HumanFigure x={686} className="evolution-walk-stage-5">
          <Phone />
        </HumanFigure>

        <HumanFigure x={828} className="evolution-walk-stage-6">
          <Phone />
          <AiHalo />
        </HumanFigure>

        <Robot x={990} />
      </svg>
    </div>
  );
}
