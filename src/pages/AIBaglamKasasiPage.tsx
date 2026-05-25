import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Download, CheckCircle, Lock, ChevronDown } from 'lucide-react';

const TEMPLATE_NAME = 'AI Bağlam Kasası';
const DOWNLOAD_URL = 'https://drive.google.com/file/d/14DDvgGmJQy6IJwXw8528ug3H2uGIrO-u/view?usp=sharing';

const prompts = [
  { num: '01', title: 'Kişisel Anayasanız', desc: 'Her şeyin temeli. Değerler, inançlar ve ilkeler.' },
  { num: '02', title: 'Kariyeriniz / İşiniz', desc: 'Nerede olduğunuz, nereye gittiğiniz, sizi şekillendiren her şey.' },
  { num: '03', title: 'İşletmeniz', desc: 'Kurucular ve işletme sahipleri için derin iş bağlamı.' },
  { num: '04', title: 'Kişisel Hayatınız', desc: 'İş dışındaki esenliğinizin temeli.' },
  { num: '05', title: 'Arkadaşlıklarınız', desc: 'Hayatınıza dahil olmayı seçtiğiniz insanlar.' },
  { num: '06', title: 'Aileniz', desc: 'İçine doğduğunuz ve kurduğunuz ilişkiler.' },
  { num: '07', title: '2026 Hedefleriniz', desc: 'Bu yıl inşa ettikleriniz — gerçek hedefler.' },
  { num: '08', title: 'Müşterileriniz ve Pazarınız', desc: 'Kime satıyorsunuz, nasıl satıyorsunuz ve neden seçiyorlar?' },
];

const AIBaglamKasasiPage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Kaynak' : 'Free Resource',
    title: 'AI Bağlam Kasası',
    subtitle: isTr
      ? 'Claude\'un Gerçekten Sizi Anlamasını Sağlayacak 8 Kopyala-Yapıştır Prompt'
      : '8 Copy-Paste Prompts That Make Claude Truly Understand You',
    problem: isTr
      ? 'Her AI oturumunu sıfırdan başlatıyor musunuz?'
      : 'Starting every AI session from scratch?',
    problemDesc: isTr
      ? 'Her Claude, ChatGPT veya Gemini oturumu açtığınızda AI sizin kim olduğunuzu bilmiyor. Bu yüzden genel tavsiyeler veriyor. AI gücünün %90\'ını masada bırakıyorsunuz.'
      : 'Every time you open Claude, ChatGPT or Gemini, the AI doesn\'t know who you are. That\'s why it gives generic advice. You\'re leaving 90% of AI\'s power on the table.',
    solution: isTr ? 'Çözüm: Bağlam Belgeleri' : 'Solution: Context Documents',
    solutionDesc: isTr
      ? 'AI\'ya kim olduğunuz hakkında derin bağlam verdiğinizde, o artık genel bir asistan olmaktan çıkar ve sizin stratejik iş ortağınız hâline gelir.'
      : 'When you give AI deep context about who you are, it stops being a generic assistant and becomes your strategic partner.',
    inside: isTr ? "Kasanın İçinde Ne Var?" : "What's Inside?",
    insideDesc: isTr
      ? '8 hayat alanı için hazır, kopyala-yapıştır promptlar. Her birini AI\'ya yapıştırın, röportaj yapılın, belgenizi oluşturun.'
      : '8 ready-to-use, copy-paste prompts for every life area. Paste each into any AI, get interviewed, build your document.',
    formTitle: isTr ? 'Ücretsiz İndir' : 'Download Free',
    formDesc: isTr
      ? 'Bilgilerinizi girin, PDF\'i hemen alın.'
      : 'Enter your info and get the PDF instantly.',
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
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
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

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block bg-cyan-400/10 text-cyan-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-cyan-400/20">
            {labels.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">{labels.title}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {labels.subtitle}
          </p>
          <p className="text-gray-400 text-sm">
            Sevim Durmuş · <span className="text-cyan-400">aiandtech.cloud</span>
          </p>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-red-900/40 rounded-2xl p-8">
            <div className="text-2xl mb-4">❌</div>
            <h3 className="text-xl font-bold text-red-400 mb-3">{labels.problem}</h3>
            <p className="text-gray-400 leading-relaxed">{labels.problemDesc}</p>
          </div>
          <div className="bg-gray-900 border border-cyan-400/30 rounded-2xl p-8">
            <div className="text-2xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3">{labels.solution}</h3>
            <p className="text-gray-400 leading-relaxed">{labels.solutionDesc}</p>
          </div>
        </div>
      </section>

      {/* 8 Prompts */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-3">{labels.inside}</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">{labels.insideDesc}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {prompts.map(p => (
              <div
                key={p.num}
                className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-cyan-400/40 transition-colors"
              >
                <span className="text-cyan-400 font-bold text-lg w-8 shrink-0">{p.num}</span>
                <div>
                  <div className="font-semibold text-white mb-1">{p.title}</div>
                  <div className="text-gray-400 text-sm">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="flex flex-col items-center gap-2 py-4 text-gray-500 text-sm">
        <ChevronDown className="h-5 w-5 animate-bounce" />
        {isTr ? 'İndirmek için formu doldurun' : 'Fill the form below to download'}
      </div>

      {/* Download Form */}
      <section id="download-form" className="py-16 px-6">
        <div className="container mx-auto max-w-lg">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-10">
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
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors ${
                        errors.firstName ? 'border-red-500' : 'border-gray-700'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                    )}
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
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors ${
                        errors.lastName ? 'border-red-500' : 'border-gray-700'
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                    )}
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
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-700'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
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
                      <>
                        <Download className="h-4 w-4" />
                        {labels.submit}
                      </>
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
                <CheckCircle className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-3">{labels.successTitle}</h2>
                <p className="text-gray-400 mb-8">{labels.successDesc}</p>
                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-gray-950 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  <Download className="h-5 w-5" />
                  {labels.downloadBtn}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBaglamKasasiPage;
