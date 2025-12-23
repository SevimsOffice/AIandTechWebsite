import React from 'react';
import { Award, Users, Briefcase, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: Award,
      title: t('about.achievement1.title'),
      description: t('about.achievement1.desc'),
    },
    {
      icon: Users,
      title: t('about.achievement2.title'),
      description: t('about.achievement2.desc'),
    },
    {
      icon: Briefcase,
      title: t('about.achievement3.title'),
      description: t('about.achievement3.desc'),
    },
    {
      icon: Star,
      title: t('about.achievement4.title'),
      description: t('about.achievement4.desc'),
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900/30">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('about.title')}{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('about.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">{t('about.mission.title')}</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('about.mission.p1')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.mission.p2')}
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-400/30">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Sevim Durmus - Founder & AI Consultant"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h4 className="text-2xl font-bold text-white mb-2">{t('about.founder.name')}</h4>
              <p className="text-cyan-400 font-semibold mb-3">{t('about.founder.title')}</p>
              <p className="text-gray-400">
                {t('about.founder.desc')}
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl mb-4 mx-auto group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                <achievement.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {achievement.title}
              </h4>
              <p className="text-gray-400 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Logos Placeholder */}
        <div className="text-center">
          <h4 className="text-2xl font-bold text-white mb-8">{t('about.partners')}</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-8 py-4 rounded-lg">
              <span className="text-white font-semibold">AWS</span>
            </div>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-8 py-4 rounded-lg">
              <span className="text-white font-semibold">Microsoft</span>
            </div>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-8 py-4 rounded-lg">
              <span className="text-white font-semibold">Google Cloud</span>
            </div>
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-8 py-4 rounded-lg">
              <span className="text-white font-semibold">OpenAI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;