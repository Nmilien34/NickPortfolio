import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Hero } from '../sections/Hero';
import { Timeline, getTimelineData } from '../sections/Timeline';
import { Projects } from '../sections/Projects';
import { SlideNavigation } from '../navigation/SlideNavigation';

export function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const { t } = useTranslation();

  // Get timeline data with translations
  const fullTimelineData = getTimelineData(t);

  // Split timeline into sections (4 years each)
  // Section 0: Hero (2015)
  // Section 1: 2016-2019 (indices 0-3)
  // Section 2: 2020-2023 (indices 4-7)
  // Section 3: 2024-2026 (indices 8-10)
  const section1Years = fullTimelineData.slice(0, 4);  // 2016-2019
  const section2Years = fullTimelineData.slice(4, 8);  // 2020-2023
  const section3Years = fullTimelineData.slice(8);     // 2024-2026

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
    <>
      <div className="hidden md:block">
        <Header />
      </div>
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
        <div id="section-3" className="pb-20">
          <Timeline years={section3Years} />
        </div>
        <Projects />
      </main>
      <Footer />
      <SlideNavigation currentSlideIndex={currentSection} totalSlides={4} />
    </>
  );
}

