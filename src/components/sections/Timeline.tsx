import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface TimelineItemData {
  year: string;
  yearRange?: string; // For mobile display: "2018 - 2019" format
  title?: string;
  description?: string | React.ReactNode;
  position?: 'left' | 'right'; // Which side the card appears on (desktop only)
  highlights?: string[]; // Key highlights as bullet points
  photos?: string[]; // Photo URLs to display in the card
  photosCaption?: string; // Optional caption for photos section
  photoSections?: Array<{ caption: string; photos: string[]; videos?: string[] }>; // Multiple photo sections with captions
  brace?: {
    endsAtYear: string; // Year where the brace ends (desktop only)
    card: {
      title: string;
      description: string | React.ReactNode;
      highlights?: string[];
      photos?: string[];
      photosCaption?: string; // Optional caption for photos section
      photoSections?: Array<{ caption: string; photos: string[]; videos?: string[] }>; // Multiple photo sections with captions
    };
  };
}

interface TimelineItemProps {
  data: TimelineItemData;
}

function TimelineItem({ data }: TimelineItemProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
  const hasContentForMobile = hasCard || data.yearRange;

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:flex relative items-center justify-center py-16">
        {/* Timeline Line (Top Half) - stops before bubble */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#EFBF04]" style={{ height: 'calc(50% - 20px)' }} />

        {/* Year Bubble */}
        <div className="absolute left-1/2 -translate-x-1/2 px-6 py-2 rounded-full border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-background-color text-white font-mono text-sm z-10">
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
                w-80 p-6 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm
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
                <span>{t('common.clickDetails')}</span>
                <span>→</span>
              </div>
            </div>
          </div>
        )}

        {/* Timeline Line (Bottom Half) - resumes after bubble */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#EFBF04]" style={{ height: 'calc(50% - 20px)' }} />
      </div>

      {/* Mobile Layout - Natural flow (only show if there's content) */}
      {hasContentForMobile && (
        <div className="md:hidden relative flex flex-col items-center">
          {/* Timeline segment before year - positions bubble at center between cards */}
          <div className="w-0.5 h-8 bg-[#EFBF04]" />

          {/* Year bubble - show range if available */}
          <div className="px-4 py-1.5 rounded-full border-2 border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.15)] bg-background-color text-white font-mono text-xs z-10">
            {data.yearRange || data.year}
          </div>

          {/* Card if exists */}
          {hasCard && (
            <>
              {/* Timeline segment connecting bubble to card - equal length for centering */}
              <div className="w-0.5 h-16 bg-[#EFBF04]" />

              <div className="w-[90vw] max-w-md">
                <div
                  onClick={handleCardClick}
                  className="w-full p-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm active:bg-white/10 active:scale-[0.98] transition-all duration-200 text-left cursor-pointer"
                >
                  {data.title && <h3 className="font-serif text-base text-white mb-2 leading-snug">{data.title}</h3>}
                  {data.description && <p className="text-xs font-mono text-normal-text leading-relaxed mb-3">{data.description}</p>}
                  <div className="flex items-center gap-2 text-[10px] font-mono text-white/70">
                    <span>{t('common.tapDetails')}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Timeline segment after card */}
          <div className="w-0.5 h-8 bg-[#EFBF04]" />
        </div>
      )}
    </>
  );
}

interface TimelineProps {
  years: TimelineItemData[];
}

// Component for rendering brace with card (desktop only)
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
  const { t } = useTranslation();

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
  // Position arrow in the middle of the brace
  const arrowTopOffset = (braceHeight / 2) - 10;
  // Position card higher to align with arrow
  const cardTopOffset = arrowTopOffset - 40;

  return (
    <div
      className="hidden md:flex absolute right-1/2 mr-20 items-start gap-3 z-20"
      style={{
        top: `${itemHeight / 2}px`, // Start from middle of first item's bubble
        height: `${braceHeight}px`
      }}
    >
      {/* Card */}
      <div style={{ marginTop: `${cardTopOffset}px` }} className="w-80">
        <div
          onClick={handleCardClick}
          className="w-full p-6 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 text-left cursor-pointer"
        >
          {card.title && <h3 className="font-serif text-xl text-white mb-3">{card.title}</h3>}
          {card.description && <p className="text-sm font-mono text-normal-text leading-relaxed mb-4 line-clamp-3">{card.description}</p>}
          <div className="flex items-center gap-2 text-xs font-mono text-white/70">
            <span>{t('common.clickDetails')}</span>
            <span>→</span>
          </div>
        </div>
      </div>
      {/* Arrow */}
      <span className="text-white/50" style={{ marginTop: `${arrowTopOffset}px` }}>←</span>
      {/* Bracket */}
      <div className="relative" style={{ width: '20px', height: '100%' }}>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-white/30" />
        <div className="absolute top-0 left-0 w-0.5 h-full bg-white/30" />
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
        braceMap.set(index, { startIndex: index, endIndex, card: item.brace.card });
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
// Note: 2015-2017 "Early Years" is shown in Hero.tsx, so we include 2016-2017 as empty years
// This function generates timeline data with translations
export function getTimelineData(t: (key: string) => string): TimelineItemData[] {
  return [
  {
    year: '2016',
    // No card - part of 2015-2017 brace period (shown in Hero.tsx)
  },
  {
    year: '2017',
    // No card - part of 2015-2017 brace period (shown in Hero.tsx)
  },
  {
    year: '2018',
    // No card
  },
  {
    year: '2019',
    yearRange: '2018 - 2019',
    title: t('timeline.originHustle.title'),
    description: t('timeline.originHustle.description'),
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
    yearRange: '2019 - 2020',
    title: t('timeline.threeJobs.title'),
    description: t('timeline.threeJobs.description'),
    position: 'right',
    brace: {
      endsAtYear: '2023',
      card: {
        title: t('timeline.entrepreneur.title'),
        description: t('timeline.entrepreneur.description'),
        photoSections: [
          {
            caption: 'College & Early Hustle',
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
            caption: 'Cars I Flipped',
            photos: [
              '/images/BecameEntrepreneur/carsSold/DAFD7AD8-97B6-49C8-B1DF-BB8C4B644019.JPG',
              '/images/BecameEntrepreneur/carsSold/IMG_1433.jpg',
              '/images/BecameEntrepreneur/carsSold/3853B68F-7729-456F-B1E7-E1B26BB32E92.JPG',
              '/images/BecameEntrepreneur/carsSold/B94B3080-20EA-45CA-B14F-334B580D0BC7.JPG',
              '/images/BecameEntrepreneur/carsSold/DEDCDA09-0AE6-4A3D-8E69-2F5279731B46.JPG',
              '/images/BecameEntrepreneur/carsSold/IMG_4843.PNG',
              '/images/BecameEntrepreneur/carsSold/IMG_4857.PNG',
              '/images/BecameEntrepreneur/carsSold/86B9C278-B2C0-4F70-8900-1C04B5F40788.jpeg',
              '/images/BecameEntrepreneur/carsSold/53022D27-B570-49B0-8761-EA98142D40B5.jpeg',
              '/images/BecameEntrepreneur/carsSold/3ADBE203-8A4F-42F7-9837-1E33F3C1162A.jpeg',
            ],
          },
          {
            caption: 'Jewelry Store at Westchester Mall',
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
    yearRange: '2023 - 2024',
    title: t('timeline.realizingCeiling.title'),
    description: t('timeline.realizingCeiling.description'),
    position: 'right',
    photoSections: [
      {
        caption: 'Popfame',
        videos: [
          'https://zivbanqpjwktphio.public.blob.vercel-storage.com/Popfame/POPFAME%20%281%29%202.MP4',
        ],
        photos: [
          '/images/Popfame/IMG_6183.jpg',
          '/images/Popfame/PNG image 2.JPEG',
          '/images/Popfame/3f5dba39-74b9-4f0f-a23c-66526a5bcbe7.JPG',
          '/images/Popfame/4a32a032-ff6d-4c65-a69a-d2e09605fa63.JPG',
          '/images/Popfame/IMG_9495.jpg',
          '/images/Popfame/Chat-details form.JPG',
          '/images/Popfame/IMG_0795.PNG',
          '/images/Popfame/IMG_2666.JPG',
          '/images/Popfame/IMG_3635.PNG',
          '/images/Popfame/IMG_3636.PNG',
          '/images/Popfame/IMG_6832.PNG',
          '/images/Popfame/Image 12-8-22 at 3.36 PM.JPG',
          '/images/Popfame/Image 3-7-23 at 5.36 PM.JPG',
        ],
      },
      {
        caption: 'Landscaping Services',
        videos: [
          'https://zivbanqpjwktphio.public.blob.vercel-storage.com/Popfame/ScreenRecording_12-06-2025%2020-52-31_1.mov',
        ],
        photos: [
          '/images/LandscapingServices/2023-12-11_15-21-41 2.PNG',
          '/images/LandscapingServices/01A4CBDF-5121-4AD2-B2BB-01D03D8919C6.jpeg',
          '/images/LandscapingServices/0D1950C1-8D01-4DEE-A1BF-1D965CEE6D11.jpeg',
          '/images/LandscapingServices/3235DD39-F0B1-48D2-B04B-F0588E3B85C5.jpeg',
          '/images/LandscapingServices/77103D70-973B-4AC3-BCAE-1A98F6E8D29E.jpeg',
          '/images/LandscapingServices/7C705D02-66C6-49AD-A33B-082E1FEB4A5E.jpeg',
          '/images/LandscapingServices/7D967A64-D7B8-4269-8203-765A1E99410F.jpeg',
          '/images/LandscapingServices/8AC1CE29-C91C-4407-8E6B-73F06DF1D777.jpeg',
          '/images/LandscapingServices/8AD7D776-7BE5-4787-883A-865420132045.jpeg',
          '/images/LandscapingServices/959FA2D8-A2EA-4532-82D6-E0BCDC648003.jpeg',
          '/images/LandscapingServices/9FF4AB37-2247-4121-A40A-F456DAF8B1CA.jpeg',
          '/images/LandscapingServices/B0DBDC58-1345-4C94-86B8-4B1BE6D3650B.jpeg',
          '/images/LandscapingServices/B6A6663C-5526-462F-B827-DEE276410097.jpeg',
          '/images/LandscapingServices/D0224E2D-60F2-4336-8C61-456B36EDF219.jpeg',
          '/images/LandscapingServices/D755DADE-02DB-49CA-992F-909CEFD3E325.jpeg',
          '/images/LandscapingServices/EAB905CE-22F7-415C-92F3-0BE57104D596.jpeg',
          '/images/LandscapingServices/FEBDADC2-42CA-4633-BF3E-7E77D8E8C1B5.jpeg',
          '/images/LandscapingServices/IMG_1124 2.JPG',
          '/images/LandscapingServices/IMG_1255 2.JPG',
          '/images/LandscapingServices/IMG_1256 2.JPG',
          '/images/LandscapingServices/IMG_1259 2.jpg',
          '/images/LandscapingServices/IMG_1261 2.JPG',
          '/images/LandscapingServices/IMG_1262 2.JPG',
          '/images/LandscapingServices/IMG_1577 2.JPG',
          '/images/LandscapingServices/IMG_3709 2.JPG',
          '/images/LandscapingServices/IMG_4634 2.JPEG',
          '/images/LandscapingServices/IMG_4635 2.JPEG',
          '/images/LandscapingServices/IMG_4639 2.JPEG',
          '/images/LandscapingServices/IMG_8939 2.JPG',
          '/images/LandscapingServices/IMG_9590 2.JPG',
          '/images/LandscapingServices/IMG_9592 2.JPG',
          '/images/LandscapingServices/IMG_9593 2.JPG',
        ],
      },
      {
        caption: 'Furniture assembly projects',
        photos: [
          '/images/realizingCeiling/0293E901-C78C-49F9-8BE9-90D23D2903C8.jpeg',
          '/images/realizingCeiling/1C348847-2D91-48C4-9D5B-4BF05FED1203.jpeg',
          '/images/realizingCeiling/27D9E6B9-F2EB-4175-9D87-4C2CC5495689.jpeg',
          '/images/realizingCeiling/27F0E15D-0E0E-4948-B89C-654162678165.jpeg',
          '/images/realizingCeiling/3A212120-9BE5-420A-A396-FA813FD5FB43.jpeg',
          '/images/realizingCeiling/54BB7CE7-11D5-4D47-A715-D4667E14F9DC.jpeg',
          '/images/realizingCeiling/61860984479__CE927448-A25E-4565-8FDD-4DA1343481C4.JPG',
          '/images/realizingCeiling/7F58228B-6C37-493B-BC7C-2BB41C0406EA.jpeg',
          '/images/realizingCeiling/9A9E17D2-F227-4B90-A8BF-B099040016BE.jpeg',
          '/images/realizingCeiling/AFB09D27-E759-4A10-8AA9-B0F942BB2F5E.jpeg',
          '/images/realizingCeiling/AFE2AA95-2FEE-462D-8D3B-ACB56ADED10F.jpeg',
          '/images/realizingCeiling/B7175C52-DE02-4ADD-9B9B-8A15A2D30055.jpeg',
          '/images/realizingCeiling/C9E24C79-3177-42F3-A136-D8C5A993899E.jpeg',
          '/images/realizingCeiling/D6539CF2-692F-4E4F-8A7D-89357E5EB833.jpeg',
          '/images/realizingCeiling/IMG_0834.jpeg',
        ],
      },
      {
        caption: 'The People Of Popfame',
        photos: [
          '/images/Popfame/popfamePeople/IMG_1426.jpg',
          '/images/Popfame/popfamePeople/IMG_1422.jpg',
          '/images/Popfame/popfamePeople/IMG_1423.jpg',
          '/images/Popfame/popfamePeople/IMG_1424.jpg',
          '/images/Popfame/popfamePeople/IMG_1425.jpg',
          '/images/Popfame/popfamePeople/IMG_1428.jpg',
          '/images/Popfame/popfamePeople/IMG_1429.jpg',
          '/images/Popfame/popfamePeople/IMG_1430.jpg',
          '/images/Popfame/popfamePeople/IMG_1431.jpg',
          '/images/Popfame/popfamePeople/IMG_1432.jpg',
          '/images/Popfame/popfamePeople/IMG_1435.jpg',
          '/images/Popfame/popfamePeople/IMG_1437.jpg',
          '/images/Popfame/popfamePeople/IMG_3038.JPG',
        ],
      },
    ],
  },
  {
    year: '2025',
    yearRange: '2024 - 2025',
    title: t('timeline.lawnstackin.title'),
    description: t('timeline.lawnstackin.description'),
    position: 'left',
    photoSections: [
      {
        caption: 'Lawnstack People',
        photos: [
          '/images/Lawnstack /lawnstackPeople/_VDB0633 2.JPG',
          '/images/Lawnstack /lawnstackPeople/_VDB0699 2.JPG',
          '/images/Lawnstack /lawnstackPeople/IMG_1469.jpg',
          '/images/Lawnstack /lawnstackPeople/IMG_1471.jpg',
          '/images/Lawnstack /lawnstackPeople/IMG_1472.jpg',
          '/images/Lawnstack /lawnstackPeople/IMG_1473.jpg',
          '/images/Lawnstack /lawnstackPeople/IMG_1474.jpg',
          '/images/Lawnstack /lawnstackPeople/IMG_1475.jpg',
          '/images/Lawnstack /lawnstackPeople/IMG_1476.jpg',
          '/images/Lawnstack /lawnstackPeople/IMG_1477.jpg',
          '/images/Lawnstack /lawnstackPeople/IMG_1478.jpg',
          '/images/Lawnstack /lawnstackPeople/IMG_1479.jpg',
          '/images/Lawnstack /lawnstackPeople/IMG_1480.jpg',
          '/images/Lawnstack /lawnstackPeople/IMG_1483.jpg',
        ],
      },
      {
        caption: 'Lawnstack Stuff',
        photos: [
          '/images/Lawnstack /Lawnstackstuff/IMG_4760.JPG',
          '/images/Lawnstack /Lawnstackstuff/IMG_4575.jpg',
          '/images/Lawnstack /Lawnstackstuff/IMG_5106.jpg',
        ],
      },
    ],
  },
  {
    year: '2026',
    yearRange: '2025 - 2026',
    title: t('timeline.engineer.title'),
    description: t('timeline.engineer.description'),
    position: 'right',
  },
  ];
}
