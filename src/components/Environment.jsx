"use client";

import { motion } from "framer-motion";

const FloatingLeaf = ({ className, delay }) => (
  <motion.div
    className={`absolute opacity-[0.04] pointer-events-none z-0 ${className}`}
    animate={{ 
      y: [0, -40, 0], 
      rotate: [0, 15, -10, 0],
      x: [0, 15, -15, 0]
    }}
    transition={{ 
      duration: 12, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: delay 
    }}
  >
    <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor" className="text-white blur-[2px]">
      <path d="M21.4,11.6C21.4,11.6 15,-1.3 2.1,3.2C2.1,3.2 -1.4,15 11.6,21.4C12.4,21.7 13.2,21.9 14,21.9C18.6,21.9 21.4,11.6 21.4,11.6Z" />
    </svg>
  </motion.div>
);

export default function Environment() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden mobile-bottom-spacer">
      {/* Background Image - Covers full height */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Himalayan Environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 w-full py-20">
        <FloatingLeaf className="top-[10%] left-[-5%] scale-125" delay={0} />
        <FloatingLeaf className="bottom-[10%] left-[25%] scale-75 rotate-45" delay={4} />
        
        <div className="flex flex-col space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              Healing Environment
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Healing in the <span className="text-secondary">Himalayan</span> Environment
            </h2>
            <p className="text-xl text-zinc-300 italic">
              "Nature itself is the best physician." — Hippocrates
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-zinc-300 leading-relaxed max-w-xl"
          >
            AyurCare is located in Dharamshala, in the foothills of the Himalayas. The peaceful village environment, clean mountain air, and distance from city noise provide the ideal setting for rest, reflection, and clinical care. Many patients find that this environment enhances the depth of their treatment process.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-secondary hover:bg-secondary/90 text-primary px-10 py-4 rounded-full text-lg font-black transition-all shadow-xl shadow-secondary/10 hover:scale-105 active:scale-95">
              PLAN YOUR VISIT
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
