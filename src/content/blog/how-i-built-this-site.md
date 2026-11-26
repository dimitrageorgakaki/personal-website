---
title: "How I built this site, and why I chose this stack"
date: 2026-11-24
summary: "A short tour of the tools behind this site (Astro, plain CSS and GitHub Pages) and the reasons I chose each one."
tags: ["web", "design", "astro"]
---

I wanted a place that tells the story of my work instead of listing it: a short introduction, a biography as a timeline, and a blog. I also wanted it to be cheap to run and easy to keep up, so I could spend my time writing and not maintaining it. Here is what I chose and why.

## Design first, code second

Before writing any code, I wrote the design down as a small design system: colours, type, spacing and a handful of components. The choices are personal. Blue is my favourite colour, so it is the one accent. Comic Sans is my favourite font, so it sets the headings, while body text uses a plain sans-serif that is easier to read in long paragraphs. The timeline uses a different colour for each kind of entry (roles, awards, volunteering, teaching and research), and each one also has a text label so the meaning never depends on colour alone.

The site's stylesheet is generated from those design tokens, so the design and the code cannot quietly drift apart.

## Astro for the site

The site is built with [Astro](https://astro.build). Almost everything here is content: text, a timeline, blog posts. Astro turns that into plain HTML files at build time and sends no JavaScript to the browser unless I ask for it. The pages load quickly, there is nothing to break on the client, and there is no server to look after.

I considered a React-based framework and decided against it. It is a good tool for applications, but a personal site does not need an application.

## Markdown and Git instead of a CMS

Each blog post is a Markdown file with a few lines of front matter: title, date, summary, tags. Astro checks those fields when it builds, so a typo fails loudly instead of publishing a broken page. Publishing a post means adding a file. There is no database to patch and no admin login to protect, and Git keeps the full history of everything I write.

## Plain CSS

The site is small, and the design tokens are CSS custom properties, so I did not need a styling framework. Dark mode is one media query that swaps the colours.

## GitHub Pages for hosting

The repository is public, and GitHub Pages hosts static sites for free. A short workflow builds the site and publishes it whenever I merge a change. I looked at other hosts that offer nicer preview links, but keeping the code, the history and the hosting in one place won for now. If I outgrow it, moving a static site is easy.

## What I left out

There is no analytics script, no comment system and no cookie banner. I also skipped an RSS feed for now. Each of these can be added later, and each one makes the site heavier. I would rather start small.

## Built with an AI assistant

I built the site together with Claude, an AI assistant. I made the decisions about what to say and how it should look, and Claude wrote much of the code and checked the result on desktop and phone sizes. It was a good way to turn a clear idea into a working site quickly.

This is the first post. More will follow.
