import { useState } from 'react';

interface PhotoSection {
  caption: string;
  photos: string[];
  videos?: string[];
}

interface PhotoFolderCarouselProps {
  photoSections: PhotoSection[];
}

export function PhotoFolderCarousel({ photoSections }: PhotoFolderCarouselProps) {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedSection(index);
  };

  const closeGallery = () => {
    setSelectedSection(null);
  };

  // Helper function to check if file is a video
  const isVideo = (filename: string) => {
    const videoExtensions = ['.mp4', '.MP4', '.mov', '.MOV', '.webm', '.WEBM'];
    return videoExtensions.some(ext => filename.endsWith(ext));
  };

  return (
    <>
      {/* Carousel Container */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {photoSections.map((section, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="flex-shrink-0 w-[300px] aspect-[4/5] rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 snap-start"
            >
              {/* Top Section - Image/Video (65%) */}
              <div className="h-[65%] overflow-hidden rounded-t-xl bg-black">
                {(() => {
                  const coverMedia = section.videos && section.videos.length > 0 ? section.videos[0] : section.photos[0];
                  return isVideo(coverMedia) ? (
                    <video
                      src={coverMedia}
                      className="w-full h-full object-cover object-[50%_20%]"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      style={{ display: 'block', transform: 'scale(1.02)' }}
                    />
                  ) : (
                    <img
                      src={coverMedia}
                      alt={section.caption}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="w-full h-full object-cover object-[50%_20%]"
                      style={{ display: 'block' }}
                      onError={() => {
                        console.error(`Failed to load image: ${coverMedia}`);
                      }}
                    />
                  );
                })()}
              </div>

              {/* Bottom Section - Text (35%) */}
              <div className="h-[35%] p-4 flex flex-col justify-between">
                <h3 className="font-sans font-bold text-lg text-white line-clamp-2">
                  {section.caption}
                </h3>

                {/* Metadata */}
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>
                    {(section.videos?.length || 0) + section.photos.length} item{((section.videos?.length || 0) + section.photos.length) !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Arrow Button */}
        {photoSections.length > 1 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              const container = e.currentTarget.parentElement?.querySelector('.overflow-x-auto');
              if (container) {
                container.scrollBy({ left: -316, behavior: 'smooth' }); // Scroll left
              }
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 z-10"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Next Arrow Button */}
        {photoSections.length > 1 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              const container = e.currentTarget.parentElement?.querySelector('.overflow-x-auto');
              if (container) {
                container.scrollBy({ left: 316, behavior: 'smooth' }); // 300px card + 16px gap
              }
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 z-10"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Photo Gallery Modal */}
      {selectedSection !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 md:p-4"
          onClick={closeGallery}
        >
          <div
            className="max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl p-4 md:p-8 custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-4 md:mb-8">
              <h2 className="text-lg md:text-2xl font-serif text-white">
                {photoSections[selectedSection].caption}
              </h2>
              <button
                onClick={closeGallery}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Photo/Video Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
              {/* Render videos first, then photos */}
              {[...(photoSections[selectedSection].videos || []), ...photoSections[selectedSection].photos].map((media, mediaIndex) => (
                <div key={mediaIndex} className="relative group">
                  {isVideo(media) ? (
                    <video
                      src={media}
                      className="w-full aspect-video object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                      controls
                      muted
                      playsInline
                      preload="none"
                    />
                  ) : (
                    <img
                      src={media}
                      alt={`Media ${mediaIndex + 1}`}
                      loading="lazy"
                      className={`w-full aspect-square object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 ${
                        selectedSection === 0 && mediaIndex === 0 ? 'object-[center_60%]' : ''
                      }`}
                      onError={(e) => {
                        console.error(`Failed to load image: ${media}`);
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Custom scrollbar for modal */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }
      `}</style>
    </>
  );
}
