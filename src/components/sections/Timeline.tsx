import { useNavigate } from 'react-router-dom';

interface TimelineItemData {
  year: string;
  title?: string;
  description?: string;
  position?: 'left' | 'right'; // Which side the card appears on
  highlights?: string[]; // Key highlights as bullet points
  photos?: string[]; // Photo URLs to display in the card
  photosCaption?: string; // Optional caption for photos section
  photoSections?: Array<{ caption: string; photos: string[] }>; // Multiple photo sections with captions
  brace?: {
    endsAtYear: string; // Year where the brace ends
    card: {
      title: string;
      description: string;
      highlights?: string[];
      photos?: string[];
      photosCaption?: string; // Optional caption for photos section
      photoSections?: Array<{ caption: string; photos: string[] }>; // Multiple photo sections with captions
    };
  };
}

interface TimelineItemProps {
  data: TimelineItemData;
}

function TimelineItem({ data }: TimelineItemProps) {
  const navigate = useNavigate();

  const titleToSlug = (title: string): string => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleCardClick = () => {
    if (data.title) {
      navigate(`/${titleToSlug(data.title)}`);
    }
  };

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
        <div className={`absolute ${data.position === 'left' ? 'right-1/2 mr-16' : 'left-1/2 ml-16'} w-80`}>
          {/* Arrow pointing to timeline */}
          <div className={`flex items-center gap-2 mb-4 ${data.position === 'left' ? 'justify-end' : 'justify-start'}`}>
            {data.position === 'right' && <span className="text-white/50">←</span>}
            {data.position === 'left' && <span className="text-white/50">→</span>}
          </div>

          {/* Card */}
          <div
            onClick={handleCardClick}
            className={`
              w-full p-6 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm
              hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300
              text-left cursor-pointer
              ${data.position === 'left' ? 'text-right' : 'text-left'}
            `}
          >
            {data.title && (
              <h3 className="font-serif text-xl text-white mb-3">
                {data.title}
              </h3>
            )}
            {data.description && (
              <p className="text-sm font-mono text-normal-text leading-relaxed mb-4 line-clamp-3">
                {data.description}
              </p>
            )}
            <div className="flex items-center gap-2 text-xs font-mono text-white/70">
              <span>Click to view details</span>
              <span>→</span>
            </div>
          </div>
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
  const navigate = useNavigate();

  const titleToSlug = (title: string): string => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleCardClick = () => {
    if (card.title) {
      navigate(`/${titleToSlug(card.title)}`);
    }
  };

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
        style={{ marginTop: `${cardTopOffset}px` }}
        className="w-80"
      >
        <div
          onClick={handleCardClick}
          className={`
            w-full p-6 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm
            hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300
            text-left cursor-pointer
          `}
        >
          {card.title && (
            <h3 className="font-serif text-xl text-white mb-3">
              {card.title}
            </h3>
          )}
          {card.description && (
            <p className="text-sm font-mono text-normal-text leading-relaxed mb-4 line-clamp-3">
              {card.description}
            </p>
          )}
          <div className="flex items-center gap-2 text-xs font-mono text-white/70">
            <span>Click to view details</span>
            <span>→</span>
          </div>
        </div>
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
      'Quit KFC, worked two jobs at Amazon warehouse (after school) and Big Lots (weekends) to save for prom',
      'Took and passed the ASVAB',
      'Studied for and took the SAT, achieved a decent score',
      'Graduated from Junior Police Academy',
      'Started buying cars from auctions, fixed them, and flipped them',
      'Threw some parties',
      'Attended prom',
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
    description: 'Prepared for college and worked three jobs',
    position: 'left',
    highlights: [
      'Applied to UPenn, Princeton, Penn State, NJIT, NYIT, and Pace',
      'UPenn (interview, waitlisted), Princeton (rejected), Penn State (accepted), NJIT (accepted), NYIT (accepted), Pace (accepted) — chose NJIT for engineering',
      'Quit Amazon, worked three jobs: Big Lots, BJ\'s, and Macy\'s',
      'Started assembling furniture for friends on the side',
      'Fall 2019-2020: Attended community college to get some classes out of the way',
    ],
  },
  {
    year: '2021',
    title: 'College & Hustle',
    description: 'Started college, worked, and had fun',
    position: 'right',
    highlights: [
      'Started at NJIT',
      'Quit Big Lots, kept BJ\'s and Macy\'s',
      'Scaled up car flipping business, buying from auctions and reselling',
      'COVID-19 hit, school went virtual, had more time to work',
      'Expanded furniture assembly business',
      'Worked with my dad on building a hotel in Haiti and researched starting a shipping company',
      'Shipping company didn\'t work out, but hotel construction began',
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
        title: 'Became an Entrepreneur',
        description: 'Entrepreneurship, business building, and growth',
        highlights: [
          'Quit both my jobs and became a full-time entrepreneur',
          'Opened a business assembling furniture and doing landscaping',
          'Sold ~$250k worth of cars',
          'Opened two jewelry stores, managed a $1.1 million budget, dealt in gold and diamonds',
          'Started an ATM business',
          'Started coding and building embedded systems',
          'Threw bigger parties',
          'Became a regional partner with Bird Scooters, bringing scooters to two cities',
          'Bought land in Haiti and gifted it to my mom',
        ],
        photoSections: [
          {
            caption: 'Some of the cars I flipped — sold way more but these were my best',
            photos: [
              '/images/BecameEntrepreneur/carsSold/3853B68F-7729-456F-B1E7-E1B26BB32E92.JPG',
              '/images/BecameEntrepreneur/carsSold/B94B3080-20EA-45CA-B14F-334B580D0BC7.JPG',
              '/images/BecameEntrepreneur/carsSold/DAFD7AD8-97B6-49C8-B1DF-BB8C4B644019.JPG',
              '/images/BecameEntrepreneur/carsSold/DEDCDA09-0AE6-4A3D-8E69-2F5279731B46.JPG',
              '/images/BecameEntrepreneur/carsSold/IMG_4843.PNG',
              '/images/BecameEntrepreneur/carsSold/IMG_4857.PNG',
              '/images/BecameEntrepreneur/carsSold/86B9C278-B2C0-4F70-8900-1C04B5F40788.jpeg',
              '/images/BecameEntrepreneur/carsSold/53022D27-B570-49B0-8761-EA98142D40B5.jpeg',
              '/images/BecameEntrepreneur/carsSold/3ADBE203-8A4F-42F7-9837-1E33F3C1162A.jpeg',
            ],
          },
          {
            caption: 'One of the jewelry stores I built from scratch at the Westchester Mall, New York',
            photos: [
              '/images/BecameEntrepreneur/carsSold/jewelsstore/7FAACC54-9D2F-4F9C-8728-2091458E46C6.jpeg',
              '/images/BecameEntrepreneur/carsSold/jewelsstore/E8E599F6-F1DB-4818-9AA8-393D2DB803B4.jpeg',
              '/images/BecameEntrepreneur/carsSold/jewelsstore/4284133B-29EA-4139-9147-72157C7A1A0D.jpeg',
              '/images/BecameEntrepreneur/carsSold/jewelsstore/8CCA7910-CCE3-4DC8-B15D-CF5369D8F561.jpeg',
              '/images/BecameEntrepreneur/carsSold/jewelsstore/A1F8622F-8D40-45AB-9B8D-3E9EE46AF44C.JPG',
              '/images/BecameEntrepreneur/carsSold/jewelsstore/13011B4F-C738-41B8-A906-1D0A4BA9E7A2.jpeg',
            ],
          },
        ],
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
