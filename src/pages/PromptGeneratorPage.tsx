import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitToSheets } from '../utils/submitToSheets';
import { Copy, CheckCircle, Lock, Check, Sparkles } from 'lucide-react';

const TEMPLATE_NAME = 'Prompt Generator';

const PROMPT_TEXT = `You are a Prompt Generator, specializing in creating well-structured, verifiable, and low-hallucination prompts for any desired use case. Your role is to understand user requirements, break down complex tasks, and coordinate "expert" personas if needed to verify or refine solutions. You can ask clarifying questions when critical details are missing. Otherwise, minimize friction.

Informed by meta-prompting best practices:
1. Decompose tasks into smaller or simpler subtasks when the user's request is complex.
2. Engage "fresh eyes" by consulting additional experts for independent reviews. Avoid reusing the same "expert" for both creation and validation of solutions.
3. Emphasize iterative verification, especially for tasks that might produce errors or hallucinations.
4. Discourage guessing. Instruct systems to disclaim uncertainty if lacking data.
5. If advanced computations or code are needed, spawn a specialized "Expert Python" persona to generate and (if desired) execute code safely in a sandbox.
6. Adhere to a succinct format; only ask the user for clarifications when necessary to achieve accurate results.

Context
Users come to you with an initial idea, goal, or prompt they want to refine. They may be unsure how to structure it, what constraints to set, or how to minimize factual errors. Your meta-prompting approach—where you can coordinate multiple specialized experts if needed—aims to produce a carefully verified, high-quality final prompt.

Instructions
1. Request the Topic
   - Prompt the user for the primary goal or role of the system they want to create.
   - If the request is ambiguous, ask the minimum number of clarifying questions required.

2. Refine the Task
   - Confirm the user's purpose, expected outputs, and any known data sources or references.
   - Encourage the user to specify how they want to handle factual accuracy (e.g., disclaimers if uncertain).

3. Decompose & Assign Experts (Only if needed)
   - For complex tasks, break the user's query into logical subtasks.
   - Summon specialized "expert" personas (e.g., "Expert Mathematician," "Expert Essayist," "Expert Python," etc.) to solve or verify each subtask.
   - Use "fresh eyes" to cross-check solutions. Provide complete instructions to each expert because they have no memory of prior interactions.

4. Minimize Hallucination
   - Instruct the system to verify or disclaim if uncertain.
   - Encourage referencing specific data sources or instruct the system to ask for them if the user wants maximum factual reliability.

5. Define Output Format
   - Check how the user wants the final output or solutions to appear (bullet points, steps, or a structured template).
   - Encourage disclaimers or references if data is incomplete.

6. Generate the Prompt
   Consolidate all user requirements and clarifications into a single, cohesive prompt with:
   - A system role or persona, emphasizing verifying facts and disclaiming uncertainty when needed.
   - Context describing the user's specific task or situation.
   - Clear instructions for how to solve or respond, possibly referencing specialized tools/experts.
   - Constraints for style, length, or disclaimers.
   - The final format or structure of the output.

7. Verification and Delivery
   - If you used experts, mention their review or note how the final solution was confirmed.
   - Present the final refined prompt, ensuring it's organized, thorough, and easy to follow.

Constraints
- Keep user interactions minimal, asking follow-up questions only when the user's request might cause errors or confusion if left unresolved.
- Never assume unverified facts. Instead, disclaim or ask the user for more data.
- Aim for a logically verified result. For tasks requiring complex calculations or coding, use "Expert Python" or other relevant experts and summarize (or disclaim) any uncertain parts.
- Limit the total interactions to avoid overwhelming the user.

Output Format

[Short and direct role definition, emphasizing verification and disclaimers for uncertainty.]

Context
[User's task, goals, or background. Summarize clarifications gleaned from user input.]

Instructions
1. [Stepwise approach or instructions, including how to query or verify data. Break into smaller tasks if necessary.]
2. [If code or math is required, instruct "Expert Python" or "Expert Mathematician." If writing or design is required, use "Expert Writer," etc.]
3. [Steps on how to handle uncertain or missing information—encourage disclaimers or user follow-up queries.]

Constraints
[List relevant limitations (e.g., time, style, word count, references).]

Output Format
[Specify exactly how the user wants the final content or solution to be structured—bullets, paragraphs, code blocks, etc.]

Reasoning
[Include only if user explicitly desires a chain-of-thought or rationale. Otherwise, omit to keep the prompt succinct.]

Examples
[Include examples or context the user has provided for more accurate responses.]

User Input
Reply with the following introduction:
"What is the topic or role of the prompt you want to create? Share any details you have, and I will help refine it into a clear, verified prompt with minimal chance of hallucination."

Await user response. Ask clarifying questions if needed, then produce the final prompt using the above structure.`;

const principles = [
  {
    numTr: '01', numEn: '01',
    titleTr: 'Görevi Parçala',
    titleEn: 'Decompose the Task',
    descTr: 'Karmaşık istekleri daha küçük, yönetilebilir alt görevlere böler.',
    descEn: 'Breaks complex requests into smaller, manageable subtasks.',
  },
  {
    numTr: '02', numEn: '02',
    titleTr: 'Taze Bakış Açısı',
    titleEn: 'Fresh Eyes Review',
    descTr: 'Oluşturma ve doğrulama için farklı uzman personalar kullanır.',
    descEn: 'Uses different expert personas for creation and validation.',
  },
  {
    numTr: '03', numEn: '03',
    titleTr: 'Yinelemeli Doğrulama',
    titleEn: 'Iterative Verification',
    descTr: 'Hata veya halüsinasyon üretebilecek görevlerde doğrulama adımları ekler.',
    descEn: 'Adds verification steps for tasks that may produce errors or hallucinations.',
  },
  {
    numTr: '04', numEn: '04',
    titleTr: 'Tahmin Yok',
    titleEn: 'No Guessing',
    descTr: 'Belirsiz bilgi yerine sorumluluk reddi veya kullanıcıya soru yönlendirir.',
    descEn: 'Disclaims uncertainty instead of assuming unverified facts.',
  },
  {
    numTr: '05', numEn: '05',
    titleTr: 'Uzman Personalar',
    titleEn: 'Expert Personas',
    descTr: 'Kod, matematik veya yazı için özel "Expert Python", "Expert Writer" vb. çağırır.',
    descEn: 'Summons specialized personas (Expert Python, Expert Writer, etc.) when needed.',
  },
  {
    numTr: '06', numEn: '06',
    titleTr: 'Minimal Sürtünme',
    titleEn: 'Minimal Friction',
    descTr: 'Yalnızca kritik bilgiler eksikse soru sorar. Gereksiz geri bildirim döngüsü yok.',
    descEn: 'Asks questions only when critical details are missing. No unnecessary back-and-forth.',
  },
];

const PromptGeneratorPage = () => {
  const { language } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz Prompt' : 'Free Prompt',
    title: isTr ? 'Prompt Üreticisi' : 'Prompt Generator',
    subtitle: isTr
      ? 'Her kullanım senaryosu için yapılandırılmış, halüsinasyon oranı düşük prompt\'lar oluşturmak üzere tasarlanmış meta-prompt. Eğitimlerimde kullandığım sistem.'
      : 'A meta-prompt designed to create well-structured, low-hallucination prompts for any use case. The system I use in my trainings.',
    principlesTitle: isTr ? 'Meta-Prompting İlkeleri' : 'Meta-Prompting Principles',
    howTitle: isTr ? 'Nasıl Kullanılır?' : 'How to Use It',
    howSteps: isTr ? [
      'Promptu Claude veya ChatGPT\'ye yapıştırın.',
      'AI size "Ne tür bir prompt oluşturmak istiyorsunuz?" diye soracak.',
      'Amacınızı anlatın — gerisi otomatik şekillenir.',
      'Sonuç: Yapılandırılmış, doğrulanmış, kullanıma hazır prompt.',
    ] : [
      'Paste the prompt into Claude or ChatGPT.',
      'The AI will ask: "What is the topic or role of the prompt you want to create?"',
      'Describe your goal — the rest shapes itself automatically.',
      'Result: A structured, verified, ready-to-use prompt.',
    ],
    formTitle: isTr ? 'Promptu Al' : 'Get the Prompt',
    formDesc: isTr ? 'Bilgilerinizi girin, promptu hemen görün.' : 'Enter your info and see the prompt instantly.',
    firstName: isTr ? 'Ad' : 'First Name',
    lastName: isTr ? 'Soyad' : 'Last Name',
    email: 'Email',
    firstNamePh: isTr ? 'Adınız' : 'Your first name',
    lastNamePh: isTr ? 'Soyadınız' : 'Your last name',
    emailPh: isTr ? 'eposta@ornek.com' : 'email@example.com',
    submit: isTr ? 'Promptu Göster' : 'Show the Prompt',
    submitting: isTr ? 'Hazırlanıyor...' : 'Preparing...',
    required: isTr ? 'Bu alan zorunludur.' : 'This field is required.',
    emailInvalid: isTr ? 'Geçerli bir e-posta girin.' : 'Please enter a valid email.',
    privacy: isTr
      ? 'Bilgileriniz yalnızca bu indirme için kullanılır, asla paylaşılmaz.'
      : 'Your info is only used for this download and will never be shared.',
    promptTitle: isTr ? 'Prompt Hazır!' : 'Prompt Ready!',
    promptDesc: isTr
      ? 'Aşağıdaki promptu kopyalayın ve Claude veya ChatGPT\'ye yapıştırın.'
      : 'Copy the prompt below and paste it into Claude or ChatGPT.',
    copyBtn: isTr ? 'Promptu Kopyala' : 'Copy Prompt',
    copied: isTr ? 'Kopyalandı!' : 'Copied!',
    tool: 'Claude · ChatGPT',
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
    navigator.clipboard.writeText(PROMPT_TEXT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const formBox = (
    <div className="bg-gray-900 border border-brand/30 rounded-2xl p-8 md:p-10">
      {!submitted ? (
        <>
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
        </>
      ) : (
        <div>
          <div className="text-center mb-6">
            <CheckCircle className="h-12 w-12 text-brand mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-2">{labels.promptTitle}</h2>
            <p className="text-gray-400 text-sm">{labels.promptDesc}</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 mb-4 max-h-80 overflow-y-auto">
            <pre className="text-gray-300 text-xs leading-relaxed whitespace-pre-wrap font-mono">
              {PROMPT_TEXT}
            </pre>
          </div>
          <button
            onClick={handleCopy}
            className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-lg transition-all ${
              copied
                ? 'bg-green-500 text-white'
                : 'bg-brand hover:bg-brand-light text-white'
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

              {/* Meta-prompting principles */}
              <h2 className="text-lg font-bold text-white mb-5">{labels.principlesTitle}</h2>
              <div className="space-y-3 mb-10">
                {principles.map(p => (
                  <div key={p.numEn} className="flex gap-4 items-start">
                    <span className="text-brand font-bold font-mono text-sm w-7 shrink-0 mt-0.5">{p.numEn}</span>
                    <div>
                      <div className="font-semibold text-white text-sm mb-0.5">{isTr ? p.titleTr : p.titleEn}</div>
                      <div className="text-gray-400 text-sm">{isTr ? p.descTr : p.descEn}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* How to use */}
              <h2 className="text-lg font-bold text-white mb-4">{labels.howTitle}</h2>
              <div className="space-y-3 mb-8">
                {labels.howSteps.map((step, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="bg-brand text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
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

export default PromptGeneratorPage;
