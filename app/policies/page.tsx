import type { Metadata } from "next";
import Link from "next/link";
import { policies } from "@/lib/policies/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Editable placeholder policies for The Funni Farm storefront.",
};

export default function PoliciesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Legal placeholders" title="Policies">
        <p>
          These pages are editable starter policies, not legal advice. Replace
          them with reviewed business-specific language before launch.
        </p>
      </SectionHeading>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {policies.map((policy) => (
          <Link
            className="seed-card rounded-seed p-5 transition hover:-translate-y-1 hover:shadow-farm"
            href={`/policies/${policy.slug}`}
            key={policy.slug}
          >
            <h2 className="font-display text-2xl font-black text-forest-900">
              {policy.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-forest-900/70">
              {policy.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
