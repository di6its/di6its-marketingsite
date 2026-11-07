# Design Reference — 6digits landing page

Image: [6digits-landing.png](./6digits-landing.png) (full-page mockup, desktop).

**Use when the user says:** "copy the design from the reference", "follow the design reference", "match the reference design", etc.
Read the image first (Read tool), then use this file for details the image can't show. Match layout, hierarchy, spacing, and mood — reuse existing tokens in `src/app/globals.css` rather than inventing new colors. Values below are estimated from the mockup.

## Mood
Dark, premium, "growth / productivity" SaaS. Deep navy-black background, vivid purple (grape) as the brand color, orange as the single warm CTA accent. Soft glows, glassy dark cards, thin low-contrast borders, rounded everything.

## Colors (map to existing tokens)
| Role | Token | Notes |
|---|---|---|
| Page bg | `--bg` | near-black navy, subtle purple radial glows behind hero/sections |
| Cards | `--surface` / `--surface2` | translucent dark, 1px `--border` |
| Brand / primary | `--grape`, `--grape-dim`, `--grape-mid` | headline accent word, buttons, icons, progress bars |
| Warm CTA | `--papaya` | used only on the final CTA "Get Started Free" |
| Text | `--fg`, `--fg-muted` | white headings, muted-lavender body |

Primary buttons: purple gradient (grape-dim → grape-mid), pill/rounded-full, soft purple glow shadow. Secondary: dark fill, 1px border, play/arrow icon.

## Typography
Geometric sans (Outfit / Urbanist / Plus Jakarta style), bold, tight leading. Large H1/H2 (~56–64px hero, ~36–40px sections) in white with **one key phrase in purple** (e.g. "6 digits."). Small uppercase eyebrow label above section headings (e.g. "WHY 6DIGITS?", "STAY ON TRACK"), sometimes in a pill with a dot/icon. Body ~15–16px muted.

## Page structure (top → bottom)
1. **Navbar** — logo left; centered links (About, Features ▾, Pricing, FAQ); right: "Sign in" text + small purple "Get Started →" pill.
2. **Hero** — two columns. Left: eyebrow pill "Your 30-Day Journey", H1 "One life. Make it **6 digits.**", paragraph, buttons ("Start Your 30-Day Journey →" primary, "▶ Learn More" secondary), avatar stack + "Trusted by 10,000+ people worldwide". Right: tilted glass "Your Progress" dashboard card (78% ring, checklist, line chart, "+12%" badge) over stacked purple layers.
3. **Feature strip** — full-width purple gradient band, 4 icon+label items separated by dividers (Build Better Habits · Track Your Progress · Achieve Big Goals · Live a Fulfilling Life).
4. **Why 6digits** — heading left, 3D target/bullseye illustration with floating trophy/heart icon tiles right. Below: 3 equal cards (icon tile, title, description): Save with Coupons, Work Tips & Step-Here, Do It Together.
5. **Stay on track** — left: "Track Your Progress" card with 3 labeled progress bars (85% / 72% / 90%) on stacked purple layers; right: eyebrow, heading, paragraph, "Start Your Journey →" button.
6. **What you'll learn** — heading "Three tracks. One goal: 6 digits." + laptop-with-logo 3D illustration and floating icon tiles. Row of 4 track cards (Virtual Assistant, Low-Code / No-Code, Marketing and AI, Lifestyle, Ebooks and more).
7. **Playbook banner** — large rounded purple-gradient card: pill "THE 30-DAY PLAYBOOK", title, description, white "Download Free eBook →" button, 3D book mockup on right. Bottom half darker: "What's inside" 2-column checklist.
8. **Testimonials** — eyebrow "REAL STORIES", heading, subtext, prev/next circular arrow buttons top-right; 3 quote cards (purple quote mark, quote text, avatar + name + role).
9. **Recruiter strip** — "Looking for a trained remote worker?" (accent phrase purple), 3 check badges (Pre-vetted talent · Flexible hiring · Grow your team), "Get Started" pill button right.
10. **FAQ** — left: eyebrow "COMMON QUESTIONS", heading, subtext. Right: accordion rows with "+" icons (What is 6digits?, How does the 30-day challenge work?, Can I join for free?, Do you offer refunds?, Is there a mobile app?).
11. **Final CTA** — full-width purple gradient with mountain-summit silhouette illustration; "One life." small, "One life. Let's start living it." large; orange "Get Started Free →" + outlined "Learn More".
12. **Footer** — logo, links (About, Features, Pricing, FAQ), social icons (YouTube, Facebook, X, LinkedIn), copyright left, tagline "Live Smarter. Achieve More." right.

## Layout & components
- Max content width ~1100–1200px, centered; generous vertical padding (~80–100px between sections).
- Cards: radius ~16–20px, 1px subtle border, dark translucent fill, small icon in a purple-tinted rounded square at top.
- Section headings are left-aligned, not centered (except inside the full-width CTA).
- Hero/section illustrations use glassy stacked rectangles and floating rounded icon tiles with purple glow — recreate with CSS/SVG, don't hotlink.
- Motion: subtle only (hover lift/glow on cards and buttons, gentle float on illustration tiles).

## Rules for agents
- Copy structure, hierarchy, spacing and feel — not the placeholder copy blindly, unless the user asks for exact text.
- Use design tokens from `src/app/globals.css`; add new ones there if needed, never hardcode hex in components.
- Must be responsive (columns stack on mobile; feature strip wraps to 2×2) and keep the light-theme tokens working.
- Check `node_modules/next/dist/docs/` before writing Next.js code (see AGENTS.md).
