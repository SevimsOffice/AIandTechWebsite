import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Copy, CheckCircle, Lock, Check } from 'lucide-react';

const TEMPLATE_NAME = 'Manus Instagram Strategy Prompt';

const MANUS_PROMPT = `Analyze my profile (insert profile link) and create a growth strategy for my Instagram account so that I can grow to (insert desired number, e.g. 100k followers) within a year. Include a SWOT analysis, and based on it, identify key growth opportunities. Conduct an in-depth analysis of my niche and competitors, and define my target audience (including a detailed profile: demographics, psychographics, as well as their pain points and interests).
Enhance the audit with recommendations for Highlights, an analysis of profile mistakes, and a sales strategy through the account.
Based on this information, develop a strategy with a step-by-step growth plan, including a plan for boosting my performance and views. Additionally, create scripts for Reels, carousel posts, hooks, and calls to action tailored specifically to my audience.
Combine all the information and create a project presentation of at least 12 slides.`;

const steps = [
  {
    num: '01',
    titleTr: 'Manus.im\'e Git',
    titleEn: 'Go to Manus.im',
    descTr: 'Tarayıcınızda manus.im adresini açın.',
    descEn: 'Open manus.im in your browser.',
  },
  {
    num: '02',
    titleTr: 'Ücretsiz Kayıt Ol',
    titleEn: 'Sign Up for Free',
    descTr: 'E-posta veya başka bir yöntemle ücretsiz kayıt olun. Kayıt sonrası 1.000 kredi + her gün 300 kredi alırsınız.',
    descEn: 'Sign up free via email or any other method. You\'ll receive 1,000 credits + 300 every day upon registration.',
  },
  {
    num: '03',
    titleTr: 'Hesabınızı Bağlayın',
    titleEn: 'Connect Your Account',
    descTr: 'Instagram hesabınızı bağlayın. Beta sürümünde bağlantı sorunu yaşarsanız sadece Instagram profil linkinizi ekleyin.',
    descEn: 'Connect your Instagram account. If you can\'t connect in beta, simply paste your Instagram profile link.',
  },
  {
    num: '04',
    titleTr: 'Promptu Yapıştırın',
    titleEn: 'Paste the Prompt',
    descTr: 'Aşağıdaki promptu kopyalayın, iki placeholder\'ı kendi bilgilerinizle doldurun ve Manus\'a gönderin.',
    descEn: 'Copy the prompt below, fill in the two placeholders with your own info, and send it to Manus.',
  },
];

const ManusInstagramPage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Prompt' : 'Free Prompt',
    title: isTr
      ? 'Manus.im ile Kişisel Instagram Stratejisi Al'
      : 'Get a Personalised Instagram Strategy with Manus.im',
    subtitle: isTr
      ? 'Yeni nesil otonom AI ajanı Manus\'a profilinizi analiz ettirin, rakip araştırması yaptırın ve 12 slaytlık büyüme stratejisi oluşturun.'
      : 'Let Manus — the new autonomous AI agent — analyze your profile, research competitors, and build a 12-slide growth strategy tailored to you.',
    what: isTr ? 'Ne Alacaksınız?' : 'What You\'ll Get',
    whatDesc: isTr
      ? 'Manus bu prompt ile hesabınız için SWOT analizi, rakip analizi, hedef kitle profili, büyüme planı, Reel senaryoları ve 12 slaytlık sunum hazırlar.'
      : 'With this prompt, Manus produces a SWOT analysis, competitor research, audience profile, growth plan, Reel scripts, and a 12-slide presentation — all for your specific account.',
    steps: isTr ? 'Nasıl Kullanılır?' : 'How to Use It',
    formTitle: isTr ? 'Promptu Al' : 'Get the Prompt',
    formDesc: isTr ? 'Bilgilerinizi girin, promptu hemen görün.' : 'Enter your info and see the prompt instantly.',
    firstName: isTr ? 'Ad' : 'First Name',
    lastName: isTr ? 'Soyad' : 'Last Name',
    email: 'Email',
    firstNamePlaceholder: isTr ? 'Adınız' : 'Your first name',
    lastNamePlaceholder: isTr ? 'Soyadınız' : 'Your last name',
    emailPlaceholder: isTr ? 'eposta@ornek.com' : 'email@example.com',
    submit: isTr ? 'Promptu Göster' : 'Show the Prompt',
    submitting: isTr ? 'Hazırlanıyor...' : 'Preparing...',
    required: isTr ? 'Bu alan zorunludur.' : 'This field is required.',
    emailInvalid: isTr ? 'Geçerli bir e-posta girin.' : 'Please enter a valid email.',
    privacy: isTr
      ? 'Bilgileriniz yalnızca bu indirme için kullanılır, asla paylaşılmaz.'
      : 'Your info is only used for this download and will never be shared.',
    promptTitle: isTr ? 'Promptunuz Hazır!' : 'Your Prompt is Ready!',
    promptDesc: isTr
      ? 'Aşağıdaki promptu kopyalayın. Parantez içindeki yerleri kendi bilgilerinizle doldurun, ardından Manus.im\'e yapıştırın.'
      : 'Copy the prompt below. Fill in the bracketed placeholders with your own info, then paste it into Manus.im.',
    copyBtn: isTr ? 'Promptu Kopyala' : 'Copy Prompt',
    copied: isTr ? 'Kopyalandı!' : 'Copied!',
    placeholder1: isTr ? '(profil linkinizi ekleyin)' : '(insert profile link)',
    placeholder2: isTr ? '(hedef takipçi sayısı, ör. 100k)' : '(insert desired number, e.g. 100k followers)',
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

  const handleCopy = () => {
    navigator.clipboard.writeText(MANUS_PROMPT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const formBox = (
    <div className="bg-gray-900 border border-cyan-400/30 rounded-2xl p-8 md:p-10">
      {!submitted ? (
        <>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/30 mb-4">
              <Copy className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{labels.formTitle}</h2>
            <p className="text-gray-400 text-sm">{labels.formDesc}</p>
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
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors ${errors.firstName ? 'border-red-500' : 'border-gray-700'}`}
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
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors ${errors.lastName ? 'border-red-500' : 'border-gray-700'}`}
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
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-400 hover:bg-cyan-300 disabled:opacity-60 text-gray-950 font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
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
                <><Copy className="h-4 w-4" />{labels.submit}</>
              )}
            </button>
            <p className="text-gray-500 text-xs text-center flex items-center justify-center gap-1.5">
              <Lock className="h-3 w-3" />
              {labels.privacy}
            </p>
          </form>
        </>
      ) : (
        <div>
          <div className="text-center mb-6">
            <CheckCircle className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-2">{labels.promptTitle}</h2>
            <p className="text-gray-400 text-sm">{labels.promptDesc}</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 mb-4 relative">
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap font-mono">
              {MANUS_PROMPT}
            </p>
          </div>
          <button
            onClick={handleCopy}
            className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-lg transition-all ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-cyan-400 hover:bg-cyan-300 text-gray-950'
            }`}
          >
            {copied ? (
              <><Check className="h-4 w-4" />{labels.copied}</>
            ) : (
              <><Copy className="h-4 w-4" />{labels.copyBtn}</>
            )}
          </button>
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
              <span className="inline-block bg-cyan-400/10 text-cyan-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-cyan-400/20">
                {labels.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {labels.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {labels.subtitle}
              </p>
              <p className="text-gray-500 text-sm mb-8">
                Sevim Durmuş · <span className="text-cyan-400">aiandtech.cloud</span>
              </p>

              {/* What you'll get */}
              <div className="bg-gray-900 border border-cyan-400/30 rounded-xl p-5 mb-8">
                <p className="font-semibold text-cyan-400 mb-2">{labels.what}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{labels.whatDesc}</p>
              </div>

              {/* Steps */}
              <h2 className="text-xl font-bold mb-5">{labels.steps}</h2>
              <div className="space-y-4">
                {steps.map(s => (
                  <div key={s.num} className="flex gap-4 items-start">
                    <span className="text-cyan-400 font-bold text-lg w-8 shrink-0">{s.num}</span>
                    <div>
                      <div className="font-semibold text-white mb-0.5">{isTr ? s.titleTr : s.titleEn}</div>
                      <div className="text-gray-400 text-sm">{isTr ? s.descTr : s.descEn}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:sticky lg:top-28">
              {formBox}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManusInstagramPage;
