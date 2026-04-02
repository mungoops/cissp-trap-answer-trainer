# Trap Answer Trainer

A browser-based CISSP judgment trainer focused on one wedge: helping candidates stop choosing attractive-but-wrong answers.

## What is included

- `index.html` — app shell
- `styles.css` — styling
- `questions.js` — original question bank and explanations
- `app.js` — quiz logic, filtering, scoring, local progress storage

## Best storage / hosting setup

Use a **three-layer setup**:

1. **Source of truth:** private GitHub repository
2. **Live app:** Netlify or Cloudflare Pages
3. **Sales / payment:** Stripe Payment Link on your product page, email, or posts

## My recommendation

### Easiest path right now
- Keep the source files in a **private GitHub repo**.
- Drag the project folder to **Netlify Drop** for a live URL.
- Sell access by sharing a **Stripe Payment Link** from your sales page.

### Better long-term path
- Keep the source files in a **private GitHub repo**.
- Connect the repo to **Netlify** for continuous deployment.
- Use a custom domain later.

## Why this setup

- This app is **static HTML/CSS/JavaScript**, so it does not need a backend just to run.
- Static hosting is cheaper and simpler than mobile app store release.
- You can update the app by replacing files or pushing a repo commit.

## Local use

You can open `index.html` directly in a browser. Because the question bank is embedded in `questions.js`, this build works locally without a server.

## How to publish quickly

### Option A — Fastest: Netlify Drop
1. Unzip the project.
2. Open Netlify Drop.
3. Drag the whole project folder into the drop zone.
4. Netlify gives you a live URL.

### Option B — Cleaner: GitHub + Netlify
1. Create a private GitHub repo.
2. Upload all files.
3. In Netlify, create a new project from Git.
4. Set the publish directory to the project root.
5. No build command is needed.

### Option C — Cloudflare Pages
1. Create a Pages project.
2. Use Direct Upload for the static folder, or connect GitHub.
3. Publish the root folder as-is.

## How to sell it first

Two practical launch models:

### Model 1 — Sell the ZIP
- Put this ZIP file behind a digital product listing.
- After purchase, the buyer downloads the app and opens `index.html` locally.
- Lowest friction for you, but less polished for the buyer.

### Model 2 — Sell the hosted app
- Host the app on Netlify or Cloudflare Pages.
- Share a Stripe payment link on your sales page.
- After purchase, manually send the buyer the URL or a password-protected link through your fulfillment workflow.
- Better experience, but you will need a simple delivery process.

## Next improvements to build

- free sample mode + paid full mode
- email capture
- timer mode
- domain-by-domain study plans
- trap-category analytics
- question note-taking
- premium question packs
- custom landing page

## Important note

This product is unofficial and not endorsed by ISC2. CISSP is a registered mark of ISC2, Inc.
