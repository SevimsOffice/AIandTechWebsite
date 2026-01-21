import React from 'react';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <section className="mb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t('productsPage.title')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {t('productsPage.subtitle')}
            </p>
          </div>

          {/* Vibe Coding Featured Card */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6 w-fit">
                      <ShoppingCart size={14} />
                      <span>Featured Product</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                      {t('vibecoding.title')}
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      {t('vibecoding.hero.subtitle')}
                    </p>
                    <a
                      href="/vibecoding"
                      className="inline-flex items-center justify-center bg-white text-gray-950 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-xl font-bold transition-all gap-2 w-fit"
                    >
                      Learn More
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-12 flex items-center justify-center relative overflow-hidden hidden md:flex">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="relative z-10 text-9xl font-black text-white/5 select-none">VIBE</div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
                <iframe
                  src="https://payhip.com/AITech"
                  title="AI & Tech Products"
                  className="w-full h-[800px] border-0"
                  allow="payment"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="mt-8 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3 flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {t('productsPage.info')}
                </h3>
                <p className="text-gray-300">
                  {t('productsPage.infoDesc')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 sticky top-32 h-fit">
                <h3 className="text-xl font-bold mb-6 text-white">
                  {t('productsPage.whatWeOffer')}
                </h3>

                <ul className="space-y-4 mb-8">
                  {[
                    { icon: '🎓', label: t('productsPage.item1') },
                    { icon: '🛠️', label: t('productsPage.item2') },
                    { icon: '💼', label: t('productsPage.item3') },
                    { icon: '📊', label: t('productsPage.item4') },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-2xl mt-1">{item.icon}</span>
                      <span className="text-gray-300 text-sm pt-1">{item.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-700 pt-6">
                  <h4 className="font-semibold text-white mb-4">{t('productsPage.needHelp')}</h4>
                  <a
                    href="mailto:sevimdurmus@gmail.com"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 text-center"
                  >
                    {t('productsPage.contact')}
                  </a>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-6">
                  <a
                    href="https://payhip.com/AITech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium gap-2"
                  >
                    {t('productsPage.openInNewWindow')}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsPage;
