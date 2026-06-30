import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  FlaskConical,
  Leaf,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { farmImages } from "@/lib/brand/farmImages";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Friendly hemp and CBG education from The Funni Farm, including CBG basics, COA reading tips, product format guidance, and adult-use compliance reminders.",
};

const learningCards = [
  {
    href: "/learn/what-is-cbg",
    icon: Leaf,
    title: "What is CBG?",
    text: "Learn what CBG is, how it differs from CBD, whether it is intoxicating, and why labels and COAs matter.",
  },
  {
    href: "/lab-results",
    icon: FlaskConical,
    title: "How to read lab results",
    text: "Review COA basics like product name, batch number, tested date, cannabinoid totals, and lab information.",
  },
  {
    href: "/shop",
    icon: PackageCheck,
    title: "Choosing a product format",
    text: "Compare gummies, capsules, oils, and flower by preference, serving style, ingredients, and shipping review needs.",
  },
];

const faqs = [
  [
    "Does The Funni Farm make medical claims?",
    "No. Product pages and learning content are written for preference, transparency, and label review only. Products are not intended to diagnose, treat, cure, or prevent any disease.",
  ],
  [
    "Why does checkout use manual order review?",
    "Manual order review lets the farm check product availability, adult-use requirements, shipping restrictions, and product details before emailing payment options.",
  ],
  [
    "Where should I go after learning the basics?",
    "Start with the CBG guide, compare product formats, review lab results, then shop the catalog when you feel ready.",
  ],
];

export default function LearnPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Learn before you shop"
            title="Simple CBG education for adult hemp shoppers."
          >
            <p>
              The Funni Farm learning area keeps hemp education friendly,
              plain-spoken, and grounded in product labels, COAs, ingredients,
              adult-use reminders, and compliance review.
            </p>
          </SectionHeading>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/learn/what-is-cbg" size="lg">
              Read What Is CBG
            </ButtonLink>
            <ButtonLink href="/shop" size="lg" variant="secondary">
              Shop Products
            </ButtonLink>
            <ButtonLink href="#faq" size="lg" variant="ghost">
              FAQ
            </ButtonLink>
          </div>
        </div>

        <div className="seed-card overflow-hidden rounded-seed">
          <div className="relative aspect-[16/11] overflow-hidden">
            <Image
              alt={farmImages.cbgGummiesFrontLogo.alt}
              className="object-cover object-top"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              src={farmImages.cbgGummiesFrontLogo.src}
            />
          </div>
          <div className="p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-clay">
              CBG-rich, adult-use, transparent
            </p>
            <p className="mt-2 text-sm font-bold leading-6 text-forest-900/72">
              Clear learning content helps customers compare products without
              disease claims, treatment promises, or guaranteed effects.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {learningCards.map((card) => (
          <LearnCard key={card.title} {...card} />
        ))}
      </section>

      <section className="mt-14 rounded-seed border border-forest-900/12 bg-forest-900 p-6 text-cream-50 shadow-farm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <BookOpen aria-hidden className="size-9 text-harvest-300" />
            <h2 className="mt-4 font-display text-4xl font-black">
              A calm way to learn about CBG.
            </h2>
            <p className="mt-3 leading-7 text-cream-100/76">
              Start with the basics, check lab transparency, then compare
              formats based on taste, serving style, ingredients, and local
              shipping review.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <MiniPoint
              icon={ShieldCheck}
              title="Adult-use first"
              text="The catalog is written for adult hemp shoppers and includes compliance reminders."
            />
            <MiniPoint
              icon={FileText}
              title="Label-led shopping"
              text="Ingredients, serving notes, batch details, and COA links should guide decisions."
            />
            <MiniPoint
              icon={FlaskConical}
              title="COA transparency"
              text="Lab results help customers review batch identity and cannabinoid information."
            />
            <MiniPoint
              icon={PackageCheck}
              title="Preference-based choices"
              text="Choose gummies, capsules, oils, or flower by format preference, not medical claims."
            />
          </div>
        </div>
      </section>

      <section className="mt-14" id="faq">
        <div className="seed-card rounded-seed p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-clay">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-3xl font-black text-forest-900">
            Learning questions
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map(([question, answer]) => (
              <details
                className="group rounded-2xl border border-forest-900/10 bg-white/55 p-4"
                key={question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black text-forest-900">
                  <span>{question}</span>
                  <span className="text-xl leading-none text-clay transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-forest-900/72">
                  {answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/learn/what-is-cbg" variant="secondary">
              Read CBG Guide
            </ButtonLink>
            <ButtonLink href="/lab-results" variant="ghost">
              View Lab Results
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

function LearnCard({
  href,
  icon: Icon,
  text,
  title,
}: {
  href: string;
  icon: LucideIcon;
  text: string;
  title: string;
}) {
  return (
    <Link
      className="seed-card group rounded-seed p-5 transition hover:-translate-y-1 hover:shadow-farm"
      href={href}
    >
      <Icon aria-hidden className="size-7 text-forest-700" />
      <h2 className="mt-4 font-display text-2xl font-black text-forest-900">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-forest-900/72">{text}</p>
      <p className="mt-4 text-sm font-black text-clay group-hover:text-forest-900">
        Learn more
      </p>
    </Link>
  );
}

function MiniPoint({
  icon: Icon,
  text,
  title,
}: {
  icon: LucideIcon;
  text: string;
  title: string;
}) {
  return (
    <div className="rounded-seed border border-cream-50/12 bg-cream-50/8 p-5">
      <Icon aria-hidden className="size-5 text-harvest-300" />
      <h3 className="mt-3 font-display text-2xl font-black text-harvest-300">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-cream-100/72">{text}</p>
    </div>
  );
}
