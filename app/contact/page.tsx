import type { Metadata } from "next";
import { Instagram, Mail, MapPin, MessageCircle, Store } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Funni Farm for product questions, wholesale inquiries, and order support placeholders.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Say hello" title="Contact The Funni Farm">
        <p>
          Ask a product question, start a wholesale conversation, or request
          order support. Email delivery is not connected yet; submissions are
          saved locally for development.
        </p>
      </SectionHeading>

      <div className="mt-10 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <aside className="space-y-4">
          <Info
            icon={Mail}
            title="Business Email"
            value="hello@thefunnifarm.example"
          />
          <Info
            icon={MapPin}
            title="Farm / Location"
            value="Location placeholder. Replace with city/state or service area."
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
              Connect this to Resend, SendGrid, Formspree, Supabase, or another
              service before relying on the form for customer support.
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
  title,
  value,
}: {
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
      <p className="mt-2 text-sm leading-6 text-forest-900/70">{value}</p>
    </div>
  );
}
