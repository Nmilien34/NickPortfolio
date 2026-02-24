import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
const DESKTOP_MOCKUP_HEIGHT = 220;
/** Card/container height: mockup + padding + room for title overlay. Kept tight so the gray container isn’t long. */
const DESKTOP_CARD_HEIGHT = DESKTOP_MOCKUP_HEIGHT + 80;
const DESKTOP_CARD_CLASS =
  'group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl min-w-0 box-border block min-h-0';
const MOBILE_CARD_CLASS =
  'group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-xl min-h-[350px] sm:min-h-[400px] flex flex-col';

function ProjectCard({
  project,
  t,
  onNavigate,
  compact,
  index,
}: {
  project: Project;
  t: (key: string) => string;
  onNavigate: (slug: string) => void;
  compact?: boolean;
  index: number;
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
      backgroundColor: 'hsl(var(--background))',
      color: 'hsl(var(--foreground))',
    }
    : {
      backgroundColor: 'hsl(var(--background))',
      color: 'hsl(var(--foreground))',
    };
  const mockupHeight = compact ? DESKTOP_MOCKUP_HEIGHT : '80%';
  const paddingClass = compact ? 'p-3 md:p-4' : 'p-4 md:p-6';
  const chromeClass = compact
    ? 'px-3 py-2 flex items-center justify-between'
    : 'px-4 py-3 flex items-center justify-between';
  const dotClass = compact ? 'w-2 h-2 rounded-full' : 'w-2.5 h-2.5 md:w-3 md:h-3 rounded-full';
  const urlClass = compact
    ? 'flex-1 mx-3 rounded-md px-2 py-1 text-[10px] truncate bg-black/40 text-white/50 border border-white/5 shadow-inner text-center font-mono tracking-wider'
    : 'flex-1 mx-4 rounded-md px-3 py-1.5 text-xs truncate bg-black/40 text-white/50 border border-white/5 shadow-inner text-center font-mono tracking-wider';
  const titleClass = compact
    ? 'text-base font-bold text-white mb-1 tracking-tight translate-y-2 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'
    : 'text-xl sm:text-2xl font-bold text-white mb-1.5 tracking-tight translate-y-2 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500';
  const categoryClass = compact
    ? 'text-[10px] text-white/60 font-medium tracking-wide uppercase translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75'
    : 'text-xs sm:text-sm text-white/60 font-medium tracking-wide uppercase translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75';
  const overlayClass = compact
    ? 'absolute bottom-0 left-0 right-0 p-4 pt-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10'
    : 'absolute bottom-0 left-0 right-0 p-6 sm:p-8 pt-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10';

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
      }).catch(() => { });
      if (typeof console !== 'undefined' && console.log) {
        console.log('[DEBUG card measure]', JSON.stringify(payload));
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [compact, project.title]);
  // #endregion

  return (
    <motion.div
      ref={cardRef}
      className={`${cardClass} before:absolute before:inset-0 before:bg-[radial-gradient(1000px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500`}
      onClick={() => onNavigate(titleToSlug(project.title))}
      style={cardStyle}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 1.2,
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1] // Custom refined spring-like easeOut: smoother entrance, softer deceleration
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

      <div
        className={`absolute inset-0 flex flex-col justify-start ${paddingClass} pt-4 md:pt-6 z-0`}
        style={compact ? { height: '100%', maxHeight: '100%', minHeight: 0 } : undefined}
      >
        <div
          className={`w-full bg-[#0a0a0a] rounded-xl ring-1 ring-white/10 shadow-2xl overflow-hidden flex flex-col min-h-0 group-hover:ring-white/20 transition-all duration-500`}
          style={
            compact
              ? {
                height: DESKTOP_MOCKUP_HEIGHT,
                minHeight: DESKTOP_MOCKUP_HEIGHT,
                maxHeight: DESKTOP_MOCKUP_HEIGHT,
                flex: '0 0 auto',
                transform: 'translateY(12px)',
                opacity: 0.9,
              }
              : {
                height: mockupHeight,
                transform: 'translateY(16px)',
                opacity: 0.9,
              }
          }
        >
          <div className={`flex-shrink-0 bg-white/[0.03] border-b border-white/5 backdrop-blur-md ${chromeClass}`}>
            <div className="flex gap-1.5 md:gap-2 w-12">
              <div className={`${dotClass} bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.3)]`}></div>
              <div className={`${dotClass} bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.3)]`}></div>
              <div className={`${dotClass} bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.3)]`}></div>
            </div>
            <div className={urlClass}>
              {project.browserUrl || `${project.title.toLowerCase().replace(/\s+/g, '')}.com`}
            </div>
            <div className="w-12 flex justify-end">
              <div className="w-3 h-3 md:w-4 md:h-4 text-white/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-0 relative overflow-hidden bg-black/50 group-hover:scale-105 transition-transform duration-700">
            {project.underConstruction ? (
              <div className="flex flex-col items-center justify-center h-full p-4 bg-gradient-to-br from-white/5 to-transparent">
                <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-dashed border-white/30 rounded-full flex items-center justify-center mb-3 animate-spin-slow">
                  <span className="text-white/50 text-xs text-center border-t border-white/50 w-full"></span>
                </div>
                <div className="text-white/80 text-sm md:text-base font-medium mb-1 tracking-tight">{t('projects.underConstruction')}</div>
                <div className="text-white/40 text-[10px] md:text-xs tracking-wider uppercase">{t('projects.comingSoon')}</div>
              </div>
            ) : project.mockup ? (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src={project.mockup}
                  alt={`${project.title} mockup`}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    objectPosition: project.title === 'Energy' ? 'top left' : project.title === 'Vibes' ? 'center' : 'top center',
                    imageRendering: 'auto',
                    WebkitFontSmoothing: 'antialiased',
                  }}
                  loading="eager"
                />
              </div>
            ) : project.image ? (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    objectPosition: 'center',
                    imageRendering: 'auto',
                    WebkitFontSmoothing: 'antialiased',
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
    </motion.div>
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
    <div className="inline-flex items-center gap-3 w-full">
      <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
        <span className="font-serif text-sm md:text-base font-medium tracking-wide text-white/90">
          {label}
        </span>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-10 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-sm">
            {t('projects.title')}
          </h2>
          <div className="w-12 h-1 bg-white/20 mt-4 rounded-full"></div>
        </div>

        {/* Desktop: one row per section — styled title + compact card grid */}
        <div className="hidden md:flex flex-col space-y-16 max-w-7xl mx-auto">
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
                {bySection[key].map((project, index) => (
                  <div
                    key={project.title}
                    className="min-h-0 overflow-hidden flex flex-col pt-2"
                    style={{
                      height: DESKTOP_CARD_HEIGHT + 10,
                      minHeight: DESKTOP_CARD_HEIGHT + 10,
                      maxHeight: DESKTOP_CARD_HEIGHT + 10,
                    }}
                  >
                    <ProjectCard
                      project={project}
                      t={t}
                      onNavigate={handleNavigate}
                      compact
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single grid, no section headers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto md:hidden">
          {projects.map((project, index) => (
            <div key={project.title} className="pt-2">
              <ProjectCard
                project={project}
                t={t}
                onNavigate={handleNavigate}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
