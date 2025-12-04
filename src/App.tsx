import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Timeline } from './components/sections/Timeline';
import { SlideNavigation } from './components/navigation/SlideNavigation';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Timeline />
      </main>
      <Footer />
      <SlideNavigation currentSlideIndex={0} totalSlides={5} />
    </div>
  );
}

export default App;
