# CLAUDE.md — AI and Tech Website

> Claude Code bu dosyayı her oturumda okur. Projeyle ilgili bilmen gereken her şey burada.
> Bir kural bu dosyayla çelişiyorsa: önce bu dosya, sonra koddaki mevcut kalıp, en son genel varsayım.

---

## 1. Proje Özeti

**Site:** aiandtech.cloud
**Repo:** SevimsOffice/AIandTechWebsite
**Deploy:** GitHub Pages (main branch → otomatik deploy)
**Branch stratejisi:** Her özellik için yeni branch (`feat/...`), main'e squash-merge

Bu, Sevim Durmuş'un kişisel AI danışmanlık ve içerik markası için statik web sitesi.
Tüm kaynaklar (şablonlar, promptlar, rehberler) ücretsiz olup form gateı (isim + email) arkasında.
Form verileri Google Sheets'e yazılır. İndirmeler iki şekilde sunulur:
1. **Google Drive PDF linki** (eski şablonlar), veya
2. **`public/` altındaki yazdırılabilir markalı HTML dosyaları** (yeni rehberler — TR/EN ayrı dosya, site diline göre doğru dosya açılır)

---

## 2. Marka Bilgileri

**Kurucu:** Sevim Durmuş
**Ünvan:** Founder & AI Consultant (kartvizit satırı: AI Danışmanı | AWS Çözüm Mimarı | AIandTECH Kurucusu)
**Marka adı:** AI and Tech
**Slogan:** Practical AI for founders, marketers, and creators — tools that work, not theory.
**Dil:** İkidilli — Türkçe (öncelikli kitle) + İngilizce
**İletişim tonu:** Direkt ve pratik, teknik ama anlaşılır, birinci şahıs, özgüvenli ama satışçı değil

---

## 3. Tech Stack

```
React 18 + TypeScript + Vite
Tailwind CSS (custom brand color)
React Router v6 (client-side routing)
Lucide React (ikonlar)
GitHub Pages (deploy)
Google Apps Script (form → sheets)
Google Drive veya public/*.html (indirme linkleri)
```

---

## 4. Kritik Teknik Kurallar (Asla Bozma)

### 4.1 Google Sheets entegrasyonu — submitToSheets.ts

```typescript
// DOĞRU — bu şekilde çalışır:
headers: { 'Content-Type': 'text/plain' }

// YANLIŞ — sessizce başarısız olur, veri gelmez:
headers: { 'Content-Type': 'application/json' }
```

`no-cors` modunda `application/json` başlığı CORS preflight tetikler ve sessizce düşer.
`submitToSheets.ts` dosyasını asla `application/json`'a döndürme.

### 4.2 Brand Rengi

```js
// tailwind.config.js
brand: {
  DEFAULT: '#C4521E',  // terracotta — sitenin ana rengi
  light:   '#D4632F',
  dark:    '#A8431A',
}
```

**Kural:** Yeni sayfalarda ve yeni bileşenlerde her zaman `brand` sınıflarını kullan:
`text-brand`, `bg-brand`, `border-brand`, `hover:text-brand`, `ring-brand/50`

**Gerçek durum (dürüst not):** Eski sayfalarda (Home, Services, About, Challenges, Contact,
TrainingsPage, TrainingDetailPage, BlogsPage, ProductsPage, NetWorthCalculator, VibeCoding,
TemplatesPage, TemplatesSection) hâlâ `cyan-400` sınıfları var. Bunlar zamanla temizlenecek.
Yeni koda ASLA yeni `cyan` sınıfı ekleme; eski bir sayfayı düzenliyorsan dokunduğun bölümdeki
cyan'ları `brand`'e çevirmek serbest (ama zorunlu değil — scope'u şişirme).

**İstisna:** `public/*.html` yazdırılabilir rehberler kendi sabit paletini kullanır
(lacivert #0f172a + cyan #22d3ee) — bu bilinçli bir tasarım kararı, site paletinden bağımsız.

### 4.3 İkidilli sistem

```tsx
const { language } = useLanguage();
const isTr = language === 'tr';

// Kullanım:
const labels = {
  title: isTr ? 'Türkçe başlık' : 'English title',
};
```

- `t()` fonksiyonu da var ama yeni sayfalarda doğrudan `isTr` pattern'i kullan — daha okunabilir.
- **Her görünen metin iki dilli olmalı.** Tek dilli hardcoded string bırakma
  (geçmişte AIDanismaKuruluPage başlığı böyle bir bug'dı — `title: 'AI Danışma Kurulu'`
  her iki dilde de Türkçe görünüyordu).
- İstisna: marka adları (AI and Tech, AIandTECH), kişi adı, `aiandtech.cloud` — bunlar çevrilmez.

### 4.4 Form sayfası pattern'i

**Referans implementasyon: `src/pages/GoalOperatorPackPage.tsx`** — yeni bir gated sayfa
yaparken bu dosyayı kopyala ve içeriğini değiştir. Kalıp:

1. Sol kolon: badge, başlık, alt başlık, "Sevim Durmuş · aiandtech.cloud" satırı,
   3'lü istatistik satırı, (opsiyonel ❌problem/✅çözüm kutuları), "Rehberde Neler Var?" bölüm listesi
2. Sağ kolon: sticky form kutusu (`lg:sticky lg:top-28`) — firstName, lastName, email → `submitToSheets`
3. Form gönderildikten sonra: indirme butonu ortaya çıkar
4. İndirme hedefi:
   - Drive PDF: `const DOWNLOAD_URL = 'https://drive.google.com/...'`
   - Yerel HTML rehber: `DOWNLOAD_URL_TR` / `DOWNLOAD_URL_EN` sabitleri + `isTr` ile seçim
5. `TEMPLATE_NAME` sabiti → Google Sheets'te hangi kaynağın indirildiğini ayırt eder,
   her sayfada benzersiz olmalı

### 4.5 Yeni sayfa ekleme kontrol listesi

**Yeni template/rehber sayfası** (sırayla, hiçbirini atlama):
1. `src/pages/XxxPage.tsx` oluştur (GoalOperatorPackPage'den kopyala)
2. `src/App.tsx` → import + `<Route path="/templates/slug">`
3. `src/pages/TemplatesPage.tsx` → `templates` dizisine giriş ekle (yeni kaynak en üste)
4. (İndirme yerel HTML ise) `public/xxx-tr.html` + `public/xxx-en.html` oluştur —
   mevcut bir rehberin (örn. `goal-operator-pack.html`) CSS iskeletini kopyala
5. `npm run build` çalıştır, hatasız geçtiğini gör
6. Bu dosyanın (CLAUDE.md) rota listesini ve kaynak tablosunu güncelle

**Yeni prompt sayfası:** Aynı akış ama `PromptsPage.tsx` + `PromptsSection.tsx` + `App.tsx` üçlüsü.
Not: `TemplatesSection.tsx` (ana sayfa) tüm şablonları listelemez, öne çıkan tek kart gösterir —
her yeni şablonda güncellemek zorunlu değil.

### 4.6 Push'tan önce

- `npm run build` her zaman çalıştırılır ve geçmelidir. Build çalışmadan push yok.
- Yeni gated sayfa eklendiyse: her iki dilde başlık/açıklama var mı, `TEMPLATE_NAME` benzersiz mi,
  indirme linki doğru dosyaya/Drive'a gidiyor mu — gözden geçir.

---

## 5. Mevcut Rotalar ve Sayfalar

```
/                                     → HomePage (Home + Challenges + Services + About + Training + TemplatesSection + PromptsSection + Contact)
/trainings                            → TrainingsPage
/trainings/:slug                      → TrainingDetailPage
/blogs                                → BlogsPage
/products                             → ProductsPage
/products/ainetvalue                  → NetWorthCalculator
/vibecoding                           → VibeCoding (eğitim tanıtım sayfası)

/templates                            → TemplatesPage (8 kaynak listelenir)
/templates/fable-5-prompting-hacks    → Fable5PromptingHacksPage ✅ yerel HTML (TR/EN)
/templates/vibe-coding-starter-guide  → VibeCodingStarterGuidePage ✅ yerel HTML (TR/EN)
/templates/claude-ecosystem-audit     → ClaudeEcosystemAuditPage ✅ Drive link var
/templates/founders-guide-to-claude   → FoundersGuidePage ⚠️ PLACEHOLDER_DRIVE_URL
/templates/ai-baglam-kasasi           → AIBaglamKasasiPage ✅ Drive link var
/templates/ai-danisma-kurulu          → AIDanismaKuruluPage ✅ Drive link var
/templates/goal-operator-pack         → GoalOperatorPackPage ✅ Drive link var
/templates/ai-branding-workflow       → AIBrandingWorkflowPage ✅ Drive link var

/prompts                              → PromptsPage (7 prompt listelenir)
/prompts/manus-instagram-strategy     → ManusInstagramPage (inline reveal, Drive yok)
/prompts/content-creation-prompts     → ContentCreationPromptsPage ✅ Drive link var
/prompts/claude-md-compounding        → ClaudeMdCompoundingPage ⚠️ PLACEHOLDER_DRIVE_URL
/prompts/anatomy-of-a-claude-prompt   → AnatomyClaudePromptPage (eğitim sayfası, form yok)
/prompts/prompt-generator             → PromptGeneratorPage (form → inline reveal)
/prompts/profesyoneller-icin-claude   → WebinarPromptsPage (eğitim sayfası, form yok)
/prompts/3-ways-to-build-a-claude-skill → ClaudeSkillGuidePage (form → tam makale inline reveal)
```

---

## 6. Bekleyen İşler (Sevim Drive linki geldiğinde güncelle)

| Sayfa | Dosya | Durum |
|---|---|---|
| Founder's Guide to Claude | `src/pages/FoundersGuidePage.tsx` | `PLACEHOLDER_DRIVE_URL` bekliyor |
| CLAUDE.md Compounding Engineering | `src/pages/ClaudeMdCompoundingPage.tsx` | `PLACEHOLDER_DRIVE_URL` bekliyor |

Drive linki geldiğinde: dosyayı aç, `PLACEHOLDER_DRIVE_URL`'yi gerçek link ile değiştir,
yeni branch'e commit'le, PR aç, merge et.

Not: Vibe Coding Starter Guide ve Fable 5 Prompting Hacks şu an yerel HTML'e link veriyor.
Sevim bunların Drive PDF versiyonunu isterse: `DOWNLOAD_URL_TR/EN` sabitlerini Drive
linkleriyle değiştirmek yeterli.

---

## 7. Sevim'in Çalışma Şekli

### Genel yaklaşım
- Türkçe konuşur ama site hem Türkçe hem İngilizce
- Yeni özellik eklerken önce ihtiyacı söyler, detayları konuşurken şekillendirir
- PDF/Drive linkleri hazır olunca verir, placeholder ile başlanır
- İçerik referansı olarak screenshot, PDF veya metin paste eder — üçüncü taraf içerik
  paste ederse markaya uyarlanır (aşağıdaki "Uyarlama kuralları"na bak)
- İçerik "çok kurumsal" veya "çok karmaşık" görünüyorsa söyler — basit, pratik, taranabilir format ister

### Üçüncü taraf içeriği uyarlama kuralları
Sevim başka bir kaynaktan rehber/içerik paste edip "markaya uyarla" dediğinde:
- Üçüncü taraf tanıtımları, ürün linkleri ve topluluk CTA'ları kaldırılır
- Yerine AI and Tech CTA'sı konur (ilgili eğitim sayfası veya /templates)
- Yazarın kişisel hikâyeleri/vaka örnekleri Sevim'inmiş gibi SUNULMAZ — ya tarafsız
  örnek senaryoya çevrilir ya da çıkarılır
- Resmi bir kaynaktan (örn. Anthropic dokümanı) alıntılanan promptlar orijinal İngilizce bırakılır,
  açıklama metinleri çevrilir

### İçerik tercihleri
- **Sever:** Net başlıklar, kopyalanabilir kod blokları, madde listeler, somut örnekler
- **Sevmez:** Kurumsal dil, karmaşık badge/kart sistemleri, fazla görsel karmaşa
- **Referans format:** Mariah'nın (learnaiwithmariah.com) sade, okunabilir rehber formatı

### Git akışı
- Her özellik için ayrı branch: `feat/...`, `fix/...`, `docs/...`
- GitHub MCP araçlarıyla PR aç ve squash-merge yap
- Branch'ler her zaman güncel `main`'den açılır — eski branch'lerden değil
- Uzun süredir açık bir branch'te çalışmaya devam etmeden önce `origin/main`'i merge et
  (bu oturumların en sık conflict kaynağı bayat branch'lerdir)

---

## 8. Kaynak Kütüphanesi (Hızlı Referans)

### Templates / Rehberler
| Kaynak | URL | Sayfalar | Promptlar |
|---|---|---|---|
| Fable 5 Prompting Hacks | /templates/fable-5-prompting-hacks | 4 | 3 |
| Vibe Coding Starter Guide | /templates/vibe-coding-starter-guide | 7 | 5 |
| Claude Ecosystem Audit | /templates/claude-ecosystem-audit | 7 | 1 |
| Founder's Guide to Claude | /templates/founders-guide-to-claude | 30 | 12 |
| AI Bağlam Kasası | /templates/ai-baglam-kasasi | 14 | 8 |
| AI Danışma Kurulu | /templates/ai-danisma-kurulu | 8 | 1 |
| /goal Operator Pack | /templates/goal-operator-pack | 7 | 5 |
| Full AI Branding Workflow | /templates/ai-branding-workflow | 6 | 3 |

### Prompts
| Kaynak | URL | Araç |
|---|---|---|
| Manus.im Instagram Stratejisi | /prompts/manus-instagram-strategy | Manus.im |
| İçerik Üretimi Prompt Paketi | /prompts/content-creation-prompts | Claude / ChatGPT |
| CLAUDE.md Bileşik Mühendislik | /prompts/claude-md-compounding | Claude Code |
| Claude Prompt Anatomisi | /prompts/anatomy-of-a-claude-prompt | Eğitim sayfası |
| Prompt Üreticisi | /prompts/prompt-generator | Claude · ChatGPT |
| Profesyoneller için Claude | /prompts/profesyoneller-icin-claude | Eğitim sayfası — 5 prompt + 3 bonus |
| Bir Claude Skill'i Oluşturmanın 3 Yolu | /prompts/3-ways-to-build-a-claude-skill | Form → tam makale + 2 prompt |

---

## 9. Diğer Dosyalar

| Dosya | Ne için |
|---|---|
| `LINKEDIN_STRATEGY_CONTEXT.md` | LinkedIn strateji AI projesi için kapsamlı bağlam dosyası. Tüm kaynaklar, hedef kitle, hook açıları, post formatı. |
| `README.md` | Boş (sadece proje adı var) |
| `public/*.html` | Markalı yazdırılabilir rehberler — PDF'lerin görsel orijinalleri VE yeni rehberlerin doğrudan indirme hedefleri |
| `docs/skills/` | Sevim'in kişisel Claude skill'lerinin repo yedekleri (claude.ai'de güncellemek için kaynak) |

---

## 10. Gotchas — Bunları Tekrarlama

- `submitToSheets` → her zaman `Content-Type: 'text/plain'` — asla değiştirme
- Yeni koda cyan renk sınıfı (`text-cyan-400` vb.) ekleme — her şey `brand` ile (bkz. 4.2)
- Görünen her string iki dilli olmalı — hardcoded tek dilli başlık bırakma (bkz. 4.3)
- Eski branch'leri `main`'e rebase etme — her zaman taze branch aç; devam eden branch'e önce main'i merge et
- `git stash + checkout` ile branch değiştirme — merge conflict çıkarır
- `TrainingDetailPage` `trainings.ts` data dosyasından beslendiği için, eğitim içeriğini doğrudan sayfa dosyasında değil `src/data/trainings.ts`'de düzenle
- Yeni prompt sayfaları hem `PromptsPage.tsx` hem `PromptsSection.tsx` hem `App.tsx`'e eklenmeli
- Yeni template sayfaları hem `TemplatesPage.tsx` hem `App.tsx`'e eklenmeli (TemplatesSection opsiyonel — öne çıkan kart)
- `TEMPLATE_NAME` her gated sayfada benzersiz — Sheets'te kaynak ayrımı buna dayanır
- Push'tan önce `npm run build` — kırık build main'e gitmez

---

## 11. Google Apps Script URL

```
https://script.google.com/macros/s/AKfycby7xAbUuk_jZSNYiLU9mhYedCKjkWOv4kpuHsetJe2blO8BveLUAK6BtnQrxeta0TY/exec
```

Bu URL `src/utils/submitToSheets.ts`'de tanımlı. Asla hardcode etme — sadece bu dosyadan import et.

---

_Son güncelleme: Temmuz 2026 — Vibe Coding + Fable 5 rehberleri eklendi, dosya denetimden geçirilip yeniden yazıldı._
