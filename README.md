# QuestCode — Learn to Code Through Your Favorite Stories

**questcode.app** — A Next.js subscription SaaS that teaches Python, JavaScript, Java, SQL, and Go through themed challenges based on Stranger Things, Severance, and Breaking Bad.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS (dark cinematic theme) |
| Auth + DB | Supabase |
| Payments | Stripe (subscriptions + one-time) |
| Code Editor | Monaco Editor (same engine as VS Code) |
| Hosting | Vercel (recommended) |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `lib/supabase/schema.sql`
3. In **Settings → API**, copy your Project URL and anon key

### 3. Set up Stripe

1. Create an account at [stripe.com](https://stripe.com)
2. In the Stripe Dashboard, create **4 products** matching the pricing tiers:
   - **Theme Fanatic** — $12/month recurring
   - **Theme Fanatic Lifetime** — $99 one-time
   - **Language Master** — $9/month recurring
   - **Language Master Lifetime** — $79 one-time
3. Copy the Price IDs for each product

### 4. Configure environment variables

```bash
cp .env.local.example .env.local
```

Fill in all values in `.env.local` (see the file for instructions).

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 6. Set up Stripe webhooks (local)

```bash
# Install Stripe CLI: https://stripe.com/docs/stripe-cli
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copy the webhook secret it displays into `STRIPE_WEBHOOK_SECRET` in `.env.local`.

---

## Deploy to Vercel

1. Push your code to GitHub
2. Connect your repo at [vercel.com](https://vercel.com)
3. Add all environment variables in Vercel's dashboard under **Settings → Environment Variables**
4. In Stripe Dashboard → Webhooks, add your production webhook URL: `https://questcode.app/api/stripe/webhook`

That's it — Vercel handles auto-scaling, CDN, and CI/CD for free on the Hobby tier.

---

## Project Structure

```
/
├── app/                         # Next.js App Router pages
│   ├── page.tsx                 # Landing page
│   ├── pricing/page.tsx         # Pricing page
│   ├── login/page.tsx           # Sign in
│   ├── signup/page.tsx          # Create account
│   ├── dashboard/page.tsx       # User dashboard
│   ├── learn/[theme]/[language] # Interactive learning console
│   └── api/stripe/              # Stripe checkout + webhook API routes
├── components/
│   ├── layout/                  # Navbar, Footer
│   ├── marketing/               # Landing page sections
│   ├── auth/                    # Auth form
│   ├── dashboard/               # Dashboard UI
│   └── editor/                  # Monaco Editor + Learning Console
├── lib/
│   ├── themes.ts                # Theme definitions (Stranger Things, etc.)
│   ├── languages.ts             # Language definitions
│   ├── plans.ts                 # Subscription plan definitions
│   ├── challenges/              # All themed coding challenges
│   ├── supabase/                # Supabase client + schema
│   └── stripe/                  # Stripe client
└── types/index.ts               # All TypeScript types
```

---

## Subscription Plans

| Plan | Unlocks | Monthly | Lifetime |
|------|---------|---------|----------|
| Theme Fanatic | All 5 languages × 1 theme | $12/mo | $99 |
| Language Master | All 3 themes × 1 language | $9/mo | $79 |

---

## Adding New Content

### New theme
1. Add it to `lib/themes.ts`
2. Create challenge files in `lib/challenges/`
3. Register them in `lib/challenges/index.ts`

### New language
1. Add it to `lib/languages.ts`
2. Create challenge files for each theme

### New challenges for existing theme × language
Add to the existing challenge array in `lib/challenges/`.

---

## Production Code Execution

The current implementation uses keyword-based client-side validation. For production, replace the `evaluateCode` function in `components/editor/LearningConsole.tsx` with a call to a sandboxed execution API:

- **[Piston API](https://github.com/engineer-man/piston)** — free, open source, self-hostable
- **[Judge0](https://judge0.com)** — commercial, reliable, 100+ languages

Add an API route at `/app/api/run/route.ts` that calls the execution service and returns stdout/stderr.

---

## License

Private — all rights reserved.
