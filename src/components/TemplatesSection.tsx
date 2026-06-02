import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, ArrowRight } from 'lucide-react';

const templateCards = [
  {
    slug: 'claude-ecosystem-audit',
    titleTr: 'Claude Ekosistem Denetimi',
    titleEn: 'Claude Ecosystem Audit',
    descTr: 'Tek prompt ile 5.000+ kelimelik stratejik rapor. Claude\'u tam kapasiteyle kullanıyor musunuz?',
    descEn: 'One prompt. A 5,000+ word strategic report. Are you using Claude at full capacity?',
    metaTr: '10 bölüm · 1 prompt',
    metaEn: '10 sections · 1 prompt',
  },
  {
    slug: 'founders-guide-to-claude',
    titleTr: 'Kurucunun Claude Rehberi',
    titleEn: "The Founder's Guide to Claude",
    descTr: 'Modeller, kurulum, prompting ve her şeyi tıklatan 12 ifade. İlk günden doğru kullanmak için.',
    descEn: 'Models, setup, prompting, and 12 phrases that make it all click. Get it right from day one.',
    metaTr: '30 sayfa · 12 ifade',
    metaEn: '30 pages · 12 phrases',
  },
  {
    slug: 'ai-baglam-kasasi',
    titleTr: 'AI Bağlam Kasası',
    titleEn: 'AI Context Vault',
    descTr: 'Claude\'un gerçekten sizi anlamasını sağlayacak 8 kopyala-yapıştır prompt.',
    descEn: '8 copy-paste prompts that make Claude truly understand you.',
    metaTr: '14 sayfa · 8 prompt',
    metaEn: '14 pages · 8 prompts',
  },
  {
    slug: 'ai-danisma-kurulu',
    titleTr: 'AI Danışma Kurulu',
    titleEn: 'AI Advisory Council',
    descTr: '5 farklı danışman, anonim değerlendirme ve başkanın net kararı — tek sohbette.',
    descEn: '5 advisers, anonymous peer review, and the chairman\'s clear call — one chat.',
    metaTr: '8 sayfa · 1 prompt',
    metaEn: '8 pages · 1 prompt',
  },
  {
    slug: 'goal-operator-pack',
    titleTr: '/goal Operatör Paketi',
    titleEn: 'The /goal Operator Pack',
    descTr: 'Claude Code ile otonom çalıştırma. Koşul oluşturucu prompt ve 5 hazır şablon.',
    descEn: 'Autonomous Claude Code /goal sessions. Condition builder and 5 ready-to-paste templates.',
    metaTr: '7 sayfa · 5 şablon',
    metaEn: '7 pages · 5 templates',
  },
  {
    slug: 'ai-branding-workflow',
    titleTr: 'Tam AI Marka İş Akışı',
    titleEn: 'Full AI Branding Workflow',
    descTr: 'Sadece logodan premium marka kimliği, sosyal medya ve sinematik reklam. ChatGPT + Seedance 2.0.',
    descEn: 'From one logo to brand identity, social media creatives, and a cinematic ad. ChatGPT + Seedance 2.0.',
    metaTr: '6 sayfa · 3 prompt',
    metaEn: '6 pages · 3 prompts',
  },
];

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
    download: isTr ? 'Ücretsiz İndir' : 'Download Free',
    all: isTr ? 'Tüm Şablonları Gör' : 'See All Templates',
    free: isTr ? 'Ücretsiz' : 'Free',
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

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {templateCards.map((tpl, idx) => (
            <div
              key={tpl.slug}
              className={`bg-gray-900 border border-gray-800 hover:border-cyan-400/40 rounded-2xl p-8 transition-all group cursor-pointer${idx === 0 ? ' md:col-span-2' : ''}`}
              onClick={() => navigate(`/templates/${tpl.slug}`)}
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
                {isTr ? tpl.titleTr : tpl.titleEn}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {isTr ? tpl.descTr : tpl.descEn}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{isTr ? tpl.metaTr : tpl.metaEn}</span>
                <button
                  onClick={e => { e.stopPropagation(); navigate(`/templates/${tpl.slug}`); }}
                  className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  <Download className="h-4 w-4" />
                  {labels.download}
                </button>
              </div>
            </div>
          ))}
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
