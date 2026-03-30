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
                <div className="bg-brand-yellow text-brand-red font-black text-2xl px-2 rounded-sm transform -skew-x-12">A</div>
                <span className="font-black text-xl tracking-tighter uppercase italic">Achadinhos do Dia</span>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full flex-1 relative">
            <input 
              type="text" 
              placeholder="Encontre um achadinho..." 
              className="w-full py-2.5 px-4 pr-12 rounded-full text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-yellow text-brand-red p-1.5 rounded-full hover:bg-white transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center gap-8 py-3 text-sm font-semibold text-gray-600 uppercase tracking-wide">
            <li className="text-brand-red border-b-2 border-brand-red pb-1 cursor-pointer" onClick={() => navigate('/')}>Início</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors pb-1">Melhores Ofertas</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors pb-1">Cozinha</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors pb-1">Tecnologia</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors pb-1">Casa</li>
            <li className="hover:text-brand-red cursor-pointer transition-colors pb-1">Sobre</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
