# maksugr.com

Personal website by Roman Ponomarev. Built with [Astro](https://astro.build/), inspired by [AstroPaper](https://github.com/satnaing/astro-paper) theme.

## Stack

- [Astro](https://astro.build/) + [TailwindCSS](https://tailwindcss.com/)
- [Pagefind](https://pagefind.app/) for search
- [Shiki](https://shiki.style/) for syntax highlighting

## Development

```bash
npm install
npm run dev
```

Dev server starts at `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

> **Vercel deployment note:** set Build Command to `npm run build` (not just `astro build`), because it also runs `astro check`, `pagefind`, and copies the search index to `public/`.

## Adding a new post

Create a `.md` file in `src/data/blog/` with frontmatter:

```md
---
title: "Post title"
description: "Short description"
pubDatetime: 2024-01-01T00:00:00Z
tags: [tag1, tag2]
featured: false
draft: false
---

Content goes here.
```

## Adding a new talk

Add an entry to the `TALKS` array in `src/data/talks.ts`:

```ts
{
  title: "Talk title",
  videoId: "YouTube_video_ID",
  url: "https://www.youtube.com/watch?v=YouTube_video_ID",
  event: "Conference Name",
  lang: "en", // "en" or "ru"
}
```

## Project structure

```
src/
  config.ts        # Site metadata
  constants.ts     # Social links
  data/blog/       # Blog posts (.md)
  data/talks.ts    # Conference talks
  pages/           # Routes
  layouts/         # Page layouts
public/
  favicon/         # Favicons
  og-image.png     # Default OG image
```

## License

Content is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code is licensed under [MIT](LICENSE).
