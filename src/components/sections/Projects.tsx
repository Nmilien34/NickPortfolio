import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { titleToSlug } from '../../lib/utils';

export interface Project {
  title: string;
  category: string;
  description: string;
  tagline?: string; // Tagline/subtitle for the project
  summary?: string; // Detailed summary for project detail page
  image?: string;
  mockup?: string; // Browser mockup screenshot
  coverImage?: string; // Cover image for detail page
  link?: string;
  underConstruction?: boolean;
  gradientColors?: string; // Custom gradient for each project
  browserUrl?: string; // Custom URL to display in browser bar
}

export function getProjectsData(t: (key: string) => string): Project[] {
  return [
  {
    title: 'Lawnstack',
    category: t('projects.lawnstack.category'),
    description: '',
    tagline: t('projects.lawnstack.tagline'),
    summary: t('projects.lawnstack.summary'),
    mockup: '/Projects/Lawnstack /98EE5DD3-9A94-4F47-8D32-DD098CF123B9.jpeg',
    coverImage: '/Projects/Lawnstack /IMG_5043.PNG',
    gradientColors: undefined, // Will use CSS variables instead
  },
  {
    title: 'Boltzman Enterprise',
    category: t('projects.boltzmanEnterprise.category'),
    description: t('projects.boltzmanEnterprise.description'),
    mockup: '/Projects/VoiceaiReceptionist/91658D25-00CB-4B5E-BD37-CDE8CFA0BA8C.jpeg',
    gradientColors: undefined,
    browserUrl: 'enterprise.boltzman.ai',
  },
  {
    title: 'Boltzman AI',
    category: t('projects.boltzmanAI.category'),
    description: t('projects.boltzmanAI.description'),
    mockup: '/Projects/Boltzman AI/146A59BD-B8D5-4B99-BD96-823574456AF2.jpeg',
    gradientColors: undefined,
    browserUrl: 'boltzman.ai',
  },
  {
    title: 'Boltzman Voice',
    category: t('projects.boltzmanVoice.category'),
    description: t('projects.boltzmanVoice.description'),
    mockup: '/Projects/BoltzmanVoice/E80A7619-852F-43F7-AADB-099DC4EBE4EB.jpeg',
    gradientColors: undefined,
    browserUrl: 'voice.boltzman.ai',
  },
  {
    title: 'Clearr',
    category: t('projects.clearr.category'),
    description: t('projects.clearr.description'),
    image: '/images/projects/Clearr/clearr-cover.jpeg',
    link: 'https://apps.apple.com/us/app/clearr-thought-translator/id6751149912',
    gradientColors: undefined,
  },
  {
    title: 'Energy',
    category: t('projects.energy.category'),
    description: t('projects.energy.description'),
    mockup: '/Projects/Energy/974BE277-C1B0-4EBC-9E0C-AE982167833B.jpeg',
    gradientColors: undefined,
    browserUrl: 'YFHNRG.com',
  },
  {
    title: 'Lyra',
    category: t('projects.lyra.category'),
    description: t('projects.lyra.description'),
    underConstruction: true,
    gradientColors: undefined,
    browserUrl: 'comingsoon.com',
  },
  {
    title: 'Evolution of My Embedded Systems',
    category: t('projects.embeddedSystems.category'),
    description: t('projects.embeddedSystems.description'),
    summary: t('projects.embeddedSystems.summary'),
    mockup: '/Projects/Embeddedsystems/IMG_1702.jpg',
    gradientColors: undefined,
    browserUrl: 'embedded.nickmilien.com',
  },
  {
    title: 'Vibes',
    category: t('projects.vibes.category'),
    description: t('projects.vibes.description'),
    summary: t('projects.vibes.summary'),
    mockup: '/Projects/Vibes/newthumbnail.png',
    coverImage: '/Projects/Vibes/portfolio project picture.png',
    gradientColors: undefined,
    browserUrl: 'vibes.app',
  },
  {
    title: 'Good OT Practice',
    category: t('projects.goodOtPractice.category'),
    description: t('projects.goodOtPractice.description'),
    summary: t('projects.goodOtPractice.summary'),
    mockup: '/Projects/GoodOtPractice/DE16F569-8756-48B4-AAFB-3B479EDE42C1.png',
    gradientColors: undefined,
    browserUrl: 'goodotpractice.com',
  },
  ];
}

const PROJECT_SECTIONS = {
  professional: ['Lawnstack', 'Boltzman Enterprise', 'Boltzman AI', 'Boltzman Voice'],
  personal: ['Energy', 'Lyra', 'Evolution of My Embedded Systems', 'Vibes'],
  contracts: ['Clearr', 'Good OT Practice'],
} as const;

type SectionKey = keyof typeof PROJECT_SECTIONS;

function partitionProjectsBySection(projects: Project[]): Record<SectionKey, Project[]> {
  const byTitle = new Map(projects.map((p) => [p.title, p]));
  const result: Record<SectionKey, Project[]> = {
    professional: [],
    personal: [],
    contracts: [],
  };
  for (const key of Object.keys(PROJECT_SECTIONS) as SectionKey[]) {
    for (const title of PROJECT_SECTIONS[key]) {
      const project = byTitle.get(title);
      if (project) result[key].push(project);
    }
  }
  return result;
}

/** Fixed height for the browser mockup inside compact cards so every card is identical. */
const DESKTOP_MOCKUP_HEIGHT = 148;
/** Card/container height: mockup + padding + room for title overlay. Kept tight so the gray container isn’t long. */
const DESKTOP_CARD_HEIGHT = DESKTOP_MOCKUP_HEIGHT + 52;
const DESKTOP_CARD_CLASS =
  'group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] min-w-0 box-border block min-h-0';
const MOBILE_CARD_CLASS =
  'group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] min-h-[300px] sm:min-h-[400px]';

function ProjectCard({
  project,
  t,
  onNavigate,
  compact,
}: {
  project: Project;
  t: (key: string) => string;
  onNavigate: (slug: string) => void;
  compact?: boolean;
}) {
  const cardClass = compact ? DESKTOP_CARD_CLASS : MOBILE_CARD_CLASS;
  const cardStyle = compact
    ? {
        width: '100%',
        height: '100%',
        minHeight: 0,
        maxHeight: '100%',
        boxSizing: 'border-box' as const,
        contain: 'layout size' as const,
        flex: '0 0 auto',
        overflow: 'hidden' as const,
        isolation: 'isolate' as const,
        backgroundColor: project.title === 'Boltzman AI' ? '#1a1a1a' : 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
      }
    : {
        backgroundColor: project.title === 'Boltzman AI' ? '#1a1a1a' : 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
      };
  const mockupHeight = compact ? DESKTOP_MOCKUP_HEIGHT : '85%';
  const paddingClass = compact ? 'p-2 md:p-3' : 'p-4 md:p-6';
  const chromeClass = compact
    ? 'px-2 py-1.5 md:px-2 md:py-2 flex items-center gap-1.5'
    : 'px-3 py-2 md:px-4 md:py-3 flex items-center gap-2';
  const dotClass = compact ? 'w-2 h-2 rounded-full' : 'w-2.5 h-2.5 md:w-3 md:h-3 rounded-full';
  const urlClass = compact
    ? 'flex-1 mx-1 md:mx-2 rounded px-1.5 py-0.5 text-[9px] md:text-[10px] truncate'
    : 'flex-1 mx-2 md:mx-4 rounded-md px-2 md:px-3 py-1 text-[10px] md:text-xs truncate';
  const titleClass = compact
    ? 'text-sm md:text-base font-bold text-white mb-0.5 drop-shadow-lg'
    : 'text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg';
  const categoryClass = compact
    ? 'text-[9px] md:text-[10px] text-white/90 drop-shadow-md'
    : 'text-[10px] sm:text-xs md:text-sm text-white/90 drop-shadow-md';
  const overlayClass = compact
    ? 'absolute bottom-2 left-2 md:bottom-2.5 md:left-2.5 z-10'
    : 'absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 z-10';

  const cardRef = useRef<HTMLDivElement>(null);
  // #region agent log
  useEffect(() => {
    if (!compact || !cardRef.current) return;
    const el = cardRef.current;
    const raf = requestAnimationFrame(() => {
      const cs = typeof getComputedStyle !== 'undefined' ? getComputedStyle(el) : null;
      const parent = el.parentElement;
      const firstChild = el.firstElementChild;
      const payload = {
        hypothesisId: 'A',
        projectTitle: project.title,
        expectedHeight: DESKTOP_CARD_HEIGHT,
        inlineHeight: el.style.height,
        computedHeight: cs?.height ?? null,
        offsetHeight: el.offsetHeight,
        parentOffsetHeight: parent?.offsetHeight ?? null,
        firstChildOffsetHeight: firstChild instanceof HTMLElement ? firstChild.offsetHeight : null,
      };
      fetch('http://127.0.0.1:7242/ingest/6c79a092-4ad3-4147-8078-543fa19fc467', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ location: 'Projects.tsx:ProjectCard', message: 'card measure', data: payload, timestamp: Date.now() }),
      }).catch(() => {});
      if (typeof console !== 'undefined' && console.log) {
        console.log('[DEBUG card measure]', JSON.stringify(payload));
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [compact, project.title]);
  // #endregion

  return (
    <div
      ref={cardRef}
      className={cardClass}
      onClick={() => onNavigate(titleToSlug(project.title))}
      style={cardStyle}
    >
      <div
        className={`absolute inset-0 flex flex-col justify-end ${paddingClass}`}
        style={compact ? { height: '100%', maxHeight: '100%', minHeight: 0 } : undefined}
      >
        <div
          className={`w-full ${project.title === 'Boltzman AI' ? 'bg-[#1a1a1a]' : 'bg-white'} rounded-t-lg shadow-xl overflow-hidden flex flex-col min-h-0`}
          style={
            compact
              ? {
                  height: DESKTOP_MOCKUP_HEIGHT,
                  minHeight: DESKTOP_MOCKUP_HEIGHT,
                  maxHeight: DESKTOP_MOCKUP_HEIGHT,
                  flex: '0 0 auto',
                  maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
                }
              : {
                  height: mockupHeight,
                  maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
                }
          }
        >
          <div className={`flex-shrink-0 ${project.title === 'Boltzman AI' ? 'bg-[#2a2a2a] border-b border-gray-700' : 'bg-gray-100 border-b border-gray-200'} ${chromeClass}`}>
            <div className="flex gap-1 md:gap-1.5">
              <div className={`${dotClass} bg-red-500`}></div>
              <div className={`${dotClass} bg-yellow-500`}></div>
              <div className={`${dotClass} bg-green-500`}></div>
            </div>
            <div className={`${project.title === 'Boltzman AI' ? 'bg-[#3a3a3a] text-gray-400' : 'bg-white text-gray-500'} ${urlClass}`}>
              {project.browserUrl || `${project.title.toLowerCase().replace(/\s+/g, '')}.com`}
            </div>
          </div>

          <div className={`flex-1 min-h-0 relative overflow-hidden ${project.title === 'Boltzman AI' ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
            {project.underConstruction ? (
              <div className="flex flex-col items-center justify-center h-full p-4">
                <div className="text-gray-800 text-sm md:text-base font-bold mb-1">{t('projects.underConstruction')}</div>
                <div className="text-gray-500 text-xs">{t('projects.comingSoon')}</div>
              </div>
            ) : project.mockup ? (
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={project.mockup}
                  alt={`${project.title} mockup`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    objectPosition: project.title === 'Energy' ? 'top left' : project.title === 'Vibes' ? 'center' : 'top center',
                    imageRendering: '-webkit-optimize-contrast',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    transform: project.title === 'Vibes' ? 'translateZ(0) scale(1.05)' : 'translateZ(0) scale(0.95)',
                    filter: 'contrast(1.05) brightness(1.02)',
                  }}
                  loading="eager"
                />
              </div>
            ) : project.image ? (
              <div className="flex items-center justify-center h-full p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain"
                  style={{
                    imageRendering: '-webkit-optimize-contrast',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                    filter: 'contrast(1.05) brightness(1.02)',
                  }}
                  loading="eager"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-4">
                <div className="text-gray-400 text-3xl mb-2">📸</div>
                <div className="text-gray-500 text-xs font-medium">Placeholder</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={overlayClass}>
        <h3 className={titleClass}>{project.title}</h3>
        <p className={categoryClass}>{project.category}</p>
      </div>
    </div>
  );
}

const SECTION_KEYS: SectionKey[] = ['professional', 'personal', 'contracts'];
const SECTION_TITLE_KEYS: Record<SectionKey, string> = {
  professional: 'projects.sectionProfessional',
  personal: 'projects.sectionPersonal',
  contracts: 'projects.sectionContracts',
};

function SectionTitle({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
      <span className="font-serif text-sm md:text-base font-medium tracking-tight text-white/95">
        {label}
      </span>
    </div>
  );
}

export function Projects() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const projects = getProjectsData(t);
  const bySection = partitionProjectsBySection(projects);

  const handleNavigate = (slug: string) => navigate(`/project/${slug}`);

  return (
    <section className="py-8 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-6 md:mb-10 text-center px-2">
          {t('projects.title')}
        </h2>

        {/* Desktop: one row per section — styled title + compact card grid */}
        <div className="hidden md:block space-y-10 max-w-6xl mx-auto">
          {SECTION_KEYS.map((key) => (
            <div key={key} className="space-y-4">
              <SectionTitle label={t(SECTION_TITLE_KEYS[key])} />
              <div
                className={
                  key === 'contracts'
                    ? 'grid grid-cols-2 gap-4 items-start [&>*]:min-h-0'
                    : 'grid grid-cols-2 lg:grid-cols-4 gap-4 items-start [&>*]:min-h-0'
                }
                style={{
                  alignContent: 'start',
                  gridTemplateRows: `${DESKTOP_CARD_HEIGHT}px`,
                }}
              >
                {bySection[key].map((project) => (
                  <div
                    key={project.title}
                    className="min-h-0 overflow-hidden flex flex-col"
                    style={{
                      height: DESKTOP_CARD_HEIGHT,
                      minHeight: DESKTOP_CARD_HEIGHT,
                      maxHeight: DESKTOP_CARD_HEIGHT,
                    }}
                  >
                    <ProjectCard
                      project={project}
                      t={t}
                      onNavigate={handleNavigate}
                      compact
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single grid, no section headers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto md:hidden">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              t={t}
              onNavigate={handleNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
