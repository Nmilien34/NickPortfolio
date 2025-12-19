import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VolumetricLight } from '../effects/VolumetricLight';
import { useElevenLabs } from '../../hooks/useElevenLabs';

export function Hero() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const navigate = useNavigate();

  // ElevenLabs Configuration - Backend handles the API keys
  // In production, always use Render backend URL
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 
    (import.meta.env.PROD ? 'https://nickportfolio.onrender.com' : 'http://localhost:5000');
  
  console.log('🔧 Backend Config:', {
    url: backendUrl,
    envUrl: import.meta.env.VITE_BACKEND_URL,
    isProd: import.meta.env.PROD,
    mode: import.meta.env.MODE,
    hostname: typeof window !== 'undefined' ? window.location.hostname : 'SSR',
  });
  
  const elevenLabsConfig = {
    backendUrl: backendUrl,
  };

  const { 
    isProcessing, 
    isConnecting,
    isConnected,
    isSpeaking,
    error, 
    toggleRecording 
  } = useElevenLabs(elevenLabsConfig);
  
  const isActive = isConnecting || isConnected || isProcessing || isSpeaking;

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
        className="absolute top-6 left-4 md:top-10 md:left-[120px] w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center border-2 border-[#EFBF04] shadow-[0_0_25px_rgba(239,191,4,0.5)] bg-white/5 z-[60] cursor-pointer hover:border-[#EFBF04] hover:shadow-[0_0_35px_rgba(239,191,4,0.7)] transition-all duration-300"
        aria-label="Home"
      >
        <span className="text-white font-serif text-lg md:text-[22px]">
          NCM
        </span>
      </button>

      {/* Desktop Navigation - Full buttons */}
      <div className="absolute top-10 right-[280px] hidden md:flex gap-6 z-[60]">
        <button
          onClick={() => navigate('/about')}
          className="px-5 py-2 text-normal-text hover:text-text-white transition-colors"
        >
          About
        </button>
        <a
          href={encodeURI("/images/_PM concised V7.3.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-normal-text hover:text-text-white transition-colors"
        >
          Resume
        </a>
        <button
          onClick={() => navigate('/learnings')}
          className="px-5 py-2 text-normal-text hover:text-text-white transition-colors"
        >
          Learnings
        </button>
      </div>

      {/* Mobile Navigation - About button only */}
      <div className="absolute top-6 left-[70px] md:hidden z-[60]">
        <button
          onClick={() => navigate('/about')}
          className="px-3 py-1.5 text-sm text-normal-text hover:text-text-white transition-colors"
        >
          About
        </button>
      </div>

      {/* Mobile Hamburger Menu - Only visible on mobile */}
      <div className="absolute top-6 right-[70px] md:hidden z-[60]">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="px-3 py-1.5 text-white hover:text-[#EFBF04] transition-colors"
          aria-label="Menu"
        >
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-44 rounded-lg border border-[#EFBF04] bg-background-color shadow-[0_0_30px_rgba(239,191,4,0.4)] overflow-hidden">
            <a
              href={encodeURI("/images/_PM concised V7.3.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors block text-normal-text hover:text-text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
            <button
              onClick={() => {
                navigate('/learnings');
                setIsMenuOpen(false);
              }}
              className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors text-normal-text hover:text-text-white"
            >
              Learnings
            </button>
          </div>
        )}
      </div>

      {/* Language Switcher */}
      <div className="absolute top-6 right-4 md:top-10 md:right-[120px] z-[60]">
        <button
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base rounded-full border-2 border-[#EFBF04] shadow-[0_0_30px_rgba(239,191,4,0.5)] bg-white/5 text-white hover:border-[#EFBF04] hover:shadow-[0_0_40px_rgba(239,191,4,0.7)] transition-all duration-300"
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
      <div className="text-center px-4 md:px-6 relative z-10">
        {/* Main Title */}
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-3 md:mb-4 text-white leading-tight"
          style={{
            mixBlendMode: 'overlay',
            opacity: 0.95,
            textShadow: '0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(255,255,255,0.2)',
          }}
        >
          NICK MILIEN
        </h1>

        {/* Subtitle */}
        <h2 className="font-serif text-base sm:text-xl md:text-3xl lg:text-4xl font-light text-white-smoke mb-6 md:mb-12 px-2 leading-snug">
          {translations[currentLang as keyof typeof translations].subtitle}
        </h2>

        {/* Details */}
        <p className="font-mono text-xs md:text-sm text-normal-text max-w-2xl mx-auto px-2">
          {translations[currentLang as keyof typeof translations].description}
        </p>

        {/* Voice Assistant */}
        <div className="flex flex-col items-center justify-center gap-6 mt-12">
          {/* Visualizer (Only visible when active) */}
          <div className={`h-16 flex items-center justify-center gap-1 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50 h-0 overflow-hidden'}`}>
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
            onClick={toggleRecording}
            disabled={isConnecting}
            className={`
              relative group px-8 py-3 rounded-full
              flex items-center gap-3
              transition-all duration-500 ease-out
              border border-white/10 bg-white/5 backdrop-blur-sm
              hover:bg-white/10 hover:border-white/20 hover:scale-105
              disabled:opacity-50 disabled:cursor-not-allowed
              ${isActive ? 'border-white/30 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.2)]' : 'shadow-[0_0_20px_rgba(255,255,255,0.05)]'}
            `}
          >
            {/* Glowing Dot Indicator */}
            <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              isConnecting ? 'bg-yellow-500 animate-pulse' : 
              isConnected ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 
              isProcessing ? 'bg-blue-500 animate-pulse' : 
              isSpeaking ? 'bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 
              'bg-[#EFBF04] shadow-[0_0_15px_#EFBF04]'
            }`} />

            {/* Button Text */}
            <span className="font-mono text-sm text-gray-300 tracking-wide uppercase">
              {isConnecting ? "Connecting..." : 
               isConnected ? "Listening..." : 
               isProcessing ? "Processing..." : 
               isSpeaking ? "Speaking..." : 
               "Speak to Assistant"}
            </span>

            {/* Subtle Glow Layer */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5 blur-xl -z-10" />
          </button>

          {/* Error Message */}
          {error && (
            <p className="text-xs text-red-400 font-mono mt-2 max-w-md text-center">
              {error}
            </p>
          )}

          {/* Instruction Text */}
          <p className={`text-xs text-gray-600 font-mono transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
            Press to ask about my work, skills, or availability.
          </p>
        </div>

        {/* Personal Photos Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-4 mt-12 md:mt-32 mb-12 md:mb-32 px-2 sm:px-4">
          {/* Left Photo (Tilted Left) */}
          <figure className="group relative -rotate-2 md:-rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out z-0 hover:z-10">
            <div className="w-fit p-1.5 sm:p-2 border border-white/20 rounded-xl sm:rounded-2xl shadow-2xl">
              <img
                src="/images/4F8413FF-0F8C-4384-AA3A-E72D29CD7AF1.jpeg"
                alt="First day of high school"
                loading="lazy"
                className="w-36 h-44 sm:w-48 sm:h-60 md:w-64 md:h-80 lg:w-72 lg:h-96 object-cover object-top rounded-lg sm:rounded-xl filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <figcaption className="text-center text-gray-400 mt-2 sm:mt-4 font-mono text-[10px] sm:text-xs opacity-80 group-hover:opacity-100 transition-opacity">
              first day of high school
            </figcaption>
          </figure>

          {/* Timeline Indicator */}
          <div className="flex flex-col md:flex-row items-center gap-1 sm:gap-2 text-gray-500 font-mono text-[10px] sm:text-xs order-last md:order-none">
            <span className="hidden md:inline">←</span>
            <span className="text-center">~10 years<br className="md:hidden" /> in the us</span>
            <span className="hidden md:inline">→</span>
          </div>

          {/* Right Photo (Tilted Right) */}
          <figure className="group relative rotate-2 md:rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out z-0 hover:z-10">
            <div className="w-fit p-1.5 sm:p-2 border border-white/20 rounded-xl sm:rounded-2xl shadow-2xl">
              <img
                src="/images/1F97147A-5531-4D66-BA63-A9F5B0A77C19_1_105_c.jpeg"
                alt="Visiting Cornell"
                loading="lazy"
                className="w-36 h-44 sm:w-48 sm:h-60 md:w-64 md:h-80 lg:w-72 lg:h-96 object-cover rounded-lg sm:rounded-xl filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <figcaption className="text-center text-gray-400 mt-2 sm:mt-4 font-mono text-[10px] sm:text-xs opacity-80 group-hover:opacity-100 transition-opacity">
              visiting friends at Cornell
            </figcaption>
          </figure>
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto mt-12 md:mt-32 mb-8 md:mb-20 px-4 md:px-6 text-center">
          <p className="font-mono text-xs md:text-sm text-normal-text leading-relaxed">
            Since leaving Haiti, I've been chasing a dream I've had since I was 10. The past decade has been filled with incredible people who shaped my journey. I'm grateful for their guidance and hope to pay it forward. Here's what I've been building.
          </p>
        </div>

        {/* Timeline Start */}
        <div className="relative flex flex-col items-center mt-12 md:mt-20 mb-0">
          {/* Title */}
          <h3 className="font-serif text-xl md:text-2xl text-white mb-6">the beginning</h3>

          {/* Year Label in Bubble */}
          <div className="px-6 md:px-8 py-2 rounded-full border-2 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.2)] bg-white/5 text-white font-mono text-sm mb-4">
            2015
          </div>

          {/* Description */}
          <p className="font-mono text-xs md:text-sm text-normal-text mb-8">Came to live in the US</p>

          {/* Timeline Dot */}
          <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-0" />

          {/* Timeline Line extending down */}
          <div className="w-0.5 h-24 bg-[#EFBF04]" />

          {/* Brace for 2015-2017 - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex absolute left-1/2 ml-20 items-start gap-3 z-20" style={{ top: '160px', height: '330px' }}>
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

          {/* Mobile-only card - centered below timeline */}
          <div className="md:hidden flex flex-col items-center">
            {/* Year range bubble for mobile */}
            <div className="px-4 py-1.5 rounded-full border-2 border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.15)] bg-background-color text-white font-mono text-xs z-10">
              2015 - 2017
            </div>

            {/* Timeline segment connecting bubble to card */}
            <div className="w-0.5 h-16 bg-[#EFBF04]" />

            {/* Early Years card */}
            <div className="w-[90vw] max-w-md">
              <div
                onClick={() => {
                  console.log('Early Years card clicked');
                  navigate('/early-years');
                }}
                className="w-full p-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm active:bg-white/10 active:scale-[0.98] transition-all duration-200 text-left cursor-pointer"
              >
                <h3 className="font-serif text-base text-white mb-2 leading-snug">
                  Early Years in the US
                </h3>
                <p className="text-xs font-mono text-normal-text leading-relaxed mb-3">
                  I landed in the US from Haiti in 2015 and immediately realized one thing: nothing here is given, everything is earned. While I was navigating high school and learning English, I wasn't just trying to fit in—I was trying to catch up. Got my first job at 16 working at the mall which I then quit to go work at KFC, which paid a lot more. I built my first real community here, made friends who helped me navigate the culture, and set a baseline for the work ethic that would define the next decade of my life. Also played lots of soccer.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-mono text-white/70">
                  <span>Tap to view details</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            {/* Timeline segment after card - connects to Timeline.tsx */}
            <div className="w-0.5 h-8 bg-[#EFBF04]" />
          </div>
        </div>
      </div>
    </section>
  );
}
