interface SlideNavigationProps {
  currentSlideIndex?: number;
  totalSlides?: number;
}

export function SlideNavigation({ currentSlideIndex = 0, totalSlides = 6 }: SlideNavigationProps) {
  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4">
      {[...Array(totalSlides)].map((_, index) => (
        <button
          key={index}
          className={`
            w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-500 ease-out
            touch-manipulation
            ${index === currentSlideIndex
              ? 'bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.5)]' // Active Dot (Glowing)
              : 'bg-white/20 hover:bg-white/40 hover:scale-110 active:bg-white/40 active:scale-110' // Inactive Dot (Dim)
            }
          `}
          aria-label={`Go to section ${index + 1}`}
          onClick={() => scrollToSection(index)}
        />
      ))}
    </div>
  );
}
