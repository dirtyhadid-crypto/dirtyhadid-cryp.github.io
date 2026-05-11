import Link from "next/link";
import BookCover from "@/components/BookCover";
import SiteHeader from "@/components/SiteHeader";
import { books } from "@/lib/content";

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-[#020204] text-white">
      <SiteHeader />
      <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(20,123,255,0.16),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#3A8BFF]">
              Books
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-6xl">
              四本书的试管婴儿阅读入口
            </h1>
            <p className="mt-6 text-base font-bold leading-8 text-[#8A8F98] sm:text-lg">
              每本书都整理成独立小封面和章节目录。点击进入后，可以直接阅读对应章节提炼内容。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {books.map((book) => (
              <Link
                key={book.slug}
                href={`/books/${book.slug}`}
                className="group block"
              >
                <BookCover
                  title={book.title}
                  eyebrow={book.eyebrow}
                  coverLine={book.coverLine}
                  coverCode={book.coverCode}
                  color={book.color}
                  small
                />
                <div className="mt-5 rounded-3xl border border-white/[0.07] bg-white/[0.035] p-6 transition-colors duration-300 group-hover:border-[#3A8BFF]/45">
                  <h2 className="text-xl font-extrabold text-white">
                    {book.title}
                  </h2>
                  <p className="mt-3 text-sm font-bold leading-7 text-[#8A8F98]">
                    {book.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

