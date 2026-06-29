import type { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";
import { getPolicy } from "@/lib/policies/content";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return <PolicyPage policy={getPolicy("terms")!} />;
}
