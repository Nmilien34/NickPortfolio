export function Hero() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen">
      {/* Logo/Home Button */}
      <button
        onClick={scrollToTop}
        className="absolute w-16 h-16 rounded-lg flex items-center justify-center border-2 border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)] bg-white/5 z-[60] cursor-pointer hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
        style={{
          top: '80px',
          left: '120px',
        }}
        aria-label="Home"
      >
        <span className="text-white font-serif text-[22px]">
          NCM
        </span>
      </button>
    </section>
  );
}
