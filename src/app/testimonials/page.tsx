import React from 'react';
import { Star, Quote, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TestimonialsPage = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      review: "Perfect place for panchkarma treatment. I was looking for authentic Ayurveda in Moshi and I found it here. The doctor is very patient.",
      rating: 5,
      date: "2 months ago",
      treatment: "Panchkarma"
    },
    {
      name: "Sneha Patil",
      review: "Very nice doctor and staff. I had severe chronic back pain. After taking Basti and Abhyanga treatments, I feel much better.",
      rating: 5,
      date: "1 month ago",
      treatment: "Basti Treatment"
    },
    {
      name: "Vikram Singh",
      review: "Best experience, all services were great. The clinic is very clean and the aroma of oils is so relaxing. Highly recommended.",
      rating: 5,
      date: "3 weeks ago",
      treatment: "Full Body Detox"
    },
    {
      name: "Pooja Jadhav",
      review: "Excellent service. My digestion issues are finally resolved. The herbal medicines prescribed are very effective.",
      rating: 5,
      date: "2 weeks ago",
      treatment: "Digestion"
    },
    {
      name: "Anil Deshmukh",
      review: "I take regular massages here. Best place to destress. The staff is professional and skilled.",
      rating: 5,
      date: "5 days ago",
      treatment: "Abhyanga"
    },
    {
      name: "Meena Kulkarni",
      review: "Genuine Ayurvedic treatment in Pune. No false promises, just real results. Very happy with the care.",
      rating: 5,
      date: "Yesterday",
      treatment: "Skin Treatment"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-5xl font-bold text-charcoal mb-6">Patient <span className="text-primary italic">Feedback</span></h1>
        <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
          Read how Shubhay Clinic has helped our patients transform their health through authentic Ayurveda.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[2.5rem] border border-primary/5 shadow-xl shadow-primary/5 hover-lift relative group">
              <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-8 text-[#FFB800]">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8 italic">"{rev.review}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-charcoal leading-none mb-1">{rev.name}</h4>
                  <p className="text-xs text-charcoal/40 uppercase tracking-widest font-bold">{rev.treatment}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-charcoal/5 flex justify-between items-center text-xs text-charcoal/30">
                <span>{rev.date}</span>
                <span className="flex items-center gap-1 font-bold text-primary/40 uppercase tracking-tighter"><Heart size={12} fill="currentColor" /> Verified review</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-40">
        <div className="bg-primary p-12 lg:p-20 rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <h2 className="text-3xl font-bold mb-8">Ready to experience the same healing?</h2>
          <p className="text-white/70 mb-12 text-lg">Join thousands of happy patients who found their path to wellness at Shubhay Clinic.</p>
          <Link 
            href="/booking" 
            className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover-lift shadow-2xl shadow-black/10 inline-flex items-center gap-2"
          >
            Start Your Journey <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
