import React from 'react';
import { ExternalLink, BookOpen, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TrainingsPage = () => {
  const { t } = useLanguage();

  const handleCorporateTraining = () => {
    const subject = encodeURIComponent('Corporate Training Request');
    const body = encodeURIComponent(`Hello,

I would like to discuss corporate training.

Company:
Team size:
Training topic:`);
    window.location.href = `mailto:sevimdurmus@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <section className="mb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('trainingsPage.title')}
              </span>
            </h1>
            <div className="max-w-3xl mx-auto space-y-3 text-lg md:text-xl text-gray-300">
              <p>{t('trainingsPage.intro.line1')}</p>
              <p>{t('trainingsPage.intro.line2')}</p>
              <p>{t('trainingsPage.intro.line3')}</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t('trainingsPage.available.title')}
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8348559/pexels-photo-8348559.jpeg"
                  alt="GenAI Kickstart Course"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {t('trainingsPage.course1.name')}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-3 text-gray-300 mb-8">
                  <p>{t('trainingsPage.course1.desc1')}</p>
                  <p>{t('trainingsPage.course1.desc2')}</p>
                  <p>{t('trainingsPage.course1.desc3')}</p>
                </div>

                <a
                  href="https://payhip.com/b/OrJfg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 flex items-center justify-center text-lg"
                >
                  <BookOpen className="h-5 w-5 mr-3" />
                  {t('trainingsPage.viewCourse')}
                  <ExternalLink className="h-5 w-5 ml-3 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {t('trainingsPage.corporate.title')}
                </span>
              </h2>
              <div className="max-w-3xl mx-auto space-y-3 text-lg text-gray-300 mb-8">
                <p>{t('trainingsPage.corporate.desc1')}</p>
                <p>{t('trainingsPage.corporate.desc2')}</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mb-10">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg mr-4 flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-gray-300 text-lg pt-2">{t('trainingsPage.corporate.offer1')}</p>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg mr-4 flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-gray-300 text-lg pt-2">{t('trainingsPage.corporate.offer2')}</p>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg mr-4 flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-gray-300 text-lg pt-2">{t('trainingsPage.corporate.offer3')}</p>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={handleCorporateTraining}
                className="group inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 text-lg"
              >
                <Mail className="h-5 w-5 mr-3" />
                {t('trainingsPage.corporate.cta')}
                <ExternalLink className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrainingsPage;
