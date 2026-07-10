import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Copy, Check, CheckCircle, Lock, Sparkles, Star } from 'lucide-react';

const TEMPLATE_NAME = '3 Ways to Build a Claude Skill';

const ways = [
  {
    num: '1',
    starred: false,
    titleTr: 'Başkasının Skill\'ini Kopyala',
    titleEn: 'Copy Someone Else\'s Skill',
    bodyTr: 'En hızlı yol. Birinin GitHub reposunda ya da benim ücretsiz rehberlerimden birinde zaten hazırladığı bir skill\'i alıp doğrudan Claude\'a bırakıyorsunuz.\n\nBu gerçekten faydalı ve başlamak için iyi bir yer. Haftalık rapor formatlama ya da bir excel\'i düzenleme gibi genel bir iş için iyi kurulmuş bir skill neredeyse herkes için işe yarar. Ama iş sizin işinizin özel işleyişine değince aksamaya başlar. Herkesin hayatı, teklifleri, araçları ve müşterileri farklı — ve bir yabancının skill\'inde bu bağlamdan hiçbiri yok.',
    bodyEn: 'The fastest way. You grab a skill someone already made, from a GitHub repo or from one of my free guides, and drop it straight into Claude.\n\nThis is genuinely useful, and honestly a great place to start. A well-built skill for something generic, like formatting a weekly report or cleaning up a spreadsheet, will work for almost anyone. But the second the job touches how your specific business runs, it starts to miss. Everyone\'s life, offers, tools, and clients are different, and a stranger\'s skill has none of that context baked in.',
    bestForTr: 'Hızlı başlamak + genel, evrensel görevler.',
    bestForEn: 'Getting started fast + generic, universal tasks.',
    weakForTr: 'İşinizin gerçekte nasıl yürüdüğüne özgü herhangi bir şey.',
    weakForEn: 'Anything specific to how your business actually operates.',
  },
  {
    num: '2',
    starred: false,
    titleTr: 'Anlat, AI Oluştursun',
    titleEn: 'Describe It And Let AI Build It',
    bodyTr: 'Büyük bir adım. Başkasının skill\'ini ödünç almak yerine, istediğiniz skill\'i anlatıyor ve Claude\'dan sizin için yazmasını istiyorsunuz. Görevi, adımları, çıktıyı açıklıyorsunuz, o da talimatları taslak olarak yazıyor.\n\nBu daha iyi çünkü en azından kendi tanımınız. Ama hâlâ bir boşluk var: işinizi nasıl yaptığınızı, hafızanızdan, tek oturumda anlatıyorsunuz. Ve bu neredeyse hiçbir zaman işin gerçekte nasıl gittiği değil. Uç durumları, küçük değerlendirme anlarını, "ah, ama şu tür müşteride farklı" anlarını unutuyorsunuz. Claude, kafanızdaki iş versiyonu için temiz bir skill kuruyor — gerçek, dağınık versiyon için değil. Hâlâ tahmin ediyor, sadece tahmini siz besliyorsunuz.',
    bodyEn: 'A big step up. Instead of borrowing someone else\'s, you describe the skill you want and ask Claude to write it for you. You explain the task, the steps, the output, and it drafts the instructions.\n\nThis is better because at least it\'s your description. But there\'s still a gap: you\'re describing how you think you work, from memory, in one sitting. And that\'s almost never how the job actually goes. You forget the edge cases, the little judgment calls, the "oh, except when it\'s this kind of client" moments. Claude builds a clean skill for the version of the work in your head, not the messy real one. It\'s still guessing, you\'re just the one feeding it the guess.',
    bestForTr: 'Görevi canlı gösteremediğinizde sağlam bir ilk taslak.',
    bestForEn: 'A solid first draft when you can\'t demo the task live.',
    weakForTr: 'Düşünmeden yaptığınız gerçek değerlendirme anlarını yakalamak.',
    weakForEn: 'Capturing the real judgment calls you make without thinking.',
  },
  {
    num: '3',
    starred: true,
    titleTr: 'Çalıştır, Düzelt, Sonra Kaydet',
    titleEn: 'Run It, Correct It, Then Save It',
    bodyTr: 'Bu, kendi işim için tam olarak güvendiğim tek yöntem ve şaşırtıcı derecede basit: işi anlatmak yerine, Claude ile birlikte bir kere gerçekten yapıyorsunuz, anlık olarak düzelterek. Sonra ona tüm bu oturumu bir skill olarak kaydetmesini söylüyorsunuz.\n\nArtık skill bir şablondan ya da hafızadan kurulmuyor. Gerçek bir görev çalıştırmasından, sizin gerçek düzeltmelerinizden ve "iyi"nin sizin gerçek standardınızdan kuruluyor. İşte tam olarak dört adımlık döngü.',
    bodyEn: 'This is the only method I fully trust for my own business, and it\'s shockingly simple: instead of describing the work, you do the work with Claude, once, correcting it in real time. Then you tell it to save that whole session as a skill.\n\nNow the skill isn\'t built from a template or a memory. It\'s built from a real run of the task, with your real corrections and your real standard of "good" baked right in. Here\'s the exact four-step loop.',
    bestForTr: '',
    bestForEn: '',
    weakForTr: '',
    weakForEn: '',
  },
];

const steps = [
  {
    num: '1',
    titleTr: 'Gerçek iş akışını Claude ile çalıştırın',
    titleEn: 'Run the real workflow with Claude',
    bodyTr: 'Gerçekten yaptığınız bir görevi seçin ve Claude ile birlikte, canlı, gerçek bir örnek üzerinde yapın. Varsayımsal değil, "bir e-posta yazdığınızı düşünün" değil — bugün göndermeniz gereken gerçek bir e-posta. Baştan sona tüm süreci adım adım geçin.',
    bodyEn: 'Pick a task you actually do and do it with Claude, live, on a real example. Not a hypothetical, not "imagine you\'re writing an email," an actual email you need to send today. Walk through the whole thing start to finish.',
  },
  {
    num: '2',
    titleTr: 'Giderken düzeltin',
    titleEn: 'Correct it as it goes',
    bodyTr: 'Bu sihirli adım. Claude her seferinde biraz yanlış bir şey yaptığında, sesli olarak düzeltin. "Çok resmi, ben asla böyle söylemem." "O kısmı atla." "Bu tam olarak doğru, böyle devam et." Sadece iyi bir sonuç almıyorsunuz — kendi gerçek standardınızı kullanarak iyi ile kötü arasındaki farkı ona öğretiyorsunuz.',
    bodyEn: 'This is the magic step. Every time Claude does something slightly off, fix it out loud. "Too formal, I\'d never say that." "Skip that part." "This is exactly right, keep doing it like this." You\'re not just getting a good result, you\'re teaching it the difference between good and bad using your real standard.',
  },
  {
    num: '3',
    titleTr: 'Sonucu tam oturtun',
    titleEn: 'Get it to nail the result',
    bodyTr: 'Çıktı, gerçekten düzenlemeden kullanacağınız bir şey olana kadar devam edin. O son versiyon sizin çıtanız. Ondan öncekilerin hepsi eğitimdi.',
    bodyEn: 'Keep going until the output is genuinely something you\'d use without editing. That final version is your bar. Everything before it was training.',
  },
  {
    num: '4',
    titleTr: 'Tüm süreci bir skill olarak kaydetmesini söyleyin',
    titleEn: 'Tell it to save the whole process as a skill',
    bodyTr: 'Şimdi sihirli sözleri söylüyorsunuz: az önce yaptığımız her şeyi yeniden kullanılabilir bir skill\'e dönüştür. Claude, süreci, adımları ve yol boyunca yaptığınız tüm düzeltmeleri yazıya döküyor — böylece bir dahaki sefere ilk denemede sizin yönteminizle yapıyor.',
    bodyEn: 'Now you say the magic words: turn everything we just did into a reusable skill. Claude writes up the process, the steps, and all the corrections you made along the way, so next time it does it your way on the first try.',
  },
];

const PROMPT_1_TR = `Önce seninle gerçek bir görev yaparak, sonra nasıl yaptığımızı kaydederek yeniden kullanılabilir bir skill oluşturmak istiyorum. Henüz skill'i oluşturma. Şu an eğitim modundayız.

Skill'e dönüştürmek istediğim görev:
[tekrar eden işi bir iki cümlede tanımlayın, örn. "bir müşteri destek e-postasına yanıt yazmak" ya da "dağınık notlarımı düzgün bir LinkedIn postuna çevirmek"]

Üzerinde çalışacağımız gerçek bir örnek:
[bugün üzerinde çalıştığınız gerçek girdiyi yapıştırın — gerçek e-posta / notlar / veri / brief, uydurma değil]

Benimle nasıl çalışmanı istediğim:
1. Bu gerçek örnek üzerinde görevi, en iyi olduğunu düşündüğün şekilde, baştan sona yap.
2. Bir bölüm ya da bir karar seferinde ilerle. Her adımdan sonra dur ve "bu doğru mu, yoksa neyi değiştirirdin?" diye sor, sonra devam et.
3. Seni düzelttiğimde, bunu bu tür görev için kalıcı bir kural olarak ele al, tek seferlik bir düzeltme değil. Kuralı bana tek satırda geri anlat ki yakaladığını bileyim.
4. Küçük değerlendirme anlarına dikkat et: ton, neyin dahil edilip neyin çıkarılacağı, biçimlendirme, benim için "bitti" nasıl görünüyor. Varsaymak yerine sor.
5. Ben açıkça bitirdik demeden hiçbir şeyi özetleme ya da skill olarak kaydetmeyi teklif etme. Şu an sadece birlikte gerçek işi yapıyoruz.

Yukarıdaki örnek üzerinde görevi denemeye başla, sonra ilk geri bildirim turum için dur.`;

const PROMPT_1_EN = `I want to build a reusable skill by doing a real task with you first, then saving how we did it. Do not build the skill yet. We are in training mode.

The task I want to turn into a skill:
[describe the repeatable job in one or two sentences, e.g. "write a reply to a customer support email" or "turn my rough notes into a polished LinkedIn post"]

Here's a real example to work on right now:
[paste the actual input, the real email / notes / data / brief you're working with today, not a made-up one]

How I want you to work with me:
1. Do the task on this real example, start to finish, in the way you think is best.
2. Go one section or one decision at a time. After each step, pause and ask me "is this right, or what would you change?" before moving on.
3. When I correct you, treat that correction as a permanent rule for this kind of task, not a one-off fix. Restate the rule back to me in one line so I know you caught it.
4. Watch for the small judgment calls: tone, what to include vs cut, formatting, what "done" looks like to me. Ask about them instead of assuming.
5. Do not summarize or offer to save anything as a skill until I explicitly say we're finished. Right now we are just doing the real work together.

Start by attempting the task on the example above, then pause for my first round of feedback.`;

const PROMPT_2_TR = `O son versiyon tam olarak istediğim şeydi. Şimdi birlikte yaptığımız her şeyi, yeni girdiler üzerinde tekrar çalıştırabileceğim ve ilk denemede aynı kaliteyi alabileceğim yeniden kullanılabilir bir skill'e dönüştür.

Şu bölümlere sahip temiz, kendi başına yeterli bir skill dokümanı olarak yaz:

1. İsim: bu skill için kısa, net bir isim.
2. Ne yapar: görev ve ne zaman kullanılacağı hakkında bir iki cümle.
3. Benden ihtiyaç duyduğu girdiler: her seferinde sana vermem gereken tam şeyler (ve biri eksikse ne yapılacağı).
4. Adım adım süreç: sırayla izlediğimiz gerçek adımlar, kendine talimat olarak yazılmış.
5. Kurallarım ve standartlarım: bugün yaptığım her düzeltme, kalıcı kurallar olarak yazılmış. Ton, neyin dahil edilip neyin çıkarılacağı, biçimlendirme ve "her zaman" ya da "asla" dediğim her şeyi dahil et. Bu en önemli bölüm, tek bir kuralı bile kaybetme.
6. "İyi" nasıl görünür: vardığımız son versiyonun kalite çıtasını tarif et, böylece kendi işini buna göre kontrol edebilirsin.
7. Kaçınılması gereken yaygın hatalar: seni düzelttiğim, ilk denemede yaptığın şeyler, böylece tekrarlamazsın.

Nasıl yazacağına dair kurallar:
- Sadece oturumumuzda gerçekten olanlara dayan, genel en iyi uygulamalara değil. Bir şeyin gerçek bir kural olup olmadığından emin değilsen, uydurmak yerine bana sor.
- Bugün hiçbir hafızası olmayan bir versiyonunun bunu alıp aynı sonucu üretebileceği şekilde yaz.
- Sıkı ve göz atılabilir tut. Süs yok, bariz olanı tekrar etme.

Bitirdiğinde, tam skill'i bana göster, sonra onu daha da güvenilir kılacak bir iki soru sor.`;

const PROMPT_2_EN = `That final version is exactly what I wanted. Now turn everything we just did together into a reusable skill I can run again on new inputs and get this same quality on the first try.

Write it as a clean, self-contained skill document with these sections:

1. Name: a short, obvious name for this skill.
2. What it does: one or two sentences on the job and when to use it.
3. Inputs it needs from me: the exact things I have to give you each time (and what to do if one is missing).
4. Step-by-step process: the actual steps we followed, in order, written as instructions to yourself.
5. My rules and standards: every correction I made today, written as permanent rules. Include the tone, what to include vs cut, formatting, and anything I said "always" or "never" about. This is the most important section, do not lose a single one.
6. What "good" looks like: describe the quality bar of the final version we landed on, so you can check your own work against it.
7. Common mistakes to avoid: the things you did on the first pass that I corrected, so you don't repeat them.

Rules for how you write it:
- Base it only on what actually happened in our session, not on generic best practices. If you're unsure whether something was a real rule, ask me instead of inventing it.
- Write it so a version of you with zero memory of today could pick it up and produce the same result.
- Keep it tight and skimmable. No fluff, no restating the obvious.

When you're done, show me the full skill and then ask me the one or two questions that would make it even more reliable.`;

const ClaudeSkillGuidePage = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const labels = {
    badge: isTr ? 'Ücretsiz Rehber' : 'Free Guide',
    title: isTr ? 'Bir Claude Skill\'i Oluşturmanın 3 Yolu' : '3 Ways To Build A Claude Skill',
    subtitle: isTr
      ? 'Bir Claude skill\'i oluşturmanın üç yolu var. İkisi tahmin etmek. Üçüncüsü, kendi işimde çalıştırmaya güvendiğim tek yöntem — ve işte tam olarak nasıl yapıldığı.'
      : 'There are three ways to build a Claude skill. Two of them are guessing. The third is the only one I trust to run in my actual business, and here\'s exactly how to do it.',
    author: 'Sevim Durmuş · aiandtech.cloud',
    intro: isTr
      ? '"Skill", Claude\'a tekrar eden bir işi her seferinde aynı kalitede yapmayı öğreten, kaydedilmiş bir talimat setidir — böylece aynı şeyi bir daha asla yeniden anlatmak zorunda kalmazsınız.\n\nBirini işe alıp bir görevi tam olarak nasıl yapmasını istediğinizi bir kere yazıya dökmek gibi düşünün — bir daha asla hata yapmasın diye. Soru, bu talimatları nasıl yazdığınız. Bunu yapmanın üç yolu var ve bunlar eşit değil. İlk ikisi daha hızlı hissettiriyor. Üçüncüsü gerçekten doğru sonuç veren yöntem — çünkü başka birinin nasıl çalıştığına değil, sizin nasıl çalıştığınıza göre kurulu.'
      : 'A "skill" is just a saved set of instructions that teaches Claude to do a repeatable job the same great way every time, so you never have to re-explain it.\n\nThink of it like hiring someone and writing down exactly how you want a task done, once, so they nail it forever. The question is how you write those instructions. There are three ways to do it, and they are not equal. The first two feel faster. The third is the one that actually gets it right, because it\'s built around how you work instead of how someone else does.',
    bestFor: isTr ? 'En iyi olduğu yer:' : 'Best for:',
    weakFor: isTr ? 'Zayıf olduğu yer:' : 'Weak for:',
    patternTitle: isTr ? 'Fark etmeniz gereken kalıp' : 'The pattern to notice',
    patternBody: isTr
      ? 'Yol 1, başkasının işe dair tahmini. Yol 2, sizin işe dair tahmininiz. Yol 3 tahmin etmeyi tamamen ortadan kaldırıyor — çünkü Claude\'a gerçek şeyi gösteriyorsunuz.'
      : 'Way 1 is someone else\'s guess at the work. Way 2 is your guess at the work. Way 3 removes the guessing entirely, because you show Claude the real thing.',
    stepsTitle: isTr ? '4 Adımlık Döngü' : 'The 4-Step Loop',
    promptsIntro: isTr
      ? 'İşte Adım 1\'i başlatmak için kullandığım prompt. Yapıştırın, görevinizi doldurun ve gerçek iş akışınızı bununla çalıştırın. Claude\'u tahmin etmek yerine gerçekten nasıl çalıştığınızı izlemeye zorluyor.'
      : 'Here\'s the prompt I use to kick off Step 1. Paste it, fill in your task, and run your real workflow with it. It forces Claude to watch how you actually work instead of guessing.',
    prompt1Title: isTr ? 'Prompt 1 — Gerçek İş Akışını Çalıştır' : 'Prompt 1 — Run The Real Workflow',
    prompt2Intro: isTr
      ? 'Çıktı gerçekten iyi olduğunda — olduğu gibi gönderebileceğiniz bir şey — ikinci promptu çalıştırın. Bu Adım 4: az önce yaptığınız her şeyi kalıcı, yeniden kullanılabilir bir skill\'e dönüştürüyor — yarın (ya da bir ekip arkadaşınıza verip) tekrar çalıştırabileceğiniz bir skill.'
      : 'Once the output is genuinely good, that you\'d send it as-is, run the second prompt. This is Step 4: it turns everything you just did into a permanent, reusable skill you can run again tomorrow (or hand to a teammate).',
    prompt2Title: isTr ? 'Prompt 2 — Skill Olarak Kaydet' : 'Prompt 2 — Save It As A Skill',
    whereTitle: isTr ? 'Nerede Saklanır' : 'Where To Keep It',
    whereBody: isTr
      ? 'O skill dokümanını Claude\'un her seferinde ulaşabileceği bir yere kaydedin: bir Claude Project\'in talimatlarına yapıştırın, bir SKILL.md dosyası olarak bırakın ya da Claude Code kullanıyorsanız, projenizde bir skill olarak kaydedin. Artık bir kere yaptığınız iş, sonsuza kadar kendi kendine çalışıyor — tam olarak sizin çalışma şeklinize göre kurulu.'
      : 'Save that skill document where Claude can reach it every time: paste it into a Claude Project\'s instructions, drop it in as a SKILL.md file, or if you use Claude Code, save it as a skill in your project. Now the work you did once runs itself forever, built around exactly how you work.',
    formTitle: isTr ? 'Rehberin Tamamını Aç' : 'Unlock the Full Guide',
    formDesc: isTr
      ? 'Bilgilerinizi girin, rehberin tamamını ve 2 hazır promptu hemen görün.'
      : 'Enter your info and see the full guide plus 2 ready-to-use prompts instantly.',
    firstName: isTr ? 'Ad' : 'First Name',
    lastName: isTr ? 'Soyad' : 'Last Name',
    email: 'Email',
    firstNamePh: isTr ? 'Adınız' : 'Your first name',
    lastNamePh: isTr ? 'Soyadınız' : 'Your last name',
    emailPh: isTr ? 'eposta@ornek.com' : 'email@example.com',
    submit: isTr ? 'Rehberi Aç' : 'Unlock the Guide',
    submitting: isTr ? 'Hazırlanıyor...' : 'Preparing...',
    required: isTr ? 'Bu alan zorunludur.' : 'This field is required.',
    emailInvalid: isTr ? 'Geçerli bir e-posta girin.' : 'Please enter a valid email.',
    privacy: isTr
      ? 'Bilgileriniz yalnızca bu indirme için kullanılır, asla paylaşılmaz.'
      : 'Your info is only used for this download and will never be shared.',
    unlockedTitle: isTr ? 'Rehber Açıldı!' : 'Guide Unlocked!',
    copy: isTr ? 'Kopyala' : 'Copy',
    copied: isTr ? 'Kopyalandı!' : 'Copied!',
    tool: 'Claude',
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

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">

          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-brand/10 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-brand/20">
              {labels.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              {labels.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
              {labels.subtitle}
            </p>
            <p className="text-gray-500 text-sm">{labels.author}</p>
          </div>

          {!submitted ? (
            /* Gate: form */
            <div className="max-w-md mx-auto bg-gray-900 border border-brand/30 rounded-2xl p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand/10 border border-brand/30 mb-4">
                  <Sparkles className="h-6 w-6 text-brand" />
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
                    <><Sparkles className="h-4 w-4" />{labels.submit}</>
                  )}
                </button>
                <p className="text-gray-500 text-xs text-center flex items-center justify-center gap-1.5">
                  <Lock className="h-3 w-3" />
                  {labels.privacy}
                </p>
              </form>
            </div>
          ) : (
            /* Full guide */
            <div>
              <div className="flex items-center justify-center gap-2 mb-10 text-brand text-sm font-semibold">
                <CheckCircle className="h-4 w-4" />
                {labels.unlockedTitle}
              </div>

              {/* Intro */}
              <p className="text-gray-300 leading-relaxed whitespace-pre-line mb-14">
                {labels.intro}
              </p>

              {/* 3 Ways */}
              <div className="space-y-8 mb-14">
                {ways.map(w => (
                  <div
                    key={w.num}
                    className={`bg-gray-900 border rounded-2xl p-7 ${w.starred ? 'border-brand/50' : 'border-gray-800'}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${w.starred ? 'text-brand bg-brand/10 border border-brand/30' : 'text-gray-400 bg-gray-800 border border-gray-700'}`}>
                        {isTr ? `YOL ${w.num}` : `WAY ${w.num}`}
                      </span>
                      {w.starred && <Star className="h-4 w-4 text-brand fill-brand" />}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {isTr ? w.titleTr : w.titleEn}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line mb-4">
                      {isTr ? w.bodyTr : w.bodyEn}
                    </p>
                    {(isTr ? w.bestForTr : w.bestForEn) && (
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-xs border-t border-gray-800 pt-4">
                        <p><span className="text-brand font-semibold">{labels.bestFor}</span> <span className="text-gray-400">{isTr ? w.bestForTr : w.bestForEn}</span></p>
                        <p><span className="text-gray-500 font-semibold">{labels.weakFor}</span> <span className="text-gray-400">{isTr ? w.weakForTr : w.weakForEn}</span></p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Pattern callout */}
              <div className="bg-brand/5 border border-brand/20 rounded-2xl p-6 mb-14">
                <p className="text-brand text-sm font-semibold mb-2">{labels.patternTitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{labels.patternBody}</p>
              </div>

              {/* 4-step loop */}
              <h2 className="text-2xl font-bold text-white mb-6">{labels.stepsTitle}</h2>
              <div className="space-y-5 mb-14">
                {steps.map(s => (
                  <div key={s.num} className="flex gap-4 items-start bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <span className="bg-brand text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                      {s.num}
                    </span>
                    <div>
                      <h4 className="font-semibold text-white mb-1.5">{isTr ? s.titleTr : s.titleEn}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{isTr ? s.bodyTr : s.bodyEn}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prompt 1 */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{labels.promptsIntro}</p>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden mb-10">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                  <h3 className="font-bold text-white text-sm">{labels.prompt1Title}</h3>
                  <button
                    onClick={() => handleCopy(isTr ? PROMPT_1_TR : PROMPT_1_EN, 'prompt1')}
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1.5 rounded-lg hover:bg-brand/20 transition-colors"
                  >
                    {copied === 'prompt1'
                      ? <><Check className="h-3.5 w-3.5" />{labels.copied}</>
                      : <><Copy className="h-3.5 w-3.5" />{labels.copy}</>
                    }
                  </button>
                </div>
                <div className="px-6 py-5">
                  <pre className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 font-mono text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">
                    {isTr ? PROMPT_1_TR : PROMPT_1_EN}
                  </pre>
                </div>
              </div>

              {/* Prompt 2 */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{labels.prompt2Intro}</p>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden mb-14">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                  <h3 className="font-bold text-white text-sm">{labels.prompt2Title}</h3>
                  <button
                    onClick={() => handleCopy(isTr ? PROMPT_2_TR : PROMPT_2_EN, 'prompt2')}
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1.5 rounded-lg hover:bg-brand/20 transition-colors"
                  >
                    {copied === 'prompt2'
                      ? <><Check className="h-3.5 w-3.5" />{labels.copied}</>
                      : <><Copy className="h-3.5 w-3.5" />{labels.copy}</>
                    }
                  </button>
                </div>
                <div className="px-6 py-5">
                  <pre className="bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 font-mono text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">
                    {isTr ? PROMPT_2_TR : PROMPT_2_EN}
                  </pre>
                </div>
              </div>

              {/* Where to keep it */}
              <div className="bg-gray-900 border border-brand/20 rounded-2xl p-6">
                <p className="text-brand text-sm font-semibold mb-2">{labels.whereTitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{labels.whereBody}</p>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default ClaudeSkillGuidePage;
