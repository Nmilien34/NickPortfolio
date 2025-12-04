import { useState, useRef, useEffect } from 'react';

interface TimelineItemData {
  year: string;
  title?: string;
  description?: string;
  position?: 'left' | 'right'; // Which side the card appears on
  highlights?: string[]; // Key highlights as bullet points
  photos?: string[]; // Photo URLs to display in the card
  brace?: {
    endsAtYear: string; // Year where the brace ends
    card: {
      title: string;
      description: string;
      highlights?: string[];
      photos?: string[];
    };
  };
}

interface TimelineItemProps {
  data: TimelineItemData;
}

function TimelineItem({ data }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  const hasCard = data.title || data.description;

  return (
    <div className="relative flex items-center justify-center py-16">
      {/* Timeline Line (Top Half) - stops before bubble */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/30" style={{ height: 'calc(50% - 20px)' }} />

      {/* Year Bubble */}
      <div className="absolute left-1/2 -translate-x-1/2 px-6 py-2 rounded-full border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-background-color text-white font-mono text-sm z-10">
        {data.year}
      </div>

      {/* Card with Arrow (if has content) */}
      {hasCard && (
        <div ref={cardRef} className={`absolute ${data.position === 'left' ? 'right-1/2 mr-16' : 'left-1/2 ml-16'} transition-all duration-500 ${isExpanded ? 'w-[500px]' : 'w-80'}`}>
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
              hover:bg-white/10 hover:border-white/30 transition-all duration-500
              text-left
              ${data.position === 'left' ? 'text-right' : 'text-left'}
              ${isExpanded ? 'p-8' : 'p-6'}
            `}
          >
            {data.title && (
              <h3 className={`font-serif text-white mb-4 transition-all duration-500 ${isExpanded ? 'text-2xl' : 'text-xl'}`}>
                {data.title}
              </h3>
            )}
            {isExpanded && data.description && (
              <div className="space-y-4 animate-in fade-in duration-500 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
                <p className="text-base font-mono text-normal-text leading-relaxed">
                  {data.description}
                </p>
                {data.highlights && data.highlights.length > 0 && (
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm font-serif text-white mb-2">Key Highlights:</h4>
                    <ul className="text-sm font-mono text-normal-text space-y-2 list-disc list-inside">
                      {data.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {data.photos && data.photos.length > 0 && (
                  <div className="pt-4 flex flex-col items-center gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      {data.photos.map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`${data.title} photo ${index + 1}`}
                          className="w-32 h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                        />
                      ))}
                    </div>
                    <p className="text-xs font-mono text-gray-500 italic">
                      Pictures to summarize the year
                    </p>
                  </div>
                )}
              </div>
            )}
            {!isExpanded && (
              <p className="text-xs font-mono text-gray-500">
                Click to expand
              </p>
            )}
          </button>
        </div>
      )}

      {/* Timeline Line (Bottom Half) - resumes after bubble */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/30" style={{ height: 'calc(50% - 20px)' }} />
    </div>
  );
}

interface TimelineProps {
  years: TimelineItemData[];
}

// Component for rendering brace with card
function BraceCard({ 
  startIndex, 
  endIndex, 
  card, 
  itemHeight = 128 
}: { 
  startIndex: number; 
  endIndex: number; 
  card: NonNullable<TimelineItemData['brace']>['card'];
  itemHeight?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  // Calculate brace height: spans from start to end (including both)
  // Each item is py-16 (64px top + 64px bottom = 128px total per item)
  const braceHeight = (endIndex - startIndex) * itemHeight;
  // Position card in the middle of the brace
  const cardTopOffset = (braceHeight / 2) - 40; // -40 to center the card vertically

  return (
    <div 
      className="absolute right-1/2 mr-20 flex items-start gap-3 z-20"
      style={{ 
        top: `${itemHeight / 2}px`, // Start from middle of first item's bubble
        height: `${braceHeight}px`
      }}
    >
      {/* Description Card - furthest from timeline */}
      <div
        ref={cardRef}
        style={{ marginTop: `${cardTopOffset}px` }}
        className="transition-all duration-500"
      >
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm
            hover:bg-white/10 hover:border-white/30 transition-all duration-500
            text-right cursor-pointer
            ${isExpanded ? 'w-[500px] p-8' : 'max-w-xs px-5 py-3'}
          `}
        >
          {card.title && (
            <h3 className={`font-serif text-white mb-4 transition-all duration-500 ${isExpanded ? 'text-2xl' : 'text-xl'}`}>
              {card.title}
            </h3>
          )}
          <p className={`font-mono text-normal-text leading-relaxed transition-all duration-500 ${isExpanded ? 'text-base mb-4' : 'text-xs'}`}>
            {card.description}
          </p>
          {isExpanded && (
            <div className="pt-4 border-t border-white/10 animate-in fade-in duration-500 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
              {card.highlights && card.highlights.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-serif text-white mb-2">Key Highlights:</h4>
                  <ul className="text-sm font-mono text-normal-text space-y-2 list-disc list-inside">
                    {card.highlights.map((highlight: string, index: number) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
              {card.photos && card.photos.length > 0 && (
                <div className="pt-4 flex flex-col items-center gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    {card.photos.map((photo: string, index: number) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`${card.title} photo ${index + 1}`}
                        className="w-32 h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                      />
                    ))}
                  </div>
                  <p className="text-xs font-mono text-gray-500 italic">
                    Pictures to summarize the period
                  </p>
                </div>
              )}
            </div>
          )}
          {!isExpanded && (
            <p className="text-xs font-mono text-gray-500 mt-2">
              Click to expand
            </p>
          )}
        </button>
      </div>
      {/* Arrow - positioned at card location */}
      <span className="text-white/50" style={{ marginTop: `${cardTopOffset}px` }}>←</span>
      {/* Simple bracket - closest to timeline */}
      <div className="relative" style={{ width: '20px', height: '100%' }}>
        {/* Top horizontal line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-white/30" />
        {/* Vertical line */}
        <div className="absolute top-0 left-0 w-0.5 h-full bg-white/30" />
        {/* Bottom horizontal line */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30" />
      </div>
    </div>
  );
}

export function Timeline({ years }: TimelineProps) {
  // Find braces and track which items are part of a brace
  const braceMap = new Map<number, { startIndex: number; endIndex: number; card: NonNullable<TimelineItemData['brace']>['card'] }>();
  const itemsInBrace = new Set<number>();

  years.forEach((item, index) => {
    if (item.brace) {
      // Find the end index
      const endIndex = years.findIndex(y => y.year === item.brace!.endsAtYear);
      if (endIndex !== -1 && item.brace.card) {
            braceMap.set(index, { startIndex: index, endIndex, card: item.brace.card! });
        // Mark all items from start to end as part of brace
        for (let i = index; i <= endIndex; i++) {
          itemsInBrace.add(i);
        }
      }
    }
  });

  return (
    <section className="relative pt-0 pb-0">
      <div className="max-w-6xl mx-auto px-6">
        {years.map((item, index) => {
          const braceInfo = braceMap.get(index);
          
          return (
            <div key={index} className="relative">
              <TimelineItem data={item} />
              {/* Render brace starting from the item that defines it */}
              {braceInfo && index === braceInfo.startIndex && (
                <BraceCard
                  startIndex={braceInfo.startIndex}
                  endIndex={braceInfo.endIndex}
                  card={braceInfo.card}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Full timeline data (2015-2025)
export const fullTimelineData: TimelineItemData[] = [
  {
    year: '2016',
    // No card - part of 2015-2017 brace period
  },
  {
    year: '2017',
    // No card - part of 2015-2017 brace period
  },
  {
    year: '2018',
    // No card
  },
  {
    year: '2019',
    title: 'Graduation Year',
    description: 'Prepared for prom and graduation',
    position: 'right',
    highlights: [
      'Quit KFC, replaced it with 2 jobs. Amazon warehouse (after school), Biglots (weekends) needed to save for prom',
      'Took and passed the ASVAB',
      'Started studying for the SAT, took the SAT, had a decent score',
      'Graduated Junior Police Academy',
      'Started buying cars from the auction, Fixed them. Flipped them.',
      'Threw some parties',
      'Had prom',
      'Graduated in May 2019',
    ],
    photos: [
      '/images/gradYear/F68D635B-AEE4-4911-95C2-E9A8F21ED711 2.JPG',
      '/images/gradYear/IMG_1400.jpg',
      '/images/gradYear/IMG_1402.jpg',
      '/images/gradYear/IMG_3229.JPG',
    ],
  },
  {
    year: '2020',
    title: 'College Prep',
    description: 'Prepared for college and worked 3 jobs',
    position: 'left',
    highlights: [
      'Applied to Upenn, Princeton, Penn state, NJIT, NYIT, Pace and etc…',
      'UPenn (Got interview, waitlisted), Princeton (rejected), Penn state (Accepted), NJIT (Accepted), NYIT (Accepted), Pace (accepted). Chose NJIT for engineering',
      'Quit Amazon. now had 3 jobs. Biglots, BJs, Macys',
      'Started assembling furniture for friends on the side',
      'Barely had time for anything. fall 2019 - 2020 went to a community college and got some classes out of the way',
    ],
  },
  {
    year: '2021',
    title: 'College & Hustle',
    description: 'Started College, worked and had fun',
    position: 'right',
    highlights: [
      'Started NJIT',
      'Quit Biglots. kept BJ\'s and Macys',
      'Started really flipping cars. bought from the auction and resealing',
      'Covid hit, school was virtual, had more time to work',
      'Started Assembling more furnitures',
      'Worked with my dad on building a new hotel in Haiti and did a ton of research about starting a shipping company',
      'Shipping company failed. Hotel started getting built',
    ],
    photos: [
      '/images/HussleCollege/60019186770__60B76782-1BC6-4CAE-8788-BEF9141B18E3%204.JPG',
      '/images/HussleCollege/IMG_0426%204.PNG',
      '/images/HussleCollege/IMG_0558%204.PNG',
      '/images/HussleCollege/IMG_0559%204.PNG',
      '/images/HussleCollege/IMG_1221%204.jpg',
      '/images/HussleCollege/IMG_1404.jpg',
      '/images/HussleCollege/IMG_1405.jpg',
      '/images/HussleCollege/IMG_1406.jpg',
    ],
    brace: {
      endsAtYear: '2023',
      card: {
        title: 'Recent Work',
        description: 'Latest projects and achievements...',
      },
    },
  },
  {
    year: '2022',
    // No card - part of 2021-2023 brace period
  },
  {
    year: '2023',
    // No card - part of 2021-2023 brace period
  },
  {
    year: '2024',
    title: 'Current',
    description: 'What I\'m working on now...',
    position: 'left',
  },
  {
    year: '2025',
    // No card
  },
];
