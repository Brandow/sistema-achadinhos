import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto promo-gradient rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-8 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border-8 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-red px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles size={14} /> Oferta por Tempo Limitado
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic leading-tight">
            Não perca os melhores <br className="hidden md:block" />
            <span className="text-brand-yellow">achadinhos de hoje!</span>
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">
            Nossa equipe seleciona as melhores promoções para você não perder tempo procurando. Economize agora com nossos links exclusivos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-brand-yellow text-brand-red font-black text-xl px-12 py-5 rounded-2xl shadow-xl flex items-center justify-center gap-2 hover:bg-white transition-all uppercase tracking-tight"
            >
              Ver Todas as Ofertas <ArrowRight size={20} />
            </motion.button>
            <p className="text-sm font-bold opacity-80">
              *Válido para as próximas 24 horas
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
