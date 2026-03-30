import React from 'react';
import { Zap, ShieldCheck, ThumbsUp, Users } from 'lucide-react';

export const Benefits: React.FC = () => {
  const items = [
    {
      icon: Zap,
      title: 'Ofertas Diárias',
      desc: 'Novos achadinhos todos os dias.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: ThumbsUp,
      title: 'Curadoria Real',
      desc: 'Produtos testados e aprovados.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: ShieldCheck,
      title: 'Links Seguros',
      desc: 'Redirecionamento para sites oficiais.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Comunidade',
      desc: 'Milhares de pessoas economizando.',
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <section className="py-12 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className={`p-3 rounded-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
