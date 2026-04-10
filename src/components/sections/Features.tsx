'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HeartPulse, Leaf, Sparkles } from 'lucide-react';

const FocusAreas = () => {
  const specialties = [
    {
      title: 'Joint & Bone Care',
      description: 'Effective treatments for Arthritis, Spondylosis, and chronic back pain.',
      icon: <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><HeartPulse /></div>,
    },
    {
      title: 'Skin & Hair',
      description: 'Natural healing for Psoriasis, Eczema, Acne, and Hair fall issues.',
      icon: <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><Sparkles /></div>,
    },
    {
      title: 'Digestive Health',
      description: 'Resolving IBS, Acidity, Constipation, and metabolic disorders.',
      icon: <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><Leaf /></div>,
    },
    {
      title: 'Stress & Sleep',
      description: 'Rejuvenating therapies for Anxiety, Insomnia, and mental fatigue.',
      icon: <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><CheckCircle2 /></div>,
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="max-w-xl">
             <h2 className="text-4xl font-bold text-charcoal mb-4">Our Medical <span className="text-primary italic">Specialties</span></h2>
             <p className="text-charcoal/60">Targeted Ayurvedic treatments for chronic health conditions.</p>
          </div>
          <div className="h-1 w-24 bg-primary rounded-full hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-accent/30 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 border border-transparent hover:border-primary/10 transition-all duration-500"
            >
              <div className="mb-8">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-charcoal/60 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
