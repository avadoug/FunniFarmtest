# The Funni Farm Storefront

A simple, polished Next.js e-commerce starter for The Funni Farm: non-intoxicating CBG-forward hemp wellness products, seeds, gummies, oils, flower, capsules, topicals, bundles, merch, and future farm products.

This first version is built for real browsing and safe order requests. It does **not** collect or store raw credit-card numbers.

## Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Local JSON product data
- Local-only JSON mock order/contact storage for development
- Manual order email flow for Cash App, PayPal, or other approved non-card payment instructions

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Main Folders

- `app/` - routes, pages, API routes, metadata, sitemap, robots
- `components/` - layout, product, cart, forms, and UI components
- `lib/products/` - product types, validation, and JSON repository
- `lib/email/order-request.ts` - server-side order request email sender
- `lib/payments/provider.ts` - optional future payment provider abstraction
- `lib/orders/` - mock order types and local-only JSON storage
- `data/products.json` - starter product catalog
- `public/brand/` - logo and hero/social artwork placeholders
- `public/products/` - product placeholder artwork
- `docs/BRAND.md` - visual brand guide
- `docs/BRAND_LANGUAGE.md` - approved language, banned phrases, and SEO guardrails
- `docs/CONTENT_COMPLIANCE_CHECKLIST.md` - product-page compliance checklist
- `TODO.md` - replacement and launch checklist

## Products

Starter products live in `data/products.json` and include the full requested schema:

- `id`
- `slug`
- `name`
- `category`
- `price`
- `compareAtPrice`
- `shortDescription`
- `fullDescription`
- `image`
- `gallery`
- `tags`
- `inventory`
- `isActive`
- `isFeatured`
- `badge`
- `weight`
- `ingredients`
- `cannabinoidInfo`
- `strainLineage`
- `seedType`
- `packSize`
- `batchNumber`
- `coaUrl`
- `labTested`
- `hempComplianceNote`
- `shippingRestrictions`
- `ageRestricted`
- `createdAt`
- `updatedAt`

You can edit products through `/admin`.

Default local admin password:

```text
funni-local-admin
```

Set `ADMIN_PASSWORD` in `.env.local` to change it. This is a placeholder guard, not production authentication.

## Cart

The cart uses localStorage for the first version. Customers can:

- Add products
- Open the cart drawer
- Edit quantities
- Remove items
- Visit `/cart`
- Continue to checkout

Checkout re-prices products on the server from `data/products.json`, so the API does not trust client-submitted prices.

## Manual Order Request Checkout

The checkout form collects customer/shipping information and compliance confirmations only. It does not ask for card numbers, Cash App handles, PayPal login information, or bank details.

Flow:

1. Customer submits `/checkout`
2. `app/api/checkout/route.ts` validates the cart/customer data
3. If `RESEND_API_KEY` and `FUNNI_FARM_ORDER_EMAIL` are configured, `lib/email/order-request.ts` emails the order request to The Funni Farm
4. The customer is redirected to `/order-confirmation?order=...`
5. The Funni Farm reviews availability, shipping, age/compliance details, and then replies to the customer with Cash App, PayPal, or other approved non-card payment options

In local development without Resend configured, checkout creates a development-only order in `data/orders.local.json` so the flow can still be tested.

On Vercel/production without order email configured, checkout submission returns:

```text
Order email is not configured yet. Add RESEND_API_KEY and FUNNI_FARM_ORDER_EMAIL before using this feature live.
```

This keeps the public storefront browsable without relying on serverless file writes.

## Manual Payment Setup

The current intended payment flow is manual payment-by-reply:

1. Configure a Resend account and verified sender domain/address.
2. Set `RESEND_API_KEY`, `FUNNI_FARM_ORDER_EMAIL`, and `ORDER_EMAIL_FROM`.
3. Test checkout locally and on Vercel.
4. When an order email arrives, review inventory, shipping restrictions, age/compliance details, and product notes.
5. Reply privately to the customer with Cash App, PayPal, or other approved non-card payment options.
6. Do not publish payment handles publicly unless The Funni Farm intentionally wants that.
7. Do not request or store raw credit-card numbers by email, form, notes, logs, or database fields.
8. Confirm Cash App, PayPal, and any other payment method policies for hemp/CBG products before using them live.

## Optional Future Hosted Processor

If the business later chooses a hosted hemp-friendly processor, do not assume standard Stripe will support hemp/CBG products. Possible paths may include Square CBD program, Bankful, PaymentCloud, a Shopify-compatible hemp processor, or another approved provider.

Get merchant approval first, confirm requirements, add provider credentials server-side only, create hosted sessions server-side, verify webhooks, and never store raw card numbers.

## Compliance Warnings

This project includes placeholders, not legal advice.

Before launch:

- Replace all placeholder policies.
- Add real COA PDFs and batch numbers.
- Confirm federal hemp compliance.
- Confirm allowed shipping states.
- Confirm age limit and age-verification needs.
- Review product labels, ingredients, serving sizes, and cannabinoid amounts.
- Remove or rewrite any customer testimonials that imply medical claims.
- Get legal/compliance review.
- Get payment-method policy review for Cash App, PayPal, email, and any future processor.

Products are not intended to diagnose, treat, cure, or prevent disease.

## Contact Form

The contact form posts to `app/api/contact/route.ts` and saves mock submissions to `data/contact-submissions.local.json` in development only.

On Vercel/production, contact submission returns:

```text
Production database is not configured yet. Connect Supabase or another database before using this feature live.
```

Wire it to one of these before launch:

- Resend
- SendGrid
- Formspree
- Supabase
- A CRM/helpdesk

## Database Upgrade Path

The local JSON repository is intentionally simple for version one.

Upgrade options:

- Supabase/PostgreSQL for products, orders, customers, and admin auth
- SQLite for a small self-hosted deployment
- Sanity for editorial product content
- Shopify or another commerce backend for inventory, tax, shipping, and checkout

## Deploying Free on Vercel

This project can deploy on Vercel Free/Hobby as a public demo storefront.

1. Push the project to GitHub.
2. In Vercel, choose **Add New Project** and import the GitHub repo.
3. Select the **Next.js** framework preset.
4. Use the default Vercel output settings.
5. Set the install command to `npm install`.
6. Set the build command to `npm run build`.
7. Add environment variables using `.env.example` as the placeholder template.
8. Deploy.

Storefront browsing, product pages, cart UI, policy pages, CBG education, lab results, and static catalog pages work as a public demo.

For live order requests on Vercel, configure:

- `RESEND_API_KEY`
- `FUNNI_FARM_ORDER_EMAIL`
- `ORDER_EMAIL_FROM`

If these are missing, checkout intentionally fails gracefully in production:

```text
Order email is not configured yet. Add RESEND_API_KEY and FUNNI_FARM_ORDER_EMAIL before using this feature live.
```

Admin saves/deletes and contact submissions intentionally fail gracefully in production until a real database is connected:

```text
Production database is not configured yet. Connect Supabase or another database before using this feature live.
```

Do not rely on local JSON writes on Vercel serverless functions. Keep local JSON writes as development scaffolding only, then connect Supabase, PostgreSQL, Shopify, or another production database before live order/customer operations.

## Useful Commands

```bash
npm run dev
npm run build
npm run typecheck
npm run lint
```
