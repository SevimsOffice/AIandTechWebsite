---
name: aiandtech-prospecting
description: "Full prospecting pipeline for AIandTech (Sevim Durmuş / aiandtech.cloud) to find, qualify, and pitch corporate AI training clients in Turkey. Use this skill whenever Sevim asks to find prospects, find clients, find leads, search for companies to contact, identify training opportunities, generate outreach, write pitch messages, or research Turkish companies for AI training sales. Also trigger when she asks to build a prospect list, qualify a company, or figure out which training to pitch to a specific company or industry. This skill powers the entire pipeline: Vibe Prospecting search → program matching → Turkish outreach generation."
compatibility: "Works best with Vibe Prospecting tool connection; has a web-research fallback"
---

# AIandTech Prospecting Pipeline

Full pipeline: **Search → Match → Outreach**

Read `references/catalog.md` before starting — it contains the full program list and
industry/role mapping tables. Always complete all three stages unless the user explicitly
asks for only one.

---

## Overview

This skill helps Sevim find Turkish mid-to-large corporate clients for AIandTech's Claude
training and consulting services. Three sequential stages:

1. **SEARCH** — Find Turkish companies + decision-maker contacts via Vibe Prospecting (Apollo.io)
2. **MATCH** — Map company profile to the best-fit training program(s) from the catalog
3. **OUTREACH** — Generate a personalized Turkish-language pitch message

**Tool not connected?** If Vibe Prospecting tools are unavailable, say so in one line, then
run Stage 1 in fallback mode: web_search for companies matching the criteria (sector + size +
city), collect company names and likely decision-maker roles from public sources. Mark every
fallback row's contact as "TBD — manuel LinkedIn araması önerilir". Never fabricate a person's
name, title, or email.

---

## Stage 1: SEARCH (Vibe Prospecting)

Use `Vibe Prospecting:fetch-entities` with `entity_type: "prospects"` to find Turkish
decision-makers at mid-to-large companies.

### Default search parameters:
```
company_country_code: TR
company_size: 201-500, 501-1000, 1001-5000
job_level: c-suite, director, vice president
job_department: c-suite, operations, it (adjust per sector request)
```

### Collect from user if not provided (otherwise proceed with defaults, don't block):
- **Industry/sector** → `linkedin_category` filter (run Vibe Prospecting autocomplete first) or `company_tech_stack_category`
- **City/region** → ISO 3166-2 via `company_region_country_code`: TR-34 (Istanbul), TR-06 (Ankara), TR-35 (Izmir)
- **Number of prospects** — default: 10

### Department mapping by sector:
| Sector | job_department | job_level |
|--------|---------------|-----------|
| Manufacturing | manufacturing, operations | director, c-suite |
| Finance / Banking | finance | c-suite, director |
| Tech / Software | it | c-suite, director |
| HR / Consulting | human resources | director, manager |
| Marketing / FMCG | marketing | c-suite, director |
| Healthcare | healthcare | c-suite, director |

### Output format for Stage 1:
| # | Company | City | Contact | Title | LinkedIn |
|---|---------|------|---------|-------|---------|

---

## Stage 2: MATCH

For each company, consult `references/catalog.md` (Industry → Program and Role → Program
tables) and select:
- **Primary program**: Best fit
- **Secondary program**: Upsell or alternative
- **Entry point**: If unsure, always suggest EĞİTİM 01 as a low-barrier start

### Matching logic (apply in order):
1. Industry → primary recommendation from mapping table
2. Contact role → confirm or adjust recommendation
3. Company has 200+ employees with multiple departments → add EĞİTİM 03 (Teams)
4. Contact is C-level → always include EĞİTİM 06 as an option
5. Company is tech/software → consider EĞİTİM 05 or 08

### Output format for Stage 2:
Append two columns to the Stage 1 table: **Primary Program** | **Secondary Program**

---

## Stage 3: OUTREACH

Generate a personalized Turkish-language message for each prospect (or the top 3 if the
list is longer than 5 — say which 3 and why).

### Sender identity (always include):
- **Sevim Durmuş** — AI Danışmanı & Cloud Mimarı
- AWS Çözüm Mimarı | AWS Community Builder | Claude AI Uygulayıcısı
- AIandTech kurucusu | aiandtech.cloud

### Message structure (6 parts, in order):
1. **Kişisel selamlama** — contact by name and title ("X Bey/Hanım")
2. **Sektörel bağlantı** — 1 sentence showing you understand their world
3. **Somut problem** — a real pain point their role faces (reporting, speed, cost, efficiency)
4. **Program önerisi** — exact program name from catalog + ONE key outcome
5. **Düşük engelli CTA** — 30 dakikalık keşif görüşmesi önerisi, hard sell değil
6. **İmza** — Sevim's full credentials

### Tone:
- Formal Turkish (Sayın, sizi, sizin)
- Confident but not salesy — process consultant, not trainer
- Maximum 150 words per message
- No AI buzzwords (yasak: "devrim", "oyun değiştirici", "yapay zeka çağı")

### Channel variants:
- **LinkedIn DM**: Shorter (80–100 words), casual opener, no subject line
- **E-posta**: Full structure (120–150 words) with subject line
- Default: e-posta, unless user specifies LinkedIn

### Example subject lines:
- `[Şirket adı] için Claude ile haftalık raporlama süresini yarıya indirme`
- `[Sektör] ekiplerine özel yapay zeka verimlilik programı — 30 dk görüşme`
- `[İsim Bey/Hanım] — [Şirket] için AI dönüşüm yol haritası`

### Example message (reference quality — e-posta, manufacturing sector):

> **Konu:** Üretim raporlamasında Claude ile zaman kazanımı — 30 dk görüşme
>
> Sayın Yılmaz Bey,
>
> Üretim tarafında haftalık OEE ve vardiya raporlarının birden fazla sistemden elle
> derlendiğini sık görüyoruz — çoğu üretim müdürü için bu, haftada yarım günden fazla
> zaman demek.
>
> AIandTech olarak üretim ekiplerine özel **"Üretim ve Mühendislik Yönetiminde Claude"**
> programını uyguluyoruz; katılımcı ekipler raporlama sürelerini ortalama %50 kısaltıyor
> ve ERP verisini Claude ile analiz eder hale geliyor.
>
> [Şirket] için nasıl bir kazanım mümkün, 30 dakikalık bir keşif görüşmesinde somut
> örneklerle gösterebilirim. Uygun olduğunuz bir zamanı iletirseniz memnun olurum.
>
> Saygılarımla,
> Sevim Durmuş
> AI Danışmanı & Cloud Mimarı — AWS Çözüm Mimarı | AWS Community Builder
> AIandTech Kurucusu | aiandtech.cloud

Bad version (never write like this): *"Yapay zeka çağında geride kalmayın! Devrim
niteliğindeki eğitimlerimizle şirketinizi dönüştürüyoruz!"*

---

## Full Pipeline Output

Present results in this order:
1. **Prospect table** (company + contact + matched programs)
2. **Top 3 outreach messages** (formatted, ready to send)
3. **Quick summary** — exactly three lines: `Toplam prospect: N` · `Yoğunlaşma: [sektör/şehir]` · `Önerilen sonraki adım: [tek cümle]`

---

## Edge Cases

- **No contacts found for a company**: Include the company with "Contact: TBD — manuel LinkedIn araması önerilir"
- **User provides a specific company name**: Skip Stage 1 → Stage 2 (match) → Stage 3 (outreach)
- **User provides a contact name only**: Use `Vibe Prospecting:match-prospects` with name + company to enrich, then Stage 3
- **"Which program should I pitch to X?"**: Stage 2 only, recommendation with 2-3 sentence rationale
- **"Generate outreach only"**: Stage 3 only with available context
- **Vibe Prospecting unavailable**: Fallback mode (see Overview) — never silently fail, never fabricate contacts

## Never Do

- Never invent a contact's name, title, email, or LinkedIn URL — unverified fields are "TBD"
- Never state facts about a company (revenue, headcount, projects) that didn't come from the
  tool results or a web source — if you inferred it, say "tahmini"
- Never quote a price, discount, or guarantee in outreach — pricing is Sevim's call
- Never promise a specific ROI number to a prospect; catalog outcomes ("%50 kısaltma") may be
  cited as program results, not as guarantees
- Never send/submit anything anywhere — this skill DRAFTS outreach; sending is always Sevim's action
- Never write outreach in English unless Sevim explicitly asks (target market is Turkish)

---

## Reference Files

- `references/catalog.md` — Full program descriptions, industry mapping, role mapping
  → Read this at the start of every Stage 2 execution
