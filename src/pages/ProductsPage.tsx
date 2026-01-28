import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductsPage = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 'vibecoding',
      title: t('vibecoding.title'),
      image: '/product-vibecoding.png',
      link: '/vibecoding',
      description: t('vibecoding.hero.subtitle')
    },
    {
      id: 'ainetvalue',
      title: t('nav.calculator'),
      image: '/product-roicalculator.png',
      link: '/products/ainetvalue',
      description: t('productsPage.infoDesc').split('.')[0] + '.'
    },
    {
      id: 'genai-kickstart',
      title: t('trainingsPage.course1.name'),
      image: '/product-genaikickstart.png',
      link: 'https://payhip.com/b/AITech',
      description: t('trainingsPage.course1.desc1')
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('productsPage.title')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('productsPage.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {product.title}
                </h2>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  target={product.link.startsWith('http') ? '_blank' : '_self'}
                  rel={product.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold transition-all group/btn w-full"
                >
                  {t('services.learn.more')}
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-20 max-w-4xl mx-auto rounded-3xl p-8 border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">{t('productsPage.needHelp')}</h3>
          <p className="text-gray-400 mb-8">
            {t('contact.subtitle')}
          </p>
          <a
            href="mailto:sevimdurmus@gmail.com"
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-bold transition-all gap-2"
          >
            {t('productsPage.contact')}
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
