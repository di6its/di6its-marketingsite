# Static assets

Everything here is served from the site root: `public/images/hero/bg.webp` → `/images/hero/bg.webp`.

```
images/
  brand/         logo, wordmark, brand marks
  icons/         small UI icons / illustrations (prefer SVG)
  og/            social share images (og.png, twitter.png)
  hero/          Hero + HeroDashboard visuals
  story/         Story section
  courses/       Course cards / thumbnails
  employers/     Employer logos (TrustStrip, EmployerBand)
  team/          Founders + Team portraits
  testimonials/  Student avatars / posters
videos/
  hero/          Hero background / loop
  story/         Story section
  testimonials/  Testimonial clips
```

## Conventions

- **One folder per page section**, matching the component name. Shared assets go in `brand/` or `icons/`.
- **Names:** `kebab-case`, descriptive, no spaces (`founder-jane-doe.webp`, not `IMG_0231.JPG`).
- **Variants:** suffix the size or theme — `hero-bg-640.webp`, `logo-dark.svg`.
- **Video posters** live next to the section's images (`images/hero/hero-loop-poster.webp`), not in `videos/`.

## Formats and size

| Type | Format | Notes |
| --- | --- | --- |
| Logos, icons | SVG | Optimise with SVGO |
| Photos, illustrations | WebP / AVIF | Export at 2× the displayed size at most |
| Social share | PNG / JPG | 1200×630 |
| Video | MP4 (H.264) + WebM | Keep loops under ~3 MB, muted, no audio track |

## Usage

Use `next/image` for images and a plain `<video>` for video:

```tsx
import Image from "next/image";

<Image src="/images/hero/bg.webp" alt="" width={1280} height={720} priority />

<video autoPlay muted loop playsInline poster="/images/hero/hero-loop-poster.webp">
  <source src="/videos/hero/hero-loop.webm" type="video/webm" />
  <source src="/videos/hero/hero-loop.mp4" type="video/mp4" />
</video>
```

Empty folders are kept with `.gitkeep`; delete it once a folder has real files.
