// src/data/trainings.ts  — AI&TECH Egitim Verileri (3 Program, bilingual)

export type Level = 'starter' | 'intermediate' | 'advanced';

export const levelColors: Record<Level, string> = {
  starter:      'bg-green-500/15  text-green-400  border-green-500/30',
  intermediate: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
  advanced:     'bg-purple-500/15 text-purple-400 border-purple-500/30',
};

export interface TrainingModule {
  time?:  string;
  title:  string;
  items:  string[];
}

export interface AudienceRole {
  emoji: string;
  title: string;
  desc:  string;
}

/** Optional English overrides for any Training field */
export interface TrainingL10n {
  title?:        string;
  subtitle?:     string;
  hook?:         string;
  hookSub?:      string;
  description?:  string;
  levelLabel?:   string;
  prereqs?:      string;
  outcomes?:     string[];
  modules?:      TrainingModule[];
  audienceRoles?: AudienceRole[];
  includes?:     string[];
  warning?:      string;
  note?:         string;
}

export interface Training {
  id:            string;
  number:        string;
  slug:          string;
  title:         string;
  subtitle:      string;
  badge?:        string;
  level:         Level;
  levelLabel:    string;
  journey:       string;
  hook:          string;
  hookSub:       string;
  description:   string;
  duration:      string;
  durationShort: string;
  format:        string;
  audience:      string;
  prereqs:       string;
  outcomes:      string[];
  modules:       TrainingModule[];
  audienceRoles: AudienceRole[];
  includes:      string[];
  warning?:      string;
  note?:         string;
  en?:           TrainingL10n;
}

export const journeyConfig: Record<string, {
  icon: string; label: string; labelEn: string; desc: string; descEn: string;
}> = {
  all:      { icon: '✦',  label: 'Tüm Programlar', labelEn: 'All Programs',        desc: 'Hepsini gör',           descEn: 'See all' },
  bireysel: { icon: '👤', label: 'Bireysel',        labelEn: 'Individual',          desc: 'Kendi hızında öğren',   descEn: 'Learn at your pace' },
  takim:    { icon: '🏢', label: 'Takım & Kurum',   labelEn: 'Team & Corporate',    desc: 'Ekibinle dönüşüm',     descEn: 'Transform your team' },
  donusum:  { icon: '🚀', label: 'Derin Dönüşüm',   labelEn: 'Deep Transformation', desc: 'Kapsamlı çözüm',       descEn: 'Comprehensive solution' },
};

export const trainings: Training[] = [
  // ─── 02: BİREYSEL VERİMLİLİK ───────────────────────────────────────────────
  {
    id:            '02',
    number:        '02',
    slug:          'claude-bireysel-verimlilik',
    title:         'Claude ile Bireysel Verimlilik',
    subtitle:      '1 günlük yoğun pratik eğitim — iş hayatınızda Claude\'u hemen kullanın',
    badge:         'En Popüler',
    level:         'starter',
    levelLabel:    'Başlangıç',
    journey:       'bireysel',
    hook:          'Her Gün 2 Saat Kazanın. Gerçekten.',
    hookSub:       'Rapor, e-posta, analiz, sunum... Claude ile rutin iş yükünü yarım saate indirin. 1 günlük uygulamalı eğitimde 20+ hazır workflow alıyorsunuz.',
    description:   'Bu eğitim, Claude\'u iş hayatına entegre etmek isteyen bireysel profesyoneller için tasarlanmıştır. Sabah 9\'dan akşam 5\'e kadar, gerçek iş senaryolarıyla dolu yoğun bir gün geçiriyorsunuz. Eğitim sonunda kendi iş akışınıza özel prompt kütüphane ve hazır şablonlarla ayrılıyorsunuz.',
    duration:      '1 Gün (8 Saat) — 09:00-17:00',
    durationShort: '1 Gün',
    format:        'Online veya Yüz yüze (İstanbul / Bursa)',
    audience:      'Yöneticiler, uzmanlar, serbest çalışanlar',
    prereqs:       'Claude hesabı (ücretsiz plan yeterli)',
    outcomes: [
      'Projects özelliğini kurarak Claude\'u iş yerinize tanıştırıyorsunuz',
      'Artifacts ile sıfırdan değil, düzenleyerek çalışıyorsunuz',
      'E-posta, rapor, sunum, analiz için 20+ hazır prompt',
      'Veri okuma ve yorum becerisi — Excel\'den hikaye çıkarma',
      'Kendi sektörünüze özel prompt kütüphane',
      'Stratejik düşünme araçları: SWOT, 5 Neden, karar matrisi',
    ],
    modules: [
      {
        time: '09:00-10:30',
        title: 'Claude\'u Tanıyalım — Doğru Kullanım',
        items: [
          'Claude vs ChatGPT — iş hayatında gerçek fark',
          'Doğru prompt anatomisi: rol + bağlam + görev + format',
          'Model seçimi ve Claude.ai arayüz turu',
          'İlk 5 iş promptu — canlı pratik',
        ],
      },
      {
        time: '10:45-12:15',
        title: 'Artifacts: Çalışır Çıktılar Üretmek',
        items: [
          'Normal yanıt vs Artifact farkı',
          'Belge Artifact: rapor, e-posta, şablon',
          'Kod Artifact: Excel formülünden Python scriptine',
          'İnteraktif Artifact: hesaplayıcı, form, mini panel',
          'Kendi işim için Artifact oluşturma — 30 dk pratik',
        ],
      },
      {
        time: '13:15-14:45',
        title: 'Projects: Claude\'u İş Yerinize Tanıtma',
        items: [
          'Sohbet vs Project — kalıcı bağlamın gücü',
          'Custom Instructions yazmak: rol, ton, sektör',
          'Dosya yükleme: katalog, politika, geçmiş raporlar',
          'Canlı demo: Sektörünüz için Project kurulumu',
          '5 hazır Project şablonu paylaşılacak',
        ],
      },
      {
        time: '15:00-16:30',
        title: 'Profesyonel Beceriler & İş Akışı',
        items: [
          'Stratejik düşünme: analiz, risk, karar desteği',
          'Yazılı iletişim: e-posta, rapor, sunum notu',
          'Toplantı öncesi hazırlık promptları',
          'Zor konuşmalara hazırlanma — şablonlar',
          'Kendi iş senaryonuz için özel workflow',
        ],
      },
      {
        time: '16:30-17:00',
        title: 'Kapanış & Aksiyon Planı',
        items: [
          'Bu hafta deneyeceğim 3 senaryo',
          'Prompt kütüphane PDF teslimi',
          'Soru & Cevap',
        ],
      },
    ],
    audienceRoles: [
      { emoji: '📊', title: 'Yöneticiler',        desc: 'Raporlama ve karar süreçlerini hızlandırmak isteyenler' },
      { emoji: '✍️', title: 'Uzmanlar',           desc: 'İçerik, analiz ve dokümantasyonu daha hızlı üretmek isteyenler' },
      { emoji: '🎯', title: 'Serbest Çalışanlar', desc: 'Müşteri iletişimi ve teklif sürecini kolaylaştırmak isteyenler' },
      { emoji: '📈', title: 'Girişimciler',       desc: 'AI ile rekabet avantajı elde etmek isteyenler' },
    ],
    includes: [
      '20+ hazır prompt ve şablon PDF',
      '5 hazır Project şablonu',
      'Eğitim materyalleri dijital paket',
      '30 gün e-posta desteği',
    ],
    note: 'Eğitim %100 Türkçe yapılmaktadır. Tüm prompt örnekleri Türkçe iş senaryolarına göre hazırlanmıştır.',

    en: {
      title:       'Individual Productivity with Claude',
      subtitle:    '1-day intensive hands-on training — start using Claude in your work life immediately',
      hook:        'Save 2 Hours Every Day. Really.',
      hookSub:     'Reports, emails, analysis, presentations... Reduce your routine workload to half an hour with Claude. You get 20+ ready-to-use workflows in this 1-day hands-on training.',
      description: 'This training is designed for individual professionals who want to integrate Claude into their work life. You spend an intense day full of real work scenarios from 9am to 5pm. You leave with a custom prompt library and ready-made templates tailored to your own workflow.',
      levelLabel:  'Beginner',
      prereqs:     'Claude account (free plan is sufficient)',
      outcomes: [
        'Set up Projects to introduce Claude to your workplace',
        'Work by editing, not starting from scratch — using Artifacts',
        '20+ ready-to-use prompts for email, reports, presentations, and analysis',
        'Data reading and interpretation skills — extracting insights from Excel',
        'Custom prompt library tailored to your sector',
        'Strategic thinking tools: SWOT, 5 Whys, decision matrix',
      ],
      modules: [
        {
          time: '09:00-10:30',
          title: 'Getting to Know Claude — Using It Properly',
          items: [
            'Claude vs ChatGPT — the real difference in work life',
            'Correct prompt anatomy: role + context + task + format',
            'Model selection and Claude.ai interface tour',
            'First 5 work prompts — live practice',
          ],
        },
        {
          time: '10:45-12:15',
          title: 'Artifacts: Producing Working Outputs',
          items: [
            'Difference between regular answer and Artifact',
            'Document Artifact: report, email, template',
            'Code Artifact: from Excel formula to Python script',
            'Interactive Artifact: calculator, form, mini dashboard',
            'Creating your own Artifact — 30 min practice',
          ],
        },
        {
          time: '13:15-14:45',
          title: 'Projects: Introducing Claude to Your Workplace',
          items: [
            'Conversation vs Project — the power of persistent context',
            'Writing Custom Instructions: role, tone, sector',
            'File upload: catalog, policies, past reports',
            'Live demo: Project setup for your sector',
            '5 ready Project templates will be shared',
          ],
        },
        {
          time: '15:00-16:30',
          title: 'Professional Skills & Workflow',
          items: [
            'Strategic thinking: analysis, risk, decision support',
            'Written communication: email, report, presentation note',
            'Pre-meeting preparation prompts',
            'Preparing for difficult conversations — templates',
            'Custom workflow for your own work scenario',
          ],
        },
        {
          time: '16:30-17:00',
          title: 'Closing & Action Plan',
          items: [
            '3 scenarios to try this week',
            'Prompt library PDF delivery',
            'Q&A',
          ],
        },
      ],
      audienceRoles: [
        { emoji: '📊', title: 'Managers',    desc: 'Those who want to speed up reporting and decision processes' },
        { emoji: '✍️', title: 'Specialists', desc: 'Those who want to produce content, analysis, and documentation faster' },
        { emoji: '🎯', title: 'Freelancers', desc: 'Those who want to simplify client communication and proposal processes' },
        { emoji: '📈', title: 'Entrepreneurs', desc: 'Those who want to gain competitive advantage with AI' },
      ],
      includes: [
        '20+ ready-to-use prompts and templates PDF',
        '5 ready Project templates',
        'Training materials digital package',
        '30-day email support',
      ],
      note: 'Training is conducted in Turkish. All prompt examples are adapted to Turkish business scenarios.',
    },
  },

  // ─── 03: TAKIM İÇİN CLAUDE ──────────────────────────────────────────────────
  {
    id:            '03',
    number:        '03',
    slug:          'takim-icin-claude',
    title:         'Takım İçin Claude — Kurumsal AI Entegrasyonu',
    subtitle:      '2 günlük kurumsal dönüşüm programı — tüm ekip birlikte öğrenip uygular',
    badge:         'Kurumsal',
    level:         'intermediate',
    levelLabel:    'Orta Seviye',
    journey:       'takim',
    hook:          'Ekibinizin Tamamı Aynı Dili Konuşsun.',
    hookSub:       'AI kullanan 1 kişi değil, AI ile çalışmayı içselleştirmiş bir takım olun. 2 günlük programda her departman kendi workflow\'unu kurar, test eder, devreye alır.',
    description:   'Bir kişinin AI kullanması rekabet avantajı değildir. Tümünün birlikte kullanması oyunu değiştirir. Bu program, 5-50 kişilik takımlar için tasarlanmıştır. Her departman kendi Claude workflow\'unu kurar; İK, pazarlama, satış, operasyon — hepsi pratik yaparak iş yerlerine döner.',
    duration:      '2 Gün (16 Saat) — Arka Arkaya veya Farklı Günler',
    durationShort: '2 Gün',
    format:        'Yüz yüze (Şirket ofisi veya kiralanan mekan) / Online Hibrit',
    audience:      'Departman müdürler, takım liderleri, tüm ekip',
    prereqs:       'Her katılımcı için Claude hesabı — ücretsiz plan yeterli',
    outcomes: [
      'Takım genelinde standart AI kullanım protokolu',
      'Her departmana özel workflow ve prompt kütüphane',
      'Custom Project şablonları şirket veri tabanına eklenir',
      'AI ile çalışırken gizlilik ve güvenlik çerçevesi',
      'Ölçümlenebilir verimlilik artışı — ilk 30 günde',
      '3 aylık takip ve destek planı',
    ],
    modules: [
      {
        time: 'Gün 1 — Sabah',
        title: 'Kurum İçin AI Çerçevesi',
        items: [
          'Neden AI transformasyonu bireysel değil kurumsal olmalı',
          'Claude\'u şirket sistemine entegre etme haritası',
          'Güvenlik, gizlilik ve veri politikası',
          'Departman bazlı kullanım haritası çalışması — katılımcılar kendi bölümleri için harita çıkarır',
        ],
      },
      {
        time: 'Gün 1 — Öğleden Sonra',
        title: 'Departman Workshop\'ları',
        items: [
          'İK grubu: ilan, mülakat, onboarding workflow\'ları',
          'Pazarlama grubu: içerik, kampanya, rapor workflow\'ları',
          'Satış grubu: teklif, müşteri iletişimi, CRM workflow\'ları',
          'Operasyon grubu: süreçler, dokümantasyon, analiz workflow\'ları',
        ],
      },
      {
        time: 'Gün 2 — Sabah',
        title: 'Project Kurulumu & Entegrasyon',
        items: [
          'Her departman için Project kurulumu — canlı yapım',
          'Şirket belgelerini Claude\'a yükleme',
          'Takım için ortak Custom Instructions yazmak',
          'Workflow test & iyileştirme turları',
        ],
      },
      {
        time: 'Gün 2 — Öğleden Sonra',
        title: 'Ölçüm, Süreklilik & Eylem Planı',
        items: [
          'AI kullanımını nasıl ölçersiniz — KPI\'lar',
          'Diğer takımlara yayma stratejisi',
          'Şirket içi AI kullanım kılavuzu hazırlamak',
          '90 günlük eylem planı — departman bazlı',
          'Kapanış: her departman kendi taahhüdünü sunar',
        ],
      },
    ],
    audienceRoles: [
      { emoji: '🏢', title: 'KOBİ Sahipleri',      desc: 'Tüm şirketi AI\'a hazırlamak isteyenler' },
      { emoji: '👥', title: 'Takım Liderleri',      desc: 'Ekibini rekabetçi tutmak isteyen yöneticiler' },
      { emoji: '🔧', title: 'Operasyon Müdürleri', desc: 'Süreç verimliliğini artırmak isteyenler' },
      { emoji: '📣', title: 'Pazarlama Takımları', desc: 'İçerik ve kampanya üretimini ölçeklendirmek isteyenler' },
    ],
    includes: [
      'Her departmana özel prompt paketi',
      'Şirket AI kullanım kılavuzu şablonu',
      'Project kurulum şablonları x5',
      '3 aylık e-posta desteği',
      'Opsiyonel: 1 ay sonra değerlendirme toplantısı',
    ],
    warning: 'Minimum 5, maksimum 50 katılımcı. 5\'ten az grup için Bireysel Verimlilik eğitimini öneririz.',
    note:    'Eğitim öncesinde şirketle keşif görüşmesi yapılır; içerik sektörünüze ve ekibinizin seviyesine göre uyarlanır.',

    en: {
      title:       'Claude for Teams — Corporate AI Integration',
      subtitle:    '2-day corporate transformation program — the entire team learns and applies together',
      hook:        'Let Your Entire Team Speak the Same Language.',
      hookSub:     'Don\'t be a team where 1 person uses AI — become a team that has internalized working with AI. In this 2-day program, every department builds, tests, and deploys their own workflow.',
      description: 'One person using AI is not a competitive advantage. Everyone using it together changes the game. This program is designed for teams of 5-50 people. Each department builds their own Claude workflow; HR, marketing, sales, operations — everyone practices and returns to their workplace ready to act.',
      levelLabel:  'Intermediate',
      prereqs:     'Claude account for each participant — free plan is sufficient',
      outcomes: [
        'Company-wide standard AI usage protocol',
        'Department-specific workflows and prompt libraries',
        'Custom Project templates added to the company knowledge base',
        'Privacy and security framework for working with AI',
        'Measurable productivity increase — within the first 30 days',
        '3-month follow-up and support plan',
      ],
      modules: [
        {
          time: 'Day 1 — Morning',
          title: 'AI Framework for the Organization',
          items: [
            'Why AI transformation should be organizational, not individual',
            'Roadmap for integrating Claude into company systems',
            'Security, privacy, and data policy',
            'Department-based usage mapping workshop — participants map their own departments',
          ],
        },
        {
          time: 'Day 1 — Afternoon',
          title: 'Department Workshops',
          items: [
            'HR group: job posting, interview, onboarding workflows',
            'Marketing group: content, campaign, report workflows',
            'Sales group: proposal, client communication, CRM workflows',
            'Operations group: processes, documentation, analysis workflows',
          ],
        },
        {
          time: 'Day 2 — Morning',
          title: 'Project Setup & Integration',
          items: [
            'Project setup for each department — live building',
            'Uploading company documents to Claude',
            'Writing shared Custom Instructions for the team',
            'Workflow testing & improvement rounds',
          ],
        },
        {
          time: 'Day 2 — Afternoon',
          title: 'Measurement, Continuity & Action Plan',
          items: [
            'How to measure AI usage — KPIs',
            'Strategy for spreading to other teams',
            'Preparing an AI usage guide for the company',
            '90-day action plan — by department',
            'Closing: each department presents their commitment',
          ],
        },
      ],
      audienceRoles: [
        { emoji: '🏢', title: 'SME Owners',          desc: 'Those who want to prepare their entire company for AI' },
        { emoji: '👥', title: 'Team Leaders',         desc: 'Managers who want to keep their team competitive' },
        { emoji: '🔧', title: 'Operations Managers',  desc: 'Those who want to increase process efficiency' },
        { emoji: '📣', title: 'Marketing Teams',      desc: 'Those who want to scale content and campaign production' },
      ],
      includes: [
        'Department-specific prompt package',
        'Company AI usage guide template',
        'Project setup templates x5',
        '3-month email support',
        'Optional: evaluation meeting 1 month later',
      ],
      warning: 'Minimum 5, maximum 50 participants. For groups smaller than 5, we recommend the Individual Productivity training.',
      note:    'A discovery meeting with the company is held before the training; content is adapted to your sector and team level.',
    },
  },

  // ─── 09: STRATEJİK DÖNÜŞÜM KOÇLUĞU ─────────────────────────────────────────
  {
    id:            '09',
    number:        '09',
    slug:          'ai-ile-stratejik-donusum',
    title:         'AI ile Stratejik Dönüşüm Koçluğu',
    subtitle:      '8 haftalık birebir koçluk — iş modelinizi ve kariyerinizi AI ile yeniden tasarlayın',
    badge:         'Premium',
    level:         'advanced',
    levelLabel:    'İleri Seviye',
    journey:       'donusum',
    hook:          'Sadece Verimli Değil. Yeniden Tasarlanmış.',
    hookSub:       '8 haftada iş modelinizi, gelir akışınızı ve kariyer rotanızı AI ile yeniden tanımlayın. Bire bir koçluk + uygulamalı workshop serisi.',
    description:   'Bu program, iş hayatında radikal değişim yaşamak isteyen liderler ve girişimciler için tasarlanmıştır. Sadece araçları öğretmiyoruz — iş modelinizi ve kariyer rotanızı birlikte yeniden tasarlıyoruz. 8 haftada stratejik AI entegrasyonu, gelir modeli yenilemesi ve kişisel marka güçlendirilmesi.',
    duration:      '8 Hafta — Haftada 1 Bire Bir Seans (60 dk) + Grup Çalışması',
    durationShort: '8 Hafta',
    format:        'Online (Zoom) — Haftada 1 Özel Seans + Haftada 1 Grup Çalışması',
    audience:      'Üst düzey yöneticiler, girişimciler, kariyer değişimi yapanlar',
    prereqs:       'En az 3 yıl profesyonel deneyim, Claude Pro hesabı önerilir',
    outcomes: [
      'Kişisel AI kullanım stratejisi ve yol haritası',
      'İş modelinizde AI ile oluşturulan yeni gelir akışları',
      'Uzmanlık alanınıza özgü AI araçları ve workflow paketi',
      'LinkedIn ve kişisel marka stratejisi — AI ile güçlendirilmiş',
      'Claude ile üretilmiş içerik, teklif ve sunum materyalleri',
      '8 haftanın sonunda ölçümlenebilir iş sonuçları',
    ],
    modules: [
      {
        time: 'Hafta 1-2',
        title: 'Keşif & Strateji',
        items: [
          'Mevcut iş durumu analizi ve AI hazırlık değerlendirmesi',
          'Kişisel ve profesyonel hedef belirleme',
          'AI ile güçlendirilecek 3 öncelik alanı tanımlama',
          'Rakip analizi: sektörde AI nasıl kullanılıyor?',
        ],
      },
      {
        time: 'Hafta 3-4',
        title: 'Araçlar & Workflow Kurulumu',
        items: [
          'Kişisel Claude ekosistemi kurulumu',
          'Sektöre özel Project ve Custom Instructions',
          'Günlük ve haftalık AI destekli iş rutini tasarımı',
          'İlk somut çıktılar: içerik, teklif veya rapor',
        ],
      },
      {
        time: 'Hafta 5-6',
        title: 'İş Modeli & Gelir Stratejisi',
        items: [
          'AI ile yeni hizmet / ürün fırsatlarını keşfetme',
          'Fiyatlandırma stratejisi yenilemesi',
          'Müşteri teklif ve satış sürecini iyileştirme',
          'İlk 90 günde hedef gelir simülasyonu',
        ],
      },
      {
        time: 'Hafta 7-8',
        title: 'Marka, Otorite & Kalıcılık',
        items: [
          'LinkedIn içerik stratejisi — AI destekli',
          'Konuşmacılık ve uzmanlık konumlandırması',
          'Ölçeklenebilir sistem kurma — kopyalanamaz avantaj yaratma',
          'Program değerlendirmesi ve 6 aylık yol haritası',
        ],
      },
    ],
    audienceRoles: [
      { emoji: '🎯', title: 'Üst Düzey Yöneticiler', desc: 'Kariyerini AI ile güçlendirecek liderler' },
      { emoji: '🚀', title: 'Girişimciler',           desc: 'İş modelini AI ile yeniden tasarlamak isteyenler' },
      { emoji: '🔄', title: 'Kariyer Değiştirenler',  desc: 'Yeni alana geçerken AI\'i avantaja çevirmek isteyenler' },
      { emoji: '💡', title: 'Danışmanlar',            desc: 'Müşterilerine AI danışmanlığı sunmak isteyenler' },
    ],
    includes: [
      '8 bire bir koçluk seansı (60 dk)',
      '8 grup çalışma seansı (45 dk)',
      'Kişisel AI araçları ve workflow paketi',
      'LinkedIn içerik takvimi ve şablon seti',
      'Teklif ve sunum şablonları',
      '3 ay koçluk sonrası e-posta desteği',
    ],
    note: 'Program maksimum 6 kişilik gruplarla yürütülmektedir. Ön keşif görüşmesi zorunludur — programa uygun olup olmadığınızı birlikte değerlendiriyoruz.',

    en: {
      title:       'Strategic Transformation Coaching with AI',
      subtitle:    '8-week 1-on-1 coaching — redesign your business model and career with AI',
      hook:        'Not Just Efficient. Redesigned.',
      hookSub:     'Redefine your business model, revenue streams, and career path with AI in 8 weeks. One-on-one coaching + applied workshop series.',
      description: 'This program is designed for leaders and entrepreneurs who want to experience radical change in their business life. We don\'t just teach tools — we redesign your business model and career path together. 8 weeks of strategic AI integration, revenue model renewal, and personal brand strengthening.',
      levelLabel:  'Advanced',
      prereqs:     'At least 3 years of professional experience, Claude Pro account recommended',
      outcomes: [
        'Personal AI usage strategy and roadmap',
        'New revenue streams created with AI in your business model',
        'AI tools and workflow package specific to your area of expertise',
        'LinkedIn and personal brand strategy — AI-powered',
        'Content, proposals, and presentation materials produced with Claude',
        'Measurable business results at the end of 8 weeks',
      ],
      modules: [
        {
          time: 'Weeks 1-2',
          title: 'Discovery & Strategy',
          items: [
            'Current business situation analysis and AI readiness assessment',
            'Setting personal and professional goals',
            'Identifying 3 priority areas to be strengthened with AI',
            'Competitive analysis: how is AI used in the sector?',
          ],
        },
        {
          time: 'Weeks 3-4',
          title: 'Tools & Workflow Setup',
          items: [
            'Personal Claude ecosystem setup',
            'Sector-specific Project and Custom Instructions',
            'Designing AI-supported daily and weekly work routine',
            'First concrete outputs: content, proposal, or report',
          ],
        },
        {
          time: 'Weeks 5-6',
          title: 'Business Model & Revenue Strategy',
          items: [
            'Discovering new service/product opportunities with AI',
            'Pricing strategy renewal',
            'Improving client proposal and sales process',
            'Target revenue simulation in first 90 days',
          ],
        },
        {
          time: 'Weeks 7-8',
          title: 'Brand, Authority & Sustainability',
          items: [
            'LinkedIn content strategy — AI supported',
            'Speaking and expertise positioning',
            'Building a scalable system — creating uncopyable advantage',
            'Program evaluation and 6-month roadmap',
          ],
        },
      ],
      audienceRoles: [
        { emoji: '🎯', title: 'Senior Executives',  desc: 'Leaders who will strengthen their career with AI' },
        { emoji: '🚀', title: 'Entrepreneurs',       desc: 'Those who want to redesign their business model with AI' },
        { emoji: '🔄', title: 'Career Changers',     desc: 'Transitioning to a new field and turning AI into an advantage' },
        { emoji: '💡', title: 'Consultants',         desc: 'Those who want to offer AI consulting to their clients' },
      ],
      includes: [
        '8 one-on-one coaching sessions (60 min)',
        '8 group workshop sessions (45 min)',
        'Personal AI tools and workflow package',
        'LinkedIn content calendar and template set',
        'Proposal and presentation templates',
        '3 months post-coaching email support',
      ],
      note: 'The program runs with a maximum of 6 people. A preliminary discovery meeting is required — we evaluate together whether it is the right fit.',
    },
  },
];

export const FEATURED_IDS = ['02', '03', '09'] as const;

export const featuredTrainings = trainings.filter((t) =>
  (FEATURED_IDS as readonly string[]).includes(t.id)
);

export const getTrainingBySlug = (slug: string): Training | undefined =>
  trainings.find((t) => t.slug === slug);
