import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses =
    "rounded-md px-3 py-2 text-sm font-medium text-[#94A3B8] transition-colors duration-200 hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]";

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0F172A]/85 text-[#F8FAFC] shadow-lg shadow-black/5 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
      >
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          aria-label="Dani Téllez home"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex size-10 items-center justify-center rounded-xl border border-[#60A5FA]/25 bg-gradient-to-br from-[#3B82F6]/25 to-[#1E293B] text-sm font-bold text-[#BFDBFE] shadow-inner shadow-white/5 transition duration-300 group-hover:border-[#60A5FA]/50 group-hover:shadow-[#3B82F6]/15">
            DT
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#F8FAFC] sm:text-base">
              Dani Téllez
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
              Portfolio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className={linkClasses}>
              {label}
            </a>
          ))}
        </div>

        <a
          href="/Dani-Tellez-CV.pdf"
          download
          className="hidden items-center gap-2 rounded-lg border border-[#3B82F6]/40 bg-[#3B82F6] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/15 transition duration-200 hover:-translate-y-0.5 hover:border-[#60A5FA] hover:bg-[#2563EB] hover:shadow-[#3B82F6]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] md:inline-flex"
        >
          <span>Download CV</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="size-4"
          >
            <path
              d="M10 2.75v9.5m0 0 3.5-3.5M10 12.25l-3.5-3.5M3.75 13.5v2.75h12.5V13.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 text-[#94A3B8] transition-colors duration-200 hover:border-white/20 hover:bg-white/5 hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="relative flex size-5 flex-col items-center justify-center">
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                isMenuOpen ? "scale-x-0 opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`overflow-hidden border-t border-white/[0.06] bg-[#0F172A]/95 transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3 sm:px-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`${linkClasses} px-3 py-3`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="/Dani-Tellez-CV.pdf"
            download
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#3B82F6] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Download CV</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="size-4"
            >
              <path
                d="M10 2.75v9.5m0 0 3.5-3.5M10 12.25l-3.5-3.5M3.75 13.5v2.75h12.5V13.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
