import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  Settings, 
  LogOut, 
  Plus, 
  Edit3, 
  Trash2, 
  Search,
  ChevronRight,
  TrendingUp,
  Users,
  ShoppingBag,
  DollarSign,
  X,
  Image as ImageIcon
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product, Category } from '../types';

export const AdminDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'categories' | 'settings'>('overview');
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form states
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    price: 0,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=400&h=400',
    tag: '',
  });

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...formData } as Product : p));
    } else {
      const newProduct: Product = {
        ...formData,
        id: `p${Date.now()}`,
        rating: 5,
        reviews: 0,
      } as Product;
      setProducts([newProduct, ...products]);
    }
    setIsModalOpen(false);
    setEditingProduct(null);
    setFormData({ name: '', price: 0, image: '', tag: '' });
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setFormData(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-dark text-white flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-1">
            <div className="bg-brand-yellow text-brand-red font-black text-xl px-1.5 rounded-sm transform -skew-x-12">P</div>
            <span className="font-black text-lg tracking-tighter uppercase italic">Achadinhos Admin</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'overview' ? 'bg-brand-red text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <LayoutDashboard size={20} /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'products' ? 'bg-brand-red text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Package size={20} /> Achadinhos
          </button>
          <button 
            onClick={() => setActiveTab('categories')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'categories' ? 'bg-brand-red text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Layers size={20} /> Categorias
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${activeTab === 'settings' ? 'bg-brand-red text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Settings size={20} /> Configurações
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-red-500/20 transition-all font-bold text-sm"
          >
            <LogOut size={20} /> Sair do Painel
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-black text-brand-dark uppercase italic">
              {activeTab === 'overview' && 'Visão Geral'}
              {activeTab === 'products' && 'Gerenciar Produtos'}
              {activeTab === 'categories' && 'Categorias'}
              {activeTab === 'settings' && 'Configurações da Loja'}
            </h1>
            <p className="text-gray-400 text-sm font-medium">Bem-vindo de volta, Administrador!</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Pesquisar..." 
                className="bg-white border border-gray-200 rounded-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
              />
            </div>
            <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center font-bold text-brand-red">AD</div>
          </div>
        </header>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div 
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Cliques Hoje', value: '1.240', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
                  { label: 'Cliques Totais', value: '15.420', icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-100' },
                  { label: 'Novos Visitantes', value: '342', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
                  { label: 'Taxa de Clique', value: '8.2%', icon: TrendingUp, color: 'text-brand-red', bg: 'bg-red-100' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                        <stat.icon size={24} />
                      </div>
                      <span className="text-[10px] font-black text-green-500 bg-green-50 px-2 py-1 rounded-full">+15%</span>
                    </div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                    <h3 className="text-2xl font-black text-brand-dark mt-1">{stat.value}</h3>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                  <h3 className="text-lg font-black text-brand-dark uppercase italic mb-6">Últimos Cliques</h3>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center text-brand-red font-bold">#</div>
                          <div>
                            <p className="text-sm font-bold text-brand-dark">Clique em Achadinho #{i}</p>
                            <p className="text-xs text-gray-400">Há {i * 2} minutos</p>
                          </div>
                        </div>
                        <span className="text-sm font-black text-brand-red">Origem: Instagram</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                  <h3 className="text-lg font-black text-brand-dark uppercase italic mb-6">Achadinhos Populares</h3>
                  <div className="space-y-4">
                    {products.slice(0, 4).map(p => (
                      <div key={p.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                        <div className="flex items-center gap-4">
                          <img src={p.image} className="w-10 h-10 rounded-lg object-cover" alt="" />
                          <div>
                            <p className="text-sm font-bold text-brand-dark line-clamp-1">{p.name}</p>
                            <p className="text-xs text-gray-400">{p.reviews} cliques</p>
                          </div>
                        </div>
                        <ChevronRight size={18} className="text-gray-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'products' && (
            <motion.div 
              key="products"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-lg font-black text-brand-dark uppercase italic">Lista de Produtos</h3>
                  <button 
                    onClick={() => {
                      setEditingProduct(null);
                      setFormData({ name: '', price: 0, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=400&h=400', tag: '' });
                      setIsModalOpen(true);
                    }}
                    className="bg-brand-red text-white font-black px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-brand-dark transition-all text-sm uppercase tracking-tight"
                  >
                    <Plus size={18} /> Novo Produto
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                        <th className="px-8 py-4">Achadinho</th>
                        <th className="px-8 py-4">Preço</th>
                        <th className="px-8 py-4">Status</th>
                        <th className="px-8 py-4">Cliques</th>
                        <th className="px-8 py-4 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {products.map(p => (
                        <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-8 py-4">
                            <div className="flex items-center gap-4">
                              <img src={p.image} className="w-12 h-12 rounded-xl object-cover shadow-sm" alt="" />
                              <div>
                                <p className="text-sm font-bold text-brand-dark">{p.name}</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{p.tag || 'Sem Tag'}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-4">
                            <p className="text-sm font-black text-brand-red">R$ {p.price.toFixed(2)}</p>
                          </td>
                          <td className="px-8 py-4">
                            <span className="bg-green-100 text-green-600 text-[10px] font-black px-2 py-1 rounded-full uppercase">Ativo</span>
                          </td>
                          <td className="px-8 py-4 text-sm font-bold text-gray-500">{p.reviews}</td>
                          <td className="px-8 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button 
                                onClick={() => openEditModal(p)}
                                className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                              >
                                <Edit3 size={18} />
                              </button>
                              <button 
                                onClick={() => handleDeleteProduct(p.id)}
                                className="p-2 text-gray-400 hover:text-brand-red hover:bg-red-50 rounded-lg transition-all"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'categories' && (
            <motion.div 
              key="categories"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {categories.map(c => (
                <div key={c.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-yellow/20 rounded-2xl flex items-center justify-center text-brand-red">
                      <Layers size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">{c.name}</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">12 Produtos</p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-300 hover:text-brand-red opacity-0 group-hover:opacity-100 transition-all">
                    <Edit3 size={18} />
                  </button>
                </div>
              ))}
              <button className="bg-white border-2 border-dashed border-gray-200 p-6 rounded-3xl flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-brand-red hover:text-brand-red transition-all group">
                <Plus size={32} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm uppercase tracking-widest">Nova Categoria</span>
              </button>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div 
              key="settings"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-2xl bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-black text-brand-dark uppercase italic mb-8">Personalizar Loja</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Nome da Loja</label>
                  <input type="text" defaultValue="Achadinhos do Dia" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Cor Principal</label>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-red rounded-xl cursor-pointer border-4 border-white shadow-lg"></div>
                    <div className="w-12 h-12 bg-blue-600 rounded-xl cursor-pointer hover:scale-105 transition-transform"></div>
                    <div className="w-12 h-12 bg-green-600 rounded-xl cursor-pointer hover:scale-105 transition-transform"></div>
                    <div className="w-12 h-12 bg-purple-600 rounded-xl cursor-pointer hover:scale-105 transition-transform"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Banner Principal</label>
                  <div className="w-full h-32 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 gap-2 cursor-pointer hover:bg-gray-50 transition-colors">
                    <ImageIcon size={32} />
                    <span className="text-xs font-bold uppercase">Alterar Imagem</span>
                  </div>
                </div>
                <button className="w-full bg-brand-red text-white font-black py-4 rounded-xl shadow-lg hover:bg-brand-dark transition-all uppercase tracking-tight mt-4">
                  Salvar Alterações
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Product Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="bg-brand-red p-6 text-white flex justify-between items-center">
                <h3 className="text-xl font-black uppercase italic tracking-tight">
                  {editingProduct ? 'Editar Produto' : 'Novo Produto'}
                </h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSaveProduct} className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Nome do Produto</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red font-medium" 
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Preço (R$)</label>
                    <input 
                      type="number" 
                      step="0.01"
                      value={formData.price}
                      onChange={e => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red font-medium" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Tag (Opcional)</label>
                    <input 
                      type="text" 
                      value={formData.tag}
                      onChange={e => setFormData({ ...formData, tag: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red font-medium" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 tracking-widest">URL da Imagem</label>
                  <input 
                    type="text" 
                    value={formData.image}
                    onChange={e => setFormData({ ...formData, image: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red font-medium text-xs" 
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Link de Afiliado</label>
                  <input 
                    type="text" 
                    value={formData.affiliateUrl}
                    onChange={e => setFormData({ ...formData, affiliateUrl: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-red font-medium text-xs" 
                    placeholder="https://shopee.com.br/..."
                    required
                  />
                </div>

                <button type="submit" className="w-full bg-brand-red text-white font-black py-4 rounded-xl shadow-lg hover:bg-brand-dark transition-all uppercase tracking-tight">
                  {editingProduct ? 'Salvar Alterações' : 'Criar Produto'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
