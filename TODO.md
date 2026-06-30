# The Funni Farm Launch TODO

## Priority Launch Blockers

Do these before treating the storefront as launch-ready:

1. Rotate any exposed secrets and change the admin password.
2. Add real product photos.
3. Add real COAs, batch numbers, cannabinoid amounts, and serving amounts.
4. Finalize product descriptions, prices, ingredients, and inventory.
5. Confirm legal shipping states and product-by-product shipping restrictions.
6. Connect contact form and order request emails for production.
7. Replace placeholder policies with business-specific reviewed policies.
8. Connect a real database for products, orders, customers, contact leads, and admin operations.
9. Replace the local-only admin guard with proper authenticated admin access.
10. Complete legal, hemp compliance, payment-method, and policy review.

Customer-comfort layer still needed before launch:

- Every product should answer: what is it, who is it best for, how much CBG/CBD is in it, what ingredients are in it, what batch is it from, and where is the COA?
- Every product should include real photos, final label details, adult-use language, shipping restrictions, and a matching COA link.
- CBG education, lab transparency, checkout instructions, and policy language should remove moments where a customer wonders what they are buying or how payment works.

Important production warning:

- Do not launch assuming contact form leads are saved unless the contact backend is wired to Resend, SendGrid, Formspree, Supabase, a CRM, or another production service.
- Do not launch assuming order requests are emailed unless `RESEND_API_KEY`, `FUNNI_FARM_ORDER_EMAIL`, and `ORDER_EMAIL_FROM` are configured and tested.
- Do not use the default local admin password in production.

## Brand and Business Info

- Confirm exact business name spelling: `FunniFarm`, `Funni Farm`, or `The Funni Farm`.
- Confirm `public/brand/funni-farm-official-logo.png` is the final logo file for launch.
- Confirm final brand colors and typography.
- Add real Our Story photos once supplied.
- Add founder names, farm history, and community details.
- Add real business location or service area.
- Confirm `thefunnifarm@outlook.com` is the final public business email.
- Add real social links.
- Decide whether wholesale accounts are needed.
- Decide whether subscriptions are needed later.
- Decide whether local pickup is needed.

## Product Content

- Replace placeholder product photos with real product photography.
- Add final product list.
- Add final product categories.
- Add real product prices.
- Confirm The Funni Farm CBG Gummies price, current inventory, and final package count.
- Confirm The Funni Farm CBG Capsules price, capsule count, serving amount, ingredients, and whether this product should be active.
- Add real product descriptions.
- Add real product ingredients.
- Add final suggested use language from labels.
- Add CBG/CBD mg per serving.
- Add bottle sizes, weights, pack sizes, and seed counts.
- Add real strain lineage.
- Add real seed type details.
- Add real inventory counts.
- Add real batch numbers.
- Add the current batch number for The Funni Farm CBG Gummies label.
- Replace `CAPSULES-PLACEHOLDER-001` with the real capsule batch number before activation.
- Add real cannabinoid amounts and profiles.
- Confirm federal hemp compliance details for each batch.
- Confirm gummies are marketed only to adults and not presented as child-friendly candy.

## COA / Lab Results

- Add real COA PDFs.
- Add real COA links or QR destinations.
- Connect the CBG Gummies label QR/COA scan area to the current batch COA.
- Add the current CBG Capsules COA before enabling capsule sales.
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
