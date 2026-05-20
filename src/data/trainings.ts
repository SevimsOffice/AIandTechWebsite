// src/data/trainings.ts  — AI&TECH Egitim Verileri (3 Program)
// ─────────────────────────────────────────────────────────────

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

export interface Training {
  id:           string;
  number:       string;
  slug:         string;
  title:        string;
  subtitle:     string;
  badge?:       string;
  level:        Level;
  levelLabel:   string;
  journey:      string;
  hook:         string;
  hookSub:      string;
  description:  string;
  duration:     string;
  durationShort:string;
  format:       string;
  audience:     string;
  prereqs:      string;
  outcomes:     string[];
  modules:      TrainingModule[];
  audienceRoles:AudienceRole[];
  includes:     string[];
  warning?:     string;
  note?:        string;
}

export const journeyConfig: Record<string, { icon: string; label: string; desc: string }> = {
  all:      { icon: '✦',  label: 'Tum Programlar', desc: 'Hepsini gor' },
  bireysel: { icon: '👤', label: 'Bireysel',        desc: 'Kendi hizinda ogren' },
  takim:    { icon: '🏢', label: 'Takim & Kurum',   desc: 'Ekibinle donusum' },
  donusum:  { icon: '🚀', label: 'Derin Donusum',   desc: 'Kapsamli cozum' },
};

export const trainings: Training[] = [
  {
    id:            '02',
    number:        '02',
    slug:          'claude-bireysel-verimlilik',
    title:         'Claude ile Bireysel Verimlilik',
    subtitle:      '1 gunluk yogun pratik egitim — is hayatinizda Claude\'u hemen kullanin',
    badge:         'En Populer',
    level:         'starter',
    levelLabel:    'Baslangic',
    journey:       'bireysel',
    hook:          'Her Gun 2 Saat Kazanin. Gercekten.',
    hookSub:       'Rapor, e-posta, analiz, sunum... Claude ile rutin is yukunu yarin yarim saate indirin. 1 gunluk uygulamali egitimde 20+ hazir workflow aliyorsunuz.',
    description:   'Bu egitim, Claude\'u is hayatina entegre etmek isteyen bireysel profesyoneller icin tasarlanmistir. Sabah 9\'dan aksam 5\'e kadar, gercek is senaryolariyla dolu yogun bir gun geciriyorsunuz. Egitim sonunda kendi is akisiniza ozel prompt kutuphane ve hazir sablonlarla ayriliyorsunuz.',
    duration:      '1 Gun (8 Saat) — 09:00-17:00',
    durationShort: '1 Gun',
    format:        'Online veya Yuz yuze (Istanbul / Bursa)',
    audience:      'Yoneticiler, uzmanlar, serbest calisanlar',
    prereqs:       'Claude hesabi (ucretsiz plan yeterli)',
    outcomes: [
      'Projects ozelligini kurarak Claude\'u is yerinize tanistiriyorsunuz',
      'Artifacts ile sifirdan degil, duzenleyerek calisiyorsunuz',
      'E-posta, rapor, sunum, analiz icin 20+ hazir prompt',
      'Veri okuma ve yorum becerisi — Excel\'den hikaye cikarma',
      'Kendi sektorunuze ozel prompt kutuphane',
      'Stratejik dusunme aracilari: SWOT, 5 Neden, karar matrisi',
    ],
    modules: [
      {
        time: '09:00-10:30',
        title: 'Claude\'u Taniyalim — Duzgun Kullanim',
        items: [
          'Claude vs ChatGPT — is hayatinda gercek fark',
          'Dogru prompt anatomisi: rol + baglan + gorev + format',
          'Model secimi ve Claude.ai arayuz turu',
          'Ilk 5 is promptu — canli pratik',
        ],
      },
      {
        time: '10:45-12:15',
        title: 'Artifacts: Calisir Ciktilar Uretmek',
        items: [
          'Normal yanit vs Artifact farki',
          'Belge Artifact: rapor, e-posta, sablon',
          'Kod Artifact: Excel formulunden Python scriptine',
          'Interaktif Artifact: hesaplayici, form, mini panel',
          'Kendi isim icin Artifact olusturma — 30 dk pratik',
        ],
      },
      {
        time: '13:15-14:45',
        title: 'Projects: Claude\'u Is Yerinize Tanitma',
        items: [
          'Sohbet vs Project — kalici baglamın gucu',
          'Custom Instructions yazmak: rol, ton, sektor',
          'Dosya yukleme: katalog, politika, gecmis raporlar',
          'Canli demo: Sektorunuz icin Project kurulumu',
          '5 hazir Project sablonu paylasilacak',
        ],
      },
      {
        time: '15:00-16:30',
        title: 'Profesyonel Beceriler & Is Akisi',
        items: [
          'Stratejik dusunme: analiz, risk, karar destegi',
          'Yazili iletisim: e-posta, rapor, sunum notu',
          'Toplanti oncesi hazirlik promptlari',
          'Zor konusmalara hazirlanma — sablonlar',
          'Kendi is senaryonuz icin ozel workflow',
        ],
      },
      {
        time: '16:30-17:00',
        title: 'Kapaniş & Aksiyon Plani',
        items: [
          'Bu hafta deneyecegim 3 senaryo',
          'Prompt kutuphane PDF teslimi',
          'Soru & Cevap',
        ],
      },
    ],
    audienceRoles: [
      { emoji: '📊', title: 'Yoneticiler',         desc: 'Raporlama ve karar sureclerini hizlandirmak isteyenler' },
      { emoji: '✍️', title: 'Uzmanlar',            desc: 'Icerik, analiz ve dokumantasyonu daha hizli uretmek isteyenler' },
      { emoji: '🎯', title: 'Serbest Calisanlar',  desc: 'Musteri iletisimi ve teklif surecini kolaylastirmak isteyenler' },
      { emoji: '📈', title: 'Girisimciler',        desc: 'AI ile rekabet avantaji elde etmek isteyenler' },
    ],
    includes: [
      '20+ hazir prompt ve sablon PDF',
      '5 hazir Project sablonu',
      'Egitim materyalleri dijital paket',
      '30 gun e-posta destegi',
    ],
    note: 'Egitim %100 Turkce yapilmaktadir. Tum prompt ornekleri Turkce is senaryolarina gore hazirlanmistir.',
  },

  {
    id:            '03',
    number:        '03',
    slug:          'takim-icin-claude',
    title:         'Takim Icin Claude — Kurumsal AI Entegrasyonu',
    subtitle:      '2 gunluk kurumsal donusum programi — tum ekip birlikte ogrenip uygular',
    badge:         'Kurumsal',
    level:         'intermediate',
    levelLabel:    'Orta Seviye',
    journey:       'takim',
    hook:          'Ekibinizin Tami Tamina Ayni Dili Konussun.',
    hookSub:       'AI kullanan 1 kisi degil, AI ile calismayi icsellestiris bir takim olun. 2 gunluk programda her departman kendi workflow\'unu kurar, test eder, devreye alir.',
    description:   'Bir kisinin AI kullanmasi rekabet avantaji degildir. Tumun birlikte kullanmasi oyunu degistirir. Bu program, 5-50 kisilik takimlar icin tasarlanmistir. Her departman kendi Claude workflow\'unu kurar; IK, pazarlama, satis, operasyon — hepsi pratik yaparak ogrenip is yerlerine doner.',
    duration:      '2 Gun (16 Saat) — Arka Arkaya veya Farkli Gunler',
    durationShort: '2 Gun',
    format:        'Yuz yuze (Sirket ofisi veya kiralanan mekan) / Online Hibrit',
    audience:      'Departman mudurler, takim liderleri, tum ekip',
    prereqs:       'Her katilimci icin Claude hesabi — ucretsiz plan yeterli',
    outcomes: [
      'Takim genelinde standart AI kullanim protokolu',
      'Her departmana ozel workflow ve prompt kutuphane',
      'Custom GPT / Project sablonlari sirket veritabanina eklenir',
      'AI ile calisirken gizlilik ve guvenlik cercevesi',
      'Olcumlenebilir verimlilik artisi — ilk 30 gunde',
      '3 aylik takip ve destek plani',
    ],
    modules: [
      {
        time: 'Gun 1 — Sabah',
        title: 'Kurum Icin AI Cercevesi',
        items: [
          'Neden AI transformasyonu bireysel degil kurumsal olmalı',
          'Claude\'u sirket sistemine entegre etme haritasi',
          'Guvenlik, gizlilik ve veri politikasi',
          'Departman bazli kullanim haritasi calismasikatilimcilar kendi bolumleri icin harita cikar',
        ],
      },
      {
        time: 'Gun 1 — Ogleden Sonra',
        title: 'Departman Workshop\'lari',
        items: [
          'IK grubu: ilan, mulakat, onboarding workflow\'lari',
          'Pazarlama grubu: icerik, kampanya, rapor workflow\'lari',
          'Satis grubu: teklif, musteri iletisimi, CRM workflow\'lari',
          'Operasyon grubu: surecler, dokumantasyon, analiz workflow\'lari',
        ],
      },
      {
        time: 'Gun 2 — Sabah',
        title: 'Project Kurulumu & Entegrasyon',
        items: [
          'Her departman icin Project kurulumu — canli yapim',
          'Sirket belgelerini Claude\'a yukleme',
          'Takim icin ortak Custom Instructions yazmak',
          'Workflow test & iyilestirme turları',
        ],
      },
      {
        time: 'Gun 2 — Ogleden Sonra',
        title: 'Olcum, Sureklilik & Eylem Plani',
        items: [
          'AI kullanimini nasil olcersiniz — KPI\'lar',
          'Diger takimlara yayma stratejisi',
          'Sirket icin AI kullanim kilavuzu hazirlamak',
          '90 gunluk eylem plani — departman bazli',
          'Kapaniş: her departman kendi taahhudunu sunar',
        ],
      },
    ],
    audienceRoles: [
      { emoji: '🏢', title: 'KOBİ Sahipleri',       desc: 'Tum sirketi AI\'a hazirlamak isteyenler' },
      { emoji: '👥', title: 'Takim Liderleri',       desc: 'Ekibini rekabetci tutmak isteyen yoneticiler' },
      { emoji: '🔧', title: 'Operasyon Mudurleri',   desc: 'Surec verimlilgini artirmak isteyenler' },
      { emoji: '📣', title: 'Pazarlama Takimlari',   desc: 'Icerik ve kampanya uretimini olceklendirmek isteyenler' },
    ],
    includes: [
      'Her departmana ozel prompt paketi',
      'Sirket AI kullanim kilavuzu sablonu',
      'Project kurulum sablonlari x5',
      '3 aylik e-posta destegi',
      'Opsiyonel: 1 ay sonra degerlendirme toplantisi',
    ],
    warning: 'Minimum 5, maksimum 50 katilimci. 5\'ten az grup icin Bireysel Verimlilik egitimini oneririz.',
    note:    'Egitim oncesinde sirketle keşif gorusmesi yapilir; icerik sektorunuze ve ekibinizin seviyesine gore uyarlanir.',
  },

  {
    id:            '09',
    number:        '09',
    slug:          'ai-ile-stratejik-donusum',
    title:         'AI ile Stratejik Donusum Koçlugu',
    subtitle:      '8 haftalık birebir koçluk — is modelinizi ve kariyerinizi AI ile yeniden tasarlayin',
    badge:         'Premium',
    level:         'advanced',
    levelLabel:    'İleri Seviye',
    journey:       'donusum',
    hook:          'Sadece Verimli Degil. Yeniden Tasarlanmis.',
    hookSub:       '8 haftada is modelinizi, gelir akisinizi ve kariyer rotanizi AI ile yeniden tanimlayin. Bire bir koçluk + uygulamali workshop serisi.',
    description:   'Bu program, is hayatinda radikal degisim yasamak isteyen liderler ve girisimciler icin tasarlanmistir. Sadece araclari ogretmiyoruz — is modelinizi ve kariyer rotanizi birlikte yeniden tasarliyoruz. 8 haftada stratejik AI entegrasyonu, gelir modeli yenilemesi ve kisisel marka guclendirilmesi.',
    duration:      '8 Hafta — Haftada 1 Bire Bir Seans (60 dk) + Grup Calismasi',
    durationShort: '8 Hafta',
    format:        'Online (Zoom) — Haftada 1 Ozel Seans + Haftada 1 Grup Calismasi',
    audience:      'Ust duzey yoneticiler, girisimciler, kariyer degisimi yapanlar',
    prereqs:       'En az 3 yil profesyonel deneyim, Claude Pro hesabi onerilir',
    outcomes: [
      'Kisisel AI kullanim stratejisi ve yol haritasi',
      'Is modelinizde AI ile olusturulan yeni gelir akislari',
      'Uzmanlık alanınıza ozgu AI araclari ve workflow paketi',
      'LinkedIn ve kisisel marka stratejisi — AI ile guclendirilmis',
      'Claude ile uretilmis icerlik, teklif ve sunum materyalleri',
      '8 haftanin sonunda olcumlenebilir is sonuclari',
    ],
    modules: [
      {
        time: 'Hafta 1-2',
        title: 'Keşif & Strateji',
        items: [
          'Mevcut is durumu analizi ve AI hazirlik degerlendirmesi',
          'Kisisel ve profesyonel hedef belirleme',
          'AI ile guclendirilecek 3 oncelik alani tanimlama',
          'Rakip analizi: sektorde AI nasil kullaniliyor?',
        ],
      },
      {
        time: 'Hafta 3-4',
        title: 'Araçlar & Workflow Kurulumu',
        items: [
          'Kisisel Claude ekosistemi kurulumu',
          'Sektore ozel Project ve Custom Instructions',
          'Gunluk ve haftalik AI destekli is rutini tasarimi',
          'Ilk somut ciktilar: icerik, teklif veya rapor',
        ],
      },
      {
        time: 'Hafta 5-6',
        title: 'Is Modeli & Gelir Stratejisi',
        items: [
          'AI ile yeni hizmet / urun firsatlarini kesfetme',
          'Fiyatlandirma stratejisi yenilemesi',
          'Musteri teklif ve satisinitm sureci iyilestirme',
          'Ilk 90 gunde hedef gelir simülasyonu',
        ],
      },
      {
        time: 'Hafta 7-8',
        title: 'Marka, Otorite & Kalıcilik',
        items: [
          'LinkedIn icerlik stratejisi — AI destekli',
          'Konusmacilik ve uzmanlık konumlandirmasi',
          'Olceklenebilir sistem kurma — kopyalanamaz dezavantaj yaratma',
          'Program degerlendirmesi ve 6 aylik yol haritasi',
        ],
      },
    ],
    audienceRoles: [
      { emoji: '🎯', title: 'Ust Duzey Yoneticiler',  desc: 'Kariyerini AI ile guclendirecek liderler' },
      { emoji: '🚀', title: 'Girisimciler',            desc: 'Is modelini AI ile yeniden tasarlamak isteyenler' },
      { emoji: '🔄', title: 'Kariyer Degistirenceler', desc: 'Yeni alana gecerken AI\'i avantaja cevirmek isteyenler' },
      { emoji: '💡', title: 'Danismanlar',             desc: 'Musterilerine AI danismanligi sunmak isteyenler' },
    ],
    includes: [
      '8 bire bir koçluk seansı (60 dk)',
      '8 grup calisma seansı (45 dk)',
      'Kisisel AI araclari ve workflow paketi',
      'LinkedIn icerik takvimi ve sablon seti',
      'Teklif ve sunum sablonlari',
      '3 ay koçluk sonrasi e-posta destegi',
    ],
    note: 'Program maksimum 6 kisilik gruplarla yurutulmektedir. On keşif gorusmesi zorunludur — programa uygun olup olmadiginizi birlikte degerlendiriyoruz.',
  },
];

export const FEATURED_IDS = ['02', '03', '09'] as const;

export const featuredTrainings = trainings.filter((t) =>
  (FEATURED_IDS as readonly string[]).includes(t.id)
);

export const getTrainingBySlug = (slug: string): Training | undefined =>
  trainings.find((t) => t.slug === slug);
