# Stroomlijn — Design System

> AI-strategie, training én implementatie — **menselijk, praktisch, op maat.**

Stroomlijn helpt ondernemers en teams slimmer, rustiger en toekomstbestendig werken met AI. Gevestigd in Lemmer, Friesland. De naam betekent letterlijk "stroomlijn" (to streamline) en verwijst naar het wegnemen van onnodige wrijving in werk en processen.

---

## Bedrijf & producten

**Wat doet Stroomlijn?**
AI-strategie en procesarchitectuur voor mkb en teams. Vertaalt AI van hype naar werkbare praktijk.

**Primaire outputs / producten:**
- **Training & workshops** — van "wat is AI?" tot implementatie-sprints
- **AI-agents & chatbots** — op maat, geïntegreerd in bestaande processen
- **Automatiseringen** — workflow-automation, vaak met no/low-code tooling
- **Platform** — `app.stroomlijn.nu` (klantportaal / tooling suite)
- **Marketing site** — `stroomlijn.nu`

**Ligging:** Lemmer, Friesland (NL). Deze geografische grondslag — water, rust, nuchter — klinkt door in de visuele taal.

---

## Bronnen gebruikt

- `uploads/STROOMLIJN 2@3x.png` — primair wordmark-logo (teal, met tagline)
- `uploads/Favicon 45x45.png` — S-marque (stroom/rivier-metafoor)
- Brief met huisstijlkleuren, typografie en tone-of-voice guidance
- `app.stroomlijn.nu` — niet publiek toegankelijk ten tijde van opbouw; platform-UI is gebaseerd op de brand fundamentals hieronder

> ⚠️ **Voor iteratie:** als de volgende bronnen beschikbaar komen, voeg ze toe en we verfijnen:
> - screenshots van `app.stroomlijn.nu` of codebase-toegang
> - bestaande marketing-copy van `stroomlijn.nu`
> - eventuele Figma-bestanden of merkrichtlijnen
> - echte fontbestanden (nu: Inter via Google Fonts als substituut, zie "Fonts")

---

## 📁 Index — wat staat er in dit design system?

| Bestand / map | Inhoud |
|---|---|
| `README.md` | Dit document — merk, tone, visuele fundamentals, iconografie |
| `SKILL.md` | Portable skill-manifest voor Claude Code |
| `colors_and_type.css` | CSS-variabelen: kleuren, type, spacing, radii, shadows |
| `assets/` | Logo, favicon, brand imagery |
| `fonts/` | Font-fallback info (Inter via Google Fonts) |
| `preview/` | Cards voor de Design System tab (kleuren, type, componenten) |
| `ui_kits/website/` | Marketing-site UI kit (stroomlijn.nu) |
| `ui_kits/app/` | Platform UI kit (app.stroomlijn.nu) |

---

## 🖋 Content Fundamentals

Stroomlijn schrijft **Nederlands**, tweetalig waar nodig (EN). De toon is **nuchter, warm, praktisch** — Fries directness zonder kil te worden. Geen corporate fluff, geen hype-speak.

### Tone

| Wel | Niet |
|---|---|
| Kalm, helder, concreet | Opgejaagd, overtuigend verkoperig |
| "We pakken het samen op" | "Revolutionair" / "disruptive" / "next-gen" |
| Menselijk, met mate persoonlijk | Te joviaal of populair |
| Technisch correct waar nodig | Jargon als statussymbool |
| Praktische voorbeelden | Abstracte benchmarks |

### Stijl

- **Aanspreekvorm:** `je` / `jij` — toegankelijk, gelijkwaardig. "U" alleen op expliciet verzoek.
- **Wij vs ik:** "we" / "ons" voor het bedrijf; "jij" / "jullie" voor de klant.
- **Casing:** Sentence case voor koppen ("AI die aansluit op jouw werk"), niet Title Case. Uitzondering: het wordmark **STROOMLIJN** in full caps.
- **Zinslengte:** kort tot middel. Veel witregels. Laat lucht op de pagina.
- **Getallen & namen:** cijfers als cijfers vanaf 10. Productnamen in `Inter Semibold`.
- **Punctuatie:** em-dashes (—) voor pauzes, niet streepjes. Geen uitroeptekens (op één na, misschien).
- **Emoji:** niet gebruiken in marketing of product. Uitzondering: interne docs of speelse side-channels.
- **Engels:** termen als "AI", "workshop", "agent", "chatbot" blijven in het Engels. Geen vernederlandsing ("kunstmatige intelligentie" alleen in uitleg).

### Voorbeelden (do/don't)

**Headline — wel:**
> AI die aansluit op jouw werk.
> Geen toeters en bellen. Gewoon bruikbaar.

**Headline — niet:**
> 🚀 Revolutioneer je bedrijf met next-gen AI!!

**Productomschrijving — wel:**
> Een chatbot die jouw klantvragen behandelt, in jouw tone of voice. We bouwen 'm samen met je team, zodat je 'm zelf kunt bijsturen.

**Productomschrijving — niet:**
> Unlock the full potential of AI-driven customer engagement with our cutting-edge conversational interface solutions.

**CTA — wel:** `Plan een kennismaking` · `Bekijk de workshop` · `Start een pilot`
**CTA — niet:** `Get started now!` · `Claim your spot` · `Unlock access`

### Merk-aanspraak
Het merk spreekt in **"we"** (Stroomlijn als team), niet in "ik" (persoonlijk). Uitzondering: blogposts of interviews waar de auteur expliciet wordt vermeld.

---

## 🎨 Visual Foundations

### De metafoor
De naam **Stroomlijn** en het S-marque verwijzen naar **stromend water** — een rivier die een weg vindt door het landschap. Friesland. Rust. Continuïteit. De visuele taal leunt op:

- **Teal** (primair, `#4899A7`) — water, betrouwbaarheid, technisch
- **Warm goud** (`#BD9766`) — menselijkheid, aarde, praktijkgerichtheid
- **Zand** (`#F0EDE4`) — kalme canvas, warme neutraal
- **Donkerblauw** (`#1A2E4A`) — ink, autoriteit, nachthemel boven het water

### Kleurgebruik
- **Teal** is dominant op CTA's, links, accenten, headers. Spaarzaam gebruiken — een teal-knop per view is genoeg.
- **Goud** is een highlight — icoon-accenten, quote-marks, badges. Nooit als grote vlakken.
- **Zand** is de canvas — NIET pure wit. Dit geeft het merk zijn warmte.
- **Donkerblauw** is voor tekst en donkere secties (footer, testimonial-banden).
- **Verhouding** in een view: ~65% zand/wit · 20% donkerblauw (tekst) · 10% teal (accenten) · 5% goud (highlights).

### Typografie
- **Primair:** Inter (Google Fonts) — semibold voor koppen, regular/medium voor body.
- **Alternatief:** Open Sans (fallback in de brief genoemd).
- **Nooit:** serif display fonts, mono voor body, decoratieve fonts.
- **Koppen:** Inter Semibold (600), tight letter-spacing (-0.02em op grote maten).
- **Body:** Inter Regular (400), line-height 1.5–1.65, comfortabel.
- **Eyebrow / labels:** Inter Semibold, uppercase, `letter-spacing: 0.12em`.

### Spacing
- **4pt grid.** Alle spacing is een veelvoud van 4px.
- **Genereus.** Rustige, witruimte-rijke layouts. Minimum `24px` tussen content-blokken; `64–96px` tussen secties.
- Containers: `880px` (reading), `1120px` (marketing), `1280px` (app).

### Achtergronden & imagery
- **Canvas:** `--bg-canvas` (`#F0EDE4` zand) of puur wit voor app-UI.
- **Imagery:** warme natuurfoto's — water, landschap, handwerk, teams aan tafel. Geen stockfoto-AI-robot-clichés. Geen neon-gradients, geen "digitale deeltjes".
- **Gradients:** zeer spaarzaam. Als gebruikt: subtiel, binnen de brand-kleuren, nooit paars-blauw.
- **Patterns:** géén repeterende patterns. Wel: subtiele golflijnen als sectie-scheider (zie S-marque) — optioneel, decoratief.
- **Full-bleed:** ja, voor hero en sectie-openers. Altijd met rustige, matte imagery.
- **Illustraties:** minimalistisch lijnwerk (1.5px stroke, teal of donkerblauw). Geen cartoonstijl.

### Animatie
- **Rustig.** Fades en subtle translate (4–8px). Geen bounces, geen springerige easing.
- **Duur:** 120–320ms. Default 200ms.
- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` — soepele deceleratie, als water dat uitvloeit.
- **Scroll-reveal:** subtiele fade-in-up, 400ms, met stagger. Nooit een circus.
- **Loading:** skeleton shimmer in zand-tint. Geen spinners tenzij > 2s.

### States
- **Hover (buttons/links):** kleur verdiept (teal → `--brand-teal-deep`). Geen schaal-animatie op knoppen.
- **Hover (cards):** `shadow-sm` → `shadow-md` over 200ms. Optioneel 2px Y-lift.
- **Press:** lichte schaalverkleining (scale 0.98) OF donkerder kleur — niet beide.
- **Focus:** altijd zichtbare ring, `0 0 0 3px rgba(72,153,167,0.25)`.
- **Disabled:** opacity 0.5, geen cursor.

### Borders & shadows
- **Hairlines:** `1px solid #E1DED1` — warme neutraal, geen koud grijs.
- **Shadows:** subtiel en warm-getoonde (navy-tinted rgba). Nooit harde/zware shadows.
- `--shadow-sm` tot `--shadow-xl` gedefinieerd. Meeste UI gebruikt `sm` of `md`.

### Corner radii
- **Standaard:** `10px` (buttons, inputs, small cards).
- **Large surfaces:** `16px` (hero-cards, modals).
- **Pill:** alleen voor badges, tags, status-chips.
- **Nooit:** super-rounded/fluffy cards. De brand is rustig, niet speels.

### Cards
- Achtergrond: wit (`--bg-surface`).
- Border: `1px solid var(--border-1)`.
- Radius: `10–16px`.
- Shadow: `--shadow-sm` default, `--shadow-md` on hover.
- Padding: minimaal `24px`, vaak `32px`.

### Transparency & blur
- Zeer spaarzaam. Alleen voor:
  - Glass nav op scroll (backdrop-filter blur 12px, 85% zand)
  - Modale overlays (rgba(26,46,74,0.4))
- **Nooit:** glass morphism als sier-element.

### Layout
- **Sticky nav** bovenaan — semi-transparant op scroll.
- **Container gecentreerd** met genereuze padding.
- **Grid:** 12-kolom, 24px gutter op desktop.
- **Mobile:** single-column, 20px side-padding, secties `64px` uit elkaar.

---

## 🔤 Fonts

**Primair:** [Inter](https://fonts.google.com/specimen/Inter) — Google Fonts
**Alternatief:** [Open Sans](https://fonts.google.com/specimen/Open+Sans)

> ⚠️ **Substitutie genoteerd:** er zijn geen eigen webfontbestanden geleverd. We gebruiken Inter via Google Fonts CDN. Als Stroomlijn een self-hosted font-set heeft (WOFF2), graag aanleveren — dan plaatsen we ze in `fonts/`.

Weights gebruikt: 400, 500, 600, 700.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 🔸 Iconography

De brief specificeert geen iconensysteem, dus we hanteren een **consistente pragmatische lijn**:

- **Systeem:** [Lucide](https://lucide.dev/) — via CDN. Minimalistisch, 1.5px stroke, outline-stijl. Matcht de rustige, menselijke taal van het merk.
- **Stroke weight:** 1.5px default.
- **Size:** 16 / 20 / 24 / 32px — 4pt grid.
- **Kleur:** `currentColor` (erft van tekstkleur). Teal voor accent-iconen, donkerblauw voor content-iconen.
- **Emoji:** **niet gebruiken** in product-UI of marketing copy (per content rules). Eventueel in interne contexten.
- **Unicode:** terughoudend — alleen voor typografische effecten (em-dash —, ellipsis …).
- **SVG gebruik:** het S-marque als favicon / klein logo. Geen andere brand-SVG's aanwezig; verdere decoratieve SVG's **niet zelf tekenen** — altijd placeholder of vragen.

```html
<!-- Lucide via CDN -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="arrow-right"></i>
<script>lucide.createIcons();</script>
```

> ⚠️ **Substitutie genoteerd:** Lucide is gekozen als default iconset. Als Stroomlijn een voorkeur heeft (Heroicons, Phosphor, custom) — laat weten, dan passen we SKILL + UI kits aan.

---

## 🔁 Iteratie — wat mist

1. **Screenshots of code van `app.stroomlijn.nu`** — de app UI kit is nu op brand fundamentals gebaseerd, niet op de echte UI.
2. **Marketingcopy van `stroomlijn.nu`** — als er bestaande headlines/secties zijn, importeren we die voor nauwkeurigere woordkeus.
3. **Echte fontbestanden** — nu Inter via CDN.
4. **Icon-voorkeur** — Lucide staat klaar als default.
5. **Brand imagery** — nu placeholders; foto's van Lemmer / team / werksessies zouden geweldig zijn.
