import type { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";
import { getPolicy } from "@/lib/policies/content";

export const metadata: Metadata = {
  title: "Shipping Policy",
};

export default function ShippingPage() {
  return <PolicyPage policy={getPolicy("shipping")!} />;
}
