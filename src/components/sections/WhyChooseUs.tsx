'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, HeartPulse, CheckSquare, Coffee } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Expert Doctors',
      description: 'Our practitioners are highly qualified with years of clinical experience in complex cases.',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Authentic Medicine',
      description: 'We use 100% pure Ayurvedic formulations, sourced from traditional manufacturers.',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Patient-Centric',
      description: 'Every treatment plan is customized to your unique Prakriti (body constitution).',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Modern Facilities',
      description: 'Traditional treatments integrated with modern clinical standards for safety and comfort.',
      icon: <HeartPulse className="w-6 h-6" />,
    },
    {
      title: 'Holistic Results',
      description: 'We focus on root-cause elimination rather than just symptomatic relief.',
      icon: <CheckSquare className="w-6 h-6" />,
    },
    {
      title: 'Calming Ambience',
      description: 'A serene clinic environment designed to facilitate mental and physical relaxation.',
      icon: <Coffee className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-32 bg-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            The Shubhay Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
          >
            Why Choose Our <span className="text-primary italic">Clinic?</span>
          </motion.h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-10 rounded-[2.5rem] border border-primary/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">{reason.title}</h3>
              <p className="text-charcoal/60 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
