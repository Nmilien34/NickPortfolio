interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  video?: string;
  link?: string;
  underConstruction?: boolean;
}

const projects: Project[] = [
  {
    title: 'Lawnstack',
    category: 'Web Platform',
    description: 'A marketplace platform connecting homeowners with local lawn care and landscaping service providers.',
    video: 'https://zivbanqpjwktphio.public.blob.vercel-storage.com/projects/lawnstack-demo.mp4',
  },
  {
    title: 'Voice AI Receptionist',
    category: 'SaaS Product',
    description: 'AI-powered voice receptionist service for restaurants, handling customer calls and reservations with natural conversation.',
    video: 'https://zivbanqpjwktphio.public.blob.vercel-storage.com/projects/voice-ai-demo.mp4',
  },
  {
    title: 'Boltzman AI',
    category: 'AI Platform',
    description: 'An AI-powered platform leveraging advanced language models to deliver intelligent automation and conversational experiences.',
    video: 'https://zivbanqpjwktphio.public.blob.vercel-storage.com/projects/boltzman-ai-demo.mp4',
  },
  {
    title: 'Clearr',
    category: 'Mobile App',
    description: 'Clearr is an AI-powered message translation app that acts like \'Google translate\' for emotional communication. it translates raw, potentionally emotional messages into healthier, more constructive communication using AI.',
    image: '/images/projects/Clearr/clearr-cover.jpeg',
    link: 'https://apps.apple.com/us/app/clearr-thought-translator/id6751149912',
  },
  {
    title: 'Energy',
    category: 'Mobile App',
    description: 'Energy is a youtube wrapper that let you listen to your favorite songs for free by converting videos into ads-free Audio',
    video: 'https://zivbanqpjwktphio.public.blob.vercel-storage.com/projects/energy-demo.mp4',
  },
  {
    title: 'Lyra',
    category: 'AI Product',
    description: 'An AI companion for seniors with cognitive impairemet. Reimagining an interface just for them',
    underConstruction: true,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center lg:justify-items-stretch">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer w-full max-w-xl"
              onClick={() => {
                if (project.link) {
                  window.open(project.link, '_blank');
                }
              }}
            >
              {/* Image/Video Area */}
              <div className="mb-4 overflow-hidden rounded-md">
                {project.underConstruction ? (
                  <div className="w-full aspect-video bg-[#1a1a1a] flex flex-col items-center justify-center border border-white/10">
                    <div className="text-white text-2xl font-bold mb-2">Under Construction</div>
                    <div className="text-gray-400 text-sm">Coming Soon</div>
                  </div>
                ) : project.video ? (
                  <video
                    src={project.video}
                    className="w-full aspect-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    crossOrigin="anonymous"
                    style={{
                      objectFit: 'cover',
                      backgroundColor: '#10e9a0',
                      width: '100%',
                      height: '100%',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      willChange: 'auto'
                    }}
                    onLoadedMetadata={(e) => {
                      const video = e.target as HTMLVideoElement;
                      // Ensure video renders at native resolution
                      video.style.width = '100%';
                      video.style.height = '100%';
                      // Speed up playback to 1.5x
                      video.playbackRate = 1.5;
                    }}
                    onError={(e) => {
                      console.error(`Failed to load video for ${project.title}:`, e);
                      // Optionally hide the video element or show a placeholder
                      const video = e.target as HTMLVideoElement;
                      video.style.display = 'none';
                    }}
                    onCanPlay={() => {
                      // Ensure video plays when ready
                      const video = document.querySelector(`video[src="${project.video}"]`) as HTMLVideoElement;
                      if (video && video.paused) {
                        video.play().catch((err) => {
                          console.warn('Video autoplay prevented:', err);
                        });
                      }
                    }}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover"
                    loading="eager"
                    style={{
                      imageRendering: '-webkit-optimize-contrast',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      filter: 'contrast(1.05) brightness(1.02)',
                      objectPosition: 'right center'
                    }}
                  />
                )}
              </div>

              {/* Content Area */}
              <div className="space-y-2">
                {/* Title */}
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>

                {/* Category Tag */}
                <p className="text-xs text-gray-400">
                  {project.category}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
