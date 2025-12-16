export function LogicFlow() {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4 md:p-8">
      {/* Part 1: The Insight */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-serif text-white mb-3 md:mb-4">The Insight</h2>
        <p className="text-normal-text font-mono text-xs md:text-sm mb-2 px-2">
          After analyzing user behavior and feedback, we discovered a fundamental truth:
        </p>
        <p className="text-sm md:text-lg text-normal-text font-mono italic px-2">
          Homeowners value <span className="font-bold text-white not-italic">context, expertise, predictability</span> over flexibility and control.
        </p>
        
        {/* Pivot Arrow */}
        <div className="mt-8 flex justify-center">
          <svg width="60" height="60" viewBox="0 0 60 60" className="text-white/40">
            <path
              d="M30 10 Q30 30, 30 50"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              style={{ strokeDasharray: '3,3' }}
            />
            <path
              d="M25 45 L30 50 L35 45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Part 2: The Tree Diagram */}
      <div className="flex flex-col items-center -mt-6 md:-mt-10">
        {/* Root Node */}
        <div className="bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-bold text-sm md:text-lg mb-2 shadow-md">
          Lawnstack's Subscription Model
        </div>

        {/* Arrow from Root to Brace */}
        <div className="mb-4 md:mb-6">
          <svg width="20" height="30" viewBox="0 0 20 30" className="text-white/40">
            <path
              d="M10 0 L10 25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M5 20 L10 25 L15 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Level 2 Nodes with Brace */}
        <div className="flex gap-4 md:gap-12 mb-6 md:mb-8 relative w-full max-w-2xl px-2">
          {/* Horizontal Brace above boxes */}
          <div className="absolute -top-6 left-0 right-0 flex items-center">
            {/* Left vertical line */}
            <div className="w-0.5 h-6 bg-white/40"></div>
            {/* Horizontal line */}
            <div className="flex-1 h-0.5 bg-white/40"></div>
            {/* Right vertical line */}
            <div className="w-0.5 h-6 bg-white/40"></div>
          </div>
          
          {/* Monthly Standard */}
          <div className="relative flex-1 mt-4">
            <div className="bg-white/5 backdrop-blur-sm px-3 py-2 md:px-6 md:py-4 rounded-md border border-white/20 shadow-sm">
              <div className="font-semibold text-white text-xs md:text-base text-center">Monthly Standard</div>
            </div>
          </div>

          {/* Optional */}
          <div className="relative flex-1 mt-4">
            <div className="bg-white/5 backdrop-blur-sm px-3 py-2 md:px-6 md:py-4 rounded-md border border-white/20 shadow-sm">
              <div className="font-semibold text-white text-xs md:text-base text-center">Optional</div>
            </div>
          </div>
        </div>

        {/* Connectors to Level 3 - positioned outside boxes */}
        <div className="flex gap-4 md:gap-12 mb-4 md:mb-8 relative w-full max-w-2xl px-2">
          <div className="flex-1 flex justify-center">
            <div className="w-0.5 h-6 md:h-8 bg-white/20 border-dashed"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-0.5 h-6 md:h-8 bg-white/20 border-dashed"></div>
          </div>
        </div>

        {/* Level 3 Nodes */}
        <div className="flex gap-4 md:gap-24 relative w-full max-w-2xl px-2">
          {/* Left branch from Monthly Standard */}
          <div className="flex flex-col gap-2 md:gap-4 ml-0 md:ml-[70px]">
            <div className="bg-white/5 backdrop-blur-sm px-2 py-2 md:px-4 md:py-3 rounded-md border border-white/20 shadow-sm text-xs md:text-sm text-normal-text min-w-[100px] md:min-w-[150px]">
              Pre-scheduled visits
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-2 py-2 md:px-4 md:py-3 rounded-md border border-white/20 shadow-sm text-xs md:text-sm text-normal-text min-w-[100px] md:min-w-[150px]">
              Predictable pricing
            </div>
          </div>

          {/* Right branch from Optional */}
          <div className="flex flex-col gap-2 md:gap-4 ml-auto mr-0 md:mr-[70px]">
            <div className="bg-white/5 backdrop-blur-sm px-2 py-2 md:px-4 md:py-3 rounded-md border border-white/20 shadow-sm text-xs md:text-sm text-normal-text min-w-[100px] md:min-w-[150px]">
              On-demand services
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-2 py-2 md:px-4 md:py-3 rounded-md border border-white/20 shadow-sm text-xs md:text-sm text-normal-text min-w-[100px] md:min-w-[150px]">
              Custom requests
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

