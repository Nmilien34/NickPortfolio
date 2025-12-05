interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'Wellspoken',
    category: 'Mobile App',
    description: 'A mobile application designed to help users improve their communication skills through interactive exercises and real-time feedback.',
    image: '/images/projects/wellspoken.jpg',
  },
  {
    title: 'Popfame',
    category: 'Web App',
    description: 'An on-demand furniture assembly and service platform connecting customers with skilled professionals.',
    image: '/images/projects/popfame.jpg',
  },
  {
    title: 'Lawnstack',
    category: 'Web Platform',
    description: 'A marketplace platform connecting homeowners with local lawn care and landscaping service providers.',
    image: '/images/projects/lawnstack.jpg',
  },
  {
    title: 'Boltzman AI',
    category: 'AI Platform',
    description: 'An AI-powered platform leveraging advanced language models to deliver intelligent automation and conversational experiences.',
    image: '/images/projects/boltzman.jpg',
  },
  {
    title: 'Voice AI Receptionist',
    category: 'SaaS Product',
    description: 'AI-powered voice receptionist service for restaurants, handling customer calls and reservations with natural conversation.',
    image: '/images/projects/voice-ai.jpg',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center lg:justify-items-stretch">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-300 cursor-pointer w-full max-w-md lg:max-w-none"
            >
              {/* Image Area */}
              <div className="mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover rounded-md"
                />
              </div>

              {/* Content Area */}
              <div className="space-y-2">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900">
                  {project.title}
                </h3>

                {/* Category Tag */}
                <p className="text-xs text-gray-500">
                  {project.category}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
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
