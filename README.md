# Dabe — Modern Admin Dashboard

A polished admin dashboard for managing users, products, and inventory. Dabe is built as a portfolio-ready Next.js application with a responsive workspace UI, protected dashboard routes, server-side mutations, and shareable social metadata.

> Demo project: authentication and persistence are intentionally lightweight. See [Production considerations](#production-considerations) before using it with real data.

## Highlights

- Responsive dashboard with light and dark themes
- User directory with search, filtering, sorting, pagination, and CRUD flows
- Product catalog with pagination, inventory metrics, detail pages, and CRUD flows
- Global command palette for navigation, quick actions, and protected user/product search
- Dashboard statistics and recent activity streamed with loading skeletons
- Scroll-based motion with reduced-motion support
- Route-level loading and not-found states
- Open Graph, Twitter, favicon, Dabe mark, and Apple touch icon metadata for social sharing
- Vercel Web Analytics integration

## Tech stack

- [Next.js 16](https://nextjs.org/) with the App Router
- React 19 and TypeScript
- Tailwind CSS 4, shadcn/ui, Base UI, and Lucide icons
- NextAuth credentials authentication
- Zod and React Hook Form for form validation
- Vercel Web Analytics

## Run locally

### Prerequisites

- Node.js 20.9 or later
- npm 10 or later

### Install and start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Set a unique `AUTH_SECRET` in `.env.local` before running the app. You can generate one with:

```bash
openssl rand -base64 48
```

### Demo sign-in

Use these credentials only for the local/demo application:

```text
Email: admin@test.com
Password: 12345678
```

## Available commands

```bash
npm run dev      # Start the development server
npm run build    # Create an optimized production build
npm run start    # Serve the production build
npm run lint     # Run ESLint
npx tsc --noEmit # Check TypeScript without emitting files
```

## How it works

### Routes

- `/login` — demo sign-in page
- `/dashboard` — workspace overview, statistics, and recent activity
- `/dashboard/users` — searchable and filterable user directory
- `/dashboard/products` — paginated product catalog and inventory metrics

Dashboard routes are protected by NextAuth middleware. The command palette in the header searches users and products through `/api/search`; that endpoint requires an authenticated session and responses are marked `private, no-store`.

### Data and cache updates

Demo users and products are stored in `data/users.json` and `data/products.json`. Creating, editing, or deleting a user/product revalidates the affected list, detail page where relevant, and the dashboard. Dashboard summary data is cached for 30 seconds.

## Deploy to Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Add the required environment variable:

   ```text
   AUTH_SECRET=replace-with-a-long-random-secret
   ```

4. If you use a custom domain, set its public HTTPS origin:

   ```text
   NEXT_PUBLIC_SITE_URL=https://dashboard.example.com
   ```

5. Deploy.

`NEXT_PUBLIC_SITE_URL` is used for canonical Open Graph and Twitter image URLs. On Vercel deployments without a custom domain, the app can derive its origin from Vercel’s deployment environment variables.

### Vercel Web Analytics

The `@vercel/analytics` component is already mounted in the root layout. After the first deployment, open the project in Vercel, choose **Analytics**, and enable **Web Analytics**. Vercel will then report visitors, page views, top pages, referrers, and other aggregated traffic insights. See the [Vercel Web Analytics quickstart](https://vercel.com/docs/analytics/quickstart).

## Social sharing

The following file-based metadata assets are ready for LinkedIn, X, Slack, and similar link previews:

- `app/opengraph-image.png` — 1200 × 630 Open Graph image
- `app/twitter-image.png` — 1200 × 630 Twitter/X image
- `app/favicon.ico`, `app/dabe-mark.png`, and `app/apple-touch-icon.png` — browser and device icons

Before publishing a post, deploy the app with the final `NEXT_PUBLIC_SITE_URL` and refresh the link in [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Production considerations

This repository is a demo/portfolio application. Before using it in production with real users or data:

- Replace the hard-coded demo credentials with a real identity provider.
- Move JSON-file storage to a database or other durable data store.
- Add authorization roles and audit logging for mutations.
- Store secrets only in the deployment platform’s encrypted environment variables.
- Review security, privacy, error monitoring, backups, and data-retention requirements.

## Project structure

```text
app/                 Routes, layouts, metadata, and API handlers
action/              Server actions for user and product mutations
components/          Dashboard, forms, tables, loading UI, and shared controls
data/                Demo JSON data
lib/                 Data access, auth helpers, caching, and validation
types/               Shared TypeScript domain types
```

## Validation

Run the following before opening a pull request or deploying:

```bash
npm run lint
npx tsc --noEmit
npm run build
git diff --check
```
