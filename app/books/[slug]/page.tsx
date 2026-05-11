import { notFound } from "next/navigation";
import BookCover from "@/components/BookCover";
import SiteHeader from "@/components/SiteHeader";
import { books, getBook } from "@/lib/content";

type BookDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug
  }));
}

export default function BookDetailPage({ params }: BookDetailPageProps) {
  const book = getBook(params.slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#020204] text-white">
      <SiteHeader />
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(20,123,255,0.14),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <BookCover
              title={book.title}
              eyebrow={book.eyebrow}
              coverLine={book.coverLine}
              coverCode={book.coverCode}
              color={book.color}
            />
            <nav className="mt-6 rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-5">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-white/35">
                Contents
              </p>
              <div className="space-y-3">
                {book.chapters.map((chapter, index) => (
                  <a
                    key={chapter.title}
                    href={`#chapter-${index + 1}`}
                    className="block rounded-2xl px-3 py-2 text-sm font-bold leading-6 text-[#8A8F98] transition-colors duration-300 hover:bg-white/[0.05] hover:text-white"
                  >
                    {chapter.title}
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          <article>
            <div className="rounded-[34px] border border-white/[0.08] bg-white/[0.035] p-6 sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#3A8BFF]">
                {book.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">
                {book.title}
              </h1>
              <p className="mt-6 text-base font-bold leading-8 text-[#8A8F98]">
                {book.description}
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {book.chapters.map((chapter, index) => (
                <section
                  key={chapter.title}
                  id={`chapter-${index + 1}`}
                  className="scroll-mt-28 rounded-[34px] border border-white/[0.08] bg-white/[0.035] p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#0B6BFF]/15 px-3 py-1 text-xs font-extrabold text-[#9DCAFF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-extrabold text-white/45">
                      {chapter.page}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold leading-snug text-white">
                    {chapter.title}
                  </h2>
                  <p className="mt-4 text-[15px] font-bold leading-8 text-[#A8B3C5]">
                    {chapter.summary}
                  </p>
                  {chapter.points && (
                    <div className="mt-5 grid gap-3">
                      {chapter.points.map((point) => (
                        <p
                          key={point}
                          className="rounded-2xl border border-white/[0.07] bg-black/20 p-4 text-sm font-bold leading-7 text-[#8A8F98]"
                        >
                          {point}
                        </p>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

