import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Download, CheckCircle, Lock } from 'lucide-react';

const TEMPLATE_NAME = 'Claude Ecosystem Audit Prompt';
const DOWNLOAD_URL = 'https://drive.google.com/file/d/15Y2d-Kfc3LwL5rTDwGZgZS9xKbQyvbeL/view?usp=drivesdk';

const sections = [
  {
    num: '01',
    titleTr: 'Yönetici Teşhisi',
    titleEn: 'Executive Diagnosis',
    descTr: 'Kullanım kalıplarınızın gerçekte nasıl göründüğü — şiddet derecesiyle birlikte tablo.',
    descEn: 'What your usage pattern actually looks like — a table with severity ratings.',
  },
  {
    num: '02',
    titleTr: 'Eksik Kullanılan Yüzeyler',
    titleEn: 'Underused Surfaces',
    descTr: 'Projects, Cowork, Dispatch, Skills, Design, Deep Research, Claude Code — her biri için Mevcut / İdeal / Etki.',
    descEn: 'Projects, Cowork, Dispatch, Skills, Design, Deep Research, Claude Code — Current / Ideal / Impact for each.',
  },
  {
    num: '03',
    titleTr: 'Sadece Sohbet vs. Tam Ekosistem',
    titleEn: 'Chat-Only vs. Ecosystem-Maximized',
    descTr: 'Her iş alanı için paralel karşılaştırma: mevcut durumunuz ile tam potansiyel.',
    descEn: 'Side-by-side comparison for every business area: where you are vs. full potential.',
  },
  {
    num: '04',
    titleTr: 'En Yüksek ROI\'li 20 Kullanım',
    titleEn: 'Top 20 Highest-ROI Use Cases',
    descTr: 'Sıralı tablo: kullanım durumu, yüzeyler, tür, frekans ve üretilen iş sonucu.',
    descEn: 'Ranked table: use case, surfaces, type, frequency, and the business result produced.',
  },
  {
    num: '05',
    titleTr: 'İdeal Ekosistem Mimarisi',
    titleEn: 'Ideal Ecosystem Architecture',
    descTr: 'Kurucu / Yürütme / Bilgi / Entegrasyon katmanları. Fonksiyon eşleme haritası.',
    descEn: 'Founder / Execution / Knowledge / Integration layers. Surface-to-function mapping.',
  },
  {
    num: '06',
    titleTr: 'Günlük & Haftalık İşletim Modeli',
    titleEn: 'Daily & Weekly Operating Model',
    descTr: 'Zaman bloklu program, müşteri proje şablonu ve 7 adımlı karar çerçevesi.',
    descEn: 'Time-blocked schedule, per-client project template, and a 7-step decision framework.',
  },
  {
    num: '07',
    titleTr: 'Güç Kullanıcısı Kör Noktaları',
    titleEn: 'Power-User Blind Spots',
    descTr: 'İleri düzey kullanıcıların bile düzenli olarak gözden kaçırdığı 8 zayıf nokta.',
    descEn: '8 weaknesses even sophisticated Claude users consistently miss.',
  },
  {
    num: '08',
    titleTr: '4 Haftalık Uygulama Yol Haritası',
    titleEn: '4-Week Implementation Roadmap',
    descTr: 'Temel → Otomasyon → Ölçek → Bileşik. Her hafta için somut adımlar.',
    descEn: 'Foundation → Automation → Scale → Compound. Concrete actions for each week.',
  },
];

const ClaudeEcosystemAuditPage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Prompt Şablonu' : 'Free Prompt Template',
    title: isTr ? 'Claude Ekosistem Denetimi' : 'Claude Ecosystem Audit',
    subtitle: isTr
      ? 'Claude\'u %100 kapasiteyle kullanıyor musunuz? Bu prompt size dürüst cevabı verir.'
      : 'Are you using Claude at 100% capacity? This prompt gives you the honest answer.',
    stat: '%20–30',
    statDesc: isTr
      ? 'Çoğu ileri düzey Claude kullanıcısı, ekosistemin yalnızca %20–30\'unu aktif olarak kullanıyor. Geri kalanı? Masada bırakılmış kaldıraç.'
      : 'Most advanced Claude users actively use only 20–30% of the ecosystem. The rest? Leverage left on the table.',
    problem: isTr
      ? 'Sohbet modunda takılıp kaldınız.'
      : 'You\'re stuck in chat mode.',
    problemDesc: isTr
      ? 'Projects, Cowork, Dispatch, Skills, Deep Research — bunların farkındasınız ama tam olarak nasıl entegre edeceğinizi bilmiyorsunuz. Her gün biraz daha geride kalıyorsunuz.'
      : 'Projects, Cowork, Dispatch, Skills, Deep Research — you\'re aware of them but haven\'t fully integrated them. Every day you\'re compounding slightly behind.',
    solution: isTr ? 'Çözüm: Sistemi haritalayın' : 'Solution: Map the system',
    solutionDesc: isTr
      ? 'Bu tek prompt, Claude\'u kendi kullanımınızı analiz eden bir stratejist olarak çalıştırır. 5.000+ kelimelik, McKinsey tarzı bir stratejik zeka raporu alırsınız.'
      : 'This single prompt runs Claude as a strategist analyzing your own usage. You get a 5,000+ word McKinsey-style strategic intelligence report.',
    inside: isTr ? '10 Bölüm, 1 Prompt' : '10 Sections, 1 Prompt',
    insideDesc: isTr
      ? 'Claude sizin adınıza kapsamlı bir ekosistem raporu hazırlar. Her bölüm tablolar ve somut eylem adımlarıyla gelir.'
      : 'Claude produces a comprehensive ecosystem report on your behalf. Every section comes with tables and concrete action steps.',
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
    successTitle: isTr ? 'Prompt\'unuz Hazır!' : 'Your Prompt is Ready!',
    successDesc: isTr
      ? 'Aşağıdaki butona tıklayarak PDF\'i indirin.'
      : 'Click the button below to download your PDF.',
    downloadBtn: isTr ? 'PDF\'i İndir' : 'Download PDF',
    privacy: isTr
      ? 'Bilgileriniz yalnızca bu indirme için kullanılır, asla paylaşılmaz.'
      : 'Your info is only used for this download and will never be shared.',
    sections: isTr ? 'bölüm' : 'sections',
    words: isTr ? 'kelime rapor' : 'word report',
    prompt: isTr ? 'prompt' : 'prompt',
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
              { num: '10', label: labels.sections },
              { num: '5K+', label: labels.words },
              { num: '1', label: labels.prompt },
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
      {/* Hero + Form */}
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

              {/* Stat */}
              <div className="flex items-center gap-4 bg-gray-900 border border-red-900/40 rounded-xl p-5 mb-4">
                <span className="text-3xl font-black text-red-400 shrink-0">{labels.stat}</span>
                <p className="text-gray-400 text-sm leading-relaxed">{labels.statDesc}</p>
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

      {/* 10 Sections */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-3">{labels.inside}</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">{labels.insideDesc}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {sections.map(s => (
              <div
                key={s.num}
                className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-brand/40 transition-colors"
              >
                <span className="text-brand font-bold text-lg w-8 shrink-0">{s.num}</span>
                <div>
                  <div className="font-semibold text-white mb-1">{isTr ? s.titleTr : s.titleEn}</div>
                  <div className="text-gray-400 text-sm">{isTr ? s.descTr : s.descEn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClaudeEcosystemAuditPage;
