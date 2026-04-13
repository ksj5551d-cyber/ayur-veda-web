"use client";

import { motion } from "framer-motion";
import { ClipboardList, ActivitySquare, HeartHandshake } from "lucide-react";

export default function ClinicalApproach() {
  const steps = [
    {
      num: "01",
      icon: ClipboardList,
      title: "Careful Consultation & Assessment",
      desc: "Your condition, medical history, blood reports, body constitution, and current medications are carefully evaluated before treatment begins.",
    },
    {
      num: "02",
      icon: ActivitySquare,
      title: "Dynamic, Individualized Treatment",
      desc: "Therapies, medicines, and diet are designed specifically for you. Treatment decisions may be adjusted daily based on observation and response.",
    },
    {
      num: "03",
      icon: HeartHandshake,
      title: "Ongoing Guidance & Aftercare",
      desc: "Along with treatment, we provide practical dietary and lifestyle guidance so that improvements can be sustained beyond your stay.",
    },
  ];

  return (
    <section className="w-full py-10 md:py-14 bg-gradient-to-b from-white top-50 to-secondary/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-23">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Our Clinical Approach</h2>
          <p className="text-xl text-gray-600">
            Structured, personalized care focused on clinical outcomes — not retreat routines or fixed packages.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-white rounded-[1.5rem] p-4 md:p-5 shadow-sm hover:shadow-lg border border-gray-100 flex items-start space-x-4 group transition-all"
                >
                  <div className="w-16 h-16 bg-secondary/40 text-primary rounded-full flex flex-shrink-0 flex-col items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="text-sm font-bold opacity-60">Step</span>
                    <span className="text-xl font-black">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                      <Icon size={24} className="text-primary opacity-80" />
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="w-full rounded-[2rem] overflow-hidden shadow-2xl relative order-first md:order-last" style={{ minHeight: '340px' }}
          >
            <img 
              src="/images/clinic.jpg" 
              alt="Ayurvedic Treatment Setting" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
