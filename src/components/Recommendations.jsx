const recommendations = [
  {
    name: "Mohammad Dehghani",
    relationship: "Professor @Northeastern University",
    image: "/recommendations/professor-recommendation.png",
  },
  {
    name: "Milena Dufour",
    relationship: "Lead Analyst @Viatris",
    image: "/recommendations/manager-recommendation.png",
  },
];

const Recommendations = () => (
  <section
    id="recommendations"
    className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
  >
    <div className="absolute top-10 right-10 w-72 h-72 bg-black/10 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-10 left-10 w-72 h-72 bg-black/10 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div data-aos="fade-up" className="mb-14 md:mb-16 text-center">
        <div className="inline-block border border-black/20 rounded-full px-5 py-1.5 text-sm text-black/70 font-bold mb-6 shadow-sm bg-white/20 backdrop-blur-sm">
          Professional Endorsements
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4 uppercase">
          Recommendation
        </h2>
        <p className="text-red-50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-semibold">
          Recommendations from professionals who have directly managed and worked with me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        {recommendations.map((recommendation, index) => (
          <article
            key={recommendation.name}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 150}
            className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-3 md:p-5 hover:scale-[1.01] hover:bg-black/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500 flex flex-col"
          >
            <div className="px-3 pt-2 pb-4">
              <div>
                <h3 className="text-white text-lg md:text-xl font-black">{recommendation.name}</h3>
                <p className="text-white/50 text-xs md:text-sm font-semibold">{recommendation.relationship}</p>
              </div>
            </div>

            <button
              type="button"
              className="flex flex-1 items-center w-full overflow-hidden rounded-2xl border border-white/10 bg-white cursor-zoom-in"
              onClick={(event) => event.currentTarget.querySelector('img')?.requestFullscreen?.()}
              aria-label={`View ${recommendation.name}'s recommendation full screen`}
            >
              <img
                src={recommendation.image}
                alt={`LinkedIn recommendation from ${recommendation.name}`}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </button>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Recommendations;
