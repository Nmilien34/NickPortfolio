interface BulletPoint {
  text: string;
  isPositive: boolean;
}

interface Model {
  title: string;
  bullets: BulletPoint[];
  isWinner: boolean;
}

interface DecisionComparisonProps {
  model1: Model;
  model2: Model;
}

export function DecisionComparison({ model1, model2 }: DecisionComparisonProps) {
  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  const XIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Model 1 - The Winner */}
      <div className="border-b border-white/20 pb-4 md:pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-green-600 font-mono text-lg md:text-xl font-bold mb-3 md:mb-4">{model1.title}</h3>
            <div className="flex items-center gap-2 text-green-600">
              <CheckIcon />
              <span className="text-xs md:text-sm font-semibold">Selected Model</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <ul className="space-y-2 md:space-y-3">
              {model1.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <span className={bullet.isPositive ? "text-green-600 mt-0.5 flex-shrink-0" : "text-red-500 mt-0.5 flex-shrink-0"}>
                    {bullet.isPositive ? <CheckIcon /> : <XIcon />}
                  </span>
                  <span className="text-normal-text font-mono text-xs md:text-sm leading-relaxed">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Model 2 - The Deprecated */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-gray-500 font-mono text-lg md:text-xl font-bold mb-3 md:mb-4">{model2.title}</h3>
          </div>
          <div className="md:col-span-2">
            <ul className="space-y-2 md:space-y-3">
              {model2.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <span className={bullet.isPositive ? "text-gray-500 mt-0.5 flex-shrink-0" : "text-gray-500 mt-0.5 flex-shrink-0"}>
                    {bullet.isPositive ? <CheckIcon /> : <XIcon />}
                  </span>
                  <span className="text-gray-500 font-mono text-xs md:text-sm leading-relaxed">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

