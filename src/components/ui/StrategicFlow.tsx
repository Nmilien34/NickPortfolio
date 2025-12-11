export function StrategicFlow() {
  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  const InfoIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8">
      <h3 className="text-2xl font-serif text-white mb-6 text-center">FROM INSIGHT TO ACTION</h3>
      
      <div className="mb-6">
        <p className="text-white font-semibold mb-4">The Strategic Pivot Process:</p>
        
        {/* The Flow Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 p-6 h-full">
            <div className="text-gray-400 text-sm font-mono mb-3">1.</div>
            <p className="text-normal-text font-mono text-sm leading-relaxed">
              Analyze User Friction. Realized users weren't leaving because of bad UI buttons, but because the transactional model was stressful.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 p-6 h-full">
            <div className="text-gray-400 text-sm font-mono mb-3">2.</div>
            <p className="text-normal-text font-mono text-sm leading-relaxed">
              Identify the Core Gap. Users didn't want a 'faster' way to hire; they wanted assurance, predictability, and a 'set-it-and-forget-it' solution.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 p-6 h-full">
            <div className="text-gray-400 text-sm font-mono mb-3">3.</div>
            <p className="text-normal-text font-mono text-sm leading-relaxed">
              Define the New Model. Shift from an on-demand marketplace to a managed subscription service delivering consistent outcomes.
            </p>
          </div>
        </div>

        {/* Outcome Pills */}
        <div className="flex gap-4 justify-center mb-6 flex-wrap">
          <div className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
            <CheckIcon />
            <span className="font-mono text-sm">Strategic Progressive Disclosure</span>
          </div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2">
            <InfoIcon />
            <span className="font-mono text-sm">Aligned business goals with user peace of mind</span>
          </div>
        </div>

        {/* Concluding Sentence */}
        <p className="text-center text-normal-text font-mono text-sm italic">
          "We realized that the best way to fundamentally improve the experience wasn't new pixels—it was a new business model."
        </p>
      </div>
    </div>
  );
}

