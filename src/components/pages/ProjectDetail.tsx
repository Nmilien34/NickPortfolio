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
                      src="/Projects/Boltzman AI/Frame 431.svg"
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
                  <div className={project.title === 'Boltzman Enterprise' ? 'bg-white rounded-t-lg p-2 flex items-center gap-2' : 'bg-gray-800 rounded-t-lg p-2 flex items-center gap-2'}>
                    <div className="flex gap-1.5 md:gap-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className={project.title === 'Boltzman Enterprise' ? 'flex-1 bg-gray-200 rounded px-2 md:px-4 py-1 text-[10px] md:text-xs text-gray-700 text-center font-mono' : 'flex-1 bg-gray-700 rounded px-2 md:px-4 py-1 text-[10px] md:text-xs text-gray-300 text-center font-mono'}>
                      {project.title === 'Lawnstack' ? 'lawnstack.com' : (project.browserUrl || 'example.com')}
                    </div>
                  </div>
                  <div className="bg-white rounded-b-lg overflow-hidden shadow-2xl">
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
        </div>

      </main>
      <Footer />
    </div>
  );
}
