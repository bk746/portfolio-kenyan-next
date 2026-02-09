export default function Hero() {
  return (
    <section id="accueil" className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero-vid-2.mp4"
        muted
        autoPlay
        loop
        playsInline
        aria-hidden
      />
      {/* Overlay pour assurer le contraste du texte sur la vidéo */}
      <div
        className="absolute inset-0 z-1 bg-black/35"
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
