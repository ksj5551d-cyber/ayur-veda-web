"use client";

import { motion } from "framer-motion";
import { UserCheck, Sliders, Clock, Star } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="pt-20 md:pt-40 pb-20 bg-zinc-50 relative border-t-4 border-white min-h-screen flex flex-col justify-start">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center space-x-2 text-primary font-bold mb-4 uppercase tracking-widest text-sm">
             <Star size={16} className="fill-secondary text-secondary" />
             <span>The AyurCare Standard</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            Why Patients Trust Our Clinical Approach
          </h2>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          
          {/* Main Large Bento Box - Span 2 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
            className="lg:col-span-2 lg:row-span-2 bg-zinc-900 text-white rounded-[2.5rem] overflow-hidden flex flex-col relative group"
          >
            <div className="absolute inset-0 w-full h-[55%]">
               <img 
                 src="/images/help1.jpg" 
                 alt="Doctor Supervised Care" 
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
               />
               {/* <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" /> */}
            </div>
            
            <div className="relative z-10 p-6 md:p-14 mt-auto flex flex-col h-full justify-end">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-secondary mb-8 border border-white/10">
                 <UserCheck size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Doctor-Led & Personally Supervised Care
              </h3>
              <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
                Every patient is personally evaluated and supervised by the doctor throughout treatment. We intentionally accept a limited number of patients to ensure deep clinical oversight and dedicated healing environments.
              </p>
            </div>
          </motion.div>

          {/* Small Bento Box 1 - Primary Green */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="lg:col-span-1 lg:row-span-1 bg-primary rounded-[2.5rem] p-6 md:p-10 flex flex-col relative overflow-hidden group shadow-xl shadow-primary/20"
          >
            {/* Subtle background abstract shape */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            
            <div className="flex justify-between items-start mb-auto relative z-10">
               <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/20">
                 <Sliders size={28} />
               </div>
            </div>
            
            <div className="relative z-10 mt-6">
              <h3 className="text-2xl font-bold text-white mb-4">Dynamic, Response-Based</h3>
              <p className="text-white/80 font-medium leading-relaxed">
                Treatment plans are not fixed in advance. Decisions are made daily, adjusting herbs and therapies based directly on your body&apos;s response.
              </p>
            </div>
          </motion.div>

          {/* Small Bento Box 2 - Image Heavy / Warm Tone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="lg:col-span-1 lg:row-span-1 bg-secondary rounded-[2.5rem] p-6 md:p-10 text-zinc-900 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute inset-0">
               <img src="/images/help4.jpg" alt="15 Years Experience" className="w-full h-full object-cover opacity-20 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000" />
            </div>

            <div className="flex justify-between items-start mb-auto relative z-10">
               <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center text-zinc-900 border border-white/40">
                 <Clock size={28} />
               </div>
            </div>
            
            <div className="relative z-10 mt-6">
              <h3 className="text-2xl font-bold mb-4 tracking-tight">15+ Years Managing Complex Cases</h3>
              <p className="text-zinc-800 font-medium leading-relaxed">
                Over a decade of successful clinical experience working specifically with individuals facing long-standing and exceptionally difficult health challenges.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
