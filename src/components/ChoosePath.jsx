"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ChoosePath() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const paths = [
    {
      title: "Panchakarma Treatment",
      desc: "Doctor-led personalized care for chronic and difficult conditions, including medically supervised Panchakarma.",
      points: ["Doctor-supervised therapies", "Customized dietary plans", "Daily clinical assessment"],
      image: "/images/help2.jpg",
      link: "/treatment",
    },
    {
      title: "Learn Ayurveda",
      desc: "Authentic clinical learning through online courses and immersive programs for serious students and health professionals.",
      points: ["Structured curriculum", "One-on-one mentorship", "Practical clinical exposure"],
      image: "/images/help4.jpg",
      link: "/learn",
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-black text-white pt-32 pb-20 px-6">
      
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={`bg-${hoveredIndex}`}
            src={paths[hoveredIndex].image}
            alt="background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16 mt-8"
      >
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
           <Sparkles size={16} className="text-secondary" />
           <span className="text-sm font-semibold tracking-widest uppercase text-zinc-300">Your Journey</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg">Choose Your Path</h2>
      </motion.div>

      {/* Floating Glass Cards Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-stretch h-full mt-4">
        {paths.map((path, index) => {
           const isActive = hoveredIndex === index;
           
           return (
            <motion.div
              key={index}
              className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] transition-all duration-700 ease-out border overflow-hidden backdrop-blur-xl md:w-1/2 min-h-[450px]
                ${isActive 
                  ? 'bg-white/15 border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.1)] -translate-y-4' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10 scale-95 opacity-70'}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              style={{ cursor: "pointer" }}
            >
              {/* Inner glowing orb effect for active card */}
              {isActive && (
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/20 rounded-full blur-[80px]" />
              )}

              <div className="relative z-10 flex flex-col h-full">
                <h3 className={`text-3xl lg:text-4xl font-bold mb-6 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/80'}`}>
                  {path.title}
                </h3>
                 
                <p className={`text-lg mb-8 leading-relaxed transition-all duration-500 ${isActive ? 'text-white/90' : 'text-white/60'}`}>
                  {path.desc}
                </p>
                 
                <div className="space-y-4 mb-auto">
                  {path.points.map((point, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${isActive ? 'bg-secondary' : 'bg-white/30'}`} />
                      <span className={`font-medium ${isActive ? 'text-white/90' : 'text-white/50'}`}>{point}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link href={path.link} className="w-full block">
                      <button className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-lg transition-all duration-500
                        ${isActive 
                          ? 'bg-white text-black shadow-xl hover:scale-[1.02]' 
                          : 'bg-white/10 text-white group-hover:bg-white/20'}
                      `}>
                        <span>Explore {index === 0 ? "Clinical Care" : "Programs"}</span>
                        <ArrowRight size={20} className={isActive ? "text-black" : "text-white/60"} />
                      </button>
                  </Link>
                </div>
              </div>
            </motion.div>
           )
        })}
      </div>
    </section>
  );
}
