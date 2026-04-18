"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FloatingLeaf = ({ className, delay }) => (
  <motion.div
    className={`absolute opacity-[0.03] pointer-events-none z-0 ${className}`}
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
    <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor" className="text-primary blur-[2px]">
      <path d="M21.4,11.6C21.4,11.6 15,-1.3 2.1,3.2C2.1,3.2 -1.4,15 11.6,21.4C12.4,21.7 13.2,21.9 14,21.9C18.6,21.9 21.4,11.6 21.4,11.6Z" />
    </svg>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-b from-white to-zinc-50/50">
      <FloatingLeaf className="top-[15%] left-[5%] scale-125" delay={0} />
      <FloatingLeaf className="top-[60%] left-[30%] scale-75 opacity-[0.02]" delay={3} />
      <FloatingLeaf className="bottom-10 md:top-[20%] right-[10%] scale-100 -rotate-45" delay={6} />
      
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent z-10 md:hidden block" />
        
        {/* Mobile Background */}
        <div className="md:hidden block absolute inset-0">
          <Image
            src="/images/hero-mobile.png"
            alt="Himalayan Ayurvedic Retreat Mobile"
            fill
            className="object-cover opacity-90 object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/hero-new.png"
            alt="Himalayan Ayurvedic Retreat"
            fill
            className="object-cover opacity-90 object-right"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Doctor-led <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">personalized</span> Ayurvedic care in the Himalayas
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            For chronic and difficult-to-treat conditions, with medically supervised Panchakarma and structured Ayurvedic learning programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm font-medium text-gray-500 flex items-center space-x-2"
          >
            <span>Personalized</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Doctor-supervised</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>15+ years clinical experience</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Start with a Consultation
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-4 rounded-full text-lg font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1">
              Explore Treatment
            </button>
          </motion.div>
        </div>

        {/* Hero image placeholder matching descriptions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden md:block"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md ml-auto translate-x-4">
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
            <img
              src="/images/doctor1.jpg"
              alt="Two doctors environmental portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
