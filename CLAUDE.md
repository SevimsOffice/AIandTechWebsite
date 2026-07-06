# CLAUDE.md — AI and Tech Website

> Claude Code bu dosyayı her oturumda okur. Projeyle ilgili bilmen gereken her şey burada.

---

## 1. Proje Özeti

**Site:** aiandtech.cloud  
**Repo:** SevimsOffice/AIandTechWebsite  
**Deploy:** GitHub Pages (main branch → otomatik deploy)  
**Branch stratejisi:** Her özellik için yeni branch (`feat/...`), main'e squash-merge

Bu, Sevim Durmuş'un kişisel AI danışmanlık ve içerik markası için statik web sitesi.  
Tüm kaynaklar (şablonlar, promptlar, rehberler) ücretsiz olup form gateı (isim + email) arkasında.  
Form verileri Google Sheets'e yazılır, PDF'ler Google Drive üzerinden indirilir.

---

## 2. Marka Bilgileri

**Kurucu:** Sevim Durmuş  
**Ünvan:** Founder & AI Consultant  
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
Google Drive (PDF indirme linkleri)
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

Sitenin ana rengi terracotta (#C4521E). Cyan (`#22d3ee`) KULLANILMAZ — tüm dosyalardan temizlendi.  
Tailwind sınıflarında: `text-brand`, `bg-brand`, `border-brand`, `hover:text-brand`, `ring-brand/50`

### 4.3 İkidilli sistem

```tsx
const { language } = useLanguage();
const isTr = language === 'tr';

// Kullanım:
const labels = {
  title: isTr ? 'Türkçe başlık' : 'English title',
};
```

`t()` fonksiyonu da var ama yeni sayfalarda doğrudan `isTr` pattern'i kullan — daha okunabilir.

### 4.4 Form sayfası pattern'i

Tüm template/prompt sayfaları aynı pattern'i izler:
1. Sol kolon: içerik (badge, başlık, açıklama, adımlar)
2. Sağ kolon: sticky form kutusu (firstName, lastName, email → submitToSheets)
3. Form gönderildikten sonra: Drive linki ortaya çıkar
4. Drive linki: `const DOWNLOAD_URL = 'https://drive.google.com/...'`

---

## 5. Mevcut Rotalar ve Sayfalar

```
/                                     → HomePage (Home + Challenges + Services + About + Training + TemplatesSection + PromptsSection + Contact)
/trainings                            → TrainingsPage
/trainings/:slug                      → TrainingDetailPage
/blogs                                → BlogsPage
/products                             → ProductsPage
/products/ainetvalue                  → NetWorthCalculator
/vibecoding                           → VibeCoding

/templates                            → TemplatesPage (6 şablon listelenir)
/templates/claude-ecosystem-audit     → ClaudeEcosystemAuditPage ✅ Drive link var
/templates/founders-guide-to-claude   → FoundersGuidePage ⚠️ PLACEHOLDER_DRIVE_URL
/templates/ai-baglam-kasasi           → AIBaglamKasasiPage ✅ Drive link var
/templates/ai-danisma-kurulu          → AIDanismaKuruluPage ✅ Drive link var
/templates/goal-operator-pack         → GoalOperatorPackPage ✅ Drive link var
/templates/ai-branding-workflow       → AIBrandingWorkflowPage ✅ Drive link var

/prompts                              → PromptsPage (6 prompt listelenir)
/prompts/manus-instagram-strategy     → ManusInstagramPage (inline reveal, Drive yok)
/prompts/content-creation-prompts     → ContentCreationPromptsPage ✅ Drive link var
/prompts/claude-md-compounding        → ClaudeMdCompoundingPage ⚠️ PLACEHOLDER_DRIVE_URL
/prompts/anatomy-of-a-claude-prompt   → AnatomyClaudePromptPage (eğitim sayfası, form yok)
/prompts/prompt-generator             → PromptGeneratorPage (form → inline reveal)
/prompts/profesyoneller-icin-claude   → WebinarPromptsPage (eğitim sayfası, form yok)
```

---

## 6. Bekleyen İşler (Sevim Drive linki geldiğinde güncelle)

| Sayfa | Dosya | Durum |
|---|---|---|
| Founder's Guide to Claude | `src/pages/FoundersGuidePage.tsx` | `PLACEHOLDER_DRIVE_URL` bekliyor |
| CLAUDE.md Compounding Engineering | `src/pages/ClaudeMdCompoundingPage.tsx` | `PLACEHOLDER_DRIVE_URL` bekliyor |

Drive linki geldiğinde: dosyayı aç, `PLACEHOLDER_DRIVE_URL`'yi gerçek link ile değiştir, yeni branch'e commit'le, PR aç, merge et.

---

## 7. Sevim'in Çalışma Şekli

### Genel yaklaşım
- Türkçe konuşur ama site hem Türkçe hem İngilizce
- Yeni özellik eklerken önce ihtiyacı söyler, detayları konuşurken şekillendirir
- PDF/Drive linkleri hazır olunca verir, placeholder ile başlanır
- İçerik referansı olarak screenshot veya metin paste eder
- İçerik "çok kurumsal" veya "çok karmaşık" görünüyorsa söyler — basit, pratik, taranabilir format ister

### İçerik tercihleri
- **Sever:** Net başlıklar, kopyalanabilir kod blokları, madde listeler, somut örnekler
- **Sevmez:** Kurumsal dil, karmaşık badge/kart sistemleri, fazla görsel karmaşa
- **Referans format:** Mariah'nın (learnaiwithmariah.com) sade, okunabilir rehber formatı

### Git akışı
- Her özellik için ayrı branch: `feat/...`, `fix/...`, `docs/...`
- GitHub MCP araçlarıyla PR aç ve squash-merge yap
- Branch'ler her zaman güncel `main`'den açılır — eski branch'lerden değil

---

## 8. Kaynak Kütüphanesi (Hızlı Referans)

### Templates (Şablonlar)
| Kaynak | URL | Sayfalar | Promptlar |
|---|---|---|---|
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

---

## 9. Diğer Dosyalar

| Dosya | Ne için |
|---|---|
| `LINKEDIN_STRATEGY_CONTEXT.md` | LinkedIn strateji AI projesi için kapsamlı bağlam dosyası. Tüm kaynaklar, hedef kitle, hook açıları, 8 haftalık takvim. |
| `README.md` | Boş (sadece proje adı var) |
| `public/*.html` | Branded HTML kaynakları — PDF'lerin görsel orijinalleri |

---

## 10. Gotchas — Bunları Tekrarlama

- `submitToSheets` → her zaman `Content-Type: 'text/plain'` — asla değiştirme
- Tailwind'de cyan renk sınıfı (`text-cyan-400` vb.) kullanma — her şey `brand` ile
- Eski branch'leri `main`'e rebase etme — her zaman taze branch aç
- `git stash + checkout` ile branch değiştirme — merge conflict çıkarır
- `TrainingDetailPage` `trainings.ts` data dosyasından beslendiği için, eğitim içeriğini doğrudan sayfa dosyasında değil `src/data/trainings.ts`'de düzenle
- Yeni prompt sayfaları hem `PromptsPage.tsx` hem `PromptsSection.tsx` hem `App.tsx`'e eklenmeli
- Yeni template sayfaları hem `TemplatesPage.tsx` hem `TemplatesSection.tsx` hem `App.tsx`'e eklenmeli

---

## 11. Google Apps Script URL

```
https://script.google.com/macros/s/AKfycby7xAbUuk_jZSNYiLU9mhYedCKjkWOv4kpuHsetJe2blO8BveLUAK6BtnQrxeta0TY/exec
```

Bu URL `src/utils/submitToSheets.ts`'de tanımlı. Asla hardcode etme — sadece bu dosyadan import et.

---

_Son güncelleme: Bu oturumda güncellendi — feat/anatomy-claude-prompt merge'inden sonra_
