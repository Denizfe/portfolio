# Deniz Efe Karacakaya — Portfolio

A premium personal portfolio built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion.

## What's included

- Full-screen animated hero with a signature typing terminal
- About, Skills, Projects, Experience, Contact, Footer sections
- Dark/light mode with `next-themes` (persisted, no flash)
- Scroll-reveal and hover micro-interactions via Framer Motion
- Accessible: visible focus rings, semantic HTML, `prefers-reduced-motion` respected
- SEO: Metadata API, Open Graph, Twitter Cards, dynamic `sitemap.xml` and `robots.txt`
- Custom 404 and loading states
- Vercel Analytics + Speed Insights wired in

## Not included yet (intentionally scoped out)

These were in the original brief but are substantial projects on their own —
ask and they can be built as a follow-up:

- 3D/React Three Fiber hero scene
- Live GitHub stats/contribution graph (needs a GitHub API integration)
- AI chat assistant trained on the portfolio content (needs a backend + API key)
- Blog with MDX, syntax highlighting, and search
- Command palette (⌘K), English/Turkish language switcher, visitor counter
- Project detail sub-pages

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        # fonts, metadata, theme provider, analytics
  page.tsx           # assembles all sections
  globals.css        # design tokens, grid background, accessibility
  sitemap.ts
  robots.ts
  not-found.tsx
  loading.tsx
components/
  navbar.tsx
  hero.tsx
  terminal.tsx        # animated terminal — hero's signature element
  about.tsx
  skills.tsx
  projects.tsx
  experience.tsx
  certificates.tsx
  contact.tsx
  footer.tsx
  theme-provider.tsx
lib/
  data.ts             # all editable content lives here
  site.ts             # production URL, shared by layout/sitemap/robots
  utils.ts
```

## Editing content

Everything text-based — name, projects, skills, experience — lives in
`lib/data.ts`. Update that file rather than the components.

Add your resume PDF at `public/DenizEfeKaracakaya_Resume.pdf` so the
"Download CV" buttons work, and update the GitHub/LinkedIn/Kaggle URLs in
`lib/data.ts` to your real profiles.

## Wiring the contact form

The form in `components/contact.tsx` currently simulates a submission.
Connect it to a real backend by replacing the `setTimeout` in `handleSubmit`
with a call to an API route (e.g. `app/api/contact/route.ts`) that sends an
email via Resend, SendGrid, or similar.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import it at https://vercel.com/new.
3. Framework preset: Next.js (auto-detected). No environment variables are
   required for the base site.
4. Deploy. Update `metadataBase` in `app/layout.tsx` and the URLs in
   `app/sitemap.ts` / `app/robots.ts` to your production domain.

## Performance & accessibility notes

- Fonts are loaded via `next/font` (self-hosted, no layout shift).
- Images should use `next/image` once real project screenshots are added.
- Motion respects `prefers-reduced-motion` globally in `globals.css`.
