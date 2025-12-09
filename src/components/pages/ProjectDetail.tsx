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
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="mb-12 px-6 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-white font-mono text-sm"
          >
            ← Back
          </button>

          {/* Header Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex items-start gap-4">
                {/* Project Icon/Logo */}
                {project.title === 'Lawnstack' ? (
                  <div className="w-16 h-16 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                    <img
                      src="/Projects/Lawnstack /Logo /Frame 49.svg"
                      alt="Lawnstack Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-white/10 border border-white/20 overflow-hidden flex-shrink-0">
                    <img
                      src={project.mockup || project.image || '/placeholder-icon.jpg'}
                      alt={`${project.title} icon`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="font-serif text-4xl md:text-5xl text-white">
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
                  </div>
                  <p className="text-normal-text font-mono text-base mb-2">
                    {project.category}
                  </p>
                  {project.tagline && (
                    <p className="text-white/90 font-mono text-sm mb-2">
                      {project.tagline}
                    </p>
                  )}
                  {project.description && (
                    <p className="text-white/80 font-mono text-sm max-w-2xl">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <h2 className="font-serif text-2xl text-white mb-4">Original Team</h2>
              <p className="text-normal-text font-mono text-base mb-6">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
              <div className="relative">
                {/* Desktop Mockup */}
                <div className="relative mx-auto max-w-4xl">
                  <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 bg-gray-700 rounded px-4 py-1 text-xs text-gray-300 text-center font-mono">
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

          {/* Summary and Role Cards - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Summary Card - First */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <h2 className="font-serif text-xl text-white mb-4">Summary</h2>
              <p className="text-normal-text font-mono text-sm leading-relaxed">
                {project.summary || project.description}
              </p>
              {project.underConstruction && (
                <div className="mt-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-400 font-mono text-xs">🚧 This project is currently under construction</p>
                </div>
              )}
            </div>

            {/* Profile Card - Second */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <h2 className="font-serif text-xl text-white mb-4">Profile</h2>
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
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
            <h2 className="font-serif text-2xl text-white mb-6">Problem Vs Solution</h2>
            <div className="relative">
              {/* Top Row: Second picture (left) and First picture (right) */}
              <div className="grid grid-cols-2 gap-6 mb-6">
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
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
            <h2 className="font-serif text-2xl text-white mb-6">How was Lawnstack different?</h2>
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
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-8">
            <h2 className="font-serif text-2xl text-white mb-6">Revenue Model and Total Addressable Market</h2>
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
            <div className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <h2 className="font-serif text-2xl text-white mb-4">Benefit of our model</h2>
              <h3 className="font-serif text-xl text-white mb-4">Benefits of the Subscription Model</h3>
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
            <div className="md:col-span-1 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <h2 className="font-serif text-xl text-white mb-4">Cons of the Subscription Model</h2>
              <ul className="space-y-3 text-normal-text font-mono text-sm">
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
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-gray-200 rounded px-4 py-1 text-xs text-gray-700 text-center font-mono">
                    lawnstack.com
                  </div>
                </div>
                <div className="overflow-hidden rounded-b-lg bg-white" style={{ height: '350px' }}>
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
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-4 w-full" style={{ minHeight: '262px' }}>
                <h3 className="text-white font-serif text-xl mb-4">The Ideal Experience</h3>
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
            <div className="md:col-span-1 bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-2" style={{ height: '770px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
