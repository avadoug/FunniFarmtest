import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  FlaskConical,
  LockKeyhole,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Sprout,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { getFeaturedProducts } from "@/lib/products/repository";
import { productCategories } from "@/lib/products/types";

const categoryDescriptions: Record<string, string> = {
  Seeds: "Seed-packet style genetics listings with lineage placeholders.",
  "CBG Gummies": "Non-intoxicating, small-batch CBG gummies for adults.",
  "CBG Oils": "CBG-forward oils ready for clean label details.",
  "Hemp Flower": "Non-intoxicating hemp flower with batch and COA support.",
  "Pre-Rolls": "Future adult hemp listings with clear restrictions.",
  Capsules: "Measured hemp wellness capsules for future catalog growth.",
  Topicals: "Farm apothecary topicals with general wellness language.",
  Bundles: "Curated farm boxes, sample kits, and seasonal wellness sets.",
  Merch: "Shirts, stickers, hats, and simple farm goods.",
};

const faqs = [
  [
    "Do you collect credit card numbers?",
    "No. This first version sends an order request to The Funni Farm. They reply by email with Cash App, PayPal, or other approved non-card payment options after review.",
  ],
  [
    "Are the product claims final?",
    "No. Product, ingredient, cannabinoid, batch, COA, and policy details are placeholders until The Funni Farm supplies verified business information.",
  ],
  [
    "Can you ship everywhere?",
    "Not automatically. Hemp laws vary by state and locality, so final shipping restrictions need legal and payment-method review before launch.",
  ],
];

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts(4);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src="/brand/hero-farm.svg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-50/96 via-cream-50/86 to-cream-50/56" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cream-50/92 to-transparent" />
          <div className="absolute inset-y-0 right-0 hidden w-[68%] bg-[linear-gradient(90deg,rgba(255,250,240,0)_0%,rgba(255,250,240,0.9)_32%,rgba(255,250,240,0.98)_100%)] lg:block" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(340px,540px)_1fr] lg:gap-14 lg:px-8">
          <div className="relative mx-auto w-full max-w-[34rem] lg:mx-0">
            <div className="absolute -inset-3 rounded-[2.75rem] border-2 border-harvest-700/35 bg-harvest-300/24 shadow-soft" />
            <div className="paper-texture relative overflow-hidden rounded-[2.4rem] border-2 border-forest-900 bg-cream-50 p-3 shadow-farm sm:p-4">
              <div className="relative aspect-square overflow-hidden rounded-[1.9rem] border border-forest-900/15 bg-cream-100">
                <Image
                  alt="The Funni Farm logo"
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 540px, 92vw"
                  src="/brand/funni-farm-official-logo.png"
                />
              </div>
            </div>
            <div className="relative z-10 mx-auto -mt-4 flex max-w-md flex-wrap justify-center gap-2 text-center text-[0.68rem] font-black uppercase tracking-[0.12em] text-forest-900 sm:text-xs">
              <span className="rounded-full border border-forest-900/15 bg-harvest-300 px-3 py-2 shadow-soft">
                Hemp Without the High
              </span>
              <span className="rounded-full border border-forest-900/15 bg-forest-700 px-3 py-2 text-cream-50 shadow-soft">
                CBG-Forward
              </span>
              <span className="rounded-full border border-forest-900/15 bg-cream-50 px-3 py-2 shadow-soft">
                Lab-Tested
              </span>
            </div>
          </div>

          <div className="hero-copy max-w-3xl text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-forest-900/15 bg-cream-50/85 px-4 py-2 shadow-soft backdrop-blur">
              <Sprout aria-hidden className="size-5 text-forest-700" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-clay">
                Non-intoxicating hemp + CBG
              </span>
            </div>
            <h1 className="font-display text-5xl font-black leading-[0.95] text-forest-900 sm:text-6xl lg:text-7xl">
              Hemp Without the High
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-forest-900/86">
              Small-batch CBG-forward hemp products crafted for adults who want
              clean, non-intoxicating plant-based wellness.
            </p>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-forest-900/78">
              The Funni Farm makes simple hemp wellness goods with farm-crafted
              care, clear batch details, lab-result links, and honest product
              information.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <ButtonLink href="/shop" size="lg">
                Shop CBG Products
              </ButtonLink>
              <ButtonLink href="/cbg" size="lg" variant="secondary">
                Learn About CBG
              </ButtonLink>
            </div>
            <div className="mt-9 grid gap-3 text-sm font-bold text-forest-900/75 sm:grid-cols-3">
              <span className="rounded-full bg-cream-50/80 px-4 py-3 shadow-soft">
                Non-intoxicating hemp
              </span>
              <span className="rounded-full bg-cream-50/80 px-4 py-3 shadow-soft">
                CBG-forward wellness
              </span>
              <span className="rounded-full bg-cream-50/80 px-4 py-3 shadow-soft">
                Lab-tested transparency
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          <TrustBadge
            icon={FlaskConical}
            text="Batch numbers and COA links help customers review product details."
            title="Lab Transparency"
          />
          <TrustBadge
            icon={LockKeyhole}
            text="Built around adult hemp wellness routines and clear order review."
            title="Adult Wellness"
          />
          <TrustBadge
            icon={Sprout}
            text="Small-batch hemp goods made with care, clarity, and good ingredients."
            title="Farm Crafted"
          />
          <TrustBadge
            icon={ShieldCheck}
            text="Non-intoxicating positioning, age confirmations, and product disclaimers included."
            title="Hemp Without the High"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Fresh from the farm table"
            title="Featured Products"
          >
            <p>
              Starter listings are ready for real photos, labels, COAs,
              inventory, and final compliance review.
            </p>
          </SectionHeading>
          <ButtonLink href="/shop" variant="ghost">
            View All Products
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Seed packet shelves"
          title="Shop by Category"
        >
          <p>
            Built for today’s products and roomy enough for future farm batches,
            bundles, merch, and wholesale-friendly catalog growth.
          </p>
        </SectionHeading>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <Link
              className="seed-card group rounded-seed p-5 transition hover:-translate-y-1 hover:shadow-farm"
              href={`/shop?category=${encodeURIComponent(category)}`}
              key={category}
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-forest-700 text-cream-50">
                <Sparkles aria-hidden className="size-5" />
              </div>
              <h3 className="font-display text-2xl font-black text-forest-900">
                {category}
              </h3>
              <p className="mt-2 text-sm leading-6 text-forest-900/70">
                {categoryDescriptions[category]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-forest-900 py-16 text-cream-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-harvest-300">
              Small farm values
            </p>
            <h2 className="mt-3 font-display text-4xl font-black">
              Honest labels, careful batches, and farm-made hemp wellness.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Good plants", "Products should be rooted in real batches, real ingredients, and real lab results."],
              ["Good people", "Plain-English education and clear order expectations for normal customers."],
              ["No medical claims", "General wellness language only, with clear disclaimers throughout."],
              ["Room to grow", "Admin tools, product schema, and order email flow are ready for database upgrades."],
            ].map(([title, text]) => (
              <div
                className="rounded-seed border border-cream-50/12 bg-cream-50/8 p-5"
                key={title}
              >
                <BadgeCheck aria-hidden className="mb-3 size-6 text-harvest-300" />
                <h3 className="font-display text-2xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-cream-100/72">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_.8fr] lg:px-8">
        <div className="seed-card rounded-seed p-6 md:p-8">
          <SectionHeading eyebrow="Plain English" title="What is CBG?">
            <p>
              CBG is a hemp-derived cannabinoid people are curious about for
              adult wellness routines. Learn the basics, how it differs from
              other cannabinoids, and why lab results matter.
            </p>
          </SectionHeading>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/cbg">Read the CBG Guide</ButtonLink>
            <ButtonLink href="/lab-results" variant="ghost">
              View COA Placeholders
            </ButtonLink>
          </div>
        </div>
        <div className="rounded-seed border border-harvest-700/25 bg-harvest-300 p-6 text-forest-900 shadow-soft">
          <PackageCheck aria-hidden className="size-9" />
          <h3 className="mt-4 font-display text-3xl font-black">
            Bundle callout
          </h3>
          <p className="mt-3 leading-7 text-forest-900/78">
            Seasonal farm bundles, grower packs, gummy sets, oil kits, and merch
            drops can be added as soon as real products are ready.
          </p>
          <ButtonLink className="mt-6" href="/shop" variant="dark">
            Browse the Shelf
          </ButtonLink>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="seed-card rounded-seed p-6 md:p-8">
            <h2 className="font-display text-3xl font-black text-forest-900">
              Customer Notes
            </h2>
            <div className="mt-6 space-y-4">
              {[
                "Review placeholder: replace with real customer feedback only after permission.",
                "Review placeholder: use verified reviews and keep language general-wellness only.",
                "Review placeholder: keep testimonials compliant and adult-oriented.",
              ].map((review) => (
                <blockquote
                  className="rounded-2xl border border-forest-900/10 bg-white/45 p-4 text-sm leading-6 text-forest-900/72"
                  key={review}
                >
                  “{review}”
                </blockquote>
              ))}
            </div>
          </div>
          <div className="seed-card rounded-seed p-6 md:p-8">
            <h2 className="font-display text-3xl font-black text-forest-900">
              FAQ
            </h2>
            <div className="mt-6 space-y-4">
              {faqs.map(([question, answer]) => (
                <details
                  className="rounded-2xl border border-forest-900/10 bg-white/45 p-4"
                  key={question}
                >
                  <summary className="cursor-pointer font-black text-forest-900">
                    {question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-forest-900/72">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="paper-texture relative overflow-hidden rounded-[2rem] border border-forest-900/12 bg-forest-700 p-6 text-cream-50 shadow-farm md:p-10">
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-harvest-300">
                Newsletter placeholder
              </p>
              <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
                Farm drops, COA updates, and seed-packet news.
              </h2>
              <p className="mt-3 text-sm leading-6 text-cream-100/75">
                Wire this to Resend, SendGrid, Formspree, Supabase, or an email
                platform before collecting real subscribers.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                className="focus-ring min-h-12 rounded-full border border-cream-50/20 bg-cream-50 px-4 text-sm font-bold text-forest-900 placeholder:text-forest-900/45 sm:w-72"
                id="newsletter-email"
                placeholder="you@example.com"
                type="email"
              />
              <button
                className="focus-ring min-h-12 rounded-full bg-harvest-300 px-5 font-black text-forest-900 hover:bg-harvest-100"
                type="button"
              >
                Join List
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
