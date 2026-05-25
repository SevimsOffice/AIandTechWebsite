import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, ArrowRight } from 'lucide-react';

const TemplatesSection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Kaynaklar' : 'Free Resources',
    title: isTr ? 'Şablonlar' : 'Templates',
    titleHighlight: isTr ? 've Rehberler' : '& Guides',
    subtitle: isTr
      ? 'AI ile çalışmayı hızlandırmak için hazır, ücretsiz şablonlar.'
      : 'Ready-made, free templates to accelerate your AI workflow.',
    templateTitle: 'AI Bağlam Kasası',
    templateTitleEn: 'AI Context Vault',
    templateDesc: isTr
      ? 'Claude\'un gerçekten sizi anlamasını sağlayacak 8 kopyala-yapıştır prompt. Bağlam belgeleri oluşturun, AI\'yı stratejik ortağınıza dönüştürün.'
      : '8 copy-paste prompts that make Claude truly understand you. Build context docs and transform AI into your strategic partner.',
    download: isTr ? 'Ücretsiz İndir' : 'Download Free',
    all: isTr ? 'Tüm Şablonları Gör' : 'See All Templates',
    free: isTr ? 'Ücretsiz' : 'Free',
    pages: '14 sayfa · 8 prompt',
  };

  return (
    <section id="templates" className="py-24 px-6 bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-400/10 text-cyan-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-400/20">
            {labels.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {labels.title}{' '}
            <span className="text-cyan-400">{labels.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {labels.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Featured template card */}
          <div
            className="md:col-span-2 bg-gray-900 border border-gray-800 hover:border-cyan-400/40 rounded-2xl p-8 transition-all group cursor-pointer"
            onClick={() => navigate('/templates/ai-baglam-kasasi')}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
                <Download className="h-6 w-6 text-cyan-400" />
              </div>
              <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                {labels.free}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {isTr ? labels.templateTitle : labels.templateTitleEn}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">{labels.templateDesc}</p>

            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">{labels.pages}</span>
              <button
                onClick={e => { e.stopPropagation(); navigate('/templates/ai-baglam-kasasi'); }}
                className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                <Download className="h-4 w-4" />
                {labels.download}
              </button>
            </div>
          </div>

          {/* Coming soon */}
          <div className="bg-gray-900/50 border border-dashed border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-4">🔜</div>
            <p className="text-gray-400 font-medium mb-1">{isTr ? 'Yakında' : 'Coming Soon'}</p>
            <p className="text-gray-600 text-sm">{isTr ? 'Yeni şablonlar ekleniyor' : 'More templates on the way'}</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/templates')}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
          >
            {labels.all} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
