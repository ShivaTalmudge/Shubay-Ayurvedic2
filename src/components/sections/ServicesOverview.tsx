'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Droplet, Wind, Flame, Sun, Heart } from 'lucide-react';
import Link from 'next/link';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Panchkarma Therapy',
      description: 'A comprehensive detox process to cleanse the body from deep-seated toxins.',
      image: '/images/panchkarma.png',
      icon: <Droplet className="w-5 h-5" />,
      color: 'bg-teal-50',
    },
    {
      title: 'Abhyanga Massage',
      description: 'Traditional full body massage with medicated oils to improve circulation.',
      image: '/images/abhyanga.png',
      icon: <Sun className="w-5 h-5" />,
      color: 'bg-orange-50',
    },
    {
      title: 'Detox Programs',
      description: 'Specialized programs to reset your digestive system and boost immunity.',
      image: '/images/detox.png',
      icon: <Wind className="w-5 h-5" />,
      color: 'bg-blue-50',
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm mb-4"
            >
              <Heart className="w-5 h-5" fill="currentColor" />
              <span>Personalized Care</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight"
            >
              Our Healing <span className="text-primary italic">Treatments</span>
            </motion.h2>
            <p className="text-xl text-charcoal/50 max-w-lg">
              Combining ancient wisdom with compassionate care to restore your body's natural harmony.
            </p>
          </div>
          <Link 
            href="/services" 
            className="group flex items-center gap-3 bg-accent text-primary px-8 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all duration-500 shadow-lg shadow-primary/5"
          >
            Explore All Services <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl shadow-charcoal/5 group-hover:shadow-primary/20 transition-all duration-700">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Layers */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-700 opacity-80 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
                        {service.icon}
                      </div>
                      <span className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">Authentic</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-700 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                      <p className="text-white/70 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                    </div>

                    <Link 
                      href="/services"
                      className="inline-flex items-center gap-2 text-white font-bold group/btn self-start"
                    >
                      <span className="border-b-2 border-white/20 group-hover/btn:border-primary transition-colors py-1">Learn More</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
