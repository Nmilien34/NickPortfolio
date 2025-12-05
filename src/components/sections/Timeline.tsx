import { useNavigate } from 'react-router-dom';

interface TimelineItemData {
  year: string;
  title?: string;
  description?: string | React.ReactNode;
  position?: 'left' | 'right'; // Which side the card appears on
  highlights?: string[]; // Key highlights as bullet points
  photos?: string[]; // Photo URLs to display in the card
  photosCaption?: string; // Optional caption for photos section
  photoSections?: Array<{ caption: string; photos: string[] }>; // Multiple photo sections with captions
  brace?: {
    endsAtYear: string; // Year where the brace ends
    card: {
      title: string;
      description: string | React.ReactNode;
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#EFBF04]" style={{ height: 'calc(50% - 20px)' }} />

      {/* Year Bubble */}
      <div className="absolute left-1/2 -translate-x-1/2 px-6 py-2 rounded-full border-2 border-[#EFBF04] shadow-[0_0_30px_rgba(239,191,4,0.5)] bg-background-color text-white font-mono text-sm z-10">
        {data.year}
      </div>

      {/* Card with Arrow (if has content) */}
      {hasCard && (
        <div className={`absolute -top-24 ${data.position === 'left' ? 'right-1/2 mr-16' : 'left-1/2 ml-16'} flex items-center gap-3 ${data.position === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
          {/* Arrow pointing from timeline to card */}
          <span className="text-white/50 text-xl">
            {data.position === 'left' && '←'}
            {data.position === 'right' && '→'}
          </span>

          {/* Card */}
          <div
            onClick={handleCardClick}
            className={`
              w-80 p-6 rounded-lg border border-[#EFBF04] bg-white/5 backdrop-blur-sm
              hover:bg-white/10 hover:border-[#EFBF04] hover:shadow-[0_0_35px_rgba(239,191,4,0.6)] hover:scale-105 transition-all duration-300
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#EFBF04]" style={{ height: 'calc(50% - 20px)' }} />
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
  const cardTopOffset = (braceHeight / 2) - 10; // Position card along the brace

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
            w-full p-6 rounded-lg border border-[#EFBF04] bg-white/5 backdrop-blur-sm
            hover:bg-white/10 hover:border-[#EFBF04] hover:shadow-[0_0_35px_rgba(239,191,4,0.6)] hover:scale-105 transition-all duration-300
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
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#EFBF04]" />
        {/* Vertical line */}
        <div className="absolute top-0 left-0 w-0.5 h-full bg-[#EFBF04]" />
        {/* Bottom horizontal line */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EFBF04]" />
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

// Full timeline data (2015-2026)
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
    title: 'The Origin of the Hustle',
    description: 'Prom and graduation were coming up, and I needed cash. So I quit KFC and replaced it with two jobs: Amazon Warehouse after school and selling furniture at Big Lots on weekends. With the money I was making, I started buying distressed cars at auctions, fixing them up, and flipping them for a profit. Between passing the ASVAB while barely speaking English, getting a decent SAT score without studying, and graduating in May 2019, I learned that I could outwork almost anyone, as long as the goal was clear.',
    position: 'left',
    photoSections: [
      {
        caption: 'Memories from graduation year',
        photos: [
          '/images/gradYear/F68D635B-AEE4-4911-95C2-E9A8F21ED711 2.JPG',
          '/images/gradYear/IMG_1400.jpg',
          '/images/gradYear/IMG_1402.jpg',
          '/images/gradYear/IMG_3229.JPG',
        ],
      },
    ],
  },
  {
    year: '2020',
    title: 'Three Jobs & A Dream',
    description: 'I got into schools like Penn State, NYIT, and Pace, and was waitlisted by UPenn and Columbia, but I chose NJIT for engineering and the in-state tuition. To prepare for the cost, I just worked more. I left Amazon but started balancing three simultaneous jobs at Big Lots, BJ\'s, and Macy\'s while assembling furniture for friends on the side. I barely had a free minute, but I squeezed in community college classes to get a head start on my degree. It was exhausting, but it taught me time management in a way no classroom ever could.',
    position: 'right',
    brace: {
      endsAtYear: '2023',
      card: {
        title: 'The Entrepreneur',
        description: (
          <>
            I made the decision to quit my jobs and focus entirely on entrepreneurship. When COVID hit and classes went virtual, I suddenly had a lot more time to work and teach myself everything I could. I hustled hard. I went full-time entrepreneur. I scaled my car-flipping business to over $300k in inventory, managed a jewelry store with a $1.1M operating budget completely on my own, and even became a regional partner for <a href="https://www.bird.co/" target="_blank" rel="noopener noreferrer" className="text-[#EFBF04] hover:underline">Bird</a> Scooters, running logistics across two cities. It was a crash course in operations, logistics, and real-world P&L management. With the profits, I bought land in Haiti as a gift for my mom.
          </>
        ),
        photoSections: [
          {
            caption: 'College and the beginning of my hustle',
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
          },
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
    year: '2021',
    // No card - part of 2020-2023 brace period
  },
  {
    year: '2022',
    // No card - part of 2020-2023 brace period
  },
  {
    year: '2023',
    // No card
  },
  {
    year: '2024',
    title: 'Realizing the Ceiling',
    description: 'I hit a point where I realized physical businesses scale linearly, but software scales exponentially. I formalized my furniture business into "Popfame" and built a team of 30 people, including a dev team in Pakistan to build an on-demand service app. I joined every incubator I could find—Microsoft Founders, AWS Activate, Rutgers BLT. We also were working with Amazon and HandyBuddy to bring in more service volume, but I realized that managing a massive team without a strong tech foundation was painful. I needed to stop just managing tech and start building it.',
    position: 'right',
  },
  {
    year: '2025',
    title: 'Lawnstackin..',
    description: 'The "Real Life" MBA. This was the year everything changed. I realized I needed to be in a room with people smarter than me, so I recruited co-founders from Wharton and Cornell and built a team of 8 from MIT, Harvard, and Georgia Tech. We raised $150k, got into the Alchemist Accelerator, and processed $80k in GMV connecting homeowners to service providers. But the retention metrics weren\'t there. We were grinding out door-to-door sales for low-margin services. In November, we made the hard, mature decision to shut it down. It hurt, but it taught me the most important lesson in tech: Verify the problem before you build the solution.',
    position: 'left',
  },
  {
    year: '2026',
    title: 'The Engineer',
    description: 'After Lawnstack, I decided to get as technical as possible. I locked in for a month—200+ hours—teaching myself TypeScript and Vibe Coding. Then I teamed up with my former CTO to build Boltzman AI, which hit 3k users before we pivoted into Voice AI. Now I\'m running a profitable Voice AI receptionist service for restaurants. I hit a peak of ~$5k MRR with ~70% margins as a solopreneur wearing every hat. I\'m dealing with some churn right now, but I\'ve learned a ton in the process—from professors and mentors at Princeton, Caltech, Carnegie Mellon, Stanford, and more. (Shoutout to people like Vivian Shen, Nathaniel Simon, Ruming Guan, Ryan Kazuo, and Brian Yang.) And now, I\'m graduating this December with my engineering degree—not just as a student, but as a builder who has raised VC money, managed millions, failed fast, and learned to code his own way out.',
    position: 'right',
  },
];
