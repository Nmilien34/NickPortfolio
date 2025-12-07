import { useNavigate } from 'react-router-dom';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';

export function About() {
  const navigate = useNavigate();

  const images = [
    '/images/Aboutfolder/_VDB0681 2.JPG',
    '/images/Aboutfolder/IMG_1484.jpg',
    '/images/Aboutfolder/IMG_1485.jpg',
  ];

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

          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
              About Me
            </h1>
            <p className="text-normal-text text-lg font-mono max-w-2xl mx-auto">
              A glimpse into who I am beyond the code
            </p>
          </div>

          {/* Unique Photo Collage */}
          <div className="relative mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* First Image - Large, Left Side */}
              <div className="md:col-span-2 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <img
                    src={images[0]}
                    alt="About me 1"
                    className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Second Image - Stacked Right Side */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-[3deg] hover:rotate-0 transition-transform duration-500">
                    <img
                      src={images[1]}
                      alt="About me 2"
                      className="w-full h-[240px] object-cover hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                    <img
                      src={images[2]}
                      alt="About me 3"
                      className="w-full h-[240px] object-cover hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Aligned with first picture */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Who I Am Box - Left Side */}
              <div className="md:col-span-2 flex">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-8 md:p-12 w-full">
                  <h2 className="font-serif text-3xl text-white mb-6">Who I Am</h2>
                  <div className="space-y-4 text-normal-text font-mono text-base leading-relaxed">
                    <p>
                      <strong className="text-white">Hiya, I'm Nick (short for Nickson).</strong>
                    </p>
                    <p>
                      I'm graduating this winter from NJIT with a degree in Electrical & Computer Engineering.
                    </p>
                    <p>
                      I'm allergic to stagnation. I don't just want to fix inefficiencies; I love figuring out problems people don't even realize they have yet. For me, engineering is about empathy, understanding the human perspective first; I care deeply about how people feel in a system before I ever touch the tech.
                    </p>
                    <p>
                      I've tried many things. A few highlights from the journey:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>
                        <strong className="text-white">Lawnstack:</strong> Built a venture-backed home-service platform connecting homeowners with dedicated service teams.
                      </li>
                      <li>
                        <strong className="text-white">Boltzman Lab:</strong> Co-built with Liam Du. We scaled <strong className="text-white">Boltzman Enterprise</strong> to 30 restaurants, processing $50k in monthly orders ($60k ARR) using voice AI. We also built <strong className="text-white">Boltzman Engine</strong>, a chatbot with 3k users that <em>almost</em> got acquired by Mintlify (we failed to close the deal, haha, but learned a ton).
                      </li>
                      <li>
                        <strong className="text-white">Lyra (Current):</strong> I'm currently building a voice AI companion for seniors battling dementia and early-stage Alzheimer's.
                      </li>
                    </ul>
                    <p>
                      <strong className="text-white">What's Next?</strong>
                    </p>
                    <p>
                      Long-term, I want to build(or help build) a generational company. But right now, I know I have a lot to learn. My goal for the next 2–5 years is to join a fast-growing or late-stage startup where I'm the "dumbest" person in the room, an environment that pressures me to elevate my taste, work ethic, and standards.
                    </p>
                    <p>
                      <strong className="text-white">Offline:</strong>
                    </p>
                    <p>
                      When I'm not building things, I'm learning about robotics, sewing and tailoring clothes, gaming, or playing cards with my mom.
                    </p>
                    <p>
                      <strong className="text-white">Shoutouts:</strong>
                    </p>
                    <p>
                      I wouldn't be here without people who invested time in my growth. Big love to <a href="https://www.linkedin.com/in/jaredbarriere/" target="_blank" rel="noopener noreferrer" className="text-[#EFBF04] hover:underline">Jared Barriere</a>, <a href="https://www.liamdu.com/" target="_blank" rel="noopener noreferrer" className="text-[#EFBF04] hover:underline">Liam Du</a>, <a href="https://allen.mov/" target="_blank" rel="noopener noreferrer" className="text-[#EFBF04] hover:underline">Allen Yao</a>, <a href="https://www.linkedin.com/in/frankrohde/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNGVQXsoSTmy7HZFs0aBWFg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-[#EFBF04] hover:underline">Frank Rohde</a>, and my mom. Hope to pay it forward.
                    </p>
                    <p>
                      I love making friends and I think the best way to learn is through people so if you care to be part of this journey I'd love to chat! To make it even more inviting, instead of my email here's my phone number → <a href="tel:18483612584" className="text-[#EFBF04] hover:underline">(848)-361-2584</a> let's be friends :)
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Box - Right Side */}
              <div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 p-5 w-full">
                  <h2 className="font-serif text-lg text-white mb-4">Profile</h2>
                  <div className="space-y-2.5 text-normal-text font-mono text-xs">
                    <div className="border-b border-white/10 pb-2">
                      <p className="text-white font-semibold mb-2">School</p>
                      <div className="flex items-center gap-2">
                        <img 
                          src="/images/aboutMe/New_Jersey_IT_seal.svg" 
                          alt="NJIT Logo" 
                          className="w-14 h-14 rounded-2xl"
                        />
                        <p className="text-white/60 text-xs">New Jersey Institute of Technology</p>
                      </div>
                    </div>
                    <div className="border-b border-white/10 pb-2">
                      <p className="text-white font-semibold">Undergrad Major</p>
                      <p className="text-white/60 text-xs">Placeholder</p>
                    </div>
                    <div className="border-b border-white/10 pb-2">
                      <p className="text-white font-semibold">Accelerator</p>
                      <p className="text-white/60 text-xs">Placeholder</p>
                    </div>
                    <div className="border-b border-white/10 pb-2">
                      <p className="text-white font-semibold">Articles</p>
                      <p className="text-white/60 text-xs">Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

