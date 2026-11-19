# Torque

A car article website for young Irish drivers, built with Vue 3 and Vue Router.
Web Techniques project, TUS.

## How to run it

You need Node.js installed.

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Folders

- `src/data/` — the starting articles and the list of categories
- `src/stores/` — `articleStore.js`, the shared list of articles that every page uses
- `src/components/` — reusable parts (header, footer, article card, article list)
- `src/views/` — the pages (home, article, manage articles, not found)
- `src/router/` — which address shows which page
- `docs/` — planning and wireframes

## Pages

| Address | Page |
| --- | --- |
| `/` | Home: all articles, with search and category filter |
| `/article/:slug` | One full article |
| `/manage` | Add, edit and delete articles |
| anything else | Page not found |

## Features

- Article cards on the home page
- Full article page for each article
- Keyword search (title and excerpt) and category filter, with a result count and Clear filters button
- Manage page: add, edit and delete articles, with form validation and error messages
- Shared store, so changes on the Manage page show straight away on the other pages
- Skip link, and keyboard focus moves to the page heading when you change page
- Responsive layout: cards go from 3 columns to 2 to 1, and the nav wraps on small screens

## Testing

| # | Test | Expected result | Result |
| --- | --- | --- | --- |
| 1 | Open the home page | 8 article cards, "8 of 8 articles shown" | |
| 2 | Click an article card | Full article opens at `/article/<slug>` | |
| 3 | Go to `/article/hello` | "Article not found" message | |
| 4 | Go to `/random-page` | Page not found | |
| 5 | Type "brake" in the search box | Only the brake pads article shows | |
| 6 | Choose "DIY" in the category filter | Only DIY articles show | |
| 7 | Search "zzz" | "No articles match" message | |
| 8 | Click Clear filters | All articles show again | |
| 9 | Add an article with an empty title | Error: "Please enter a title." | |
| 10 | Add a full article | "Article added." and it appears on the home page | |
| 11 | Edit an article, change the title, Save | New title shows on the home page | |
| 12 | Edit an article, then Cancel | Article unchanged | |
| 13 | Delete an article | It disappears from the list and the home page | |
| 14 | Press Tab when the page loads | "Skip to main content" link appears | |
| 15 | Make the window narrow | Cards go to 1 column, nav wraps | |

## Known issues

- Added, edited or deleted articles reset when you refresh the page, because they are only stored in Vue state (no backend, as the brief allows).
- There is no login, so anyone can open the Manage page.
- Articles use a coloured box instead of real images.
- When you edit an article's title, its web address (slug) stays the same, so old links keep working.

## Based on

The store, the manage form and the search/filter follow the patterns from the Shape Up labs (Labs 5, 6 and 7).
