import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VolumetricLight } from '../effects/VolumetricLight';

export function Hero() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();

  const languages = [
    { code: 'EN', label: 'English', flag: '🇺🇸' },
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'HT', label: 'Kreyòl', flag: '🇭🇹' },
  ];

  const translations = {
    EN: {
      subtitle: 'Technical Product Manager & Electronics Engineer',
      description: 'I like finding the problems that keep the experience from being great',
    },
    FR: {
      subtitle: 'Chef de Produit Technique & Ingénieur en Électronique',
      description: 'J\'aime trouver les problèmes qui empêchent l\'expérience d\'être excellente',
    },
    HT: {
      subtitle: 'Manadjè Pwodui Teknik & Enjenyè Elektwonik',
      description: 'Mwen renmen jwenn pwoblèm ki anpeche eksperyans lan bon',
    },
  };

  const handleLanguageChange = (code: string) => {
    setCurrentLang(code);
    setIsLangOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center pt-48">
      {/* Volumetric Light Effect */}
      <VolumetricLight />

      {/* Logo/Home Button */}
      <button
        onClick={scrollToTop}
        className="absolute w-16 h-16 rounded-lg flex items-center justify-center border-2 border-[#EFBF04] shadow-[0_0_25px_rgba(239,191,4,0.5)] bg-white/5 z-[60] cursor-pointer hover:border-[#EFBF04] hover:shadow-[0_0_35px_rgba(239,191,4,0.7)] transition-all duration-300"
        style={{
          top: '40px',
          left: '120px',
        }}
        aria-label="Home"
      >
        <span className="text-white font-serif text-[22px]">
          NCM
        </span>
      </button>

      {/* Navigation Buttons */}
      <div
        className="absolute flex gap-6 z-[60]"
        style={{
          top: '40px',
          right: '280px',
        }}
      >
        <button className="px-5 py-2 text-normal-text hover:text-text-white transition-colors">
          About
        </button>
        <a
          href="/images/_PM concised V7.2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-normal-text hover:text-text-white transition-colors"
        >
          Resume
        </a>
        <button className="px-5 py-2 text-normal-text hover:text-text-white transition-colors">
          Learnings
        </button>
      </div>

      {/* Language Switcher */}
      <div
        className="absolute z-[60]"
        style={{
          top: '40px',
          right: '120px',
        }}
      >
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="px-6 py-2 rounded-full border-2 border-[#EFBF04] shadow-[0_0_30px_rgba(239,191,4,0.5)] bg-white/5 text-white hover:border-[#EFBF04] hover:shadow-[0_0_40px_rgba(239,191,4,0.7)] transition-all duration-300"
        >
          {currentLang}
        </button>

        {isLangOpen && (
          <div className="absolute right-0 mt-2 w-44 rounded-lg border border-[#EFBF04] bg-background-color shadow-[0_0_30px_rgba(239,191,4,0.4)] overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center gap-3 ${
                  currentLang === lang.code ? 'text-text-white bg-white/5' : 'text-normal-text'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Hero Content */}
      <div className="text-center px-6 relative z-10">
        {/* Main Title */}
        <h1
          className="font-serif text-7xl md:text-8xl tracking-tighter mb-4 text-white"
          style={{
            mixBlendMode: 'overlay',
            opacity: 0.95,
            textShadow: '0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(255,255,255,0.2)',
          }}
        >
          NICK MILIEN
        </h1>

        {/* Subtitle */}
        <h2 className="font-serif text-3xl md:text-4xl font-light text-white-smoke mb-12">
          {translations[currentLang as keyof typeof translations].subtitle}
        </h2>

        {/* Details */}
        <p className="font-mono text-sm text-normal-text">
          {translations[currentLang as keyof typeof translations].description}
        </p>

        {/* Voice Assistant */}
        <div className="flex flex-col items-center justify-center gap-6 mt-12">
          {/* Visualizer (Only visible when listening) */}
          <div className={`h-16 flex items-center justify-center gap-1 transition-all duration-500 ${isListening ? 'opacity-100 scale-100' : 'opacity-0 scale-50 h-0 overflow-hidden'}`}>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 bg-white rounded-full animate-wave"
                style={{
                  height: '10%',
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`
                }}
              />
            ))}
          </div>

          {/* The Button */}
          <button
            onClick={() => setIsListening(!isListening)}
            className={`
              relative group px-8 py-3 rounded-full
              flex items-center gap-3
              transition-all duration-500 ease-out
              border border-white/10 bg-white/5 backdrop-blur-sm
              hover:bg-white/10 hover:border-white/20 hover:scale-105
              ${isListening ? 'border-red-500/30 bg-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.2)]' : 'shadow-[0_0_20px_rgba(255,255,255,0.05)]'}
            `}
          >
            {/* Glowing Dot Indicator */}
            <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${isListening ? 'bg-red-500 animate-pulse' : 'bg-[#EFBF04] shadow-[0_0_15px_#EFBF04]'}`} />

            {/* Button Text */}
            <span className="font-mono text-sm text-gray-300 tracking-wide uppercase">
              {isListening ? "Listening..." : "Speak to Assistant"}
            </span>

            {/* Subtle Glow Layer */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5 blur-xl -z-10" />
          </button>

          {/* Instruction Text */}
          <p className={`text-xs text-gray-600 font-mono transition-opacity duration-500 ${isListening ? 'opacity-0' : 'opacity-100'}`}>
            Press to ask about my work, skills, or availability.
          </p>
        </div>

        {/* Personal Photos Section */}
        <div className="flex justify-center gap-2 md:gap-4 mt-32 mb-32 px-4">
          {/* Left Photo (Tilted Left) */}
          <figure className="group relative -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out z-0 hover:z-10">
            <div className="w-fit p-2 border border-white/20 rounded-2xl shadow-2xl">
              <img
                src="/images/4F8413FF-0F8C-4384-AA3A-E72D29CD7AF1.jpeg"
                alt="First day of high school"
                className="w-64 h-80 md:w-72 md:h-96 object-cover object-top rounded-xl filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <figcaption className="text-center text-gray-400 mt-4 font-mono text-xs opacity-80 group-hover:opacity-100 transition-opacity">
              first day of high school
            </figcaption>
          </figure>

          {/* Timeline Indicator */}
          <div className="flex items-center gap-2 text-gray-500 font-mono text-xs">
            <span>←</span>
            <span>~10 years in the us</span>
            <span>→</span>
          </div>

          {/* Right Photo (Tilted Right) */}
          <figure className="group relative rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out z-0 hover:z-10">
            <div className="w-fit p-2 border border-white/20 rounded-2xl shadow-2xl">
              <img
                src="/images/1F97147A-5531-4D66-BA63-A9F5B0A77C19_1_105_c.jpeg"
                alt="Visiting Cornell"
                className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-xl filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <figcaption className="text-center text-gray-400 mt-4 font-mono text-xs opacity-80 group-hover:opacity-100 transition-opacity">
              visiting friends at Cornell
            </figcaption>
          </figure>
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto mt-32 mb-20 px-6 text-center">
          <p className="font-mono text-sm text-normal-text leading-relaxed">
            Since leaving Haiti, I've been chasing a dream I've had since I was 10. The past decade has been filled with incredible people who shaped my journey. I'm grateful for their guidance and hope to pay it forward. Here's what I've been building.
          </p>
        </div>

        {/* Timeline Start */}
        <div className="relative flex flex-col items-center mt-20 mb-0">
          {/* Title */}
          <h3 className="font-serif text-2xl text-white mb-6">the beginning</h3>

          {/* Year Label in Bubble */}
          <div className="px-8 py-2 rounded-full border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-white/5 text-white font-mono text-sm mb-4">
            2015
          </div>

          {/* Description */}
          <p className="font-mono text-sm text-normal-text mb-8">Came to live in the US</p>

          {/* Timeline Dot */}
          <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-0" />

          {/* Timeline Line extending down */}
          <div className="w-0.5 h-24 bg-[#EFBF04]" />

          {/* Brace for 2015-2017 (from dot to 2017 bubble) */}
          <div className="absolute left-1/2 ml-20 flex items-start gap-3 z-20" style={{ top: '160px', height: '330px' }}>
            {/* Simple bracket */}
            <div className="relative" style={{ width: '20px', height: '100%' }}>
              {/* Top horizontal line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-white/30" />
              {/* Vertical line */}
              <div className="absolute top-0 right-0 w-0.5 h-full bg-white/30" />
              {/* Bottom horizontal line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30" />
            </div>
            {/* Arrow and Card */}
            <div className="flex items-center gap-3 mt-20">
              <span className="text-white/50">→</span>
              <div className="w-80">
                <div
                  onClick={() => {
                    console.log('Early Years card clicked');
                    navigate('/early-years');
                  }}
                  className="w-full p-6 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 text-left cursor-pointer"
                >
                  <h3 className="font-serif text-xl text-white mb-3">
                    Early Years in the US
                  </h3>
                  <p className="text-sm font-mono text-normal-text leading-relaxed mb-4 line-clamp-3">
                    I landed in the US from Haiti in 2015 and immediately realized one thing: nothing here is given, everything is earned. While I was navigating high school and learning English, I wasn't just trying to fit in—I was trying to catch up. Got my first job at 16 working at the mall which I then quit to go work at KFC, which paid a lot more. I built my first real community here, made friends who helped me navigate the culture, and set a baseline for the work ethic that would define the next decade of my life. Also played lots of soccer.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                    <span>Click to view details</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
