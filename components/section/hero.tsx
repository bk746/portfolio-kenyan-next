const YOUTUBE_VIDEO_ID = "8-Km7S6SlAw";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&rel=0&showinfo=0&vq=hd2160`;

export default function Hero() {
  return (
    <section id="accueil" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 min-h-full min-w-full">
        <iframe
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] min-w-[177.78vh] w-[177.78vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src={YOUTUBE_EMBED_URL}
          title="Vidéo de fond"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          aria-hidden
        />
      </div>
      {/* Overlay pour assurer le contraste du texte sur la vidéo */}
      <div
        className="absolute inset-0 z-[1] bg-black/35"
        aria-hidden
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center gap-6 pt-60 text-center sm:text-left">
        <h1
          className="text-8xl font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5),0_0_24px_rgba(0,0,0,0.3)]"
        >
          Keryan <span className="text-white">Bouzerda</span>
        </h1>
        <div className="flex items-center gap-3">
          <div className="h-1 w-9 rounded-full bg-blue-700 shadow-[0_2px_8px_rgba(0,0,0,0.4)]" />
          <h2
            className="text-3xl font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.3)]"
          >
            Développeur web full stack
          </h2>
        </div>
        <div className="mt-11 flex gap-6">
          <button
            type="button"
            className="cursor-pointer rounded-full bg-blue-700 px-8 py-3 text-2xl text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:bg-blue-800"
          >
            Me contacter
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full border border-white bg- px-8 py-3 text-2xl text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:border-blue-700 hover:bg-blue-700 hover:text-white"
          >
            Mes réalisations
          </button>
        </div>
      </div>
    </section>
  );
}
