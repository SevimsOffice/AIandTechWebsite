import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BlogsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <section className="mb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('blogsPage.title')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {t('blogsPage.subtitle')}
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden group hover:border-cyan-400/50 transition-all duration-300">
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-cyan-400 mb-2">AI Agents</h3>
                      <p className="text-gray-300">{t('blogsPage.article1.date')}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/20">
                      {t('blogsPage.article1.category')}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {t('blogsPage.article1.title')}
                  </h2>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {t('blogsPage.article1.excerpt')}
                  </p>

                  <div className="space-y-3 mb-8">
                    <p className="text-gray-400 text-sm font-medium">Key Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {['AI Agents', 'Memory Systems', 'Enterprise AI', 'Future of AI'].map((topic) => (
                        <span key={topic} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/pulse/beyond-chatbot-era-ai-agents-never-forget-aiandtech-qtthf/?trackingId=nbqaaFQwGteiPdxD%2FmbVYw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {t('blogsPage.readMore')}
                    <ExternalLink className="h-5 w-5 ml-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 sticky top-32">
                <h3 className="text-xl font-bold mb-6 text-white">
                  {t('blogsPage.aboutAuthor')}
                </h3>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-400">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t('blogsPage.authorName')}</p>
                    <p className="text-sm text-gray-400">{t('blogsPage.authorTitle')}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {t('blogsPage.authorBio')}
                </p>

                <div className="border-t border-gray-700 pt-6">
                  <h4 className="font-semibold text-white mb-3">{t('blogsPage.followLabel')}</h4>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    {t('blogsPage.followLink')}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t('blogsPage.moreArticles')}
              </span>
            </h2>
            <p className="text-gray-400">
              {t('blogsPage.stayTuned')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 group hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-lg mb-4 group-hover:from-cyan-500/20 group-hover:to-blue-600/20 transition-all duration-300"></div>
                <h3 className="font-semibold text-white mb-2">{t('blogsPage.comingSoon')}</h3>
                <p className="text-gray-400 text-sm">{t('blogsPage.stayTunedDesc')}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogsPage;
