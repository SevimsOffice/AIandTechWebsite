import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string, sectionId?: string) => {
    if (location.pathname !== path) {
      navigate(path);
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            onClick={() => handleNavigation('/', 'home')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <img
              src="/AI and Tech (3).png"
              alt="AI & Tech"
              className="h-8 w-auto group-hover:opacity-80 transition-opacity"
            />
            <span className="text-xl font-bold group-hover:opacity-80 transition-opacity" style={{ color: '#d0224f' }}>
              AI and Tech
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('/', 'challenges')}
              className="text-gray-300 hover:text-brand transition-colors relative group"
            >
              {t('nav.challenges')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/', 'services')}
              className="text-gray-300 hover:text-brand transition-colors relative group"
            >
              {t('nav.services')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/trainings')}
              className="text-gray-300 hover:text-brand transition-colors relative group"
            >
              {t('nav.trainings')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/products')}
              className="text-gray-300 hover:text-brand transition-colors relative group"
            >
              {t('nav.products')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/', 'about')}
              className="text-gray-300 hover:text-brand transition-colors relative group"
            >
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
              className="flex items-center gap-1.5 text-gray-300 hover:text-brand transition-colors border border-gray-700 hover:border-brand/50 rounded-lg px-3 py-1.5 text-sm font-semibold"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'TR' : 'EN'}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => handleNavigation('/products')}
              className="text-gray-300 hover:text-brand transition-colors text-xs px-2 py-1"
            >
              {t('nav.products')}
            </button>
            <button
              onClick={() => handleNavigation('/trainings')}
              className="text-gray-300 hover:text-brand transition-colors text-xs px-2 py-1"
            >
              {t('nav.trainings')}
            </button>

            {/* Mobile Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
              className="flex items-center gap-1 text-gray-300 hover:text-brand transition-colors text-xs font-semibold border border-gray-700 hover:border-brand/50 rounded-md px-2 py-1"
            >
              <Globe className="h-3.5 w-3.5" />
              {language === 'en' ? 'TR' : 'EN'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;