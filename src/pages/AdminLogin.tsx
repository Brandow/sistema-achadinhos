import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (success: boolean) => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock authentication
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        onLogin(true);
      } else {
        setError('Usuário ou senha incorretos. Tente admin / admin123');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100"
      >
        <div className="bg-brand-red p-8 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-black uppercase italic tracking-tighter">Painel Administrativo</h1>
          <p className="text-white/70 text-sm font-medium mt-1">Acesso restrito a administradores</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100"
            >
              {error}
            </motion.div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-400 tracking-widest ml-1">Usuário</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all font-medium"
                placeholder="Seu usuário"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-gray-400 tracking-widest ml-1">Senha</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-brand-red transition-all font-medium"
                placeholder="Sua senha"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-red text-white font-black py-4 rounded-xl shadow-lg hover:bg-brand-dark transition-all flex items-center justify-center gap-2 uppercase tracking-tight disabled:opacity-50"
          >
            {isLoading ? 'Autenticando...' : 'Entrar no Painel'} <ArrowRight size={20} />
          </button>

          <div className="flex items-center justify-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest pt-4">
            <ShieldCheck size={14} /> Ambiente Seguro PersonalizaJá
          </div>
        </form>
      </motion.div>
    </div>
  );
};
