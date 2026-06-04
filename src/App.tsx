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
import ClaudeEcosystemAuditPage from './pages/ClaudeEcosystemAuditPage';
import GoalOperatorPackPage from './pages/GoalOperatorPackPage';
import AIBrandingWorkflowPage from './pages/AIBrandingWorkflowPage';
import PromptsPage from './pages/PromptsPage';
import ManusInstagramPage from './pages/ManusInstagramPage';
import ContentCreationPromptsPage from './pages/ContentCreationPromptsPage';
import ClaudeMdCompoundingPage from './pages/ClaudeMdCompoundingPage';

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
              <Route path="/templates/claude-ecosystem-audit" element={<ClaudeEcosystemAuditPage />} />
              <Route path="/templates/goal-operator-pack" element={<GoalOperatorPackPage />} />
              <Route path="/templates/ai-branding-workflow" element={<AIBrandingWorkflowPage />} />
              <Route path="/prompts"                   element={<PromptsPage />} />
              <Route path="/prompts/manus-instagram-strategy" element={<ManusInstagramPage />} />
              <Route path="/prompts/content-creation-prompts" element={<ContentCreationPromptsPage />} />
              <Route path="/prompts/claude-md-compounding" element={<ClaudeMdCompoundingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
