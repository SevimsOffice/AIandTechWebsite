import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';

  const lastUpdated = isTr ? '31 Ağustos 2026' : 'August 31, 2026';

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/40 bg-brand/10 text-brand text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            {isTr ? 'Gizlilik Politikası' : 'Privacy Policy'}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {isTr ? 'AI and Tech — Gizlilik Politikası' : 'AI and Tech — Privacy Policy'}
          </h1>
          <p className="text-gray-400 mb-12">
            {isTr ? `Son güncelleme: ${lastUpdated}` : `Last updated: ${lastUpdated}`}
          </p>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isTr ? '1. Giriş' : '1. Introduction'}
              </h2>
              <p>
                {isTr
                  ? 'AI and Tech (aiandtech.cloud), Sevim Durmuş\'a ait bir AI danışmanlık ve içerik markasıdır. Bu gizlilik politikası, sitemizi ve LinkedIn üzerinden erişilen uygulamalarımızı kullandığınızda hangi verileri topladığımızı, nasıl kullandığımızı ve nasıl koruduğumuzu açıklar.'
                  : 'AI and Tech (aiandtech.cloud) is an AI consulting and content brand owned by Sevim Durmuş. This privacy policy explains what data we collect, how we use it, and how we protect it when you use our website and any apps accessed through LinkedIn.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isTr ? '2. Topladığımız Bilgiler' : '2. Information We Collect'}
              </h2>
              <p className="mb-3">
                {isTr
                  ? 'Sitemizdeki formları doldurduğunuzda (örneğin şablon veya rehber indirmek için) aşağıdaki bilgileri toplarız:'
                  : 'When you fill out a form on our site (for example, to download a template or guide), we collect:'}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>{isTr ? 'Ad ve soyad' : 'First and last name'}</li>
                <li>{isTr ? 'E‑posta adresi' : 'Email address'}</li>
                <li>{isTr ? 'İndirdiğiniz kaynak ve tarih bilgisi' : 'Which resource you downloaded and when'}</li>
              </ul>
              <p className="mt-3">
                {isTr
                  ? 'LinkedIn ile giriş yaptığınızda veya LinkedIn uygulamamızla etkileşime geçtiğinizde, LinkedIn\'in izin verdiği ölçüde temel profil bilgilerinizi (ad, profil fotoğrafı, e‑posta adresi) alabiliriz.'
                  : 'If you sign in with LinkedIn or interact with our LinkedIn app, we may receive basic profile information (name, profile photo, email address) to the extent LinkedIn permits.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isTr ? '3. Bilgileri Nasıl Kullanıyoruz' : '3. How We Use Information'}
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>
                  {isTr
                    ? 'Talep ettiğiniz şablon, rehber veya içeriği size ulaştırmak'
                    : 'To deliver the template, guide, or content you requested'}
                </li>
                <li>
                  {isTr
                    ? 'AI and Tech eğitimleri, hizmetleri ve içerikleri hakkında sizinle iletişim kurmak'
                    : 'To communicate with you about AI and Tech trainings, services, and content'}
                </li>
                <li>
                  {isTr
                    ? 'Sitemizi ve sunduğumuz kaynakları geliştirmek'
                    : 'To improve our site and the resources we offer'}
                </li>
              </ul>
              <p className="mt-3">
                {isTr
                  ? 'Formlardan gelen veriler, iç kullanım için Google Sheets üzerinde saklanır. Bilgilerinizi asla üçüncü taraflara satmayız.'
                  : 'Data submitted through forms is stored in Google Sheets for internal use. We never sell your information to third parties.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isTr ? '4. Bilgi Paylaşımı' : '4. Information Sharing'}
              </h2>
              <p>
                {isTr
                  ? 'Bilgilerinizi, sitemizin çalışması için kullandığımız hizmet sağlayıcılar (örneğin Google Workspace, GitHub Pages) dışında üçüncü taraflarla paylaşmayız. Bu sağlayıcılar verilerinize yalnızca hizmeti sunmak amacıyla erişebilir.'
                  : 'We do not share your information with third parties other than the service providers we rely on to operate our site (for example, Google Workspace, GitHub Pages). These providers only access your data to the extent needed to deliver the service.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isTr ? '5. Veri Güvenliği' : '5. Data Security'}
              </h2>
              <p>
                {isTr
                  ? 'Bilgilerinizi korumak için makul teknik ve idari önlemler alıyoruz. Ancak internet üzerinden hiçbir iletim yönteminin %100 güvenli olmadığını unutmayın.'
                  : 'We take reasonable technical and administrative measures to protect your information. However, no method of transmission over the internet is 100% secure.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isTr ? '6. Haklarınız' : '6. Your Rights'}
              </h2>
              <p>
                {isTr
                  ? 'Bilgilerinizin bir kopyasını talep etme, düzeltilmesini isteme veya silinmesini isteme hakkına sahipsiniz. Bu taleplerinizi sevimdurmus@gmail.com adresine e‑posta göndererek iletebilirsiniz.'
                  : 'You have the right to request a copy of your information, ask for corrections, or request deletion. You can send these requests by emailing sevimdurmus@gmail.com.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isTr ? '7. Çerezler' : '7. Cookies'}
              </h2>
              <p>
                {isTr
                  ? 'Sitemiz, temel işlevsellik ve site kullanımını anlamak için sınırlı çerezler kullanabilir. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.'
                  : 'Our site may use a limited set of cookies for basic functionality and to understand site usage. You can disable cookies through your browser settings.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isTr ? '8. Bu Politikadaki Değişiklikler' : '8. Changes to This Policy'}
              </h2>
              <p>
                {isTr
                  ? 'Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada yayınlanır.'
                  : 'We may update this privacy policy from time to time. Changes will be posted on this page.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">
                {isTr ? '9. İletişim' : '9. Contact'}
              </h2>
              <p>
                {isTr
                  ? 'Bu gizlilik politikası hakkında sorularınız için: '
                  : 'For questions about this privacy policy, contact: '}
                <a href="mailto:sevimdurmus@gmail.com" className="text-brand hover:text-brand-light">
                  sevimdurmus@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
