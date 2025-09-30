import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Challenges from './pages/Challenges';
import Services from './pages/Services';
import About from './pages/About';
import Training from './pages/Training';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        <main>
          <Home />
          <Challenges />
          <Services />
          <About />
          <Training />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;