# Design — Portfolio (studied DNA)

Locked design system. Future Hallmark runs read this file first; pages defer
to it. Amend intentionally — the file is the rule.

## System
- Genre · atmospheric (terminal voice)
- Macrostructure · Split Studio (leans Letter)
- Theme · studied-DNA (source: https://vyrx.dev)
- Axes · dark / mono / chromatic-green (olive)
- Nav · N1a wordmark left + mac traffic dots right · sticky frost
- Footer · Ft8 socials spread (`space-around`)
- Hero · H2 Split · ratio auto/1fr · left = portrait · right = identity
- Pitch · F3 tabular spec · `$ cat file` as section head

## Provenance
Extracted from `https://vyrx.dev` as a public reference for the user's brand
on 2026-08-15. Attestation: (b) public reference for own brand. The DNA is
structural; specific tokens may need to be regenerated to match the user's
brand identity rather than the source's.

Tokens are exact (extracted from source CSS). Fonts are exact (Google Fonts
`JetBrains Mono` 300–700 + italic 400). Rhythm judged from a live render
(medium-dense, left-biased split) — HTML-only URL mode cannot judge rhythm
on its own.

Do not copy the source's canvas-ASCII portrait, vim keybinds, or `/gears`
easter egg. Those are signature, not DNA.

## Tokens (canonical · `tokens.css` is the source of truth)
```css
:root {
  --color-paper:        oklch(16.30% 0.0027 248.0); /* #0d0e0f */
  --color-paper-2:      oklch(19.06% 0.0026 248.0); /* #131415 card */
  --color-paper-3:      oklch(22.52% 0.0049 248.0); /* #1a1c1e muted */
  --color-ink:          oklch(81.06% 0.0567 81.2);  /* #d4be98 */
  --color-ink-2:        oklch(55.05% 0.0234 62.6);  /* #7c6f64 */
  --color-rule:         oklch(27.15% 0.0047 248.0); /* #252729 */
  --color-accent:       oklch(79.47% 0.1082 116.2); /* #b8c572 olive */
  --color-accent-ink:   oklch(16.30% 0.0027 248.0);
  --color-focus:        oklch(79.47% 0.1082 116.2);
  --color-dim:          oklch(55.91% 0.0161 74.3);  /* #7a736a */
  --color-red:          oklch(71.51% 0.1430 28.9);
  --color-orange:       oklch(75.37% 0.1334 53.8);
  --color-yellow:       oklch(78.45% 0.1146 79.2);
  --color-aqua:         oklch(77.02% 0.0886 146.6);
  --color-blue:         oklch(76.30% 0.0599 179.6);
  --color-purple:       oklch(70.54% 0.0976 2.2);

  --font-display: "JetBrains Mono", ui-monospace, monospace;
  --font-body:    "JetBrains Mono", ui-monospace, monospace;
  --font-mono:    "JetBrains Mono", ui-monospace, monospace;

  --space-3xs: 2px; --space-2xs: 4px; --space-xs: 8px;
  --space-sm: 12px; --space-md: 16px; --space-lg: 24px;
  --space-xl: 32px; --space-2xl: 48px; --space-3xl: 64px; --space-4xl: 96px;

  --text-xs: 0.6875rem; /* 11px chips */
  --text-sm: 0.75rem;    /* 12px */
  --text-base: 0.875rem; /* 14px body */
  --text-md: 1rem;
  --text-lg: 1.5rem;
  --text-xl: 1.875rem;   /* hero name */

  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --dur-fast: 150ms; --dur-base: 200ms; --dur-slow: 400ms;

  --radius-card: 3px; --radius-pill: 3px; --radius-input: 3px;
  --rule: 1px;
}
```

## CTA voice
- Primary · outline, aqua ink + aqua/30 border · 3px · `px-3 py-1.5` · 12px
- Secondary · outline, muted ink + rule border · same radius + pad
- Wordmark · accent + `terminal-glow` (`0 0 8px #a9b66533`)
- No filled slabs. No pills.

## Motion stance
- Silent. One reveal: `fade-in` 400ms ease-out, 8px rise. Optional blink on prompt.
- No hover-scale. No `transition-all`. Colour + opacity only, ≤200ms.
- Reduced-motion · animation none; opacity 1.

## Notes — do not carry over
- `transition-all` on chips / buttons
- `hover:scale-110`
- Hero skill-chip cloud as a default (source uses one; treat as optional, not identity)
- Canvas-ASCII / animated face, vim keybinds, `/gears` toy — signature of the source, not the system
- Invented metrics, fake star counts, fake contribution graphs
- Italic display headers (none here; keep roman)

## Exports
`tokens.css` (in this project) is the source of truth. For Tailwind v4
`@theme`, DTCG `tokens.json`, or shadcn/ui CSS variables, ask *"extend
design.md with Tailwind exports"* — Hallmark will append them.
