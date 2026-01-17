import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TrainingsPage from './pages/TrainingsPage';
import BlogsPage from './pages/BlogsPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-950 text-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/trainings" element={<TrainingsPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/products" element={<ProductsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;