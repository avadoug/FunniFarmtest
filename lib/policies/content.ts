export type Policy = {
  slug: string;
  title: string;
  description: string;
  sections: {
    title: string;
    body: string;
  }[];
};

export const policies: Policy[] = [
  {
    slug: "terms",
    title: "Terms of Service",
    description:
      "Placeholder terms for browsing, purchasing, and using The Funni Farm website.",
    sections: [
      {
        title: "Placeholder Notice",
        body: "These terms are starter copy only and are not legal advice. Replace them with terms reviewed for your business, location, products, and payment methods.",
      },
      {
        title: "Website Use",
        body: "Customers agree to use the website lawfully, provide accurate checkout information, and avoid misuse of the storefront, admin, or contact tools.",
      },
      {
        title: "Product Information",
        body: "Product descriptions, prices, ingredients, cannabinoid details, COAs, and availability are placeholders until confirmed by The Funni Farm.",
      },
      {
        title: "Orders",
        body: "Orders may be reviewed, rejected, cancelled, or restricted based on inventory, payment method availability, age verification, shipping rules, and applicable laws.",
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "Placeholder privacy policy for customer, checkout, and contact information.",
    sections: [
      {
        title: "Placeholder Notice",
        body: "This privacy policy is starter copy only. Replace it with a policy that matches your real tools, analytics, email providers, payment methods, and data retention practices.",
      },
      {
        title: "Information Collected",
        body: "The first version may collect contact details, shipping details, cart items, compliance confirmations, and development-only order records. It does not collect raw credit-card numbers.",
      },
      {
        title: "Payment Data",
        body: "This starter flow sends order requests by email so The Funni Farm can reply with Cash App, PayPal, or other approved non-card payment options. Do not request, store, log, or email raw credit-card numbers.",
      },
      {
        title: "Service Providers",
        body: "Future providers may include hosting, email, analytics, fraud review, tax, shipping, database, and payment services. List real providers and payment methods before launch.",
      },
    ],
  },
  {
    slug: "shipping",
    title: "Shipping Policy",
    description:
      "Placeholder shipping policy for hemp and CBG products with state restrictions.",
    sections: [
      {
        title: "Placeholder Notice",
        body: "Shipping rules for hemp products vary. Confirm federal, state, local, carrier, and payment-method restrictions before accepting orders.",
      },
      {
        title: "Shipping Areas",
        body: "The final site should list allowed and restricted states, territories, and countries for each product type.",
      },
      {
        title: "Processing Time",
        body: "Add real processing time, fulfillment schedule, holidays, tracking practices, and carrier options.",
      },
      {
        title: "Restricted Products",
        body: "Flower, pre-rolls, seeds, gummies, oils, and other hemp products may have different restrictions. Product-specific checks should happen before sending payment instructions.",
      },
    ],
  },
  {
    slug: "refunds",
    title: "Refund Policy",
    description:
      "Placeholder refund policy for returns, damaged items, cancellations, and support.",
    sections: [
      {
        title: "Placeholder Notice",
        body: "This policy is not final. Replace with business-specific refund, return, cancellation, damaged shipment, and support rules.",
      },
      {
        title: "Returns",
        body: "Add rules for unopened products, consumables, merch, seeds, damaged items, and time windows.",
      },
      {
        title: "Cancellations",
        body: "Orders may be cancelled before fulfillment when possible. Add final timing and support process.",
      },
      {
        title: "Processor Requirements",
        body: "Refund timing and eligibility may depend on the selected manual payment method and final business policy.",
      },
    ],
  },
  {
    slug: "hemp-compliance",
    title: "Hemp Compliance Policy",
    description:
      "Placeholder hemp compliance policy covering federal hemp compliance, age limits, COAs, shipping, medical claims, and payment-method rules.",
    sections: [
      {
        title: "Applicable Laws",
        body: "Products must comply with applicable federal, state, and local laws. This page is placeholder copy and must be reviewed before launch.",
      },
      {
        title: "Federal Hemp Compliance",
        body: "Final products should be supported by current COAs confirming applicable federal hemp compliance before sale or shipment.",
      },
      {
        title: "No Medical Claims",
        body: "The Funni Farm should not claim that products diagnose, treat, cure, or prevent disease. Product copy and testimonials should stay focused on general adult wellness routines.",
      },
      {
        title: "Age Restrictions",
        body: "Adult hemp products should include age gate, checkout age confirmation, and any legally required age verification process.",
      },
      {
        title: "Shipping Restrictions",
        body: "The final site should block or warn against shipping products into restricted locations based on product type and current law.",
      },
      {
        title: "Customer Responsibility",
        body: "Customers should confirm that ordering and possessing hemp products is lawful in their location.",
      },
      {
        title: "COA / Lab Testing",
        body: "COA links should match product name, batch number, tested date, cannabinoid profile, and safety testing results.",
      },
      {
        title: "Merchant Processor Compliance",
        body: "Cash App, PayPal, email providers, or any future payment service may require specific product categories, policy language, age checks, prohibited claims, and fulfillment practices.",
      },
    ],
  },
  {
    slug: "age-policy",
    title: "Age Policy",
    description:
      "Placeholder age policy for adult hemp product browsing and checkout.",
    sections: [
      {
        title: "Adult Products",
        body: "This storefront is intended for adults who meet the minimum legal age in their location. The starter site uses 21+ language as a conservative placeholder.",
      },
      {
        title: "Age Gate",
        body: "The first version stores age confirmation in localStorage. A production site may need stronger age verification depending on products and laws.",
      },
      {
        title: "Checkout Confirmation",
        body: "Customers must confirm age again before sending an order request.",
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    description:
      "Placeholder legal and product disclaimer for hemp-derived products.",
    sections: [
      {
        title: "No Medical Advice",
        body: "Website content is for general product and educational information only and is not medical advice.",
      },
      {
        title: "No Disease Claims",
        body: "Products are not intended to diagnose, treat, cure, or prevent any disease.",
      },
      {
        title: "Product Information",
        body: "Ingredients, cannabinoid amounts, serving sizes, and lab results must be confirmed before launch.",
      },
      {
        title: "Legal Review",
        body: "Have a qualified attorney and compliance specialist review policies, product copy, labels, shipping rules, and checkout before accepting real orders.",
      },
    ],
  },
];

export function getPolicy(slug: string) {
  return policies.find((policy) => policy.slug === slug);
}
