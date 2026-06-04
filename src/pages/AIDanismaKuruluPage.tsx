import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Download, CheckCircle, Lock } from 'lucide-react';

const TEMPLATE_NAME = 'AI Danışma Kurulu';
const DOWNLOAD_URL = 'https://drive.google.com/file/d/1VDpivilueVF2L2TxFS5Y3ApXwaFbT_65/view?usp=sharing';

const advisers = [
  { num: '01', titleTr: 'Karşı Görüşçü', titleEn: 'The Contrarian', descTr: 'Sadece başarısız olacak olanı arar. Dengeli olmaya çalışmaz.' , descEn: 'Looks only for what will fail. Does not try to be balanced.' },
  { num: '02', titleTr: 'Temel Prensipler Düşünürü', titleEn: 'First-Principles Thinker', descTr: 'Varsayımlarınızı parçalar. Sıfırdan yeniden inşa eder.', descEn: 'Rips apart your assumptions. Rebuilds from scratch.' },
  { num: '03', titleTr: 'Genişletici', titleEn: 'The Expansionist', descTr: 'Kaçırdığınız yükseliyi bulur. Asimetrik kazancı gösterir.', descEn: 'Finds the upside you\'re missing. Shows asymmetric gains.' },
  { num: '04', titleTr: 'Dışarıdan Bakan', titleEn: 'The Outsider', descTr: 'Sektörünüz hakkında hiçbir şey bilmez. Aptal soruları sorar.', descEn: 'Knows nothing about your industry. Asks the dumb questions.' },
  { num: '05', titleTr: 'Uygulayıcı', titleEn: 'The Executor', descTr: 'Pazartesi sabahını umursar. Bu hafta tam olarak ne yapıyorsunuz?', descEn: 'Cares about Monday morning. Exactly what do you do this week?' },
];

const AIDanismaKuruluPage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Kaynak' : 'Free Resource',
    title: 'AI Danışma Kurulu',
    subtitle: isTr
      ? 'Claude\'a Sormayı Bırakın. Kurulu Çalıştırın.'
      : 'Stop Asking Claude. Run the Council.',
    stat: '%49',
    statDesc: isTr
      ? 'Stanford araştırması: Claude ve büyük modeller bir insandan %49 daha fazla sizi onaylıyor.'
      : 'Stanford study: Claude and major models agree with you 49% more than a human would.',
    problem: isTr
      ? 'AI sizi onaylıyor — bu tehlikeli.'
      : 'AI is agreeing with you — and that\'s dangerous.',
    problemDesc: isTr
      ? 'Zor bir karar için Claude\'a danıştığınızda yaklaşık yarı ihtimalle o sessizce başını sallıyor. Kurabiye tarifi için sorun değil. Ürün stratejisi, işe alım, hisse dağılımı için tehlikeli.'
      : 'When you ask Claude for advice on a hard decision, there\'s roughly a coin-flip chance it\'s quietly nodding along. Fine for cookie recipes. Dangerous for product strategy, hiring, equity splits.',
    solution: isTr ? 'Çözüm: Kurulu Kurun' : 'Solution: Build the Council',
    solutionDesc: isTr
      ? '5 farklı bakış açısı, anonim eş değerlendirme ve başkanın net sentezi. Tek Claude sohbetinde.'
      : '5 distinct perspectives, anonymous peer review, and the chairman\'s clear synthesis. All in one Claude chat.',
    inside: isTr ? '5 Danışman + 1 Başkan' : '5 Advisers + 1 Chairman',
    insideDesc: isTr
      ? 'Her danışman farklı teşvikler, kör noktalar ve sorularla yanıt verir. Başkan hepsini anonim değerlendirip net karar yazar.'
      : 'Each adviser answers with different incentives and blind spots. The chairman reviews all anonymously and writes one clear decision.',
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
    successTitle: isTr ? 'PDF\'iniz Hazır!' : 'Your PDF is Ready!',
    successDesc: isTr
      ? 'Aşağıdaki butona tıklayarak PDF\'i indirin. İyi çalışmalar!'
      : 'Click the button below to download your PDF. Enjoy!',
    downloadBtn: isTr ? 'PDF\'i İndir' : 'Download PDF',
    privacy: isTr
      ? 'Bilgileriniz yalnızca bu indirme için kullanılır, asla paylaşılmaz.'
      : 'Your info is only used for this download and will never be shared.',
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
                <span className="text-4xl font-black text-red-400 shrink-0">{labels.stat}</span>
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

      {/* 5 Advisers */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-3">{labels.inside}</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">{labels.insideDesc}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {advisers.map(a => (
              <div
                key={a.num}
                className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-brand/40 transition-colors"
              >
                <span className="text-brand font-bold text-lg w-8 shrink-0">{a.num}</span>
                <div>
                  <div className="font-semibold text-white mb-1">{isTr ? a.titleTr : a.titleEn}</div>
                  <div className="text-gray-400 text-sm">{isTr ? a.descTr : a.descEn}</div>
                </div>
              </div>
            ))}
            {/* Chairman */}
            <div className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-brand/40 transition-colors sm:col-span-2">
              <span className="text-brand font-bold text-lg w-8 shrink-0">★</span>
              <div>
                <div className="font-semibold text-white mb-1">{isTr ? 'Başkan — Anonim Sentez' : 'Chairman — Anonymous Synthesis'}</div>
                <div className="text-gray-400 text-sm">{isTr ? 'Tüm yanıtları okur, anonim değerlendirir, hedging olmadan net karar yazar. 250 kelimede.' : 'Reads all responses, reviews anonymously, writes a clear decision with no hedging. Under 250 words.'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDanismaKuruluPage;
