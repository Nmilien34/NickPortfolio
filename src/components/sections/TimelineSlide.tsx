interface TimelineSlideProps {
  year: string;
  title?: string;
  description?: string;
}

export function TimelineSlide({ year, title, description }: TimelineSlideProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Timeline Line from above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-white/20 to-white" />

      {/* Content */}
      <div className="text-center px-6 max-w-4xl">
        {/* Year Label in Bubble */}
        <div className="inline-block px-8 py-2 rounded-full border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-white/5 text-white font-mono text-sm mb-8">
          {year}
        </div>

        {title && (
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            {title}
          </h2>
        )}

        {description && (
          <p className="font-mono text-sm text-normal-text leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Timeline Line continuing down */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-0" />
        <div className="w-0.5 h-32 bg-gradient-to-b from-white to-white/20" />
      </div>
    </section>
  );
}
