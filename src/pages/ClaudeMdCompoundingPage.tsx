import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Download, CheckCircle, Lock, Check, Copy } from 'lucide-react';

const TEMPLATE_NAME = 'CLAUDE.md Compounding Engineering';
const DOWNLOAD_URL = 'PLACEHOLDER_DRIVE_URL';

const ClaudeMdCompoundingPage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const isTr = language === 'tr';

  const keyPhrase = `"Update CLAUDE.md so you don't repeat this."`;

  const starterTemplate = `# Project
[What this project does]

# Rules
- [Your coding style rules]
- [Constraints Claude must follow]

# Gotchas
[Claude writes here after each mistake]

# Context
[Stack, architecture, key decisions]`;

  const labels = {
    badge: isTr ? 'Ücretsiz Claude Code Rehberi' : 'Free Claude Code Guide',
    title: isTr
      ? 'Claude\'ı Hatalarından Öğreten Sistem'
      : 'The System That Makes Claude Learn From Its Mistakes',
    subtitle: isTr
      ? 'CLAUDE.md — Claude Code\'un her oturumda okuduğu hafıza dosyası. Bu cümleyi ekle, dosya kendini geliştirir.'
      : 'CLAUDE.md — the memory file Claude Code reads at the start of every session. Add one sentence, it improves itself.',
    whatIs: isTr ? 'CLAUDE.md nedir?' : 'What is CLAUDE.md?',
    whatIsDesc: isTr
      ? 'Claude Code\'un projenizi başlatırken okuduğu bir metin dosyası. Kuralları, bağlamı ve geçmiş hataları buraya yazarsınız — Claude her oturumda bunları hatırlar.'
      : 'A plain text file Claude Code reads before starting any session. Write your rules, context, and past mistakes here — Claude remembers them every time.',
    keyPhraseLabel: isTr ? 'Tek cümle, büyük fark:' : 'One sentence, big difference:',
    keyPhraseDesc: isTr
      ? 'Her hata düzeltmesinin sonuna bu cümleyi ekle. Claude hatayı Gotchas bölümüne yazar — bir daha yapmaz. 2 haftada 15–30 kural birikir.'
      : 'Add this to the end of every fix. Claude logs the mistake under Gotchas and never repeats it. In 2 weeks you\'ll have 15–30 rules it wrote itself.',
    starterLabel: isTr ? '30 saniyede başlangıç şablonu:' : '30-second starter template:',
    starterDesc: isTr
      ? 'Bu 4 bölümü projenize kopyalayın. Veya Claude Code\'da `/init` yazın — Claude dosyayı sizin için oluşturur.'
      : 'Copy these 4 sections into your project. Or type `/init` in Claude Code — Claude creates the file for you.',
    ritualLabel: isTr ? '14 günlük ritüel:' : '14-day ritual:',
    ritualSteps: isTr ? [
      'Her hata sonrası o cümleyi ekle',
      'Claude Gotchas\'a yazar',
      '14 gün sonra Claude kendi kendine çalışır',
    ] : [
      'After every mistake, add that sentence',
      'Claude logs it under Gotchas',
      '14 days in, Claude runs on autopilot',
    ],
    tool: 'Claude Code',
    formTitle: isTr ? 'Rehberi İndir' : 'Download the Guide',
    formDesc: isTr ? 'Bilgilerinizi girin ve rehberi hemen indirin.' : 'Enter your info and download instantly.',
    firstName: isTr ? 'Ad' : 'First Name',
    lastName: isTr ? 'Soyad' : 'Last Name',
    email: 'Email',
    firstNamePh: isTr ? 'Adınız' : 'Your first name',
    lastNamePh: isTr ? 'Soyadınız' : 'Your last name',
    emailPh: isTr ? 'eposta@ornek.com' : 'email@example.com',
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
    copy: isTr ? 'Kopyala' : 'Copy',
    copied: isTr ? 'Kopyalandı!' : 'Copied!',
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

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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
                placeholder={labels.firstNamePh}
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
                placeholder={labels.lastNamePh}
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
                placeholder={labels.emailPh}
                className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand/50 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand hover:bg-brand-light disabled:opacity-60 text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
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
            className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-light text-white font-bold py-3.5 rounded-lg transition-colors"
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

            {/* Left */}
            <div>
              <span className="inline-block bg-brand/10 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-brand/20">
                {labels.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {labels.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                {labels.subtitle}
              </p>
              <p className="text-gray-500 text-sm mb-10">
                Sevim Durmuş · <span className="text-brand">aiandtech.cloud</span>
              </p>

              {/* What is CLAUDE.md */}
              <h2 className="text-lg font-bold text-white mb-2">{labels.whatIs}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {labels.whatIsDesc}
              </p>

              {/* Key phrase */}
              <h2 className="text-lg font-bold text-white mb-3">{labels.keyPhraseLabel}</h2>
              <div className="bg-gray-900 border border-brand/30 rounded-xl p-4 mb-3 relative">
                <p className="font-mono text-brand font-semibold text-sm leading-relaxed pr-16">
                  {keyPhrase}
                </p>
                <button
                  onClick={() => handleCopy(keyPhrase)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-brand transition-colors flex items-center gap-1 text-xs"
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? labels.copied : labels.copy}
                </button>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-10">
                {labels.keyPhraseDesc}
              </p>

              {/* Starter template */}
              <h2 className="text-lg font-bold text-white mb-2">{labels.starterLabel}</h2>
              <p className="text-gray-400 text-sm mb-3">{labels.starterDesc}</p>
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 mb-10 overflow-x-auto">
                <pre className="font-mono text-xs text-gray-300 whitespace-pre leading-relaxed">
                  {starterTemplate}
                </pre>
              </div>

              {/* 14-day ritual */}
              <h2 className="text-lg font-bold text-white mb-4">{labels.ritualLabel}</h2>
              <div className="space-y-3 mb-8">
                {labels.ritualSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-brand font-bold text-sm w-5 shrink-0 mt-0.5">{i + 1}.</span>
                    <p className="text-gray-300 text-sm">{step}</p>
                  </div>
                ))}
              </div>

              <span className="text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                {labels.tool}
              </span>
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

export default ClaudeMdCompoundingPage;
