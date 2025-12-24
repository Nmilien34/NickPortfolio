import { useTranslation } from 'react-i18next';

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
  ];
}

import { useNavigate } from 'react-router-dom';
import { titleToSlug } from '../../lib/utils';

export function Projects() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const projects = getProjectsData(t);

  return (
    <section className="py-8 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-6 md:mb-12 text-center px-2">
          {t('projects.title')}
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
              onClick={() => {
                const slug = titleToSlug(project.title);
                navigate(`/project/${slug}`);
              }}
              style={{
                backgroundColor: project.title === 'Boltzman AI' ? '#1a1a1a' : 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
              }}
            >
              {/* Browser Window Mockup Container */}
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <div
                  className={`w-full ${project.title === 'Boltzman AI' ? 'bg-[#1a1a1a]' : 'bg-white'} rounded-t-xl shadow-2xl overflow-hidden`}
                  style={{
                    height: '85%',
                    maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
                  }}
                >
                  {/* Browser Chrome/Header */}
                  <div className={`${project.title === 'Boltzman AI' ? 'bg-[#2a2a2a] border-b border-gray-700' : 'bg-gray-100 border-b border-gray-200'} px-3 py-2 md:px-4 md:py-3 flex items-center gap-2`}>
                    <div className="flex gap-1.5 md:gap-2">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className={`flex-1 mx-2 md:mx-4 ${project.title === 'Boltzman AI' ? 'bg-[#3a3a3a] text-gray-400' : 'bg-white text-gray-500'} rounded-md px-2 md:px-3 py-1 text-[10px] md:text-xs truncate`}>
                      {project.browserUrl || `${project.title.toLowerCase().replace(/\s+/g, '')}.com`}
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className={`${project.title === 'Boltzman AI' ? 'bg-[#1a1a1a]' : 'bg-white'} h-full relative overflow-hidden`}>
                    {project.underConstruction ? (
                      <div className="flex flex-col items-center justify-center h-full p-8">
                        <div className="text-gray-800 text-2xl font-bold mb-2">{t('projects.underConstruction')}</div>
                        <div className="text-gray-500 text-sm">{t('projects.comingSoon')}</div>
                      </div>
                    ) : project.mockup ? (
                      <div className="w-full h-full relative overflow-hidden">
                        <img
                          src={project.mockup}
                          alt={`${project.title} mockup`}
                          style={{
                            objectFit: 'cover',
                            objectPosition: project.title === 'Energy' ? 'top left' : 'top center',
                            imageRendering: '-webkit-optimize-contrast',
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                            transform: 'translateZ(0) scale(0.95)',
                            filter: 'contrast(1.05) brightness(1.02)',
                            width: '100%',
                            height: '100%',
                          }}
                          loading="eager"
                        />
                      </div>
                    ) : project.image ? (
                      <div className="flex items-center justify-center h-full p-4">
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
                      <div className="flex flex-col items-center justify-center h-full p-8">
                        <div className="text-gray-400 text-6xl mb-4">📸</div>
                        <div className="text-gray-500 text-sm font-medium">Screenshot Placeholder</div>
                        <div className="text-gray-400 text-xs mt-2">Add your mockup image here</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info Overlay - Bottom Left */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5 sm:mb-1 drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/90 drop-shadow-md">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
