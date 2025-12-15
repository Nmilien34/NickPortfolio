import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { titleToSlug } from '../../lib/utils';
import { projects } from '../sections/Projects';
import { DecisionComparison } from '../ui/DecisionComparison';
import { LogicFlow } from '../ui/LogicFlow';
import { StrategicComparison } from '../ui/StrategicComparison';
import { StrategicFlow } from '../ui/StrategicFlow';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find the project by slug
  const project = projects.find((p) => titleToSlug(p.title) === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-background-color">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif text-white mb-4">Project not found</h1>
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
    <div className="min-h-screen flex flex-col bg-background-color">
      <Header />
      <main className="flex-1 pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="mb-12 px-6 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-white font-mono text-sm"
          >
            ← Back
          </button>

          {/* Header Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex items-start gap-4">
                {/* Project Icon/Logo */}
                {project.title === 'Lawnstack' ? (
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                    <img
                      src="/Projects/Lawnstack /Logo /Frame 49.svg"
                      alt="Lawnstack Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : project.title === 'Boltzman Enterprise' ? (
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                    <img
                      src="/Projects/VoiceaiReceptionist/Group 33.svg"
                      alt="Boltzman Enterprise Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : project.title === 'Boltzman AI' ? (
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                    <img
                      src="/Projects/Boltzman AI/Frame 108.png"
                      alt="Boltzman AI Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : project.title === 'Boltzman Voice' ? (
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                    <img
                      src="/Projects/BoltzmanVoice/Vector.svg"
                      alt="Boltzman Voice Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : project.title === 'Energy' ? (
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                    <img
                      src="/Projects/Energy/C39BD170-0761-448C-8DE0-28227341A867.png"
                      alt="Energy Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex-shrink-0">
                    <img
                      src={project.mockup || project.image || '/placeholder-icon.jpg'}
                      alt={`${project.title} icon`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="font-serif text-3xl md:text-5xl text-white">
                      {project.title}
                    </h1>
                    {project.title === 'Lawnstack' && (
                      <a
                        href="https://www.lawnstack.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs transition-all"
                      >
                        Live Website
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.title === 'Boltzman Enterprise' && (
                      <a
                        href="https://enterprise.boltzman.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs transition-all"
                      >
                        Live Site
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.title === 'Boltzman AI' && (
                      <a
                        href="https://www.boltzman.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs transition-all"
                      >
                        Live site
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.title === 'Boltzman Voice' && (
                      <a
                        href="https://voice.boltzman.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs transition-all"
                      >
                        Live site
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.title === 'Energy' && (
                      <a
                        href="https://www.yfhnrg.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs transition-all"
                      >
                        Live site
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-normal-text font-mono text-sm md:text-base mb-2">
                    {project.category}
                  </p>
                  {project.tagline && (
                    <p className="text-white/90 font-mono text-xs md:text-sm mb-2">
                      {project.tagline}
                    </p>
                  )}
                  {project.description && (
                    <p className="text-white/80 font-mono text-xs md:text-sm max-w-2xl">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-sm transition-all"
                >
                  Live Site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Team Card - Only for Lawnstack */}
          {project.title === 'Lawnstack' && (
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
              <h2 className="font-serif text-xl md:text-2xl text-white mb-4">Original Team</h2>
              <p className="text-normal-text font-mono text-sm md:text-base mb-6">
                Lawnstack Initially started as Terra
              </p>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/Projects/Lawnstack /Team/Crew 2.jpg"
                  alt="Lawnstack Original Team"
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}

          {/* Visual Mockup Card */}
          {(project.coverImage || project.mockup) && (
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
              <div className="relative">
                {/* Desktop Mockup */}
                <div className="relative mx-auto max-w-4xl">
                  <div className={project.title === 'Boltzman Enterprise' || project.title === 'Boltzman Voice' ? 'bg-white rounded-t-lg p-2 flex items-center gap-2' : project.title === 'Boltzman AI' ? 'bg-[#2a2a2a] rounded-t-lg p-2 flex items-center gap-2 border-b border-gray-700' : 'bg-gray-800 rounded-t-lg p-2 flex items-center gap-2'}>
                    <div className="flex gap-1.5 md:gap-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className={project.title === 'Boltzman Enterprise' || project.title === 'Boltzman Voice' ? 'flex-1 bg-gray-200 rounded px-2 md:px-4 py-1 text-[10px] md:text-xs text-gray-700 text-center font-mono' : project.title === 'Boltzman AI' ? 'flex-1 bg-[#3a3a3a] rounded px-2 md:px-4 py-1 text-[10px] md:text-xs text-gray-400 text-center font-mono' : 'flex-1 bg-gray-700 rounded px-2 md:px-4 py-1 text-[10px] md:text-xs text-gray-300 text-center font-mono'}>
                      {project.title === 'Lawnstack' ? 'lawnstack.com' : (project.browserUrl || 'example.com')}
                    </div>
                  </div>
                  <div className={project.title === 'Boltzman AI' ? 'bg-[#1a1a1a] rounded-b-lg overflow-hidden shadow-2xl' : 'bg-white rounded-b-lg overflow-hidden shadow-2xl'}>
                    <img
                      src={project.coverImage || project.mockup || project.image || '/placeholder-cover.jpg'}
                      alt={`${project.title} desktop mockup`}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* Lawnstack-specific content */}
        {project.title === 'Lawnstack' && (
          <React.Fragment>
          {/* Summary and Role Cards - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Summary Card - First */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4 md:p-6">
              <h2 className="font-serif text-lg md:text-xl text-white mb-4">Summary</h2>
              <p className="text-normal-text font-mono text-xs md:text-sm leading-relaxed">
                {project.summary || project.description}
              </p>
              {project.underConstruction && (
                <div className="mt-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-400 font-mono text-xs">🚧 This project is currently under construction</p>
                </div>
              )}
            </div>

            {/* Profile Card - Second */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4 md:p-6">
              <h2 className="font-serif text-lg md:text-xl text-white mb-4">Profile</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/60 font-mono text-xs mb-1">Role</p>
                  <p className="text-white font-mono text-sm">Chief Executive Officer & Product Manager</p>
                </div>
                <div>
                  <p className="text-white/60 font-mono text-xs mb-1">Team</p>
                  <p className="text-white font-mono text-sm">8 people</p>
                </div>
                <div>
                  <p className="text-white/60 font-mono text-xs mb-1">Timeline</p>
                  <p className="text-white font-mono text-sm">6-8months, from 0 to Revenue generating</p>
                </div>
                <div>
                  <p className="text-white/60 font-mono text-xs mb-1">Fundraising</p>
                  <p className="text-white font-mono text-sm">$150,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Vs Solution Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
            <h2 className="font-serif text-xl md:text-2xl text-white mb-6">Problem Vs Solution</h2>
            <div className="relative">
              {/* Top Row: Second picture (left) and First picture (right) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Second picture on the left */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/Projects/Lawnstack /ProblemvsSolution/1C58272F-C600-4E0B-845F-344282B2A3E2.jpeg"
                    alt="Problem Vs Solution 2"
                    className="w-full h-auto"
                  />
                </div>
                {/* First picture on the right */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/Projects/Lawnstack /ProblemvsSolution/C75678B5-C340-44CC-A0FE-B62FAE6844C1.jpeg"
                    alt="Problem Vs Solution 1"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              {/* Third picture at the bottom */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/Projects/Lawnstack /ProblemvsSolution/4B4D9254-1E21-467C-AA45-E9DAA0FDFCC7.jpeg"
                  alt="Problem Vs Solution 3"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* How was Lawnstack different Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
            <h2 className="font-serif text-xl md:text-2xl text-white mb-6">How was Lawnstack different?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/Projects/Lawnstack /HowWeDifferent/D9056013-A1B6-4A0E-AD45-F2929ABEC530.jpeg"
                  alt="How Lawnstack was different 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/Projects/Lawnstack /HowWeDifferent/87F2C6E5-28A2-4B27-9EA1-E2B9FDA1F47A.jpeg"
                  alt="How Lawnstack was different 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Revenue Model and Total Addressable Market Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
            <h2 className="font-serif text-xl md:text-2xl text-white mb-6">Revenue Model and Total Addressable Market</h2>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/Projects/Lawnstack /TAMandRevenue/91F2AD58-5973-46EC-88E2-5B1F04494968.jpeg"
                alt="Revenue Model and Total Addressable Market"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Benefits and Cons Cards - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Benefit of our model Card - Left, Larger */}
            <div className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4 md:p-6">
              <h2 className="font-serif text-xl md:text-2xl text-white mb-4">Benefit of our model</h2>
              <h3 className="font-serif text-lg md:text-xl text-white mb-4">Benefits of the Subscription Model</h3>
              <ul className="space-y-3 text-normal-text font-mono text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-[#EFBF04]">•</span>
                  <span><strong className="text-white">Stickier Business Model:</strong> Customers are less likely to churn after committing to a subscription.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EFBF04]">•</span>
                  <span><strong className="text-white">Higher Pricing Potential:</strong> Subscriptions allow for higher prices, providing more room for margins and potentially increasing revenue.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EFBF04]">•</span>
                  <span><strong className="text-white">Simplicity:</strong> Comprehensive outdoor home care services beyond just lawn mowing, without the headaches of calculating prices / quotes for the different services.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EFBF04]">•</span>
                  <span><strong className="text-white">Trust and Familiarity:</strong> Regular service providers build trust and familiarity with customers.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EFBF04]">•</span>
                  <span><strong className="text-white">Predictable Income:</strong> Clearer recurring revenue model is attractive to investors and easier to calculate in terms of churn and revenue projections.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EFBF04]">•</span>
                  <span><strong className="text-white">Upsell Opportunities:</strong> More opportunities to engage customers and offer additional services.</span>
                </li>
              </ul>
            </div>

            {/* Cons of the Subscription Model Card - Right, Smaller, Vertical */}
            <div className="md:col-span-1 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4 md:p-6">
              <h2 className="font-serif text-lg md:text-xl text-white mb-4">Cons of the Subscription Model</h2>
              <ul className="space-y-3 text-normal-text font-mono text-xs md:text-sm">
                <li className="flex items-start">
                  <span className="mr-2 text-[#EFBF04]">•</span>
                  <span><strong className="text-white">Higher Price Point:</strong> Harder to sell due to the higher cost.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EFBF04]">•</span>
                  <span><strong className="text-white">Reputational Risk:</strong> Increased risk if service providers are of poor quality.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-[#EFBF04]">•</span>
                  <span><strong className="text-white">Fundamental Change:</strong> Transitioning from a marketplace to a service provider incurs reputational risks and operational challenges.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Two Picture Cards - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">
            {/* Left Column - Contains both left card and smaller container */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {/* First Picture Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-0.5">
                <div className="bg-white rounded-t-lg p-2 flex items-center gap-2 mb-0">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-gray-200 rounded px-2 md:px-4 py-1 text-[10px] md:text-xs text-gray-700 text-center font-mono">
                    lawnstack.com
                  </div>
                </div>
                <div className="overflow-hidden rounded-b-lg bg-white h-[250px] md:h-[350px]">
                  <img
                    src="/Projects/Lawnstack /hoandspui/00446BEF-0DCC-4B7A-A602-68FF5DCAC8E1.jpeg"
                    alt="Lawnstack image 1"
                    className="w-full h-full object-contain"
                    style={{ transform: 'scale(1.05) translateY(10px)' }}
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-white font-mono text-sm">What the Homeowner see</p>
                </div>
              </div>

              {/* Smaller container at bottom, same width as card above, extends to match right card height */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4 w-full min-h-[200px] md:min-h-[262px]">
                <h3 className="text-white font-serif text-lg md:text-xl mb-4">The Ideal Experience</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-mono text-sm font-semibold mb-2">For Homeowners: Zero Friction</p>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      We shifted home maintenance from reactive to proactive. Homeowners never have to search or negotiate; a dedicated team simply arrives monthly with a pre-defined scope of work, knowing exactly what the property needs before they even step out of the truck.
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-mono text-sm font-semibold mb-2">For Providers: An Operating System, Not Just Leads</p>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      We eliminated the need to chase leads. Pros just open the app and drive. We built a complete OS that handles intelligent routing, scheduling, and payments. It puts their entire day in perspective, allowing them to optimize their route on the fly while we handle the back office.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Picture Card - Same size as Cons card (1/3 width) */}
            <div className="md:col-span-1 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-2 flex flex-col justify-between min-h-[400px] md:h-[770px]">
              {/* Removed 'transform', added 'w-[80%] mx-auto' to replicate the size reduction properly */}
              <div className="flex items-center justify-center w-[80%] mx-auto mb-3">
                <img
                  src="/Projects/Lawnstack /hoandspui/Frame 43101.svg"
                  alt="Lawnstack image 2"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-white font-mono text-sm">What the service Provider see</p>
              </div>
            </div>
          </div>

          {/* Homeowners Experience Card - Full Width */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 mb-8">
            <h2 className="font-serif text-xl text-white mb-4">Let's first go over the homeowners experience</h2>
            <p className="text-white font-mono text-sm mb-6">How did the subscription model came to be and how does the homeowner experience work?</p>
            <div className="w-full">
              <img
                src="/Projects/Lawnstack /hoandspui/9AD92FB2-12CC-47D7-B1EB-6D8A08B40090.jpeg"
                alt="Homeowner service experience"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Experience Iteration Process Card - Same width as Ideal Experience */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-start">
            <div className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <h2 className="font-serif text-xl text-white mb-4">The Experience Iteration Process</h2>
              <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                Once testing began, we iterated ruthlessly using real feedback to polish the rough edges and design the optimal experience
              </p>
              <div className="w-full">
                <img
                  src="/Projects/Lawnstack /hoandspui/DFCF190F-6531-4AB3-8A90-0255B0DBA25D.jpeg"
                  alt="Experience iteration process"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Right side - 3 small containers */}
            <div className="md:col-span-1 flex flex-col gap-6 h-full">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4 flex-1 flex items-center justify-center">
                <p className="text-normal-text font-mono text-sm leading-relaxed text-center">
                  Homeowners spent more than 7 minutes creating a single job
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4 flex-1 flex items-center justify-center">
                <p className="text-normal-text font-mono text-sm leading-relaxed text-center">
                  70% of that time was just entering yard details
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4 flex-1 flex items-center justify-center">
                <p className="text-normal-text font-mono text-sm leading-relaxed text-center">
                  80% of testers said it took way to long and had to click to many times just to get a service. which means the experience was not pleasant which lowered our close rate
                </p>
              </div>
            </div>
          </div>

          {/* User Research is king Card - Full Width */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 mb-8">
            <h2 className="font-serif text-xl text-white mb-4">User Research is king</h2>
            <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
              I've learned the hard way to always do user research whenever I'm stuck, so we went back to the drawing board and focus entirely on interviewing our customers and here's what we learn
            </p>
            <div className="space-y-6">
              {/* First Insight Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full">
                  <img
                    src="/Projects/Lawnstack /hoandspui/D7075BDF-5695-4DE7-8CD6-C79692CBF91F.jpeg"
                    alt="User research findings"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-full flex flex-col justify-center">
                  <h3 className="font-serif text-xl text-white mb-4">insight 1 - "Predictability Outweighs Flexibility"</h3>
                  <p className="text-normal-text font-mono text-sm leading-relaxed">
                    We discovered that decision fatigue was a major barrier to conversion. Homeowners didn't want granular control over every task; they wanted the relief of delegation. They preferred a "set it and forget it" model where they could trust an expert to just get the job done.
                  </p>
                </div>
              </div>

              {/* Second Insight Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full flex flex-col justify-center">
                  <h3 className="font-serif text-xl text-white mb-4">Insight 2 - Trust Requires Transparency</h3>
                  <p className="text-normal-text font-mono text-sm leading-relaxed">
                    We learned that an algorithm alone couldn't build trust. Homeowners couldn't determine if our pricing was fair or arbitrary without a clear baseline. We validated this gap by surveying 40 homeowners in person, digging into how they value expertise and context when hiring service providers.
                  </p>
                </div>
                <div className="w-full">
                  <img
                    src="/Projects/Lawnstack /hoandspui/4E89111D-0568-4D74-9EE1-17D6F2ED63BF.jpeg"
                    alt="Trust and transparency research"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Third Insight Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full">
                  <img
                    src="/Projects/Lawnstack /hoandspui/AFC13D9E-E284-4A27-8864-48FC62BBAE8B.jpeg"
                    alt="Familiarity vs reliability research"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-full flex flex-col justify-center">
                  <h3 className="font-serif text-xl text-white mb-4">Insight 3 - Familiarity vs. Reliability</h3>
                  <p className="text-normal-text font-mono text-sm leading-relaxed">
                    Homeowners often settle for hourly contracts because they feel easier to control financially (verified by n=30 users). However, this short-term thinking led to long-term fatigue caused by no-shows and inconsistent quality.
                    <br /><br />
                    To solve this, we leveraged the high trust users have in "the person doing the work." We brought service providers directly into our user research sessions to help bridge the gap between what homeowners thought they wanted (hourly) and what they actually needed (reliability).
                  </p>
                </div>
              </div>

              {/* Bottom Text Sections */}
              <div className="mt-8 pt-8 border-t border-white/10 space-y-6">
                <div>
                  <h3 className="font-serif text-xl text-white mb-4">Defining the Core Need</h3>
                  <p className="text-normal-text font-mono text-sm leading-relaxed">
                    We realized that the barrier wasn't finding a provider—it was trusting one. The data showed that homeowners needed more than just a directory; they needed a system that offered context and emotional assurance.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-4">How Might We...</h3>
                  <p className="text-normal-text font-mono text-sm leading-relaxed">
                    How might we design a selection process that empowers homeowners to make confident decisions, making a digital transaction feel like a personal connection?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ideation to Action Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 mb-8">
            <h2 className="font-serif text-xl text-white mb-4">Ideation to Action</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-lg text-white mb-2">IDEATION: Interface vs. Infrastructure</h3>
                <p className="text-normal-text font-mono text-sm leading-relaxed">
                  We faced a critical decision: should we simply refine the existing UI, or rethink the core business model entirely?
                  <br /><br />
                  After deep discussions and analyzing user friction, we realized that a better interface couldn't fix a flawed system. To fundamentally improve the user experience, we didn't need new buttons, we needed a new business model.
                </p>
              </div>

              {/* Decision Comparison */}
              <div className="mt-8">
                <DecisionComparison
                  model1={{
                    title: 'Model 1',
                    isWinner: true,
                    bullets: [
                      { text: 'Subscription-based model', isPositive: true },
                      { text: 'Predictable monthly pricing', isPositive: true },
                      { text: 'Pre-scheduled maintenance', isPositive: true },
                      { text: 'Reduced decision fatigue', isPositive: true },
                    ],
                  }}
                  model2={{
                    title: 'Model 2',
                    isWinner: false,
                    bullets: [
                      { text: 'Hourly/on-demand pricing', isPositive: false },
                      { text: 'Variable costs per service', isPositive: false },
                      { text: 'Requires constant decision-making', isPositive: false },
                      { text: 'Higher friction in booking', isPositive: false },
                    ],
                  }}
                />
              </div>

              {/* Logic Flow */}
              <div className="mt-8">
                <LogicFlow />
              </div>
            </div>
          </div>

          {/* The New Experience Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 mb-8">
            <h2 className="font-serif text-xl text-white mb-6">The New Experience</h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-lg text-white mb-4">What Changed - First Impressions</h3>
                  <p className="text-normal-text font-mono text-sm leading-relaxed">
                    Beyond the Pixel We realized that high-ticket trust is built in person, not just in an app. We operationalized the "Consultation"—an initial site visit where providers do more than just shake hands. They perform a technical assessment of the yard's square footage and seasonal needs, turning a sales call into a demonstration of expertise.
                  </p>
                </div>
                <div className="w-full">
                  <img
                    src="/Projects/Lawnstack /hoandspui/29758519-47CF-4C7F-89E1-63BC2A703BAB.jpeg"
                    alt="The New Experience"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Strategic Comparison */}
              <div className="mt-8">
                <StrategicComparison />
              </div>

              {/* Strategic Flow */}
              <div className="mt-8">
                <StrategicFlow />
              </div>
            </div>
          </div>

          {/* The Iteration started making sense Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 mb-8">
            <h2 className="font-serif text-xl text-white mb-6">The Iteration started making sense</h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-normal-text font-mono text-sm leading-relaxed">
                The Decision: We selected Iteration 1 to prioritize upfront qualification. This filtered users early to save effort, capturing leads through a waitlist fallback.
              </p>
              <p className="text-normal-text font-mono text-sm leading-relaxed">
                Interaction Design: Post-Booking Engagement The Challenge: How deep should we onboard a "lead"? The Exploration: I explored two architectures that balanced full platform access with the user's immediate need to manage their consultation.
              </p>
            </div>

            {/* Option A */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full font-mono text-sm font-bold border border-blue-500/30">
                    Option A
                  </span>
                </div>
                <h3 className="font-serif text-lg text-white mb-3">Segmented Toggles</h3>
                <p className="text-normal-text font-mono text-sm leading-relaxed">
                  A friction-free entry point allowing users to review consultation info through magic links or verification code
                </p>
              </div>
              <div className="w-full">
                <img
                  src="/Projects/Lawnstack /hoandspui/385299EF-C660-45E1-9ED4-F436F97FC236.jpeg"
                  alt="Option A: Segmented Toggles"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Option B */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="w-full order-2 md:order-1">
                <img
                  src="/Projects/Lawnstack /hoandspui/CCA8959E-3159-41AF-8B5A-7188FC21D1AC.jpeg"
                  alt="Option B: Mandatory Account Creation"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center order-1 md:order-2">
                <div className="inline-block mb-4">
                  <span className="bg-gray-500/20 text-gray-300 px-4 py-2 rounded-full font-mono text-sm font-bold border border-gray-500/30">
                    Option B
                  </span>
                </div>
                <h3 className="font-serif text-lg text-white mb-3">Mandatory Account Creation</h3>
                <p className="text-normal-text font-mono text-sm leading-relaxed">
                  Require homeowners to register an account to finalize their booking and unlock full platform access.
                </p>
              </div>
            </div>

            {/* A/B Testing Results */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-normal-text font-mono text-sm leading-relaxed">
                A/B testing validated magic links as a great lightweight option. In contrast, it took ~22 seconds more to create a password, recall it, and log back in.
              </p>
            </div>
          </div>

          {/* The New Experience 2 Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 mb-8">
            <h2 className="font-serif text-xl text-white mb-6">The New Experience 2</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-serif text-lg text-white mb-3">Communicating Value Post-Consultation</h3>
                <p className="text-normal-text font-mono text-sm leading-relaxed mb-4">
                  The Challenge: Turning site visit data into a closed deal. We needed to synthesize the provider's technical measurements into a clear membership offer. The core question became: What tangible takeaway does the homeowner need to feel confident signing a contract?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-lg text-white mb-4">The Proposal: Scaffolding for Transparency</h3>
                <p className="text-normal-text font-mono text-sm leading-relaxed">
                  I began by restructuring the global navigation and layout. Unlike our legacy flows, this design prioritized clarity—ensuring homeowners could compare pricing options with total transparency and zero ambiguity.
                </p>
              </div>
              <div className="w-full">
                <img
                  src="/Projects/Lawnstack /hoandspui/C35F7386-EEBF-40D7-895D-DCCADEDC15A9.jpeg"
                  alt="The Proposal: Scaffolding for Transparency"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <h3 className="font-serif text-lg text-white mb-4">Reducing Friction via Data</h3>
              <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                Leveraging the data captured during consultations, we drastically reduced the input burden on homeowners. I designed a layout that established a clear visual hierarchy, guiding the eye and simplifying the remaining key decisions.
              </p>
              <div className="w-full">
                <img
                  src="/Projects/Lawnstack /hoandspui/C8E28A1B-9843-4B06-846D-7150E63F56F5.jpeg"
                  alt="Reducing Friction via Data"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* The New Experience 3 Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 mb-8">
            <h2 className="font-serif text-xl text-white mb-6">The New Experience 3</h2>
            
            <div className="space-y-4 mb-8">
              <h3 className="font-serif text-lg text-white">Decoupling Labor from Materials</h3>
              <p className="text-normal-text font-mono text-sm leading-relaxed">
                Lawnstack's core value was simplicity: a predictable $300/mo flat fee for labor. However, variable material costs (fertilizer, mulch, etc.) introduced complexity. The Problem: Users often assumed the subscription was all-inclusive, creating confusion over who was responsible for purchasing materials.
              </p>
              <p className="text-normal-text font-mono text-sm leading-relaxed">
                HMW: How might we transparently separate material costs from labor fees without eroding the trust built by our flat-rate promise?
              </p>
            </div>

            {/* Two Options Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Option A */}
              <div className="flex flex-col h-full">
                <div className="inline-block mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full font-mono text-sm font-bold border border-blue-500/30">
                    Option A
                  </span>
                </div>
                <h3 className="font-serif text-lg text-white mb-3">The Split-Path Approach</h3>
                <p className="text-normal-text font-mono text-sm leading-relaxed mb-4 flex-grow">
                  Present users with a binary decision, visually separating the workflows into two clearly defined avenues.
                </p>
                <div className="w-full mt-auto">
                  <img
                    src="/Projects/Lawnstack /hoandspui/E37EEEE7-064B-40EC-B1B4-222A522F7AD6.jpeg"
                    alt="Option A: The Split-Path Approach"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Option B */}
              <div className="flex flex-col h-full">
                <div className="inline-block mb-4">
                  <span className="bg-gray-500/20 text-gray-300 px-4 py-2 rounded-full font-mono text-sm font-bold border border-gray-500/30">
                    Option B
                  </span>
                </div>
                <h3 className="font-serif text-lg text-white mb-3">Inline Disclosure</h3>
                <p className="text-normal-text font-mono text-sm leading-relaxed mb-4 flex-grow">
                  The Risk: Cognitive friction. Integrating material costs inline increased the likelihood of users conflating variable add-ons with the standard $295/mo base fee
                </p>
                <div className="w-full mt-auto">
                  <img
                    src="/Projects/Lawnstack /hoandspui/B44E554D-CB2E-4554-96D5-5D4A971C447A.jpeg"
                    alt="Option B: Inline Disclosure"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

        {/* The New Experience (Autonomy) Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 mb-8 w-full max-w-[1200px] mx-auto">
          <h2 className="font-serif text-xl text-white mb-6">The New Experience 4</h2>

          <div className="space-y-4 mb-8">
            <h3 className="font-serif text-lg text-white">How Might We...</h3>
            <p className="text-normal-text font-mono text-sm leading-relaxed">
              How might we empower users with full autonomy to manage and approve variable costs?
            </p>
          </div>

          {/* Options stacked like an inverse staircase */}
          <div className="space-y-6 flex flex-col">
            {/* Option A */}
            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col w-full max-w-xl">
              <div className="inline-block mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full font-mono text-sm font-bold border border-blue-500/30">
                  Option A
                </span>
              </div>
              <h3 className="font-serif text-lg text-white mb-3">Checkbox Selector</h3>
              <p className="text-normal-text font-mono text-sm leading-relaxed mb-4 flex-grow">
                The Limitation: Ambiguity. A standalone checkbox lacked the necessary affordance to fully explain the financial implication, forcing users to guess the context.
              </p>
              <div className="w-full mt-auto">
                <img
                  src="/Projects/Lawnstack /hoandspui/638D071F-6F06-475C-AD4B-B6E103F81C9B.jpeg"
                  alt="Option A: Checkbox Selector"
                  className="w-full h-[320px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Option B */}
            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col w-full max-w-xl ml-48 md:ml-64">
              <div className="inline-block mb-4">
                <span className="bg-gray-500/20 text-gray-300 px-4 py-2 rounded-full font-mono text-sm font-bold border border-gray-500/30">
                  Option B
                </span>
              </div>
              <h3 className="font-serif text-lg text-white mb-3">Dropdown Selector</h3>
              <p className="text-normal-text font-mono text-sm leading-relaxed mb-4 flex-grow">
                The Drawback: High interaction cost. Burying options inside a dropdown required unnecessary clicks, increasing friction for a simple decision.
              </p>
              <div className="w-full mt-auto">
                <img
                  src="/Projects/Lawnstack /hoandspui/FFE62EEB-909D-4B6B-A8F8-880F9403DDCA.jpeg"
                  alt="Option B: Dropdown Selector"
                  className="w-full h-[320px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Option C */}
            <div className="bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col w-full max-w-xl ml-0 md:ml-0">
              <div className="inline-block mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full font-mono text-sm font-bold border border-blue-500/30">
                  Option C
                </span>
              </div>
              <h3 className="font-serif text-lg text-white mb-3">Segmented Toggles</h3>
              <p className="text-normal-text font-mono text-sm leading-relaxed mb-4 flex-grow">
                The Trade-off: Rapid scanning vs. Scalability. While it allows users to parse options instantly, it risks creating visual clutter if the dataset expands significantly.
              </p>
              <div className="w-full mt-auto">
                <img
                  src="/Projects/Lawnstack /hoandspui/FFE62EEB-909D-4B6B-A8F8-880F9403DDCA.jpeg"
                  alt="Option C: Segmented Toggles"
                  className="w-full h-[320px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The New Experience 5 Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 mb-8 w-full max-w-[1240px] mx-auto">
          <h2 className="font-serif text-xl text-white mb-6">The New Experience 5</h2>

          <div className="space-y-4 mb-8">
            <h3 className="font-serif text-lg text-white">HW: Balance User Control with Operational Reality?</h3>
            <p className="text-normal-text font-mono text-sm leading-relaxed">
              I investigated two models: one focused on granular user precision (exact slots), and another designed for operational sustainability, granting providers the flexibility to optimize routes for long-term efficiency.
            </p>
          </div>

          {/* Option A */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col justify-center">
              <div className="inline-block mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full font-mono text-sm font-bold border border-blue-500/30">
                  Option A
                </span>
              </div>
              <h3 className="font-serif text-lg text-white mb-3">Granular Control</h3>
              <p className="text-normal-text font-mono text-sm leading-relaxed">
                The Upside: Error Mitigation. Explicit selection reduces ambiguity and prevents scheduling conflicts. The Downside: Visual Noise. The high density of information risks overwhelming the user with visual clutter.
              </p>
            </div>
            <div className="w-full">
              <img
                src="/Projects/Lawnstack /hoandspui/04EF65C5-6C42-4C21-B67F-4434B5311082.jpeg"
                alt="Option A: Granular Control"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Option B */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full order-2 md:order-1">
              <img
                src="/Projects/Lawnstack /hoandspui/57CC0F9D-9B05-4C96-87CE-3C0DAA8D7A7C.jpeg"
                alt="Option B: Operational Flexibility"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center order-1 md:order-2">
              <div className="inline-block mb-4">
                <span className="bg-gray-500/20 text-gray-300 px-4 py-2 rounded-full font-mono text-sm font-bold border border-gray-500/30">
                  Option B
                </span>
              </div>
              <h3 className="font-serif text-lg text-white mb-3">Operational Flexibility</h3>
              <p className="text-normal-text font-mono text-sm leading-relaxed">
                The Strategy: Prioritize provider logistics by using broader arrival windows instead of exact times. The Outcome: This sacrifice in precision establishes the infrastructure needed to support efficient, recurring service routes.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-normal-text font-mono text-sm leading-relaxed">
              Prioritizing Immediate Value At this stage, conversion hinges on demonstrating immediate utility. I designed the flow to focus on the specific details of the first visit, while using clear copy to reassure users that recurring schedules could be easily configured post-signup.
            </p>
          </div>
        </div>
        </React.Fragment>
        )}

        {/* Service Provider Flow Intro */}
        {project.title === 'Lawnstack' && (
          <>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 mb-8 w-full max-w-[1240px] mx-auto">
              <h2 className="font-serif text-xl text-white mb-4">
                The Other Half of the Equation
              </h2>
              <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                Having established a frictionless path for the demand side (homeowners), we turned our attention to the supply side. Let's look at how the system comes together to empower the Service Providers.
              </p>
              <div className="w-full">
                <img
                  src="/Projects/Lawnstack /hoandspui/0B4F4991-0AB2-4EC4-A300-10C490F94C5B.jpeg"
                  alt="Service provider flow"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Service provider goals cards - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full max-w-[1240px] mx-auto">
              {/* Left Card - Goals */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6" style={{ minHeight: '262px' }}>
                <h3 className="text-white font-serif text-xl mb-6">My Goals For Designing The Perfect Experience For The Service Providers (SPs)</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-mono text-sm font-semibold mb-3">Designing for the Supply Side</p>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      The Goal: Build the operating system I wished I had. My approach wasn't just theoretical—it was personal. Having worked in furniture assembly, landscaping, and snow removal, I knew the friction firsthand. I validated this experience by interviewing hundreds of service providers, and the consensus was clear: They just want to work. They wanted to wake up, hop in the truck, and execute—without the administrative headaches.
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-mono text-sm font-semibold mb-3">The Core Constraints</p>
                    <p className="text-normal-text font-mono text-sm leading-relaxed mb-4">
                      To achieve this "turn-key" workday, the product had to solve four critical frictions:
                    </p>
                    <ul className="space-y-3 text-normal-text font-mono text-sm">
                      <li className="flex items-start">
                        <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                        <span><strong className="text-white">Acquisition:</strong> Eliminate the need to buy leads or chase sales.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                        <span><strong className="text-white">Logistics:</strong> Provide intelligent, automated route optimization.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                        <span><strong className="text-white">Fintech:</strong> Instant access to earnings (no net-30 delays).</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                        <span><strong className="text-white">Operations:</strong> A complete digital OS—scheduling, invoicing, and messaging—replacing the "pen and paper" chaos.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Card - Optimization & Workflow */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6" style={{ minHeight: '262px' }}>
                <h3 className="text-white font-serif text-xl mb-6">Optimization & Workflow</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-mono text-sm font-semibold mb-3">Optimization: Route Density & Logistics</p>
                    <ul className="space-y-3 text-normal-text font-mono text-sm mb-4">
                      <li className="flex items-start">
                        <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                        <span><strong className="text-white">Requirement: Visual Route Planning.</strong> The Spec: Providers must see a visual map of existing clients to cluster new jobs. This minimizes travel time and maximizes daily revenue per truck.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                        <span><strong className="text-white">Requirement: Dynamic "Day-of" Adjustments.</strong> The Spec: The algorithm must support real-time changes—accounting for urgency, proximity, and crew availability—allowing providers to re-optimize their route when conditions change mid-shift.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white font-mono text-sm font-semibold mb-3">Workflow: The Digital Command Center</p>
                    <ul className="space-y-3 text-normal-text font-mono text-sm">
                      <li className="flex items-start">
                        <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                        <span><strong className="text-white">Requirement: Automated Job Management.</strong> The Spec: Eliminate the "morning huddle." Providers need a unified dashboard to view job details, submit proof-of-work photos, and trigger instant payouts upon completion.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ecosystem Alignment Card - Full Width */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 mb-8 w-full max-w-[1240px] mx-auto">
              <h3 className="text-white font-serif text-xl mb-6">Ecosystem Alignment: Connecting Supply & Demand</h3>
              <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                Before validating the provider tools, we had to ensure they directly supported the homeowner's journey. A marketplace only works when the incentives align.
              </p>

              <div className="mb-6">
                <p className="text-white font-mono text-sm font-semibold mb-4">The Unified Vision:</p>
                <ul className="space-y-3 text-normal-text font-mono text-sm mb-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                    <span><strong className="text-white">For Homeowners:</strong> Lawnstack is the one-stop subscription for year-round outdoor maintenance—offering "set it and forget it" peace of mind.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                    <span><strong className="text-white">For Providers:</strong> We provide the operational backbone—the internal tooling required to manage logistics and execute those jobs efficiently.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-white font-mono text-sm font-semibold mb-3">The Result:</p>
                <p className="text-normal-text font-mono text-sm leading-relaxed">
                  The provider's efficiency becomes the homeowner's reliability.
                </p>
              </div>

              <div className="w-full">
                <img
                  src="/Projects/Lawnstack /hoandspui/8B718F9A-8B65-4F4D-B986-0770B3DE15D9.jpeg"
                  alt="Ecosystem alignment visualization"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* The First Friction Card with Customer Complaints - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full max-w-[1240px] mx-auto items-start">
              {/* Left Column - The First Friction Card & Beyond the Interview Card */}
              <div className="flex flex-col gap-6">
                {/* The First Friction Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-white font-serif text-xl mb-4">The First Friction: Schedule Adherence</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-mono text-sm font-semibold mb-2">The Data:</p>
                      <p className="text-normal-text font-mono text-sm leading-relaxed">
                        We identified a critical failure in our service delivery—a significant percentage of providers were missing their scheduled arrival windows.
                      </p>
                    </div>
                    <div>
                      <p className="text-white font-mono text-sm font-semibold mb-2">The Impact:</p>
                      <p className="text-normal-text font-mono text-sm leading-relaxed">
                        This inconsistency eroded homeowner trust and spiked customer support tickets, directly threatening our retention metrics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Beyond the Interview Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <h3 className="text-white font-serif text-xl mb-4">Beyond the Interview</h3>
                  <p className="text-normal-text font-mono text-sm leading-relaxed">
                    To uncover the root cause, surveys weren't enough. I initiated a phase of ethnographic research, moving from standard user interviews to full-day job shadowing. By riding along in the trucks, I could observe the "unarticulated" realities of their workflow—seeing exactly where the friction occurred in real-time, rather than relying on what they remembered to tell me later.
                  </p>
                  <div className="w-full mt-4">
                    <img
                      src="/Projects/Lawnstack /hoandspui/530FE62F-A9A0-4269-B931-992A4A380A6B.jpeg"
                      alt="Ethnographic research ride-along"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <p className="text-normal-text font-mono text-sm leading-relaxed mt-4">
                    Contextual Inquiry: To validate my hypothesis, I moved beyond interviews and conducted job shadowing. I hopped into the truck with providers to observe the workflow in real-time. The Breakthrough Insight: I discovered a fundamental disconnect in our scheduling logic. In the real world, providers don't follow a rigid, pre-set calendar. Instead, they operate dynamically, selecting which properties to service "day-of" based on proximity, weather, and route efficiency.
                  </p>
                </div>

                {/* The Digital Regression Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 pb-[37px]">
                  <h3 className="text-white font-serif text-xl mb-4">The Digital Regression: 3.4x Slower than Analog</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-mono text-sm font-semibold mb-2">The Benchmark:</p>
                      <p className="text-normal-text font-mono text-sm leading-relaxed">
                        I conducted usability testing with 4 active providers to benchmark our digital scheduling flow against their traditional "pen and paper" method.
                      </p>
                    </div>

                    <div>
                      <p className="text-white font-mono text-sm font-semibold mb-3">The Data:</p>
                      <ul className="space-y-3 text-normal-text font-mono text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                          <span><strong className="text-white">Time-on-Task:</strong> It took an average of 3.7 minutes to schedule a single job digitally.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                          <span><strong className="text-white">Daily Impact:</strong> For a standard 6-job route, this totaled 22.2 minutes of admin time—a 344% increase in effort compared to their 5-minute manual routine.</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-white font-mono text-sm font-semibold mb-2">The Root Cause:</p>
                      <p className="text-normal-text font-mono text-sm leading-relaxed">
                        High cognitive load. The interface forced providers to manually cross-reference new requests against their existing schedule to check for proximity and urgency, rather than visualizing it for them.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Customer Testimonials */}
                <div className="space-y-4">
                  {/* Testimonial 1 - Homeowner C */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                    <p className="text-white font-mono text-sm font-semibold mb-2">Homeowner C</p>
                    <p className="text-normal-text font-mono text-sm leading-relaxed italic">
                      "The results were good, but he came 30 minutes late. When I tried to call, there was no response."
                    </p>
                  </div>

                  {/* Testimonial 2 - Homeowner B */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                    <p className="text-white font-mono text-sm font-semibold mb-2">Homeowner B</p>
                    <p className="text-normal-text font-mono text-sm leading-relaxed italic">
                      "We scheduled for 3:30 but he came at 12. Unexpected, but he was very detail-oriented."
                    </p>
                  </div>

                  {/* Testimonial 3 - Homeowner A */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                    <p className="text-white font-mono text-sm font-semibold mb-2">Homeowner A</p>
                    <p className="text-normal-text font-mono text-sm leading-relaxed italic">
                      "Came late, but got the job done. It's what I expected for a cheap service."
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Homeowner Complaints + Key Decision Factors */}
              <div className="flex flex-col gap-6">
                {/* Complaint Card 1 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                  <p className="text-white font-mono text-sm font-semibold mb-2">Homeowner A</p>
                  <p className="text-normal-text font-mono text-sm leading-relaxed italic">
                    "The results were good, but he came 30 minutes late. When I tried to call, there was no response."
                  </p>
                </div>

                {/* Complaint Card 2 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                  <p className="text-white font-mono text-sm font-semibold mb-2">Homeowner B</p>
                  <p className="text-normal-text font-mono text-sm leading-relaxed italic">
                    "I scheduled a job with him twice, and both times he didn't come at the time scheduled."
                  </p>
                </div>

                {/* Complaint Card 3 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                  <p className="text-white font-mono text-sm font-semibold mb-2">Homeowner C</p>
                  <p className="text-normal-text font-mono text-sm leading-relaxed italic">
                    "We scheduled for 3:30 but he came at 12."
                  </p>
                </div>

                {/* Intro to Provider Insights Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                  <p className="text-normal-text font-mono text-sm leading-relaxed italic">
                    I had a lot of fun hanging out with the service providers and trying to understand their world better and below is what I've learned about them.
                  </p>
                </div>

                {/* Key Decision Factors Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                  <p className="text-white font-mono text-sm leading-relaxed mb-6">
                    In the first 5 minutes of their day, providers build their route based on three heuristics:
                  </p>

                  {/* Factor 1: Route Density */}
                  <div className="mb-6">
                    <div className="flex items-start gap-3 mb-3">
                      <svg className="w-6 h-6 text-[#EFBF04] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <div>
                        <h4 className="text-white font-mono text-sm font-semibold mb-2">Route Density</h4>
                        <p className="text-normal-text font-mono text-xs leading-relaxed">
                          Clustering jobs to minimize windshield time. Closer homes = higher hourly revenue.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Factor 2: Crew Availability */}
                  <div className="mb-6">
                    <div className="flex items-start gap-3 mb-3">
                      <svg className="w-6 h-6 text-[#EFBF04] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <div>
                        <h4 className="text-white font-mono text-sm font-semibold mb-2">Crew Availability</h4>
                        <p className="text-normal-text font-mono text-xs leading-relaxed">
                          Real-time adjustments based on who is in the truck. (e.g., "Do I have a helper for the heavy lifting?")
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Factor 3: Job Criticality */}
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <svg className="w-6 h-6 text-[#EFBF04] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <h4 className="text-white font-mono text-sm font-semibold mb-2">Job Criticality</h4>
                        <p className="text-normal-text font-mono text-xs leading-relaxed">
                          Spontaneously prioritizing "fix-it" tickets that must be resolved within the same service window.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Mockup Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 flex items-center justify-center">
                  <div className="w-full max-w-[280px]">
                    <img
                      src="/Projects/Lawnstack /hoandspui/example 2 (2) 1.svg"
                      alt="Service provider mobile app interface"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* The Expectation Gap Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 pb-[45px]">
                  <h3 className="text-white font-serif text-xl mb-4">The Expectation Gap</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-mono text-sm font-semibold mb-2">The Insight:</p>
                      <p className="text-normal-text font-mono text-sm leading-relaxed">
                        Sentiment analysis revealed a paradox—homeowners were highly satisfied with the quality of the work, but frustrated by the timing.
                      </p>
                    </div>

                    <div>
                      <p className="text-white font-mono text-sm font-semibold mb-2">The Culprit:</p>
                      <p className="text-normal-text font-mono text-sm leading-relaxed">
                        The scheduling interface. By offering rigid, specific time slots (e.g., "2:00 PM"), the product created an artificial promise of precision that dynamic field operations couldn't match, setting providers up to fail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Goal Header */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-12 mb-8 w-full max-w-[1240px] mx-auto">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>

              {/* Label */}
              <p className="text-gray-400 text-center font-mono text-sm uppercase tracking-wider mb-4">
                Goal #1
              </p>

              {/* Main Heading */}
              <h2 className="text-white text-center font-serif text-3xl md:text-4xl leading-relaxed">
                How might we make the scheduling feature <strong className="font-bold italic">less disruptive</strong> & <strong className="font-bold italic">more seamless</strong> with providers' existing workflow?
              </h2>
            </div>

            {/* Iteration 1 Card - Full Width */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8 w-full max-w-[1240px] mx-auto">
              <h3 className="text-white font-serif text-2xl mb-6">Iteration 1: Prioritizing Route Density</h3>

              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-white font-mono text-sm font-semibold mb-2">The Hypothesis:</p>
                  <p className="text-normal-text font-mono text-sm leading-relaxed">
                    Rigid time slots were artificial constraints that caused lateness. By removing them, we could empower providers to self-optimize their routes.
                  </p>
                </div>

                <div>
                  <p className="text-white font-mono text-sm font-semibold mb-3">The Solution:</p>
                  <ul className="space-y-3 text-normal-text font-mono text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                      <span><strong className="text-white">Deprecated Time Slots:</strong> Shifted from specific appointment times (e.g., "2:00 PM") to "Day-based" scheduling.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-[#EFBF04] mt-0.5">•</span>
                      <span><strong className="text-white">Visualized Proximity:</strong> Exposed the provider's existing route map during the acceptance phase. This allowed them to make data-driven decisions—accepting new jobs only if they fit into their existing clusters.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full">
                <img
                  src="/Projects/Lawnstack /hoandspui/Group 80.svg"
                  alt="Route density visualization"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Strategic Goal Header - Goal #2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-12 mb-8 w-full max-w-[1240px] mx-auto">
              {/* Lawnmower Icon */}
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  {/* Lawnmower body */}
                  <rect x="6" y="8" width="12" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Handle */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 8V4M14 8V4"/>
                  {/* Wheels */}
                  <circle cx="8" cy="18" r="2"/>
                  <circle cx="16" cy="18" r="2"/>
                  {/* Connector */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v2M16 14v2"/>
                  {/* Heart decorations */}
                  <path className="animate-pulse" strokeLinecap="round" strokeLinejoin="round" d="M4 10c0-.5.5-1 1-1s1 .5 1 1-.5 1-1 1-1-.5-1-1z" opacity="0.6"/>
                  <path className="animate-pulse" strokeLinecap="round" strokeLinejoin="round" d="M18 6c0-.5.5-1 1-1s1 .5 1 1-.5 1-1 1-1-.5-1-1z" opacity="0.6"/>
                </svg>
              </div>

              {/* Label */}
              <p className="text-gray-400 text-center font-mono text-sm italic tracking-wider mb-4">
                Goal #2
              </p>

              {/* Main Heading */}
              <h2 className="text-white text-center font-serif text-3xl md:text-4xl leading-relaxed">
                How might we accommodate for <strong className="font-bold italic">dynamic changes</strong> (co-workers and urgent jobs) that occur throughout the day?
              </h2>
            </div>

            {/* Routes Visualization Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8 w-full max-w-[1240px] mx-auto relative overflow-hidden">
              {/* Background neighborhood grid with routes */}
              <svg className="w-full h-[400px] opacity-20 absolute inset-0" viewBox="0 0 800 400" fill="none" stroke="currentColor">
                {/* Grid/Street lines */}
                <line x1="0" y1="100" x2="800" y2="100" stroke="#888" strokeWidth="1"/>
                <line x1="0" y1="200" x2="800" y2="200" stroke="#888" strokeWidth="1"/>
                <line x1="0" y1="300" x2="800" y2="300" stroke="#888" strokeWidth="1"/>
                <line x1="200" y1="0" x2="200" y2="400" stroke="#888" strokeWidth="1"/>
                <line x1="400" y1="0" x2="400" y2="400" stroke="#888" strokeWidth="1"/>
                <line x1="600" y1="0" x2="600" y2="400" stroke="#888" strokeWidth="1"/>

                {/* Houses */}
                <rect x="150" y="70" width="30" height="30" fill="#666"/>
                <rect x="350" y="70" width="30" height="30" fill="#666"/>
                <rect x="550" y="70" width="30" height="30" fill="#666"/>
                <rect x="150" y="170" width="30" height="30" fill="#666"/>
                <rect x="350" y="170" width="30" height="30" fill="#666"/>
                <rect x="550" y="170" width="30" height="30" fill="#666"/>
                <rect x="150" y="270" width="30" height="30" fill="#666"/>
                <rect x="350" y="270" width="30" height="30" fill="#666"/>
                <rect x="550" y="270" width="30" height="30" fill="#666"/>

                {/* Route paths (connecting houses) */}
                <path d="M165 85 L365 85 L565 85" stroke="#EFBF04" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
                <path d="M165 85 L165 185 L365 185" stroke="#EFBF04" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
                <path d="M365 185 L565 185 L565 285" stroke="#EFBF04" strokeWidth="2" strokeDasharray="5,5" opacity="0.6"/>
              </svg>

              {/* Central text overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-[400px]">
                <h2 className="text-white font-serif text-5xl md:text-6xl font-bold mb-4 text-center">
                  Introducing Routes!
                </h2>
                <p className="text-gray-300 font-mono text-lg md:text-xl text-center">
                  Accommodating Dynamic Changes
                </p>
              </div>
            </div>

            {/* Dynamic Route Optimization Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8 w-full max-w-[1240px] mx-auto">
              {/* Section 1: Dynamic Route Optimization */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                {/* Left - Image */}
                <div className="w-full">
                  <img
                    src="/Projects/Lawnstack /hoandspui/image 13.svg"
                    alt="Dynamic route optimization interface"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Right - Text Content */}
                <div className="space-y-4">
                  <h3 className="text-white font-serif text-2xl mb-4">Feature: Dynamic Route Optimization</h3>

                  <div>
                    <p className="text-white font-mono text-sm font-semibold mb-2">The Logic:</p>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      Field conditions aren't static. I designed the routing engine to handle real-time variables, allowing providers to re-rank their queue instantly.
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-mono text-sm font-semibold mb-2">The Execution:</p>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      Providers can toggle their route optimization logic based on the immediate context: sorting by Proximity (for efficiency) or Urgency (for critical "drop-everything" tickets).
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Dynamic Crew Merging */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left - Text Content */}
                <div className="space-y-4 md:order-1">
                  <h3 className="text-white font-serif text-2xl mb-4">Feature: Dynamic Crew Merging</h3>

                  <div>
                    <p className="text-white font-mono text-sm font-semibold mb-2">The Friction:</p>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      When crews combined trucks, they were wasting time manually cross-referencing physical addresses to build a shared route.
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-mono text-sm font-semibold mb-2">The Solution:</p>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      I built a "Merge Route" function. This algorithm automatically overlays a co-worker's schedule onto the primary driver's map, clustering the jobs to create a single, optimized path based on the new combined capacity.
                    </p>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="w-full md:order-2">
                  <img
                    src="/Projects/Lawnstack /hoandspui/image 13.svg"
                    alt="Dynamic crew merging interface"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Conclusion Card - The Co-Founder Experience */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border-2 border-[#EFBF04]/20 p-12 mb-8 w-full max-w-[1240px] mx-auto">
              <div className="max-w-3xl mx-auto text-center">
                {/* Title with accent */}
                <div className="mb-8">
                  <div className="w-16 h-1 bg-[#EFBF04] mx-auto mb-6"></div>
                  <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-2">
                    The Co-Founder Experience
                  </h2>
                  <div className="w-16 h-1 bg-[#EFBF04] mx-auto mt-6"></div>
                </div>

                {/* Main content */}
                <div className="space-y-6 mb-8">
                  <p className="text-normal-text font-mono text-base leading-relaxed">
                    Leading Lawnstack required me to operate at the intersection of finance, engineering, and design.
                  </p>

                  <p className="text-normal-text font-mono text-base leading-relaxed">
                    I worked alongside <strong className="text-white"><a href="https://allen.mov/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EFBF04] transition-colors underline decoration-[#EFBF04]/50 hover:decoration-[#EFBF04]">Co-founder/CFO Allen Yao</a></strong> to validate our business models and unit economics. Simultaneously, I managed the technical roadmap with <strong className="text-white"><a href="https://www.liamdu.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EFBF04] transition-colors underline decoration-[#EFBF04]/50 hover:decoration-[#EFBF04]">Co-founder/CTO Liam Du</a></strong>, ensuring our engineering efforts matched our strategic goals.
                  </p>

                  <p className="text-normal-text font-mono text-base leading-relaxed">
                    This experience taught me how to articulate product decisions from both a financial and technical standpoint, leading the team to venture backing and significant market traction.
                  </p>
                </div>

                {/* Team acknowledgment */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-400 font-mono text-sm italic">
                    Special thanks to the incredible product design interns <strong className="text-white">Dennis Quizhpi</strong> and <strong className="text-white">Nancy Duong</strong> who helped bring this vision to life.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Boltzman Enterprise-specific content */}
        {project.title === 'Boltzman Enterprise' && (
          <>
            {/* Summary and Profile Cards - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Summary Card - First */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                <h2 className="font-serif text-xl text-white mb-4">Summary</h2>
                <p className="text-normal-text font-mono text-sm leading-relaxed">
                  Boltzman helps restaurants answer calls during rush hours when staff can't get to the phone. We built conversational voice AI that handles phone orders, reservations, and customer questions 24/7. Unlike traditional IVR systems that use rigid logic trees, our AI conducts natural, human-like conversations—technology that's only become possible in the past two years.
                </p>
              </div>

              {/* Profile Card - Second */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                <h2 className="font-serif text-xl text-white mb-4">Profile</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Role</p>
                    <p className="text-white font-mono text-sm">Chief Executive Officer & Technical Product Manager</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Team</p>
                    <p className="text-white font-mono text-sm">2 People</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Highlight</p>
                    <p className="text-white font-mono text-sm">Reached $1k MRR in the first 8 days opearting. Peaked to $5k MRR with 30 restaurants, processing over $50k/month worth of food</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Fundraising</p>
                    <p className="text-white font-mono text-sm">$0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/Projects/VoiceaiReceptionist/Slide 16_9 - 8.png"
                  alt="Team - Co-founders Nickson Milien and Liam Du"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Problem Vs Solution Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <h2 className="font-serif text-2xl text-white mb-6">Problem Vs Solution</h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Problem - Left side */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/Projects/VoiceaiReceptionist/Slide 16_9 - 2.png"
                    alt="Restaurant Industry Crisis - Problem"
                    className="w-full h-auto"
                  />
                </div>
                {/* Solution - Right side */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/Projects/VoiceaiReceptionist/Slide 16_9 - 3.png"
                    alt="Boltzman Solution"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Competition Strategy Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <h2 className="font-serif text-2xl text-white mb-6">The Original Strategy to Capture the Market and Overcome the Incumbents</h2>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/Projects/VoiceaiReceptionist/DA47F276-9C4E-469A-8EC5-4BB404CA1B07.jpeg"
                  alt="Competition Strategy - Vertical vs General Approach"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Market Vision Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                Our vision extended far beyond restaurants. We recognized that Voice AI could transform operations for a wide range of local businesses. Our goal was to democratize enterprise-grade technology, previously accessible only to large corporations, and make it available to SMBs for a fraction of the cost. Here's the what the market looked like
              </p>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/Projects/VoiceaiReceptionist/600A1659-511C-489E-9B32-46DF35799CE2.jpeg"
                  alt="Market Size - TAM Analysis"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Revenue Model & Pricing Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <h2 className="font-serif text-2xl text-white mb-6">Revenue Model & Pricing</h2>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/Projects/VoiceaiReceptionist/Slide 16_9 - 4.png"
                  alt="Revenue Model & Pricing - Simple Pricing that Scales With Your Success"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Value Provided Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <h2 className="font-serif text-2xl text-white mb-6">Value Provided</h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Numbers Don't Lie - Left side */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/Projects/VoiceaiReceptionist/Slide 16_9 - 5.png"
                    alt="The Numbers Don't Lie: Boltzman Pays for itself"
                    className="w-full h-auto"
                  />
                </div>
                {/* Powerful Features - Right side */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/Projects/VoiceaiReceptionist/Slide 16_9 - 6.png"
                    alt="Powerful Features that work from Day One"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Creating the Experience Card - Two Column Layout */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <h2 className="font-serif text-2xl text-white mb-6">Creating the experience</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Three Sections */}
                <div>
                  {/* The Current Reality */}
                  <div className="mb-6">
                    <h3 className="font-serif text-lg text-white mb-3">The Current Reality:</h3>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      Restaurants are overwhelmed by volume, receiving over 75 calls daily. Staff members spend 30+ hours per month on the phone—time that should be focused on dine-in guests and operations. The cost of this inefficiency is high: 40% of calls are placed on hold or missed entirely. Worse, data shows that 50% of customers hang up and order elsewhere after waiting just 90 seconds.
                    </p>
                  </div>

                  {/* The Ideal Experience */}
                  <div className="mb-6">
                    <h3 className="font-serif text-lg text-white mb-3">The Ideal Experience:</h3>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      We envision a restaurant where the phone never interrupts the staff. Our Voice Agents function as fully integrated team members, speaking over 30 languages and delivering the utmost in customer service. The AI is indistinguishable from a human, handling everything from reservations to complex orders. By integrating directly with POS systems, orders are processed and sent to the kitchen instantly without staff intervention.
                    </p>
                  </div>

                  {/* The Network Advantage */}
                  <div>
                    <h3 className="font-serif text-lg text-white mb-3">The Network Advantage:</h3>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      Unlike competitors who build isolated models for each client, we are building a collective learning network. Every conversation improves the model for all restaurants. If the AI learns that "extra crispy" implies specific instructions for pizza versus fried chicken, that intelligence propagates across our entire network immediately. This creates a powerful flywheel: more restaurants lead to smarter AI, which attracts more restaurants.
                    </p>
                  </div>
                </div>

                {/* Right Column - Onboarding Experience */}
                <div>
                  <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                    Restaurant owners need immediate solutions, not lengthy integration processes. We engineered a seamless onboarding experience that turns a heavy logistical setup into a few simple steps. Here is what the user sees:
                  </p>
                  <div className="flex justify-center">
                    <img
                      src="/Projects/VoiceaiReceptionist/ED0C2331-51D9-4A66-A02A-4DB336516616.jpeg"
                      alt="Boltzman Onboarding Experience - Phone Mockup"
                      className="max-w-sm h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* From Zero to First Revenue Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <h2 className="font-serif text-2xl text-white mb-6">From Zero to First Revenue</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Story */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-lg text-white mb-3">The Hypothesis</h3>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      Our foundational hypothesis was that Voice AI had matured to the point of being indistinguishable from human speakers. We believe the future of business communication will shift from human-to-human interactions to human-to-agent and agent-to-agent workflows.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg text-white mb-3">The Opportunity</h3>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      However, we recognized that large enterprises would require established trust and pedigree before adopting such new technology. We identified a more immediate opportunity with SMBs—specifically restaurants—which are frequently understaffed and in need of reliable customer service support.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg text-white mb-3">The Validation</h3>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      Rather than conducting passive market research, we built a functional prototype in just three days and took it directly to potential users. I validated the problem at the very first restaurant I visited: upon my arrival, the phone was ringing at the front counter with no staff available to answer it.
                    </p>
                  </div>
                </div>

                {/* Right Column - Video */}
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <video
                      className="w-full h-auto rounded-lg shadow-2xl"
                      controls
                    >
                      <source src="/Projects/VoiceaiReceptionist/IMG_8618.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Validation Result - Highlighted */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-normal-text font-mono text-base leading-relaxed text-center">
                  Within <span className="text-white font-bold">72 hours</span> of demos, we closed <span className="text-white font-bold">three deals</span> totaling <span className="text-white font-bold">$375</span>. The willingness to pay without a free trial strongly validated the market need.
                </p>
              </div>
            </div>

            {/* The Realization - Implementation Friction Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <h2 className="font-serif text-2xl text-white mb-6">The Realization: While closing sales was seamless, the transition to implementation revealed immediate friction in our setup process</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Friction Points */}
                <div>
                  {/* Friction 1 */}
                  <div className="mb-6">
                    <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
                      <span className="text-white font-mono text-sm font-semibold">Friction 1</span>
                    </div>
                    <h3 className="font-serif text-xl text-white mb-3">Telephony Integration</h3>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      To deploy the AI, we evaluated three connectivity strategies: building a proprietary VoIP infrastructure, provisioning Twilio numbers for call forwarding, or updating the restaurant's public-facing number on Google with a brand new twilio number.
                    </p>
                  </div>
                </div>

                {/* Right Column - Illustration */}
                <div className="flex items-center justify-center">
                  <img
                    src="/Projects/VoiceaiReceptionist/Virtual-Number-1.webp"
                    alt="Customer Support Telephony Integration"
                    className="w-full h-auto max-w-lg"
                  />
                </div>
              </div>

              {/* Friction 2 - Reversed Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {/* Left Column - POS System Images */}
                <div className="flex flex-row gap-4 items-start">
                  <img
                    src="/Projects/VoiceaiReceptionist/View recent photos.png"
                    alt="POS System - Clover Device"
                    className="w-1/2 h-64 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/Projects/VoiceaiReceptionist/View recent photos 2.png"
                    alt="POS System - Square Terminal"
                    className="w-1/2 h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Right Column - Friction 2 Description */}
                <div>
                  <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
                    <span className="text-white font-mono text-sm font-semibold">Friction 2</span>
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3">The POS Fragmentation Barrier</h3>
                  <p className="text-normal-text font-mono text-sm leading-relaxed">
                    The Point of Sale (POS) market is notoriously fractured, ranging from modern cloud systems to legacy hardware and even analog pen-and-paper operations. We faced a critical engineering challenge: creating a universal solution to generate invoices and route orders to the kitchen, regardless of the restaurant's existing tech stack.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Solved Those Problems Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <h2 className="font-serif text-2xl text-white mb-8">How might we solved those problems?</h2>

              {/* Solving Friction 1: Connectivity */}
              <div className="mb-8">
                <h3 className="font-serif text-xl text-white mb-6">Solving Friction 1: Connectivity</h3>
                <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                  We evaluated three architectural approaches to connect our AI to the restaurant's phone line, each with distinct trade-offs:
                </p>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Option A */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-red-500/30 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/40">
                        <span className="text-2xl">🏗️</span>
                      </div>
                      <div>
                        <span className="text-red-400 font-mono text-xs font-semibold">RULED OUT</span>
                        <h4 className="font-serif text-lg text-white">Option A</h4>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 font-semibold mb-2">VoIP Infrastructure</p>
                    <p className="text-normal-text font-mono text-xs leading-relaxed">
                      Building a proprietary VoIP network required complex carrier partnerships and significant engineering overhead that was out of scope.
                    </p>
                  </div>

                  {/* Option B */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-yellow-500/30 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/40">
                        <span className="text-2xl">↪️</span>
                      </div>
                      <div>
                        <span className="text-yellow-400 font-mono text-xs font-semibold">PARTIAL</span>
                        <h4 className="font-serif text-lg text-white">Option B</h4>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 font-semibold mb-2">Call Forwarding</p>
                    <p className="text-normal-text font-mono text-xs leading-relaxed">
                      Kept existing number but created a dead-end: once forwarded to AI, impossible to transfer back to staff if human intervention needed.
                    </p>
                  </div>

                  {/* Option C */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-blue-500/30 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <span className="text-blue-400 font-mono text-xs font-semibold">VIABLE</span>
                        <h4 className="font-serif text-lg text-white">Option C</h4>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 font-semibold mb-2">Dedicated AI Number</p>
                    <p className="text-normal-text font-mono text-xs leading-relaxed">
                      New number for public profiles. Enabled call transfers, but owners hesitant to replace legacy numbers customers memorized.
                    </p>
                  </div>
                </div>

                {/* The Solution - Highlighted */}
                <div className="bg-green-500/10 backdrop-blur-sm rounded-lg border border-green-500/30 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/40">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h4 className="font-serif text-xl text-green-400">The Solution: Hybrid Model</h4>
                  </div>
                  <p className="text-normal-text font-mono text-sm leading-relaxed">
                    We implemented a hybrid model. By supporting both <span className="text-white font-semibold">Option B</span> (for owners prioritizing their legacy number) and <span className="text-white font-semibold">Option C</span> (for owners prioritizing call transfer capabilities), we provided a flexible solution that accommodated the specific operational nuances of each restaurant.
                  </p>
                </div>
              </div>

              {/* Solving Friction 2: Universal Order Injection */}
              <div>
                <h3 className="font-serif text-xl text-white mb-6">Solving Friction 2: Universal Order Injection</h3>
                <p className="text-normal-text font-mono text-sm leading-relaxed mb-8">
                  To ensure 100% market compatibility, we developed a dual-track integration strategy:
                </p>

                {/* Option A - Modern Ecosystems */}
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl border border-purple-500/30 p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/40">
                      <span className="text-3xl">🔗</span>
                    </div>
                    <div>
                      <span className="text-purple-400 font-mono text-xs font-semibold">OPTION A</span>
                      <h4 className="font-serif text-xl text-white">Modern Ecosystems</h4>
                    </div>
                  </div>
                  <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                    For tech-forward restaurants, we secured formal integration partnerships with over five major POS providers, including Clover, Square, and Lightspeed. This allowed orders to flow directly from the AI into their digital KDS (Kitchen Display Systems).
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/Projects/VoiceaiReceptionist/AE12994F-BE02-4094-98E2-7BD53754DF7D.jpeg"
                      alt="POS Integration Partners - Clover, Square, Toast, Yelp, UberEats"
                      className="w-full h-96 object-contain rounded-lg shadow-xl border border-white/10"
                    />
                    <img
                      src="/Projects/VoiceaiReceptionist/IMG_1937 2.JPG"
                      alt="Kitchen Display System with Digital Orders"
                      className="w-full h-96 object-cover rounded-lg shadow-xl border border-white/10"
                    />
                  </div>
                </div>

                {/* Option B - Smart Printer Bridge */}
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-xl border border-orange-500/30 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/40">
                      <span className="text-3xl">🖨️</span>
                    </div>
                    <div>
                      <span className="text-orange-400 font-mono text-xs font-semibold">OPTION B</span>
                      <h4 className="font-serif text-xl text-white">The "Smart Printer" Bridge</h4>
                    </div>
                  </div>
                  <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                    For legacy or analog restaurants (pen and paper), we engineered a proprietary hardware solution. We built low-cost "Smart Printers" using thermal printers powered by Raspberry Pi Zeros. This allowed the AI to bypass the lack of digital infrastructure and physically print orders for both the kitchen and the cashier in real-time.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/Projects/VoiceaiReceptionist/View recent photos 3.png"
                      alt="Smart Printer - Thermal Printer with Raspberry Pi"
                      className="w-full h-96 object-cover rounded-lg shadow-xl border border-white/10"
                    />
                    <img
                      src="/Projects/VoiceaiReceptionist/View recent photos 4.png"
                      alt="Printed Receipt with Order Details"
                      className="w-full h-96 object-contain rounded-lg shadow-xl border border-white/10"
                    />
                  </div>
                </div>

                {/* Everything was designed for speed Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
                  <h2 className="font-serif text-xl md:text-2xl text-white mb-6">Everything was designed for speed</h2>
                  <div className="rounded-lg overflow-hidden bg-white p-4">
                    <img
                      src="/Projects/VoiceaiReceptionist/5B04FC8E-6021-4A8B-A986-FD255E26A135.jpeg"
                      alt="Boltzman Landing Page - Designed for Speed"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* The Experience Designed for Scalability Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
                  <h2 className="font-serif text-xl md:text-2xl text-white mb-6">The experience designed for scalability.</h2>
                  <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                    With our sales and onboarding workflows validated, we shifted our focus to scaling. We drove growth through a mix of word-of-mouth referrals, door-to-door outreach, and targeted Google Ads. To support this expansion, we built a comprehensive web platform serving two critical functions: a conversion engine for booking demos and a self-service portal for clients to manage their accounts. Below is a walkthrough of how I curated that user experience.
                  </p>
                  <p className="text-white font-mono text-sm mb-4">
                    Once a potential customer get on our website they're welcomed with a "Get started button"
                  </p>
                  <div className="rounded-lg overflow-hidden bg-white p-8">
                    <img
                      src="/Projects/VoiceaiReceptionist/Group 5.svg"
                      alt="Get Started Button Welcome"
                      className="w-full h-auto mx-auto"
                      style={{ maxWidth: '1200px' }}
                    />
                  </div>
                </div>

                {/* Booking and Onboarding Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
                  <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                    Once a prospect selects a time, the demo is automatically booked. During this meeting, we validate the fit and close the sale. Immediately after confirmation, we move to the onboarding phase, where we gather essential data—including menus, operating hours, and frequently asked questions—to begin training their specific AI model.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-lg overflow-hidden bg-white p-4">
                      <img
                        src="/Projects/VoiceaiReceptionist/7E20C981-B2CE-43B8-AD47-58B6BF3636F4.jpeg"
                        alt="Booking Meeting - Step 1"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden bg-white p-4">
                      <img
                        src="/Projects/VoiceaiReceptionist/EB9267A7-CBD9-4659-A30A-EF3128272C63.jpeg"
                        alt="Booking Meeting - Step 2"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* How we Implemented the Agents Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
                  <h2 className="font-serif text-xl md:text-2xl text-white mb-6">How we Implemented the Agents</h2>
                  <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                    Initially, we hard-coded agents for our first three customers, manually configuring separate files for menus, transcribers, and inbound handlers. While this static approach offered granular control, it became a bottleneck during door-to-door sales where immediate deployment was required. To resolve this, I migrated our architecture from file-based configurations to a dynamic, database-driven backend. This shift enabled on-the-spot agent generation and reduced implementation time by over 60%
                  </p>
                  <div className="rounded-lg overflow-hidden bg-white p-4">
                    <img
                      src="/Projects/VoiceaiReceptionist/BF1BF3E2-DA53-489B-8C98-73A7F5EF96C0.jpeg"
                      alt="Agent Implementation - Edit Restaurant Interface"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* How we ran tests Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
                  <h2 className="font-serif text-xl md:text-2xl text-white mb-6">How we ran tests</h2>

                  {/* Introduction */}
                  <div className="mb-8">
                    <h3 className="text-white font-serif text-lg mb-4">The Quality Assurance Protocol</h3>
                    <p className="text-normal-text font-mono text-sm leading-relaxed">
                      Following implementation, every agent undergoes a rigorous three-stage validation process before going live. We isolate and optimize the three core components of the voice stack:
                    </p>
                  </div>

                  {/* Three Testing Stages */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Stage 1 - Pronunciation */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl border border-blue-500/30 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
                          <span className="text-2xl">🗣️</span>
                        </div>
                        <div>
                          <span className="text-blue-400 font-mono text-xs font-semibold">STAGE 1</span>
                          <h4 className="font-serif text-lg text-white">Pronunciation</h4>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 font-mono mb-2">(Text-to-Speech)</p>
                      <p className="text-normal-text font-mono text-sm leading-relaxed">
                        Tuning the AI's cadence and tone for natural delivery.
                      </p>
                    </div>

                    {/* Stage 2 - Transcription */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/40">
                          <span className="text-2xl">📝</span>
                        </div>
                        <div>
                          <span className="text-purple-400 font-mono text-xs font-semibold">STAGE 2</span>
                          <h4 className="font-serif text-lg text-white">Transcription</h4>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 font-mono mb-2">(Speech-to-Text)</p>
                      <p className="text-normal-text font-mono text-sm leading-relaxed">
                        Ensuring accurate capture of customer inputs, even with background noise.
                      </p>
                    </div>

                    {/* Stage 3 - Comprehension */}
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl border border-green-500/30 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/40">
                          <span className="text-2xl">🧠</span>
                        </div>
                        <div>
                          <span className="text-green-400 font-mono text-xs font-semibold">STAGE 3</span>
                          <h4 className="font-serif text-lg text-white">Comprehension</h4>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 font-mono mb-2">(LLM Processing)</p>
                      <p className="text-normal-text font-mono text-sm leading-relaxed">
                        Verifying the AI correctly interprets complex logic and intent.
                      </p>
                    </div>
                  </div>

                  {/* Closing Statement */}
                  <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-normal-text font-mono text-sm text-center">
                      We optimize each layer sequentially to ensure a flawless customer experience.
                    </p>
                  </div>
                </div>

                {/* Observability Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
                  <h2 className="font-serif text-xl md:text-2xl text-white mb-6">Observability</h2>
                  <p className="text-normal-text font-mono text-sm leading-relaxed mb-6">
                    <strong className="text-white">The Client Dashboard:</strong> Upon completion of testing, we provision a dedicated analytics portal. This gives customers real-time visibility into their operation, allowing them to monitor live AI interactions, track call volume, and measure direct revenue attribution.
                  </p>
                  <div className="rounded-lg overflow-hidden bg-white p-4">
                    <img
                      src="/Projects/VoiceaiReceptionist/570B11C1-C09C-4A9B-B282-55E011472146.jpeg"
                      alt="Client Dashboard - Real-time Analytics Portal"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* The Reflection Card */}
                <div className="bg-gradient-to-br from-[#EFBF04]/10 via-white/5 to-white/5 backdrop-blur-sm rounded-lg border border-[#EFBF04]/30 p-8 md:p-12 mb-8">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 text-center">The Reflection</h2>

                    <div className="space-y-6 text-normal-text font-mono text-sm md:text-base leading-relaxed">
                      <p>
                        This venture represents my fastest execution to date, taking us from ideation to $1k MRR in just two weeks. While Lawnstack taught me efficiency, this project proved exactly how much can be achieved with a lean team. Operating often as a solo founder—balancing engineering, sales, and support—I learned that business is not just about building; it is a continuous effort to maintain the customer experience when things break.
                      </p>

                      <p>
                        Whether it was driving from Jersey to NYC to fix hardware issues or waking up early for support calls, this became a lifestyle rather than just a job. Fundamentally, I gained deep technical expertise in Voice AI, specifically in reducing latency, humanizing interactions, and engineering long-term memory. It was an incredible journey.
                      </p>

                      <p className="text-white">
                        Special thanks to <a href="https://www.liamdu.com/" target="_blank" rel="noopener noreferrer" className="text-[#EFBF04] hover:underline">Liam Du</a> for his collaboration. Check out the journey below.
                      </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="mt-8 flex justify-center">
                      <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#EFBF04] to-transparent rounded-full"></div>
                    </div>

                    {/* YouTube Video Demo */}
                    <div className="mt-10 flex justify-center">
                      <div className="relative w-full max-w-4xl">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 overflow-hidden">
                          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                              className="absolute top-0 left-0 w-full h-full rounded-lg"
                              src="https://www.youtube.com/embed/_bVnjj65hqk"
                              title="Boltzman Enterprise Demo"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                        {/* Decorative glow */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#EFBF04]/10 via-yellow-500/10 to-amber-500/10 rounded-xl blur-xl -z-10"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* The Journey Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6 md:p-8 mb-8">
                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 text-center">The Journey</h2>

                  {/* Cool/Cute Picture Collage */}
                  <div className="relative w-full overflow-hidden">
                    {/* ALL PHOTOS SECTION */}
                    
                    {/* Top Row - 3 Photos with Polaroid Style */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6">
                      <div className="group relative transform rotate-[-3deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-110">
                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-2xl">
                          <img
                            src="/Projects/VoiceaiReceptionist/IMG_1542.jpg"
                            alt="Journey 1"
                            className="w-64 md:w-72 h-48 md:h-56 object-cover rounded"
                          />
                        </div>
                      </div>
                      <div className="group relative transform rotate-[2deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-110">
                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-2xl">
                          <img
                            src="/Projects/VoiceaiReceptionist/IMG_1543.jpg"
                            alt="Journey 2"
                            className="w-64 md:w-72 h-48 md:h-56 object-cover rounded"
                          />
                        </div>
                      </div>
                      <div className="group relative transform rotate-[4deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-110">
                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-2xl">
                          <img
                            src="/Projects/VoiceaiReceptionist/IMG_1544.jpg"
                            alt="Journey 3"
                            className="w-64 md:w-72 h-48 md:h-56 object-cover rounded"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Second Row - 2 Photos */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6">
                      <div className="group relative transform rotate-[3deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-110">
                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-2xl">
                          <img
                            src="/Projects/VoiceaiReceptionist/IMG_1545.jpg"
                            alt="Journey 4"
                            className="w-64 md:w-72 h-48 md:h-56 object-cover rounded"
                          />
                        </div>
                      </div>
                      <div className="group relative transform rotate-[-2deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-110">
                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-2xl">
                          <img
                            src="/Projects/VoiceaiReceptionist/IMG_1546.jpg"
                            alt="Journey 5"
                            className="w-64 md:w-72 h-48 md:h-56 object-cover rounded"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Third Row - 1 Large Photo */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6">
                      <div className="group relative transform rotate-[2deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-110">
                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-2xl">
                          <img
                            src="/Projects/VoiceaiReceptionist/View recent photos 5.png"
                            alt="Journey 6"
                            className="w-full md:w-[600px] h-48 md:h-64 object-cover rounded"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Fourth Row - 4 Small Photos */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                      <div className="group relative transform rotate-[-4deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-110">
                        <div className="bg-white p-2 md:p-3 rounded-lg shadow-xl">
                          <img
                            src="/Projects/VoiceaiReceptionist/View recent photos 6.png"
                            alt="Journey 7"
                            className="w-40 md:w-48 h-40 md:h-48 object-cover rounded"
                          />
                        </div>
                      </div>
                      <div className="group relative transform rotate-[3deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-110">
                        <div className="bg-white p-2 md:p-3 rounded-lg shadow-xl">
                          <img
                            src="/Projects/VoiceaiReceptionist/View recent photos 7.png"
                            alt="Journey 8"
                            className="w-40 md:w-48 h-40 md:h-48 object-cover rounded"
                          />
                        </div>
                      </div>
                      <div className="group relative transform rotate-[-2deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-110">
                        <div className="bg-white p-2 md:p-3 rounded-lg shadow-xl">
                          <img
                            src="/Projects/VoiceaiReceptionist/View recent photos 8.png"
                            alt="Journey 9"
                            className="w-40 md:w-48 h-40 md:h-48 object-cover rounded"
                          />
                        </div>
                      </div>
                      <div className="group relative transform rotate-[5deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-110">
                        <div className="bg-white p-2 md:p-3 rounded-lg shadow-xl">
                          <img
                            src="/Projects/VoiceaiReceptionist/IMG_1552.jpg"
                            alt="Journey 10"
                            className="w-40 md:w-48 h-40 md:h-48 object-cover rounded"
                          />
                        </div>
                      </div>
                    </div>

                    {/* ALL VIDEOS SECTION */}
                    
                    {/* All Videos in One Row */}
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                      {/* First Video - Left */}
                      <div className="group relative transform rotate-[-1deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-105">
                        <div className="bg-black p-2 md:p-3 rounded-lg shadow-2xl overflow-hidden">
                          <video
                            controls
                            className="w-64 md:w-80 h-40 md:h-48"
                          >
                            <source src="/Projects/VoiceaiReceptionist/IMG_8749.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      {/* Second Video - Middle */}
                      <div className="group relative transform rotate-[2deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-105">
                        <div className="bg-black p-2 md:p-3 rounded-lg shadow-2xl overflow-hidden">
                          <video
                            controls
                            className="w-64 md:w-80 h-40 md:h-48"
                          >
                            <source src="/Projects/VoiceaiReceptionist/IMG_8700.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      {/* Third Video - Right */}
                      <div className="group relative transform rotate-[-2deg] hover:rotate-0 hover:z-20 transition-all duration-500 hover:scale-105">
                        <div className="bg-black p-2 md:p-3 rounded-lg shadow-2xl overflow-hidden">
                          <video
                            controls
                            className="w-64 md:w-80 h-40 md:h-48"
                          >
                            <source src="/Projects/VoiceaiReceptionist/IMG_9068.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Boltzman AI-specific content */}
        {project.title === 'Boltzman AI' && (
          <>
            {/* Summary and Profile Cards - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Summary Card - First */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                <h2 className="font-serif text-xl text-white mb-4">Summary</h2>
                <p className="text-normal-text font-mono text-sm leading-relaxed">
                  Boltzman was built in the hope of solving for a universal AI assistant that executes tasks across your digital workspace, removing the need to manually navigate between different apps and services. Unlike traditional AI tools that only provide responses, Boltzman takes action - it can search, gather, analyze, and execute tasks across your connected tools (Slack, Drive, Notion, Calendar, etc).
                </p>
              </div>

              {/* Profile Card - Second */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                <h2 className="font-serif text-xl text-white mb-4">Profile</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Role</p>
                    <p className="text-white font-mono text-sm">Chief Executive Officer & Part Time Product Manager</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Team</p>
                    <p className="text-white font-mono text-sm">2</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Timeline</p>
                    <p className="text-white font-mono text-sm">6months</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Highlight</p>
                    <p className="text-white font-mono text-sm">3000 users in ~15 days and almost got acquired by minlify</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Fundraising</p>
                    <p className="text-white font-mono text-sm">$0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem VS Solution Section */}
            <div className="mb-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">The Challenge</h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-red-500/50 w-24"></div>
                  <span className="text-white/40 font-mono text-xs">VS</span>
                  <div className="h-px bg-gradient-to-l from-transparent via-green-500/50 to-green-500/50 w-24"></div>
                </div>
              </div>

              {/* Split Screen Design */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                {/* PROBLEM SIDE - Left */}
                <div className="relative flex flex-col">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/5 rounded-2xl blur-xl"></div>
                  
                  <div className="relative bg-gradient-to-br from-red-950/30 to-orange-950/20 backdrop-blur-sm rounded-2xl border-2 border-red-500/30 p-6 md:p-8 flex flex-col h-full">
                    {/* Problem Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border-2 border-red-500/50">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl text-white">The Problem</h3>
                        <p className="text-red-400/70 font-mono text-sm">Fragmentation & Manual Overhead</p>
                      </div>
                    </div>

                    {/* Problem Points */}
                    <div className="space-y-4 flex-grow">
                      {/* Point 1 */}
                      <div className="bg-black/30 rounded-lg p-4 border border-red-500/20 hover:border-red-500/40 transition-all">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-1 font-mono text-sm">The Multi-App Toll</h4>
                            <p className="text-white/70 font-mono text-xs leading-relaxed">
                              Simple tasks require jumping between multiple platforms. Traditional AI only provides responses, leaving you to handle execution.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Point 2 */}
                      <div className="bg-black/30 rounded-lg p-4 border border-red-500/20 hover:border-red-500/40 transition-all">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-1 font-mono text-sm">The Repetitive Grind</h4>
                            <p className="text-white/70 font-mono text-xs leading-relaxed">
                              Wasted time on copy-paste and repetitive actions—or even necessary but tedious steps—just to accomplish a single goal.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Point 3 */}
                      <div className="bg-black/30 rounded-lg p-4 border border-red-500/20 hover:border-red-500/40 transition-all">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-1 font-mono text-sm">Lack of Context</h4>
                            <p className="text-white/70 font-mono text-xs leading-relaxed">
                              Existing tools lack persistent memory or access to your full context, preferences, and information, making them ineffective for complex tasks.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SOLUTION SIDE - Right */}
                <div className="relative flex flex-col">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-2xl blur-xl"></div>
                  
                  <div className="relative bg-gradient-to-br from-green-950/30 to-emerald-950/20 backdrop-blur-sm rounded-2xl border-2 border-green-500/30 p-6 md:p-8 flex flex-col h-full">
                    {/* Solution Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border-2 border-green-500/50">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl text-white">The Solution</h3>
                        <p className="text-green-400/70 font-mono text-sm">Autonomous Action & Unified Workflow</p>
                      </div>
                    </div>

                    {/* Solution Description */}
                    <div className="bg-black/30 rounded-lg p-4 border border-green-500/20 mb-4">
                      <p className="text-white/80 font-mono text-sm leading-relaxed">
                        Boltzman is an AI assistant that executes tasks across your digital workspace, moving beyond simple responses to take direct action on your behalf.
                      </p>
                    </div>

                    {/* Core Capabilities */}
                    <div className="space-y-4 mb-4 flex-grow">
                      <h4 className="text-green-400 font-semibold font-mono text-sm uppercase tracking-wide">Core Capabilities</h4>
                      
                      {/* Capability 1 */}
                      <div className="bg-black/30 rounded-lg p-4 border border-green-500/20 hover:border-green-500/40 transition-all">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-1 font-mono text-sm">Autonomous Execution</h4>
                            <p className="text-white/70 font-mono text-xs leading-relaxed">
                              Search, gather, analyze, and execute tasks across connected tools like Slack, Drive, Notion, and Calendar—no manual navigation needed.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Capability 2 */}
                      <div className="bg-black/30 rounded-lg p-4 border border-green-500/20 hover:border-green-500/40 transition-all">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold mb-1 font-mono text-sm">Full Contextual Understanding</h4>
                            <p className="text-white/70 font-mono text-xs leading-relaxed">
                              With integration to existing tools and persistent memory, Boltzman understands and acts on your full context.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Example Workflow */}
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/30">
                      <div className="flex items-start gap-2 mb-2">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="text-green-400 font-semibold font-mono text-sm">Example Workflow</h4>
                      </div>
                      <p className="text-white/80 font-mono text-xs leading-relaxed italic">
                        When asked to "prepare questions for an upcoming coffee chat," Boltzman autonomously handles the entire process: finding the calendar event, researching the participant, crafting relevant questions, and even drafting personalized follow-up emails by analyzing meeting transcripts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Boltzman's Differentiation Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">Boltzman's Differentiation</h2>
                  <p className="text-white/60 font-mono text-sm">The Logic of Autonomy</p>
                </div>

                {/* Content */}
                <div className="space-y-8 mb-8">
                  {/* Main Content */}
                  <div className="space-y-8">
                    {/* Section I */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-purple-500/30">
                          <span className="text-purple-400 font-serif text-xl font-bold">I</span>
                        </div>
                        <h3 className="font-serif text-2xl text-white">Re-evaluating the Problem</h3>
                      </div>
                      <p className="text-white/60 font-mono text-sm italic mb-4">The Inefficient Status Quo</p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <h4 className="text-white font-semibold mb-2 font-mono text-sm flex items-center gap-2">
                            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            The Implicit Friction of Fragmentation
                          </h4>
                          <p className="text-white/70 font-mono text-xs leading-relaxed">
                            We recognized that professionals spend their days executing complex, multi-step workflows (e.g., preparing for a meeting, sending a contextual email) that are currently manual and platform-specific. Users are forced to constantly navigate between distinct applications—such as Gmail, Calendar, LinkedIn, and Notion—because this process is so deeply ingrained that the underlying inefficiency is rarely questioned.
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg p-4 border border-purple-500/20">
                          <h4 className="text-purple-400 font-semibold mb-2 font-mono text-sm flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            The Opportunity for Reversal
                          </h4>
                          <p className="text-white/80 font-mono text-xs leading-relaxed italic">
                            This led to a crucial insight: <strong className="text-white">Why should the user always have to seek out the platform when, with AI at its core, the necessary workflow could be brought directly to the user?</strong>
                          </p>
                        </div>

                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <h4 className="text-white font-semibold mb-2 font-mono text-sm flex items-center gap-2">
                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            The Goal
                          </h4>
                          <p className="text-white/70 font-mono text-xs leading-relaxed">
                            Boltzman is pioneering a new method of interaction—not through the traditional browser interface, but via a multi-modal assistant that abstracts these workflows and delivers them on desktop or mobile.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section II */}
                    <div className="space-y-4 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-emerald-500/30">
                          <span className="text-emerald-400 font-serif text-xl font-bold">II</span>
                        </div>
                        <h3 className="font-serif text-2xl text-white">Strategic Solution</h3>
                      </div>
                      <p className="text-white/60 font-mono text-sm italic mb-4">The Universal Assistant Pillars</p>
                      
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
                        <p className="text-white/80 font-mono text-sm leading-relaxed">
                          We approached the concept of a "Universal Assistant" (or "Universal Agent," a more technical term) not by building everything, but by defining and efficiently addressing its core functional pillars. Our goal was to create a solution that works effectively with fewer resources.
                        </p>
                        <p className="text-white/70 font-mono text-sm leading-relaxed mt-3">
                          We identified four core requirements for any system to be considered a truly universal agent capable of performing actions:
                        </p>
                      </div>

                      {/* Four Pillars */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Pillar 1 */}
                        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-4 border border-blue-500/20">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-400 font-mono font-bold text-sm">1</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-blue-400 font-semibold mb-1 font-mono text-sm">Execution of Tasks</h4>
                              <p className="text-white/60 font-mono text-xs italic mb-2">The "How"</p>
                              <p className="text-white/70 font-mono text-xs leading-relaxed">
                                Powered by the very tools humans use digitally. Our strategy was to equip the system with access to the user's existing suite of favorite applications—Google Drive, Calendar, Notion, Slack, etc.—acting as the "sous chef" to run the digital kitchen.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-purple-400 font-mono font-bold text-sm">2</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-purple-400 font-semibold mb-1 font-mono text-sm">Long-Form Memory</h4>
                              <p className="text-white/60 font-mono text-xs italic mb-2">The "Intent"</p>
                              <p className="text-white/70 font-mono text-xs leading-relaxed">
                                The best way to anticipate and understand a user's intent is by having access to their vast history of past interactions with the system. This deep, persistent memory capability solves the critical problem of contextual understanding.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-lg p-4 border border-emerald-500/20">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-emerald-400 font-mono font-bold text-sm">3</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-emerald-400 font-semibold mb-1 font-mono text-sm">Integration</h4>
                              <p className="text-white/60 font-mono text-xs italic mb-2">The "Where"</p>
                              <p className="text-white/70 font-mono text-xs leading-relaxed">
                                Integration gives the system the necessary access to execute actions and retrieve data. We leveraged advanced techniques like Vector databases and Retrieval-Augmented Generation (RAG) to ensure the system can interact with and retrieve data from the user's favorite apps.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Pillar 4 */}
                        <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-orange-400 font-mono font-bold text-sm">4</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-orange-400 font-semibold mb-1 font-mono text-sm">Value Function</h4>
                              <p className="text-white/60 font-mono text-xs italic mb-2">The "Why"</p>
                              <p className="text-white/70 font-mono text-xs leading-relaxed">
                                This involves optimizing the system to prioritize actions that the user will find valuable. This optimization is achieved through an incentive-based algorithm, which we've termed the "Boltzman Engine," ensuring the system is always providing desired outcomes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Closing Statement */}
                      <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-emerald-500/10 rounded-lg p-5 border border-purple-500/20 mt-6">
                        <p className="text-white/90 font-mono text-sm leading-relaxed">
                          We believe this structured approach, focusing on operationalizing these four pillars, represents the most effective and resource-efficient method for building a universal assistant.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image Below Content */}
                  <div className="mt-8">
                    {/* Browser Frame */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden max-w-4xl mx-auto">
                      {/* Browser Header */}
                      <div className="bg-[#2a2a2a] rounded-t-lg p-2 flex items-center gap-2 border-b border-gray-700">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 bg-[#3a3a3a] rounded px-4 py-1 text-xs text-gray-400 text-center font-mono">
                          boltzman.ai
                        </div>
                      </div>
                      {/* Browser Content */}
                      <div className="bg-[#1a1a1a] rounded-b-lg overflow-hidden" style={{ minHeight: '200px' }}>
                        <div className="p-6">
                          <img
                            src="/Projects/Boltzman AI/hello.JPEG"
                            alt="Boltzman Differentiation Visual"
                            className="w-full h-auto object-contain"
                            loading="eager"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interface Strategy Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">Interface Strategy</h2>
                    <p className="text-white/60 font-mono text-sm">Designing for Familiarity</p>
                  </div>
                </div>

                {/* Content Grid - Text on left, Image on right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Text Content */}
                  <div className="space-y-6">
                    {/* The Insight */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-5 border border-blue-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-blue-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">The Insight</h3>
                          <p className="text-white/80 font-mono text-sm leading-relaxed">
                            After extensive interviews with our target customers (researchers, students, and professionals), the consensus pointed toward a friction-less communication method.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* The Decision */}
                    <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-purple-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">The Decision</h3>
                          <p className="text-white/80 font-mono text-sm leading-relaxed">
                            We determined that the chatbot interface was the optimal channel, primarily because our target users operate predominantly on their desktop computers.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* The Goal */}
                    <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-lg p-5 border border-emerald-500/20">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-emerald-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">The Goal</h3>
                          <p className="text-white/80 font-mono text-sm leading-relaxed">
                            Our design imperative was to create a non-convoluted interface—a simple, familiar chat window—while simultaneously ensuring the product's advanced capabilities (task execution and multi-app functionality) were immediately evident upon first glance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <img
                        src="/Projects/Boltzman AI/View recent photos 9.png"
                        alt="Interface Strategy - Chat Interface"
                        className="w-full h-auto rounded-lg object-contain shadow-lg"
                        loading="lazy"
                      />
                    </div>
                    {/* Decorative gradient overlay */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-2xl blur-2xl -z-10"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Building the Experience: Optimizing Top-of-Funnel Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">Building the Experience</h2>
                    <p className="text-white/60 font-mono text-sm">Optimizing the Top-of-Funnel</p>
                  </div>
                </div>

                {/* Content Layout - Problem/Solution with Image */}
                <div className="space-y-8">
                  {/* The Initial Problem */}
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-500/20">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-red-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide">The Initial Problem</h3>
                        <p className="text-white/80 font-mono text-sm leading-relaxed">
                          Our initial flow, which required an immediate account creation (via Google or direct sign-up), created high friction. Usability testing showed users were dropping off immediately upon seeing the sign-up modal, leading to significantly reduced top-of-funnel conversion rates.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Solution with Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/20">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-emerald-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide">The Solution (CRO Strategy)</h3>
                          <p className="text-white/80 font-mono text-sm leading-relaxed mb-4">
                            I implemented a progressive disclosure approach. The system was modified to grant users a limited trial of 3 interactions.
                          </p>
                          <div className="bg-black/30 rounded-lg p-4 border border-emerald-500/20">
                            <p className="text-white/90 font-mono text-sm leading-relaxed italic">
                              This allowed prospects to experience the AI's core functionality and utility firsthand, effectively demonstrating the product's value before requiring the commitment of account creation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10 shadow-2xl">
                        <img
                          src="/Projects/Boltzman AI/Group 7.svg"
                          alt="Progressive Disclosure Flow"
                          className="w-full h-auto rounded-lg object-contain"
                          loading="lazy"
                        />
                      </div>
                      {/* Decorative gradient overlay */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-blue-500/10 rounded-2xl blur-2xl -z-10"></div>
                    </div>
                  </div>

                  {/* Visual Flow Indicator */}
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="flex items-center gap-2 text-white/40 font-mono text-xs">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <span>High Friction</span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-red-500/50 via-orange-500/50 to-emerald-500/50"></div>
                    <div className="flex items-center gap-2 text-white/40 font-mono text-xs">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span>Progressive Disclosure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Multilingual Support Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header with Globe Icon */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">Multilingual Support</h2>
                    <p className="text-white/60 font-mono text-sm">Global Accessibility</p>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-8">
                  {/* Description */}
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
                    <p className="text-white/90 font-mono text-base leading-relaxed text-center">
                      Boltzman provided users with comprehensive multilingual support, enabling them to conduct studies, research, and mathematical work in any language of their choosing.
                    </p>
                  </div>

                  {/* Images Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Image 1 */}
                    <div className="relative group">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                        <img
                          src="/Projects/Boltzman AI/View recent photos 10.png"
                          alt="Multilingual Support Example 1"
                          className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                      {/* Decorative gradient overlay */}
                      <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>

                    {/* Image 2 */}
                    <div className="relative group">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                        <img
                          src="/Projects/Boltzman AI/View recent photos 11.png"
                          alt="Multilingual Support Example 2"
                          className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>
                      {/* Decorative gradient overlay */}
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </div>
                  </div>

                  {/* Language Icons Decoration */}
                  <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/50 font-mono text-xs">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>Multiple Languages</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-cyan-400/50"></div>
                    <div className="flex items-center gap-2 text-white/50 font-mono text-xs">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span>Research & Studies</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-cyan-400/50"></div>
                    <div className="flex items-center gap-2 text-white/50 font-mono text-xs">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                      <span>Mathematical Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Boltzman Engine Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center border border-purple-500/30">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">The Boltzman Engine</h2>
                    <p className="text-white/60 font-mono text-sm">Custom Modes and Algorithmic LLM Orchestration</p>
                  </div>
                </div>

                {/* Section I: User-Centric Modes */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                      <span className="text-blue-400 font-serif text-xl font-bold">I</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white">User-Centric Modes</h3>
                  </div>
                  <p className="text-white/70 font-mono text-sm mb-6 leading-relaxed">
                    Solving Specific Pain Points
                  </p>

                  {/* Introduction */}
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-8">
                    <p className="text-white/80 font-mono text-sm leading-relaxed">
                      User research and interviews revealed distinct user needs, leading us to segment the platform into specialized modes to optimize for common workflows.
                    </p>
                  </div>

                  {/* Mode Diversification */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      Mode Diversification
                    </h4>
                    <p className="text-white/70 font-mono text-sm mb-6 leading-relaxed">
                      Users were given multiple interaction modes to choose from, with each mode designed to address a specific problem identified during our user interviews.
                    </p>

                    {/* Modes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {/* Auto Mode */}
                      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          <h5 className="text-green-400 font-semibold font-mono text-sm">Auto</h5>
                        </div>
                        <p className="text-white/70 font-mono text-xs leading-relaxed">
                          Optimized for daily use, providing basic chat functionality.
                        </p>
                      </div>

                      {/* Quick Search */}
                      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-4 border border-blue-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          <h5 className="text-blue-400 font-semibold font-mono text-sm">Quick Search</h5>
                        </div>
                        <p className="text-white/70 font-mono text-xs leading-relaxed">
                          Optimized for fast facts and answers.
                        </p>
                      </div>

                      {/* Pro Search */}
                      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                          <h5 className="text-purple-400 font-semibold font-mono text-sm">Pro Search</h5>
                        </div>
                        <p className="text-white/70 font-mono text-xs leading-relaxed">
                          Offers enhanced searching power.
                        </p>
                      </div>

                      {/* Assistant (BETA) */}
                      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                          <h5 className="text-orange-400 font-semibold font-mono text-sm">Assistant (BETA)</h5>
                        </div>
                        <p className="text-white/70 font-mono text-xs leading-relaxed">
                          Focuses on agency, reasoning, and action execution.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Specialized Tools */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Specialized Tools
                    </h4>
                    <p className="text-white/70 font-mono text-sm mb-4 leading-relaxed">
                      Beyond the core chat modes, we provided targeted tools to solve high-frequency, complex tasks:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['YouTube Transcriber', 'Image Generator', 'Website Scraper', 'Audio Transcriber', 'Text to Speech'].map((tool, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <p className="text-white/80 font-mono text-xs text-center">{tool}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image 1 */}
                  <div className="relative mb-6 flex justify-center">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 max-w-2xl w-full">
                      <img
                        src="/Projects/Boltzman AI/4B8144E9-D045-4C8A-90D5-97E48E7A8181.jpeg"
                        alt="Boltzman Engine Modes"
                        className="w-full h-auto rounded-lg object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-xl -z-10"></div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

                {/* Section II: Strategic Advantage */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/30">
                      <span className="text-indigo-400 font-serif text-xl font-bold">II</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white">Strategic Advantage</h3>
                  </div>
                  <p className="text-white/70 font-mono text-sm mb-6 leading-relaxed">
                    LLM Orchestration
                  </p>

                  {/* Introduction */}
                  <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg p-5 border border-indigo-500/20 mb-8">
                    <p className="text-white/90 font-mono text-sm leading-relaxed">
                      We recognized that no single Large Language Model (LLM) is superior across all task types. Our vision was to empower Boltzman with a decisive technical edge by allowing it to select the best model for any given action.
                    </p>
                  </div>

                  {/* Two Column Layout with Images */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Left Column - Content */}
                    <div className="space-y-6">
                      {/* Pioneering LLM Choice */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-indigo-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Pioneering LLM Choice
                        </h4>
                        <p className="text-white/70 font-mono text-xs leading-relaxed">
                          We were among the first platforms to offer users and the system a selection of multiple LLMs.
                        </p>
                      </div>

                      {/* The Orchestration Layer */}
                      <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-lg p-4 border border-purple-500/20">
                        <h4 className="text-purple-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          The Orchestration Layer
                        </h4>
                        <p className="text-white/80 font-mono text-xs leading-relaxed mb-4">
                          The core power of Boltzman lay in its ability to dynamically assign tasks to the most appropriate LLM based on its known strengths.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <p className="text-white/70 font-mono text-xs leading-relaxed">
                              If <span className="text-white font-semibold">DeepSeek R1</span> was superior for deep reasoning tasks, Boltzman would delegate the task to it.
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <p className="text-white/70 font-mono text-xs leading-relaxed">
                              If <span className="text-white font-semibold">Claude 3 Opus</span> was better suited for math or complex logical reasoning, the system would route the request accordingly.
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <p className="text-white/70 font-mono text-xs leading-relaxed">
                              If <span className="text-white font-semibold">GPT-3.5</span> was optimal for generative writing, that model would be prioritized.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Images */}
                    <div className="space-y-6">
                      <div className="relative flex justify-center">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 max-w-md w-full">
                          <img
                            src="/Projects/Boltzman AI/26E52750-FCB5-41E4-84EA-8503EFED8CB3.jpeg"
                            alt="LLM Orchestration"
                            className="w-full h-auto rounded-lg object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl blur-xl -z-10"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10 max-w-md w-full">
                          <img
                            src="/Projects/Boltzman AI/6A2EA0F4-525B-41B4-B219-04EC5D1EC5F6.jpeg"
                            alt="LLM Selection"
                            className="w-full h-auto rounded-lg object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-xl blur-xl -z-10"></div>
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-indigo-500/30">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-indigo-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">Result</h4>
                        <p className="text-white/90 font-mono text-sm leading-relaxed">
                          By granting the system access to a diverse array of models—including offerings from OpenAI, Anthropic, Google, Meta, and others—Boltzman achieved a "superpower" in execution, resulting in higher quality and more reliable outcomes across a vast spectrum of tasks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhancing Autonomy Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center border border-violet-500/30">
                    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">Enhancing Autonomy</h2>
                    <p className="text-white/60 font-mono text-sm">The Toolbox and the LLM Orchestration Layer</p>
                  </div>
                </div>

                {/* Core Goal Introduction */}
                <div className="bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 rounded-xl p-6 border border-violet-500/20 mb-10">
                  <p className="text-white/90 font-mono text-sm leading-relaxed text-center">
                    The foundational goal of Boltzman is to achieve <span className="text-violet-400 font-semibold">true universal AI autonomy</span> by solving the execution constraint. This autonomy is achieved by strategically equipping the system with two critical resource layers: <span className="text-fuchsia-400 font-semibold">specialized expertise (LLMs)</span> and <span className="text-purple-400 font-semibold">essential tools (Software Integration)</span>.
                  </p>
                </div>

                {/* Section I: The Toolkit */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-emerald-500/30">
                      <span className="text-emerald-400 font-serif text-xl font-bold">I</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white">The Toolkit</h3>
                  </div>
                  <p className="text-white/70 font-mono text-sm mb-6 leading-relaxed italic">
                    Equipping the Agent for Action
                  </p>

                  {/* Problem-Driven Development */}
                  <div className="bg-white/5 rounded-lg p-5 border border-white/10 mb-6">
                    <div className="flex items-start gap-3 mb-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <div className="flex-1">
                        <h4 className="text-emerald-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">Problem-Driven Tool Development</h4>
                        <p className="text-white/80 font-mono text-sm leading-relaxed">
                          Our initial user research with target professionals identified high-frequency, manual workflows that demanded specific, non-chat solutions. We developed a Tools Marketplace to provide the Large Language Models (LLMs) with the necessary functional assets to perform complex, multi-step actions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Available Tools */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-lg p-4 border border-teal-500/20">
                      <h4 className="text-teal-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Available Tools
                      </h4>
                      <div className="space-y-2">
                        {['YouTube Transcriber', 'Image Generator', 'Text to Speech'].map((tool, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                            <span className="text-white/80 font-mono text-xs">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-4 border border-blue-500/20">
                      <h4 className="text-blue-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Planned Development
                      </h4>
                      <div className="space-y-2">
                        {['Website Scraper', 'Audio Transcriber'].map((tool, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                            <span className="text-white/70 font-mono text-xs">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* The Outcome */}
                  <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-5 border border-emerald-500/30">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-white/90 font-mono text-sm leading-relaxed">
                        <span className="text-emerald-400 font-semibold">The Outcome:</span> The AI system now has the required instruments to move beyond simple chat responses and actively perform complex tasks in the user's digital environment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

                {/* Section II: LLM Orchestration */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/30">
                      <span className="text-indigo-400 font-serif text-xl font-bold">II</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white">LLM Orchestration</h3>
                  </div>
                  <p className="text-white/70 font-mono text-sm mb-6 leading-relaxed italic">
                    The Algorithmic Expertise
                  </p>

                  {/* Introduction */}
                  <div className="bg-white/5 rounded-lg p-5 border border-white/10 mb-6">
                    <p className="text-white/80 font-mono text-sm leading-relaxed">
                      To maximize the quality and efficiency of task execution, we implemented a sophisticated system for model selection.
                    </p>
                  </div>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Left Column - Content */}
                    <div className="space-y-6">
                      {/* Diverse Model Access */}
                      <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg p-5 border border-indigo-500/20">
                        <h4 className="text-indigo-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          Diverse Model Access
                        </h4>
                        <p className="text-white/80 font-mono text-xs leading-relaxed mb-3">
                          We equipped our system with a wide array of models from leading providers:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['OpenAI', 'Anthropic', 'Google', 'Meta', 'Mistral', 'DeepSeek'].map((provider, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-white/70 font-mono text-xs border border-white/10">
                              {provider}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Strategic Delegation */}
                      <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-lg p-5 border border-purple-500/20">
                        <h4 className="text-purple-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Strategic Delegation
                        </h4>
                        <p className="text-white/80 font-mono text-xs leading-relaxed mb-4">
                          The core logic of the Boltzman engine dictates that when an action is required, the system delegates the task to the LLM best suited for that specific constraint.
                        </p>
                        <div className="space-y-3">
                          <div className="bg-black/30 rounded-lg p-3 border border-purple-500/20">
                            <p className="text-white/90 font-mono text-xs leading-relaxed">
                              <span className="text-purple-400 font-semibold">Deep reasoning</span> → DeepSeek R1
                            </p>
                          </div>
                          <div className="bg-black/30 rounded-lg p-3 border border-purple-500/20">
                            <p className="text-white/90 font-mono text-xs leading-relaxed">
                              <span className="text-purple-400 font-semibold">Logical/mathematical processing</span> → Claude 3 Opus
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="flex justify-center items-start">
                      <div className="relative w-full max-w-xl">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <img
                            src="/Projects/Boltzman AI/413D456D-B9AC-4B2F-8B12-3E631B89240F.jpeg"
                            alt="LLM Orchestration Layer"
                            className="w-full h-auto rounded-lg object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-violet-500/10 rounded-xl blur-xl -z-10"></div>
                      </div>
                    </div>
                  </div>

                  {/* Final Result */}
                  <div className="bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-indigo-500/20 rounded-xl p-6 border border-violet-500/30">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-violet-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">Result</h4>
                        <p className="text-white/90 font-mono text-sm leading-relaxed">
                          By combining this deep toolbox with a dynamic LLM orchestration layer, Boltzman effectively solves the constraints of execution and accelerates its journey toward becoming a truly autonomous universal AI system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contextual Command: Memory and Integration Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header with Different Color Scheme */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center border border-teal-500/30">
                    <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">Contextual Command</h2>
                    <p className="text-white/60 font-mono text-sm">The Memory and Integration Pillars</p>
                  </div>
                </div>

                {/* Introduction */}
                <div className="bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-teal-500/20 mb-10">
                  <p className="text-white/90 font-mono text-sm leading-relaxed text-center">
                    For Boltzman to evolve from a simple chat interface into a <span className="text-teal-400 font-semibold">truly autonomous agent</span>, it required two critical capabilities: <span className="text-cyan-400 font-semibold">deep memory for intent</span>, and <span className="text-blue-400 font-semibold">secure access to the user's digital environment for action</span>.
                  </p>
                </div>

                {/* Section I: Long-Form Memory */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center border border-teal-500/30">
                      <span className="text-teal-400 font-serif text-xl font-bold">I</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white">Long-Form Memory</h3>
                  </div>
                  <p className="text-white/70 font-mono text-sm mb-6 leading-relaxed italic">
                    Building Context
                  </p>

                  {/* Content with Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-6">
                    {/* Left: Text Content */}
                    <div className="space-y-5">
                      <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-lg p-5 border border-teal-500/20">
                        <h4 className="text-teal-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          Knowledge Base Creation
                        </h4>
                        <p className="text-white/80 font-mono text-sm leading-relaxed mb-3">
                          Users were allowed to create a knowledge base or memory for the system.
                        </p>
                        <div className="bg-black/30 rounded-lg p-3 border border-teal-500/20">
                          <p className="text-teal-300 font-mono text-xs leading-relaxed italic">
                            <span className="text-white font-semibold">Purpose:</span> This ensured the underlying algorithms and LLMs had the maximum amount of contextual information available to make the most informed decisions when performing tasks.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Image */}
                    <div className="flex justify-center">
                      <div className="relative w-full max-w-md">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <img
                            src="/Projects/Boltzman AI/6C74FEC1-5539-4B74-AB5C-4654A59BAD10.jpeg"
                            alt="Long-Form Memory"
                            className="w-full h-auto rounded-lg object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl blur-xl -z-10"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

                {/* Section II: Integrations */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                      <span className="text-cyan-400 font-serif text-xl font-bold">II</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white">Integrations</h3>
                  </div>
                  <p className="text-white/70 font-mono text-sm mb-6 leading-relaxed italic">
                    The Hub for Action and Retrieval
                  </p>

                  {/* Introduction */}
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-5 border border-cyan-500/20 mb-8">
                    <p className="text-white/80 font-mono text-sm leading-relaxed">
                      The Integrations pillar solves the "where" of execution, allowing Boltzman to seamlessly operate across the user's fragmented digital workspace.
                    </p>
                  </div>

                  {/* Content with Image - Reversed Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                    {/* Left: Image */}
                    <div className="flex justify-center order-2 lg:order-1">
                      <div className="relative w-full max-w-md">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <img
                            src="/Projects/Boltzman AI/A5B9D7E8-70DE-48E3-AFDF-FE80BC166F26.png"
                            alt="Integrations"
                            className="w-full h-auto rounded-lg object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl blur-xl -z-10"></div>
                      </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-6 order-1 lg:order-2">
                      {/* Access and Authorization */}
                      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-5 border border-blue-500/20">
                        <h4 className="text-blue-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Access and Authorization
                        </h4>
                        <p className="text-white/80 font-mono text-sm leading-relaxed mb-3">
                          Users were provided with the ability to integrate with essential third-party applications:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Notion', 'Google Drive', 'Slack', 'Google Docs', 'N8N', 'ClickUp', 'SurveyMonkey'].map((app, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-white/10 rounded-lg text-white/90 font-mono text-xs border border-blue-500/20">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Dual Functionality */}
                      <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-lg p-5 border border-cyan-500/20">
                        <h4 className="text-cyan-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          Dual Functionality
                        </h4>
                        <p className="text-white/80 font-mono text-xs leading-relaxed mb-4">
                          These integrations serve a dual purpose for the LLMs:
                        </p>
                        <div className="space-y-3">
                          <div className="bg-black/30 rounded-lg p-3 border border-cyan-500/20">
                            <div className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                              <div>
                                <p className="text-cyan-400 font-semibold font-mono text-xs mb-1">Retrieval</p>
                                <p className="text-white/70 font-mono text-xs leading-relaxed">
                                  They provide secure locations to retrieve information (e.g., pulling a file from Google Drive or Slack).
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-black/30 rounded-lg p-3 border border-cyan-500/20">
                            <div className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                              <div>
                                <p className="text-cyan-400 font-semibold font-mono text-xs mb-1">Execution</p>
                                <p className="text-white/70 font-mono text-xs leading-relaxed">
                                  They give the system the necessary authority and location to execute actions (e.g., creating a document or sending a message) within the user's preferred apps.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Result */}
                <div className="bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-teal-500/30">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/90 font-mono text-sm leading-relaxed">
                        By combining <span className="text-teal-400 font-semibold">deep contextual memory</span> with <span className="text-cyan-400 font-semibold">robust, integrated action capabilities</span>, Boltzman fulfills the requirement of an autonomous universal AI system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dual Utility: The Consolidated Toolkit Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/30">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">Dual Utility</h2>
                    <p className="text-white/60 font-mono text-sm">The Consolidated Toolkit</p>
                  </div>
                </div>

                {/* Introduction */}
                <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 rounded-xl p-6 border border-amber-500/20 mb-10">
                  <p className="text-white/90 font-mono text-sm leading-relaxed text-center">
                    While the primary function of the Tools Marketplace is to equip the Boltzman Engine with assets for autonomous orchestration, a <span className="text-amber-400 font-semibold">significant side benefit</span> is the consolidation of fragmented utilities for the end-user.
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Left Column - Text Content */}
                  <div className="space-y-6">
                    {/* Solving Tool Fragmentation */}
                    <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-lg p-5 border border-amber-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <div className="flex-1">
                          <h4 className="text-amber-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">Solving Tool Fragmentation</h4>
                          <p className="text-white/80 font-mono text-sm leading-relaxed mb-3">
                            The tools developed for the AI's use are also some of the most commonly used utilities by humans digitally. These functions—such as the YouTube Transcriber, Image Generator, and Website Scraper—are typically scattered across different platforms on the internet.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* The Single-Roof Advantage */}
                    <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-lg p-5 border border-orange-500/20">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <div className="flex-1">
                          <h4 className="text-orange-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">The Single-Roof Advantage</h4>
                          <p className="text-white/80 font-mono text-sm leading-relaxed">
                            Boltzman provides a unique value proposition by serving as a single, consolidated platform where all these essential tools reside under one roof.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  <div className="flex justify-center items-start">
                    <div className="relative w-full max-w-xl">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <img
                          src="/Projects/Boltzman AI/6BDB30F1-AF91-404A-931D-1703633390D3_1_102_o.jpeg"
                          alt="Consolidated Toolkit"
                          className="w-full h-auto rounded-lg object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-yellow-500/10 rounded-xl blur-xl -z-10"></div>
                    </div>
                  </div>
                </div>

                {/* Dual Access Section */}
                <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-xl p-6 border border-yellow-500/20">
                  <h4 className="text-yellow-400 font-semibold mb-4 font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    Dual Access
                  </h4>
                  <p className="text-white/80 font-mono text-sm leading-relaxed mb-6">
                    This ensures the tools can be used in two distinct ways:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* AI Orchestration */}
                    <div className="bg-black/30 rounded-lg p-4 border border-amber-500/20">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-amber-400 font-semibold mb-2 font-mono text-xs uppercase tracking-wide">AI Orchestration</h5>
                          <p className="text-white/70 font-mono text-xs leading-relaxed">
                            The Boltzman algorithm can autonomously leverage the tools to execute complex, multi-step actions.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Human Utility */}
                    <div className="bg-black/30 rounded-lg p-4 border border-orange-500/20">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h5 className="text-orange-400 font-semibold mb-2 font-mono text-xs uppercase tracking-wide">Human Utility</h5>
                          <p className="text-white/70 font-mono text-xs leading-relaxed">
                            Users can access and use these tools in isolation for quick, one-off tasks without initiating a full AI workflow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Defining the Research Experience Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center border border-emerald-500/30">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">Defining the Research Experience</h2>
                    <p className="text-white/60 font-mono text-sm">Features for Trust and Workflow</p>
                  </div>
                </div>

                {/* Introduction */}
                <div className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/20 mb-10">
                  <p className="text-white/90 font-mono text-sm leading-relaxed text-center">
                    Our experience-shaping features were designed specifically to address high-friction points identified by our target users, primarily researchers and students, which positioned Boltzman <span className="text-emerald-400 font-semibold">ahead of early incumbent AI assistants</span>.
                  </p>
                </div>

                {/* Section I: Source Citation */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center border border-emerald-500/30">
                      <span className="text-emerald-400 font-serif text-xl font-bold">I</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white">Source Citation</h3>
                  </div>
                  <p className="text-white/70 font-mono text-sm mb-6 leading-relaxed italic">
                    Solving for Trust and Verifiability
                  </p>

                  {/* Problem Statement */}
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-lg p-5 border border-red-500/20 mb-6">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div className="flex-1">
                        <p className="text-white/80 font-mono text-sm leading-relaxed">
                          A major complaint from researchers and students regarding early AI models was <span className="text-red-400 font-semibold">hallucination and the lack of source verification</span>. We solved this by making source transparency a foundational feature.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Solution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Transparency by Default */}
                    <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-lg p-5 border border-emerald-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <div className="flex-1">
                          <h4 className="text-emerald-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">Transparency by Default</h4>
                          <p className="text-white/80 font-mono text-xs leading-relaxed">
                            During every search—whether executed autonomously by the Boltzman Engine or through a tool used in isolation—the system provides clear source citation.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* User Empowerment */}
                    <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-lg p-5 border border-green-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="flex-1">
                          <h4 className="text-green-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">User Empowerment</h4>
                          <p className="text-white/80 font-mono text-xs leading-relaxed">
                            Users can vividly see exactly where the answers are coming from. This capability aligns with the Resources panel, where users can confirm if the answer is derived from items they added to their knowledge base (e.g., Notion, Google Drive).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

                {/* Section II: Canvas and Threads */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center border border-teal-500/30">
                      <span className="text-teal-400 font-serif text-xl font-bold">II</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-white">Canvas and Threads</h3>
                  </div>
                  <p className="text-white/70 font-mono text-sm mb-6 leading-relaxed italic">
                    Enhancing Study Workflow
                  </p>

                  {/* Introduction */}
                  <div className="bg-white/5 rounded-lg p-5 border border-white/10 mb-8">
                    <p className="text-white/80 font-mono text-sm leading-relaxed">
                      We observed that researchers and students often needed dedicated space for synthesis and clarification while using the platform.
                    </p>
                  </div>

                  {/* Two Column Layout with Image */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Left Column - Features */}
                    <div className="space-y-6">
                      {/* Canvas */}
                      <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-lg p-5 border border-teal-500/20">
                        <div className="flex items-start gap-3 mb-3">
                          <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <div className="flex-1">
                            <h4 className="text-teal-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">Canvas (Internal Whiteboard)</h4>
                            <p className="text-white/80 font-mono text-xs leading-relaxed mb-2">
                              We realized that users needed a place to take notes and write down thoughts while conducting research.
                            </p>
                            <p className="text-white/70 font-mono text-xs leading-relaxed italic">
                              We built an integrated whiteboard called Canvas that allows users to capture ideas and notes without leaving the research tab.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Threads */}
                      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-5 border border-cyan-500/20">
                        <div className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <div className="flex-1">
                            <h4 className="text-cyan-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">Threads (Deep Clarification)</h4>
                            <p className="text-white/80 font-mono text-xs leading-relaxed mb-2">
                              To support deep comprehension, users were allowed to highlight words they didn't understand and initiate a Thread.
                            </p>
                            <p className="text-white/70 font-mono text-xs leading-relaxed italic">
                              This feature enables users to have a continuous, back-and-forth conversation with the system until the concept is fully clarified.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="flex justify-center items-start">
                      <div className="relative w-full max-w-xl">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <img
                            src="/Projects/Boltzman AI/Group 9.svg"
                            alt="Canvas and Threads Features"
                            className="w-full h-auto rounded-lg object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl blur-xl -z-10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Algorithmic Objective Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center border border-rose-500/30">
                    <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">The Boltzman Engine</h2>
                    <p className="text-white/60 font-mono text-sm">Core Algorithmic Objective</p>
                  </div>
                </div>

                {/* Text Content */}
                <div className="bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-fuchsia-500/10 rounded-xl p-6 border border-rose-500/20 mb-8">
                  <p className="text-white/90 font-mono text-lg leading-relaxed text-center">
                    The core algorithmic objective of the Boltzman Engine is to <span className="text-rose-400 font-semibold">accurately infer and fulfill the user's underlying intent</span> with every query.
                  </p>
                </div>

                {/* Browser Frame with Image */}
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
                      {/* Browser Header */}
                      <div className="bg-[#2a2a2a] rounded-t-lg p-2 flex items-center gap-2 border-b border-gray-700">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 bg-[#3a3a3a] rounded px-4 py-1 text-xs text-gray-400 text-center font-mono">
                          boltzman.ai
                        </div>
                      </div>
                      {/* Browser Content */}
                      <div className="bg-[#1a1a1a] rounded-b-lg overflow-hidden">
                        <div className="p-6">
                          <img
                            src="/Projects/Boltzman AI/uuid=695A573D-E53C-4731-95B9-9A337DB5109A&code=001&library=1&type=1&mode=1&loc=true&cap=true.jpeg"
                            alt="Boltzman Engine Intent Inference"
                            className="w-full h-auto rounded-lg object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monetization Strategy Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center border border-yellow-500/30">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">Monetization Strategy</h2>
                    <p className="text-white/60 font-mono text-sm">Free Utility vs. Agentic Autonomy</p>
                  </div>
                </div>

                {/* Introduction */}
                <div className="bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20 mb-10">
                  <p className="text-white/90 font-mono text-sm leading-relaxed text-center">
                    Boltzman's monetization strategy was designed to align feature access with user value and the <span className="text-yellow-400 font-semibold">computational cost of advanced AI orchestration</span>.
                  </p>
                </div>

                {/* Two Column Layout - Tiers */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                  {/* Free Tier */}
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl text-white">The Free Tier</h3>
                    </div>
                    <p className="text-green-400 font-semibold mb-4 font-mono text-sm uppercase tracking-wide">Utility</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-white/80 font-mono text-sm leading-relaxed">
                          The majority of individual tools and basic functionalities are available for free use.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-white/80 font-mono text-sm leading-relaxed">
                          Users can utilize features like the Image Generator and other common utilities in isolation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pro Tier */}
                  <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-xl p-6 border border-yellow-500/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                        <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl text-white">The Pro Tier</h3>
                    </div>
                    <p className="text-yellow-400 font-semibold mb-2 font-mono text-sm uppercase tracking-wide">The Agentic Advantage</p>
                    <div className="mb-4 p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                      <p className="text-yellow-300 font-mono text-lg font-bold text-center">
                        $20.00 <span className="text-yellow-400 text-sm font-normal">/ monthly</span>
                      </p>
                    </div>
                    <p className="text-white/80 font-mono text-xs leading-relaxed mb-4">
                      To access the full power of the orchestrated AI system—the core value proposition of Boltzman—users subscribe to the Pro Plan.
                    </p>
                    <p className="text-white/70 font-mono text-xs italic">
                      This subscription unlocks features critical to the universal AI agent model.
                    </p>
                  </div>
                </div>

                {/* Pro Tier Features */}
                <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-xl p-6 border border-yellow-500/20 mb-10">
                  <h4 className="text-yellow-400 font-semibold mb-4 font-mono text-sm uppercase tracking-wide">Pro Plan Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/30 rounded-lg p-4 border border-yellow-500/20">
                      <div className="flex items-start gap-2 mb-2">
                        <svg className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h5 className="text-yellow-400 font-semibold font-mono text-xs uppercase">Agentic Orchestration</h5>
                      </div>
                      <p className="text-white/70 font-mono text-xs leading-relaxed">
                        Full access to the orchestration layer, enabling AI to autonomously execute complex, multi-step tasks across integrations.
                      </p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4 border border-yellow-500/20">
                      <div className="flex items-start gap-2 mb-2">
                        <svg className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h5 className="text-yellow-400 font-semibold font-mono text-xs uppercase">Unlimited Usage</h5>
                      </div>
                      <p className="text-white/70 font-mono text-xs leading-relaxed">
                        Unlimited AI searches and conversations.
                      </p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4 border border-yellow-500/20">
                      <div className="flex items-start gap-2 mb-2">
                        <svg className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h5 className="text-yellow-400 font-semibold font-mono text-xs uppercase">Advanced Features</h5>
                      </div>
                      <p className="text-white/70 font-mono text-xs leading-relaxed">
                        Access to advanced features, integrations, and priority support.
                      </p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4 border border-yellow-500/20">
                      <div className="flex items-start gap-2 mb-2">
                        <svg className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h5 className="text-yellow-400 font-semibold font-mono text-xs uppercase">LLM Customization</h5>
                      </div>
                      <p className="text-white/70 font-mono text-xs leading-relaxed">
                        Custom AI model configurations, including Pro-only LLMs like GPT-4.5 Preview, DeepSeek R1, and others.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Image and Video Demo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Mobile Image */}
                  <div className="flex justify-center">
                    <div className="relative max-w-sm w-full">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <img
                          src="/Projects/Boltzman AI/uuid=4BFFD134-5632-4A4B-BFBD-862A84C1FB81&code=001&library=1&type=1&mode=1&loc=true&cap=true.jpeg"
                          alt="Monetization Strategy Mobile"
                          className="w-full h-auto rounded-lg object-contain"
                          loading="lazy"
                        />
                      </div>
                      {/* Decorative glow */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-orange-500/10 rounded-xl blur-xl -z-10"></div>
                    </div>
                  </div>

                  {/* YouTube Video Demo */}
                  <div className="flex justify-center items-center">
                    <div className="relative w-full max-w-lg">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10 overflow-hidden">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/yUmDaKlBvCc"
                            title="Boltzman Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                      {/* Decorative glow */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-orange-500/10 rounded-xl blur-xl -z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reflection Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/30">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">Reflection</h2>
                    <p className="text-white/60 font-mono text-sm">Building a Universal AI with Limited Resources</p>
                  </div>
                </div>

                {/* Introduction */}
                <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-xl p-6 border border-amber-500/20 mb-10">
                  <p className="text-white/90 font-mono text-sm leading-relaxed text-center">
                    This project represents a <span className="text-amber-400 font-semibold">high-leverage exercise in product creation</span>, demonstrating that a true universal AI assistant could be built with just two people. It provided invaluable lessons in three critical areas:
                  </p>
                </div>

                {/* Three Key Lessons */}
                <div className="space-y-8">
                  {/* Lesson 1 */}
                  <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-500/20">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center border border-blue-500/30">
                          <span className="text-blue-400 font-serif text-2xl font-bold">1</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-blue-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide">Product Strategy & Taste (Finding the Edge)</h3>
                        <p className="text-white/80 font-mono text-sm leading-relaxed mb-3">
                          I learned the profound importance of "product taste"—the ability to identify and execute on nuanced user pain points that competitors overlook. This insight allowed us to carve out a competitive advantage in a crowded market where incumbents possessed far greater resources and traction.
                        </p>
                        <div className="bg-black/30 rounded-lg p-4 border border-blue-500/20">
                          <p className="text-white/70 font-mono text-xs leading-relaxed italic">
                            By focusing on fundamental issues like source citation, threads, and internal notetaking, we designed an experience that resonated deeply with our target users (students and researchers).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lesson 2 */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                          <span className="text-purple-400 font-serif text-2xl font-bold">2</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-purple-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide">Technicality & Execution</h3>
                        <p className="text-white/80 font-mono text-sm leading-relaxed mb-3">
                          This venture was a masterclass in technical leadership and feasibility. I dramatically enhanced my coding skills and learned how to deeply conceptualize a product—translating complex product ideas into engineering reality.
                        </p>
                        <div className="bg-black/30 rounded-lg p-4 border border-purple-500/20">
                          <p className="text-white/70 font-mono text-xs leading-relaxed italic">
                            This included designing the orchestration layer, integrating various LLMs, and building the necessary tools for autonomous action.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lesson 3 */}
                  <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/20">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center border border-emerald-500/30">
                          <span className="text-emerald-400 font-serif text-2xl font-bold">3</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-emerald-400 font-semibold mb-3 font-mono text-sm uppercase tracking-wide">Personal Drive & Growth</h3>
                        <p className="text-white/80 font-mono text-sm leading-relaxed mb-3">
                          Beyond product development, I demonstrated exceptional dedication to execution and distribution. I personally led our early growth efforts, visiting universities, giving talks, and distributing physical marketing materials (flyers at schools, malls, and train stations).
                        </p>
                        <div className="bg-black/30 rounded-lg p-4 border border-emerald-500/20">
                          <p className="text-white/70 font-mono text-xs leading-relaxed italic">
                            This rigorous grassroots approach proved highly effective, enabling us to sustain an early growth rate of <span className="text-emerald-400 font-semibold">80 new users per day</span>. This experience underscored my ability to push personal boundaries and successfully drive rapid user acquisition.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/30">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">The Team</h2>
                    <p className="text-white/60 font-mono text-sm">Building Together</p>
                  </div>
                </div>

                {/* Team Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Image 1 */}
                  <div className="relative group">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-indigo-500/30 group-hover:shadow-lg group-hover:shadow-indigo-500/10">
                      <img
                        src="/Projects/Boltzman AI/uuid=BD016AC9-281D-44DD-9DB2-B48538D05B7A&code=001&library=1&type=1&mode=1&loc=true&cap=true.jpeg"
                        alt="Team Member"
                        className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                    {/* Decorative gradient overlay */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>

                  {/* Image 2 */}
                  <div className="relative group">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-purple-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                      <img
                        src="/Projects/Boltzman AI/uuid=4A991D1E-E894-491B-93D0-D37B1E896AB6&code=001&library=1&type=1&mode=1&loc=true&cap=true.jpeg"
                        alt="Team Member"
                        className="w-full h-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                    {/* Decorative gradient overlay */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                </div>

                {/* Team Message */}
                <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/90 font-mono text-sm leading-relaxed">
                        <span className="text-indigo-400 font-semibold">Liam Du</span> taught me a lot and we had a lot of fun building the Boltzman Engine, in great engineering feat in our view, we did something in <span className="text-purple-400 font-semibold">2 months</span> what takes teams <span className="text-pink-400 font-semibold">months with way more people</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Boltzman Voice-specific content */}
        {project.title === 'Boltzman Voice' && (
          <>
            {/* Summary and Profile Cards - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Summary Card - First */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                <h2 className="font-serif text-xl text-white mb-4">Summary</h2>
                <p className="text-normal-text font-mono text-sm leading-relaxed">
                  Boltzman Voice was created as a strategic extension of the Boltzman Engine, developed after power user interviews highlighted the need to establish a moat against market incumbents. It addresses the need for seamless productivity when screens are inaccessible. Unlike traditional voice assistants that are limited to simple chat, Boltzman Voice retains full connectivity—it integrates with your favorite apps to access all your data and execute actions entirely by voice, allowing you to continue working even when you can't reach your phone or laptop.
                </p>
              </div>

              {/* Profile Card - Second */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
                <h2 className="font-serif text-xl text-white mb-4">Profile</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Role</p>
                    <p className="text-white font-mono text-sm">Chief Executive Officer & Part time Product Manager</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Team</p>
                    <p className="text-white font-mono text-sm">2 People</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Timeline</p>
                    <p className="text-white font-mono text-sm">1 Week</p>
                  </div>
                  <div>
                    <p className="text-white/60 font-mono text-xs mb-1">Fundraise</p>
                    <p className="text-white font-mono text-sm">$0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem VS Solution Section - Vertical Stack Design */}
            <div className="mb-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">The Challenge</h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-red-500/50 w-32"></div>
                  <div className="px-4 py-2 bg-white/5 rounded-full border border-white/20">
                    <span className="text-white/60 font-mono text-sm">PROBLEM → SOLUTION</span>
                  </div>
                  <div className="h-px bg-gradient-to-l from-transparent via-green-500/50 to-green-500/50 w-32"></div>
                </div>
              </div>

              {/* Problem Card - Top */}
              <div className="relative mb-8">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent rounded-3xl blur-2xl"></div>
                
                <div className="relative bg-gradient-to-br from-red-950/40 via-orange-950/30 to-red-950/20 backdrop-blur-sm rounded-3xl border-2 border-red-500/40 p-8 md:p-10">
                  {/* Problem Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/20 flex items-center justify-center border-2 border-red-400/50 shadow-lg shadow-red-500/20">
                      <svg className="w-7 h-7 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-white mb-2">The Problem</h3>
                      <p className="text-red-300/80 font-mono text-sm">The "Screen Constraint" & Unproductive Dead Time</p>
                    </div>
                  </div>

                  {/* Problem Points */}
                  <div className="space-y-5">
                    {/* Point 1 */}
                    <div className="bg-black/40 rounded-2xl p-5 border border-red-500/30 hover:border-red-400/50 transition-all hover:shadow-lg hover:shadow-red-500/10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/30 to-orange-500/20 flex items-center justify-center border border-red-400/40">
                          <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-2 font-mono text-base">The "Hands-Busy" Gap</h4>
                          <p className="text-white/75 font-mono text-sm leading-relaxed">
                            Professionals in manual industries (medical, field service, culinary) often cannot access digital tools because their hands are occupied, dirty, or sterile. For example, surgeons can't touch screens to access patient records, and technicians can't order parts while fixing equipment.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Point 2 */}
                    <div className="bg-black/40 rounded-2xl p-5 border border-red-500/30 hover:border-red-400/50 transition-all hover:shadow-lg hover:shadow-red-500/10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/30 to-orange-500/20 flex items-center justify-center border border-red-400/40">
                          <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-2 font-mono text-base">Wasted "Dead Time"</h4>
                          <p className="text-white/75 font-mono text-sm leading-relaxed">
                            Knowledge workers, executives, and students lose valuable productivity during downtime activities—like commuting, cooking, hiking, or working out—because they cannot physically interact with a laptop or phone.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Point 3 */}
                    <div className="bg-black/40 rounded-2xl p-5 border border-red-500/30 hover:border-red-400/50 transition-all hover:shadow-lg hover:shadow-red-500/10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/30 to-orange-500/20 flex items-center justify-center border border-red-400/40">
                          <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-2 font-mono text-base">High Opportunity Cost</h4>
                          <p className="text-white/75 font-mono text-sm leading-relaxed">
                            Executives and founders waste 1-2 hours daily commuting, unable to process information, make decisions, or stay on top of communications without constant device checking.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Arrow/Divider */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-px h-16 bg-gradient-to-b from-red-500/50 via-green-500/50 to-green-500/50"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-green-500/20 border-2 border-green-400/50 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Solution Card - Bottom */}
              <div className="relative">
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent rounded-3xl blur-2xl"></div>
                
                <div className="relative bg-gradient-to-br from-green-950/40 via-emerald-950/30 to-green-950/20 backdrop-blur-sm rounded-3xl border-2 border-green-500/40 p-8 md:p-10">
                  {/* Solution Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/20 flex items-center justify-center border-2 border-green-400/50 shadow-lg shadow-green-500/20">
                      <svg className="w-7 h-7 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-white mb-2">The Solution</h3>
                      <p className="text-green-300/80 font-mono text-sm">Boltzman Voice (Ubiquitous Workflow Execution)</p>
                    </div>
                  </div>

                  {/* Solution Description */}
                  <div className="bg-black/40 rounded-2xl p-6 border border-green-500/30 mb-6">
                    <p className="text-white/85 font-mono text-base leading-relaxed">
                      Boltzman Voice is a voice-first interface designed to allow users to "still get work done" entirely by voice when screens are inaccessible.
                    </p>
                  </div>

                  {/* Solution Points */}
                  <div className="space-y-5">
                    {/* Point 1 */}
                    <div className="bg-black/40 rounded-2xl p-5 border border-green-500/30 hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-500/10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-500/20 flex items-center justify-center border border-green-400/40">
                          <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-2 font-mono text-base">Work Beyond the Screen</h4>
                          <p className="text-white/75 font-mono text-sm leading-relaxed">
                            Boltzman Voice is a voice-first interface designed to allow users to "still get work done" entirely by voice when screens are inaccessible.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Point 2 */}
                    <div className="bg-black/40 rounded-2xl p-5 border border-green-500/30 hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-500/10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-500/20 flex items-center justify-center border border-green-400/40">
                          <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-2 font-mono text-base">Action, Not Just Chat</h4>
                          <p className="text-white/75 font-mono text-sm leading-relaxed">
                            Unlike standard assistants that only summarize or chat, Boltzman Voice connects to the user's tools to transform workflows—enabling actions like real-time documentation, inventory ordering, and safety protocol verification without stopping physical work.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Point 3 */}
                    <div className="bg-black/40 rounded-2xl p-5 border border-green-500/30 hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-500/10">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-500/20 flex items-center justify-center border border-green-400/40">
                          <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-2 font-mono text-base">Maximizing ROI on Time</h4>
                          <p className="text-white/75 font-mono text-sm leading-relaxed">
                            It converts "dead time" into productive hours, allowing students to learn while walking and executives to manage workflows during drives, effectively solving the constraint of physical limitations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage in Action Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-10">
                {/* Header */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-400/30">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-white">Usage in Action</h2>
                  </div>
                  <p className="text-white/60 font-mono text-sm">Real-World Scenarios</p>
                </div>

                {/* Real-World Scenarios Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {/* The Student */}
                  <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl text-white">The Student</h3>
                    </div>
                    <p className="text-white/80 font-mono text-sm leading-relaxed italic">
                      "Turning a 45-minute commute into an active study session for upcoming exams."
                    </p>
                  </div>

                  {/* The Executive */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-400/30">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl text-white">The Executive</h3>
                    </div>
                    <p className="text-white/80 font-mono text-sm leading-relaxed italic">
                      "Perfecting a keynote presentation and strategy notes during a morning workout."
                    </p>
                  </div>

                  {/* The Busy Pro */}
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/5 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-400/30">
                        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl text-white">The Busy Pro</h3>
                    </div>
                    <p className="text-white/80 font-mono text-sm leading-relaxed italic">
                      "Clearing the daily inbox and managing to-do lists hands-free while preparing dinner."
                    </p>
                  </div>
                </div>

                {/* Image Section */}
                <div className="mb-12">
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src="/Projects/BoltzmanVoice/BF68BAF3-2B8E-4629-B6B1-8A442085B824.jpeg"
                      alt="Boltzman Voice in Action"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* The Productivity Unlock Section */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/20 flex items-center justify-center border-2 border-green-400/50 shadow-lg shadow-green-500/20">
                      <svg className="w-7 h-7 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">The Productivity Unlock</h3>
                      <p className="text-green-300/80 font-mono text-sm">Unlock Your Hidden Hours</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Reclaim Time */}
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-xl p-6 border border-green-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-400/30">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-green-400 font-semibold font-mono text-sm">Reclaim Time</h4>
                      </div>
                      <p className="text-white/75 font-mono text-sm leading-relaxed">
                        Recover up to 14 hours of lost productivity every week by converting "dead time" into deep work.
                      </p>
                    </div>

                    {/* Zero Eye Strain */}
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-xl p-6 border border-green-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-400/30">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <h4 className="text-green-400 font-semibold font-mono text-sm">Zero Eye Strain</h4>
                      </div>
                      <p className="text-white/75 font-mono text-sm leading-relaxed">
                        Maintain full digital connectivity and workflow control without looking at a screen.
                      </p>
                    </div>

                    {/* Ubiquitous Access */}
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-xl p-6 border border-green-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-400/30">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-green-400 font-semibold font-mono text-sm">Ubiquitous Access</h4>
                      </div>
                      <p className="text-white/75 font-mono text-sm leading-relaxed">
                        Execute work and learning tasks in environments where screens were previously impossible (driving, cooking, hiking).
                      </p>
                    </div>
                  </div>
                </div>

                {/* How It Works Section */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center border-2 border-blue-400/50 shadow-lg shadow-blue-500/20">
                      <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">How It Works</h3>
                      <p className="text-blue-300/80 font-mono text-sm">Seamless Voice Execution</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Step 1: Sync */}
                    <div className="relative">
                      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center border-2 border-blue-400/50">
                        <span className="text-blue-300 font-bold font-mono text-sm">1</span>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-xl p-6 border border-blue-500/20 pt-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                          </div>
                          <h4 className="text-blue-400 font-semibold font-mono text-base">Sync</h4>
                        </div>
                        <p className="text-white/75 font-mono text-sm leading-relaxed">
                          Securely connect your digital ecosystem (Notion, Google Drive, GitHub) in one click.
                        </p>
                      </div>
                    </div>

                    {/* Step 2: Speak */}
                    <div className="relative">
                      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center border-2 border-blue-400/50">
                        <span className="text-blue-300 font-bold font-mono text-sm">2</span>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-xl p-6 border border-blue-500/20 pt-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                          </div>
                          <h4 className="text-blue-400 font-semibold font-mono text-base">Speak</h4>
                        </div>
                        <p className="text-white/75 font-mono text-sm leading-relaxed">
                          Issue natural voice commands, queries, or complex instructions on the go.
                        </p>
                      </div>
                    </div>

                    {/* Step 3: Execute */}
                    <div className="relative">
                      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center border-2 border-blue-400/50">
                        <span className="text-blue-300 font-bold font-mono text-sm">3</span>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-xl p-6 border border-blue-500/20 pt-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="text-blue-400 font-semibold font-mono text-base">Execute</h4>
                        </div>
                        <p className="text-white/75 font-mono text-sm leading-relaxed">
                          Receive instant, intelligent responses and perform actions tailored to your specific data and context.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-Life Use Cases: Personas Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-10">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-400/30">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-white">Real-Life Use Cases</h2>
                  </div>
                  <p className="text-white/60 font-mono text-sm">Personas in Action</p>
                </div>

                {/* Persona 1: The Student */}
                <div className="mb-12">
                  <div className="bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-blue-500/5 rounded-2xl border-2 border-blue-500/30 p-8 mb-6">
                    {/* Persona Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-indigo-500/20 flex items-center justify-center border-2 border-blue-400/50 shadow-lg shadow-blue-500/20">
                        <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">Persona 1: The Student</h3>
                        <p className="text-blue-300/80 font-mono text-sm">Academic Cramming</p>
                      </div>
                    </div>

                    {/* The Insight */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-blue-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h4 className="text-blue-400 font-semibold font-mono text-sm uppercase tracking-wide">The Insight</h4>
                      </div>
                      <p className="text-white/80 font-mono text-sm leading-relaxed">
                        Students often have 15-45 minute walking commutes between campus locations. They are stressed about exams but can't read notes while walking. They need an active tutor, not just a passive audiobook.
                      </p>
                    </div>

                    {/* The Workflow */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-blue-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h4 className="text-blue-400 font-semibold font-mono text-sm uppercase tracking-wide">The Workflow</h4>
                      </div>
                      <p className="text-white/80 font-mono text-sm leading-relaxed">
                        Walking to the Psychology Final Exam (30 mins).
                      </p>
                    </div>

                    {/* The Context */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-blue-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <h4 className="text-blue-400 font-semibold font-mono text-sm uppercase tracking-wide">The Context (What Boltzman Voice "Sees")</h4>
                      </div>
                      <div className="space-y-3 font-mono text-xs">
                        <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                          <span className="text-blue-300 font-semibold">[PDF]</span> <span className="text-white/70">Psych 101 Lecture Notes.pdf</span>
                          <p className="text-white/60 mt-1 leading-relaxed">Content: "Atkinson-Shiffrin Model: Sensory → Short Term → Long Term. Baddeley's Model: Central Executive, Phonological Loop. Interference: Proactive (old blocks new), Retroactive (new blocks old). Construction Errors: The mind fills gaps with logic, not fact."</p>
                        </div>
                        <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                          <span className="text-blue-300 font-semibold">[Video Transcript]</span> <span className="text-white/70">Memory Concepts Explained (YouTube)</span>
                          <p className="text-white/60 mt-1 leading-relaxed">Content: "04:12: The Misinformation Effect occurs when misleading info is incorporated into one's memory after an event. Example: The 'Car Crash' study where the word 'smashed' vs 'hit' changed speed estimates."</p>
                        </div>
                        <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                          <span className="text-blue-300 font-semibold">[Audio Transcript]</span> <span className="text-white/70">Finals Review Session.mp4</span>
                          <p className="text-white/60 mt-1 leading-relaxed">Content: "TA: 'Make sure you know the difference between Recall (fill-in-the-blank) and Recognition (multiple choice). We will test heavily on interference examples.'"</p>
                        </div>
                      </div>
                    </div>

                    {/* The Interaction */}
                    <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-xl p-6 border-2 border-blue-400/30">
                      <div className="flex items-start gap-3 mb-4">
                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <h4 className="text-blue-400 font-semibold font-mono text-sm uppercase tracking-wide">The Interaction (Boltzman Voice)</h4>
                      </div>
                      <div className="space-y-4 font-mono text-sm">
                        <div className="bg-black/40 rounded-lg p-4 border border-blue-500/20">
                          <p className="text-blue-300 mb-2"><span className="font-semibold">User:</span> "I have 30 minutes. Review the main memory models we covered."</p>
                          <p className="text-green-300"><span className="font-semibold">Boltzman:</span> "Okay. Based on your Lecture Notes, we need to cover Atkinson-Shiffrin and Baddeley. Atkinson focuses on the flow from Sensory to Long Term, while Baddeley emphasizes the 'Working Memory' components like the Phonological Loop. Want me to quiz you on the difference?"</p>
                        </div>
                        <div className="bg-black/40 rounded-lg p-4 border border-blue-500/20">
                          <p className="text-blue-300 mb-2"><span className="font-semibold">User:</span> "What did the TA say about the misinformation effect? That's likely on the test."</p>
                          <p className="text-green-300"><span className="font-semibold">Boltzman:</span> "In the review session recording, the TA explicitly linked the misinformation effect to the 'Car Crash' study mentioned in your YouTube video. He said to remember that word choice—like 'smashed' vs 'hit'—alters the memory construction."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Persona 2: The Parent */}
                <div className="mb-12">
                  <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-purple-500/5 rounded-2xl border-2 border-purple-500/30 p-8 mb-6">
                    {/* Persona Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/20 flex items-center justify-center border-2 border-purple-400/50 shadow-lg shadow-purple-500/20">
                        <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">Persona 2: The Parent</h3>
                        <p className="text-purple-300/80 font-mono text-sm">The Logistics Hub</p>
                      </div>
                    </div>

                    {/* The Insight */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-purple-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h4 className="text-purple-400 font-semibold font-mono text-sm uppercase tracking-wide">The Insight</h4>
                      </div>
                      <p className="text-white/80 font-mono text-sm leading-relaxed">
                        Parents operate as the "Central Processing Unit" for the family. Their "dead time" is the school run/drive. They suffer from fragmented info—data is scattered across texts, emails, and calendars, making mental synchronization impossible while driving.
                      </p>
                    </div>

                    {/* The Workflow */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-purple-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h4 className="text-purple-400 font-semibold font-mono text-sm uppercase tracking-wide">The Workflow</h4>
                      </div>
                      <p className="text-white/80 font-mono text-sm leading-relaxed">
                        Morning school drop-off and commute.
                      </p>
                    </div>

                    {/* The Context */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-purple-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <h4 className="text-purple-400 font-semibold font-mono text-sm uppercase tracking-wide">The Context (What Boltzman Voice "Sees")</h4>
                      </div>
                      <div className="space-y-3 font-mono text-xs">
                        <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                          <span className="text-purple-300 font-semibold">[Integration: G-Cal]</span> <span className="text-white/70">Family Hub</span>
                          <div className="text-white/60 mt-2 space-y-1">
                            <p>Event: "Emma - Soccer Practice" | Loc: Lincoln Fields | Time: 4:30-6:00pm</p>
                            <p>Event: "Noah - Piano Lesson" | Loc: Ms. Chen's | Time: 3:45-4:30pm</p>
                            <p>Note: "Wed Meal Plan: Chicken Stir-fry (Defrost AM)"</p>
                          </div>
                        </div>
                        <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                          <span className="text-purple-300 font-semibold">[Integration: Gmail]</span>
                          <p className="text-white/70 mt-1">Subject: 5th Grade Field Trip</p>
                          <p className="text-white/60 mt-1">Body: "Museum trip April 15. Permission slips and $12 fee due by Friday, April 11. Bring lunch or $8."</p>
                        </div>
                        <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                          <span className="text-purple-300 font-semibold">[Integration: iMessage]</span> <span className="text-white/70">Thread: Sarah (Babysitter)</span>
                          <p className="text-white/60 mt-1">Last Msg: "Yes, that works for me! See you Friday at 6."</p>
                        </div>
                      </div>
                    </div>

                    {/* The Interaction */}
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-xl p-6 border-2 border-purple-400/30">
                      <div className="flex items-start gap-3 mb-4">
                        <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                        <h4 className="text-purple-400 font-semibold font-mono text-sm uppercase tracking-wide">The Interaction (Boltzman Voice)</h4>
                      </div>
                      <div className="space-y-4 font-mono text-sm">
                        <div className="bg-black/40 rounded-lg p-4 border border-purple-500/20">
                          <p className="text-purple-300 mb-2"><span className="font-semibold">User:</span> "What activities do the kids have after school? Coordinate the pickup."</p>
                          <p className="text-green-300"><span className="font-semibold">Boltzman:</span> "It's tight today. Noah has Piano at 3:45 at Ms. Chen's, and Emma has Soccer at 4:30 at Lincoln Fields. You'll need to drop Noah, then immediately drive Emma to make the 4:30 start."</p>
                        </div>
                        <div className="bg-black/40 rounded-lg p-4 border border-purple-500/20">
                          <p className="text-purple-300 mb-2"><span className="font-semibold">User:</span> "What's for dinner according to the plan? Do I need to prep?"</p>
                          <p className="text-green-300"><span className="font-semibold">Boltzman:</span> "It's Chicken Stir-fry night. The calendar note says you need to defrost the chicken this morning."</p>
                        </div>
                        <div className="bg-black/40 rounded-lg p-4 border border-purple-500/20">
                          <p className="text-purple-300 mb-2"><span className="font-semibold">User:</span> "When was my last text with the babysitter? I need to confirm Friday."</p>
                          <p className="text-green-300"><span className="font-semibold">Boltzman:</span> "You last spoke to Sarah confirming this Friday at 6 PM. She said 'Yes, that works for me!'"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Images Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src="/Projects/BoltzmanVoice/27C91B42-0A31-4794-AAF0-EC4C2C9DAD00.jpeg"
                      alt="Boltzman Voice Use Case"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src="/Projects/BoltzmanVoice/567C334B-62B3-44EB-BDB3-6D5DCF6C509C.jpeg"
                      alt="Boltzman Voice Use Case"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Persona 3: The Sales Manager */}
                <div className="mb-12">
                  <div className="bg-gradient-to-br from-orange-500/10 via-red-500/5 to-orange-500/5 rounded-2xl border-2 border-orange-500/30 p-8 mb-6">
                    {/* Persona Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/30 to-red-500/20 flex items-center justify-center border-2 border-orange-400/50 shadow-lg shadow-orange-500/20">
                        <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">Persona 3: The Sales Manager</h3>
                        <p className="text-orange-300/80 font-mono text-sm">High-Stakes Prep</p>
                      </div>
                    </div>

                    {/* The Insight */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-orange-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h4 className="text-orange-400 font-semibold font-mono text-sm uppercase tracking-wide">The Insight</h4>
                      </div>
                      <p className="text-white/80 font-mono text-sm leading-relaxed">
                        Sales professionals have high anxiety before client meetings. They utilize commute time to "get in the zone," but they lack a feedback loop. Talking to themselves isn't enough; they need a roleplay partner who knows the specific client context.
                      </p>
                    </div>

                    {/* The Workflow */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-orange-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h4 className="text-orange-400 font-semibold font-mono text-sm uppercase tracking-wide">The Workflow</h4>
                      </div>
                      <p className="text-white/80 font-mono text-sm leading-relaxed">
                        Driving to Acme Corp HQ (1 hour).
                      </p>
                    </div>

                    {/* The Context */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-orange-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <h4 className="text-orange-400 font-semibold font-mono text-sm uppercase tracking-wide">The Context (What Boltzman Voice "Sees")</h4>
                      </div>
                      <div className="space-y-3 font-mono text-xs">
                        <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                          <span className="text-orange-300 font-semibold">[PDF]</span> <span className="text-white/70">Acme Corp Pitch Package.pdf</span>
                          <div className="text-white/60 mt-2 space-y-1">
                            <p>Pain Point: "Inventory discrepancies costing ~$300K/yr."</p>
                            <p>Solution: "Real-time sync eliminates manual reconciliation."</p>
                            <p>Timeline: "Q3 Implementation Deadline."</p>
                          </div>
                        </div>
                        <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                          <span className="text-orange-300 font-semibold">[Doc]</span> <span className="text-white/70">Sales Effectiveness Toolkit.docx</span>
                          <p className="text-white/60 mt-1">Script: "Objection: Price. Response: Pivot to 18-month ROI. 'Yes, the fee is higher, but with 94% accuracy improvement, you break even in 6 months.'"</p>
                        </div>
                        <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                          <span className="text-orange-300 font-semibold">[Web Scrape]</span> <span className="text-white/70">Acme Corp Website</span>
                          <p className="text-white/60 mt-1">About: "Acme Corp values 'Speed to Market' and 'Operational Transparency' above all."</p>
                        </div>
                      </div>
                    </div>

                    {/* The Interaction */}
                    <div className="bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-xl p-6 border-2 border-orange-400/30">
                      <div className="flex items-start gap-3 mb-4">
                        <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <h4 className="text-orange-400 font-semibold font-mono text-sm uppercase tracking-wide">The Interaction (Boltzman Voice)</h4>
                      </div>
                      <div className="space-y-4 font-mono text-sm">
                        <div className="bg-black/40 rounded-lg p-4 border border-orange-500/20">
                          <p className="text-orange-300 mb-2"><span className="font-semibold">User:</span> "I want to practice my opening. Roleplay as their procurement director."</p>
                          <p className="text-green-300"><span className="font-semibold">Boltzman:</span> "Understood. I'm the Director. 'Look, we like the software, but your implementation timeline seems aggressive. We can't risk downtime in Q3.' How do you respond?"</p>
                        </div>
                        <div className="bg-black/40 rounded-lg p-4 border border-orange-500/20">
                          <p className="text-orange-300 mb-2"><span className="font-semibold">User:</span> "I'd say... we can do it fast."</p>
                          <p className="text-green-300"><span className="font-semibold">Boltzman:</span> "That's a bit weak. Based on your Pitch Package, try leveraging the 'tailored Q3 deadline' plan. Say: 'We specifically designed the rollout to align with your Q3 goals, ensuring zero downtime during the switch.'"</p>
                        </div>
                        <div className="bg-black/40 rounded-lg p-4 border border-orange-500/20">
                          <p className="text-orange-300 mb-2"><span className="font-semibold">User:</span> "Okay, let me try responding to the pricing objection."</p>
                          <p className="text-green-300"><span className="font-semibold">Boltzman:</span> "Go ahead. I'll check your response against the ROI script in your Toolkit."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Persona 4: The Bio-Hacker */}
                <div>
                  <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-emerald-500/5 rounded-2xl border-2 border-emerald-500/30 p-8">
                    {/* Persona Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/20 flex items-center justify-center border-2 border-emerald-400/50 shadow-lg shadow-emerald-500/20">
                        <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">Persona 4: The Bio-Hacker</h3>
                        <p className="text-emerald-300/80 font-mono text-sm">Active Learning</p>
                      </div>
                    </div>

                    {/* The Insight */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-emerald-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <h4 className="text-emerald-400 font-semibold font-mono text-sm uppercase tracking-wide">The Insight</h4>
                      </div>
                      <p className="text-white/80 font-mono text-sm leading-relaxed">
                        Lifelong learners consume heavy intellectual content (podcasts/lectures) while exercising. The problem is retention. They hear a protocol (e.g., supplement dosage) but can't write it down, so they forget it by the time the workout ends.
                      </p>
                    </div>

                    {/* The Workflow */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-emerald-500/20">
                      <div className="flex items-start gap-3 mb-3">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h4 className="text-emerald-400 font-semibold font-mono text-sm uppercase tracking-wide">The Workflow</h4>
                      </div>
                      <p className="text-white/80 font-mono text-sm leading-relaxed">
                        Morning run / Gym session.
                      </p>
                    </div>

                    {/* The Context */}
                    <div className="bg-black/30 rounded-xl p-5 mb-6 border border-emerald-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <h4 className="text-emerald-400 font-semibold font-mono text-sm uppercase tracking-wide">The Context (What Boltzman Voice "Sees")</h4>
                      </div>
                      <div className="space-y-3 font-mono text-xs">
                        <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                          <span className="text-emerald-300 font-semibold">[YouTube Transcript]</span> <span className="text-white/70">Huberman Lab - Sleep Master Class</span>
                          <p className="text-white/60 mt-1">Content: "To increase deep sleep, temperature is key. Your body needs to drop by 1-3 degrees. Viewing sunlight within 30 mins of waking triggers cortisol, setting the melatonin timer for 16 hours later."</p>
                        </div>
                        <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                          <span className="text-emerald-300 font-semibold">[Web Link]</span> <span className="text-white/70">Sleep Optimization Research Study</span>
                          <p className="text-white/60 mt-1">Data: "Supplements: Magnesium Threonate (200-400mg) 30 mins before bed. Apigenin (50mg). Theanine (100-200mg)."</p>
                        </div>
                        <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                          <span className="text-emerald-300 font-semibold">[Web Link]</span> <span className="text-white/70">Sleep Foundation Guide</span>
                          <p className="text-white/60 mt-1">List: "Environment Checklist: Room temp 65-68°F. Blackout curtains. No blue light 60 mins before bed."</p>
                        </div>
                      </div>
                    </div>

                    {/* The Interaction */}
                    <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-xl p-6 border-2 border-emerald-400/30">
                      <div className="flex items-start gap-3 mb-4">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <h4 className="text-emerald-400 font-semibold font-mono text-sm uppercase tracking-wide">The Interaction (Boltzman Voice)</h4>
                      </div>
                      <div className="space-y-4 font-mono text-sm">
                        <div className="bg-black/40 rounded-lg p-4 border border-emerald-500/20">
                          <p className="text-emerald-300 mb-2"><span className="font-semibold">User:</span> "What were the key points from the podcast about maximizing deep sleep phases?"</p>
                          <p className="text-green-300"><span className="font-semibold">Boltzman:</span> "Huberman emphasized two main things: Temperature and Light. You need to drop your body temp by 1-3 degrees, and getting sunlight within 30 minutes of waking is crucial to set your circadian timer."</p>
                        </div>
                        <div className="bg-black/40 rounded-lg p-4 border border-emerald-500/20">
                          <p className="text-emerald-300 mb-2"><span className="font-semibold">User:</span> "What supplements were discussed? I'm at the store later."</p>
                          <p className="text-green-300"><span className="font-semibold">Boltzman:</span> "According to the Research Study doc, the protocol is: Magnesium Threonate (200-400mg), Apigenin (50mg), and Theanine (100-200mg). Take them 30 minutes before sleep."</p>
                        </div>
                        <div className="bg-black/40 rounded-lg p-4 border border-emerald-500/20">
                          <p className="text-emerald-300 mb-2"><span className="font-semibold">User:</span> "What's the proper temperature range?"</p>
                          <p className="text-green-300"><span className="font-semibold">Boltzman:</span> "The Sleep Foundation Guide recommends a precise range of 65-68°F (18-20°C)."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-10">
                {/* Header */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-400/30">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-white">Demo</h2>
                  </div>
                  <p className="text-white/60 font-mono text-sm">See Boltzman Voice in Action</p>
                </div>

                {/* Image Section */}
                <div className="mb-10">
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src="/Projects/BoltzmanVoice/4FA0411E-F8C5-4C03-B5C4-B721A6E57C91.jpeg"
                      alt="Boltzman Voice Demo"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Video 1 */}
                  <div className="relative">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 overflow-hidden">
                      <div className="relative w-full max-w-sm mx-auto" style={{ paddingBottom: '120%' }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          src="https://www.youtube.com/embed/up6XT7VntqU"
                          title="Boltzman Voice Demo 1"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    {/* Decorative glow */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-xl blur-xl -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Video 2 */}
                  <div className="relative">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 overflow-hidden">
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          src="https://www.youtube.com/embed/THkUAd2d_0Y"
                          title="Boltzman Voice Demo 2"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    {/* Decorative glow */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-xl blur-xl -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reflection Card */}
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/30">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">Reflection</h2>
                    <p className="text-white/60 font-mono text-sm">A Lesson in Velocity</p>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-green-500/20 mb-6">
                  <p className="text-white/90 font-mono text-sm md:text-base leading-relaxed text-center">
                    Working with <a href="https://www.liamdu.com/" target="_blank" rel="noopener noreferrer" className="text-green-400 font-semibold hover:underline">Liam Du</a> was a masterclass in extreme execution. We went from a whiteboard concept to a fully functional product in a single night—a feat that usually takes teams weeks.
                  </p>
                </div>

                <div className="space-y-6 text-normal-text font-mono text-sm md:text-base leading-relaxed">
                  <p>
                    The momentum was instant: we onboarded 20 users the very next morning and pitched Sequoia Capital just 48 hours post-ideation. This experience redefined my standard for speed, proving that a focused two-person team can deliver enterprise-grade quality overnight.
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="mt-8 flex justify-center">
                  <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-500/50 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          </>
        )}
        </div>

      </main>
      <Footer />
    </div>
  );
}
