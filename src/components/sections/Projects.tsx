interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  mockup?: string; // Browser mockup screenshot
  link?: string;
  underConstruction?: boolean;
  gradientColors?: string; // Custom gradient for each project
  browserUrl?: string; // Custom URL to display in browser bar
}

const projects: Project[] = [
  {
    title: 'Lawnstack',
    category: 'Web Platform',
    description: 'A marketplace platform connecting homeowners with local lawn care and landscaping service providers.',
    mockup: '/Projects/Lawnstack /98EE5DD3-9A94-4F47-8D32-DD098CF123B9.jpeg',
    gradientColors: undefined, // Will use CSS variables instead
  },
  {
    title: 'Voice AI Receptionist',
    category: 'SaaS Product',
    description: 'AI-powered voice receptionist service for restaurants, handling customer calls and reservations with natural conversation.',
    mockup: '/Projects/Voice ai Receptionist/91658D25-00CB-4B5E-BD37-CDE8CFA0BA8C.jpeg',
    gradientColors: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    browserUrl: 'enterprise.boltzman.ai',
  },
  {
    title: 'Boltzman AI',
    category: 'AI Platform',
    description: 'An AI-powered platform leveraging advanced language models to deliver intelligent automation and conversational experiences.',
    mockup: '/Projects/Boltzman AI/146A59BD-B8D5-4B99-BD96-823574456AF2.jpeg',
    gradientColors: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    browserUrl: 'boltzman.ai',
  },
  {
    title: 'Clearr',
    category: 'Mobile App',
    description: 'Clearr is an AI-powered message translation app that acts like \'Google translate\' for emotional communication. it translates raw, potentionally emotional messages into healthier, more constructive communication using AI.',
    image: '/images/projects/Clearr/clearr-cover.jpeg',
    link: 'https://apps.apple.com/us/app/clearr-thought-translator/id6751149912',
    gradientColors: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    title: 'Energy',
    category: 'Mobile App',
    description: 'Energy is a youtube wrapper that let you listen to your favorite songs for free by converting videos into ads-free Audio',
    mockup: '/Projects/Energy/974BE277-C1B0-4EBC-9E0C-AE982167833B.jpeg',
    gradientColors: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    browserUrl: 'YFHNRG.com',
  },
  {
    title: 'Lyra',
    category: 'AI Product',
    description: 'An AI companion for seniors with cognitive impairemet. Reimagining an interface just for them',
    underConstruction: true,
    gradientColors: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    browserUrl: 'comingsoon.com',
  },
];

export function Projects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-4xl text-white mb-12 text-center">
          Some Projects I've Done
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              onClick={() => {
                if (project.link) {
                  window.open(project.link, '_blank');
                }
              }}
              style={{
                backgroundColor: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                minHeight: '500px',
              }}
            >
              {/* Browser Window Mockup Container */}
              <div className="absolute inset-0 flex items-end p-6">
                <div
                  className="w-full bg-white rounded-t-xl shadow-2xl overflow-hidden"
                  style={{
                    height: '85%',
                    maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
                  }}
                >
                  {/* Browser Chrome/Header */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-gray-500">
                      {project.browserUrl || `${project.title.toLowerCase().replace(/\s+/g, '')}.com`}
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="bg-white h-full relative overflow-hidden">
                    {project.underConstruction ? (
                      <div className="flex flex-col items-center justify-center h-full p-8">
                        <div className="text-gray-800 text-2xl font-bold mb-2">Under Construction</div>
                        <div className="text-gray-500 text-sm">Coming Soon</div>
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
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-sm text-white/90 drop-shadow-md">
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
