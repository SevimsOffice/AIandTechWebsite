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
    'nav.trainings': 'Trainings',
    'nav.blogs': 'Blogs',
    'nav.products': 'Products',
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
    'about.founder.name': 'Sevim Durmus',
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

    // Trainings Page
    'trainingsPage.title': 'Trainings',
    'trainingsPage.intro.line1': 'Practical AI and Generative AI trainings delivered by me.',
    'trainingsPage.intro.line2': 'Designed for business professionals and corporate teams.',
    'trainingsPage.intro.line3': 'Online or on site delivery available.',
    'trainingsPage.available.title': 'Available Courses',
    'trainingsPage.course1.name': 'GenAI Kickstart. The Ultimate Beginner\'s Course in Generative AI',
    'trainingsPage.course1.desc1': 'A beginner friendly introduction to Generative AI.',
    'trainingsPage.course1.desc2': 'Focused on real business use cases.',
    'trainingsPage.course1.desc3': 'Covers fundamentals, prompting, and productivity workflows.',
    'trainingsPage.viewCourse': 'View Course',
    'trainingsPage.corporate.title': 'Corporate Trainings',
    'trainingsPage.corporate.desc1': 'Custom Generative AI and automation trainings for companies.',
    'trainingsPage.corporate.desc2': 'Content is adapted to your team\'s role and business needs.',
    'trainingsPage.corporate.offer1': 'Generative AI for business teams',
    'trainingsPage.corporate.offer2': 'AI productivity and workflow automation',
    'trainingsPage.corporate.offer3': 'AI and cloud foundations for non technical teams',
    'trainingsPage.corporate.cta': 'Contact for corporate training',

    // Blogs Page
    'blogsPage.title': 'Blog',
    'blogsPage.subtitle': 'Insights, trends, and expert perspectives on AI, automation, and digital transformation.',
    'blogsPage.article1.title': 'Beyond the Chatbot: The Era of AI Agents That Never Forget',
    'blogsPage.article1.date': 'December 26, 2025',
    'blogsPage.article1.category': 'AI Agents',
    'blogsPage.article1.excerpt': 'Discover how AI agents are evolving from stateless chatbots to persistent, memory-retaining autonomous systems. Learn about the implications for enterprise operations and how organizations should prepare for this fundamental shift in AI capabilities.',
    'blogsPage.article2.title': 'The Agentic AI Paradox: Why Turkish Companies Are Watching While Global Leaders Race to $2 Trillion',
    'blogsPage.article2.date': 'December 30, 2025',
    'blogsPage.article2.category': 'Market Analysis',
    'blogsPage.article2.excerpt': 'While global enterprises deploy autonomous AI systems achieving significant efficiency gains, Turkish businesses remain stuck in pilot projects that rarely scale. Discover why organizational readiness, not technology, is the limiting factor for AI adoption.',
    'blogsPage.readMore': 'Read Full Article',
    'blogsPage.aboutAuthor': 'About the Author',
    'blogsPage.authorName': 'Sevim Durmus',
    'blogsPage.authorTitle': 'Founder & AI Consultant',
    'blogsPage.authorBio': 'AWS Community Builder with over a decade of experience in cloud technologies, AI implementation, and enterprise transformation. Passionate about helping organizations unlock the true potential of AI.',
    'blogsPage.followLabel': 'Follow on',
    'blogsPage.followLink': 'LinkedIn',

    // Products Page
    'productsPage.title': 'Products',
    'productsPage.subtitle': 'Explore our carefully curated collection of courses, tools, and resources designed to accelerate your AI and automation journey.',
    'productsPage.info': 'Browse Our Marketplace',
    'productsPage.infoDesc': 'Explore a complete marketplace of courses, resources, and digital products. From beginner-friendly introductions to advanced implementations, discover everything you need to master AI and automation.',
    'productsPage.whatWeOffer': 'What We Offer',
    'productsPage.item1': 'Practical AI and Generative AI courses',
    'productsPage.item2': 'Automation and workflow optimization tools',
    'productsPage.item3': 'Enterprise transformation resources',
    'productsPage.item4': 'Business analysis and consulting templates',
    'productsPage.needHelp': 'Need Custom Solutions?',
    'productsPage.contact': 'Get in Touch',
    'productsPage.openInNewWindow': 'Open Marketplace',

    // Vibe Coding
    'vibecoding.title': 'Vibe Coding',
    'vibecoding.hero.title': 'Surrender to the Vibe',
    'vibecoding.hero.subtitle': 'Shift from writing syntax to managing intent. High-speed iteration, obsessive context management, and the boring stack.',
    'vibecoding.principles.title': 'The Three Pillars',
    'vibecoding.p1.title': 'The Loop is God',
    'vibecoding.p1.desc': 'Generate. Run. Fail. Paste Error. Repeat. Speed of iteration beats perfect prompting every time.',
    'vibecoding.p2.title': 'Manage Context',
    'vibecoding.p2.desc': 'Keep the AI clean. Fresh chats, plan.md summaries, and aggressive context resetting.',
    'vibecoding.p3.title': 'Boring Stack Wins',
    'vibecoding.p3.desc': 'Use what the AI knows best. React, Tailwind, Python. Minimize hallucination by staying in the training set.',
    'vibecoding.clinic.title': 'Vibe Clinic',
    'vibecoding.clinic.bad': 'Bad Vibe: "Fix this bug."',
    'vibecoding.clinic.good': 'Good Vibe: "I am getting X error at line Y in Z file. Here is the full context and my goal..."',
    'vibecoding.generator.title': 'System Prompt Generator',
    'vibecoding.generator.cta': 'Generate My System Prompt',

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
    'nav.trainings': 'Eğitimler',
    'nav.blogs': 'Blog',
    'nav.products': 'Ürünler',
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
    'about.founder.name': 'Sevim Durmus',
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

    // Trainings Page
    'trainingsPage.title': 'Eğitimler',
    'trainingsPage.intro.line1': 'Tarafımdan sunulan pratik AI ve Üretken AI eğitimleri.',
    'trainingsPage.intro.line2': 'İş profesyonelleri ve kurumsal ekipler için tasarlandı.',
    'trainingsPage.intro.line3': 'Online veya yerinde teslimat mevcuttur.',
    'trainingsPage.available.title': 'Mevcut Kurslar',
    'trainingsPage.course1.name': 'GenAI Kickstart. Üretken AI\'da Nihai Başlangıç Kursu',
    'trainingsPage.course1.desc1': 'Üretken AI\'ya başlangıç dostu bir giriş.',
    'trainingsPage.course1.desc2': 'Gerçek iş kullanım durumlarına odaklanmıştır.',
    'trainingsPage.course1.desc3': 'Temelleri, istem oluşturmayı ve verimlilik iş akışlarını kapsar.',
    'trainingsPage.viewCourse': 'Kursu Görüntüle',
    'trainingsPage.corporate.title': 'Kurumsal Eğitimler',
    'trainingsPage.corporate.desc1': 'Şirketler için özelleştirilmiş Üretken AI ve otomasyon eğitimleri.',
    'trainingsPage.corporate.desc2': 'İçerik, ekibinizin rolüne ve iş ihtiyaçlarına göre uyarlanır.',
    'trainingsPage.corporate.offer1': 'İş ekipleri için Üretken AI',
    'trainingsPage.corporate.offer2': 'AI verimliliği ve iş akışı otomasyonu',
    'trainingsPage.corporate.offer3': 'Teknik olmayan ekipler için AI ve bulut temelleri',
    'trainingsPage.corporate.cta': 'Kurumsal eğitim için iletişime geçin',

    // Blogs Page
    'blogsPage.title': 'Blog',
    'blogsPage.subtitle': 'AI, otomasyon ve dijital dönüşüm hakkında içgörüler, trendler ve uzman perspektifler.',
    'blogsPage.article1.title': 'Chatbot\'ın Ötesi: Asla Unutmayan AI Ajanlarının Çağı',
    'blogsPage.article1.date': '26 Aralık 2025',
    'blogsPage.article1.category': 'AI Ajanları',
    'blogsPage.article1.excerpt': 'AI ajanlarının durumsuz chatbot\'lardan kalıcı belleğe sahip otonom sistemlere nasıl geliştiğini keşfedin. Kurumsal operasyonlar için çıkarımları ve organizasyonların bu temel AI yeteneği değişimine nasıl hazırlanması gerektiğini öğrenin.',
    'blogsPage.article2.title': 'Agentic AI Paradoksu: Türk Şirketleri İzlerken Küresel Liderler 2 Trilyon Dolara Koşuyor',
    'blogsPage.article2.date': '30 Aralık 2025',
    'blogsPage.article2.category': 'Pazar Analizi',
    'blogsPage.article2.excerpt': 'Küresel işletmeler önemli verimlilik kazançları elde eden otonom AI sistemlerini dağıtırken, Türk işletmeleri nadiren ölçeklendirilen pilot projelerine takılı kalmıştır. Teknoloji değil, örgütsel hazırlığın neden sınırlayıcı faktör olduğunu keşfedin.',
    'blogsPage.readMore': 'Tam Makaleyi Oku',
    'blogsPage.aboutAuthor': 'Yazar Hakkında',
    'blogsPage.authorName': 'Sevim Durmus',
    'blogsPage.authorTitle': 'Kurucu & AI Danışmanı',
    'blogsPage.authorBio': 'Bulut teknolojileri, AI uygulaması ve kurumsal dönüşümde on yılı aşkın deneyime sahip AWS Topluluk Oluşturucusu. AI\'nin gerçek potansiyelini ortaya çıkarmaya yardımcı olan organizasyonlara tutkulu.',
    'blogsPage.followLabel': 'LinkedIn\'de takip edin',
    'blogsPage.followLink': 'LinkedIn',

    // Products Page
    'productsPage.title': 'Ürünler',
    'productsPage.subtitle': 'AI ve otomasyon yolculuğunuzu hızlandırmak için tasarlanmış, dikkatli seçilmiş kurslar, araçlar ve kaynaklar koleksiyonunu keşfedin.',
    'productsPage.info': 'Pazarımızı Keşfedin',
    'productsPage.infoDesc': 'Kurslar, kaynaklar ve dijital ürünlerin tam pazarını keşfedin. Başlangıç dostu giriş materyallerinden ileri uygulamalara kadar, AI ve otomasyonda ustalaşmak için ihtiyaç duyduğunuz her şeyi keşfedin.',
    'productsPage.whatWeOffer': 'Ne Sunuyoruz',
    'productsPage.item1': 'Pratik AI ve Üretken AI kursları',
    'productsPage.item2': 'Otomasyon ve iş akışı optimizasyon araçları',
    'productsPage.item3': 'Kurumsal dönüşüm kaynakları',
    'productsPage.item4': 'İşletme analizi ve danışmanlık şablonları',
    'productsPage.needHelp': 'Özel Çözümlere mi İhtiyacınız Var?',
    'productsPage.contact': 'İletişime Geçin',
    'productsPage.openInNewWindow': 'Pazarı Aç',

    // Vibe Coding
    'vibecoding.title': 'Vibe Coding',
    'vibecoding.hero.title': 'Vibe\'a Teslim Ol',
    'vibecoding.hero.subtitle': 'Sözdizimi yazmaktan niyet yönetmeye geçin. Yüksek hızlı yineleme, takıntılı bağlam yönetimi ve sıkıcı teknoloji yığını.',
    'vibecoding.principles.title': 'Üç Temel Direk',
    'vibecoding.p1.title': 'Döngü Tanrıdır',
    'vibecoding.p1.desc': 'Oluştur. Çalıştır. Başarısız Ol. Hatayı Yapıştır. Tekrarla. Yineleme hızı, her zaman mükemmel istem yazımını yener.',
    'vibecoding.p2.title': 'Bağlamı Yönet',
    'vibecoding.p2.desc': 'Yapay zekayı temiz tutun. Yeni sohbetler, plan.md özetleri ve agresif bağlam sıfırlama.',
    'vibecoding.p3.title': 'Sıkıcı Yığın Kazanır',
    'vibecoding.p3.desc': 'Yapay zekanın en iyi bildiği şeyleri kullanın. React, Tailwind, Python. Eğitim setinde kalarak halüsinasyonu en aza indirin.',
    'vibecoding.clinic.title': 'Vibe Kliniği',
    'vibecoding.clinic.bad': 'Kötü Vibe: "Şu hatayı düzelt."',
    'vibecoding.clinic.good': 'İyi Vibe: "Z dosyasındaki Y satırında X hatası alıyorum. İşte tam bağlam ve hedefim..."',
    'vibecoding.generator.title': 'Sistem İstemi Oluşturucu',
    'vibecoding.generator.cta': 'Sistem İstemimi Oluştur',

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