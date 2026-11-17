# Torque: Phase 1 Planning

Ilja Jascenkovs, Web Techniques

## 1. Concept and audience

**Torque** is a website with articles about cars.

**Who it's for:** young drivers in Ireland (around 18–25) who have their first car, usually a cheap used one, and want to save money.

**What they need:**
- See the newest articles → home page with article cards
- Read a full article on their phone → article page that works on mobile
- Find articles on one topic, like DIY → category filter (Phase 2)
- Search for something, like "brakes" → search box (Phase 2)
- The site owner needs to add, edit and delete articles → editor page (Phase 2)

Most young people read on their phones, so the layout has to work on small screens.

## 2. Content model

Each article is an object in `src/data/articles.js` with these fields:

| Field | Example | What it's for |
| --- | --- | --- |
| `id` | `2` | A unique number for each article |
| `slug` | `'change-your-own-oil'` | Used in the web address: `/article/change-your-own-oil` |
| `title` | `'How to Change Your Own Oil'` | The heading |
| `category` | `'DIY'` | Which section it belongs to |
| `author` | `'Torque Staff'` | Who wrote it |
| `date` | `'2026-10-09'` | When it was published |
| `excerpt` | one short sentence | Shown on the card |
| `body` | a list of paragraphs | The full article text |

**Categories:** Reviews, DIY, Motorsport, EV & Tech, Culture

**Sample content:** 8 short articles I wrote, spread across all 5 categories. That's enough to fill the page and test the category filter later.

**Images:** I'm using a coloured box with the category name instead of photos, so there are no copyright problems.

## 3. Wireframes

The wireframes are in `docs/wireframes/`. Each one shows desktop on the left and mobile on the right.

1. **Home page:** heading, search box and category buttons (Phase 2), grid of article cards
2. **Article page:** back link, category, title, author and date, image, article text
3. **Editor page (Phase 2):** table of articles with Edit and Delete buttons, plus a form to add or edit an article

**Layout:**
- Card grid: 3 columns on desktop, 2 on tablet, 1 on phone
- Article text kept narrow so it's easy to read

**Style:**
- Dark header and footer
- Light background
- Orange (`#e4572e`) as the main colour

## 4. Vue components

| File | What it does |
| --- | --- |
| `App.vue` | The frame of the site: header, current page, footer |
| `components/AppHeader.vue` | Logo and navigation links |
| `components/AppFooter.vue` | Footer text |
| `components/ArticleCard.vue` | Shows one article as a card. Gets the article as a **prop**. |
| `views/HomeView.vue` | Home page. Loops through the articles with `v-for` and makes a card for each. |
| `views/ArticleDetailView.vue` | Shows one full article |

`ArticleCard` is reusable: it is written once and used 8 times on the home page.

## 5. Vue Router

Set up in `src/router/index.js`:

| Address | Page |
| --- | --- |
| `/` | HomeView |
| `/article/:slug` | ArticleDetailView |

`:slug` is the part that changes for each article. The article page reads it with `useRoute()` and uses `.find()` to get the matching article from the data. If no article matches, it shows "Article not found".

## Plan for Phase 2

- Category filter and search box
- Editor page: add, edit and delete articles, with form checks
- Mobile menu
- Accessibility improvements
- Testing notes in the README
