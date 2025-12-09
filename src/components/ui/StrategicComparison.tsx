import React from 'react';

export function StrategicComparison() {
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

  const BeakerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );

  const SlidersIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  );

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 space-y-6">
      <h3 className="text-xl font-serif text-white mb-6">We faced a critical decision on where the bigger opportunity lay:</h3>
      
      {/* Section 1 - The Winner (Green) */}
      <div className="border-b border-white/20 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex items-start gap-3">
            <div className="text-green-700 mt-1">
              <BeakerIcon />
            </div>
            <h4 className="text-green-700 font-mono text-xl font-bold">Option A: Rethink Business Model</h4>
          </div>
          <div className="md:col-span-2">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-700 mt-0.5">
                  <CheckIcon />
                </span>
                <span className="text-normal-text font-mono text-sm">Addresses fundamental root cause of user churn.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-700 mt-0.5">
                  <CheckIcon />
                </span>
                <span className="text-normal-text font-mono text-sm">Aligns financial incentives with homeowner goals (long-term value vs. transactional).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-700 mt-0.5">
                  <CheckIcon />
                </span>
                <span className="text-normal-text font-mono text-sm">Creates predictable, recurring revenue streams.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2 - The Deprecated (Gray) */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex items-start gap-3">
            <div className="text-gray-500 mt-1">
              <SlidersIcon />
            </div>
            <h4 className="text-gray-500 font-mono text-xl font-bold">Option B: Refine Existing UX</h4>
          </div>
          <div className="md:col-span-2">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-0.5">
                  <CheckIcon />
                </span>
                <span className="text-gray-500 font-mono text-sm">Faster to implement; requires less operational overhaul.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-0.5">
                  <XIcon />
                </span>
                <span className="text-gray-500 font-mono text-sm">"Polishing a turd" — a better interface won't fix a flawed underlying system.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-0.5">
                  <XIcon />
                </span>
                <span className="text-gray-500 font-mono text-sm">Continued high customer acquisition costs with low lifetime value.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-0.5">
                  <XIcon />
                </span>
                <span className="text-gray-500 font-mono text-sm">Retention risk remains high as users still "shop around."</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

