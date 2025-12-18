import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getTimelineData } from '../sections/Timeline';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { PhotoFolderCarousel } from '../ui/PhotoFolderCarousel';

function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function CardDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Get timeline data with translations
  const fullTimelineData = getTimelineData(t);

  // Find the card data
  let cardData: {
    year?: string;
    title?: string;
    description?: string | React.ReactNode;
    highlights?: string[];
    photos?: string[];
    photosCaption?: string;
    photoSections?: Array<{ caption: string; photos: string[]; videos?: string[] }>;
  } | null = null;
  
  if (slug) {
    // Handle early years card
    if (slug === 'early-years') {
      cardData = {
        year: '2015-2017',
        title: t('timeline.earlyYears.title'),
        description: t('timeline.earlyYears.description'),
        photoSections: [
          {
            caption: 'Early years in the US',
            photos: [
              '/images/earlyYears/IMG_1399.jpg',
              '/images/earlyYears/IMG_3113.PNG',
            ],
          },
        ],
      };
    } else {
      // Search in regular timeline items and brace cards
      for (const item of fullTimelineData) {
        // Check regular timeline items
        if (item.title && titleToSlug(item.title) === slug) {
          cardData = {
            year: item.year,
            title: item.title,
            description: item.description,
            highlights: item.highlights,
            photos: item.photos,
            photoSections: item.photoSections,
          };
          break;
        }
        // Check brace cards
        if (item.brace?.card?.title && titleToSlug(item.brace.card.title) === slug) {
          cardData = {
            year: `${item.year}-${item.brace.endsAtYear}`,
            title: item.brace.card.title,
            description: item.brace.card.description,
            highlights: item.brace.card.highlights,
            photos: item.brace.card.photos,
            photosCaption: item.brace.card.photosCaption,
            photoSections: item.brace.card.photoSections,
          };
          break;
        }
      }
    }
  }

  if (!cardData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-white mb-4">Card not found</h1>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono"
            >
              Go Back
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-8 px-6 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-white font-mono text-sm"
          >
            ← Back
          </button>

          {/* Card Content */}
          <div className="rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm p-8">
            {cardData.year && (
              <div className="mb-6">
                <span className="inline-block px-6 py-2 rounded-full border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-white/5 text-white font-mono text-sm">
                  {cardData.year}
                </span>
              </div>
            )}
            {cardData.title && (
              <h1 className="font-serif text-4xl text-white mb-6">
                {cardData.title}
              </h1>
            )}

            {cardData.description && (
              <p className="text-base font-mono text-normal-text leading-relaxed mb-8">
                {cardData.description}
              </p>
            )}

            {cardData.highlights && cardData.highlights.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-serif text-white mb-4">Key Highlights:</h2>
                <ul className="text-base font-mono text-normal-text space-y-3 list-disc list-inside">
                  {cardData.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Photo Sections (new format) */}
            {cardData.photoSections && cardData.photoSections.length > 0 && (
              <div className="mt-8 pt-8 border-t border-white/10">
                <h2 className="text-xl font-serif text-white mb-6">Photos</h2>
                <PhotoFolderCarousel photoSections={cardData.photoSections} />
              </div>
            )}

            {/* Photos (old format - fallback) */}
            {!cardData.photoSections && cardData.photos && cardData.photos.length > 0 && (
              <div className="mt-8 pt-8 border-t border-white/10">
                <h2 className="text-xl font-serif text-white mb-6">Photos</h2>
                {cardData.photosCaption && (
                  <p className="text-sm font-mono text-normal-text italic mb-6 opacity-80">
                    {cardData.photosCaption}
                  </p>
                )}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {cardData.photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={photo}
                        alt={`${cardData.title} photo ${index + 1}`}
                        loading="lazy"
                        className={`w-full h-96 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 ${
                          index === 0 ? 'object-top' : ''
                        }`}
                        onError={(e) => {
                          console.error(`Failed to load image: ${photo}`);
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

