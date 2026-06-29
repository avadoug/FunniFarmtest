import type { Metadata } from "next";
import { ProductFilters } from "@/components/product/ProductFilters";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProducts } from "@/lib/products/repository";
import { productCategories } from "@/lib/products/types";

export const metadata: Metadata = {
  title: "Shop Products",
  description:
    "Shop The Funni Farm non-intoxicating CBG-forward hemp wellness products, gummies, oils, flower, seeds, topicals, bundles, and merch.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const products = await getProducts();
  const params = await searchParams;
  const requestedCategory = params.category
    ? decodeURIComponent(params.category)
    : "All";
  const initialCategory = productCategories.includes(
    requestedCategory as (typeof productCategories)[number],
  )
    ? requestedCategory
    : "All";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="The farm shelf" title="Shop Products">
        <p>
          Browse non-intoxicating CBG-forward hemp wellness products, including
          gummies, oils, hemp flower, seeds, topicals, capsules, bundles, merch,
          and future Funni Farm releases.
        </p>
      </SectionHeading>
      <div className="mt-8">
        <ProductFilters initialCategory={initialCategory} products={products} />
      </div>
    </div>
  );
}
