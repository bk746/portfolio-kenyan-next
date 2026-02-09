const CONTACT_INTRO =
  "Actuellement à la recherche d'un stage de 6 à 10 semaines en développement web full stack et mobile, je souhaite rejoindre une équipe dynamique pour mettre mes compétences en pratique et progresser. Basé à Annecy 74000, je suis disponible pour un entretien ou toute information complémentaire.";

const CONTACTS = [
  {
    type: "Téléphone",
    value: "07 81 99 07 61",
    href: "tel:+33781990761",
    label: "Appeler",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
  },
  {
    type: "Email",
    value: "keryanbouzerda9@gmail.com",
    href: "mailto:keryanbouzerda9@gmail.com",
    label: "Envoyer un email",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
] as const;

const cardClass =
  "flex flex-col items-center rounded-2xl border border-[#0073DE]/15 bg-white p-8 text-center shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]";
const iconWrapClass =
  "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0073DE]";
const ctaClass =
  "w-full rounded-xl bg-[#0073DE] px-5 py-3 text-center font-semibold text-white";

export default function Contact() {
  return (
    <section id="contact" className="w-full overflow-hidden bg-white scroll-mt-20">
      <div className="section-inner w-full bg-surface">
        <header className="section-header">
          <h2 className="section-heading">Contact</h2>
          <h3 className="section-subheading">Me contacter</h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/85 sm:text-lg">
            {CONTACT_INTRO}
          </p>
        </header>
        <div className="section-container-narrow grid grid-cols-1 gap-8 sm:grid-cols-2">
          {CONTACTS.map(({ type, value, href, label, icon }) => (
            <a key={type} href={href} className={cardClass}>
              <div className={iconWrapClass}>
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {icon}
                </svg>
              </div>
              <span className="mb-1 text-sm font-medium uppercase tracking-wider text-black/70">
                {type}
              </span>
              <span
                className={`mb-5 font-semibold text-black ${
                  type === "Email" ? "break-all text-lg" : "text-xl"
                }`}
              >
                {value}
              </span>
              <span className={ctaClass}>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
