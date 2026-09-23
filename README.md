# andy-learning

Personal website to showcase what I've learned and the certificates I've earned. Built with [Astro](https://astro.build).

## Adding content

Each item is one Markdown file. There's no need to touch the code.

**What you learned:** add a file to `src/content/learning/`, for example `react.md`:

```md
---
title: React
category: Web
date: 2026-06
status: learning   # or: done
description: Components, props, state, hooks.
link: https://react.dev   # optional
---

Notes go here (optional). When this section has content, the item links to its own page.
```

**Certificates:** add a file to `src/content/certificates/`:

```md
---
title: AWS Certified Cloud Practitioner
issuer: Amazon Web Services
date: 2026-07
credentialId: ABC123                     # optional
url: https://www.credly.com/badges/...   # optional, verification link
image: certificates/aws-ccp.png          # optional, file in public/certificates/
---
```

Name, tagline, intro and links live in `src/lib/profile.ts`.

## Commands

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Install dependencies (requires Node 22+) |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the site into `dist/`              |
| `npm run preview` | Preview the built site                   |
| `npm run check`   | Type-check and validate content          |

## Publishing

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.
One-time setup: **Settings → Pages → Source: GitHub Actions**.
The site will be at https://andy-hdg.github.io/andy-learning/.
