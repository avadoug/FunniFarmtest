import type { Metadata } from "next";
import Image from "next/image";
import { FlaskConical, HeartHandshake, PackageCheck, Sprout } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Funni Farm, a small-batch non-intoxicating hemp and CBG wellness brand.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
        <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-forest-900/12 bg-cream-100 shadow-farm">
          <Image
            alt="The Funni Farm logo"
            className="object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            src="/brand/funni-farm-official-logo.png"
          />
        </div>
        <div className="flex flex-col justify-center">
          <SectionHeading eyebrow="Our story" title="Good plants, good people, honest products.">
            <p>
              The Funni Farm grew from a simple belief: good plants, good
              people, and honest products still matter. We focus on
              non-intoxicating hemp, CBG-forward wellness products, seeds, and
              small-batch goods made with care, clarity, and respect for the
              plant.
            </p>
            <p className="mt-4">
              This origin story is placeholder copy until the real founder
              names, farm location, history, and product journey are provided.
            </p>
          </SectionHeading>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/shop">Shop Products</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Contact the Farm
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          <Value
            icon={Sprout}
            text="Small-batch hemp goods should feel cared for, labeled clearly, and built for adult wellness routines."
            title="Small Farm Care"
          />
          <Value
            icon={FlaskConical}
            text="COA links, batch numbers, and lab-tested transparency are built into the product model."
            title="Quality + Testing"
          />
          <Value
            icon={PackageCheck}
            text="Seeds and genetics listings have room for lineage, seed type, pack size, and restrictions."
            title="Seeds + Genetics"
          />
          <Value
            icon={HeartHandshake}
            text="The tone should feel welcoming, practical, adult, clear, and community-minded."
            title="Community Tone"
          />
        </div>
      </section>

      <section className="bg-forest-900 py-16 text-cream-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <StoryBlock title="Why CBG Matters">
            CBG is a cannabinoid found in hemp. The Funni Farm can explain CBG
            in plain language, keep products positioned as non-intoxicating
            adult hemp wellness, and link verified lab results for transparency.
          </StoryBlock>
          <StoryBlock title="Seeds and Genetics">
            Future seed listings can include lineage, seed type, pack size,
            batch notes, growing disclaimers, and legal sale restrictions once
            those details are confirmed.
          </StoryBlock>
          <StoryBlock title="Craft Hemp Products">
            Gummies, oils, flower, topicals, capsules, bundles, and merch can
            all live in one consistent catalog with clean product pages,
            batch-labeled details, adult-use language, and a manual
            order-request flow.
          </StoryBlock>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-clay">
          Placeholder until verified
        </p>
        <h2 className="mt-3 font-display text-4xl font-black text-forest-900">
          Quality, testing, and trust should be specific.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl leading-7 text-forest-900/72">
          Before launch, replace this copy with real COA PDFs, product batch
          numbers, ingredients, cannabinoid amounts, manufacturing details,
          state shipping restrictions, and reviewed compliance language.
        </p>
        <ButtonLink className="mt-7" href="/lab-results" variant="secondary">
          View Lab Result Placeholders
        </ButtonLink>
      </section>
    </div>
  );
}

function Value({
  icon: Icon,
  text,
  title,
}: {
  icon: typeof Sprout;
  text: string;
  title: string;
}) {
  return (
    <div className="seed-card rounded-seed p-5">
      <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-forest-700 text-cream-50">
        <Icon aria-hidden className="size-5" />
      </div>
      <h2 className="font-display text-2xl font-black text-forest-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-forest-900/70">{text}</p>
    </div>
  );
}

function StoryBlock({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-seed border border-cream-50/12 bg-cream-50/8 p-6">
      <h2 className="font-display text-3xl font-black text-harvest-300">
        {title}
      </h2>
      <p className="mt-3 leading-7 text-cream-100/72">{children}</p>
    </div>
  );
}
