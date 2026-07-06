import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Copy, ArrowRight } from 'lucide-react';

const prompts = [
  {
    slug: 'manus-instagram-strategy',
    titleTr: 'Manus.im ile Instagram Stratejisi',
    titleEn: 'Instagram Strategy with Manus.im',
    descTr: 'Hesabınızı analiz edin, rakip araştırması yapın ve 12 slaytlık büyüme stratejisi oluşturun — tek promptla.',
    descEn: 'Analyze your account, research competitors, and build a 12-slide growth strategy — all from one prompt.',
    toolTr: 'Araç: Manus.im',
    toolEn: 'Tool: Manus.im',
  },
  {
    slug: 'content-creation-prompts',
    titleTr: 'İçerik Üretimi Prompt Paketi',
    titleEn: 'Content Creation Prompt Pack',
    descTr: 'Viral postlar, felsefi içerik, çığır açıcı fikirler ve sosyal medya taslakları için 4 hazır prompt.',
    descEn: '4 ready-to-use prompts for viral posts, philosophical content, breakthrough ideas, and social media outlines.',
    toolTr: 'Araç: ChatGPT, Claude veya herhangi bir AI',
    toolEn: 'Tool: ChatGPT, Claude, or any AI',
  },
  {
    slug: 'claude-md-compounding',
    titleTr: 'CLAUDE.md Bileşik Mühendislik Rehberi',
    titleEn: 'CLAUDE.md Compounding Engineering Guide',
    descTr: 'Claude Code\'un hatalarından öğrenmesini sağlayan sistem. 4 bölümlü şablon, 14 günlük ritüel ve "Update CLAUDE.md so you don\'t repeat this." cümlesi.',
    descEn: 'The system that makes Claude Code learn from its own mistakes. 4-section template, 14-day ritual, and the one sentence that turns errors into permanent memory.',
    toolTr: 'Araç: Claude Code',
    toolEn: 'Tool: Claude Code',
  },
  {
    slug: 'anatomy-of-a-claude-prompt',
    titleTr: 'Claude Prompt\'unun Anatomisi',
    titleEn: 'The Anatomy of a Claude Prompt',
    descTr: 'Bir Claude promptu 10 bileşenden oluşur. Her birini nasıl yazacağınızı öğrenin — görev bağlamı, ton, kurallar, örnekler ve daha fazlası.',
    descEn: 'A Claude prompt has 10 building blocks. Learn how to write each one — task context, tone, rules, examples, and more.',
    toolTr: 'Kaynak: Anthropic',
    toolEn: 'Source: Anthropic',
  },
  {
    slug: 'prompt-generator',
    titleTr: 'Prompt Üreticisi',
    titleEn: 'Prompt Generator',
    descTr: 'Her kullanım senaryosu için yapılandırılmış, halüsinasyon oranı düşük prompt\'lar oluşturan meta-prompt sistemi. 6 meta-prompting ilkesi dahil.',
    descEn: 'A meta-prompt system that creates well-structured, low-hallucination prompts for any use case. Includes 6 meta-prompting principles.',
    toolTr: 'Araç: Claude · ChatGPT',
    toolEn: 'Tool: Claude · ChatGPT',
  },
  {
    slug: 'profesyoneller-icin-claude',
    titleTr: 'Profesyoneller için Claude',
    titleEn: 'Claude for Professionals',
    descTr: 'Eğitimde kullandığımız 5 temel prompt. Kopyala, yapıştır, dene — Project kurulumu, e-posta, toplantı özeti, analiz, karar desteği.',
    descEn: '5 core prompts from the training. Copy, paste, try — project setup, email, meeting summary, analysis, decision support.',
    toolTr: 'Araç: Claude',
    toolEn: 'Tool: Claude',
  },
];

const PromptsPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Promptlar' : 'Free Prompts',
    title: isTr ? 'Promptlar' : 'Prompts',
    subtitle: isTr
      ? 'Kopyala, yapıştır, çalıştır. AI araçlarından maksimum sonuç almak için hazır promptlar.'
      : 'Copy, paste, run. Ready-made prompts to get maximum results from AI tools.',
    free: isTr ? 'Ücretsiz' : 'Free',
    get: isTr ? 'Promptu Al' : 'Get Prompt',
    more: isTr ? 'Yakında Daha Fazlası...' : 'More Coming Soon...',
    moreDesc: isTr
      ? 'Yeni promptlar için bu sayfayı takip edin.'
      : 'Follow this page for new prompts.',
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="inline-block bg-brand/10 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-brand/20">
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
            {prompts.map(p => (
              <div
                key={p.slug}
                className="bg-gray-900 border border-gray-800 hover:border-brand/40 rounded-2xl p-7 transition-all group cursor-pointer"
                onClick={() => navigate(`/prompts/${p.slug}`)}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 border border-brand/20">
                    <Copy className="h-5 w-5 text-brand" />
                  </div>
                  <span className="text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                    {labels.free}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">
                  {isTr ? p.titleTr : p.titleEn}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {isTr ? p.descTr : p.descEn}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{isTr ? p.toolTr : p.toolEn}</span>
                  <button
                    onClick={e => { e.stopPropagation(); navigate(`/prompts/${p.slug}`); }}
                    className="flex items-center gap-1.5 text-brand text-sm font-semibold hover:gap-3 transition-all"
                  >
                    {labels.get} <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Coming soon */}
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

export default PromptsPage;
