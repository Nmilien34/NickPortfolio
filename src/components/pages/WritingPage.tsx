import { Link, Navigate, useParams } from 'react-router-dom';
import { writings } from '../../content/writings';

export function WritingPage() {
  const { slug = 'legacy' } = useParams();
  const writing = writings.find((entry) => entry.slug === slug);

  if (!writing) {
    return <Navigate to="/#writing" replace />;
  }

  return (
    <main className="landing-sharp-type min-h-screen bg-[#f3f0ea] px-5 py-8 text-[#6f7478] sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-5xl items-center justify-between text-[11px] font-semibold uppercase leading-none text-[#6f7478] sm:text-xs">
        <Link
          to="/"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8f6f1]/90 text-[#2f5f7c] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition-colors hover:bg-[#fbfaf6] hover:text-[#244a61]"
        >
          NCM
        </Link>
        <Link
          to="/#writing"
          className="rounded-full bg-[#f8f6f1]/90 px-6 py-3 text-[#8c8c8c] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] transition-colors hover:bg-[#fbfaf6] hover:text-[#747474]"
        >
          Writings
        </Link>
      </nav>

      <article className="mx-auto max-w-3xl pb-24 pt-24 text-center sm:pt-28">
        <p className="mb-5 text-[11px] font-semibold uppercase leading-none text-[#2f5f7c] sm:text-xs">
          Writing
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-[#555b60] sm:text-6xl">
          {writing.title}
        </h1>
        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-base font-medium leading-8 text-[#6f7478] sm:mt-14 sm:text-lg sm:leading-9">
          {writing.paragraphs.map((paragraph, index) => (
            <p key={`${writing.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
