import { useNavigate } from 'react-router-dom';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';

export function About() {
  const navigate = useNavigate();

  const images = [
    '/images/Aboutfolder/_VDB0681 2.JPG',
    '/images/Aboutfolder/IMG_1484.jpg',
    '/images/Aboutfolder/IMG_1485.jpg',
  ];

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

          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
              About Me
            </h1>
            <p className="text-normal-text text-lg font-mono max-w-2xl mx-auto">
              A glimpse into who I am beyond the code
            </p>
          </div>

          {/* Unique Photo Collage */}
          <div className="relative mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* First Image - Large, Left Side */}
              <div className="md:col-span-2 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <img
                    src={images[0]}
                    alt="About me 1"
                    className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Second Image - Stacked Right Side */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-[3deg] hover:rotate-0 transition-transform duration-500">
                    <img
                      src={images[1]}
                      alt="About me 2"
                      className="w-full h-[240px] object-cover hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                    <img
                      src={images[2]}
                      alt="About me 3"
                      className="w-full h-[240px] object-cover hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Placeholder */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 md:p-12">
              <h2 className="font-serif text-3xl text-white mb-6">Who I Am</h2>
              <div className="space-y-4 text-normal-text font-mono text-base leading-relaxed">
                <p>
                  Placeholder content for about me section. This will be customized with your personal story, background, interests, and what drives you.
                </p>
                <p>
                  You can add more paragraphs here to tell your story. This is a great place to share your journey, values, and what makes you unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

