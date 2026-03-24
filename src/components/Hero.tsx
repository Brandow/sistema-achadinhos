import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-brand-yellow overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red transform skew-x-12 translate-x-1/4 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row items-center relative z-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Qualidade Premium Garantida
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-brand-dark leading-tight mb-6 uppercase italic">
              Personalizados que <br />
              <span className="text-brand-red bg-white px-2">vendem por você</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-dark font-medium mb-8 max-w-lg mx-auto lg:mx-0 opacity-90">
              Transforme suas ideias em produtos incríveis. Canecas, camisetas e brindes com a sua cara e entrega recorde.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-brand-red text-white font-black text-lg px-8 py-4 rounded-lg shadow-xl flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors uppercase tracking-tight"
              >
                Comprar Agora <ArrowRight size={20} />
              </motion.button>
              <div className="flex items-center gap-2 text-brand-dark font-bold">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?u=${i}`} 
                      className="w-8 h-8 rounded-full border-2 border-brand-yellow"
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-sm">+5.000 clientes satisfeitos</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10"
          >
            {/* Main Product Image */}
            <img 
              src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=600&h=600" 
              alt="Produtos Personalizados"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-8 border-white transform rotate-3"
              referrerPolicy="no-referrer"
            />
            
            {/* Mascot - 2D friendly character */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 md:-left-20 w-32 md:w-48 z-20"
            >
              <div className="bg-white p-4 rounded-full shadow-xl border-4 border-brand-red relative">
                <div className="w-full aspect-square bg-brand-yellow rounded-full flex items-center justify-center overflow-hidden">
                   {/* Simple 2D Mascot Illustration using SVG */}
                   <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="#FFD700" />
                      <circle cx="35" cy="40" r="5" fill="#1A1A1A" />
                      <circle cx="65" cy="40" r="5" fill="#1A1A1A" />
                      <path d="M30 60 Q50 80 70 60" stroke="#1A1A1A" strokeWidth="5" fill="none" strokeLinecap="round" />
                      <rect x="40" y="10" width="20" height="15" rx="5" fill="#FF0000" />
                   </svg>
                </div>
                <div className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-bold px-2 py-1 rounded-full">Olá!</div>
              </div>
            </motion.div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -right-4 bg-white p-3 rounded-xl shadow-lg border-l-4 border-brand-red hidden md:block"
            >
              <p className="text-[10px] font-bold text-gray-500 uppercase">Produção em</p>
              <p className="text-lg font-black text-brand-red leading-none">24 HORAS</p>
            </motion.div>
          </motion.div>

          {/* Background shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};
