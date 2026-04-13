"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { useRef } from "react";

export default function Doctors() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const doctors = [
    {
      name: "Dr. Ananya Sharma",
      title: "BAMS, MD (Ayurveda)",
      desc: "12+ years clinical experience managing chronic digestive, autoimmune, respiratory, and metabolic conditions. Focused on personalized, root-cause–based treatment and long-term care.",
      img: "/images/doctor1.jpg",
    },
    {
      name: "Dr. Vikram Singh",
      title: "BAMS, MSc (Health)",
      desc: "Clinical expertise in complex and long-standing conditions with emphasis on individualized treatment planning and careful supervision.",
      img: "/images/doctor2.jpg",
    },
  ];

  return (
    <section ref={containerRef} className="py-24 md:pt-32 md:pb-64 bg-zinc-950 text-white relative overflow-x-hidden border-t-8 border-primary w-full flex-shrink-0">
      {/* Editorial Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Background Typography */}
      <div className="absolute top-10 left-10 md:top-32 md:left-24 text-[12vw] font-bold text-white/[0.02] uppercase tracking-tighter whitespace-nowrap pointer-events-none leading-none select-none">
        AyurCare Masters
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
          <div className="max-w-2xl">
            <div className="w-16 h-1 bg-secondary mb-8" />
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Meet the <br/> <span className="text-zinc-500 font-light italic">Doctors</span></h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
              Experienced Ayurvedic physicians personally guiding your treatment and learning journey.
            </p>
          </div>
          <button className="flex items-center space-x-3 text-secondary font-medium hover:text-white transition-colors group pb-2 border-b border-secondary/30 hover:border-white">
            <span className="text-lg tracking-wide uppercase">View Full Faculty</span>
            <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

        {/* Editorial Staggered Layout */}
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
          
          {/* Doctor 1 - Left align, large image, parallax up */}
          <motion.div 
            style={{ y: y1 }}
            className="w-full md:w-5/12 flex flex-col relative z-20"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 group shadow-2xl shadow-black/50">
               <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
               <img
                 src={doctors[0].img}
                 alt={doctors[0].name}
                 className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-[50%] transition-all duration-[1.5s] ease-out group-hover:scale-105"
               />
               {/* Editorial quote tag */}
               <div className="absolute top-6 left-6 w-12 h-12 bg-white flex items-center justify-center rounded-xl text-black z-20 shadow-xl">
                 <Quote size={20} className="fill-black" />
               </div>
            </div>
            
            <h3 className="text-4xl font-bold mb-3">{doctors[0].name}</h3>
            <h4 className="text-secondary font-medium text-lg mb-6 uppercase tracking-widest">{doctors[0].title}</h4>
            <p className="text-zinc-400 leading-relaxed text-lg font-light mb-8 max-w-md">
              {doctors[0].desc}
            </p>
          </motion.div>

          {/* Doctor 2 - Right align, offset down, parallax down */}
          <motion.div 
            style={{ y: y2 }}
            className="w-full md:w-6/12 flex flex-col items-start md:items-end md:ml-auto md:mt-48 relative z-10"
          >
            <div className="relative w-full md:max-w-md aspect-square md:aspect-[3/4] rounded-[2rem] overflow-hidden mb-8 group shadow-2xl shadow-black/50 border border-zinc-800">
               <img
                 src={doctors[1].img}
                 alt={doctors[1].name}
                 className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-105"
               />
            </div>
            
            <div className="md:text-right max-w-md">
              <h3 className="text-4xl font-bold mb-3">{doctors[1].name}</h3>
              <h4 className="text-primary font-medium text-lg mb-6 uppercase tracking-widest">{doctors[1].title}</h4>
              <p className="text-zinc-400 leading-relaxed text-lg font-light mb-8">
                {doctors[1].desc}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
