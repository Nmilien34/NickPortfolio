import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  content: string;
  isActive?: boolean;
}

interface VerticalTimelineProps {
  items: TimelineItem[];
}

export function VerticalTimeline({ items }: VerticalTimelineProps) {
  return (
    <div className="bg-[#111] rounded-lg p-8 relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2"></div>

      <div className="relative space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {/* Year Pill */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div
                className={`rounded-full px-6 py-2 bg-white/10 border border-white/20 ${
                  item.isActive
                    ? 'shadow-[0_0_20px_rgba(255,255,255,0.3)] ring-2 ring-white/30'
                    : ''
                }`}
              >
                <span className="text-white font-mono font-bold text-lg">{item.year}</span>
              </div>
            </div>

            {/* Content Card */}
            <div
              className={`w-[45%] ${
                index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'
              } mt-8`}
            >
              {/* Horizontal Connector */}
              <div
                className={`absolute top-4 h-0.5 w-12 bg-gray-700 ${
                  index % 2 === 0 ? 'right-0' : 'left-0'
                }`}
                style={{
                  [index % 2 === 0 ? 'right' : 'left']: '-48px',
                }}
              ></div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 font-mono text-sm leading-relaxed">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

