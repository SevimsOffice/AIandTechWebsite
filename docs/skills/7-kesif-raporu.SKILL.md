---
name: 7-kesif-raporu
description: >
  AI verimlilik/danışmanlık projeleri için yapılan keşif (discovery) toplantısı
  transkriptlerini 7 bölümlü profesyonel bir Türkçe analiz raporuna dönüştürür.
  Kullanıcı bir keşif toplantısı transkripti, notları veya ses/video kaydı dökümü
  paylaşıp "analiz et", "rapor çıkar", "7 keşif raporu", "discovery call analizi",
  "keşif toplantısı raporu", "pain point analizi", "AI fırsatları çıkar" gibi bir
  istek ilettiğinde MUTLAKA bu skill'i kullan. Kullanıcı "danışmanlık toplantısı",
  "müşteri toplantısı transkripti" veya benzeri bir bağlamda bir transkript
  paylaşıp bundan içgörü, özet veya rapor istediğinde de bu skill'i tetikle,
  kullanıcı "7 keşif raporu" ismini açıkça söylemese bile. Çıktı olarak Özet,
  Paydaşlar, Acı Noktaları, AI Fırsatları, Önceliklendirme, Riskler ve Sonraki
  Adımlar bölümlerinden oluşan yapılandırılmış bir analiz üretir; isteğe bağlı
  olarak 15 soruluk soru listesi, SWOT, ROI tahmini, vaka örnekleri, roadmap ve
  teklif başlıkları da eklenebilir.
---

# 7 Keşif Raporu

AI verimlilik danışmanlığı yapan kullanıcı (Sevim Durmuş, danışmanlık firması sahibi) için,
bir müşteriyle yapılan **ilk keşif (discovery) toplantısının transkriptini** alıp bunu
satılabilir, profesyonel bir analiz raporuna dönüştüren skill. Rapor, müşteriye sunulacak
"Yönetici Özeti ve Teklif" dokümanının temelini oluşturacak kalitede olmalı.

## Ne zaman kullanılır

- Kullanıcı bir toplantı transkripti / notları / ses-video dökümü paylaşıp bundan analiz, özet veya rapor istediğinde.
- "7 keşif raporu", "discovery raporu", "keşif toplantısı analizi" gibi ifadeler geçtiğinde.
- Kullanıcı transkripti paylaşmış ama net talimat vermemişse bile, bağlam bir AI danışmanlık/keşif toplantısına işaret ediyorsa uygula.

## Ne zaman KULLANILMAZ

- Transkript bir keşif toplantısı değilse (ör. iç ekip toplantısı, eğitim kaydı, webinar) → normal özet çıkar, bu şablonu zorlama.
- Kullanıcı sadece tek bir bilgi soruyorsa ("bu toplantıda bütçe konuşuldu mu?") → doğrudan cevapla, 7 bölümlük rapor üretme.

## Ana Akış

### 1. Girdiyi belirle
Transkript; yapıştırılmış metin, yüklenmiş dosya (.txt, .docx, .pdf) veya proje dosyaları
arasında olabilir. Dosya olarak verilmişse önce içeriği oku (gerekirse docx/pdf skill'ini kullan).
Birden fazla ilgili dosya varsa (örn. mevcut bir teklif dokümanı) bunları da bağlam olarak
dikkate al — rapor mevcut teklifle çelişmemeli, onu güçlendirmeli.

**Düşük kaliteli girdi:** Transkript çok kısaysa (<1 sayfa) veya konuşmacılar hiç ayrışmıyorsa,
raporu yine üret ama en başa tek satırlık bir not koy: *"Not: Transkript sınırlı — işaretli
bölümler doğrulama gerektirir."* Asla eksik bilgiyi uydurarak doldurma.

### 2. Zihniyeti benimse
Rapor boyunca şu persona ile yaz: **"Sen deneyimli bir uluslararası AI danışmanısın; kullanıcı
AI verimlilik projeleri yapan bir danışmanlık firmasının sahibi ve bu transkript onun ilk keşif
toplantısına ait."** Ton: profesyonel, net, satış/teklif sürecine doğrudan fayda sağlayacak
somutlukta. Gereksiz jargon yok; ama danışmanlık raporu ciddiyetinde.

### 3. Her zaman Türkçe ve 7 bölümlü çekirdek yapıyı üret

Rapor dili **her zaman Türkçe** — transkript İngilizce olsa bile (alıntılar orijinal dilde
bırakılabilir). Başlık formatı: `# [Müşteri Şirket Adı] — Keşif Toplantısı Analiz Raporu`.

Aşağıdaki 7 bölüm **varsayılan çıktıdır** — kullanıcı başka bir şey istemedikçe her zaman bu
yapıyla, bu başlıklarla ve bu sırayla üret:

1. **Özet (Executive Summary)** — 3-4 cümle: toplantının amacı + en kritik 2-3 bulgu. Uzatma.
2. **Ana Paydaşlar ve Rolleri** — Tablo: `Kişi | Rol/Departman | Tutum/Notlar`. Karar alma
   gücü kimde, hangi departmanlar temsil ediliyor, kim istekli kim mesafeli.
3. **Mevcut Durum ve Acı Noktaları (Pain Points)** — Süreç bazlı alt başlıklar (transkriptteki
   akışı takip et). Her acı noktasında mümkünse transkriptten somut veri: süre, adet, kişi sayısı.
4. **Fırsatlar ve Potansiyel AI Projeleri** — İki ayrı liste: **Kısa vadeli (quick win)** ve
   **Orta/uzun vadeli**. Her projede 1 cümle "ne" + 1 cümle "beklenen etki".
5. **Önceliklendirme** — Tablo: `Proje | İş Etkisi | Uygulama Kolaylığı | Maliyet | Zaman
   Kazandırımı | ROI Potansiyeli` (Yüksek/Orta/Düşük skalası). Altına sıralamanın mantığını
   1-2 cümlede açıkla.
6. **Riskler ve Dikkat Edilecek Konular** — Veri güvenliği, değişim direnci, yasal konular,
   entegrasyon zorlukları + **organizasyonel sinyaller** (kritik karar vericinin toplantıda
   olmaması, bir departmanın kapalılığı vb. — bu bölümün en değerli parçası).
7. **Sonraki Adımlar ve Önerilen Akış** — Numaralı eylem listesi: ikinci toplantı soruları,
   teklif için eksik bilgiler, kısa vadeli plan.

**Uzunluk hedefi:** Toplam 700-1200 kelime. Rapor "dolu" değil "isabetli" olmalı.

**Kalite kriterleri:**
- Genel geçer AI danışmanlığı klişeleri değil, **transkriptten doğrudan alınan somut örnekler,
  sayılar ve alıntı-benzeri gözlemler** kullan (ör. "1,5 yıllık öğrenme eğrisi", "10-12 parametre",
  belirli kişi/departman referansları).
- Rolü net olmayan konuşmacılar için "muhtemelen" gibi ifadelerle şeffaf ol — tahmin ettiğini gizleme.
- Markdown tabloları: Paydaşlar (bölüm 2) ve Önceliklendirme (bölüm 5) her zaman tablo.

### Mini örnek (bölüm 3'ten beklenen somutluk seviyesi)

> **Raporlama süreci:** Üretim müdürü haftalık OEE raporunu Excel'de manuel hazırlıyor —
> "her pazartesi 3-4 saatimi alıyor" (kendi ifadesi). Veri 3 ayrı sistemden (ERP, MES, manuel
> sayım) elle birleştiriliyor. Bu, Claude ile veri konsolidasyonu için en net quick-win adayı.

Bunun kötü versiyonu (ASLA böyle yazma): *"Şirketin raporlama süreçlerinde verimlilik
artışı potansiyeli bulunmaktadır."*

### 4. Ek modüller (yalnızca istenirse veya "tam kapasite" denirse ekle)

Kullanıcı açıkça istemedikçe varsayılan çıktıya **ekleme** — 7 bölümü şişirmemek önemli.
"Tam kapasite", "ekstra", "detaylandır" derse veya adıyla isterse ekle:

- **15 Güçlü Soru Listesi** — 5 kategori × 3 soru: Stratejik, Operasyonel, Teknoloji ve Veri,
  Değişim Yönetimi, Ölçüm ve Başarı Kriterleri.
- **SWOT Analizi** — AI dönüşümü odaklı.
- **Potansiyel ROI Tahmini** — Transkriptteki verilere dayalı, kaba. Tahmini olduğunu ve
  doğrulama gerektirdiğini MUTLAKA belirt.
- **Benzer Başarılı Vaka Örnekleri** — Sektöre yakın 2-3 gerçek örnek (web_search ile doğrula;
  uydurma marka/istatistik verme — bulamazsan "doğrulanmış örnek bulunamadı" de).
- **Önerilen Proje Roadmap** — 3-6-12 aylık akış.
- **Teklif Taslağı Ana Başlıkları** — Sadece iskelet, içerik değil.

### 5. Çıktı formatı

- Varsayılan: sohbet içi Markdown yanıt (başlıklı rapor formatında).
- "Word'e çevir", "dosya olarak ver" derse → `docx` skill ile profesyonel Word raporu,
  `/mnt/user-data/outputs`'a kaydet.
- Sohbet yanıtının sonunda kısa bir teklif sun: "İsterseniz bunu Word/PDF olarak da hazırlayabilirim."

## Asla Yapma

- Transkriptte olmayan sayı, isim, bütçe veya taahhüt üretme — eksikse eksik de.
- Müşteri şirketin adını başka müşterilerin raporlarıyla karıştırma — her rapor kendi
  şirket adıyla başlıklandırılır.
- 7 bölümü kullanıcı istemeden ek modüllerle şişirme.
- Rapora fiyat/teklif tutarı yazma — fiyatlandırma Sevim'in kararı, raporun işi değil.
- İngilizce rapor yazma (kullanıcı açıkça İngilizce istemedikçe).

## Örnek tetikleyici ifadeler

- "Bu transkripti analiz et, keşif raporu çıkar."
- "7 keşif raporu yap."
- "Müşteriyle yaptığımız discovery call'u değerlendir."
- "Bu toplantıdan pain point ve fırsatları çıkar."
- Bir transkript yapıştırıp hiçbir talimat vermeden "buna bak" demek (bağlamdan keşif toplantısı olduğu anlaşılıyorsa).

## Notlar

- Şirket/kişi isimleri transkriptte geçtiği gibi kullanılabilir (kullanıcının kendi müşteri
  verisi) — ama tanımlanamayan konuşmacılar ("Participant 2") için rolü bağlamdan çıkarırken
  temkinli dil kullan.
- Aynı kullanıcı için birden fazla müşteri transkripti gelebilir — her raporu ilgili şirketin
  adıyla başlıklandır, önceki müşterilerle karıştırma.
