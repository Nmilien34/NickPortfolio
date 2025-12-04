import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Timeline, fullTimelineData } from './components/sections/Timeline';
import { SlideNavigation } from './components/navigation/SlideNavigation';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  // Split timeline into sections (4 years each)
  // Section 0: Hero (2015)
  // Section 1: 2016-2019 (indices 0-3)
  // Section 2: 2020-2023 (indices 4-7)
  // Section 3: 2024-2025 (indices 8-9)
  const section1Years = fullTimelineData.slice(0, 4);  // 2016-2019
  const section2Years = fullTimelineData.slice(4, 8);  // 2020-2023
  const section3Years = fullTimelineData.slice(8, 10); // 2024-2025

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        document.getElementById('section-0'),
        document.getElementById('section-1'),
        document.getElementById('section-2'),
        document.getElementById('section-3'),
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div id="section-0">
          <Hero />
        </div>
        <div id="section-1">
          <Timeline years={section1Years} />
        </div>
        <div id="section-2">
          <Timeline years={section2Years} />
        </div>
        <div id="section-3">
          <Timeline years={section3Years} />
        </div>
      </main>
      <Footer />
      <SlideNavigation currentSlideIndex={currentSection} totalSlides={4} />
    </div>
  );
}

export default App;
