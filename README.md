# OpportunityKit — Your Potential Has Places to Go.

A responsive, multi-page student opportunity discovery prototype with a premium violet / pink / peach design system and a transparent, rule-based demo matching experience.

## Start locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The complete client-side demo works without provider credentials; profile, saved opportunities, connection requests, organizer plan selections, listing previews, and application tracker entries persist in the current browser using `localStorage`.

For serverless API routes, use Vercel's local development server (`npm install -g vercel`, then `vercel dev`). Configure the environment variables in `.env.example` in your deployment environment. Do not put server secrets in client code.

## Pages

- `index.html` — launch-style homepage and interactive sample match demo.
- `internships.html` — ranked internship discovery, filters, explanations, save and tracking actions.
- `hackathons.html` — event discovery and preference filters.
- `scholarships.html` — calm funding discovery and official portal references.
- `profile.html` — 3-step student profile wizard.
- `dashboard.html` — saved opportunities, demo tracker, profile completion and next steps.
- `connect.html` — fictional collaborator profiles and simulated connection / project invitations.
- `organizers.html` — organizer onboarding, local listing preview and sample pricing / upgrade simulations.

## Data and transparency

The built-in profiles and opportunities are demo examples, not real user accounts, verified active listings, official eligibility decisions, endorsements, or completed applications. The catalogue pages try the server API when available and retain demo examples when it is unavailable. The API endpoints can retrieve public listings or return labelled curated fallback entries. Always confirm eligibility, dates, fees, award amounts, and requirements on the official provider page.

- `api/opportunities.js` — optional Adzuna job listings; requires `ADZUNA_APP_ID` and `ADZUNA_APP_KEY`.
- `api/catalog.js` — attempts public scholarship / hackathon listing retrieval and returns clearly labelled fallback catalogues when providers block requests.
- `api/copilot.js` — optional AI copilot endpoint; requires `OPENAI_API_KEY`.
- `supabase/schema.sql`, `src/`, and `config.example.js` — retained starter assets for a future authenticated backend integration; this visual prototype's current profile persistence is local to the browser.

## Production checklist

Before launch, add secure authentication and server-backed profile persistence, review privacy and consent, test mobile/accessibility flows, verify every external listing and application URL, add moderation for community features, and replace sample organizer prices with approved commercial terms. Organizer plan buttons simulate selection only; no real payments are processed. Sponsored listings should be labeled and must not override eligibility matching.
