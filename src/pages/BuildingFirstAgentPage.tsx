import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Download, CheckCircle, Lock, Check } from 'lucide-react';

const TEMPLATE_NAME = 'Building Your First AI Agent';
const DOWNLOAD_URL_TR = '/building-your-first-ai-agent-tr.html';
const DOWNLOAD_URL_EN = '/building-your-first-ai-agent-en.html';

const sections = [
  {
    num: '01',
    titleTr: 'Beş Aşama',
    titleEn: 'The Five Stages',
    descTr: 'Sormaktan şirket geneli sisteme. Bugün nerede olduğunuzu ve haftanızı değiştiren tek adımı görün.',
    descEn: 'From asking to a company-wide system. See where you stand today and the one move that changes your week.',
  },
  {
    num: '02',
    titleTr: 'Çalışma Kağıdı 1 — Harita',
    titleEn: 'Worksheet 1 — The Map',
    descTr: 'Tekrar eden her işi tek sayfaya yazın ve sahipsiz işlerin haftalık saatini toplayın.',
    descEn: 'Write every repeating job on one page and total the weekly hours nobody owns.',
  },
  {
    num: '03',
    titleTr: 'Çalışma Kağıdı 2 — Puan',
    titleEn: 'Worksheet 2 — The Score',
    descTr: 'Tekrar, yük, bağımsızlık ve hata toleransı. Sezgiyle değil, puanla sıralanmış ilk üçünüz.',
    descEn: 'Repeat, load, independence, tolerance. Your top three ranked by score, not by hunch.',
  },
  {
    num: '04',
    titleTr: 'Ajan Mimarı Promptu',
    titleEn: 'The Agent Architect Prompt',
    descTr: 'Yapıştırın ve sadece konuşun. Sizi röportaja alır, iki dosyanızı yazar, kurulumu anlatır.',
    descEn: 'Paste it and just talk. It interviews you, writes your two files, and walks you through setup.',
  },
  {
    num: '05',
    titleTr: 'Bileşenin Anatomisi',
    titleEn: 'Anatomy of a Component',
    descTr: 'Rol, tetikleyici, bağlam, süreç, kurallar, çıktı — çalışan her ajanın altı parçası.',
    descEn: 'Role, trigger, context, process, rules, output — the six parts of every working agent.',
  },
];

const BuildingFirstAgentPage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isTr = language === 'tr';
  const downloadUrl = isTr ? DOWNLOAD_URL_TR : DOWNLOAD_URL_EN;

  const labels = {
    badge: isTr ? 'Ücretsiz Uygulamalı Rehber' : 'Free Working Guide',
    title: isTr ? 'İlk AI Ajanınızı Kurun' : 'Building Your First AI Agent',
    subtitle: isTr
      ? 'Dağınık denemelerden çalışan bir sisteme. İşinizi haritalayın, ilk üçünüzü sıralayın, birincisini kurun. Bu rehber okunmak için değil, doldurulmak için hazırlandı.'
      : 'From scattered attempts to a system that runs. Map your work, rank your top three, build the first one. This guide is made to be filled in, not read.',
    problem: isTr
      ? 'AI\'yı deniyorsunuz ama hiçbir şey kalıcı olmuyor.'
      : 'You keep trying AI, but nothing sticks.',
    problemDesc: isTr
      ? 'Her seferinde sohbet penceresini siz açıyorsunuz, her şey sizin aklınıza gelmesine bağlı. İş, sizin hatırlamanız üzerine kurulu olduğu sürece hiçbir şey birikmiyor.'
      : 'You open the chat window every time, and everything depends on you thinking of it. As long as the work runs on you remembering, nothing compounds.',
    solution: isTr ? 'Çözüm: tek bir süreç, çalışan tek bir ajan' : 'Solution: one process, one working agent',
    solutionDesc: isTr
      ? '90 dakika. Üç çalışma kağıdı. Sonunda elinizde işinizin haritası, puanlanmış ilk üçünüz ve gerçekten çalışan bir asistan olur.'
      : '90 minutes. Three worksheets. You end up with a map of your work, a scored top three, and one assistant that actually runs.',
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
    successTitle: isTr ? 'Rehberiniz Hazır!' : 'Your Guide is Ready!',
    successDesc: isTr
      ? 'Aşağıdaki butona tıklayarak rehberi açın. İyi çalışmalar!'
      : 'Click the button below to open your guide. Enjoy!',
    downloadBtn: isTr ? 'Rehberi Aç' : 'Open the Guide',
    stat1: isTr ? 'Çalışma Kağıdı' : 'Worksheets',
    stat2: isTr ? 'Aşama' : 'Stages',
    stat3: isTr ? 'Dakika' : 'Minutes',
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
            href={downloadUrl}
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

              <div className="flex gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-brand">3</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{labels.stat1}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-brand">5</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{labels.stat2}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-brand">90</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{labels.stat3}</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
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

              <div className="bg-gray-900 border border-brand/30 rounded-xl p-5">
                <p className="font-semibold text-brand mb-4">{labels.what}</p>
                <div className="space-y-4">
                  {sections.map(s => (
                    <div key={s.num} className="flex gap-4 items-start">
                      <span className="text-brand font-bold text-lg w-8 shrink-0">{s.num}</span>
                      <div>
                        <div className="font-semibold text-white mb-0.5">{isTr ? s.titleTr : s.titleEn}</div>
                        <div className="text-gray-400 text-sm">{isTr ? s.descTr : s.descEn}</div>
                      </div>
                    </div>
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

export default BuildingFirstAgentPage;
