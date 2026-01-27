import React from 'react';
import { ExternalLink, Calendar, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BlogsPage = () => {
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      titleKey: 'blogsPage.article1.title',
      dateKey: 'blogsPage.article1.date',
      categoryKey: 'blogsPage.article1.category',
      excerptKey: 'blogsPage.article1.excerpt',
      url: 'https://www.linkedin.com/pulse/beyond-chatbot-era-ai-agents-never-forget-aiandtech-qtthf/',
      image: '',
      tags: ['AI Agents', 'Memory Systems', 'Enterprise AI', 'Future of AI'],
    },
    {
      id: 2,
      titleKey: 'blogsPage.article2.title',
      dateKey: 'blogsPage.article2.date',
      categoryKey: 'blogsPage.article2.category',
      excerptKey: 'blogsPage.article2.excerpt',
      url: 'https://www.linkedin.com/pulse/agentic-ai-paradox-why-turkish-companies-watching-while-global-4rzef/',
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQE1iQKuRg1I5Q/article-cover_image-shrink_720_1280/B4DZtaWxo8G8AI-/0/1766747479491?e=1770854400&v=beta&t=_PcKapWDK8Cu7t8f-rOfORIPSURYaVxwTCmAX2XM7eM',
      tags: ['Agentic AI', 'Turkish Market', 'Competitive Strategy', 'Digital Transformation'],
    },
  ];

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

        <section className="mb-20 space-y-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="relative overflow-hidden h-64 md:h-auto md:col-span-1">
                  <img
                    src={article.image}
                    alt={t(article.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-transparent md:hidden"></div>
                </div>

                <div className="p-8 md:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/20">
                        {t(article.categoryKey)}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{t(article.dateKey)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{t('blogsPage.authorName')}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {t(article.titleKey)}
                    </h2>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {t(article.excerptKey)}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {article.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 w-fit"
                  >
                    {t('blogsPage.readMore')}
                    <ExternalLink className="h-5 w-5 ml-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-6 text-white">
              {t('blogsPage.aboutAuthor')}
            </h2>

            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-4xl font-bold text-cyan-400">S</span>
              </div>
              <div>
                <p className="text-xl font-semibold text-white">{t('blogsPage.authorName')}</p>
                <p className="text-cyan-400 font-medium">{t('blogsPage.authorTitle')}</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('blogsPage.authorBio')}
            </p>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold gap-2"
            >
              {t('blogsPage.followLabel')} {t('blogsPage.followLink')}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogsPage;
