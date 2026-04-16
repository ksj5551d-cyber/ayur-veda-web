"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Leaf, Sparkles, Heart } from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import PanchakarmaCarousel from "../../components/PanchakarmaCarousel";

export default function Panchakarma() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/panchakarma-hero.png"
            alt="Panchakarma Healing Room"
            fill
            className="object-cover"
            priority
          />
          {/* Enhanced Glass/Gradient Overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-900/70 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-100 text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Premium Detox & Rejuvenation</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Deep Healing with <span className="text-emerald-300 italic font-serif">Panchakarma</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              Panchakarma (five actions) is a timeless cleansing and rejuvenating program for the body, mind, and consciousness. Refresh your natural state of wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2">
                Make a Reservation
                <ChevronRight size={18} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Our Natural State
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                According to Ayurveda, our natural state is one of health, happiness, and an inner sense of well-being. Health is defined as the body being clear of toxins, the mind being at peace, emotions being calm and happy, wastes efficiently eliminated, and organs functioning normally.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                In a busy, stressful, and toxic world, our physical and mental systems accumulate toxins causing deterioration. Panchakarma can help restore your natural state of health by cleansing your body of toxins, bringing balance into your system, and improving bodily function.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div className="glass-card bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
                  <Leaf className="text-emerald-500 mb-4 h-8 w-8" />
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Cleanse & Reset</h3>
                  <p className="text-gray-500 text-sm">Flushes out deep-rooted toxins and resets the nervous system.</p>
                </div>
                <div className="glass-card bg-teal-50/50 rounded-2xl p-6 border border-teal-100">
                  <Heart className="text-teal-500 mb-4 h-8 w-8" />
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">Deep Healing</h3>
                  <p className="text-gray-500 text-sm">Opens subtle channels, bringing life-enhancing energy and peace.</p>
                </div>
              </div>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl" />

              <h2 className="text-2xl lg:text-3xl font-bold mb-8 relative z-10 flex items-center gap-3">
                <Sparkles className="text-emerald-400" />
                Panchakarma Benefits
              </h2>
              <ul className="space-y-6 relative z-10">
                {[
                  "Eliminate toxins and toxic conditions from your body and mind.",
                  "Restore your constitutional balance improving health and wellness.",
                  "Strengthen your immune system and become more resistant to illness.",
                  "Reverse the negative effects of stress on your body and mind thereby slowing the aging process.",
                  "Enhance your self-reliance, strength, energy, vitality, and mental clarity.",
                  "Bring about deep relaxation and a sense of well-being."
                ].map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex gap-4 items-start"
                  >
                    <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300 font-light leading-relaxed text-sm lg:text-base">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Carousel */}
      <PanchakarmaCarousel />

      {/* CTA Section */}
      <section className="py-24 bg-emerald-950 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready for Transformation?</h2>
            <p className="text-emerald-100 text-lg mb-10 font-light">
              Experience authentic Ayurvedic Panchakarma therapy at our exclusive healing resort. Immerse yourself in the bliss of nature and deep healing.
            </p>
            <Link href="/consultations">
              <button className="bg-white text-emerald-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all transform hover:-translate-y-1 shadow-xl shadow-black/20">
                Book Your Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
