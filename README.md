# Your Person NZ

Market-validation MVP for Your Person NZ — a local coordination/concierge service for New
Zealanders overseas with a parent or family member living independently in Christchurch &
Canterbury.

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Mostly statically generated for speed and
SEO. Minimal dependencies.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The enquiry form and analytics will work
without any environment variables set — enquiries log to the console and analytics scripts simply
don't load — so you can develop and preview the whole site with zero setup.

```bash
npm run build   # production build — also the fastest way to catch type/build errors
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Where to edit key copy

All copy lives in typed content files under `content/`, separate from layout/component code:

| File | Controls |
|---|---|
| `content/site.ts` | Business name, tagline, service area, contact email, nav links, the boundary statement |
| `content/services.ts` | The six "what we can help with" cards |
| `content/faq.ts` | FAQ questions/answers (also feeds FAQPage schema) |
| `content/founder.ts` | **Founder bio — currently a placeholder, see below** |
| `content/countries.ts` | The three "for families overseas" country pages (Australia / UK / elsewhere) |
| `content/guides.ts` | All 10 `/guides` articles |

Section components under `components/sections/` control layout/structure; page-level copy that
isn't reused (hero headline, page intros) lives directly in `app/**/page.tsx` and
`components/sections/Hero.tsx`.

## How form submissions work

The `EnquiryForm` component (`components/forms/EnquiryForm.tsx`) posts to `POST /api/enquiry`
(`app/api/enquiry/route.ts`), which validates the payload with Zod and calls a single function,
`submitEnquiry()` in `lib/submitEnquiry.ts`. That function:

1. Writes the submission as a row to an **Airtable** base (if `AIRTABLE_API_KEY` and
   `AIRTABLE_BASE_ID` are set) — gives you a spreadsheet-style view you can filter/sort by
   `Source`, which records which CTA triggered the enquiry (e.g. `homepage-founding-pilot`,
   `travel-companion-page`, `guide:<slug>`).
2. Sends an email notification via **Resend** (if `RESEND_API_KEY` and `NOTIFY_EMAIL` are set).

Without those env vars set, submissions are logged to the server console only — useful for local
dev, not for production. **Set the real values in Vercel before launch** (see Environment
variables below). Because everything routes through `submitEnquiry()`, swapping to a different
backend later (a CRM, a database) means editing one file.

### Setting up Airtable + Resend

1. Create a free [Airtable](https://airtable.com) base with one table (default name `Enquiries`)
   with columns: Name, Email, Phone, Lives in, Parent's suburb / town, Helping who, Most want help
   with, Currently organising, Service interest, Would consider paying $199-299/mo, Anything else,
   Source, Submitted at.
2. Generate a personal access token at [airtable.com/create/tokens](https://airtable.com/create/tokens)
   with `data.records:write` scope on that base — this is `AIRTABLE_API_KEY`. The base ID (starts
   `app...`) is in the base's API docs or URL — this is `AIRTABLE_BASE_ID`.
3. Create a free [Resend](https://resend.com) account, verify a sending domain (or use their
   testing domain while validating), and generate an API key — `RESEND_API_KEY`. Set
   `NOTIFY_EMAIL` to the inbox that should receive new-enquiry alerts.

## How analytics work

Analytics use [Plausible](https://plausible.io) — chosen over GA4 because it's cookieless (no
cookie-consent banner needed), doesn't collect personal data, is lighter-weight (better for Core
Web Vitals), and still gives country-level and referrer-source breakdowns out of the box.

1. Add `yourperson.nz` as a site in your Plausible account.
2. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourperson.nz` in your environment. The script only loads
   when this is set, so local dev never sends real traffic data.
3. Custom events tracked via `lib/analytics.ts` / `trackEvent()`:
   - `enquiry_start` — first interaction with any enquiry form
   - `enquiry_submit` — successful form submission
   - `travel_companion_click` — submission where "Travel companion" was selected
   - `pilot_application` — every successful submission (all are pilot applications during
     validation)
   - Each event carries a `source` prop (e.g. `homepage-founding-pilot`,
     `travel-companion-page`, `contact-page`) so you can see interest by section/CTA in Plausible's
     dashboard under Goals → filter by property.

**Reading the numbers:** log into Plausible → the main dashboard shows visits, top pages (useful
for guide/article traffic) and referrer sources (you can see Facebook vs. Google Organic directly
in the "Top Sources" panel). The "Locations" panel breaks down visits by country. Click into
"Goals" to see conversion counts and rates for each custom event above.

## Deployment

1. **Create a GitHub repo.** From this directory:
   ```bash
   git init   # if not already a repo
   git add .
   git commit -m "Initial commit"
   gh repo create your-person-nz --private --source=. --remote=origin
   git push -u origin main
   ```
2. **Connect to Vercel.** In the [Vercel dashboard](https://vercel.com/new), import the GitHub
   repo. Framework preset "Next.js" is auto-detected — no build settings need changing.
3. **Add environment variables** in Vercel → Project → Settings → Environment Variables (see
   `.env.example` for the full list): `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`,
   `AIRTABLE_TABLE_NAME`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `NOTIFY_EMAIL`,
   `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`. Add them for Production (and Preview if you want staging
   submissions to work too — consider a separate Airtable base for Preview so test submissions
   don't pollute real data).
4. **Custom domain.** In Vercel → Project → Settings → Domains, add `yourperson.nz` (and
   `www.yourperson.nz` if desired, redirecting to the apex or vice versa). Vercel will show the
   DNS records to add at your domain registrar — typically an `A` record to Vercel's IP or a
   `CNAME` if using a subdomain. Once DNS propagates, Vercel issues an SSL certificate
   automatically.
5. Every push to `main` redeploys production automatically; pushes to other branches / PRs get
   preview deployments.

## Content still placeholder before launch

- **Founder bio & photo** — `content/founder.ts` has only the one confirmed detail (first two
  jobs, aged 16–17, in a rest home) written in the founder's voice. The rest of the bio paragraph
  and a professional photo need to come from the founder directly — do not draft further
  biographical claims. Marked in code and on the `/about` page.
- **Photography** — hero and founder images are currently styled placeholder blocks. To add real
  photos, see `content/media.ts`: drop the file into `public/images/` using the filename listed
  (`hero-home.jpg` at 1600×2000px, `founder-photo.jpg` at 800×1000px — both 4:5 portrait, under
  ~300–400KB, `.jpg` or `.webp`), then flip that entry's `ready` flag to `true`. No other code
  changes needed. Visual direction: warm, editorial, real photography — no stock
  elderly-couple-on-a-beach imagery, no clinical/medical imagery.
- **Legal pages** (`/privacy`, `/terms`, `/supplier-relationships`, `/service-boundaries`) are
  structural placeholders flagged in-page — **all four need review by a qualified NZ lawyer**
  before onboarding paying customers. They are set to `noindex` until finalised.
- **Contact email** (`hello@yourperson.nz` in `content/site.ts`) needs to be a real, monitored
  inbox before launch.
- **OG image** (`content/site.ts` → `ogImage`) is a placeholder path; add a real 1200×630 image at
  `public/images/og-default.jpg`.
- **Domain** — `content/site.ts` → `url` is set to `https://yourperson.nz`; confirm this matches
  the live domain once DNS is configured.

## Legal/business items to resolve before taking paying customers

- Legal review and finalisation of Privacy Policy, Terms of Service, Supplier Relationships and
  Service Boundaries pages (NZ-qualified lawyer).
- Confirm actual supplier vetting process before making any claims about it publicly — the current
  supplier-relationships page deliberately makes no insurance/accreditation/background-check
  claims because none have been confirmed.
- Business registration / structure, and how payments will eventually be collected (out of scope
  for this MVP, which does not collect payment).
- Public liability insurance and any relevant NZ business insurance.
- A real, monitored contact channel (email/phone) replacing the placeholder in `content/site.ts`.
- Data handling: confirm where Airtable/Resend data is stored and for how long, and reflect that
  accurately in the Privacy Policy (NZ Privacy Act 2020 compliance).
