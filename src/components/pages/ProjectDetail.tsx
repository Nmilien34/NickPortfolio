import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { titleToSlug } from '../../lib/utils';
import { projects } from '../sections/Projects';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find the project by slug
  const project = projects.find((p) => titleToSlug(p.title) === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-white mb-4">Project not found</h1>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono"
            >
              Go Back
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Notion-style Layout */}
        <div className="w-full">
          {/* 1. Full-Width Cover Image */}
          <div className="w-full h-64 md:h-96 bg-gray-200 relative">
            <img
              src={project.mockup || project.image || '/placeholder-cover.jpg'}
              alt={`${project.title} cover`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2. Content Container - Centered */}
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            {/* 3. Overlapping Page Icon */}
            <div className="relative -mt-16 md:-mt-20 flex justify-center mb-4">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg bg-gray-300 border-4 border-white shadow-lg overflow-hidden">
                <img
                  src={project.mockup || project.image || '/placeholder-icon.jpg'}
                  alt={`${project.title} icon`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 4. Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-2">
              {project.title}
            </h1>

            {/* 5. Optional Meta-text */}
            <div className="text-center text-gray-500 text-sm mb-12">
              {project.category} • {project.underConstruction ? 'Coming Soon' : 'Project'}
            </div>

            {/* 6. Content Body - Single Column */}
            <div className="max-w-3xl mx-auto space-y-8 pb-20">
              {/* Summary Section */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Summary</h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Highlights Section - Placeholder */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Highlights</h2>
                <ul className="space-y-2 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Placeholder highlight 1</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Placeholder highlight 2</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Placeholder highlight 3</span>
                  </li>
                </ul>
              </div>

              {/* Features Section - Placeholder */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Placeholder content for features section. This will be customized for each project.
                </p>
              </div>

              {/* Technology Stack Section - Placeholder */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Placeholder content for technology stack section.
                </p>
              </div>

              {/* Call to Action */}
              {project.link && (
                <div className="pt-8 border-t border-gray-200">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              )}

              {/* Back Button */}
              <div className="pt-8">
                <button
                  onClick={() => navigate(-1)}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ← Back to Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

