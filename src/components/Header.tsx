import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, Truck, ShieldCheck, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const navigate = useNavigate();

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Benefits Bar */}
      <div className="bg-brand-dark text-white py-2 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center text-[10px] md:text-xs font-medium tracking-wide uppercase">
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1"><Truck size={14} className="text-brand-yellow" /> Frete Rápido para todo Brasil</span>
            <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-brand-yellow" /> Compra 100% Segura</span>
            <span className="flex items-center gap-1"><CreditCard size={14} className="text-brand-yellow" /> Parcelamento em até 12x</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="animate-pulse text-brand-yellow">🔥 Ofertas da semana: Até 40% OFF</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-brand-red text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8">
          {/* Logo & Mobile Menu */}
          <div className="w-full md:w-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button className="md:hidden p-1">
                <Menu size={24} />
              </button>
              <Link to="/" className="flex items-center gap-1">
                <div className="bg-brand-yellow text-brand-red font-black text-2xl px-2 rounded-sm transform -skew-x-12">P</div>
                <span className="font-black text-xl tracking-tighter uppercase italic">PersonalizaJá</span>
              </Link>
            </div>
            
            <div className="flex md:hidden items-center gap-4">
              <User size={24} />
              <div className="relative">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-yellow text-brand-red text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-brand-red">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full flex-1 relative">
            <input 
              type="text" 
              placeholder="O que você está procurando hoje?" 
              className="w-full py-2.5 px-4 pr-12 rounded-full text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-yellow text-brand-red p-1.5 rounded-full hover:bg-white transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-brand-yellow transition-colors group">
              <User size={24} className="group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-[10px] opacity-80 leading-none">Olá, entre ou</p>
                <p className="text-sm font-bold leading-tight">Cadastre-se</p>
              </div>
            </button>
            <button className="flex items-center gap-2 hover:text-brand-yellow transition-colors group relative">
              <div className="relative">
                <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-yellow text-brand-red text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-brand-red">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="text-left">
                <p className="text-[10px] opacity-80 leading-none">Meu</p>
                <p className="text-sm font-bold leading-tight">Carrinho</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-8 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wide">
            <li className="text-brand-red border-b-2 border-brand-red pb-1 cursor-pointer" onClick={() => navigate('/')}>Início</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors pb-1">Produtos</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors pb-1">Categorias</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors pb-1">Brindes Corporativos</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors pb-1">Kits</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors pb-1">Contato</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
