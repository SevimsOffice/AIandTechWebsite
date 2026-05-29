import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage       from './pages/HomePage';
import TrainingsPage  from './pages/TrainingsPage';
import TrainingDetailPage from './pages/TrainingDetailPage';
import BlogsPage      from './pages/BlogsPage';
import ProductsPage   from './pages/ProductsPage';
import VibeCoding     from './pages/VibeCoding';
import NetWorthCalculator from './pages/NetWorthCalculator';
import TemplatesPage  from './pages/TemplatesPage';
import AIBaglamKasasiPage from './pages/AIBaglamKasasiPage';
import AIDanismaKuruluPage from './pages/AIDanismaKuruluPage';
import FoundersGuidePage from './pages/FoundersGuidePage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-950 text-white">
          <Header />
          <main>
            <Routes>
              <Route path="/"                          element={<HomePage />} />
              <Route path="/trainings"                 element={<TrainingsPage />} />
              <Route path="/trainings/:slug"           element={<TrainingDetailPage />} />
              <Route path="/blogs"                     element={<BlogsPage />} />
              <Route path="/products"                  element={<ProductsPage />} />
              <Route path="/vibecoding"                element={<VibeCoding />} />
              <Route path="/products/ainetvalue"       element={<NetWorthCalculator />} />
              <Route path="/templates"                 element={<TemplatesPage />} />
              <Route path="/templates/ai-baglam-kasasi" element={<AIBaglamKasasiPage />} />
              <Route path="/templates/ai-danisma-kurulu" element={<AIDanismaKuruluPage />} />
              <Route path="/templates/founders-guide-to-claude" element={<FoundersGuidePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
