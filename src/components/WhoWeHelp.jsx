"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Shield, Users, BookOpen, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Activity,
    title: "Chronic & Long-Standing Health Conditions",
    desc: "For people dealing with ongoing health problems such as digestive disorders, autoimmune or inflammatory conditions, chronic skin or pain disorders, hormonal or metabolic imbalances — and other difficult-to-treat conditions.",
    image: "/images/help1.jpg"
  },
  {
    icon: Shield,
    title: "Those Who Haven't Found Lasting Relief",
    desc: "Individuals who have tried multiple approaches but are still seeking a deeper, root-cause–based and medically supervised treatment plan.",
    image: "/images/help2.jpg"
  },
  {
    icon: Users,
    title: "Serious Wellness & Lifestyle Seekers",
    desc: "Those looking for medically supervised Panchakarma, structured lifestyle correction, and long-term health stability — not short-term detox programs.",
    image: "/images/help3.jpg"
  },
  {
    icon: BookOpen,
    title: "Serious Learners of Ayurveda",
    desc: "Yoga teachers, therapists, and healthcare practitioners seeking authentic clinical understanding through structured courses and immersion programs.",
    image: "/images/help4.jpg"
  },
];

export default function WhoWeHelp() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="pt-32 md:pt-40 pb-24 bg-primary relative text-white overflow-hidden border-t-4 border-secondary/50 min-h-screen flex flex-col justify-start">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Accordion List */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl md:leading-tight font-bold mb-6">Who We Help</h2>
            <p className="text-xl text-white/80 font-medium">
              People seeking serious, personalized Ayurvedic care or structured Ayurvedic learning.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              const isActive = activeIndex === index;
              
              return (
                <div 
                  key={index}
                  className={`group relative pl-8 pb-6 border-l-2 cursor-pointer transition-colors duration-500 ${
                    isActive ? "border-secondary" : "border-white/20 hover:border-white/50"
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Floating Icon Marker */}
                  <div className={`absolute -left-[26px] top-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${
                    isActive ? "bg-secondary text-primary scale-110" : "bg-white/10 text-white scale-100 group-hover:bg-white/20"
                  }`}>
                    <Icon size={24} />
                  </div>

                  <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 mt-1 ${
                    isActive ? "text-white" : "text-white/60 group-hover:text-white/90"
                  }`}>
                    {cat.title}
                  </h3>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-white/80 text-lg leading-relaxed">
                          {cat.desc}
                        </p>
                        <button className="mt-6 flex items-center space-x-2 text-secondary font-bold hover:text-white transition-colors">
                          <span>Learn More</span>
                          <ArrowRight size={18} />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Sticky Image Area */}
        <div className="lg:w-1/2 relative h-[500px] lg:h-[700px] mt-8 lg:mt-0 lg:sticky lg:top-32 rounded-3xl overflow-hidden shadow-2xl">
           <AnimatePresence mode="wait">
             <motion.img
               key={`img-${activeIndex}`}
               src={categories[activeIndex].image}
               alt={categories[activeIndex].title}
               initial={{ opacity: 0, scale: 1.05 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="absolute inset-0 w-full h-full object-cover"
             />
           </AnimatePresence>
           
           {/* Dark Gradient Overlay for premium feel */}
           <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        </div>

      </div>
    </section>
  );
}
