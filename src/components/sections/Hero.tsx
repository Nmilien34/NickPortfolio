export function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Logo/Home Button */}
      <div
        className="absolute w-16 h-16 rounded-lg flex items-center justify-center border-2 border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)] bg-white/5 z-[60]"
        style={{
          top: '80px',
          left: '120px',
        }}
      >
        <span className="text-white font-serif text-[22px]">
          NCM
        </span>
      </div>
    </section>
  );
}
