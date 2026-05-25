import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, ArrowRight } from 'lucide-react';

const templates = [
  {
    slug: 'ai-baglam-kasasi',
    titleTr: 'AI Bağlam Kasası',
    titleEn: 'AI Context Vault',
    descTr: 'Claude\'un gerçekten sizi anlamasını sağlayacak 8 kopyala-yapıştır prompt. Bağlam belgeleri oluşturun, AI\'yı stratejik iş ortağınıza dönüştürün.',
    descEn: '8 copy-paste prompts that make Claude truly understand you. Build context documents and transform AI into your strategic partner.',
    badge: 'Ücretsiz · Free',
    color: 'cyan',
    pages: 14,
    prompts: 8,
  },
];

const TemplatesPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Kaynaklar' : 'Free Resources',
    title: isTr ? 'Şablonlar' : 'Templates',
    subtitle: isTr
      ? 'AI ile çalışmayı hızlandırmak için hazır şablonlar ve rehberler. Ücretsiz indirin, hemen kullanmaya başlayın.'
      : 'Ready-made templates and guides to accelerate your AI workflow. Download free and start using them right away.',
    pages: isTr ? 'sayfa' : 'pages',
    prompts: isTr ? 'prompt' : 'prompts',
    download: isTr ? 'Ücretsiz İndir' : 'Download Free',
    free: isTr ? 'Ücretsiz' : 'Free',
    more: isTr ? 'Yakında Daha Fazlası...' : 'More Coming Soon...',
    moreDesc: isTr
      ? 'Her yeni şablon için bu sayfayı takip edin.'
      : 'Follow this page for each new template.',
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-block bg-cyan-400/10 text-cyan-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-cyan-400/20">
              {labels.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {labels.title}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {labels.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {templates.map(tpl => (
              <div
                key={tpl.slug}
                className="bg-gray-900 border border-gray-800 hover:border-cyan-400/40 rounded-2xl p-7 transition-all group cursor-pointer"
                onClick={() => navigate(`/templates/${tpl.slug}`)}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
                    <Download className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                    {labels.free}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {isTr ? tpl.titleTr : tpl.titleEn}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {isTr ? tpl.descTr : tpl.descEn}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-xs text-gray-500">
                    <span>{tpl.pages} {labels.pages}</span>
                    <span>{tpl.prompts} {labels.prompts}</span>
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); navigate(`/templates/${tpl.slug}`); }}
                    className="flex items-center gap-1.5 text-cyan-400 text-sm font-semibold hover:gap-3 transition-all"
                  >
                    {labels.download} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Coming soon placeholder */}
            <div className="bg-gray-900/50 border border-dashed border-gray-700 rounded-2xl p-7 flex flex-col items-center justify-center text-center min-h-[220px]">
              <div className="text-3xl mb-3">🔜</div>
              <h3 className="text-white font-semibold mb-2">{labels.more}</h3>
              <p className="text-gray-500 text-sm">{labels.moreDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplatesPage;
