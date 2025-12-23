import { useState, useEffect } from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Hero } from '../sections/Hero';
import { Timeline, fullTimelineData } from '../sections/Timeline';
import { Projects } from '../sections/Projects';
import { SlideNavigation } from '../navigation/SlideNavigation';

export function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);

  // Split timeline into 6 sections for better scroll UX
  // Section 0: Hero
  // Section 1: 2016-2017 (indices 0-1)
  // Section 2: 2018-2019 (indices 2-3)
  // Section 3: 2020-2021 (indices 4-5)
  // Section 4: 2022-2023 (indices 6-7)
  // Section 5: 2024-2026 (indices 8-10) + Projects
  const section1Years = fullTimelineData.slice(0, 2);  // 2016-2017
  const section2Years = fullTimelineData.slice(2, 4);  // 2018-2019
  const section3Years = fullTimelineData.slice(4, 6);  // 2020-2021
  const section4Years = fullTimelineData.slice(6, 8);  // 2022-2023
  const section5Years = fullTimelineData.slice(8);     // 2024-2026

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        document.getElementById('section-0'),
        document.getElementById('section-1'),
        document.getElementById('section-2'),
        document.getElementById('section-3'),
        document.getElementById('section-4'),
        document.getElementById('section-5'),
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
        <div id="section-3">
          <Timeline years={section3Years} />
        </div>
        <div id="section-4">
          <Timeline years={section4Years} />
        </div>
        <div id="section-5" className="pb-20">
          <Timeline years={section5Years} />
          <Projects />
        </div>
      </main>
      <Footer />
      <SlideNavigation currentSlideIndex={currentSection} totalSlides={6} />
    </>
  );
}

