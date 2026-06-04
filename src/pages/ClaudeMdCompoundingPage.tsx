import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Download, CheckCircle, Lock, Check } from 'lucide-react';

const TEMPLATE_NAME = 'CLAUDE.md Compounding Engineering';
const DOWNLOAD_URL = 'PLACEHOLDER_DRIVE_URL';

const levels = [
  {
    badge: 'Başlangıç · Beginner',
    badgeColor: 'bg-green-400/10 text-green-400 border-green-400/20',
    titleTr: '/init komutu veya 6 satırlık şablon',
    titleEn: '/init command or the 6-line starter',
    descTr: '30 saniyede çalışan bir CLAUDE.md — Claude kendisi yazar.',
    descEn: 'A working CLAUDE.md in 30 seconds — Claude writes it for you.',
  },
  {
    badge: 'İleri Seviye · Advanced',
    badgeColor: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
    titleTr: '"Update CLAUDE.md so you don\'t repeat this."',
    titleEn: '"Update CLAUDE.md so you don\'t repeat this."',
    descTr: 'Her hatadan sonra bu cümleyi ekle — dosya kendini geliştirir.',
    descEn: 'Add this sentence after every mistake — the file improves itself.',
  },
  {
    badge: 'Kişisel · Personal',
    badgeColor: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    titleTr: 'CLAUDE.local.md kişisel katmanı',
    titleEn: 'CLAUDE.local.md personal layer',
    descTr: 'Ekiple paylaşılmayan kişisel kurallar — .gitignore ile korunur.',
    descEn: 'Your personal rules, gitignored, never shared with the team.',
  },
  {
    badge: '14 Gün · Ritual',
    badgeColor: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
    titleTr: 'İki Haftalık Bileşik Mühendislik Ritüeli',
    titleEn: 'Two-Week Compounding Engineering Ritual',
    descTr: '2 hafta boyunca her hatayı uygula — sonra kendi kendine çalışır.',
    descEn: 'Apply it for 2 weeks consistently — after that it runs on autopilot.',
  },
];

const ClaudeMdCompoundingPage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Claude Code Rehberi' : 'Free Claude Code Guide',
    title: isTr
      ? 'Claude\'ı Hatalarından Öğreten Sistem'
      : 'The System That Makes Claude Learn From Its Mistakes',
    subtitle: isTr
      ? 'CLAUDE.md — Claude Code\'un her oturumda okuduğu hafıza dosyası. Doğru kurulunca Claude aynı hataları yapmayı bırakır, seninle ilgili her şeyi hatırlar ve proje kurallarını hiç sormadan uygular.'
      : 'CLAUDE.md — the memory file Claude Code reads at the start of every session. Set it up right and Claude stops making the same mistakes, remembers your project, and applies your rules without being asked.',
    what: isTr ? 'Bu Rehberde Neler Var?' : 'What\'s in This Guide?',
    tool: isTr ? 'Araç: Claude Code' : 'Tool: Claude Code',
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
    keyPhrase: isTr
      ? '"Update CLAUDE.md so you don\'t repeat this."'
      : '"Update CLAUDE.md so you don\'t repeat this."',
    keyPhraseDesc: isTr
      ? 'Her hata düzeltmesinin sonuna bu cümleyi ekle. İki hafta sonra Claude\'un kendi yazdığı 15–30 gotcha kuralı olur.'
      : 'Add this sentence to the end of every fix prompt. Two weeks in, you\'ll have 15–30 gotcha rules Claude wrote itself.',
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
                placeholder={labels.firstNamePh}
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
                placeholder={labels.lastNamePh}
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
                placeholder={labels.emailPh}
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

              {/* Key phrase highlight */}
              <div className="bg-gray-900 border border-cyan-400/30 rounded-xl p-5 mb-6">
                <p className="font-mono text-cyan-400 font-semibold text-sm mb-2 leading-relaxed">
                  {labels.keyPhrase}
                </p>
                <p className="text-gray-400 text-sm">{labels.keyPhraseDesc}</p>
              </div>

              {/* What's in the guide */}
              <p className="font-semibold text-white mb-4">{labels.what}</p>
              <div className="space-y-3 mb-8">
                {levels.map(l => (
                  <div key={l.titleEn} className="flex gap-4 items-start">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border flex-shrink-0 mt-0.5 ${l.badgeColor}`}>
                      {l.badge}
                    </span>
                    <div>
                      <div className="font-semibold text-white text-sm mb-0.5 font-mono">
                        {isTr ? l.titleTr : l.titleEn}
                      </div>
                      <div className="text-gray-400 text-sm">{isTr ? l.descTr : l.descEn}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 text-sm">{labels.tool}</p>
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
