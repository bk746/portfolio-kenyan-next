const YOUTUBE_VIDEO_ID = "8-Km7S6SlAw";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&rel=0&showinfo=0&vq=hd2160`;

export default function Hero() {
  return (
    <section id="accueil" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 min-h-full min-w-full">
        <iframe
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] min-w-[177.78vh] w-[177.78vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block"
          src={YOUTUBE_EMBED_URL}
          title="Vidéo de fond"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          aria-hidden
        />
        <video
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] min-w-[177.78vh] w-[177.78vh] -translate-x-1/2 -translate-y-1/2 object-cover md:hidden"
          src="/bg-animate-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      </div>
      {/* Overlay pour assurer le contraste du texte sur la vidéo */}
      <div
        className="absolute inset-0 z-[1] bg-black/35"
        aria-hidden
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 pt-16 sm:px-6 sm:pt-0 md:items-center md:gap-6 md:pt-60">
        <div className="flex max-w-full flex-col items-center gap-4 text-center sm:gap-6">
          <h1
            className="text-5xl font-bold leading-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5),0_0_24px_rgba(0,0,0,0.3)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Keryan <span className="text-white">Bouzerda</span>
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-9 rounded-full bg-blue-700 shadow-[0_2px_8px_rgba(0,0,0,0.4)]" />
            <h2
              className="text-lg font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.3)] sm:text-xl md:text-2xl lg:text-3xl"
            >
              Développeur web full stack
            </h2>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6 sm:mt-11">
            <a
              href="#contact"
              className="cursor-pointer rounded-full bg-blue-700 px-8 py-2.5 text-center text-base text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:bg-blue-800 sm:px-10 sm:py-3 sm:text-xl"
            >
              Me contacter
            </a>
            <a
              href="#realisations"
              className="cursor-pointer whitespace-nowrap rounded-full border border-white bg-transparent px-8 py-2.5 text-center text-base text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:border-blue-700 hover:bg-blue-700 sm:px-10 sm:py-3 sm:text-xl"
            >
              Mes réalisations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
