# Stroomlijn — Homepage (Next/Tailwind/TSX)

Drop-in homepage in jullie codebase-stijl: `"use client"`, Tailwind utilities, `lucide-react` icons, content uit `home.json`.

## Structuur

```
home/
├── home.json              ← alle copy + structuur
├── types.ts               ← HomeContent + per-sectie shapes
├── icons.ts               ← IconName → lucide-react map
├── tailwind.tokens.ts     ← brand-kleuren (teal/gold/navy/sand) + radii/shadows
├── Home.tsx               ← root page
└── sections/
    ├── Nav.tsx
    ├── Hero.tsx
    ├── TrustBar.tsx
    ├── Werkwijze.tsx
    ├── Services.tsx
    ├── CTABand.tsx
    ├── FAQ.tsx
    └── Footer.tsx
```

## Inpluggen

1. **Kopieer** `home/` naar `src/pages/Home/` (of `app/page.tsx` voor Next App Router).
2. **Tailwind config** — merge `tailwind.tokens.ts` in jullie `tailwind.config.ts`:
   ```ts
   import stroomlijn from "./src/pages/Home/tailwind.tokens";
   export default {
     // ...
     theme: {
       extend: {
         ...stroomlijn.theme!.extend,
       },
     },
   };
   ```
3. **JSON imports** — `tsconfig.json`: `"resolveJsonModule": true`.
4. **Iconen** — gebruikt `lucide-react` (zit waarschijnlijk al in jullie deps).
5. **Inter font** — laad via Google Fonts of `next/font`.
6. **Assets** — `home.json` verwijst naar `/photos/...` en `/clients/...` — leg ze in `public/` of pas paden aan.

## Per-sectie

Elke sectie is een **standalone client-component** met dezelfde shape:
```tsx
export function <Naam>({ data, onNav }: { data: <Naam>Data; onNav?: (href: string) => void }) { ... }
```
Importeer ze los als je een sectie hergebruikt op een andere pagina.

## Patronen die ik gevolgd heb (uit je screenshot)

- `"use client"` bovenaan elk bestand met state of effects (Hero, FAQ, Nav, etc.)
- Tailwind classes — geen CSS files
- `lucide-react` voor iconen, gemapt via `icons.ts` zodat de JSON gewoon strings bevat
- Named exports per component, geen `default` (op `Home.tsx` na als route entry)

## Wat je nog moet vervangen voor productie

- `<a href onClick>` → jullie `<Link>` component (uit screenshot: `@/components/common/Link`)
- Smooth-scroll `onNav` werkt voor `#anchor` links — vervang als jullie router het overneemt
- Voor het contact-form (niet meegeleverd) gebruik je jullie `useWvcForm` + shadcn `Form` exact zoals in `ConnectWithTheCrew.tsx`

## Niet meegenomen — zelfde patroon als je toevoegt

`AIAct`, `About`, `Reviews`, `Media`, `Contact`. Per stuk:
1. Type toevoegen aan `types.ts`
2. Slice aan `home.json`
3. `sections/<Naam>.tsx` schrijven
4. Importeren in `Home.tsx`
