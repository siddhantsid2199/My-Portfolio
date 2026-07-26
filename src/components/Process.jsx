import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { processContent } from '../data/portfolioData';

const TagCard = ({ card, index, activeIndex, className }) => {
  const isActive = activeIndex === index;

  return (
    <article
      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-delay={100 + index * 100}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center transition-all duration-700 z-10 ${className} ${
        isActive
          ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)] scale-[1.03]'
          : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20" />
      </div>

      <div className={`w-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-red-200' : 'text-gray-400'
        }`}>
          {card.number}
        </span>
        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>
          {card.title}
        </h3>
        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-500'
        }`}>
          {card.text}
        </p>
      </div>
    </article>
  );
};

const Process = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActiveIndex(Math.min(3, Math.max(0, Math.floor(latest * 4))));
  });

  const positions = [
    "md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6",
    "md:absolute md:top-[370px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6",
    "md:absolute md:top-[610px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3",
    "md:absolute md:top-[880px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3",
  ];

  const path = "M 650,180 C 430,250 220,330 300,500 C 390,670 740,640 700,790 C 660,950 430,970 300,1020";

  return (
    <section
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1140px]">
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            {processContent.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            {processContent.heading}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            {processContent.description}
          </p>
        </div>

        <svg className="hidden md:block absolute top-0 left-0 w-full h-[1140px] pointer-events-none z-0" viewBox="0 0 1000 1140" preserveAspectRatio="none">
          <path d={path} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 10" />
          <mask id="process-path-mask">
            <motion.path d={path} fill="none" stroke="white" strokeWidth="20" style={{ pathLength }} />
          </mask>
          <path d={path} fill="none" stroke="black" strokeWidth="2" strokeDasharray="8 10" mask="url(#process-path-mask)" className="drop-shadow-sm" />
        </svg>

        <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-px h-full border-l-2 border-dashed border-gray-300 pointer-events-none" />

        <div className="flex flex-col gap-10 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          {processContent.cards.map((card, index) => (
            <TagCard
              key={card.number}
              card={card}
              index={index}
              activeIndex={activeIndex}
              className={positions[index]}
            />
          ))}

          <div data-aos="fade-in" data-aos-delay="600" className="hidden md:block absolute top-[1060px] left-[60%] text-3xl text-gray-600 rotate-6 italic">
            {processContent.endText}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
