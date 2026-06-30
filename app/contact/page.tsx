import type { Metadata } from "next";
import { Instagram, Mail, MapPin, MessageCircle, Store } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Funni Farm at thefunnifarm@outlook.com for product questions, wholesale inquiries, and order support.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Say hello" title="Contact The Funni Farm">
        <p>
          Ask a product question, start a wholesale conversation, or request
          order support. You can email the farm directly at{" "}
          <a
            className="font-black text-clay underline decoration-clay/35 underline-offset-4 hover:text-forest-900"
            href="mailto:thefunnifarm@outlook.com"
          >
            thefunnifarm@outlook.com
          </a>
          .
        </p>
      </SectionHeading>

      <div className="mt-10 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <aside className="space-y-4">
          <Info
            href="mailto:thefunnifarm@outlook.com"
            icon={Mail}
            title="Business Email"
            value="thefunnifarm@outlook.com"
          />
          <Info
            icon={MapPin}
            title="Farm / Location"
            value="Tennessee family farm. Add city or service area details later."
          />
          <Info
            icon={Instagram}
            title="Social Links"
            value="@thefunnifarm placeholder"
          />
          <Info
            icon={Store}
            title="Wholesale"
            value="Use the wholesale checkbox for future retail, farm, or partner inquiries."
          />
          <div className="rounded-seed border border-forest-900/12 bg-forest-900 p-5 text-cream-50 shadow-soft">
            <MessageCircle aria-hidden className="size-6 text-harvest-300" />
            <h2 className="mt-3 font-display text-2xl font-black">
              Email setup TODO
            </h2>
            <p className="mt-2 text-sm leading-6 text-cream-100/75">
              The direct email above is ready to use. Connect this form to
              Resend, SendGrid, Formspree, Supabase, or another service before
              relying on form submissions for customer support.
            </p>
          </div>
        </aside>
        <ContactForm />
      </div>
    </div>
  );
}

function Info({
  icon: Icon,
  href,
  title,
  value,
}: {
  href?: string;
  icon: typeof Mail;
  title: string;
  value: string;
}) {
  return (
    <div className="seed-card rounded-seed p-5">
      <Icon aria-hidden className="size-6 text-forest-700" />
      <h2 className="mt-3 font-display text-2xl font-black text-forest-900">
        {title}
      </h2>
      {href ? (
        <a
          className="mt-2 inline-flex text-sm font-black leading-6 text-clay underline decoration-clay/35 underline-offset-4 hover:text-forest-900"
          href={href}
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 text-sm leading-6 text-forest-900/70">{value}</p>
      )}
    </div>
  );
}
