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
      <div className="min-h-screen flex flex-col bg-background-color">
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
    <div className="min-h-screen flex flex-col bg-background-color">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="mb-12 px-6 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-white font-mono text-sm"
          >
            ← Back
          </button>

          {/* Header Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex items-start gap-4">
                {/* Project Icon */}
                <div className="w-16 h-16 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex-shrink-0">
                  <img
                    src={project.mockup || project.image || '/placeholder-icon.jpg'}
                    alt={`${project.title} icon`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl text-white mb-2">
                    {project.title}
                  </h1>
                  <p className="text-normal-text font-mono text-base mb-2">
                    {project.category}
                  </p>
                  <p className="text-white/80 font-mono text-sm max-w-2xl">
                    {project.description}
                  </p>
                </div>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-sm transition-all"
                >
                  Live Site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Visual Mockup Card */}
          {(project.coverImage || project.mockup) && (
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <div className="relative">
                {/* Desktop Mockup */}
                <div className="relative mx-auto max-w-4xl">
                  <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 bg-gray-700 rounded px-4 py-1 text-xs text-gray-300 text-center font-mono">
                      {project.browserUrl || 'example.com'}
                    </div>
                  </div>
                  <div className="bg-white rounded-b-lg overflow-hidden shadow-2xl">
                    <img
                      src={project.coverImage || project.mockup || project.image || '/placeholder-cover.jpg'}
                      alt={`${project.title} desktop mockup`}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project Details Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-white/60 font-mono text-xs mb-2">Role</p>
                <p className="text-white font-mono text-sm">Product Designer</p>
              </div>
              <div>
                <p className="text-white/60 font-mono text-xs mb-2">Team</p>
                <p className="text-white font-mono text-sm">1 Designer</p>
              </div>
              <div>
                <p className="text-white/60 font-mono text-xs mb-2">Tools</p>
                <p className="text-white font-mono text-sm">Figma, React</p>
              </div>
              <div>
                <p className="text-white/60 font-mono text-xs mb-2">Timeline</p>
                <p className="text-white font-mono text-sm">2024</p>
              </div>
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8">
            <h2 className="font-serif text-2xl text-white mb-4">Summary</h2>
            <p className="text-normal-text font-mono text-base leading-relaxed">
              {project.description}
            </p>
            {project.underConstruction && (
              <div className="mt-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-400 font-mono text-sm">🚧 This project is currently under construction</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
