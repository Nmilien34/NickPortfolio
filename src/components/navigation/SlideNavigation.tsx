interface SlideNavigationProps {
  currentSlideIndex?: number;
  totalSlides?: number;
}

export function SlideNavigation({ currentSlideIndex = 0, totalSlides = 5 }: SlideNavigationProps) {
  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {[...Array(totalSlides)].map((_, index) => (
        <button
          key={index}
          className={`
            w-3 h-3 rounded-full transition-all duration-500 ease-out
            ${index === currentSlideIndex
              ? 'bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.5)]' // Active Dot (Glowing)
              : 'bg-white/20 hover:bg-white/40 hover:scale-110' // Inactive Dot (Dim)
            }
          `}
          aria-label={`Go to section ${index + 1}`}
          onClick={() => scrollToSection(index)}
        />
      ))}
    </div>
  );
}
