import { useNavigate } from 'react-router-dom';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';

export function Learnings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background-color">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="mb-12 px-6 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-white font-mono text-sm"
          >
            ← Back
          </button>

          {/* Page Title - Notion Style */}
          <div className="mb-16">
            <h1 className="font-serif text-6xl md:text-7xl text-white font-bold mb-2">
              Learnings
            </h1>
            <p className="text-normal-text text-base font-mono mt-4">
              Thoughts, insights, and lessons learned along the way
            </p>
          </div>

          {/* Content Sections - Notion Style */}
          <div className="space-y-10">
            {/* Section 1: Technical Learnings */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Technical Learnings</h2>
              <div className="space-y-1">
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  🚀 Building Scalable Systems
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  💻 TypeScript Deep Dives
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  🎨 Design Patterns in Practice
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  🔧 Embedded Systems Development
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  📱 Mobile App Architecture
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  ⚡ Performance Optimization Techniques
                </a>
              </div>
            </div>

            {/* Section 2: Product & Business */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Product & Business</h2>
              <div className="space-y-1">
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  📊 Product Metrics That Matter
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  🎯 Go-to-Market Strategies
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  💰 Building Sustainable Revenue Models
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  🤝 Customer Acquisition & Retention
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  📈 Scaling Operations Efficiently
                </a>
              </div>
            </div>

            {/* Section 3: Entrepreneurship */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Entrepreneurship</h2>
              <div className="space-y-1">
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  🎓 Lessons from Failure
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  💡 Validating Ideas Before Building
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  🌱 Building Teams That Scale
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  🔥 Managing Multiple Businesses
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  💼 Fundraising & Investor Relations
                </a>
              </div>
            </div>

            {/* Section 4: Personal Growth */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Personal Growth</h2>
              <div className="space-y-1">
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  🧠 Learning to Code From Scratch
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  ⏰ Time Management for Builders
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  🎯 Setting and Achieving Goals
                </a>
                <a href="#" className="block text-white hover:text-white/80 transition-colors py-1.5 underline">
                  🌍 Navigating Career Transitions
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

