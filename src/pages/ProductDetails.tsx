import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Truck, ShieldCheck, CreditCard, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ProductDetailsProps {
  onAddToCart: (product: Product) => void;
  cartCount: number;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ onAddToCart, cartCount }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = PRODUCTS.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!product) return null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header cartCount={cartCount} />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 md:py-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-red font-bold mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl bg-gray-50">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`aspect-square rounded-2xl overflow-hidden border-2 cursor-pointer ${i === 0 ? 'border-brand-red' : 'border-gray-100'}`}>
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              {product.tag && (
                <span className="inline-block bg-brand-red text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                  {product.tag}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-black text-brand-dark leading-tight mb-4 uppercase italic">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="flex text-brand-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-brand-dark">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-400 font-medium">{product.reviews} avaliações</span>
              </div>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-3xl border border-gray-100">
              {product.oldPrice && (
                <p className="text-lg text-gray-400 line-through mb-1">R$ {product.oldPrice.toFixed(2)}</p>
              )}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-xl font-bold text-brand-red">R$</span>
                <span className="text-5xl font-black text-brand-red tracking-tighter">
                  {product.price.toFixed(2).split('.')[0]}
                  <span className="text-2xl">,{product.price.toFixed(2).split('.')[1]}</span>
                </span>
              </div>
              <p className="text-brand-dark font-bold">
                ou em até <span className="text-brand-red">10x de R$ {(product.price / 10).toFixed(2)}</span> sem juros
              </p>
              <div className="mt-4 flex items-center gap-2 text-green-600 font-bold text-sm">
                <CheckCircle2 size={18} /> Em estoque - Envio imediato
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 font-bold text-xl transition-colors"
                  >-</button>
                  <span className="px-6 py-2 font-black text-lg border-x-2 border-gray-200">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 font-bold text-xl transition-colors"
                  >+</button>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onAddToCart(product)}
                  className="flex-1 bg-brand-red text-white font-black py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 hover:bg-brand-dark transition-all uppercase tracking-tight"
                >
                  <ShoppingCart size={24} /> Comprar Agora
                </motion.button>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <Truck size={24} className="mx-auto text-brand-red mb-2" />
                <p className="text-[10px] font-black uppercase text-gray-400">Entrega</p>
                <p className="text-[10px] font-bold text-brand-dark">Rápida</p>
              </div>
              <div className="text-center p-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <ShieldCheck size={24} className="mx-auto text-brand-red mb-2" />
                <p className="text-[10px] font-black uppercase text-gray-400">Compra</p>
                <p className="text-[10px] font-bold text-brand-dark">Segura</p>
              </div>
              <div className="text-center p-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <CreditCard size={24} className="mx-auto text-brand-red mb-2" />
                <p className="text-[10px] font-black uppercase text-gray-400">Até 12x</p>
                <p className="text-[10px] font-bold text-brand-dark">S/ Juros</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-lg font-black text-brand-dark uppercase italic mb-4">Descrição do Produto</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
              {product.features && (
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
