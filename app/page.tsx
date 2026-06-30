import Image from "next/image";
import Link from "next/link";
import {
  ClipboardCheck,
  FileText,
  FlaskConical,
  HeartHandshake,
  MailCheck,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sprout,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { BundleCard } from "@/components/product/BundleCard";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { farmImages } from "@/lib/brand/farmImages";
import { jackFrostCoa } from "@/lib/coa/jackFrostCbg001";
import {
  getFeaturedProducts,
  getProducts,
  isBundleProduct,
} from "@/lib/products/repository";
import { productCategories } from "@/lib/products/types";

const categoryDescriptions: Record<string, string> = {
  Seeds: "Seed-packet style genetics listings with lineage placeholders.",
  "CBG Gummies": "Label-backed, non-intoxicating CBG-rich gummies for adults.",
  "CBG Oils": "CBG-rich oils ready for clean label details.",
  "Hemp Flower": "Non-intoxicating hemp flower with batch and COA support.",
  "Pre-Rolls": "Future adult hemp listings with clear restrictions.",
  Capsules: "Measured CBG-rich capsule previews awaiting final label details.",
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

const orderSteps = [
  {
    icon: ShoppingBag,
    title: "Choose products",
    text: "Browse CBG gummies, oils, bundles, capsules, flower listings, seeds, and future farm goods.",
  },
  {
    icon: ClipboardCheck,
    title: "Send an order request",
    text: "Submit checkout details without entering credit-card numbers. The site creates a manual order request.",
  },
  {
    icon: ShieldCheck,
    title: "The farm reviews it",
    text: "The Funni Farm checks availability, adult-use requirements, shipping rules, product details, and compliance notes.",
  },
  {
    icon: MailCheck,
    title: "Receive payment options",
    text: "They email back with Cash App, PayPal, or other approved non-card payment options and next steps.",
  },
];

const processHighlights = [
  {
    image: farmImages.hempFieldSun,
    label: "Cultivated in Tennessee",
    text: "Rows in the sun connect the catalog back to a real family farm and real growing seasons.",
  },
  {
    image: farmImages.cbgGummiesFrontLogo,
    label: "Label-backed gummies",
    text: "The supplied label brings real serving, ingredient, nutrition, and adult-use details into the catalog.",
  },
  {
    image: farmImages.cbgCapsulesPouchCard,
    label: "Capsule previews",
    text: "Real capsule photos give the future capsule listing a clean product identity while final data stays marked pending.",
  },
  {
    image: farmImages.hempStartsTable,
    label: "Hands-on farm work",
    text: "Young plants, outdoor work tables, and careful attention keep the farm story visible.",
  },
];

export default async function HomePage() {
  const [featuredProducts, allProducts] = await Promise.all([
    getFeaturedProducts(4),
    getProducts(),
  ]);
  const bundleProducts = allProducts.filter(isBundleProduct).slice(0, 2);

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
                Farm-Crafted Wellness
              </span>
              <span className="rounded-full border border-forest-900/15 bg-berry px-3 py-2 text-cream-50 shadow-soft">
                CBG Rich
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
                Family crafted in Tennessee
              </span>
            </div>
            <h1 className="font-display text-5xl font-black leading-[0.95] text-forest-900 sm:text-6xl lg:text-7xl">
              Warm, honest CBG shopping from The Funni Farm.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-forest-900/86">
              Small-batch, non-intoxicating CBG-rich hemp products for adults,
              made with farm care, clear labels, and a friendly order review
              before payment.
            </p>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-forest-900/78">
              Shop simple gummies, oils, bundles, flower listings, seeds, and
              future farm goods with plain product details and no medical
              promises.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <ButtonLink href="/shop?category=CBG%20Gummies" size="lg">
                Shop CBG
              </ButtonLink>
              <ButtonLink href="/learn/what-is-cbg" size="lg" variant="secondary">
                Learn About CBG
              </ButtonLink>
            </div>
            <div className="mt-9 grid gap-3 text-sm font-bold text-forest-900/75 sm:grid-cols-3">
              <span className="rounded-full bg-cream-50/80 px-4 py-3 shadow-soft">
                Non-intoxicating hemp
              </span>
              <span className="rounded-full bg-cream-50/80 px-4 py-3 shadow-soft">
                CBG-rich wellness
              </span>
              <span className="rounded-full bg-cream-50/80 px-4 py-3 shadow-soft">
                Lab-tested transparency
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <TrustBadge
            icon={ShieldCheck}
            text="CBG-rich hemp products made for adults who want clear labels and non-recreational shopping."
            title="Non-intoxicating hemp"
          />
          <TrustBadge
            icon={FlaskConical}
            text="Batch numbers, label details, and COA links help customers review product information."
            title="Batch transparency"
          />
          <TrustBadge
            icon={HeartHandshake}
            text="Orders are reviewed by the farm for availability, age, compliance, and shipping before payment instructions."
            title="Farm-direct order review"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-forest-900/12 bg-cream-50 shadow-farm lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[18rem]">
            <Image
              alt={jackFrostCoa.image.alt}
              className="object-cover object-top"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              src={jackFrostCoa.image.previewSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/48 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-forest-900/12 bg-forest-700 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cream-50">
              <FileText aria-hidden className="size-4 text-harvest-300" />
              Lab transparency
            </div>
            <h2 className="mt-4 font-display text-3xl font-black text-forest-900 md:text-4xl">
              COA links and batch notes belong in plain view.
            </h2>
            <p className="mt-3 leading-7 text-forest-900/74">
              The Lab Results page is where customers can review COA entries,
              cannabinoid summaries, batch notes, and testing placeholders as
              current files are added.
            </p>
            <p className="mt-3 text-sm font-bold leading-6 text-forest-900/62">
              COAs support transparency only. They are not medical advice and
              do not guarantee future batches or product effects.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/lab-results">
                View Lab Results
              </ButtonLink>
              <ButtonLink href={`/lab-results#${jackFrostCoa.id}`} variant="ghost">
                Read Jack Frost COA
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="From field to farm shelf"
            title="Real batches, real farm roots."
          >
            <p>
              The Funni Farm visuals should feel like they came from the work
              itself: plants in the field, trays in process, and products made
              with care for adult hemp wellness routines.
            </p>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processHighlights.map((item) => (
              <article
                className="group seed-card overflow-hidden rounded-seed transition duration-300 hover:-translate-y-1 hover:shadow-farm"
                key={item.label}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    alt={item.image.alt}
                    className="object-cover transition duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                    src={item.image.src}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/58 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-black text-forest-900">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-forest-900/70">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
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

      {bundleProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Bundle shelf"
              title="Adult hemp bundles, packed with care."
            >
              <p>
                Bundle products are configured as their own listings with
                compare-at savings. Fulfillment still depends on availability,
                current COAs, age confirmation, and shipping review.
              </p>
            </SectionHeading>
            <ButtonLink href="/shop?category=Bundles" variant="ghost">
              Shop Bundles
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {bundleProducts.map((bundle) => (
              <BundleCard
                bundle={bundle}
                key={bundle.id}
                products={allProducts}
              />
            ))}
          </div>
        </section>
      )}

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-harvest-300">
              How ordering works
            </p>
            <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">
              A friendly order request, reviewed by the farm.
            </h2>
            <p className="mt-4 leading-7 text-cream-100/76">
              This storefront does not collect credit-card numbers. Checkout
              creates an order request so The Funni Farm can review availability,
              age requirements, shipping rules, and product details before
              sending payment options.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {orderSteps.map((step, index) => (
              <article
                className="rounded-seed border border-cream-50/12 bg-cream-50/8 p-5"
                key={step.title}
              >
                <div className="flex items-center justify-between gap-3">
                  <step.icon aria-hidden className="size-7 text-harvest-300" />
                  <span className="font-display text-4xl font-black text-cream-50/20">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-black text-harvest-300">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-cream-100/72">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_.8fr] lg:px-8">
        <div className="seed-card rounded-seed p-6 md:p-8">
          <SectionHeading eyebrow="Plain English" title="What is CBG?">
            <p>
              CBG is a cannabinoid found in hemp. The Funni Farm focuses on
              non-intoxicating, CBG-rich hemp products with label-backed details
              and lab transparency where available.
            </p>
          </SectionHeading>
          <p className="mt-5 leading-7 text-forest-900/72">
            Learn how CBG differs from THC, why product labels and COAs matter,
            and how to shop without medical claims or recreational language.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/learn/what-is-cbg">Read the CBG Guide</ButtonLink>
            <ButtonLink href="/lab-results" variant="ghost">
              View COA Placeholders
            </ButtonLink>
          </div>
        </div>
        <div className="group overflow-hidden rounded-seed border border-harvest-700/25 bg-harvest-300 text-forest-900 shadow-soft">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              alt={farmImages.gummyTraysFull.alt}
              className="object-cover object-top transition duration-700 group-hover:scale-105"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              src={farmImages.cbgGummiesFrontLogo.src}
            />
          </div>
          <div className="p-6">
            <PackageCheck aria-hidden className="size-9" />
            <h3 className="mt-4 font-display text-3xl font-black">
              Batch-labeled farm goods
            </h3>
            <p className="mt-3 leading-7 text-forest-900/78">
              The gummy label data is structured on the product page so
              customers can review serving size, ingredients, adult-use notes,
              and lab-result placeholders.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-forest-900/12 bg-forest-900 text-cream-50 shadow-farm lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[22rem]">
            <Image
              alt={farmImages.hersheyFenceWide.alt}
              className="object-cover object-center"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              src={farmImages.hersheyFenceWide.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-harvest-300">
              Meet the mascot
            </p>
            <h2 className="mt-3 font-display text-4xl font-black">
              Hershey keeps the farm story close.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-cream-100/76">
              Hershey, the last remaining steer from the livestock days, brings
              the farm&apos;s past into the present with a little personality
              and a lot of heart.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/about" variant="secondary">
                Read Our Story
              </ButtonLink>
              <ButtonLink
                className="border-cream-50/30 text-cream-50 hover:bg-cream-50/10"
                href="/contact"
                variant="ghost"
              >
                Contact the Farm
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="seed-card rounded-seed p-6 md:p-8">
            <FileText aria-hidden className="size-9 text-moss" />
            <h2 className="mt-4 font-display text-4xl font-black text-forest-900">
              Questions before you shop?
            </h2>
            <p className="mt-4 leading-7 text-forest-900/72">
              Start with the quick answers, then use the product finder or
              contact the farm if you want help comparing formats. This site
              keeps recommendations preference-based and non-medical.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/product-finder" variant="secondary">
                Take Product Finder
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Contact the Farm
              </ButtonLink>
            </div>
          </div>
          <div className="seed-card rounded-seed p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-clay">
              FAQ preview
            </p>
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
