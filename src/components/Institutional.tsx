import React from 'react';

export const Institutional: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <div className="relative">
             <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800&h=600" 
              alt="Nossa Equipe" 
              className="rounded-[2rem] shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-yellow rounded-3xl -z-10 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-red rounded-full -z-10 hidden md:block"></div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <span className="text-brand-red font-black uppercase tracking-widest text-xs">Quem Somos</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark uppercase italic mt-2 mb-6">
            Nossa Missão é <span className="text-brand-red">Facilitar</span> o seu Personalizado
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              A <strong>PersonalizaJá</strong> nasceu com o propósito de democratizar o acesso a produtos personalizados de alta qualidade. Acreditamos que cada objeto pode contar uma história única e especial.
            </p>
            <p>
              Com tecnologia de ponta em impressão e uma equipe apaixonada pelo que faz, garantimos que cada caneca, camiseta ou caderno que sai de nossa produção seja um reflexo fiel da sua criatividade.
            </p>
            <p>
              Nossa estrutura é focada 100% na sua experiência: desde a facilidade de escolha no site até a rapidez na entrega em sua porta. Somos mais que uma loja, somos seus parceiros na criação de momentos inesquecíveis.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div>
              <p className="text-4xl font-black text-brand-red leading-none mb-1">100k+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Produtos Entregues</p>
            </div>
            <div>
              <p className="text-4xl font-black text-brand-red leading-none mb-1">98%</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Satisfação Total</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
