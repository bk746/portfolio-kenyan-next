"use client";

import Image from "next/image";
import { useState } from "react";

const IMAGE_FALLBACK = "/image/8AF85672-F10D-4ADB-BF46-CB2A99B91BB7.JPEG";

function ProjetImage({
  src,
  fallback,
  alt,
  className,
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => setCurrentSrc(fallback)}
    />
  );
}

const PROJETS = [
  {
    titre: "Dashboard",
    sousTitre: "Interface de gestion",
    outils: ["Next.js"],
    image: "/image/dashboard-img.png",
    bgClass: "bg-black",
    titreClass: "text-[#0073DE]",
    sousTitreClass: "text-white",
    lien: "https://dashboard-next-zcf5.vercel.app/",
  },
  {
    titre: "Site vitrine next.js wp headless",
    sousTitre: "rapide et efficace",
    outils: ["Next.js", "WordPress"],
    image: "/image/losprimos-img.png",
    bgClass: "bg-emerald-900",
    titreClass: "text-white",
    sousTitreClass: "text-emerald-200",
  },
  {
    titre: "Site wordpress",
    sousTitre: "Design & gestion facile",
    outils: ["WordPress"],
    image: "/image/wordpressimg.png",
    bgClass: "bg-[#ABA498]",
    titreClass: "text-white",
    sousTitreClass: "text-white",
  },
  {
    titre: "Portfolio",
    sousTitre: "Design & code",
    outils: ["Next.js"],
    image: "/image/portfolio.png",
    bgClass: "bg-black",
    titreClass: "text-[#0073DE]",
    sousTitreClass: "text-white",
  },
] as const;

export default function Projet() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setActiveIndex((current) => (current === index ? null : index));
    }
  };

  const handleCardTouchEnd = (e: React.TouchEvent, index: number) => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;

    const el = e.target as HTMLElement;
    // Si on touche le bouton / lien « Ouvrir », on laisse le navigateur gérer le clic (navigation)
    if (el.closest("a") || el.closest("button")) {
      return;
    }

    e.preventDefault();
    setActiveIndex((current) => (current === index ? null : index));
  };

  const handleOverlayBackdropClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setActiveIndex(null);
    }
  };

  return (
    <section
      id="realisations"
      className="w-full overflow-hidden bg-white scroll-mt-20 "
      aria-labelledby="projets-heading"
    >
      <div className="w-full h-full bg-[#FAFAFC]">
      <div className="section-inner w-full bg-white px-0 py-16 md:px-12 md:py-24">
        <header className="section-header px-5 md:px-0">
          <h2 id="projets-heading" className="section-heading font-semibold text-black">
            Réalisation
          </h2>
          <h3 className="section-subheading">Projets sélectionnés</h3>
        </header>
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:px-0">
          {PROJETS.map((projet, index) => {
            const isActive = activeIndex === index;
            return (
            <article
              key={index}
              onClick={() => handleCardClick(index)}
              onTouchEnd={(e) => handleCardTouchEnd(e, index)}
              className={`group relative overflow-hidden rounded-none border-0 ${projet.bgClass} min-h-80 sm:min-h-95 md:min-h-105 flex flex-col text-center shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#0073DE] focus-within:ring-offset-4 focus-within:ring-offset-[#F1ECED] touch-manipulation`}
            >
              <div className="relative z-10 shrink-0 flex flex-col items-center gap-3 px-0 py-6 text-center sm:p-8">
                <h4 className="text-lg sm:text-xl font-bold tracking-tight leading-tight text-white">
                  {projet.titre}
                </h4>
                <p className="text-sm sm:text-base font-bold text-white">
                  {projet.sousTitre}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {projet.outils.map((outil) => (
                    <span
                      key={outil}
                      className="px-3 py-1 text-xs font-bold text-white bg-white/20 backdrop-blur-sm"
                    >
                      {outil}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-auto w-full min-h-35 flex-1 overflow-hidden sm:min-h-45">
                <ProjetImage
                  src={projet.image}
                  fallback={IMAGE_FALLBACK}
                  alt={projet.titre}
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
              </div>

              <div
                role="presentation"
                className={`absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-300 ${
                  isActive
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto"
                }`}
                onClick={handleOverlayBackdropClick}
                onTouchEnd={(e) => {
                  const el = e.target as HTMLElement;
                  if (!el.closest("a") && !el.closest("button")) {
                    handleOverlayBackdropClick();
                  }
                }}
              >
                {"lien" in projet && projet.lien ? (
                  <a
                    href={projet.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#0073DE] px-6 py-3 font-semibold text-white shadow-xl transition-all duration-200 hover:bg-[#005bb5] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-8 sm:py-3.5 inline-flex items-center justify-center rounded touch-manipulation"
                  >
                    <span className="flex items-center gap-2">
                      Ouvrir
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#0073DE] px-6 py-3 font-semibold text-white shadow-xl transition-all duration-200 hover:bg-[#005bb5] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-8 sm:py-3.5 touch-manipulation"
                  >
                    <span className="flex items-center gap-2">
                      Ouvrir
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </article>
          )})}
        </div>
      </div>
      </div>
    </section>
  );
}
