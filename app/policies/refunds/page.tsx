import type { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";
import { getPolicy } from "@/lib/policies/content";

export const metadata: Metadata = {
  title: "Refund Policy",
};

export default function RefundsPage() {
  return <PolicyPage policy={getPolicy("refunds")!} />;
}
