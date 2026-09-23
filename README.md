# andy-learning

Personal website showing what I've learned and the certificates I've earned, in Vietnamese and English.
Built with [Astro](https://astro.build), Tailwind CSS and daisyUI, with the layout adapted from the [Astrofy](https://github.com/manuelernestog/astrofy) template.

## Pages

| Vietnamese        | English              | Content                                        |
| ----------------- | -------------------- | ---------------------------------------------- |
| `/`               | `/en/`               | Intro, stats, in progress, featured certificates |
| `/learning/`      | `/en/learning/`      | Everything learned, filterable by field and status |
| `/learning/<id>/` | `/en/learning/<id>/` | Details and notes for one topic                |
| `/certificates/`  | `/en/certificates/`  | Certificates, filterable by issuer             |
| `/certificates/<id>/` | `/en/certificates/<id>/` | Details, credential ID, verify link      |
| `/skills/`        | `/en/skills/`        | Skills by field with level and related items   |
| `/about/`         | `/en/about/`         | Profile, education, contact                    |

## Adding content

All content lives in `src/content/` and `src/data/profile.ts`. The current files are **examples**: replace them with your own.

Any text shown on the site can be one string for both languages, or `{ vi: ..., en: ... }`.
If `en` is missing, the Vietnamese text is used.

**Something you learned:** add `src/content/learning/<id>.md`. The file name becomes the URL.

```md
---
title: { vi: Lập trình React, en: React }
category: web                 # key from categories.yaml
status: learning              # planned | learning | done
source: Udemy                 # optional
sourceUrl: https://...        # optional
startedAt: 2026-06-01
completedAt: 2026-08-15       # optional
progress: 40                  # optional, % while learning
hours: 25                     # optional, adds up on the home page
summary: { vi: Component, props, state, hooks., en: Components, props, state, hooks. }
skills: [javascript]          # keys from skills.yaml
---

Notes in Vietnamese (optional).
```

English notes are optional: put them in `src/content/learning-en/<same id>.md`, body only.

**Certificate:** add `src/content/certificates/<id>.md`.

```md
---
title: AWS Certified Cloud Practitioner
issuer: aws                   # key from issuers.yaml
issuedAt: 2026-07-01
expiresAt: 2029-07-01         # optional
credentialId: ABC123          # optional
verifyUrl: https://...        # optional
image: certificates/aws.png   # optional, file in public/certificates/
score: "850"                  # optional
featured: true                # show on the home page
learning: aws-course          # optional, learning item that led to it
skills: [cloud]
---
```

**Lists:** fields in `src/content/categories.yaml`, issuers in `issuers.yaml`, skills (level 1–5) in `skills.yaml`.

**Profile:** name, intro, links and education in `src/data/profile.ts`. Replace `public/profile.svg` with your photo.

Mistakes (a missing field, a misspelled skill key, a bad date) make the build fail with a message saying which file to fix.

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies (requires Node 22+) |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the site into `dist/`              |
| `npm run preview` | Preview the built site                   |
| `npm run check`   | Type-check and validate content          |

## Publishing

`.github/workflows/deploy.yml` deploys to GitHub Pages on every push to `main`
(**Settings → Pages → Source: GitHub Actions**; GitHub Pages on a private repo needs a paid plan).
The site will be at https://andy-hdg.github.io/andy-learning/.

To deploy to Netlify, Vercel or Cloudflare Pages instead, set `base: '/'` and your domain as `site` in `astro.config.mjs`.
