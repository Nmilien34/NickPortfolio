import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { writings } from '../../content/writings';

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '/_PM%20concised%20V7.7.1.pdf', external: true },
  { label: 'Writings', href: '#writing' },
  { label: 'Profile', profile: true },
];

const sections = [
  {
    id: 'experience',
    label: 'Experience',
    eyebrow: 'Systems / Product / Operations',
    copy: 'Venture Backed & Fast Grown Startup',
  },
  {
    id: 'projects',
    label: 'Projects',
    eyebrow: 'Selected work',
    copy: 'Product experiments that shaped how I think about building things',
  },
  {
    id: 'contracts',
    label: 'Contracts',
    eyebrow: 'Client work',
    copy: "Work I've done for people for the sake of making money",
  },
  {
    id: 'education',
    label: 'Education',
    eyebrow: 'Academic foundation',
    copy: '',
  },
  {
    id: 'fellowships',
    label: 'Fellowships',
    eyebrow: 'Programs / Communities',
    copy: 'Somewhat selective communities that funded my work',
  },
  {
    id: 'writing',
    label: 'Writing',
    eyebrow: 'Notes / Research / Essays',
    copy: 'The way I view the world',
  },
];

type LedgerEntry = {
  glyph: string;
  organization: string;
  role: string;
  tag: string;
  meta: string;
  href?: string;
  external?: boolean;
  logoSrc?: string;
  logoAlt?: string;
  logoClassName?: string;
  logoContainerClassName?: string;
  logoBackgroundSrc?: string;
  logoBackgroundPosition?: string;
  logoBackgroundSize?: string;
};

// Replace these rows with final live links, exact titles, dates, and logos when ready.
const experienceEntries = [
  {
    glyph: 'LS',
    organization: 'Lawnstack',
    role: 'Co-founder / Product',
    tag: 'Venture backed, $150k raised',
    meta: 'Jan 2024 - Dec 2025',
    href: '/project/lawnstack',
    logoSrc: '/Projects/Lawnstack /Logo /Frame 49.svg',
    logoAlt: 'Lawnstack logo',
    logoClassName: 'translate-y-[8%] p-0',
    logoContainerClassName: 'bg-[#eaf5ef]/85',
  },
  {
    glyph: 'BA',
    organization: 'Boltzman AI',
    role: 'Co-founder / Product',
    tag: 'Chatbot, 3k users in 10 days',
    meta: 'Jan 2025 - May 2025',
    href: '/project/boltzman-ai',
    logoSrc: '/Projects/Boltzman AI/Frame 112.svg',
    logoAlt: 'Boltzman AI logo',
    logoClassName: 'p-1.5',
    logoContainerClassName: 'bg-[#f6f3ec]/90',
  },
  {
    glyph: 'BE',
    organization: 'Boltzman Enterprise',
    role: 'Solo-Founder / Full Stack Engineer',
    tag: 'Voice AI, $3k MRR in 2 months',
    meta: 'May 2025 - December 2025',
    href: '/project/boltzman-enterprise',
    logoSrc: '/Projects/VoiceaiReceptionist/Group 33.svg',
    logoAlt: 'Boltzman Enterprise logo',
    logoClassName: 'p-1.5',
    logoContainerClassName: 'bg-[#f6f3ec]/90',
  },
] satisfies LedgerEntry[];

const projectEntries = [
  {
    glyph: 'CO',
    organization: 'Corner',
    role: 'An alternative to Docusign for early stage founders',
    tag: 'Webapp',
    meta: 'April-May 2026',
    href: 'https://www.trycorner.co/',
    external: true,
    logoSrc: '/images/CornerLogo.svg',
    logoAlt: 'Corner logo',
    logoClassName: 'p-1',
    logoContainerClassName: 'bg-[#f6f0e9]/90',
  },
  {
    glyph: 'LY',
    organization: 'Lyra',
    role: 'AI companion for seniors with dementia',
    tag: 'Hardware',
    meta: 'December 2025',
    href: '/project/lyra',
  },
  {
    glyph: 'VB',
    organization: 'Vibe',
    role: 'Mini social media game that lives in the iMessage keyboard',
    tag: 'iOS app',
    meta: 'March 2026',
    href: '/project/vibes',
    logoSrc: '/images/AppIcon-1024.png',
    logoAlt: 'Vibe app icon',
    logoClassName: 'p-0',
    logoContainerClassName: 'bg-[#f6f3ec]/90',
  },
  {
    glyph: 'EN',
    organization: 'Energy',
    role: 'Alternative to Spotify by converting YouTube MP4s to ad-free MP3s',
    tag: 'Webapp',
    meta: 'Jan 2026-Feb 2020',
    href: '/project/energy',
    logoSrc: '/images/logofortheapp.png',
    logoAlt: 'Energy project logo',
    logoClassName: 'p-0',
    logoContainerClassName: 'bg-[#f6f3ec]/90',
  },
  {
    glyph: 'ES',
    organization: 'Evolution of my embedded system',
    role: 'Embedded Systems Archive',
    tag: 'Hardware',
    meta: '2022-2026',
    href: '/project/evolution-of-my-embedded-systems',
  },
] satisfies LedgerEntry[];

const contractEntries = [
  {
    glyph: 'CL',
    organization: 'Clearr',
    role: 'Backend Lead',
    tag: 'Contract',
    meta: '2025',
    href: '/project/clearr',
    logoSrc: '/images/image.png',
    logoAlt: 'Clearr logo',
    logoClassName: 'p-0',
    logoContainerClassName: 'bg-[#f6f3ec]/90',
  },
  {
    glyph: 'GO',
    organization: 'GoodOT Practice',
    role: 'Product Implementation',
    tag: 'Contract',
    meta: '2026',
    href: '/project/good-ot-practice',
    logoSrc: '/Projects/GoodOtPractice/favicon.svg',
    logoAlt: 'GoodOT Practice logo',
    logoClassName: 'p-1',
    logoContainerClassName: 'bg-[#eef1f2]',
  },
  {
    glyph: 'FO',
    organization: 'Foster',
    role: 'Frontend / Design Engineering',
    tag: 'Contract',
    meta: '2026',
    href: '/project/foster',
    logoSrc: '/Projects/Foster/Logo.svg',
    logoAlt: 'Foster logo',
    logoClassName: 'scale-[1.55] translate-y-[36%] p-0',
    logoContainerClassName: 'bg-[#eff8f1]/90',
  },
] satisfies LedgerEntry[];

const educationEntries = [
  {
    glyph: 'NJ',
    organization: 'New Jersey Institute of Technology',
    role: 'Electrical and Computer Engineering (Electronics)',
    tag: 'Degree',
    meta: '2020-2025',
    logoSrc: '/images/Logo_of_New_Jersey_Institute_of_Technology.png',
    logoAlt: 'New Jersey Institute of Technology logo',
    logoClassName: 'p-1',
    logoContainerClassName: 'bg-[#f6f3ec]/90',
  },
] satisfies LedgerEntry[];

const fellowshipEntries = [
  {
    glyph: 'OD',
    organization: 'ODF',
    role: '3.5% acceptance rate',
    tag: 'Fellowship',
    meta: 'Alumni',
    logoSrc: '/images/image copy.png',
    logoAlt: 'ODF logo',
    logoClassName: 'p-0',
    logoContainerClassName: 'bg-[#f6f3ec]/90',
  },
  {
    glyph: 'AA',
    organization: 'Alchemist Accelerator Alumni',
    role: '<2% acceptance',
    tag: 'Accelerator',
    meta: 'Alumni',
    logoSrc: '/images/Alchemist Doha Vertical Logo.svg',
    logoAlt: 'Alchemist Accelerator logo',
    logoClassName: 'p-1.5',
    logoContainerClassName: 'bg-[#f6f3ec]/90',
  },
] satisfies LedgerEntry[];

function LedgerSection({
  title,
  eyebrow,
  description,
  entries,
}: {
  title: string;
  eyebrow: string;
  description: string;
  entries: LedgerEntry[];
}) {
  /*
   * Ledger style tokens:
   * rowHeight: controlled by min-h and py classes on each row.
   * dividerOpacity: controlled by border-[#e4e0d8]/80.
   * chipStyling: controlled by the tag/meta rounded-full classes.
   * spacing: controlled by the row grid columns, gap, and py values.
   */
  return (
    <div className="lg:col-span-2">
      <div className="mb-6 grid gap-4 sm:mb-10 lg:grid-cols-[minmax(180px,0.28fr)_minmax(0,0.72fr)]">
        <p className="text-[11px] font-semibold uppercase leading-none text-[#2f5f7c] sm:text-xs">
          {eyebrow}
        </p>
        <div className="grid gap-4 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:items-start">
          <h2 className="text-3xl font-semibold leading-none text-[#555b60] sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-left text-base font-medium leading-7 text-[#6f7478] sm:text-lg sm:leading-8 md:justify-self-end md:pl-6 lg:pl-10">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      <div className="border-t-[0.5px] border-[#e4e0d8]/80">
        {entries.map((entry) => {
          const content = (
            <>
              <div
                aria-hidden="true"
                className={`row-span-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-[#ebe6dc]/70 text-[10px] font-semibold tracking-[0.08em] text-[#8b8f91] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] sm:row-span-1 sm:h-11 sm:w-11 ${entry.logoContainerClassName ?? ''}`}
                style={
                  entry.logoBackgroundSrc
                    ? {
                        backgroundImage: `url("${entry.logoBackgroundSrc}")`,
                        backgroundPosition: entry.logoBackgroundPosition,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: entry.logoBackgroundSize,
                      }
                    : undefined
                }
              >
                {entry.logoBackgroundSrc ? null : entry.logoSrc ? (
                  <img
                    src={entry.logoSrc}
                    alt={entry.logoAlt ?? `${entry.organization} logo`}
                    className={`h-full w-full object-contain ${entry.logoClassName ?? 'p-1.5'}`}
                  />
                ) : (
                  entry.glyph
                )}
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-tight text-[#4f565b] sm:text-xl">
                  {entry.organization}
                </h3>
              </div>

              <p className="col-start-2 text-sm font-medium leading-6 text-[#8b9298] sm:col-start-auto sm:text-base">
                {entry.role}
              </p>

              <div className="col-start-2 flex flex-wrap items-center gap-2 sm:col-start-auto sm:justify-end">
                <span className="rounded-full bg-[#f8f6f1]/75 px-3 py-1.5 text-xs font-medium leading-none text-[#6f7478] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                  {entry.tag}
                </span>
                <span className="rounded-full bg-[#ede8dd]/60 px-3 py-1.5 text-xs font-semibold leading-none text-[#8b9298] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
                  {entry.meta}
                </span>
              </div>
            </>
          );
          const rowClassName =
            'group grid min-h-[82px] grid-cols-[44px_minmax(0,1fr)] gap-x-3 gap-y-2 border-b-[0.5px] border-[#e4e0d8]/80 py-4 transition-colors duration-300 hover:bg-[#f8f5ee]/45 sm:min-h-[92px] sm:grid-cols-[56px_minmax(0,1.1fr)_minmax(0,1.2fr)_auto] sm:items-center sm:gap-6 sm:py-6';

          return entry.href && entry.external ? (
            <a
              key={`${entry.organization}-${entry.role}`}
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className={rowClassName}
            >
              {content}
            </a>
          ) : entry.href ? (
            <Link key={`${entry.organization}-${entry.role}`} to={entry.href} className={rowClassName}>
              {content}
            </Link>
          ) : (
            <div key={`${entry.organization}-${entry.role}`} className={rowClassName}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WritingSection({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) {
  return (
    <div className="lg:col-span-2">
      <div className="mb-6 grid gap-4 sm:mb-10 lg:grid-cols-[minmax(180px,0.28fr)_minmax(0,0.72fr)]">
        <p className="text-[11px] font-semibold uppercase leading-none text-[#2f5f7c] sm:text-xs">
          {eyebrow}
        </p>
        <div className="grid gap-4 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:items-start">
          <h2 className="text-3xl font-semibold leading-none text-[#555b60] sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-2xl text-left text-base font-medium leading-7 text-[#6f7478] sm:text-lg sm:leading-8 md:justify-self-end md:pl-6 lg:pl-10">
            {description}
          </p>
        </div>
      </div>

      <div className="border-t-[0.5px] border-[#e4e0d8]/80 pt-8">
        <div className="flex flex-col items-start gap-5">
          {writings.map((writing) => (
            <Link
              key={writing.slug}
              to={`/${writing.slug}`}
              className="border-b-[0.5px] border-[#9da1a4]/55 pb-1 text-left text-lg font-medium leading-none text-[#8b9298] transition-colors duration-300 hover:border-[#777b7e]/65 hover:text-[#646b70] sm:text-xl"
            >
              {writing.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hasStartedScrolling, setHasStartedScrolling] = useState(false);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const navGroupRef = useRef<HTMLDivElement | null>(null);
  const navItemRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const logo = logoRef.current;
    const navGroup = navGroupRef.current;

    if (!logo || !navGroup || prefersReducedMotion.matches) {
      return;
    }

    let frame = 0;
    let currentLogoX = 0;
    let currentNavX = 0;
    const currentItemX = navItems.map(() => 0);

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
    const lerp = (current: number, target: number, amount: number) => current + (target - current) * amount;
    const softEase = (progress: number) => progress * progress * (3 - 2 * progress);

    const tick = () => {
      /*
       * Premium header motion tuning:
       * minVirtualScroll: forgiving baseline so short pages still allow visible convergence.
       * completionThreshold: fraction of the effective scroll range where convergence finishes.
       * centerGap: final space between the logo badge and the nav pill group.
       * maxLogoShift/maxNavShift: measured inward drift needed to center the combined header cluster.
       * itemStagger: tiny extra inward pull per pill, creating the trailing/following feel.
       * damping: lerp amount. Lower is softer/slower; higher follows scroll more tightly.
       */
      const minVirtualScroll = Math.max(window.innerHeight * 0.9, 720);
      const completionThreshold = 0.46;
      const isCompactHeader = window.innerWidth < 640;
      const centerGap = isCompactHeader ? 18 : 32;
      const itemStagger = isCompactHeader ? 0 : -2;
      const damping = 0.055;
      const logoLeft = logo.offsetLeft;
      const navLeft = navGroup.offsetLeft;
      const logoWidth = logo.offsetWidth;
      const navWidth = navGroup.offsetWidth;
      const clusterWidth = logoWidth + centerGap + navWidth;
      const targetClusterLeft = Math.max((window.innerWidth - clusterWidth) / 2, 20);
      const targetLogoLeft = targetClusterLeft;
      const targetNavLeft = targetLogoLeft + logoWidth + centerGap;
      const maxLogoShift = isCompactHeader ? 0 : targetLogoLeft - logoLeft;
      const maxNavShift = isCompactHeader ? 0 : targetNavLeft - navLeft;

      const totalScrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
      const effectiveScrollable = Math.max(totalScrollable, minVirtualScroll);
      const shortPageCompletionThreshold =
        totalScrollable > 0 && totalScrollable < minVirtualScroll
          ? clamp((totalScrollable / effectiveScrollable) * 0.78, 0.16, completionThreshold)
          : completionThreshold;
      const rawProgress = totalScrollable > 0 ? clamp(window.scrollY / effectiveScrollable, 0, 1) : 0;
      const effectiveProgress = clamp(rawProgress / shortPageCompletionThreshold, 0, 1);
      const progress = softEase(effectiveProgress);
      const targetLogoX = progress * maxLogoShift;
      const targetNavX = progress * maxNavShift;
      const bubbleAlpha = 0.6 + progress * 0.3;

      currentLogoX = lerp(currentLogoX, targetLogoX, damping);
      currentNavX = lerp(currentNavX, targetNavX, damping);

      logo.style.transform = `translate3d(${currentLogoX.toFixed(3)}px, 0, 0)`;
      logo.style.backgroundColor = `rgba(248, 246, 241, ${bubbleAlpha.toFixed(3)})`;
      navGroup.style.transform = `translate3d(${currentNavX.toFixed(3)}px, 0, 0)`;

      navItemRefs.current.forEach((item, index) => {
        if (!item) return;

        const itemDamping = Math.max(0.045, damping - index * 0.007);
        const targetItemX = progress * itemStagger * index;
        currentItemX[index] = lerp(currentItemX[index], targetItemX, itemDamping);
        item.style.transform = `translate3d(${currentItemX[index].toFixed(3)}px, 0, 0)`;
        item.style.backgroundColor = `rgba(248, 246, 241, ${bubbleAlpha.toFixed(3)})`;
      });

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      logo.style.transform = '';
      logo.style.backgroundColor = '';
      navGroup.style.transform = '';
      navItemRefs.current.forEach((item) => {
        if (item) {
          item.style.transform = '';
          item.style.backgroundColor = '';
        }
      });
    };
  }, []);

  useEffect(() => {
    if (!isProfileOpen) return;

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsProfileOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isProfileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 8) setHasStartedScrolling(true);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="landing-sharp-type min-h-screen overflow-x-hidden bg-[#f3f0ea] text-[#6f7478]">
      <nav
        className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 text-[10px] font-semibold uppercase leading-none text-[#6f7478] sm:top-5 sm:px-8 sm:text-xs lg:px-12"
      >
        <a
          ref={logoRef}
          href="/"
          className="pointer-events-auto absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f8f6f1]/60 text-[#2f5f7c] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition-colors hover:bg-[#fbfaf6]/75 hover:text-[#244a61] sm:left-8 sm:h-12 sm:w-12 lg:left-12"
        >
          NCM
        </a>
        <div
          ref={navGroupRef}
          className="pointer-events-auto absolute right-4 flex max-w-[calc(100vw-5.75rem)] justify-end gap-2 overflow-x-auto pb-1 text-right [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:right-8 sm:max-w-[72vw] sm:flex-wrap sm:gap-x-8 sm:gap-y-3 sm:overflow-visible sm:pb-0 lg:right-12"
        >
          {navItems.map((item, index) =>
            item.profile ? (
              <button
                key={item.label}
                ref={(node) => {
                  navItemRefs.current[index] = node;
                }}
                type="button"
                onClick={() => setIsProfileOpen(true)}
                className="shrink-0 rounded-full bg-[#f8f6f1]/60 px-4 py-3 text-[#8c8c8c] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition-colors hover:bg-[#fbfaf6]/75 hover:text-[#747474] sm:px-6"
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.label}
                ref={(node) => {
                  navItemRefs.current[index] = node;
                }}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="shrink-0 rounded-full bg-[#f8f6f1]/60 px-4 py-3 text-[#8c8c8c] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition-colors hover:bg-[#fbfaf6]/75 hover:text-[#747474] sm:px-6"
              >
                {item.label}
              </a>
            ),
          )}
        </div>
      </nav>

      {isProfileOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-[#6f7478]/18 px-0 py-0 backdrop-blur-sm sm:items-center sm:px-5 sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="profile-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsProfileOpen(false);
          }}
        >
          <div className="relative max-h-[100dvh] w-full overflow-x-hidden overflow-y-auto rounded-t-[22px] border border-[#e4e0d8]/90 bg-[#f8f6f1] p-2 shadow-[0_34px_90px_rgba(103,95,82,0.18)] sm:max-h-[88vh] sm:max-w-5xl sm:rounded-[18px] sm:p-3">
            <div className="sticky top-2 z-10 mb-2 flex justify-end sm:absolute sm:right-4 sm:top-4 sm:mb-0">
              <button
                type="button"
                onClick={() => setIsProfileOpen(false)}
                className="rounded-full bg-[#f3f0ea]/95 px-4 py-2 text-xs font-semibold uppercase leading-none text-[#8b9298] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-colors hover:text-[#555b60]"
              >
                Close
              </button>
            </div>

            <div className="grid overflow-hidden rounded-[16px] border border-[#e4e0d8]/80 bg-[#f3f0ea] md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative border-b border-[#e4e0d8]/80 bg-[#ebe6dc] p-4 md:min-h-[340px] md:border-b-0 md:border-r md:p-6">
                <div className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-[#cfc7b8] to-transparent md:block" />
                <div className="grid gap-4 min-[460px]:grid-cols-[0.48fr_0.52fr] min-[460px]:items-end md:flex md:h-full md:flex-col md:items-stretch md:justify-between md:gap-8">
                  <div className="sm:contents md:block">
                    <p className="mb-4 text-[11px] font-semibold uppercase leading-none text-[#2f5f7c]">
                      Passport / Profile
                    </p>
                    <div className="aspect-[4/5] max-h-[260px] overflow-hidden rounded-[10px] border border-[#d8d0c1] bg-[#f8f6f1] shadow-[0_18px_50px_rgba(103,95,82,0.14)] sm:max-h-[320px] md:max-h-[520px]">
                      <img
                        src="/images/1F97147A-5531-4D66-BA63-A9F5B0A77C19_1_105_c copy.jpeg"
                        alt="Nick Milien"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="self-end min-[460px]:self-center md:self-auto">
                    <p className="text-xs font-semibold uppercase leading-none text-[#8b9298]">
                      Nick Milien
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-[#6f7478]">
                      Product engineer. Builder. User-obsessed generalist.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-8 p-5 sm:p-7 md:min-h-[340px] md:gap-10 md:p-10">
                <div>
                  <p className="mb-5 text-[11px] font-semibold uppercase leading-none text-[#2f5f7c]">
                    Field Notes
                  </p>
                  <h2 id="profile-modal-title" className="max-w-xl text-3xl font-semibold leading-none text-[#555b60] sm:text-4xl md:text-5xl">
                    Profile
                  </h2>
                  <div className="mt-6 max-w-2xl space-y-4 text-sm font-medium leading-7 text-[#6f7478] sm:text-base sm:leading-8 md:mt-8 md:text-lg md:leading-9">
                    <p>
                      I currently consider myself a product engineer. I like to talk to users, validate ideas, and build
                      products.
                    </p>
                    <p>
                      There are better engineers than me, but I want to own the product side: the way something is shaped,
                      tested, understood, and made useful.
                    </p>
                    <p>
                      I like to discuss product engineering, UX, robotics, and AI hardware. If you want to chat, feel free
                      to shoot me a text or email me.
                    </p>
                  </div>
                </div>

                <div className="border-t-[0.5px] border-[#d8d0c1] pt-6">
                  <div className="grid gap-3 text-sm font-semibold text-[#555b60] sm:grid-cols-2">
                    <a
                      href="tel:+18483612584"
                      className="rounded-full bg-[#f8f6f1]/85 px-5 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors hover:bg-[#fbfaf6]"
                    >
                      848-361-2584
                    </a>
                    <a
                      href="mailto:Nicksonn.milien@gmail.com"
                      className="break-all rounded-full bg-[#f8f6f1]/85 px-5 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors hover:bg-[#fbfaf6]"
                    >
                      Nicksonn.milien@gmail.com
                    </a>
                  </div>

                  <a
                    href="https://github.com/Nmilien34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block rounded-[12px] border border-[#e4e0d8]/85 bg-[#f8f6f1]/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-colors hover:bg-[#fbfaf6]/90"
                  >
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <p className="text-[11px] font-semibold uppercase leading-none text-[#2f5f7c]">
                        GitHub Contributions
                      </p>
                      <p className="text-xs font-semibold leading-none text-[#8b9298]">
                        @Nmilien34
                      </p>
                    </div>
                    <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      <img
                        src="https://ghchart.rshah.org/6f7478/Nmilien34"
                        alt="Nmilien34 GitHub contribution grid"
                        className="min-w-[520px] opacity-90 sm:min-w-0 sm:w-full"
                        loading="lazy"
                      />
                    </div>
                  </a>

                  <div className="mt-4 rounded-[12px] border border-[#e4e0d8]/85 bg-[#f8f6f1]/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                    <p className="mb-3 text-[11px] font-semibold uppercase leading-none text-[#2f5f7c]">
                      Socials
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        {
                          label: 'X',
                          href: 'https://x.com/nmilienceo',
                          icon: '/images/socialsPlatform/x.png',
                        },
                        {
                          label: 'LinkedIn',
                          href: 'https://www.linkedin.com/in/nmilien/',
                          icon: '/images/socialsPlatform/linkedin.png',
                        },
                        {
                          label: 'GitHub',
                          href: 'https://github.com/Nmilien34',
                          icon: '/images/socialsPlatform/github.png',
                        },
                      ].map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#f3f0ea]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          <img
                            src={social.icon}
                            alt=""
                            className="h-6 w-6 object-contain"
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#f3f0ea] px-5 py-5 sm:min-h-dvh sm:px-8 lg:px-12">
        <div className="quiet-light-scene" aria-hidden="true">
          <div className="quiet-light-wall" />
          <div className="quiet-light-desk" />
          <div className="quiet-light-surface" />
          <div className="quiet-light-object quiet-light-notebook" />
          <div className="quiet-light-object quiet-light-pen" />
          <div className="quiet-light-object quiet-light-plant">
            <span className="quiet-plant-leaf quiet-plant-leaf-left" />
            <span className="quiet-plant-leaf quiet-plant-leaf-right" />
            <span className="quiet-plant-stem" />
            <span className="quiet-plant-pot" />
          </div>
          <div className="quiet-window-shadow" />
          <div className="quiet-cloud-light" />
        </div>
        <div className="relative z-10 flex flex-1 flex-col justify-center gap-10 pb-28 pt-20 sm:pb-32 sm:pt-16">
          <div className="w-full max-w-5xl" aria-label="Welcome, I’m Nick Milien">
            <p className="hero-type hero-type-kicker mb-5 w-fit text-[11px] font-semibold uppercase leading-none text-[#2f5f7c] sm:text-xs">
              Welcome, I’m
            </p>
            <h1 className="hero-type hero-type-name w-fit max-w-4xl text-[clamp(3rem,9vw,8.75rem)] font-semibold leading-[0.92] text-[#555b60]">
              Nick Milien
            </h1>
          </div>
          <div
            className={`hero-scroll-cue flex flex-col items-center gap-4 text-xs font-semibold uppercase leading-none text-[#7f878c] sm:text-sm ${
              hasStartedScrolling ? 'hero-scroll-cue-settled' : ''
            }`}
          >
            <span className="hero-scroll-arrow" aria-hidden="true" />
            <span>Scroll to see more</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <p className="max-w-4xl text-sm font-medium leading-6 text-[#6f7478] sm:text-base sm:leading-7">
          I like building well-designed products that work well, whether that’s hardware or software. What I care about
          most is the end-user experience and creating products that become habitual. There’s something inspiring about
          building something users would genuinely miss if it disappeared, which is why I enjoy talking to users,
          validating ideas, and rapidly prototyping.
        </p>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
        <div className="border-t-[0.5px] border-[#e4e0d8]">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="grid scroll-mt-8 gap-6 border-b-[0.5px] border-[#e4e0d8] py-8 sm:gap-8 sm:py-14 lg:grid-cols-[minmax(180px,0.28fr)_minmax(0,0.72fr)] lg:py-16"
            >
              {section.id === 'experience' ? (
                <LedgerSection
                  title={section.label}
                  eyebrow={section.eyebrow}
                  description={section.copy}
                  entries={experienceEntries}
                />
              ) : section.id === 'projects' ? (
                <LedgerSection
                  title={section.label}
                  eyebrow={section.eyebrow}
                  description={section.copy}
                  entries={projectEntries}
                />
              ) : section.id === 'contracts' ? (
                <LedgerSection
                  title={section.label}
                  eyebrow={section.eyebrow}
                  description={section.copy}
                  entries={contractEntries}
                />
              ) : section.id === 'education' ? (
                <LedgerSection
                  title={section.label}
                  eyebrow={section.eyebrow}
                  description={section.copy}
                  entries={educationEntries}
                />
              ) : section.id === 'fellowships' ? (
                <LedgerSection
                  title={section.label}
                  eyebrow={section.eyebrow}
                  description={section.copy}
                  entries={fellowshipEntries}
                />
              ) : section.id === 'writing' ? (
                <WritingSection
                  title={section.label}
                  eyebrow={section.eyebrow}
                  description={section.copy}
                />
              ) : (
                <>
                  <div>
                    <p className="text-[11px] font-semibold uppercase leading-none text-[#2f5f7c] sm:text-xs">
                      {section.eyebrow}
                    </p>
                  </div>
                  <div className="grid gap-5 md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:items-start">
                    <h2 className="text-3xl font-semibold leading-none text-[#555b60] sm:text-4xl">
                      {section.label}
                    </h2>
                    <p className="max-w-2xl text-left text-base font-medium leading-7 text-[#6f7478] sm:text-lg sm:leading-8 md:justify-self-end md:pl-6 lg:pl-10">
                      {section.copy}
                    </p>
                  </div>
                </>
              )}
            </section>
          ))}
        </div>
      </section>

      <footer className="border-t-[0.5px] border-[#e4e0d8] px-5 py-6 text-xs font-semibold uppercase leading-none text-[#8b9298] sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Made by Nick @2026</p>
          <p>
            If you wanna see my old portfolio{' '}
            <Link
              to="/oldsite"
              className="border-b-[0.5px] border-[#9da1a4]/65 pb-0.5 text-[#555b60] transition-colors hover:border-[#555b60]"
            >
              click here
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
