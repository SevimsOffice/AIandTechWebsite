import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Copy, Check } from 'lucide-react';

const mainPrompts = [
  {
    num: '01',
    categoryTr: 'Project Kurulumu',
    categoryEn: 'Project Setup',
    titleTr: 'Kişisel AI Asistanını Kur',
    titleEn: 'Set Up Your Personal AI Assistant',
    noteTr: 'Claude Projects → Custom Instructions olarak ekle. Her yeni sohbet şirketini ve rolünü bilir.',
    noteEn: 'Add as Custom Instructions in Claude Projects. Every new chat knows your company and role.',
    promptTr: `Sen benim kişisel iş asistanımsın.
Şirket adım [ŞİRKET ADI], rolüm [UNVAN].
Türkçe yanıt ver, profesyonel ve net ol.`,
    promptEn: `You are my personal work assistant.
My company is [COMPANY NAME], my role is [TITLE].
Reply in English, be professional and concise.`,
  },
  {
    num: '02',
    categoryTr: 'Gmail Connector',
    categoryEn: 'Gmail Connector',
    titleTr: 'E-postaları Özetle ve Önceliklendir',
    titleEn: 'Summarize & Prioritize Emails',
    noteTr: 'Gmail Connector bağlıyken kullan → Sidebar → Customize → Connectors → Gmail.',
    noteEn: 'Use with Gmail Connector → Sidebar → Customize → Connectors → Gmail.',
    promptTr: `Bu haftaki e-postalarımı özetle.
Acil olanları, bekleyen yanıtları ve önemli konuları grupla.`,
    promptEn: `Summarize this week's emails.
Group urgent items, pending replies, and important topics separately.`,
  },
  {
    num: '03',
    categoryTr: 'Günlük Kullanım',
    categoryEn: 'Daily Use',
    titleTr: 'Toplantı Notlarını Yönetici Özetine Çevir',
    titleEn: 'Convert Meeting Notes to Executive Summary',
    noteTr: '[TOPLANTI NOTLARI] yerine notlarını yapıştır. Çıktı: başlık, kararlar, aksiyonlar, sorumlular.',
    noteEn: 'Paste your notes in place of [MEETING NOTES]. Output: title, decisions, actions, owners.',
    promptTr: `Bu toplantı notlarımı yönetici özeti formatına çevir:
başlık, kararlar, aksiyonlar, sorumlular.

[TOPLANTI NOTLARI BURAYA YAPIŞTIR]`,
    promptEn: `Convert these meeting notes to executive summary format:
title, decisions, action items, owners.

[PASTE MEETING NOTES HERE]`,
  },
  {
    num: '04',
    categoryTr: 'Analiz Görevi',
    categoryEn: 'Analysis Task',
    titleTr: 'Veriyi Analiz Et, Öneri Üret',
    titleEn: 'Analyze Data, Generate Recommendations',
    noteTr: '[VERİ] yerine tablonu, listeyi veya sayıları yapıştır. Sonunda yönetici özeti alırsın.',
    noteEn: 'Paste your table, list, or numbers in place of [DATA]. You get an executive summary at the end.',
    promptTr: `Bu veriyi analiz et.
Trend, anomali ve önerileri madde madde yaz.
Sonunda yönetici özeti ekle.

[VERİ BURAYA YAPIŞTIR]`,
    promptEn: `Analyze this data.
List trends, anomalies, and recommendations in bullets.
Add an executive summary at the end.

[PASTE DATA HERE]`,
  },
  {
    num: '05',
    categoryTr: 'Karar Desteği',
    categoryEn: 'Decision Support',
    titleTr: '3 Açıdan Değerlendir',
    titleEn: 'Evaluate From 3 Angles',
    noteTr: '[KONU] yerine karar vermek istediğin konuyu yaz. Çıktı: karşılaştırmalı tablo.',
    noteEn: 'Replace [TOPIC] with the decision you need to evaluate. Output: comparison table.',
    promptTr: `Bu konuyu 3 farklı açıdan değerlendir.
Her seçeneğin artılarını ve eksilerini tabloya koy.

Konu: [KONU]`,
    promptEn: `Evaluate this topic from 3 different angles.
Put the pros and cons of each option in a table.

Topic: [TOPIC]`,
  },
];

const bonusPrompts = [
  {
    titleTr: 'E-posta Yanıtla',
    titleEn: 'Reply to Email',
    promptTr: `Bu maile profesyonel ve kısa bir yanıt yaz.

[MAİL METNİ BURAYA YAPIŞTIR]`,
    promptEn: `Write a professional, concise reply to this email.

[PASTE EMAIL TEXT HERE]`,
  },
  {
    titleTr: 'Haftalık Öncelikler',
    titleEn: 'Weekly Priorities',
    promptTr: `Haftanın önceliklerini listele.
En kritik 3 görevi, bu haftaki hedefi ve ertelenebilecek işleri ayrı yaz.`,
    promptEn: `List this week's priorities.
Separate: top 3 critical tasks, the week's main goal, and items that can be deferred.`,
  },
  {
    titleTr: 'Skill Oluştur',
    titleEn: 'Create a Skill',
    promptTr: `Bu görevi bir skill'e çevir.
Adım adım talimat, input formatı ve beklenen çıktıyı belirt.

Görev: [GÖREV AÇIKLAMASI]`,
    promptEn: `Convert this task into a reusable skill.
Define step-by-step instructions, input format, and expected output.

Task: [TASK DESCRIPTION]`,
  },
];

const WebinarPromptsPage = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const labels = {
    badge: isTr ? 'Eğitim Prompt Rehberi' : 'Training Prompt Guide',
    title: isTr ? 'Profesyoneller için Claude' : 'Claude for Professionals',
    subtitle: isTr
      ? 'Eğitimde kullandığımız 5 temel prompt. Kopyala, Claude\'a yapıştır, dene.'
      : '5 core prompts from the training. Copy, paste into Claude, try it.',
    placeholderNote: isTr
      ? '[köşeli parantez içindeki] ifadeler değişkendir — kendi bilginizle değiştirin.'
      : 'Items in [brackets] are variables — replace them with your own content.',
    copy: isTr ? 'Kopyala' : 'Copy',
    copied: isTr ? 'Kopyalandı!' : 'Copied!',
    bonusTitle: isTr ? 'Ek Promptlar' : 'Bonus Prompts',
    bonusSubtitle: isTr
      ? 'Günlük işlerde işe yarayan kısa promptlar.'
      : 'Short prompts that work for everyday tasks.',
    author: 'Sevim Durmuş · aiandtech.cloud',
    howTitle: isTr ? 'Nasıl kullanılır?' : 'How to use?',
    howSteps: isTr
      ? [
          'Promptu kopyala',
          '[köşeli parantez] alanlarını kendi bilginle doldur',
          'Claude\'a yapıştır ve gönder',
        ]
      : [
          'Copy the prompt',
          'Fill in [bracket] fields with your own info',
          'Paste into Claude and send',
        ],
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-brand/10 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-brand/20">
              {labels.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              {labels.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
              {labels.subtitle}
            </p>
            <p className="text-gray-500 text-sm">{labels.author}</p>
          </div>

          {/* How to use */}
          <div className="bg-gray-900 border border-brand/20 rounded-2xl p-6 mb-10">
            <p className="text-brand text-sm font-semibold mb-3">{labels.howTitle}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              {labels.howSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-2 flex-1">
                  <span className="w-5 h-5 rounded-full bg-brand/20 text-brand text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-gray-300 text-sm">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4 border-t border-gray-800 pt-4">
              {labels.placeholderNote}
            </p>
          </div>

          {/* Main prompts */}
          <div className="space-y-6 mb-14">
            {mainPrompts.map((p) => {
              const promptText = isTr ? p.promptTr : p.promptEn;
              const copyKey = `main-${p.num}`;
              return (
                <div key={p.num} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                  {/* Header row */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded">
                        {p.num}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {isTr ? p.categoryTr : p.categoryEn}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(promptText, copyKey)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1.5 rounded-lg hover:bg-brand/20 transition-colors"
                    >
                      {copied === copyKey
                        ? <><Check className="h-3.5 w-3.5" />{labels.copied}</>
                        : <><Copy className="h-3.5 w-3.5" />{labels.copy}</>
                      }
                    </button>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-5">
                    <h2 className="text-lg font-bold text-white mb-2">
                      {isTr ? p.titleTr : p.titleEn}
                    </h2>
                    <p className="text-gray-500 text-xs mb-4">
                      {isTr ? p.noteTr : p.noteEn}
                    </p>
                    <pre className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 font-mono text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">
                      {promptText}
                    </pre>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bonus prompts */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white mb-1">{labels.bonusTitle}</h2>
            <p className="text-gray-500 text-sm mb-6">{labels.bonusSubtitle}</p>
            <div className="space-y-4">
              {bonusPrompts.map((b, idx) => {
                const promptText = isTr ? b.promptTr : b.promptEn;
                const copyKey = `bonus-${idx}`;
                return (
                  <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800">
                      <span className="text-sm font-semibold text-gray-300">
                        {isTr ? b.titleTr : b.titleEn}
                      </span>
                      <button
                        onClick={() => handleCopy(promptText, copyKey)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1.5 rounded-lg hover:bg-brand/20 transition-colors"
                      >
                        {copied === copyKey
                          ? <><Check className="h-3.5 w-3.5" />{labels.copied}</>
                          : <><Copy className="h-3.5 w-3.5" />{labels.copy}</>
                        }
                      </button>
                    </div>
                    <div className="px-5 py-4">
                      <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                        {promptText}
                      </pre>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default WebinarPromptsPage;
