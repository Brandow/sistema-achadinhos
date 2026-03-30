import React from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductGridProps {}

export const ProductGrid: React.FC<ProductGridProps> = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-red font-black uppercase tracking-widest text-xs">Os Melhores Achadinhos</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark uppercase italic mt-2">
            Ofertas em <span className="text-brand-red">Destaque</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-yellow mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white border-2 border-brand-red text-brand-red font-black px-10 py-4 rounded-full hover:bg-brand-red hover:text-white transition-all uppercase tracking-tight">
            Ver Catálogo Completo
          </button>
        </div>
      </div>
    </section>
  );
};
