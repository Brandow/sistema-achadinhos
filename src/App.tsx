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

const StoreFront = () => (
  <div className="min-h-screen flex flex-col">
    <Header cartCount={0} />
    <main className="flex-grow">
      <Hero />
      <CategoryGrid />
      <ProductGrid />
      <Benefits />
      <Testimonials />
      <Institutional />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const navigate = useNavigate();

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
        <Route path="/" element={<StoreFront />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        
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
    </>
  );
}
