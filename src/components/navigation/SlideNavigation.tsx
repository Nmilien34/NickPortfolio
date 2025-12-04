import { useState, useEffect } from 'react';

interface SlideNavigationProps {
  currentSlideIndex?: number;
  totalSlides?: number;
}

export function SlideNavigation({ currentSlideIndex = 0, totalSlides = 5 }: SlideNavigationProps) {
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
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => {
            // Add your scroll logic here, e.g.:
            // document.getElementById(`slide-${index}`).scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ))}
    </div>
  );
}
