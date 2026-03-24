import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';

export const CategoryGrid: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark uppercase italic">
            Navegue por <span className="text-brand-red">Categorias</span>
          </h2>
          <button className="text-brand-red font-bold text-sm hover:underline">Ver todas</button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((category, index) => {
            const IconComponent = (Icons as any)[category.icon];
            return (
              <motion.div
                key={category.id}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/category/${category.id}`)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 relative h-40 md:h-48">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center gap-2 text-white">
                      {IconComponent && <IconComponent size={20} className="text-brand-yellow" />}
                      <span className="font-bold text-lg leading-tight">{category.name}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
