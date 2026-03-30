import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, CreditCard, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-1 mb-6">
              <div className="bg-brand-yellow text-brand-red font-black text-2xl px-2 rounded-sm transform -skew-x-12">A</div>
              <span className="font-black text-xl tracking-tighter uppercase italic">Achadinhos do Dia</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sua curadoria diária dos melhores achadinhos da internet. Selecionamos as melhores ofertas, promoções e cupons para você economizar de verdade.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Categories Quick Links */}
          <div>
            <h4 className="font-black text-lg uppercase mb-6 border-b-2 border-brand-red inline-block">Categorias</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              {CATEGORIES.slice(0, 5).map(category => (
                <li key={category.id}>
                  <Link to={`/category/${category.id}`} className="hover:text-brand-yellow cursor-pointer transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
              <li className="hover:text-brand-yellow cursor-pointer transition-colors font-bold text-brand-red">Ver todas</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-lg uppercase mb-6 border-b-2 border-brand-red inline-block">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-red shrink-0" />
                <span>São Paulo - SP, Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-red shrink-0" />
                <span>contato@achadinhosdodia.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-black text-lg uppercase mb-6 border-b-2 border-brand-red inline-block">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Receba os melhores achadinhos e cupons exclusivos em primeira mão.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              />
              <button className="w-full bg-brand-red text-white font-black py-2.5 rounded-lg hover:bg-white hover:text-brand-red transition-all uppercase text-sm">Inscrever-se</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-green-900/30 text-green-400 px-3 py-1.5 rounded-lg border border-green-900/50">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-bold uppercase">Links Verificados</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-[10px] text-gray-500 font-medium">© 2026 Achadinhos do Dia. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
