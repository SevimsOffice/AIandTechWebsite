---
name: aiandtech-carousel
description: >
  Creates branded Instagram carousel posts for AIandTECH (Sevim Durmuş). Use this skill
  whenever Sevim asks to create an Instagram post, carousel, sosyal medya içeriği, Instagram
  slayt, post oluştur, haberi carousel'a çevir, or provides a topic/news + photo for a social
  media post. Generates a downloadable React artifact with max 6 slides matching the AIandTECH
  brand style (warm linen background, terracotta accents, dark editorial typography), plus an
  Instagram caption with hashtags. Each slide is downloadable as a true 1080×1080 PNG. Last
  slide always includes AIandTECH CTA. Do NOT use for @sevimsoffice (English account) — use
  sevimsoffice-carousel for that.
---

# AIandTECH Instagram Carousel Skill

Sevim'in AIandTECH markası (@ai_and_tech_cloud, Türkçe hesap) için Instagram carousel
post'ları + caption/hashtag üretir.

**Hesap ayrımı:** Bu skill TÜRKÇE hesap içindir. İngilizce kişisel hesap (@sevimsoffice)
için `sevimsoffice-carousel` kullanılır. İki hesabın paleti FARKLIDIR — bu hesap açık
keten/terracotta, sevimsoffice koyu kahve tonları. Paletleri asla karıştırma.

## Brand Identity

| Element | Value |
|---|---|
| Background | `#EDE9E3` (warm linen) |
| Accent / Badge | `#C8634A` (terracotta) |
| Headline text | `#1A1008` (dark espresso) |
| Body text | `#3D2B1F` (warm brown) |
| Card background | `#FFFFFF` |
| Slide size | 1080 × 1080 px (true export resolution) |
| Max slides | 6 |

Not: Web sitesi (aiandtech.cloud) `#C4521E` kullanır; Instagram carousel'ları bilinçli olarak
`#C8634A` kullanır — değiştirme.

## Ses ve Dil Kuralları (Türkçe)

- Profesyonel ama sıcak, teknik ama anlaşılır — "akıllı bir arkadaş anlatıyor" tonu
- Kısa cümleler. Slayt başına en fazla 2-3 cümle açıklama.
- Somutluk şart: sayı, süre, önce/sonra ("3 saat → 20 dakika")
- **Yasaklı kelimeler:** devrim, oyun değiştirici, çağ atlatan, sınırsız, kusursuz,
  "yapay zeka çağı", aşırı ünlem, art arda emoji
- Sen dili ("yapıyorsun", "kaçırıyorsun") — siz dili değil

## Design Language (referans carousel'lardan)

- **Cover slide**: Büyük bold başlık (accent + koyu renk karışımı), kullanıcı fotoğrafı veya
  büyük sayı/istatistik merkezde, altta koyu bar içinde hook alt başlığı
- **Content slides**: Sol üstte renkli badge (`BÖLÜM 1` / `KATMAN 1` / `ANLAŞMA` — içerik
  tipine göre uyarla), bold H1 başlık, 2-3 cümle açıklama, altta beyaz "tip/takeaway" kartı
  (tutorial içerikte "Gerçek Kullanım", haber içerikte "Özet"/"Dikkat"/"Bağlam"), varsa gömülü ekran görüntüsü
- **Decorative elements**: Terracotta yıldız patlamaları (asterisk), kartlara işaret eden
  kavisli oklar, anahtar ifadelerin etrafında el çizimi daire
- **Last slide (CTA)**: AIandTECH wordmark, "Yorumlara **BİLGİ** yazın, iletişime geçelim!",
  Sevim'in adı + ünvanı (AI Danışmanı | AWS Çözüm Mimarı | AIandTECH Kurucusu), aiandtech.cloud

## Workflow

### Step 1: Gather inputs
Eksikse kullanıcıdan iste (varsa hemen üret, sormadan ilerle):
1. **Konu / İçerik**: Konu, haber metni veya 3-6 ana fikir
2. **Fotoğraf** (opsiyonel): Cover/CTA için — yoksa büyük sayı/istatistik etrafında tasarla,
   asla boş placeholder yüz bırakma
3. **Ekran görüntüleri** (opsiyonel): İçerik slaytlarına gömülecek görseller
4. **İçerik tipi**: Tutorial/eğitim vs. Haber/duyuru — badge etiketleri ve tip-kart çerçevesi buna göre değişir

### Step 2: Plan the slides
İçeriği maksimum 6 slayta böl:
- Slide 1: Cover (hook + konu)
- Slides 2-5: Her ana fikir 1 slayt (4'ten fazla fikir varsa birleştir)
- Slide 6: CTA (her zaman AIandTECH markalı)

Haber içeriği için doğal 4'lü yapı: Anlaşma/Detaylar → Neden Önemli → Senin İçin Anlamı → Yapman Gereken.

**Örnek plan** (konu: "Claude Projects nedir?"):
1. Cover: "Claude'a her gün aynı şeyi mi anlatıyorsun?" + büyük "10 dk/gün" istatistiği
2. BÖLÜM 1 — Sorun: her sohbet sıfırdan başlıyor
3. BÖLÜM 2 — Projects: kalıcı bağlam nasıl çalışır + ekran görüntüsü
4. BÖLÜM 3 — Kurulum: 3 adımda ilk proje (Gerçek Kullanım kartı: "Ben marka sesimi
   yükledim — artık her taslak ilk denemede benim tonumda")
5. CTA: Yorumlara BİLGİ

### Step 3: Build the React Artifact

Tek bir React (.jsx) artifact:

```
- State: currentSlide index
- Her slayt gerçek 1080×1080 canvas'ta render, ekranda transform ile küçültülür
- Navigasyon: önceki/sonraki oklar + nokta göstergeleri
- Slayt başına indirme butonu + "Tümünü İndir" → html2canvas ile PNG
- Thumbnail şeridi: tüm slaytların küçük önizlemeleri
- Carousel altında caption kutusu + kopyala butonu (Step 4)
```

#### ⚠️ CRITICAL — "Container boyutu ≠ font boyutu" bug'ından kaçın

Tüm slayt CSS'i (font, padding, konum) **gerçek 1080×1080 canvas** varsayımıyla yazılır.
Asla container kutusunu küçültüp (örn. `width:400px`) 1080 ölçekli fontları koruma — bu taşma,
kırpılma ve okunmaz export üretir. Bu skill'in EN SIK hata modu budur — sunmadan önce iki kez kontrol et.

Doğru kalıp — slayt bileşenleri HER ZAMAN dahili `width:1080px; height:1080px` alır; ekran
küçültmesi YALNIZCA dış sarmalayıcıdaki CSS transform ile yapılır:

```jsx
const SLIDE_SIZE = 1080;

const ScaledSlide = ({ size, children }) => {
  const scale = size / SLIDE_SIZE;
  return (
    <div style={{ width: size, height: size, overflow: "hidden", position: "relative" }}>
      <div style={{ width: SLIDE_SIZE, height: SLIDE_SIZE, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </div>
  );
};
// <ScaledSlide size={380}> → ekran önizleme, <ScaledSlide size={78}> → thumbnail
```

**İndirme için** asla ekrandaki küçültülmüş öğeyi yakalama — her slaydın gizli, gerçek
1080×1080 kopyasını off-screen render et ve html2canvas'ı O ref'lere yönlendir:

```jsx
<div style={{ position: "absolute", top: -99999, left: -99999, pointerEvents: "none" }}>
  {slides.map((slide, i) => (
    <div key={i} ref={(el) => (fullSlideRefs.current[i] = el)} style={{ width: SLIDE_SIZE, height: SLIDE_SIZE }}>
      {renderSlide(slide)}
    </div>
  ))}
</div>
```

#### Download Implementation

```javascript
const downloadSlide = async (idx) => {
  const element = fullSlideRefs.current[idx]; // gerçek 1080×1080 gizli node
  const canvas = await window.html2canvas(element, {
    scale: 2, useCORS: true, backgroundColor: null,
    width: 1080, height: 1080,
  });
  const link = document.createElement('a');
  link.download = `aiandtech-slide-${idx + 1}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
};
```

html2canvas'ı `useEffect` ile yükle:
```javascript
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
  document.head.appendChild(script);
}, []);
```

#### User Photo / Screenshot Handling
- Fotoğraf verildiyse (base64) cover/CTA'da `<img>` + `object-fit: cover`
- Fotoğraf yoksa: büyük istatistik/sayı (haber) veya stilize baş harf dairesi — asla boş placeholder
- Ekran görüntüleri → beyaz kart öğeleri, opsiyonel 3-5° döndürülmüş

#### Decorative SVG Elements (inline)

```jsx
const Starburst = ({ size = 60, color = '#C8634A' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60">
    {[0,30,60,90,120,150].map(angle => (
      <line key={angle} x1="30" y1="5" x2="30" y2="55"
        stroke={color} strokeWidth="3.5" strokeLinecap="round"
        transform={`rotate(${angle} 30 30)`} />
    ))}
  </svg>
);

const CurvedArrow = () => (
  <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
    <path d="M5 40 Q40 5 70 25" stroke="#C8634A" strokeWidth="2.5"
          strokeLinecap="round" fill="none"/>
    <path d="M60 20 L72 27 L65 36" stroke="#C8634A" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);
```

#### Typography (tüm boyutlar GERÇEK 1080×1080 canvas için — küçültme)
```javascript
const styles = {
  badge: { background: '#C8634A', color: 'white', fontWeight: '700',
    fontSize: '22px', letterSpacing: '3px', padding: '12px 30px',
    borderRadius: '8px', textTransform: 'uppercase' },
  h1: { fontFamily: '"Georgia", serif', fontWeight: '900', fontSize: '78px',
    lineHeight: 1.12, color: '#1A1008' },
  body: { fontFamily: 'system-ui, sans-serif', fontSize: '31px',
    lineHeight: 1.6, color: '#3D2B1F' },
  tipCard: { background: '#FFFFFF', borderRadius: '22px', padding: '34px 38px',
    boxShadow: '0 14px 48px rgba(26,16,8,0.10)' },
  tipLabel: { fontFamily: '"Georgia", serif', fontWeight: '800', fontSize: '25px',
    color: '#C8634A', letterSpacing: '1.5px', textTransform: 'uppercase' },
  tipText: { fontSize: '28px', fontStyle: 'italic', color: '#3D2B1F', lineHeight: 1.5 }
}
```
Cover başlık/sayı çok daha büyük olabilir (120-150px) — genelde 1-3 kelime.

### Step 4: Caption + Hashtags (her zaman üret — atlama)

Caption **düz metin** olarak artifact içinde kopyalanabilir kutuda gösterilir, ASLA slayt
görseline gömülmez. Yapı:

1. Hook satırı (cover tonunda, 1 satır)
2. Carousel'ın ana fikirlerini doğal caption sesiyle özetleyen 2-4 kısa paragraf
3. Yumuşak CTA: `Yorumlara "BİLGİ" yaz, iletişime geçelim 👇` (veya içeriğe uygun varyant)
4. Boş satır + 15-20 hashtag: Türkçe + İngilizce karışık, konuya özel etiketler
   (örn. `#claudeai #yapayzeka`), 1-2 geniş erişim etiketi (`#teknoloji #girisimcilik`),
   marka etiketi `#aiandtech` ile bitir.

`navigator.clipboard.writeText(caption)` ile "Kopyala" butonu + "✓ Kopyalandı" onayı.

**Örnek caption (referans kalite):**
```
Claude'a her gün kendini yeniden mi tanıtıyorsun?

Her sohbete "ben şunu yapıyorum, kitlem şu" diye başlıyorsan
10 dakikan daha başlamadan gidiyor demektir.

Claude Projects tam olarak bunu çözüyor: bağlamını bir kere
yüklüyorsun, her yeni sohbet seni tanıyarak açılıyor.

Kurulumu 3 adım — carousel'da anlattım.

Yorumlara "BİLGİ" yaz, iletişime geçelim 👇

#claudeai #yapayzeka #aiaraclari #verimlilik #uretkenlik
#promptmuhendisligi #teknoloji #girisimcilik #dijitaldonusum
#aidanismanligi #yapayzekaegitimi #claudetips #aitools
#workflowautomation #aiandtech
```

### Step 5: CTA Slide Content (her zaman son slayt)

```
[AIandTECH wordmark — büyük bold koyu metin]
[İkon veya Sevim'in fotoğrafı]

[İçeriğe uygun giriş, örn. "Bu gelişmeler işini nasıl etkiler?"]

Yorumlara BİLGİ yazın,
iletişime geçelim!

Sevim Durmuş
AI Danışmanı | AWS Çözüm Mimarı
AIandTECH Kurucusu
aiandtech.cloud
```

### Step 6: Present to user

Render sonrası:
- Tüm slaytların göründüğü navigatör
- Her slayt için "Slayt X'i İndir" + "Tümünü İndir"
- Caption kutusu + kopyala butonu carousel'ın altında net görünür
- Fotoğraf verilmediyse not: "Fotoğrafını yükleyebilirsin — sürükle bırak veya tıkla"

## Asla Yapma

- Caption'ı veya hashtag'leri slayt görseline gömme — her zaman ayrı kopyalanabilir metin
- 6'dan fazla slayt üretme — fazla fikir varsa birleştir, kullanıcıya sormadan 7. slayt açma
- sevimsoffice paletini (koyu kahve `#1E1510` vb.) bu hesapta kullanma
- İngilizce slayt/caption üretme (kullanıcı açıkça istemedikçe — bu Türkçe hesap)
- Haber içeriğinde doğrulanmamış iddia/istatistik uydurma — kaynak metinde ne varsa o
- CTA slaytını atlama veya markasız bitirme

## Quality Checklist

Sunmadan önce doğrula:
- [ ] **Slaytlar gerçek 1080×1080 — kutu küçültme yok, sadece wrapper transform**
- [ ] Cover'da güçlü görsel hook (büyük sayı/başlık veya fotoğraf)
- [ ] Her içerik slaytında: badge, başlık, 2-3 satır açıklama, tip/takeaway kartı
- [ ] Dekoratif öğeler metinle çakışmıyor
- [ ] Son slayt AIandTECH CTA
- [ ] Caption + 15-20 hashtag + kopyala butonu var
- [ ] İndirme her slayt için düzgün 1080×1080 PNG üretiyor (zihinsel kontrol: bu font
      boyutunda herhangi bir satır padding'li genişliği aşar mı?)
- [ ] Palet tutarlı: `#EDE9E3` bg, `#C8634A` accent, `#1A1008` başlıklar
- [ ] Yasaklı kelime yok, ton "sen" dili

## Example Trigger Phrases

- "Bana bir Instagram carousel oluştur"
- "Post hazırla şu konuda: [konu]"
- "Bu haberi carousel'a çevir"
- "Sosyal medya içeriği lazım"
- "Resmimi ver, konu: [X]"
- "Bu konu için slaytlar yap"
