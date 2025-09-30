import React from 'react';
import { Settings, AlertTriangle, TrendingDown, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Challenges = () => {
  const { t } = useLanguage();

  const challenges = [
    {
      icon: Settings,
      title: t('challenges.manual.title'),
      description: t('challenges.manual.desc'),
    },
    {
      icon: AlertTriangle,
      title: t('challenges.compliance.title'),
      description: t('challenges.compliance.desc'),
    },
    {
      icon: TrendingDown,
      title: t('challenges.opportunities.title'),
      description: t('challenges.opportunities.desc'),
    },
    {
      icon: Users,
      title: t('challenges.adoption.title'),
      description: t('challenges.adoption.desc'),
    },
  ];

  return (
    <section id="challenges" className="py-24 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('challenges.title')}{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('challenges.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('challenges.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                <challenge.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                {challenge.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;