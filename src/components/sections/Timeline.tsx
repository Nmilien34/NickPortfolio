import { useState } from 'react';

interface TimelineItemData {
  year: string;
  title?: string;
  description?: string;
  position?: 'left' | 'right'; // Which side the card appears on
}

interface TimelineItemProps {
  data: TimelineItemData;
}

function TimelineItem({ data }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasCard = data.title || data.description;

  return (
    <div className="relative flex items-center justify-center py-20">
      {/* Timeline Line (Top Half) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-white/30" />

      {/* Year Bubble */}
      <div className="absolute left-1/2 -translate-x-1/2 px-6 py-2 rounded-full border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-white/5 text-white font-mono text-sm z-10">
        {data.year}
      </div>

      {/* Card with Arrow (if has content) */}
      {hasCard && (
        <div className={`absolute ${data.position === 'left' ? 'right-1/2 mr-16' : 'left-1/2 ml-16'} w-80`}>
          {/* Arrow pointing to timeline */}
          <div className={`flex items-center gap-2 mb-4 ${data.position === 'left' ? 'justify-end' : 'justify-start'}`}>
            {data.position === 'right' && <span className="text-white/50">←</span>}
            {data.position === 'left' && <span className="text-white/50">→</span>}
          </div>

          {/* Card */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              w-full p-6 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm
              hover:bg-white/10 hover:border-white/30 transition-all duration-300
              text-left
              ${data.position === 'left' ? 'text-right' : 'text-left'}
            `}
          >
            {data.title && (
              <h3 className="text-xl font-serif text-white mb-2">
                {data.title}
              </h3>
            )}
            {isExpanded && data.description && (
              <p className="text-sm font-mono text-normal-text leading-relaxed">
                {data.description}
              </p>
            )}
            {!isExpanded && (
              <p className="text-xs font-mono text-gray-500">
                Click to expand
              </p>
            )}
          </button>
        </div>
      )}

      {/* Timeline Line (Bottom Half) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-white/30" />
    </div>
  );
}

export function Timeline() {
  const timelineData: TimelineItemData[] = [
    {
      year: '2016',
      title: 'First Achievement',
      description: 'Started my journey in tech...',
      position: 'right',
    },
    {
      year: '2017',
      // No card for this year
    },
    {
      year: '2018',
      title: 'Major Milestone',
      description: 'Built something incredible...',
      position: 'left',
    },
    {
      year: '2019',
      title: 'Another Step',
      description: 'Learned new skills...',
      position: 'right',
    },
    {
      year: '2020',
      // No card
    },
  ];

  return (
    <section className="relative min-h-screen pt-0 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
