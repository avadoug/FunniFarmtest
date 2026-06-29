# The Funni Farm Launch TODO

## Brand and Business Info

- Confirm exact business name spelling: `FunniFarm`, `Funni Farm`, or `The Funni Farm`.
- Confirm `public/brand/funni-farm-official-logo.png` is the final logo file for launch.
- Confirm final brand colors and typography.
- Add real Funni Farm origin story.
- Add founder names, farm history, and community details.
- Add real business location or service area.
- Add business email.
- Add real social links.
- Decide whether wholesale accounts are needed.
- Decide whether subscriptions are needed later.
- Decide whether local pickup is needed.

## Product Content

- Replace placeholder product photos with real product photography.
- Add final product list.
- Add final product categories.
- Add real product prices.
- Add real product descriptions.
- Add real product ingredients.
- Add final suggested use language from labels.
- Add CBG/CBD mg per serving.
- Add bottle sizes, weights, pack sizes, and seed counts.
- Add real strain lineage.
- Add real seed type details.
- Add real inventory counts.
- Add real batch numbers.
- Add real cannabinoid amounts and profiles.
- Confirm federal hemp compliance details for each batch.
- Confirm gummies are marketed only to adults and not presented as child-friendly candy.

## COA / Lab Results

- Add real COA PDFs.
- Add real COA links or QR destinations.
- Add real date tested values.
- Add real lab names.
- Add real cannabinoid summaries.
- Add real pass/fail safety testing results.
- Confirm COA batch numbers match product pages and labels.

## Shipping and Compliance

- Confirm legal shipping states.
- Confirm restricted states by product type.
- Confirm hemp flower and pre-roll shipping rules.
- Confirm seed sale rules.
- Confirm age limit.
- Decide whether stronger age verification is required.
- Add production shipping restriction logic.
- Add tax and shipping calculations.
- Get legal review for product copy, checkout copy, policies, and labels.
- Get payment-method/platform compliance review.

## Payment

- Confirm Cash App, PayPal, and any other manual payment options are allowed for the final product mix and business account setup.
- Add the real Funni Farm order inbox to `FUNNI_FARM_ORDER_EMAIL`.
- Configure Resend with a verified sender for `ORDER_EMAIL_FROM`.
- Test that order request emails reach Funni Farm and can be replied to directly.
- Decide whether payment handles should stay private by email reply or be shown after manual approval.
- Add production order status tracking after payment is received manually.
- Confirm refund workflow for each manual payment method.
- If a hosted processor is needed later, review Square CBD program, Bankful, PaymentCloud, Shopify-compatible hemp processors, or another approved provider.
- Do not store raw credit card data.
- Do not log credit card data.

## Admin and Data

- Replace local-only admin password with real authentication.
- Add real database:
  - Supabase/PostgreSQL
  - SQLite
  - Shopify backend
  - Sanity plus commerce backend
- Add admin image upload instead of image URL only.
- Add inventory management.
- Add order management.
- Add product active/inactive moderation workflow.
- Add audit logs for admin changes.

## Email and Customer Operations

- Connect contact form to Resend, SendGrid, Formspree, Supabase, or CRM.
- Add customer-facing order request confirmation emails if desired.
- Add shipping notification emails.
- Add support inbox routing.
- Add wholesale inquiry workflow.
- Add newsletter provider and consent tracking.

## Policies

- Replace Terms of Service placeholder.
- Replace Privacy Policy placeholder.
- Replace Shipping Policy placeholder.
- Replace Refund Policy placeholder.
- Replace Hemp Compliance Policy placeholder.
- Replace Age Policy placeholder.
- Replace Disclaimer placeholder.
- Confirm no fake legal guarantees are present.

## Testing

- Test mobile checkout.
- Test tablet layout.
- Test desktop layout.
- Test cart drawer keyboard navigation.
- Test admin add/edit/delete.
- Test manual order request checkout.
- Test order confirmation.
- Test contact form.
- Test out-of-stock products.
- Test shipping restriction copy.
- Test age gate localStorage behavior.
- Run build and typecheck before launch.
