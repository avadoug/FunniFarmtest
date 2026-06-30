import type { Metadata } from "next";
import { ProductFinderQuiz } from "@/components/product/ProductFinderQuiz";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProducts } from "@/lib/products/repository";

export const metadata: Metadata = {
  title: "Product Finder Quiz",
  description:
    "A lightweight product preference quiz for The Funni Farm CBG-rich hemp wellness catalog.",
};

export default async function ProductFinderPage() {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Find your fit"
        title="Product Finder Quiz"
      >
        <p>
          Answer five friendly preference questions and get a simple,
          non-medical recommendation from the current Funni Farm product list.
          This quiz is for product preference only and is not medical advice.
        </p>
      </SectionHeading>

      <div className="mt-8">
        <ProductFinderQuiz products={products} />
      </div>
    </div>
  );
}
