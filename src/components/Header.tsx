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
              className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.challenges')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/', 'services')}
              className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.services')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/trainings')}
              className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.trainings')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/blogs')}
              className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.blogs')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/products')}
              className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.products')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/products/ainetvalue')}
              className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.calculator')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => handleNavigation('/', 'about')}
              className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
            >
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Language Toggle */}
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <Globe className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 top-full mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button
                  onClick={() => setLanguage('en')}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${language === 'en' ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('tr')}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${language === 'tr' ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                >
                  Türkçe
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => handleNavigation('/products')}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-xs px-2 py-1"
            >
              {t('nav.products')}
            </button>
            <button
              onClick={() => handleNavigation('/trainings')}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-xs px-2 py-1"
            >
              {t('nav.trainings')}
            </button>
            <button
              onClick={() => handleNavigation('/blogs')}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-xs px-2 py-1"
            >
              {t('nav.blogs')}
            </button>

            {/* Mobile Language Toggle */}
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                <Globe className="h-4 w-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <button
                  onClick={() => setLanguage('en')}
                  className={`block w-full text-left px-3 py-2 text-xs hover:bg-gray-800 transition-colors ${language === 'en' ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('tr')}
                  className={`block w-full text-left px-3 py-2 text-xs hover:bg-gray-800 transition-colors ${language === 'tr' ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                >
                  TR
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;