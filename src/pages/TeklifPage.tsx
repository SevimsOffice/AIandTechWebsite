import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, X, Calendar, Mail, Phone, ArrowRight } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/sevim/ai-for-business-discovery-call';
const EMAIL = 'sevim@aiandtech.cloud';
const PHONE = '+90 532 590 1861';

const TeklifPage = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';

  const t = {
    badge: isTr ? 'Hizmet Teklifi · 2026' : 'Service Proposal · 2026',
    title: isTr
      ? 'Kurumsal Yapay Zeka Eğitim ve Dönüşüm Programı'
      : 'Corporate AI Training & Transformation Program',
    lead: isTr
      ? 'İki kalemden oluşur: ekibin yapay zekayı günlük işine yerleştirmesini sağlayan bir günlük uygulamalı eğitim ve öğrenilenin gerçek iş çıktısına dönüşmesini takip eden dört haftalık dönüşüm programı.'
      : 'Two components: a one-day hands-on training that embeds AI into your team\'s daily work, and a four-week transformation program that turns what was learned into real business output.',
    validity: isTr ? 'Teklif geçerliliği: 30 gün' : 'Proposal validity: 30 days',
    preparedBy: isTr ? 'Hazırlayan' : 'Prepared by',

    // Pricing
    itemsTitle: isTr ? 'Teklifin Kapsamı' : 'Scope of the Proposal',
    itemsNote: isTr
      ? 'İki kalem birbirinden bağımsız olarak da tercih edilebilir; toplam bedel seçilen kalemlere göre değişir.'
      : 'The two components can also be chosen independently; the total depends on which are selected.',
    item1Label: isTr ? 'KALEM 01' : 'ITEM 01',
    item1Name: isTr ? 'Kurumsal Yapay Zeka Eğitimi' : 'Corporate AI Training',
    item1Scope: isTr
      ? 'Bir tam gün · yüz yüze · uygulamalı · 8–12 katılımcı · 10:00–16:00'
      : 'One full day · on-site · hands-on · 8–12 participants · 10:00–16:00',
    item1Price: isTr ? '50.000 TL + KDV' : '50,000 TL + VAT',
    item1PriceNote: isTr ? '+ Konaklama ve yol' : '+ Accommodation and travel',
    item2Label: isTr ? 'KALEM 02' : 'ITEM 02',
    item2Name: isTr ? 'Sürdürülebilir Dönüşüm Programı' : 'Sustainable Transformation Program',
    item2Scope: isTr
      ? '4 hafta · haftada 1 online görüşme · 60 dk · müfredata bağlı takip'
      : '4 weeks · one online session per week · 60 min · curriculum-based follow-up',
    item2Price: isTr ? '10.000 TL + KDV' : '10,000 TL + VAT',
    item2PriceNote: isTr ? 'Eğitimden sonra başlar' : 'Starts after the training',

    // Why both
    whyTitle: isTr ? 'Neden Bu İki Kalem Birlikte' : 'Why These Two Together',
    whyLead: isTr
      ? 'Kurumsal yapay zeka eğitimlerinin büyük çoğunluğu tek seferliktir. Eğitim verilir, ekip heyecanlanır, birkaç hafta sonra herkes eski yöntemine döner. Sebep bilgi eksikliği değil, takip eksikliğidir.'
      : 'Most corporate AI trainings are one-off events. The training happens, the team gets excited, and a few weeks later everyone is back to their old method. The cause is not a lack of knowledge — it is a lack of follow-up.',
    problems: [
      {
        h: isTr ? 'Eğitim tek başına yetmiyor' : 'Training alone isn\'t enough',
        p: isTr
          ? 'Yeni bir aracı öğrenmek ile onu günlük işe yerleştirmek farklı iki iştir. İkincisi rehberlik ister.'
          : 'Learning a new tool and embedding it into daily work are two different jobs. The second one needs guidance.',
      },
      {
        h: isTr ? 'Fikirler kayboluyor' : 'Ideas get lost',
        p: isTr
          ? 'Eğitimde ortaya çıkan onlarca fikir hiçbir yere yazılmadığı için bir hafta içinde unutulur.'
          : 'The dozens of ideas that surface during training are never written down, so they are forgotten within a week.',
      },
      {
        h: isTr ? 'Kimse sahiplenmiyor' : 'Nobody owns it',
        p: isTr
          ? 'Herkesin sorumlu olduğu iş, kimsenin sorumlu olmadığı iştir. Departman bazında bir isim gerekir.'
          : 'Work everyone is responsible for is work nobody is responsible for. Each department needs a name.',
      },
      {
        h: isTr ? 'Sonuç ölçülmüyor' : 'Results aren\'t measured',
        p: isTr
          ? 'Kazanım rakama dönüşmediğinde, yatırımın karşılığı yönetime anlatılamaz.'
          : 'When the gain never becomes a number, the return on investment cannot be shown to management.',
      },
    ],

    // Item 01 detail
    d1Title: isTr ? 'Kalem 01 — Kurumsal Yapay Zeka Eğitimi' : 'Item 01 — Corporate AI Training',
    d1Lead: isTr
      ? 'Bir tam günlük, yüz yüze ve tamamen uygulamalı eğitim. Katılımcılar kendi bilgisayarlarıyla katılır; gün boyunca kendi gerçek işleri üzerinden çalışılır.'
      : 'A full-day, on-site and entirely hands-on training. Participants bring their own laptops and work on their own real tasks throughout the day.',
    d1Facts: [
      [isTr ? 'Süre' : 'Duration', isTr ? '1 tam gün · 10:00–16:00 (1 saat mola)' : '1 full day · 10:00–16:00 (1 hour break)'],
      [isTr ? 'Net eğitim' : 'Net training time', isTr ? '5 saat' : '5 hours'],
      [isTr ? 'Katılımcı' : 'Participants', isTr ? '8–12 kişi' : '8–12 people'],
      [isTr ? 'Yer' : 'Location', isTr ? 'Firma merkezinde, yüz yüze' : 'At your offices, on-site'],
    ],
    dayFlowTitle: isTr ? 'Gün Akışı' : 'Agenda',
    dayFlow: [
      ['10:00 – 11:30', isTr
        ? 'Yapay zeka araçları ve modeller — hangi işte hangi araç kullanılır'
        : 'AI tools and models — which tool fits which job'],
      ['11:30 – 13:00', isTr
        ? 'Departman senaryoları — katılımcıların kendi süreçleri üzerinden uygulama'
        : 'Department scenarios — hands-on work on participants\' own processes'],
      ['13:00 – 14:00', isTr ? 'Mola' : 'Break'],
      ['14:00 – 15:15', isTr
        ? 'İleri uygulama — tekrar eden işlerin yapılandırılması, kalıcı çalışma düzeni'
        : 'Advanced practice — structuring repetitive work, building a lasting routine'],
      ['15:15 – 16:00', isTr
        ? 'Fırsat tespiti ve kapanış — her departmanın öncelik listesini çıkarması'
        : 'Opportunity mapping and close — each department builds its own priority list'],
    ],
    d1ContentNote: isTr
      ? 'Eğitim içeriği hazır bir müfredat değildir. Eğitim öncesi kısa bir ihtiyaç görüşmesiyle, departman bazında ve firmanın gerçek süreçleri temel alınarak oluşturulur.'
      : 'The content is not an off-the-shelf curriculum. It is built per department in a short needs call beforehand, based on your company\'s actual processes.',

    // Item 02 detail
    d2Title: isTr ? 'Kalem 02 — Sürdürülebilir Dönüşüm Programı' : 'Item 02 — Sustainable Transformation Program',
    d2Lead: isTr
      ? 'Eğitimden sonra başlayan dört haftalık takip programı. Her hafta bir online görüşme yapılır; görüşmeye AI and Tech temsilcisi ile firmanın belirlediği Yapay Zeka Elçileri katılır. Görüşmeler serbest sohbet değil, belirli bir müfredat üzerinden ilerler.'
      : 'A four-week follow-up program that starts after the training. One online session per week, attended by AI and Tech and your company\'s designated AI Ambassadors. The sessions are not open-ended chats — they follow a set curriculum.',
    elciTitle: isTr ? 'Yapay Zeka Elçisi modeli' : 'The AI Ambassador model',
    elciBody: isTr
      ? 'Her departman kendisini temsil edecek bir kişi belirler. Teknik uzman olması gerekmez — işini bilmesi ve gelişime açık olması yeterlidir. Tek gerçek zaman taahhüdü haftada 1 saattir. Departman başına 1 kişi (büyük departmanlarda 2).'
      : 'Each department designates one person to represent it. No technical expertise required — knowing the work and being open to change is enough. The only real time commitment is 1 hour per week. One person per department (two in large ones).',
    weeksTitle: isTr ? 'Haftalık Müfredat' : 'Weekly Curriculum',
    weeks: [
      [isTr ? 'Hafta 1' : 'Week 1', isTr ? 'Kurulum' : 'Setup', isTr
        ? 'Elçilerin belirlenmesi, Proje Takip Sisteminin kurulması, Fikir Girişi Formunun dağıtılması, ilk süreç tarama görevleri.'
        : 'Designating ambassadors, setting up the Project Tracker, distributing the Idea Intake Form, first process-scan tasks.'],
      [isTr ? 'Hafta 2' : 'Week 2', isTr ? 'Önceliklendirme' : 'Prioritization', isTr
        ? 'Toplanan fikirlerin sisteme işlenmesi; değer, fizibilite ve stratejik uyum kriterlerine göre puanlanması.'
        : 'Logging collected ideas and scoring them on value, feasibility and strategic fit.'],
      [isTr ? 'Hafta 3' : 'Week 3', isTr ? 'Görevlendirme' : 'Assignment', isTr
        ? 'Öncelikli projelerin sorumlularına atanması, aksiyon planlarının yazılması, engellerin birlikte çözülmesi.'
        : 'Assigning priority projects to owners, writing action plans, solving blockers together.'],
      [isTr ? 'Hafta 4' : 'Week 4', isTr ? 'Ölçüm ve devir' : 'Measurement & handover', isTr
        ? 'Proje durumlarının gözden geçirilmesi, kazanılan zamanın rakama dönüştürülmesi, sonraki dönemin planlanması.'
        : 'Reviewing project status, converting time saved into numbers, planning the next period.'],
    ],

    // Deliverables
    delTitle: isTr ? 'Ne Teslim Ediliyor' : 'What Gets Delivered',
    deliverables: [
      [isTr ? 'Proje Takip Sistemi' : 'Project Tracker', isTr
        ? 'Tüm fikir ve projelerin toplandığı, önceliklendirildiği ve durumunun izlendiği canlı çalışma dosyası.'
        : 'A live working file where all ideas and projects are collected, prioritized and tracked.'],
      [isTr ? 'Yapay Zeka Elçisi El Kitabı' : 'AI Ambassador Handbook', isTr
        ? 'Rol tanımı, önceliklendirme yöntemi, haftalık gündem ve departman bazlı fikir örnekleri.'
        : 'Role definition, prioritization method, weekly agenda and department-level idea examples.'],
      [isTr ? 'Fikir Girişi Formu' : 'Idea Intake Form', isTr
        ? 'Her çalışanın beş dakikada dolduracağı, dönüşümü tabana yayan basit form.'
        : 'A simple form any employee can fill in five minutes, spreading the transformation to the whole team.'],
      [isTr ? 'Aylık ilerleme raporu' : 'Monthly progress report', isTr
        ? 'Tamamlanan projeler, kazanılan saat ve sıradaki öncelikler — yönetime sunulabilir formatta.'
        : 'Completed projects, hours saved and next priorities — in a format you can present to management.'],
    ],

    // Boundaries
    isTitle: isTr ? 'Bu program şudur' : 'This program is',
    isList: isTr
      ? ['Sürekli rehberlik ve önceliklendirme', 'Ekibin kendi çözümünü kurmasını sağlama', 'Ölçülebilir kazanım takibi']
      : ['Ongoing guidance and prioritization', 'Enabling the team to build its own solutions', 'Tracking measurable gains'],
    isNotTitle: isTr ? 'Bu program şu değildir' : 'This program is not',
    isNotList: isTr
      ? ['Yazılım geliştirme veya kurulum hizmeti', 'Sınırsız erişimli teknik destek hattı', 'Katılım olmadan sonuç veren bir paket']
      : ['A software development or setup service', 'An unlimited technical support line', 'A package that delivers results without participation'],

    // Continuation
    contTitle: isTr ? 'Dört Haftadan Sonrası' : 'After the Four Weeks',
    contLead: isTr
      ? 'Dört haftalık program, dönüşümün kurulum aşamasıdır. Sürenin sonunda program karşılıklı mutabakatla 6 aylık veya 12 aylık bir çalışmaya dönüştürülebilir. Yenileme için ayrı bir sözleşme düzenlenir; bedel ve kapsam o aşamada netleşir.'
      : 'The four-week program is the setup phase of the transformation. At the end of it, the program can be renewed by mutual agreement into a 6-month or 12-month engagement. Renewal is covered by a separate contract; scope and fee are set at that stage.',
    cont6: isTr ? '6 aylık devam' : '6-month continuation',
    cont6Body: isTr
      ? 'Haftalık görüşmelerin aynı ritimle sürmesi, aylık ilerleme raporu ve yeni fikirlerin sürekli değerlendirilmesi.'
      : 'Weekly sessions continue at the same rhythm, with monthly progress reports and continuous evaluation of new ideas.',
    cont12: isTr ? '12 aylık devam' : '12-month continuation',
    cont12Body: isTr
      ? 'Buna ek olarak yıllık yol haritası, yönetime sunum ve yeni katılan elçiler için devir eğitimi.'
      : 'Plus an annual roadmap, a management presentation and handover training for newly joining ambassadors.',
    outOfScopeTitle: isTr ? 'Kapsam dışı: geliştirme projeleri' : 'Out of scope: development projects',
    outOfScopeBody: isTr
      ? 'Program süresince ortaya çıkan ve ayrı geliştirme gerektiren işler — yapay zeka ajanları, sistem entegrasyonları, özel otomasyonlar — bu teklifin kapsamı dışındadır. Her geliştirme projesi için ayrı teklif ve sözleşme düzenlenir. Bu teklif, bu tür ihtiyaçları tespit etmeyi ve önceliklendirmeyi kapsar; geliştirilmesini kapsamaz.'
      : 'Work that surfaces during the program and requires separate development — AI agents, system integrations, custom automations — is outside the scope of this proposal. Each development project gets its own proposal and contract. This proposal covers identifying and prioritizing such needs, not building them.',

    // Terms
    termsTitle: isTr ? 'Ticari Şartlar' : 'Commercial Terms',
    terms: [
      [isTr ? 'Ödeme' : 'Payment', isTr
        ? 'Eğitim bedeli eğitim tarihinden önce, program bedeli program başlangıcında fatura edilir.'
        : 'The training fee is invoiced before the training date; the program fee at the start of the program.'],
      [isTr ? 'Teklif geçerliliği' : 'Validity', isTr ? 'Teklif tarihinden itibaren 30 gün.' : '30 days from the proposal date.'],
      [isTr ? 'Tarih planlaması' : 'Scheduling', isTr
        ? 'Eğitim tarihi, teklifin onaylanmasının ardından karşılıklı olarak belirlenir.'
        : 'The training date is set mutually once the proposal is approved.'],
      [isTr ? 'İçerik' : 'Content', isTr
        ? 'Eğitim içeriği, ön görüşme sonrasında departman bazlı olarak firmaya özel hazırlanır.'
        : 'Training content is prepared per department, specific to your company, after the intro call.'],
      [isTr ? 'Kapsam dışı' : 'Excluded', isTr
        ? 'Yazılım geliştirme, ajan ve otomasyon projeleri, lisans ve abonelik bedelleri.'
        : 'Software development, agent and automation projects, license and subscription fees.'],
    ],

    // CTA
    ctaTitle: isTr ? 'Sonraki Adım' : 'Next Step',
    ctaBody: isTr
      ? '45 dakikalık bir görüşmede departmanlarınızı birlikte gözden geçirelim; programa hangi departmanların dahil olacağını ve ilk hedefleri belirleyelim.'
      : 'In a 45-minute call, let\'s review your departments together and decide which ones join the program and what the first targets are.',
    ctaBtn: isTr ? 'Görüşme Planla' : 'Book a Call',
  };

  const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <section className={`px-6 py-14 border-t border-gray-800 ${className}`}>
      <div className="container mx-auto max-w-4xl">{children}</div>
    </section>
  );

  const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold mb-4">{children}</h2>
  );

  const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-block bg-brand/10 text-brand text-xs font-bold tracking-widest px-3 py-1 rounded border border-brand/20 mb-4 uppercase">
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="pt-32 pb-14 px-6">
        <div className="container mx-auto max-w-4xl">
          <Label>{t.badge}</Label>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">{t.title}</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl">{t.lead}</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-500 border-t border-gray-800 pt-6">
            <span>
              {t.preparedBy}: <span className="text-gray-300">Sevim Durmuş</span> ·{' '}
              <span className="text-brand">aiandtech.cloud</span>
            </span>
            <span>{t.validity}</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Section>
        <H2>{t.itemsTitle}</H2>
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {[
            { label: t.item1Label, name: t.item1Name, scope: t.item1Scope, price: t.item1Price, note: t.item1PriceNote },
            { label: t.item2Label, name: t.item2Name, scope: t.item2Scope, price: t.item2Price, note: t.item2PriceNote },
          ].map(item => (
            <div key={item.label} className="bg-gray-900 border border-brand/30 rounded-2xl p-7 flex flex-col">
              <span className="text-brand text-xs font-bold tracking-widest mb-3">{item.label}</span>
              <h3 className="text-xl font-bold mb-3">{item.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{item.scope}</p>
              <div className="border-t border-gray-800 pt-5">
                <div className="text-3xl font-black text-brand">{item.price}</div>
                <div className="text-gray-500 text-sm mt-1">{item.note}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-5">{t.itemsNote}</p>
      </Section>

      {/* Why both */}
      <Section>
        <H2>{t.whyTitle}</H2>
        <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">{t.whyLead}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {t.problems.map(p => (
            <div key={p.h} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <p className="font-semibold text-white mb-1.5">{p.h}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{p.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Item 01 */}
      <Section>
        <Label>{t.item1Label}</Label>
        <H2>{t.d1Title}</H2>
        <p className="text-gray-400 leading-relaxed mb-7 max-w-3xl">{t.d1Lead}</p>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {t.d1Facts.map(([k, v]) => (
            <div key={k} className="bg-gray-900 border border-gray-800 rounded-lg px-5 py-4">
              <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">{k}</div>
              <div className="text-white text-sm font-medium">{v}</div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-bold text-brand mb-4">{t.dayFlowTitle}</h3>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-6">
          {t.dayFlow.map(([time, desc], i) => (
            <div
              key={time}
              className={`flex flex-col sm:flex-row gap-2 sm:gap-6 px-5 py-4 ${i !== 0 ? 'border-t border-gray-800' : ''}`}
            >
              <div className="text-brand font-semibold text-sm whitespace-nowrap sm:w-32 shrink-0">{time}</div>
              <div className="text-gray-300 text-sm leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{t.d1ContentNote}</p>
      </Section>

      {/* Item 02 */}
      <Section>
        <Label>{t.item2Label}</Label>
        <H2>{t.d2Title}</H2>
        <p className="text-gray-400 leading-relaxed mb-7 max-w-3xl">{t.d2Lead}</p>

        <div className="bg-gray-900 border border-brand/30 rounded-xl p-6 mb-8">
          <p className="font-semibold text-brand mb-2">{t.elciTitle}</p>
          <p className="text-gray-400 text-sm leading-relaxed">{t.elciBody}</p>
        </div>

        <h3 className="text-lg font-bold text-brand mb-4">{t.weeksTitle}</h3>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          {t.weeks.map(([wk, head, body], i) => (
            <div key={wk} className={`px-5 py-4 ${i !== 0 ? 'border-t border-gray-800' : ''}`}>
              <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                <span className="text-brand font-bold text-sm">{wk}</span>
                <span className="text-white font-semibold text-sm">{head}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Deliverables */}
      <Section>
        <H2>{t.delTitle}</H2>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {t.deliverables.map(([h, p]) => (
            <div key={h} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <p className="font-semibold text-white mb-1.5">{h}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Boundaries */}
      <Section>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-gray-900 border border-brand/30 rounded-xl p-6">
            <p className="font-bold text-brand mb-4">{t.isTitle}</p>
            <ul className="space-y-3">
              {t.isList.map(i => (
                <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
            <p className="font-bold text-gray-400 mb-4">{t.isNotTitle}</p>
            <ul className="space-y-3">
              {t.isNotList.map(i => (
                <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                  <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Continuation */}
      <Section>
        <H2>{t.contTitle}</H2>
        <p className="text-gray-400 leading-relaxed mb-7 max-w-3xl">{t.contLead}</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { h: t.cont6, p: t.cont6Body },
            { h: t.cont12, p: t.cont12Body },
          ].map(c => (
            <div key={c.h} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <p className="font-semibold text-white mb-1.5">{c.h}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{c.p}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <p className="font-semibold text-gray-300 mb-2">{t.outOfScopeTitle}</p>
          <p className="text-gray-400 text-sm leading-relaxed">{t.outOfScopeBody}</p>
        </div>
      </Section>

      {/* Terms */}
      <Section>
        <H2>{t.termsTitle}</H2>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mt-6">
          {t.terms.map(([k, v], i) => (
            <div
              key={k}
              className={`flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-4 ${i !== 0 ? 'border-t border-gray-800' : ''}`}
            >
              <div className="text-brand font-semibold text-sm sm:w-44 shrink-0">{k}</div>
              <div className="text-gray-400 text-sm leading-relaxed">{v}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-24">
        <div className="bg-gray-900 border border-brand/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">{t.ctaBody}</p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-gray-950 font-bold px-8 py-4 rounded-lg transition-colors mb-8"
          >
            <Calendar className="h-5 w-5" />
            {t.ctaBtn}
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm border-t border-gray-800 pt-7">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-gray-400 hover:text-brand transition-colors">
              <Mail className="h-4 w-4" />
              {EMAIL}
            </a>
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-400 hover:text-brand transition-colors">
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-7">
            Sevim Durmuş · {isTr ? 'Kurucu' : 'Founder'} · AI and Tech
          </p>
        </div>
      </Section>
    </div>
  );
};

export default TeklifPage;
