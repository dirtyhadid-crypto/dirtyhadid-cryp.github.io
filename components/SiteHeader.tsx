import Link from "next/link";
import { navItems } from "@/lib/content";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.07] bg-[#020204]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-10">
        <Link href="/" className="text-[15px] font-extrabold text-white">
          IVF Notes
        </Link>
        <nav className="flex items-center gap-5 text-xs font-bold text-[#8A8F98] sm:gap-8 sm:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

