"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import PanchakarmaCarousel from "./PanchakarmaCarousel";

export default function ChoosePath() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32 pb-20 px-6">
      
      {/* Marble Background with Gold Veins */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[#f7e7ce]" /> {/* Base secondary color fallback */}
        <Image 
          src="/bg-marble.png" 
          alt="Marble Background" 
          fill 
          className="object-cover opacity-60" 
        />
        {/* Soft overlay to ensure readability and blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-0 mt-8"
      >
        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-200/50 mb-6 shadow-sm">
           <Sparkles size={16} className="text-emerald-700" />
           <span className="text-sm font-semibold tracking-widest uppercase text-emerald-900">Your Journey</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-emerald-950 drop-shadow-sm">Choose Your Path</h2>
      </motion.div>

      {/* Center the Wheel in the section */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center">
        <PanchakarmaCarousel />
      </div>
    </section>
  );
}
