import React from 'react';
import { Lightbulb, Bot, Cog, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Lightbulb,
      title: t('services.enablement.title'),
      description: t('services.enablement.desc'),
      details: t('services.enablement.details'),
    },
    {
      icon: Bot,
      title: t('services.factory.title'),
      description: t('services.factory.desc'),
      details: t('services.factory.details'),
    },
    {
      icon: Cog,
      title: t('services.automation.title'),
      description: t('services.automation.desc'),
      details: t('services.automation.details'),
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('services.title')}{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('services.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl mb-8 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                <service.icon className="h-10 w-10 text-cyan-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-8">
                {service.details}
              </p>

              <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors cursor-pointer">
                <span className="font-semibold">{t('services.learn.more')}</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105"
          >
            {t('services.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;