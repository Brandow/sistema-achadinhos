import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductGrid } from './components/ProductGrid';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Institutional } from './components/Institutional';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Product } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';

// Admin Components
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { ProductDetails } from './pages/ProductDetails';
import { CategoryPage } from './pages/CategoryPage';

const StoreFront = ({ onAddToCart, cartCount }: { onAddToCart: (p: Product) => void, cartCount: number }) => (
  <div className="min-h-screen flex flex-col">
    <Header cartCount={cartCount} />
    <main className="flex-grow">
      <Hero />
      <CategoryGrid />
      <ProductGrid onAddToCart={onAddToCart} />
      <Benefits />
      <Testimonials />
      <Institutional />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [lastAdded, setLastAdded] = useState<Product | null>(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const navigate = useNavigate();

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    setLastAdded(product);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleAdminLogin = (success: boolean) => {
    if (success) {
      setIsAdminAuthenticated(true);
      navigate('/admin/dashboard');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    navigate('/admin');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<StoreFront onAddToCart={addToCart} cartCount={cart.length} />} />
        <Route path="/product/:id" element={<ProductDetails onAddToCart={addToCart} cartCount={cart.length} />} />
        <Route path="/category/:id" element={<CategoryPage onAddToCart={addToCart} cartCount={cart.length} />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={
          isAdminAuthenticated ? <Navigate to="/admin/dashboard" /> : <AdminLogin onLogin={handleAdminLogin} />
        } />
        
        <Route path="/admin/dashboard" element={
          isAdminAuthenticated ? <AdminDashboard onLogout={handleAdminLogout} /> : <Navigate to="/admin" />
        } />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && lastAdded && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-8 right-8 z-[100] bg-white rounded-2xl shadow-2xl border-l-8 border-brand-red p-4 flex items-center gap-4 max-w-xs"
          >
            <div className="bg-green-100 text-green-600 p-2 rounded-full">
              <CheckCircle2 size={24} />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-400 uppercase">Adicionado ao carrinho!</p>
              <p className="text-sm font-bold text-brand-dark line-clamp-1">{lastAdded.name}</p>
            </div>
            <button onClick={() => setShowToast(false)} className="text-gray-300 hover:text-brand-dark">
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 z-[90] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
    </>
  );
}
