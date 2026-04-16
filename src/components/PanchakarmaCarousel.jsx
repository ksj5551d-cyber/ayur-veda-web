"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Droplet, Beaker, Flame, Leaf, ArrowRight } from "lucide-react";
import Image from "next/image";

const therapies = [
  {
    id: "nasya",
    name: "Nasya",
    title: "Nasal Administration",
    description:
      "Cleansing of the head and neck region through herbal oils or powders administered via the nasal passages. It relieves sinus issues, migraines, and improves mental clarity.",
    icon: Wind,
    image: "/nasya.png",
    color: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-500/50",
    textColor: "text-blue-500",
  },
  {
    id: "raktamokshan",
    name: "Raktamokshan",
    title: "Blood Purification",
    description:
      "A specialized therapy to cleanse the blood and treat deeply rooted skin disorders, inflammation, and toxic conditions by removing impure blood.",
    icon: Droplet,
    image: "/raktamokshan.png",
    color: "from-red-400 to-rose-500",
    shadow: "shadow-red-500/50",
    textColor: "text-red-500",
  },
  {
    id: "vaman",
    name: "Vaman",
    title: "Therapeutic Emesis",
    description:
      "A medicated cleansing therapy for removing excess Kapha (mucus) from the respiratory and upper gastrointestinal tract. Highly effective for asthma and allergies.",
    icon: Beaker,
    image: "/vaman.png",
    color: "from-teal-400 to-emerald-500",
    shadow: "shadow-teal-500/50",
    textColor: "text-teal-500",
  },
  {
    id: "virechan",
    name: "Virechan",
    title: "Therapeutic Purgation",
    description:
      "A targeted cleansing of the small intestine and associated organs to remove Pitta (fire) toxins. Excellent for liver health, metabolism, and skin conditions.",
    icon: Flame,
    image: "/virechan.png",
    color: "from-orange-400 to-amber-500",
    shadow: "shadow-orange-500/50",
    textColor: "text-orange-500",
  },
  {
    id: "basti",
    name: "Basti",
    title: "Enema Therapy",
    description:
      "The mother of all Panchakarma treatments. Utilizing herbal decoctions and oils to cleanse the colon, balancing Vata dosha and rejuvenating the entire system.",
    icon: Leaf,
    image: "/basti.png",
    color: "from-green-400 to-emerald-600",
    shadow: "shadow-green-500/50",
    textColor: "text-green-500",
  },
];

export default function PanchakarmaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      // Go backwards through the array to make the wheel rotate clockwise (+72 deg)
      setActiveIndex((prev) => (prev - 1 + therapies.length) % therapies.length);
    }, 5000); // 5 sec interval
    return () => clearInterval(timer);
  }, [isHovered]);

  // When active index changes, animate the rotation
  useEffect(() => {
    // We want the active index to rest at 0 degrees (pointing directly to the right).
    // Item i is at angle: i * (360 / 5) = i * 72
    // So target rotation should be - (activeIndex * 72)
    // To make it rotate shortest path, we handle modulo math.
    let targetRotation = -activeIndex * 72;
    
    // Nearest equivalent rotation to avoid spinning backwards fully
    const currentRotMod = rotation % 360;
    const targetRotMod = targetRotation % 360;
    
    let diff = targetRotMod - currentRotMod;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    
    setRotation(rotation + diff);
  }, [activeIndex]);

  const activeTherapy = therapies[activeIndex];

  return (
    <div className="w-full relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[600px]">
        
        {/* Left Side: The Semi-circle Carousel */}
        <div 
          className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] flex justify-center items-center overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Thick connecting ring mapping the layout of the image */}
          <motion.div 
            className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full border-[12px] border-emerald-400/80 shadow-2xl bg-emerald-50/30"
            animate={{ rotate: rotation }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Orbiting Items */}
            {therapies.map((therapy, i) => {
              const angle = i * 72; // 360 / 5
              const isActive = activeIndex === i;

              return (
                <div
                  key={therapy.id}
                  className={`absolute top-1/2 left-1/2 w-[50%] h-0 origin-left pointer-events-none ${isActive ? 'z-50' : 'z-20'}`}
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                    <motion.button
                    onClick={() => setActiveIndex(i)}
                    className={`relative flex items-center justify-center rounded-full transition-all duration-300 group
                      ${isActive ? 'w-20 h-20 md:w-24 md:h-24 scale-110 z-20' : 'w-16 h-16 md:w-20 md:h-20 scale-100 opacity-60 hover:opacity-100 z-10'}
                    `}
                    // Counter rotate to keep icons upright
                    animate={{ rotate: -rotation - angle }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  >
                    {/* Ring glow for active item */}
                    {isActive && (
                      <motion.div
                        layoutId="activeRing"
                        className={`absolute inset-[-4px] rounded-full border-2 bg-gradient-to-br ${therapy.color} opacity-20`}
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Image container with thick colored border to match image aesthetics */}
                    <div className={`w-full h-full rounded-full flex items-center justify-center border-4 relative shadow-lg
                      ${isActive ? 'border-emerald-500 shadow-2xl ' + therapy.shadow : 'border-emerald-400'} 
                      overflow-hidden bg-white
                    `}>
                      <Image 
                        src={therapy.image} 
                        alt={therapy.name} 
                        fill 
                        className={`object-cover transition-all duration-500 ${isActive ? 'scale-110 opacity-100' : 'opacity-80 group-hover:opacity-100'}`} 
                      />
                    </div>

                    {/* Straight left to right label underneath the image */}
                    <div 
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border 
                        transition-all duration-300 pointer-events-none
                        ${isActive ? `border-${therapy.color.split('-')[1]}-400 ring-2 ring-${therapy.color.split('-')[1]}-200 scale-110` : 'border-gray-200'}`}
                    >
                        <span className={`text-sm md:text-base font-bold ${isActive ? therapy.textColor : 'text-gray-700'}`}>
                          {therapy.name}
                        </span>
                    </div>

                  </motion.button>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Static Center Graphic */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 z-40 rounded-full flex items-center justify-center">
            {/* The Image inside its own border */}
            <div className="relative w-full h-full rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-white z-10">
                <Image src="/center.png" alt="Panchakarma Center" fill className="object-cover" />
            </div>

            {/* Continuously Revolving Full Name in a Circle */}
            <div className="absolute inset-[-40px] sm:inset-[-50px] lg:inset-[-60px] rounded-full pointer-events-none z-0 flex items-center justify-center">
                 <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible animate-[spin_16s_linear_infinite]">
                   <path id="textPath" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" fill="none" />
                   <text fontSize="15" fontWeight="600" fill="currentColor" letterSpacing="2px" className="text-emerald-600 uppercase">
                     {/* 2 * PI * 85 = 534 circumference */}
                     <textPath href="#textPath" startOffset="0" textLength="525" lengthAdjust="spacing">
                        AYURCARE • PANCHAKARMA DETOX • AYURCARE • PANCHAKARMA DETOX • 
                     </textPath>
                   </text>
                 </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full lg:w-1/2 lg:pl-16 mt-12 lg:mt-0 relative z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTherapy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-100"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 mb-6 border border-gray-100`}>
                <activeTherapy.icon className={`w-5 h-5 ${activeTherapy.textColor}`} />
                <span className={`text-sm font-bold uppercase tracking-wider ${activeTherapy.textColor}`}>
                  {activeTherapy.name}
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {activeTherapy.title}
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-gray-200 to-transparent mb-6 border-b border-gray-100 rounded-full" />
              
              <p className="text-lg text-gray-600 leading-relaxed min-h-[120px]">
                {activeTherapy.description}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-2">
                  {therapies.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeIndex === i 
                          ? `w-8 bg-gradient-to-r ${activeTherapy.color}` 
                          : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                
                <button className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${activeTherapy.color} text-white shadow-lg hover:scale-105 transition-transform`}>
                   <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
