---
name: sevimsoffice-carousel
description: "Generates branded Instagram carousel slides for Sevim's personal English-language account @sevimsoffice. Use this skill whenever Sevim asks to create a carousel, slides, or Instagram content for her English account, personal brand, or sevimsoffice. Trigger on: 'sevimsoffice carousel', 'English carousel', 'personal brand post', 'English Instagram post', 'Sevim's Office content'. Outputs a downloadable PNG per slide + ready-to-copy English Instagram caption. Do NOT use this skill for @ai_and_tech_cloud — use aiandtech-carousel for that."
---

# Sevim's Office — Instagram Carousel Generator

Generates on-brand English Instagram carousel slides as a React artifact.
Every slide has a **⬇ Save PNG** button. A full English Instagram caption is printed below the artifact.

**Account separation:** This skill is for the ENGLISH personal account only. The Turkish
brand account (@ai_and_tech_cloud) uses `aiandtech-carousel`, which has a DIFFERENT palette
(light linen `#EDE9E3` + terracotta `#C8634A`). This account uses the dark editorial palette
below. Never mix the two palettes.

---

## Account Identity

| | |
|---|---|
| Handle | @sevimsoffice |
| Language | English |
| Voice | Warm, direct, knowledgeable — like a smart friend who works in AI |
| Audience | Global English-speaking professionals, entrepreneurs, AI-curious women |
| Tone | Inspirational but grounded. No hype. No corporate-speak. Real talk. |
| Name on slides | Sevim Durmuş |
| Title on slides | AI Consultant & Educator |

---

## Brand Palette (EXACT hex — never deviate)

| Role | Hex | Usage |
|------|-----|-------|
| Cover background | `#1E1510` | Cover slide, CTA slide |
| Primary background | `#2C1F1A` | Most content slides |
| Secondary background | `#4A1F2E` | Alternating slides for rhythm |
| Accent / CTA | `#D4521A` | Italic words, buttons, rules, highlights |
| Warm sand | `#C4A882` | Bullet accents, secondary emphasis |
| Sage green | `#7B9E8F` | Swipe CTAs, labels, supporting text |
| Cream text | `#F5F0EB` | All main headline text |
| Muted text | `#B8A99A` | Body copy, subtext, captions |

---

## Typography

- **Headlines**: `Playfair Display` bold 700/800 — large, commanding
- **Italic accent word(s)**: `Playfair Display` italic, color `#D4521A` — 1-2 words max per headline
- **Body / subtext**: `DM Sans` 300 — clean, readable
- **Labels / CTAs**: `DM Sans` 500, all-caps, letter-spacing 0.18-0.2em

### The Signature Move
Bold serif headline + italic terracotta accent word:

```
You're not bad at AI.
You're using it
the wrong way.
```
→ "wrong way" = italic Playfair + `#D4521A`

---

## Slide Structure

| # | Type | Notes |
|---|------|-------|
| 1 | Cover | Hook + "Sevim's Office" wordmark. `#1E1510`. Scroll-stopper. |
| 2–N-1 | Content | One idea per slide. Big headline. Italic accent. Short subtext. |
| N | CTA | Action ask + @sevimsoffice + name |

Default 6–8 slides. Min 4. Max 10.

### Example slide plan (topic: "5 Claude prompts that save me 5 hours a week")
1. Cover: "5 prompts. *5 hours* back. Every week." + wordmark
2. "Prompt 1 — The *context* dump" + 1-line what it does + micro-example
3. "Prompt 2 — The *devil's advocate*" + subtext
4. "Prompt 3 — The *rewrite* in my voice" + subtext
5. "Prompt 4 — The *decision* memo" + subtext
6. "Prompt 5 — The *weekly* review" + subtext
7. CTA: "Which one are you stealing first? 💬" + @sevimsoffice

---

## Wordmark (Cover & CTA slides)

```
Sevim's Office
```
Rendered as:
- "Sevim's" → Playfair Display italic, `#D4521A`
- "Office" → Playfair Display bold 800, `#F5F0EB`

Subtitle line: `AI CONSULTANT & EDUCATOR` — DM Sans, 9px, `#7B9E8F`, all-caps, letter-spaced

---

## Signature Design Elements

- ✦ motif top-right corner, `#D4521A`, opacity 0.7
- Thin terracotta rule (28px × 1.5px) under label on every slide
- `KEEP SWIPING →` as swipe CTA on content slides (bottom-right, sage green)
- Slide counter top-left (e.g. `1/8`), very faint
- `@sevimsoffice` in terracotta pill/tag on CTA slide

---

## Content Tone Rules (English voice)

Sevim's English voice for @sevimsoffice:
- **Direct** — "You're doing X wrong" not "Many people struggle with X"
- **Warm** — talking to a smart friend, not a student
- **Grounded** — real examples, no buzzwords
- **Confident** — she has 10+ years of experience, it shows
- **Personal** — first person is fine: "I tested this", "Here's what I found"
- Short sentences. High impact. Never more than 2 lines of body text per slide.

Banned words: revolutionary, game-changer, unleash, paradigm, transformative, leverage (as a verb), utilize, seamless, robust, delve

---

## Download PNG — REQUIRED in every carousel

Every slide MUST have a **"⬇ Save PNG"** button.

### iOS detection + implementation:
```jsx
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

const handleSave = async () => {
  setStatus("rendering");
  const h2c = await loadH2C();
  const canvas = await h2c(slideRef.current, {
    scale: 2, useCORS: true,
    backgroundColor: slide.bg,
    width: slideRef.current.offsetWidth,
    height: slideRef.current.offsetHeight,
  });
  const dataUrl = canvas.toDataURL("image/png");
  if (isIOS) {
    // Show inline <img> — user long-presses → "Save to Photos"
    setPreviewSrc(dataUrl);
    setStatus("preview");
  } else {
    const a = document.createElement("a");
    a.download = `sevimsoffice-slide-${current + 1}.png`;
    a.href = dataUrl; a.click();
    setStatus("idle");
  }
};
```

- Button label: `⬇ Save Slide X` (desktop) / `📷 Save Slide X` (iOS) / `Preparing...` (loading)
- iOS hint below button: "Tap button → Long press image → Save to Photos"
- Button style: `#D4521A` background, cream text, DM Sans uppercase

---

## Caption Block — REQUIRED after every carousel

Print as copyable text block after the React artifact, every time:

```
━━━━━━━━━━━━━━━━━━━━━━━━
📋 INSTAGRAM CAPTION
━━━━━━━━━━━━━━━━━━━━━━━━

[Hook — punchy, no emoji, mirrors slide 1]

[2-3 sentences: what they'll learn / why it matters]

[CTA: "Save this 🔖", "Drop a 💬 below", "Share with someone who needs this"]

👉 Follow @sevimsoffice for more

[Hashtags]

━━━━━━━━━━━━━━━━━━━━━━━━
```

Caption rules:
- Max 150 words
- First line = hook, no emoji, punchy
- Max 3 emojis total, functional not decorative
- Hashtags: 8–12, English only
- Always end with: `👉 Follow @sevimsoffice for more`
- Sevim's voice: warm expert, no hype words
- Include "Copy" button that copies full text to clipboard

### Hashtag pool (mix and match per topic):
`#AItools` `#WorkSmarter` `#AIforWork` `#ProductivityTips` `#AIConsultant`
`#ClaudeAI` `#PromptEngineering` `#FutureOfWork` `#WomenInTech` `#AIeducation`
`#SevimDurmus` `#SevimsOffice` `#TechTips` `#AICareer` `#DigitalTransformation`

---

## Output Process

1. Extract: topic, source content, slide count (default 6), any specific CTA
2. Plan slides briefly (list them) — proceed without waiting for approval unless ambiguous
3. Generate React artifact with:
   - All slides in the @sevimsoffice dark palette above
   - "Sevim's Office" wordmark on cover (not AIandTech)
   - @sevimsoffice handle on CTA slide
   - PNG download button (iOS-compatible)
4. Output English Instagram Caption Block below artifact

---

## Never Do

- Never use the aiandtech-carousel light linen palette here (`#EDE9E3` / `#C8634A`) —
  this account is dark editorial only
- Never write slides or caption in Turkish — this is the English account
- Never bake the caption or hashtags into a slide image
- Never use a banned word, even in the caption
- Never exceed 2 lines of body text on a slide — cut, don't shrink the font
- Never invent personal claims ("I built X for client Y") that Sevim didn't provide —
  first person is for her real experience, supplied in the request

---

## Key Differences vs aiandtech-carousel

| | aiandtech-carousel | sevimsoffice-carousel |
|---|---|---|
| Language | Turkish | English |
| Account | @ai_and_tech_cloud | @sevimsoffice |
| Palette | Light linen `#EDE9E3` + terracotta `#C8634A` | Dark espresso `#1E1510`/`#2C1F1A` + terracotta `#D4521A` |
| Wordmark | AI*and*Tech | *Sevim's* Office |
| Audience | Turkish SMEs / KOBİ | Global English professionals |
| Voice | Expert consultant | Warm personal brand |
| CTA ending | `Yorumlara BİLGİ yazın` | `Follow @sevimsoffice for more` |
| Download filename | `aiandtech-slide-X.png` | `sevimsoffice-slide-X.png` |

Download logic and slide-scaling technique are shared; palettes and language are NOT.
