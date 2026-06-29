import type { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";
import { getPolicy } from "@/lib/policies/content";

export const metadata: Metadata = {
  title: "Age Policy",
};

export default function AgePolicyPage() {
  return <PolicyPage policy={getPolicy("age-policy")!} />;
}
