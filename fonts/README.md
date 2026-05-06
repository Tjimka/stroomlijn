# Fonts

No custom font files were provided with the brief.

## Primary: Inter (Google Fonts)

Loaded via CDN in all HTML files. Weights used: 400, 500, 600, 700.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Substitution flag

The brief calls for Inter OR Open Sans. We standardized on **Inter** because:
- Tighter, more modern letterforms at display sizes
- Better numerals (tabular-nums available)
- Slightly more aligned with the tight, precise STROOMLIJN wordmark

If Stroomlijn has self-hosted WOFF2 files, drop them in this folder and update `colors_and_type.css` with `@font-face` declarations — we'll swap out the Google Fonts link.
