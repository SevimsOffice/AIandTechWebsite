import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Download, CheckCircle, Lock } from 'lucide-react';

const TEMPLATE_NAME = "Founder's Guide to Claude";
const DOWNLOAD_URL = 'PLACEHOLDER_DRIVE_URL';

const chapters = [
  {
    num: '01',
    titleTr: 'Claude\'a Hoş Geldiniz',
    titleEn: 'Welcome to Claude',
    descTr: 'Model seçenekleri (Haiku, Sonnet, Opus), planlar ve ChatGPT\'den farkı.',
    descEn: 'Model lineup (Haiku, Sonnet, Opus), plans, and how it differs from ChatGPT.',
  },
  {
    num: '02',
    titleTr: 'Doğru Kurulum',
    titleEn: 'Set Yourself Up Right',
    descTr: 'Profil, hafıza ayarları ve 15 dakikada iş ortağınıza dönüştüren ilk sohbet.',
    descEn: 'Profile, memory settings, and the first conversation that makes it your partner.',
  },
  {
    num: '03',
    titleTr: 'Claude ile Nasıl Konuşulur',
    titleEn: 'How to Talk to Claude',
    descTr: 'Bağlam, format, uzunluk, hedef kitle ve ton. Vasat ile olağanüstü arasındaki fark.',
    descEn: 'Context, format, length, audience, and tone. The gap between mediocre and extraordinary.',
  },
  {
    num: '04',
    titleTr: 'Araç Kutusu',
    titleEn: 'What\'s In the Toolbox',
    descTr: 'Web arama, dosya oluşturma, araştırma modu, görüntü analizi, Google Workspace.',
    descEn: 'Web search, file creation, research mode, image understanding, Google Workspace.',
  },
  {
    num: '05',
    titleTr: 'Projects — Gizli Silahınız',
    titleEn: 'Projects — Your Secret Weapon',
    descTr: 'İçerik, müşteri, strateji ve satış için ayrı çalışma alanları. Kurulumu adım adım.',
    descEn: 'Dedicated workspaces for content, clients, strategy, sales. Step-by-step setup.',
  },
  {
    num: '06',
    titleTr: 'Claude\'un Yapamadıkları',
    titleEn: 'What Claude Can\'t Do',
    descTr: 'Hataları anlama, bilgi kesim tarihi, hafıza sınırları ve doğrulama gereken durumlar.',
    descEn: 'Understanding errors, knowledge cutoff, memory limits, and when to verify.',
  },
  {
    num: '07',
    titleTr: 'Her Şeyi Değiştiren 12 İfade',
    titleEn: '12 Phrases That Change Everything',
    descTr: 'Claude\'un en iyi çalışmasını açığa çıkaran güçlü komutlar — kopyala ve kullan.',
    descEn: 'The power phrases that unlock Claude\'s best work — copy and use immediately.',
  },
  {
    num: '08',
    titleTr: 'Bir Üst Seviyeye Geç',
    titleEn: 'Level Up — Go Pro',
    descTr: 'Claude Cowork, Skills, Code ve MCP entegrasyonları. İşinizi bunun üzerine kurun.',
    descEn: 'Claude Cowork, Skills, Code, and MCP integrations. Build your business on it.',
  },
];

const FoundersGuidePage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Rehber' : 'Free Guide',
    title: isTr ? "Kurucunun Claude Rehberi" : "The Founder's Guide to Claude",
    subtitle: isTr
      ? 'Modeller, kurulum, prompting, araçlar ve her şeyi tıklatan ifadeler.'
      : 'Models, setup, prompting, tools, and the phrases that make it all click.',
    chapters: '8',
    chaptersLabel: isTr ? 'bölüm' : 'chapters',
    phrases: '12',
    phrasesLabel: isTr ? 'güçlü ifade' : 'power phrases',
    tools: '6',
    toolsLabel: isTr ? 'araç' : 'tools',
    problem: isTr
      ? 'Öğrenme eğrisini atlayın.'
      : 'Skip the learning curve.',
    problemDesc: isTr
      ? 'Çoğu kurucu Claude\'u yanlış kullanıyor: tek seferlik sorular soruyor, kurulum yapmıyor ve araçların yarısından haberdar bile değil. Bu rehber, ilk günden doğru yapmak için yazıldı.'
      : 'Most founders misuse Claude: asking one-off questions, skipping setup, and unaware of half the tools. This guide was written to get it right from day one.',
    solution: isTr ? 'Claude\'u gerçekten kullanmayı öğrenin' : 'Learn to actually use Claude',
    solutionDesc: isTr
      ? 'Modelden kuruluma, prompting\'den advanced özelliklere kadar her şey bir arada. Kurucular için, kurucular tarafından yazıldı.'
      : 'From model selection to setup, prompting to advanced features — everything in one place. Written for founders, by a founder.',
    inside: isTr ? "Rehberin İçinde Ne Var?" : "What's Inside?",
    insideDesc: isTr
      ? '8 bölüm, 12 güçlü ifade ve işinizi Claude üzerine inşa etmek için ihtiyacınız olan her şey.'
      : '8 chapters, 12 power phrases, and everything you need to build your business on Claude.',
    formTitle: isTr ? 'Ücretsiz İndir' : 'Download Free',
    formDesc: isTr ? 'Bilgilerinizi girin, PDF\'i hemen alın.' : 'Enter your info and get the PDF instantly.',
    firstName: isTr ? 'Ad' : 'First Name',
    lastName: isTr ? 'Soyad' : 'Last Name',
    email: 'Email',
    firstNamePlaceholder: isTr ? 'Adınız' : 'Your first name',
    lastNamePlaceholder: isTr ? 'Soyadınız' : 'Your last name',
    emailPlaceholder: isTr ? 'eposta@ornek.com' : 'email@example.com',
    submit: isTr ? 'Ücretsiz İndir' : 'Download Free',
    submitting: isTr ? 'Hazırlanıyor...' : 'Preparing...',
    required: isTr ? 'Bu alan zorunludur.' : 'This field is required.',
    emailInvalid: isTr ? 'Geçerli bir e-posta girin.' : 'Please enter a valid email.',
    successTitle: isTr ? 'Rehberiniz Hazır!' : 'Your Guide is Ready!',
    successDesc: isTr
      ? 'Aşağıdaki butona tıklayarak PDF\'i indirin.'
      : 'Click the button below to download your PDF.',
    downloadBtn: isTr ? 'PDF\'i İndir' : 'Download PDF',
    privacy: isTr
      ? 'Bilgileriniz yalnızca bu indirme için kullanılır, asla paylaşılmaz.'
      : 'Your info is only used for this download and will never be shared.',
    quote: isTr
      ? '"Claude çıktısının kalitesi, girdinin kalitesiyle doğru orantılıdır."'
      : '"The quality of Claude\'s output is directly proportional to the quality of your input."',
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = labels.required;
    if (!form.lastName.trim()) e.lastName = labels.required;
    if (!form.email.trim()) {
      e.email = labels.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = labels.emailInvalid;
    }
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await submitToSheets({
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      templateName: TEMPLATE_NAME,
    });
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const downloadForm = (
    <div className="bg-gray-900 border border-brand/30 rounded-2xl p-8 md:p-10">
      {!submitted ? (
        <>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand/10 border border-brand/30 mb-4">
              <Download className="h-6 w-6 text-brand" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{labels.formTitle}</h2>
            <p className="text-gray-400 text-sm">{labels.formDesc}</p>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-7">
            {[
              { num: labels.chapters, label: labels.chaptersLabel },
              { num: labels.phrases, label: labels.phrasesLabel },
              { num: labels.tools, label: labels.toolsLabel },
            ].map(s => (
              <div key={s.label} className="bg-gray-800 rounded-xl p-3 text-center">
                <div className="text-2xl font-black text-brand">{s.num}</div>
                <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                {labels.firstName} <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={e => handleChange('firstName', e.target.value)}
                placeholder={labels.firstNamePlaceholder}
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-colors ${errors.firstName ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                {labels.lastName} <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={e => handleChange('lastName', e.target.value)}
                placeholder={labels.lastNamePlaceholder}
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-colors ${errors.lastName ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                {labels.email} <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => handleChange('email', e.target.value)}
                placeholder={labels.emailPlaceholder}
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand hover:bg-brand-light disabled:opacity-60 text-gray-950 font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                  </svg>
                  {labels.submitting}
                </>
              ) : (
                <><Download className="h-4 w-4" />{labels.submit}</>
              )}
            </button>
            <p className="text-gray-500 text-xs text-center flex items-center justify-center gap-1.5">
              <Lock className="h-3 w-3" />
              {labels.privacy}
            </p>
          </form>
        </>
      ) : (
        <div className="text-center py-4">
          <CheckCircle className="h-16 w-16 text-brand mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">{labels.successTitle}</h2>
          <p className="text-gray-400 mb-8">{labels.successDesc}</p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-gray-950 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            <Download className="h-5 w-5" />
            {labels.downloadBtn}
          </a>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <span className="inline-block bg-brand/10 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-brand/20">
                {labels.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {labels.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {labels.subtitle}
              </p>
              <p className="text-gray-500 text-sm mb-8">
                Sevim Durmuş · <span className="text-brand">aiandtech.cloud</span>
              </p>

              {/* Quote */}
              <div className="border-l-4 border-brand pl-4 mb-6">
                <p className="text-gray-300 italic text-base leading-relaxed">{labels.quote}</p>
              </div>

              {/* Problem / Solution */}
              <div className="space-y-4">
                <div className="bg-gray-900 border border-red-900/40 rounded-xl p-5 flex gap-4">
                  <span className="text-xl shrink-0">❌</span>
                  <div>
                    <p className="font-semibold text-red-400 mb-1">{labels.problem}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{labels.problemDesc}</p>
                  </div>
                </div>
                <div className="bg-gray-900 border border-brand/30 rounded-xl p-5 flex gap-4">
                  <span className="text-xl shrink-0">✅</span>
                  <div>
                    <p className="font-semibold text-brand mb-1">{labels.solution}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{labels.solutionDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:sticky lg:top-28">
              {downloadForm}
            </div>
          </div>
        </div>
      </section>

      {/* 8 Chapters */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-3">{labels.inside}</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">{labels.insideDesc}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {chapters.map(c => (
              <div
                key={c.num}
                className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-brand/40 transition-colors"
              >
                <span className="text-brand font-bold text-lg w-8 shrink-0">{c.num}</span>
                <div>
                  <div className="font-semibold text-white mb-1">{isTr ? c.titleTr : c.titleEn}</div>
                  <div className="text-gray-400 text-sm">{isTr ? c.descTr : c.descEn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundersGuidePage;
