const highlightClass = "font-bold text-blue-700";

export default function About() {
  return (
    <section id="a-propos" className="w-full bg-white py-3 scroll-mt-20" aria-labelledby="about-heading">
        <div className="w-full h-full bg-[#FAFAFC]">
      <div className="section-inner w-full bg-surface-alt">
        <div className="section-container">
          <header className="mb-12 text-center md:mb-16 lg:mb-20">
            <h2
              id="about-heading"
              className="section-heading mb-4 font-semibold"
            >
              À propos
            </h2>
            <h3 className="section-subheading">Qui suis-je ?</h3>
          </header>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
            {/* Photo en premier sur mobile, à droite sur lg */}
            <div className="flex min-w-0 flex-1 justify-center lg:order-2 lg:justify-end">
              <img
                src="/image/8AF85672-F10D-4ADB-BF46-CB2A99B91BB7.JPEG"
                alt="Keryan Bouzerda, développeur web full stack"
                className="h-auto w-full max-w-md object-contain transition-transform duration-300 ease-out hover:scale-[1.01] motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
            </div>
            {/* Texte en dessous sur mobile (centré), à gauche sur lg */}
            <div className="min-w-0 flex-1 text-center md:text-left lg:order-1 lg:max-w-xl">
              <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
                <div className="h-1 w-4 rounded-full bg-blue-700" />
                <h3 className="font-bold text-blue-700">Keryan BOUZERDA</h3>
              </div>
              <div className="text-base leading-7 text-black sm:text-lg sm:leading-8">
                <p className="mb-8">
                  Je suis développeur web en formation, animé par une réelle{" "}
                  <span className={highlightClass}>passion</span> pour le
                  numérique et la création d&apos;expériences web modernes.
                  Actuellement en études, je développe progressivement mes{" "}
                  <span className={highlightClass}>compétences</span> en
                  intégration et en programmation afin de concevoir des sites
                  internet <span className={highlightClass}>performants</span>,{" "}
                  <span className={highlightClass}>esthétiques</span> et adaptés
                  aux besoins des utilisateurs.
                </p>
                <p>
                  J&apos;accorde une grande importance à la{" "}
                  <span className={highlightClass}>qualité du code</span>, à la
                  clarté de l&apos;interface et à l&apos;optimisation des{" "}
                  <span className={highlightClass}>performances</span>. Curieux
                  et autodidacte, je prends le temps d&apos;explorer de
                  nouvelles <span className={highlightClass}>technologies</span>{" "}
                  et de perfectionner mes connaissances à travers des projets
                  concrets. Mon <span className={highlightClass}>objectif</span>{" "}
                  est d&apos;évoluer continuellement dans le domaine du
                  développement web et de proposer des{" "}
                  <span className={highlightClass}>solutions</span> fiables,
                  efficaces et durables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
