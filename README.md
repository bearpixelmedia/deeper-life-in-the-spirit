# Deeper Life in the Spirit

Marketing landing page for *Deeper Life in the Spirit: A Journey into Intimacy with God through His Word* by Pastor Dr. Daniel Page.

Primary CTA: [Amazon product page](https://www.amazon.com/Deeper-Life-Spirit-Journey-Intimacy/dp/B0HP1MQR7B)

## Stack

- Vite + React + TypeScript
- Framer Motion (subtle hero / scroll motion)
- Cover art loaded from the Amazon product media CDN (also mirrored locally as `public/cover.jpg` for offline/dev)

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

`npm run build` outputs a static site in `dist/`.

## Deploy

Any static host works:

### Vercel

```bash
npx vercel
```

Or connect this GitHub repo in the Vercel dashboard (framework preset: Vite).

### Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

## Content sources

| Field | Source |
| --- | --- |
| Title, description, ISBN, publisher, date, cover | Amazon ASIN `B0HP1MQR7B` |
| Author pastoral bio | [Crestview Baptist Church staff page](https://crestviewcanton.com/about-staff/) |

Do not add invented endorsements or reviews.
