import { education } from '../data/portfolioData';

const Education = () => (
  <section id="education" className="bg-[#0a0a0a] py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]" />
    <div className="max-w-6xl mx-auto relative z-10">
      <div
        data-aos="fade-up"
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-10 hover:border-red-500/30 transition-all duration-500"
      >
        <div>
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-7">Education</div>
          <p className="text-red-400 font-black uppercase tracking-[0.18em] text-sm mb-3">{education.institution}</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight max-w-3xl">{education.degree}</h2>
          <p className="text-white/50 font-semibold mt-5">{education.location} · {education.dates}</p>
        </div>
        <div className="shrink-0 md:text-right">
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-bold mb-2">GPA</p>
          <p className="text-5xl md:text-6xl font-black text-white">{education.gpa}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
