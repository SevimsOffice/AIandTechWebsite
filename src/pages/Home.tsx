import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">{t('home.badge')}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              {t('home.title')}{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('home.company')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('home.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              {t('home.cta.contact')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('training')}
              className="group border-2 border-cyan-400 hover:border-cyan-300 px-8 py-4 rounded-full text-cyan-400 hover:text-cyan-300 font-semibold transition-all duration-300 hover:bg-cyan-400/10 flex items-center"
            >
              {t('home.cta.training')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: '#d0224f' }}></div>
      <div className="absolute top-40 right-20 w-5 h-5 rounded-full animate-bounce" style={{ backgroundColor: '#d0224f' }}></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: '#d0224f' }}></div>
    </section>
  );
};

export default Home;