import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product, Category } from '../types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';
import { ArrowLeft, Filter, SlidersHorizontal } from 'lucide-react';

interface CategoryPageProps {
  onAddToCart: (product: Product) => void;
  cartCount: number;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ onAddToCart, cartCount }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  useEffect(() => {
    const foundCategory = CATEGORIES.find(c => c.id === id);
    if (foundCategory) {
      setCategory(foundCategory);
      const filtered = PRODUCTS.filter(p => p.categoryId === id);
      setCategoryProducts(filtered);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!category) return null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header cartCount={cartCount} />
      
      <main className="flex-grow">
        {/* Category Header */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/60 flex flex-col items-center justify-center text-white p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                {category.name}
              </h1>
              <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full"></div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Breadcrumbs & Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-500 hover:text-brand-red font-bold transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Voltar para Início
            </button>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-brand-dark hover:bg-gray-100 transition-colors">
                <Filter size={18} /> Filtrar
              </button>
              <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-brand-dark hover:bg-gray-100 transition-colors">
                <SlidersHorizontal size={18} /> Ordenar
              </button>
            </div>
          </div>

          {/* Product Grid */}
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {categoryProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard product={product} onAddToCart={onAddToCart} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200">
              <p className="text-gray-400 font-bold uppercase tracking-widest">Nenhum produto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
