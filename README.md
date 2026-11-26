# Personal website

A story-led personal site: intro, biography as a timeline, blog, and links to GitHub, LinkedIn and Academia. Built with [Astro](https://astro.build) and plain CSS, with no client-side JavaScript of its own (the only script is the optional Umami one below).

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve the built site
```

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main` (it can also be started by hand from the Actions tab). The repository is public, so Actions runs on standard runners are free. One-time setup: in the repository go to Settings, Pages, and set Source to **GitHub Actions**. The site then lives at `https://<user>.github.io/<repo>/`. The workflow sets `SITE` and `BASE_PATH` automatically; for a custom domain or a `<user>.github.io` repository, set `BASE_PATH` to an empty value in the workflow.

## Link previews (Open Graph)

Every page carries Open Graph and Twitter card tags, so links shared on LinkedIn and elsewhere show a title, a description and a picture. Titles and descriptions come from each page (for a post: its title and summary). The picture is `public/og-collage.jpg`, built from the collage by `node scripts/make-og-image.mjs`. Every page has an author tag, and the home page also carries schema.org `ProfilePage` data (author, the launch date in `src/data/site.ts`, and the build date as last modified). The tags with absolute URLs are only written when the deploy workflow's `SITE` variable is set, so local builds omit them. LinkedIn caches previews; to refresh one, paste the link into the free [Post Inspector](https://www.linkedin.com/post-inspector/).

## Visit statistics

The site can count visitors, their countries and how long they stay, using [Umami Cloud](https://umami.is), which sets no cookies. It is on when `analytics.websiteId` in `src/data/site.ts` is set, and off when it is empty. To set it up for a new site or account:

1. Create an Umami Cloud account and add the website (its address is `https://<user>.github.io/<repo>/`).
2. Copy the website ID Umami shows you.
3. Paste it into `analytics.websiteId` in `src/data/site.ts` and merge. The tracking script is only added to the deployed site (not local builds), only on the deployed host name, and it respects Do Not Track. A short note appears in the footer.
4. If you remove analytics again, update the "What I left out" section of the first post, which now mentions it.

## Where things live

| What | Where |
|---|---|
| Intro text, name, profile links | `src/data/site.ts` |
| Biography timeline, education, languages | `src/data/timeline.ts` |
| Blog posts (Markdown) | `src/content/blog/` |
| Fun pictures on the home page | `src/assets/fun/` (see its README) |
| Colours, spacing, radii, fonts | `src/styles/tokens.css` |
| Pages | `src/pages/` |

## Writing a blog post

Copy `src/content/blog/_template.md` to a new file without the leading underscore (for example `my-first-post.md`), fill in the front matter, set `draft: false`, and write in Markdown. The post appears on the Blog page and the home page automatically. Tags in the front matter become clickable tag pages (`/blog/tags/<tag>/`). Files that start with `_` and posts with `draft: true` are never published.

## Timeline colours

Each entry has a `kind` in `src/data/timeline.ts`: `role` (ink), `award` (blue), `volunteer` (green), `research` and `teaching` (pink). Every colour also shows a text label.

## Design

Colours, type and components follow the Personal Website design system: cool paper background, one blue accent, Comic Sans for headings only (Comic Neue is bundled as the fallback), a clean sans for body text, automatic dark mode.
