import { experienceList } from '../data/portfolioData';

const Experience = () => (
  <section id="experience" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
    <div className="absolute top-10 right-10 w-72 h-72 bg-black/10 rounded-full blur-[100px] pointer-events-none" />
    <div className="max-w-6xl mx-auto relative z-10">
      <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
        <div className="inline-block border border-black/20 rounded-full px-5 py-1.5 text-sm text-black/70 font-bold mb-6 bg-white/20 backdrop-blur-sm">
          Professional Journey
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4 uppercase">Experience</h2>
        <p className="text-red-50 text-base md:text-lg max-w-2xl mx-auto font-semibold">
          Enterprise analytics, automation, teaching, and team leadership grounded in measurable business outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {experienceList.map((item, index) => (
          <article
            key={`${item.organization}-${item.role}`}
            data-aos="fade-up"
            data-aos-delay={index * 120}
            className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-7 md:p-8 hover:scale-[1.01] hover:bg-black/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <p className="text-white/60 text-xs font-black uppercase tracking-[0.18em] mb-2">{item.organization}</p>
                <h3 className="text-white text-2xl font-black tracking-tight">{item.role}</h3>
              </div>
              <div className="sm:text-right shrink-0">
                <p className="text-white text-sm font-bold">{item.duration}</p>
                <p className="text-white/50 text-xs mt-1">{item.location}</p>
              </div>
            </div>
            <ul className="space-y-3">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-red-50/90 text-sm leading-relaxed font-medium">
                  <span className="text-black font-black mt-0.5">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
