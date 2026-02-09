"use client";

import { useState, useEffect } from "react";

const SCROLL_THRESHOLD = 20;

const NAV_LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "A propos" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#skills", label: "Skills" },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navBg = isScrolled ? "bg-white" : "bg-black";
  const navLinkClass = `text-xl font-medium transition-all duration-300 ease-out ${
    isScrolled ? "text-black hover:text-blue-500" : "text-white hover:text-blue-400"
  }`;
  const logoClass = isScrolled ? "text-black" : "text-white";
  const btnClass = isScrolled
    ? "rounded-full bg-blue-500 px-5 py-3 text-lg font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-blue-600"
    : "rounded-full bg-blue-700 px-5 py-3 text-lg font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-white hover:text-black";

  const iconColor = isScrolled ? "bg-black" : "bg-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 flex h-15 w-full items-center justify-between px-5 sm:px-8 md:px-10 transition-colors duration-300 ${navBg}`}
      >
        <a href="#accueil" className={`text-2xl sm:text-3xl font-bold ${logoClass}`}>
          BK<span className="text-blue-500">.</span>
        </a>

        {/* Desktop: liens + bouton — visible à partir de md */}
        <ul className="hidden md:flex md:gap-8 lg:gap-10">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={navLinkClass}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={`hidden md:inline-block ${btnClass}`}>
          Contact
        </a>

        {/* Mobile: bouton hamburger — visible en dessous de md */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          className="flex flex-col justify-center gap-1.5 w-10 h-10 p-2 rounded-lg md:hidden transition-colors hover:opacity-80"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${iconColor} ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${iconColor} ${isMenuOpen ? "opacity-0 scale-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${iconColor} ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Overlay mobile: fond blanc + liens — uniquement en dessous de md */}
      <div
        className={`fixed inset-0 z-40 bg-white md:hidden transition-[opacity,visibility] duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col items-center justify-center min-h-full gap-6 sm:gap-8 pt-20 pb-10 px-5">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-xl sm:text-2xl font-medium text-black hover:text-blue-500 transition-colors py-2"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-blue-500 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-600 transition-colors mt-2"
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}