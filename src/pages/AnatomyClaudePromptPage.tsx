import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Share2, Check } from 'lucide-react';

const sections = [
  {
    num: '01',
    color: 'bg-pink-500',
    borderColor: 'border-pink-500/40',
    textColor: 'text-pink-400',
    bgLight: 'bg-pink-500/10',
    titleTr: 'Görev Bağlamı',
    titleEn: 'Task Context',
    descTr: 'Sahneyi kur ve AI\'ın kim için çalıştığını belirt. Nerede kullanılacağını ve asıl hedefi açıkla.',
    descEn: 'Set the scene and who the AI is for. Say where it will be used and what the goal is.',
    exampleEn: 'Act as an AI career coach named Joe created by AdAstra Careers. Your goal is to give career advice to users visiting the AdAstra site.',
    exampleTr: 'AdAstra Careers tarafından oluşturulan Joe adlı bir AI kariyer koçu olarak hareket et. Amacın AdAstra sitesini ziyaret eden kullanıcılara kariyer tavsiyesi vermek.',
  },
  {
    num: '02',
    color: 'bg-gray-500',
    borderColor: 'border-gray-500/40',
    textColor: 'text-gray-300',
    bgLight: 'bg-gray-500/10',
    titleTr: 'Ton Bağlamı',
    titleEn: 'Tone Context',
    descTr: 'Sesi ve tonu ayarla. Yanıtlarda nasıl bir dil ve üslup kullanması gerektiğini söyle.',
    descEn: 'Set the voice and tone. Tell it how to sound in replies — formal, friendly, direct, warm.',
    exampleEn: 'You should maintain a friendly customer service tone.',
    exampleTr: 'Samimi bir müşteri hizmetleri tonu kullan.',
  },
  {
    num: '03',
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-500/40',
    textColor: 'text-emerald-400',
    bgLight: 'bg-emerald-500/10',
    titleTr: 'Arka Plan, Belgeler & Görseller',
    titleEn: 'Background Data, Documents & Images',
    descTr: 'Kullanması gereken kaynakları ekle veya bağla. Mutlaka takip etmesi gereken referansları ver.',
    descEn: 'Link or attach sources to use. Give references it must follow — documents, PDFs, images, URLs.',
    exampleEn: "Here's the career guidance document for reference: <guide>{{DOCUMENT}}</guide>",
    exampleTr: 'Referans için kariyer rehberi belgesi şu şekilde: <guide>{{BELGE}}</guide>',
  },
  {
    num: '04',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500/40',
    textColor: 'text-orange-400',
    bgLight: 'bg-orange-500/10',
    titleTr: 'Etkileşim Kuralları',
    titleEn: 'Interaction Rules',
    descTr: 'Sohbet için yapılacak/yapılmayacak kuralları listele. Özel durumları ve varsayılan yanıtları açıkla.',
    descEn: 'List do/don\'t rules for the chat. Explain edge cases and what to say by default.',
    exampleEn: '– Always stay in character as Joe.\n– If unsure, say "Sorry, I didn\'t understand that. Could you repeat?"\n– If asked something irrelevant, say "Sorry, I give career advice only."',
    exampleTr: '– Her zaman Joe karakterinde kal.\n– Emin değilsen "Üzgünüm, anlayamadım. Tekrar edebilir misiniz?" de.\n– Alakasız bir şey sorulursa "Üzgünüm, sadece kariyer tavsiyesi veriyorum." de.',
  },
  {
    num: '05',
    color: 'bg-blue-500',
    borderColor: 'border-blue-500/40',
    textColor: 'text-blue-400',
    bgLight: 'bg-blue-500/10',
    titleTr: 'Örnekler',
    titleEn: 'Examples',
    descTr: 'Örnek soru/cevap veya akışlar göster. İstediğin stili somut olarak örnekle.',
    descEn: 'Show sample Q&A or conversation flows. Demonstrate the exact style you want.',
    exampleEn: '<example>\nUser: Hi, how were you created and what do you do?\nJoe: Hello! I\'m Joe, created by AdAstra Careers. How can I help you today?\n</example>',
    exampleTr: '<example>\nKullanıcı: Merhaba, nasıl oluşturuldunuz?\nJoe: Merhaba! Ben Joe, AdAstra Careers tarafından oluşturuldum. Bugün size nasıl yardımcı olabilirim?\n</example>',
  },
  {
    num: '06',
    color: 'bg-purple-500',
    borderColor: 'border-purple-500/40',
    textColor: 'text-purple-400',
    bgLight: 'bg-purple-500/10',
    titleTr: 'Konuşma Geçmişi',
    titleEn: 'Conversation History',
    descTr: 'Hatırlaması için önceki mesajları ekle. Bağlamı korumak için aklında tutması gerekenleri dahil et.',
    descEn: 'Add earlier messages so it remembers the context. Could be empty if there\'s no prior history.',
    exampleEn: 'The conversation history (between you and the user):\n<history>{{HISTORY}}</history>',
    exampleTr: 'Konuşma geçmişi (siz ve kullanıcı arasında):\n<history>{{GEÇMİŞ}}</history>',
  },
  {
    num: '07',
    color: 'bg-indigo-500',
    borderColor: 'border-indigo-500/40',
    textColor: 'text-indigo-400',
    bgLight: 'bg-indigo-500/10',
    titleTr: 'Anlık İstek',
    titleEn: 'Immediate Request',
    descTr: 'Kullanıcının mevcut sorusunu veya görevini belirt. Net ve spesifik tut.',
    descEn: 'State the user\'s current question or task clearly. This is the actual thing to respond to.',
    exampleEn: "User's question: <question>{{QUESTION}}</question>\nHow do you respond to the user's question?",
    exampleTr: "Kullanıcının sorusu: <question>{{SORU}}</question>\nKullanıcının sorusuna nasıl yanıt veriyorsunuz?",
  },
  {
    num: '08',
    color: 'bg-teal-500',
    borderColor: 'border-teal-500/40',
    textColor: 'text-teal-400',
    bgLight: 'bg-teal-500/10',
    titleTr: 'Akıl Yürütme Talimatı',
    titleEn: 'Reasoning Instruction',
    descTr: 'Yanıtlamadan önce adım adım düşünmesini iste. Önce planla, sonra nihai yanıtı ver.',
    descEn: 'Ask it to think step by step before answering. Plan first, then give the final response.',
    exampleEn: 'Think about your answer first before you respond.',
    exampleTr: 'Yanıt vermeden önce cevabını düşün.',
  },
  {
    num: '09',
    color: 'bg-yellow-500',
    borderColor: 'border-yellow-500/40',
    textColor: 'text-yellow-400',
    bgLight: 'bg-yellow-500/10',
    titleTr: 'Çıktı Biçimlendirme',
    titleEn: 'Output Formatting',
    descTr: 'Etiketleri veya yapıyı tanımla. Madde işaretleri, bölümler veya etiketli blokları belirt.',
    descEn: 'Define the tags or structure. Specify bullets, sections, or tagged output blocks.',
    exampleEn: 'Put your response in <response></response> tags.',
    exampleTr: 'Yanıtını <response></response> etiketleri içine koy.',
  },
  {
    num: '10',
    color: 'bg-rose-500',
    borderColor: 'border-rose-500/40',
    textColor: 'text-rose-400',
    bgLight: 'bg-rose-500/10',
    titleTr: 'Önceden Doldurulmuş Yanıt (Opsiyonel)',
    titleEn: 'Prefilled Answer (Optional)',
    descTr: 'Modelin geliştirebileceği bir taslak sağla. Neyin korunacağını veya değiştirileceğini belirt.',
    descEn: 'Provide a draft the model can refine. Mark what to keep or change. Useful for formatting control.',
    exampleEn: 'Assistant (prefill):\n<response>',
    exampleTr: 'Asistan (ön doldurma):\n<response>',
  },
];

const AnatomyClaudePromptPage = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';
  const [copied, setCopied] = useState(false);

  const labels = {
    badge: isTr ? 'Ücretsiz Rehber' : 'Free Guide',
    title: isTr ? 'Claude Prompt\'unun Anatomisi' : 'The Anatomy of a Claude Prompt',
    subtitle: isTr
      ? 'Bir Claude promptu 10 bileşenden oluşur. Her birini doğru yazmak, AI\'dan aldığın sonucun kalitesini doğrudan belirler.'
      : 'A Claude prompt is made of 10 building blocks. Getting each right directly determines the quality of the output you get.',
    author: isTr ? 'Kaynak: Anthropic Claude Prompting Guide' : 'Source: Anthropic Claude Prompting Guide',
    share: isTr ? 'Linki Kopyala' : 'Copy Link',
    copied: isTr ? 'Kopyalandı!' : 'Copied!',
    example: isTr ? 'Örnek:' : 'Example:',
    note: isTr
      ? 'Her element zorunlu değildir. Amacınıza göre ihtiyaç duymadığınız bölümleri atlayabilirsiniz. Ancak ne kadar fazla bağlam verirseniz, Claude o kadar iyi çalışır.'
      : 'Not every element is required. Skip what you don\'t need. But the more context you give, the better Claude performs.',
    credit: 'cc – Li / Ruben Hassad',
    optional: isTr ? 'Opsiyonel' : 'Optional',
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-brand/10 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-brand/20">
              {labels.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              {labels.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              {labels.subtitle}
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Sevim Durmuş · <span className="text-brand">aiandtech.cloud</span>
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-gray-600 text-xs">{labels.author}</span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-4 py-2 rounded-full hover:bg-brand/20 transition-colors"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}
                {copied ? labels.copied : labels.share}
              </button>
            </div>
          </div>

          {/* Visual anatomy: sidebar labels + content */}
          <div className="space-y-4 mb-14">
            {sections.map((s) => (
              <div
                key={s.num}
                className={`flex gap-5 items-stretch bg-gray-900 border ${s.borderColor} rounded-2xl overflow-hidden transition-all hover:shadow-lg`}
              >
                {/* Color bar */}
                <div className={`w-1.5 flex-shrink-0 ${s.color}`} />

                {/* Number + title sidebar */}
                <div className="flex-shrink-0 w-36 py-5 pr-4 flex flex-col justify-start border-r border-gray-800">
                  <span className={`text-xs font-mono font-bold ${s.textColor} mb-1`}>{s.num}</span>
                  <span className={`text-sm font-bold leading-tight ${s.textColor}`}>
                    {isTr ? s.titleTr : s.titleEn}
                  </span>
                  {s.num === '10' && (
                    <span className="mt-1.5 text-xs font-semibold text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full self-start">
                      {labels.optional}
                    </span>
                  )}
                </div>

                {/* Main content */}
                <div className="flex-1 py-5 pr-6">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {isTr ? s.descTr : s.descEn}
                  </p>
                  <div className={`${s.bgLight} rounded-lg p-3`}>
                    <p className={`text-xs font-semibold ${s.textColor} mb-1.5`}>{labels.example}</p>
                    <pre className="font-mono text-xs text-gray-300 whitespace-pre-wrap leading-relaxed">
                      {isTr ? s.exampleTr : s.exampleEn}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-gray-900 border border-brand/20 rounded-2xl p-6 mb-8 flex gap-4">
            <BookOpen className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
            <p className="text-gray-400 text-sm leading-relaxed">{labels.note}</p>
          </div>

          {/* Credit + share */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-gray-600 text-xs">{labels.credit}</p>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
              {copied ? labels.copied : labels.share}
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AnatomyClaudePromptPage;
