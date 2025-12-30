import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Linkedin, Youtube, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

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
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div
              onClick={() => handleNavigation('/', 'home')}
              className="flex items-center space-x-2 mb-4 cursor-pointer group"
            >
              <img
                src="/AI and Tech (3).png"
                alt="AI & Tech"
                className="h-8 w-auto group-hover:opacity-80 transition-opacity"
              />
              <span className="text-lg font-bold group-hover:opacity-80 transition-opacity" style={{ color: '#d0224f' }}>
                AI and Tech
              </span>
            </div>
            <p className="text-gray-400 max-w-md text-sm">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.links')}</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleNavigation('/', 'home')}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-left text-sm"
              >
                {t('common.home')}
              </button>
              <button
                onClick={() => handleNavigation('/', 'services')}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-left text-sm"
              >
                {t('common.services')}
              </button>
              <button
                onClick={() => handleNavigation('/trainings')}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-left text-sm"
              >
                {t('nav.trainings')}
              </button>
              <button
                onClick={() => handleNavigation('/blogs')}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-left text-sm"
              >
                {t('nav.blogs')}
              </button>
              <button
                onClick={() => handleNavigation('/products')}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-left text-sm"
              >
                {t('nav.products')}
              </button>
              <button
                onClick={() => handleNavigation('/', 'about')}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-left text-sm"
              >
                {t('common.about')}
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.connect')}</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;