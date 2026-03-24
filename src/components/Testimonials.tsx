import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div className="text-left">
            <span className="text-brand-red font-black uppercase tracking-widest text-xs">O que dizem sobre nós</span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark uppercase italic mt-2">
              Prova <span className="text-brand-red">Social</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <div className="flex text-brand-yellow">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="font-bold text-brand-dark">4.9/5.0 no Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-gray-100" size={48} />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full border-2 border-brand-yellow"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-brand-dark leading-none">{t.name}</h4>
                  <div className="flex text-brand-yellow mt-1">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <p className="text-center text-gray-400 font-bold uppercase text-xs tracking-widest mb-8">Empresas que confiam em nosso trabalho</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale">
            {['Google', 'Netflix', 'Amazon', 'Spotify', 'Airbnb'].map(brand => (
              <span key={brand} className="text-2xl md:text-3xl font-black tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
