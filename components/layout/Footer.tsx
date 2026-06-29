import Link from "next/link";
import { Mail, MapPin, Sprout } from "lucide-react";
import { Logo } from "./Logo";

const shopLinks = [
  ["Shop Products", "/shop"],
  ["CBG Education", "/cbg"],
  ["Lab Results", "/lab-results"],
  ["Contact", "/contact"],
  ["Admin", "/admin"],
] as const;

const policyLinks = [
  ["Terms", "/policies/terms"],
  ["Privacy", "/policies/privacy"],
  ["Shipping", "/policies/shipping"],
  ["Refunds", "/policies/refunds"],
  ["Hemp Compliance", "/policies/hemp-compliance"],
  ["Age Policy", "/policies/age-policy"],
  ["Disclaimer", "/policies/disclaimer"],
] as const;

export function Footer() {
  return (
    <footer className="dark-market mt-20 text-cream-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8">
        <div>
          <Logo className="[&_*]:text-cream-50" />
          <p className="mt-5 max-w-xl text-sm leading-7 text-cream-100/78">
            The Funni Farm is a small-batch hemp and CBG wellness brand focused
            on non-intoxicating products, transparent labels, and adult wellness
            routines.
          </p>
          <div className="mt-5 grid gap-3 text-sm text-cream-100/78">
            <p className="flex items-center gap-2">
              <Sprout aria-hidden className="size-4 text-harvest-300" />
              Small batch, lab-tested, farm-crafted hemp wellness.
            </p>
            <p className="flex items-center gap-2">
              <Mail aria-hidden className="size-4 text-harvest-300" />
              hello@thefunnifarm.example
            </p>
            <p className="flex items-center gap-2">
              <MapPin aria-hidden className="size-4 text-harvest-300" />
              Farm location placeholder.
            </p>
          </div>
        </div>
        <FooterColumn links={shopLinks} title="Visit" />
        <FooterColumn links={policyLinks} title="Policies" />
      </div>
      <div className="border-t border-cream-50/10 px-4 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs leading-6 text-cream-100/68 sm:flex-row sm:items-center sm:justify-between">
          <p>
            The Funni Farm products are non-intoxicating hemp/CBG wellness
            products intended for adults. These products are not intended to
            diagnose, treat, cure, or prevent any disease. Please review product
            details, ingredients, and lab results before use.
          </p>
          <p>© {new Date().getFullYear()} The Funni Farm. Placeholder site.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  links,
  title,
}: {
  links: readonly (readonly [string, string])[];
  title: string;
}) {
  return (
    <div>
      <h2 className="font-display text-xl font-black text-harvest-300">{title}</h2>
      <ul className="mt-4 space-y-2">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link
              className="focus-ring inline-flex rounded-full py-1 text-sm font-bold text-cream-100/80 hover:text-harvest-300"
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
