import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Download, CheckCircle, Lock, Check } from 'lucide-react';

const TEMPLATE_NAME = 'The /goal Operator Pack';
const DOWNLOAD_URL = 'https://drive.google.com/file/d/1r1920_XmkSdghUWSztpZPIMuVs4eGtSi/view?usp=sharing';

const sections = [
  {
    num: '01',
    titleTr: 'Nedir /goal?',
    titleEn: 'What /goal Actually Does',
    descTr: 'Claude Code\'un otonom hedef sisteminin nasıl çalıştığını ve ne zaman kullanılacağını öğrenin.',
    descEn: 'Learn how Claude Code\'s autonomous goal system works and when to use it.',
  },
  {
    num: '02',
    titleTr: 'Koşul Oluşturucu Prompt',
    titleEn: 'The Condition Builder Prompt',
    descTr: 'Claude\'un sizin için doğrulanabilir koşullar yazmasını sağlayan kesin prompt.',
    descEn: 'The exact prompt that makes Claude write verifiable conditions for you.',
  },
  {
    num: '03',
    titleTr: 'Sürükleme Kontrol Noktası',
    titleEn: 'Drift Checkpoint Pattern',
    descTr: 'Uzun çalıştırmaların %90\'ını engelleyen yeniden çıpalama tekniği.',
    descEn: 'The re-anchor technique that stops 90% of long-run failures.',
  },
  {
    num: '04',
    titleTr: '5 Hazır Şablon',
    titleEn: '5 Ready-to-Paste Templates',
    descTr: 'Test migrasyonu, issue backlog, modül bölme, belge ekleme, bağımlılık güncellemesi.',
    descEn: 'Test migration, issue backlog, module split, doc backfill, dependency upgrade.',
  },
  {
    num: '05',
    titleTr: '8 Saatlik Çalıştırma Kanıtı',
    titleEn: 'Real 8-Hour Run Results',
    descTr: '47 commit, tüm testler geçti, sıfır production kodu değişti — gerçek sonuçlar.',
    descEn: '47 commits, all tests passing, zero production code touched — real receipts.',
  },
];

const GoalOperatorPackPage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Kurulum Rehberi' : 'Free Setup Guide',
    title: isTr
      ? 'Claude Code /goal\'ü Bu Gece Çalıştırın'
      : 'Run Your First Autonomous /goal Tonight',
    subtitle: isTr
      ? 'Koşul oluşturucu prompt, sürüklemeyi önleyen kontrol noktası ve 5 yapıştırmaya hazır şablon — Claude Code\'un en güçlü özelliğini kullanmak için ihtiyacınız olan her şey.'
      : 'The condition-builder prompt, the drift-stopping checkpoint, and 5 ready-to-paste templates — everything you need to use Claude Code\'s most powerful feature.',
    what: isTr ? 'Rehberde Neler Var?' : 'What\'s in the Guide?',
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
    tool: isTr ? 'Araç: Claude Code 2.1.139+' : 'Tool: Claude Code 2.1.139+',
    stat1: isTr ? 'Şablon' : 'Templates',
    stat2: isTr ? 'Bölüm' : 'Sections',
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
    <div className="bg-gray-900 border border-cyan-400/30 rounded-2xl p-8 md:p-10">
      {!submitted ? (
        <>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/30 mb-4">
              <Download className="h-6 w-6 text-cyan-400" />
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
          <CheckCircle className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">{labels.successTitle}</h2>
          <p className="text-gray-400 text-sm mb-6">{labels.successDesc}</p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-bold py-3.5 rounded-lg transition-colors"
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

              <div className="flex gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-cyan-400">5</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{labels.stat1}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-cyan-400">10</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{labels.stat2}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-cyan-400">8h</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{isTr ? 'Kanıtlanmış Çalıştırma' : 'Proven Run'}</div>
                </div>
              </div>

              <div className="bg-gray-900 border border-cyan-400/30 rounded-xl p-5 mb-6">
                <p className="font-semibold text-cyan-400 mb-4">{labels.what}</p>
                <div className="space-y-4">
                  {sections.map(s => (
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

              <p className="text-gray-500 text-sm">{labels.tool}</p>
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

export default GoalOperatorPackPage;
