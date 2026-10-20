# Abhai.io — Aerial Based Hybrid AI

Official website for Abhai — autonomous AI drones for forest fire detection, built in India.

## Structure
- `index.html` — single-file homepage (HTML + CSS + JS)

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

## FireDome prototype

The interactive prototype is prepared for **https://www.abhai.io/prototype** through the existing Vercel integration. `abhai.io` redirects to `www.abhai.io`. Publishing requires these files to be committed to the connected production branch and a successful Vercel deployment.

- `prototype/` contains the static application. Large media is versioned in `_prototype_media/` as smaller binary pieces to support reliable uploads. `scripts/build-prototype.mjs` reconstructs byte-identical files, verifies their SHA-256 checksums, and writes the complete website into `site-dist/`.
- `vercel.json` runs the dependency-free Node.js build, publishes `site-dist/`, and maps `/prototype` to its entry page. The existing homepage and root assets are copied unchanged.
- Asset URLs explicitly use `/prototype/` so the route works without a trailing slash.
- Mumbai footage is recorded evidence. Valmiki/Patna maps, aircraft, incidents, weather and responses are labelled simulations. No operational systems are connected.
- Demo decisions remain in the viewer’s local browser storage.
- The CTO view offers a downloadable source kit.
- `prototype/assets/firedome-preview.png` is generated promotional concept art used only for link previews; it is not a real map or sensor image.

Validation: application workflow checks and subpath asset resolution. Production HTTP verification remains required after deployment; visual browser QA has not been performed.

Local build: `node scripts/build-prototype.mjs`. Serve `site-dist/` with any static web server. The complete media files are generated during the build and do not need to be committed separately.
