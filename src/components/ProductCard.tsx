import React from 'react';
import { Product } from '../types';
import { Star, ExternalLink, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleAffiliateClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all border border-gray-100 overflow-hidden group flex flex-col h-full cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {product.tag && (
          <div className="absolute top-3 left-3 bg-brand-red text-white text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-tighter z-10">
            {product.tag}
          </div>
        )}
        
        <button 
          className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-brand-red transition-colors z-10"
          onClick={(e) => {
            e.stopPropagation();
            // Heart logic here
          }}
        >
          <Heart size={18} />
        </button>

        <div className="absolute bottom-0 left-0 w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform bg-white/90 backdrop-blur-sm hidden md:block">
           <button 
            onClick={handleAffiliateClick}
            className="w-full bg-brand-red text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-dark transition-colors text-sm"
           >
             <ExternalLink size={16} /> Ver Oferta
           </button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-1">
          <div className="flex text-brand-yellow">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 font-medium">({product.reviews})</span>
        </div>
        
        <h3 className="font-bold text-brand-dark text-sm mb-2 line-clamp-2 flex-1 group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>

        <div className="mt-auto">
          {product.oldPrice && (
            <p className="text-xs text-gray-400 line-through">R$ {product.oldPrice.toFixed(2)}</p>
          )}
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold text-brand-red">R$</span>
            <span className="text-2xl font-black text-brand-red tracking-tighter">
              {product.price.toFixed(2).split('.')[0]}
              <span className="text-sm">,{product.price.toFixed(2).split('.')[1]}</span>
            </span>
          </div>
          <p className="text-[10px] text-gray-500 font-medium">Preço sujeito a alteração</p>
        </div>

        <button 
          onClick={handleAffiliateClick}
          className="md:hidden w-full mt-4 bg-brand-red text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm"
        >
          <ExternalLink size={16} /> Ver Oferta
        </button>
      </div>
    </motion.div>
  );
};
