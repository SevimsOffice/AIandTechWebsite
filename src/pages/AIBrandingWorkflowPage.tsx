import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Download, CheckCircle, Lock, Check } from 'lucide-react';

const TEMPLATE_NAME = 'Full AI Branding Workflow';
const DOWNLOAD_URL = 'https://drive.google.com/file/d/1pXFmL7f7IAJ2DJCVEM3WHJ-K86idL7ux/view?usp=sharing';

const steps = [
  {
    num: '01',
    titleTr: 'Marka Kimliği Oluşturun',
    titleEn: 'Generate Brand Identity',
    descTr: '20 ayrı markalı görsel: logo varyasyonları, paket tasarımı, sosyal medya postları, mockuplar.',
    descEn: '20 separate branded visuals: logo variations, packaging, social posts, mockups.',
    tool: 'ChatGPT',
  },
  {
    num: '02',
    titleTr: 'Sosyal Medya Postları Oluşturun',
    titleEn: 'Generate Social Media Posts',
    descTr: 'Logonuzu marka kimliği olarak kullanarak premium sosyal medya tasarımları oluşturun.',
    descEn: 'Create premium social media designs using your logo as the primary brand identity.',
    tool: 'ChatGPT',
  },
  {
    num: '03',
    titleTr: 'Video Reklam Oluşturun',
    titleEn: 'Generate Video Ad',
    descTr: 'Seedance 2.0 ve CapCut ile 15 saniyelik sinematik reklam filmi oluşturun.',
    descEn: 'Create a cinematic 15-second advertisement with Seedance 2.0 and CapCut.',
    tool: 'CapCut + Seedance 2.0',
  },
];

const AIBrandingWorkflowPage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz İş Akışı Rehberi' : 'Free Workflow Guide',
    title: isTr
      ? 'Sadece Bir Logo ile Tam AI Marka Kimliği Oluşturun'
      : 'Create a Full Brand Identity with Just a Logo',
    subtitle: isTr
      ? 'CapCut AI, ChatGPT ve Seedance 2.0 ile premium marka görselleri, sosyal medya tasarımları ve sinematik reklam filmi oluşturmak için kullandığım tam iş akışı.'
      : 'The exact workflow I used to create premium brand visuals, social media creatives, and a cinematic ad — from just a logo — using ChatGPT, CapCut, and Seedance 2.0.',
    what: isTr ? 'Bu Rehberle Neler Yapabilirsiniz?' : 'What You Can Do With This Guide',
    whatDesc: isTr
      ? 'Tek bir logonuzdan başlayarak 20 markalı görsel, sosyal medya postları ve 15 saniyelik reklam filmi oluşturun. Tüm promptlar hazır — yapıştırın ve çalıştırın.'
      : 'Starting from a single logo, create 20 branded visuals, social media posts, and a 15-second ad. All prompts ready — paste and run.',
    formTitle: isTr ? 'Rehberi İndir' : 'Download the Guide',
    formDesc: isTr ? 'Bilgilerinizi girin ve rehberi hemen indirin.' : 'Enter your info and download instantly.',
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
    privacy: isTr
      ? 'Bilgileriniz yalnızca bu indirme için kullanılır, asla paylaşılmaz.'
      : 'Your info is only used for this download and will never be shared.',
    successTitle: isTr ? 'İndirilmeye Hazır!' : 'Ready to Download!',
    successDesc: isTr
      ? 'Aşağıdaki butona tıklayarak rehberinizi indirin.'
      : 'Click the button below to download your guide.',
    downloadBtn: isTr ? 'PDF\'i İndir' : 'Download PDF',
    steps: isTr ? 'İş Akışının 3 Adımı' : '3 Steps of the Workflow',
    tools: isTr ? 'Kullanılan Araçlar' : 'Tools Used',
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

  const formBox = (
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
        <div className="text-center">
          <CheckCircle className="h-12 w-12 text-brand mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">{labels.successTitle}</h2>
          <p className="text-gray-400 text-sm mb-6">{labels.successDesc}</p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-light text-gray-950 font-bold py-3.5 rounded-lg transition-colors"
          >
            <Check className="h-4 w-4" />
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

              <div className="bg-gray-900 border border-brand/30 rounded-xl p-5 mb-6">
                <p className="font-semibold text-brand mb-2">{labels.what}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{labels.whatDesc}</p>
              </div>

              <h2 className="text-xl font-bold mb-5">{labels.steps}</h2>
              <div className="space-y-4 mb-8">
                {steps.map(s => (
                  <div key={s.num} className="flex gap-4 items-start">
                    <span className="text-brand font-bold text-lg w-8 shrink-0">{s.num}</span>
                    <div>
                      <div className="font-semibold text-white mb-0.5">{isTr ? s.titleTr : s.titleEn}</div>
                      <div className="text-gray-400 text-sm mb-1">{isTr ? s.descTr : s.descEn}</div>
                      <span className="text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded-full">
                        {s.tool}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-gray-500 text-sm font-medium mb-2">{labels.tools}</p>
                <div className="flex flex-wrap gap-2">
                  {['ChatGPT', 'CapCut AI', 'Seedance 2.0'].map(t => (
                    <span key={t} className="text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              {formBox}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBrandingWorkflowPage;
