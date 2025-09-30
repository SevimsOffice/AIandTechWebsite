import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.challenges': 'Challenges We Solve',
    'nav.services': 'How We Help',
    'nav.about': 'About Us',
    'nav.training': 'Training',
    'nav.contact': 'Contact',
    
    // Home
    'home.badge': 'AI-Powered Transformation',
    'home.title': 'Reimagine your operations with',
    'home.company': 'AI & Tech',
    'home.subtitle': 'We build AI-powered systems, automation, and training that deliver measurable results.',
    'home.cta.contact': 'Get in Touch',
    'home.cta.training': 'Explore Training',
    
    // Challenges
    'challenges.title': 'Challenges We',
    'challenges.title.highlight': 'Solve',
    'challenges.subtitle': 'Every business faces unique operational challenges. We specialize in identifying and solving the most critical pain points that hold organizations back.',
    'challenges.manual.title': 'Manual Processes',
    'challenges.manual.desc': 'Time-consuming manual workflows that drain productivity and increase errors.',
    'challenges.compliance.title': 'Compliance Risk',
    'challenges.compliance.desc': 'Complex regulatory requirements that create operational vulnerabilities.',
    'challenges.opportunities.title': 'Missed Opportunities',
    'challenges.opportunities.desc': 'Limited insights preventing optimal decision-making and growth potential.',
    'challenges.adoption.title': 'Low Adoption',
    'challenges.adoption.desc': 'Technology solutions that fail to engage users and deliver expected ROI.',
    
    // Services
    'services.title': 'How We',
    'services.title.highlight': 'Help',
    'services.subtitle': 'Our comprehensive approach ensures your AI transformation is successful, sustainable, and delivers measurable business value.',
    'services.enablement.title': 'Enablement & Strategy',
    'services.enablement.desc': 'Strategic AI consulting and implementation roadmaps tailored to your business objectives.',
    'services.enablement.details': 'Transform your organization with data-driven strategies that align AI initiatives with business goals.',
    'services.factory.title': 'Agent Factory',
    'services.factory.desc': 'Custom AI systems and intelligent automation solutions built for your specific needs.',
    'services.factory.details': 'From chatbots to complex decision-making systems, we build AI that works seamlessly with your operations.',
    'services.automation.title': 'Automation Ops',
    'services.automation.desc': 'End-to-end management, monitoring, and optimization of your AI and automation systems.',
    'services.automation.details': 'Ensure your AI investments deliver consistent value with professional monitoring and maintenance.',
    'services.cta': 'Start Your AI Transformation',
    'services.learn.more': 'Learn More',
    
    // About
    'about.title': 'About',
    'about.title.highlight': 'AI & Tech',
    'about.subtitle': 'Empowering organizations to harness the transformative power of artificial intelligence and automation through expert consulting, custom solutions, and comprehensive training.',
    'about.mission.title': 'Our Mission',
    'about.mission.p1': 'We believe that AI and automation should be accessible, practical, and transformative for businesses of all sizes. Our mission is to bridge the gap between cutting-edge technology and real-world business applications.',
    'about.mission.p2': 'Through strategic consulting, custom development, and comprehensive training programs, we help organizations not just adopt AI, but master it to drive sustainable growth and competitive advantage.',
    'about.founder.name': 'Sevim',
    'about.founder.title': 'Founder & AI Consultant',
    'about.founder.desc': 'AWS Community Builder with over a decade of experience in cloud technologies, AI implementation, and enterprise transformation.',
    'about.achievement1.title': 'AWS Community Builder',
    'about.achievement1.desc': 'Recognized expert in AWS cloud technologies and AI services',
    'about.achievement2.title': '10,000+ Students Trained',
    'about.achievement2.desc': 'Successfully educated professionals across 50+ countries',
    'about.achievement3.title': 'Enterprise Consultant',
    'about.achievement3.desc': 'Advised Fortune 500 companies on AI transformation strategies',
    'about.achievement4.title': 'Industry Speaker',
    'about.achievement4.desc': 'Regular presenter at major tech conferences and events',
    'about.partners': 'Trusted by Industry Leaders',
    
    // Training
    'training.title': 'Training',
    'training.title.highlight': 'Catalog',
    'training.subtitle': 'Accelerate your team\'s AI and automation expertise with our comprehensive training programs designed for modern business needs.',
    'training.course1.title': 'AI Fundamentals for Business Leaders',
    'training.course1.desc': 'Master the strategic implementation of AI in business operations. Learn to identify opportunities and lead successful AI initiatives.',
    'training.course2.title': 'Advanced Automation Strategies',
    'training.course2.desc': 'Deep dive into process automation, workflow optimization, and intelligent system integration for enterprise environments.',
    'training.course3.title': 'AWS AI Services Mastery',
    'training.course3.desc': 'Complete guide to Amazon Web Services AI and machine learning tools, from SageMaker to Comprehend and beyond.',
    'training.course4.title': 'Data Science for Decision Makers',
    'training.course4.desc': 'Transform raw data into actionable insights. Learn statistical analysis, visualization, and predictive modeling techniques.',
    'training.course5.title': 'Machine Learning in Production',
    'training.course5.desc': 'Deploy, monitor, and scale machine learning models in real-world production environments with best practices.',
    'training.course6.title': 'AI Ethics and Governance',
    'training.course6.desc': 'Navigate the complex landscape of AI ethics, compliance, and responsible AI development in modern organizations.',
    'training.view.course': 'View Course',
    'training.custom': 'Custom training programs available upon request',
    'training.level.beginner': 'Beginner',
    'training.level.intermediate': 'Intermediate',
    'training.level.advanced': 'Advanced',
    
    // Contact
    'contact.title': 'Get in',
    'contact.title.highlight': 'Touch',
    'contact.subtitle': 'Ready to transform your business with AI? Let\'s discuss your specific needs and create a customized solution that delivers real results.',
    'contact.connect': 'Let\'s Connect',
    'contact.connect.desc': 'Choose the method that works best for you. We\'re here to help you navigate your AI transformation journey.',
    'contact.email.title': 'Email Us',
    'contact.email.desc': 'Get a detailed response within 24 hours',
    'contact.schedule.title': 'Schedule a Call',
    'contact.schedule.desc': 'Book a 30-minute discovery session',
    'contact.schedule.link': 'Book on Calendly',
    'contact.questions.title': 'Quick Questions',
    'contact.questions.desc': 'Use the contact form for specific inquiries',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company Name',
    'contact.form.message': 'Message',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email.placeholder': 'your.email@company.com',
    'contact.form.company.placeholder': 'Your company name',
    'contact.form.message.placeholder': 'Tell us about your project, goals, and how we can help...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.required': '*',
    
    // Footer
    'footer.description': 'We build AI-powered systems, automation, and training that deliver measurable results. Transform your business operations with cutting-edge AI solutions.',
    'footer.links': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.copyright': 'AI & Tech. All rights reserved.',
    
    // Common
    'common.home': 'Home',
    'common.services': 'Services',
    'common.about': 'About',
    'common.weeks': 'weeks',
    'common.students': 'students',
  },
  tr: {
    // Header
    'nav.challenges': 'Çözdüğümüz Sorunlar',
    'nav.services': 'Nasıl Yardım Ediyoruz',
    'nav.about': 'Hakkımızda',
    'nav.training': 'Eğitim',
    'nav.contact': 'İletişim',
    
    // Home
    'home.badge': 'AI Destekli Dönüşüm',
    'home.title': 'Operasyonlarınızı yeniden hayal edin',
    'home.company': 'AI & Tech',
    'home.subtitle': 'Ölçülebilir sonuçlar sunan AI destekli sistemler, otomasyon ve eğitim geliştiriyoruz.',
    'home.cta.contact': 'İletişime Geçin',
    'home.cta.training': 'Eğitimleri Keşfedin',
    
    // Challenges
    'challenges.title': 'Çözdüğümüz',
    'challenges.title.highlight': 'Sorunlar',
    'challenges.subtitle': 'Her işletme benzersiz operasyonel zorluklarla karşılaşır. Organizasyonları geri tutan en kritik sorunları belirleme ve çözme konusunda uzmanız.',
    'challenges.manual.title': 'Manuel Süreçler',
    'challenges.manual.desc': 'Verimliliği düşüren ve hataları artıran zaman alıcı manuel iş akışları.',
    'challenges.compliance.title': 'Uyumluluk Riski',
    'challenges.compliance.desc': 'Operasyonel güvenlik açıkları yaratan karmaşık düzenleyici gereksinimler.',
    'challenges.opportunities.title': 'Kaçırılan Fırsatlar',
    'challenges.opportunities.desc': 'Optimal karar vermeyi ve büyüme potansiyelini engelleyen sınırlı içgörüler.',
    'challenges.adoption.title': 'Düşük Benimseme',
    'challenges.adoption.desc': 'Kullanıcıları etkilemeyen ve beklenen ROI\'yi sağlamayan teknoloji çözümleri.',
    
    // Services
    'services.title': 'Nasıl',
    'services.title.highlight': 'Yardım Ediyoruz',
    'services.subtitle': 'Kapsamlı yaklaşımımız AI dönüşümünüzün başarılı, sürdürülebilir ve ölçülebilir iş değeri sağlamasını garanti eder.',
    'services.enablement.title': 'Etkinleştirme ve Strateji',
    'services.enablement.desc': 'İş hedeflerinize özel stratejik AI danışmanlığı ve uygulama yol haritaları.',
    'services.enablement.details': 'AI girişimlerini iş hedefleriyle uyumlu hale getiren veri odaklı stratejilerle organizasyonunuzu dönüştürün.',
    'services.factory.title': 'Ajan Fabrikası',
    'services.factory.desc': 'Özel ihtiyaçlarınız için özel AI sistemleri ve akıllı otomasyon çözümleri.',
    'services.factory.details': 'Chatbot\'lardan karmaşık karar verme sistemlerine kadar, operasyonlarınızla sorunsuz çalışan AI geliştiriyoruz.',
    'services.automation.title': 'Otomasyon Operasyonları',
    'services.automation.desc': 'AI ve otomasyon sistemlerinizin uçtan uca yönetimi, izlenmesi ve optimizasyonu.',
    'services.automation.details': 'AI yatırımlarınızın profesyonel izleme ve bakımla tutarlı değer sunmasını sağlayın.',
    'services.cta': 'AI Dönüşümünüzü Başlatın',
    'services.learn.more': 'Daha Fazla Bilgi',
    
    // About
    'about.title': 'Hakkımızda',
    'about.title.highlight': 'AI & Tech',
    'about.subtitle': 'Uzman danışmanlık, özel çözümler ve kapsamlı eğitim yoluyla organizasyonları yapay zeka ve otomasyonun dönüştürücü gücünden yararlanmaya güçlendiriyoruz.',
    'about.mission.title': 'Misyonumuz',
    'about.mission.p1': 'AI ve otomasyonun her büyüklükteki işletme için erişilebilir, pratik ve dönüştürücü olması gerektiğine inanıyoruz. Misyonumuz, son teknoloji ile gerçek dünya iş uygulamaları arasındaki köprüyü kurmaktır.',
    'about.mission.p2': 'Stratejik danışmanlık, özel geliştirme ve kapsamlı eğitim programları aracılığıyla organizasyonların AI\'yi sadece benimsemeleri değil, sürdürülebilir büyüme ve rekabet avantajı sağlamak için ustalaşmalarına yardımcı oluyoruz.',
    'about.founder.name': 'Sevim',
    'about.founder.title': 'Kurucu & AI Danışmanı',
    'about.founder.desc': 'Bulut teknolojileri, AI uygulaması ve kurumsal dönüşümde on yılı aşkın deneyime sahip AWS Topluluk Oluşturucusu.',
    'about.achievement1.title': 'AWS Topluluk Oluşturucusu',
    'about.achievement1.desc': 'AWS bulut teknolojileri ve AI hizmetlerinde tanınmış uzman',
    'about.achievement2.title': '10.000+ Eğitilmiş Öğrenci',
    'about.achievement2.desc': '50+ ülkede profesyonelleri başarıyla eğitti',
    'about.achievement3.title': 'Kurumsal Danışman',
    'about.achievement3.desc': 'Fortune 500 şirketlerine AI dönüşüm stratejileri konusunda danışmanlık verdi',
    'about.achievement4.title': 'Sektör Konuşmacısı',
    'about.achievement4.desc': 'Büyük teknoloji konferans ve etkinliklerinde düzenli sunum yapan',
    'about.partners': 'Sektör Liderlerinin Güvendiği',
    
    // Training
    'training.title': 'Eğitim',
    'training.title.highlight': 'Kataloğu',
    'training.subtitle': 'Modern iş ihtiyaçları için tasarlanmış kapsamlı eğitim programlarımızla ekibinizin AI ve otomasyon uzmanlığını hızlandırın.',
    'training.course1.title': 'İş Liderleri için AI Temelleri',
    'training.course1.desc': 'İş operasyonlarında AI\'nin stratejik uygulamasında ustalaşın. Fırsatları belirlemeyi ve başarılı AI girişimlerini yönetmeyi öğrenin.',
    'training.course2.title': 'Gelişmiş Otomasyon Stratejileri',
    'training.course2.desc': 'Kurumsal ortamlar için süreç otomasyonu, iş akışı optimizasyonu ve akıllı sistem entegrasyonuna derinlemesine dalış.',
    'training.course3.title': 'AWS AI Hizmetleri Ustalığı',
    'training.course3.desc': 'SageMaker\'dan Comprehend\'e kadar Amazon Web Services AI ve makine öğrenmesi araçlarının tam rehberi.',
    'training.course4.title': 'Karar Vericiler için Veri Bilimi',
    'training.course4.desc': 'Ham veriyi eyleme dönüştürülebilir içgörülere çevirin. İstatistiksel analiz, görselleştirme ve tahmine dayalı modelleme tekniklerini öğrenin.',
    'training.course5.title': 'Üretimde Makine Öğrenmesi',
    'training.course5.desc': 'Gerçek dünya üretim ortamlarında makine öğrenmesi modellerini en iyi uygulamalarla dağıtın, izleyin ve ölçeklendirin.',
    'training.course6.title': 'AI Etiği ve Yönetişimi',
    'training.course6.desc': 'Modern organizasyonlarda AI etiği, uyumluluk ve sorumlu AI geliştirmenin karmaşık manzarasında gezinin.',
    'training.view.course': 'Kursu Görüntüle',
    'training.custom': 'Talep üzerine özel eğitim programları mevcuttur',
    'training.level.beginner': 'Başlangıç',
    'training.level.intermediate': 'Orta',
    'training.level.advanced': 'İleri',
    
    // Contact
    'contact.title': 'İletişime',
    'contact.title.highlight': 'Geçin',
    'contact.subtitle': 'İşinizi AI ile dönüştürmeye hazır mısınız? Özel ihtiyaçlarınızı tartışalım ve gerçek sonuçlar sunan özelleştirilmiş bir çözüm oluşturalım.',
    'contact.connect': 'Bağlanalım',
    'contact.connect.desc': 'Sizin için en uygun yöntemi seçin. AI dönüşüm yolculuğunuzda size rehberlik etmek için buradayız.',
    'contact.email.title': 'E-posta Gönderin',
    'contact.email.desc': '24 saat içinde detaylı yanıt alın',
    'contact.schedule.title': 'Görüşme Planlayın',
    'contact.schedule.desc': '30 dakikalık keşif oturumu rezerve edin',
    'contact.schedule.link': 'Calendly\'de Rezerve Et',
    'contact.questions.title': 'Hızlı Sorular',
    'contact.questions.desc': 'Özel sorularınız için iletişim formunu kullanın',
    'contact.form.title': 'Bize Mesaj Gönderin',
    'contact.form.name': 'Ad Soyad',
    'contact.form.email': 'E-posta Adresi',
    'contact.form.company': 'Şirket Adı',
    'contact.form.message': 'Mesaj',
    'contact.form.name.placeholder': 'Adınız ve soyadınız',
    'contact.form.email.placeholder': 'eposta@sirket.com',
    'contact.form.company.placeholder': 'Şirket adınız',
    'contact.form.message.placeholder': 'Projeniz, hedefleriniz ve nasıl yardımcı olabileceğimiz hakkında bize anlatın...',
    'contact.form.send': 'Mesaj Gönder',
    'contact.form.sending': 'Gönderiliyor...',
    'contact.form.required': '*',
    
    // Footer
    'footer.description': 'Ölçülebilir sonuçlar sunan AI destekli sistemler, otomasyon ve eğitim geliştiriyoruz. Son teknoloji AI çözümleriyle iş operasyonlarınızı dönüştürün.',
    'footer.links': 'Hızlı Bağlantılar',
    'footer.connect': 'Bağlantı',
    'footer.copyright': 'AI & Tech. Tüm hakları saklıdır.',
    
    // Common
    'common.home': 'Ana Sayfa',
    'common.services': 'Hizmetler',
    'common.about': 'Hakkımızda',
    'common.weeks': 'hafta',
    'common.students': 'öğrenci',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};