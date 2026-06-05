import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Copy, ArrowRight } from 'lucide-react';

const promptCards = [
  {
    slug: 'manus-instagram-strategy',
    titleTr: 'Manus.im ile Instagram Stratejisi',
    titleEn: 'Instagram Strategy with Manus.im',
    descTr: 'Hesabınızı analiz edin, rakip araştırması yapın ve 12 slaytlık büyüme stratejisi oluşturun — tek promptla.',
    descEn: 'Analyze your account, research competitors, and build a 12-slide growth strategy — all from one prompt.',
    metaTr: 'Araç: Manus.im',
    metaEn: 'Tool: Manus.im',
  },
  {
    slug: 'content-creation-prompts',
    titleTr: 'İçerik Üretimi Prompt Paketi',
    titleEn: 'Content Creation Prompt Pack',
    descTr: 'Viral postlar, felsefi içerik ve sosyal medya taslakları için 4 hazır prompt — tek pakette.',
    descEn: '4 ready-to-use prompts for viral posts, philosophical content, and social media outlines — one pack.',
    metaTr: 'Araç: ChatGPT veya Claude',
    metaEn: 'Tool: ChatGPT or Claude',
  },
  {
    slug: 'claude-md-compounding',
    titleTr: 'CLAUDE.md Bileşik Mühendislik',
    titleEn: 'CLAUDE.md Compounding Engineering',
    descTr: 'Claude Code\'un hatalarından öğrenmesini sağlayan sistem. 1 cümle, 14 gün, sonsuza kadar çalışır.',
    descEn: 'The system that makes Claude Code learn from its mistakes. 1 sentence, 14 days, runs forever.',
    metaTr: 'Araç: Claude Code',
    metaEn: 'Tool: Claude Code',
  },
  {
    slug: 'anatomy-of-a-claude-prompt',
    titleTr: 'Claude Prompt\'unun Anatomisi',
    titleEn: 'The Anatomy of a Claude Prompt',
    descTr: 'Bir Claude promptu 10 bileşenden oluşur. Her birini nasıl yazacağınızı görsel ve örneklerle öğrenin.',
    descEn: 'A Claude prompt has 10 building blocks. Learn how to write each one with visuals and examples.',
    metaTr: 'Kaynak: Anthropic',
    metaEn: 'Source: Anthropic',
  },
];

const PromptsSection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Promptlar' : 'Free Prompts',
    title: isTr ? 'Promptlar' : 'Prompts',
    titleHighlight: isTr ? 've Komutlar' : '& Commands',
    subtitle: isTr
      ? 'Kopyala, yapıştır, çalıştır. AI araçlarından maksimum sonuç için hazır promptlar.'
      : 'Copy, paste, run. Ready-made prompts to get maximum results from AI tools.',
    get: isTr ? 'Promptu Al' : 'Get Prompt',
    all: isTr ? 'Tüm Promptları Gör' : 'See All Prompts',
    free: isTr ? 'Ücretsiz' : 'Free',
  };

  return (
    <section id="prompts" className="py-24 px-6 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand/10 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-brand/20">
            {labels.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {labels.title}{' '}
            <span className="text-brand">{labels.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {labels.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {promptCards.map((p, idx) => (
            <div
              key={p.slug}
              className={`bg-gray-800 border border-gray-700 hover:border-brand/40 rounded-2xl p-8 transition-all group cursor-pointer${idx === 0 && promptCards.length === 1 ? ' md:col-span-2 max-w-2xl mx-auto w-full' : ''}`}
              onClick={() => navigate(`/prompts/${p.slug}`)}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand/10 border border-brand/20">
                  <Copy className="h-6 w-6 text-brand" />
                </div>
                <span className="text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                  {labels.free}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
                {isTr ? p.titleTr : p.titleEn}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {isTr ? p.descTr : p.descEn}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{isTr ? p.metaTr : p.metaEn}</span>
                <button
                  onClick={e => { e.stopPropagation(); navigate(`/prompts/${p.slug}`); }}
                  className="flex items-center gap-2 bg-brand hover:bg-brand-light text-gray-950 font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  <Copy className="h-4 w-4" />
                  {labels.get}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/prompts')}
            className="inline-flex items-center gap-2 text-brand hover:text-brand-light font-semibold transition-colors"
          >
            {labels.all} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromptsSection;
