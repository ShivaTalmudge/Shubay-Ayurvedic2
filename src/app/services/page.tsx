import React from 'react';
import { ArrowRight, Leaf, Droplet, Sparkles, Wind, Flame, Sun, Heart, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      title: 'Panchkarma Therapy',
      description: 'The ultimate Ayurvedic detoxification process that purifies the tissues and restores balance through a series of five specialized treatments.',
      benefits: ['Detoxifies the entire body', 'Strengthens immune system', 'Reduces stress and anxiety', 'Improves digestive health'],
      duration: '7 - 21 Days (Recommended)',
      suitableFor: 'Chronic detoxification, lifestyle disorders, general rejuvenation.',
      icon: <Droplet className="w-8 h-8" />,
      image: '/images/panchkarma.png'
    },
    {
      title: 'Basti Treatment',
      description: 'A medicated enema therapy considered the "Mother of all treatments" for its ability to clear toxins from the lower colon and balance Vata Dosha.',
      benefits: ['Relieves chronic constipation', 'Treats lower back pain', 'Improves neurological health', 'Enhances bone density'],
      duration: '45 - 60 Minutes',
      suitableFor: 'Joint pain, digestive issues, nervous system disorders.',
      icon: <Wind className="w-8 h-8" />,
      image: '/images/panchkarma.png'
    },
    {
      title: 'Abhyanga Massage',
      description: 'A rhythmic and soothing massage with warm medicated oils that penetrate deep into the skin to nourish and revitalize the body.',
      benefits: ['Increases blood circulation', 'Improves skin texture', 'Promotes sound sleep', 'Relieves muscle stiffness'],
      duration: '60 - 90 Minutes',
      suitableFor: 'Stress relief, physical fatigue, skin health.',
      icon: <Sun className="w-8 h-8" />,
      image: '/images/abhyanga.png'
    },
    {
      title: 'Detox Programs',
      description: 'Systematic approach to cleansing the body using traditional Ayurvedic methods tailored to your specific toxicity levels.',
      benefits: ['Weight management', 'Clearer skin', 'Higher energy levels', 'Mental clarity'],
      duration: '3 - 14 Days',
      suitableFor: 'Metabolic issues, seasonal rejuvenation.',
      icon: <Sparkles className="w-8 h-8" />,
      image: '/images/detox.png'
    },
    {
      title: 'Digestive Treatments',
      description: 'Specialized therapies and herbal interventions to fix "Agni" (digestive fire) and resolve long-term gastrointestinal issues.',
      benefits: ['Cures IBS and acidity', 'Boosts metabolism', 'Reduces bloating', 'Balances appetite'],
      duration: 'Varies by condition',
      suitableFor: 'Gastritis, poor appetite, chronic indigestion.',
      icon: <Flame className="w-8 h-8" />,
      image: '/images/detox.png'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl font-bold text-charcoal mb-6">Our Authentic <br /><span className="text-primary italic">Ayurvedic Treatments</span></h1>
        <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
          Experience the pinnacle of natural healing with our specialized therapies designed to restore your health from within.
        </p>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {services.map((service, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary">{service.icon}</div>
                <h2 className="text-3xl font-bold text-charcoal">{service.title}</h2>
              </div>
              <p className="text-lg text-charcoal/60 leading-relaxed italic border-l-4 border-primary/20 pl-6">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                    <CheckCircle className="text-primary w-5 h-5" /> Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="text-sm text-charcoal/70 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">Duration</h4>
                    <p className="text-sm text-charcoal/70">{service.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-2">Suitable For</h4>
                    <p className="text-sm text-charcoal/70">{service.suitableFor}</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/booking" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover-lift mt-6 shadow-lg shadow-primary/20 transition-all"
              >
                Inquire for Treatment <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 aspect-video lg:aspect-square">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full -z-0 opacity-40 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full -z-0 blur-3xl"></div>
            </div>
          </div>
        ))}
      </section>

      {/* Trust Banner */}
      <section className="bg-accent/40 py-24 mt-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Heart className="mx-auto text-primary w-12 h-12 mb-8 animate-pulse" />
          <h2 className="text-3xl font-bold mb-8 italic">Not sure which treatment is right for you?</h2>
          <p className="text-lg text-charcoal/60 mb-12">
            Every treatment at Shubhay Clinic starts with a consultation to determine your body type (Prakriti) and specific health needs.
          </p>
          <a 
            href="tel:09970836811" 
            className="bg-charcoal text-white px-10 py-5 rounded-2xl font-bold text-lg hover-lift inline-block"
          >
            Consult with Doctor Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
