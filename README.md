# Abhai.io — Aerial Based Hybrid AI

Official website for Abhai — autonomous AI drones for forest fire detection, built in India.

## Structure
- `index.html` — complete single-file website (HTML + CSS + JS, no build step needed)

## Deploy with GitHub Pages
1. Repo → Settings → Pages
2. Source: **Deploy from a branch** → Branch: `main` / root
3. Site goes live at `https://<username>.github.io/<repo-name>/`

## Custom domain (abhai.io)
1. Settings → Pages → Custom domain → enter `abhai.io`
2. At your domain registrar, add these DNS records:
   - A records for `abhai.io` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME for `www` → `<username>.github.io`
3. Enable **Enforce HTTPS** once DNS propagates

## Contact form (FormSubmit)
The form sends enquiries via FormSubmit (free, no account needed) to the address in the
`FORM_EMAIL` constant near the bottom of `index.html` (currently `namaste@abhai.io`).

- If your receiving inbox is different, change that one line.
- **One-time activation:** the first time someone submits the form on the live site,
  FormSubmit emails that address a confirmation link. Click it once, and all future
  submissions land straight in your inbox.

## SEO — after deploying
1. **Google Search Console** (search.google.com/search-console): add property `abhai.io`, verify via DNS TXT record at your registrar, then submit `https://abhai.io/sitemap.xml`.
2. **Bing Webmaster Tools**: import from Search Console (one click).
3. If the site is temporarily on `<username>.github.io/<repo>` before the domain is connected, the canonical URL in index.html still points to `https://abhai.io/` — that's intentional; connect the domain soon so they match.
4. Files `robots.txt`, `sitemap.xml`, and `og-image.png` must sit in the repo root beside `index.html`.
