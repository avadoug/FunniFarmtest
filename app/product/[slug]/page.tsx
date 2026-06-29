import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  FileText,
  FlaskConical,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductPurchasePanel } from "@/components/product/ProductPurchasePanel";
import { RecentlyViewed } from "@/components/product/RecentlyViewed";
import {
  getProductBySlug,
  getProducts,
  getRelatedProducts,
} from "@/lib/products/repository";
import { formatMoney } from "@/lib/utils/format";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Non-Intoxicating Hemp Wellness`,
    description: `${product.shortDescription} Lab-tested and batch-labeled where available for adult hemp wellness routines.`,
    openGraph: {
      title: `${product.name} | The Funni Farm`,
      description: `${product.shortDescription} Non-intoxicating, adult-use hemp wellness from The Funni Farm.`,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const [relatedProducts, allProducts] = await Promise.all([
    getRelatedProducts(product, 4),
    getProducts(),
  ]);
  const gallery = [product.image, ...product.gallery].filter(
    (image, index, all) => all.indexOf(image) === index,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        className="focus-ring inline-flex rounded-full text-sm font-black text-clay hover:text-forest-900"
        href="/shop"
      >
        Back to shop
      </Link>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <ProductGallery images={gallery} name={product.name} />
        <div>
          <div className="flex flex-wrap gap-2">
            {product.badge && <Badge tone="gold">{product.badge}</Badge>}
            <Badge tone="purple">{product.category}</Badge>
            <Badge tone="green">Non-Intoxicating</Badge>
            {product.category.includes("CBG") || product.tags.includes("CBG") ? (
              <Badge tone="cream">CBG-Forward</Badge>
            ) : null}
            {product.labTested && <Badge tone="green">Lab Tested</Badge>}
            {product.batchNumber && <Badge tone="gold">Batch-Labeled</Badge>}
            {product.ageRestricted && <Badge tone="dark">Adult Use</Badge>}
          </div>
          <h1 className="mt-5 font-display text-4xl font-black leading-tight text-forest-900 md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <p className="text-3xl font-black text-forest-900">
              {formatMoney(product.price)}
            </p>
            {product.compareAtPrice && (
              <p className="text-lg font-bold text-forest-900/45 line-through">
                {formatMoney(product.compareAtPrice)}
              </p>
            )}
          </div>
          <p className="mt-5 text-lg leading-8 text-forest-900/75">
            {product.fullDescription}
          </p>
          <div className="mt-6">
            <ProductPurchasePanel product={product} />
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_.85fr]">
        <section className="seed-card rounded-seed p-6 md:p-8">
          <h2 className="font-display text-3xl font-black text-forest-900">
            Product Details
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Spec label="Category" value={product.category} />
            <Spec label="Weight" value={product.weight || "Placeholder"} />
            <Spec label="Pack size" value={product.packSize || "Placeholder"} />
            <Spec
              label="Batch number"
              value={product.batchNumber || "Pending"}
            />
            <Spec
              label="Seed type"
              value={product.seedType || "Not applicable"}
            />
            <Spec
              label="Lineage"
              value={product.strainLineage || "Pending"}
            />
          </div>
          <div className="hand-divider my-8" />
          <ContentBlock title="Ingredients">
            {product.ingredients || "Ingredients pending final label review."}
          </ContentBlock>
          <ContentBlock title="Cannabinoid Info">
            {product.cannabinoidInfo ||
              "Cannabinoid profile pending current lab results."}
          </ContentBlock>
          <ContentBlock title="Suggested Use">
            Use only as directed on the final product label. Start with the
            smallest suggested serving and allow time to understand your personal
            response. Intended for adult hemp wellness routines only.
          </ContentBlock>
        </section>

        <aside className="space-y-5">
          <Notice icon={ShieldCheck} title="Product Standards" tone="green">
            <ul className="space-y-1">
              <li>Non-intoxicating hemp product.</li>
              <li>CBG-forward where listed on the product label.</li>
              <li>
                {product.labTested
                  ? "Lab-tested and ready for COA review."
                  : "Lab testing pending before live sale."}
              </li>
              <li>Batch-labeled for transparency.</li>
              <li>Adult use only.</li>
              <li>
                Not intended to diagnose, treat, cure, or prevent disease.
              </li>
            </ul>
          </Notice>
          <Notice
            icon={FileText}
            title="COA / Lab Results"
            tone="gold"
          >
            <p>
              Batch-specific lab files are placeholders until real COA PDFs are
              uploaded.
            </p>
            <Link
              className="focus-ring mt-3 inline-flex rounded-full font-black text-forest-900 underline decoration-clay/40 underline-offset-4 hover:text-clay"
              href={product.coaUrl || "/lab-results"}
            >
              View lab results
            </Link>
          </Notice>
          <Notice
            icon={ShieldCheck}
            title="Hemp Compliance Note"
            tone="green"
          >
            {product.hempComplianceNote}
          </Notice>
          <Notice
            icon={AlertTriangle}
            title="Shipping Restrictions"
            tone="cream"
          >
            {product.shippingRestrictions}
          </Notice>
          <Notice
            icon={PackageCheck}
            title="Age Restriction"
            tone="cream"
          >
            {product.ageRestricted
              ? "Adult hemp wellness product. Age verification and location restrictions may apply."
              : "No age restriction configured for this placeholder product."}
          </Notice>
          <Notice
            icon={FlaskConical}
            title="General Wellness Disclaimer"
            tone="cream"
          >
            Products are not intended to diagnose, treat, cure, or prevent any
            disease.
          </Notice>
        </aside>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-3xl font-black text-forest-900">
            Related Products
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      )}

      <RecentlyViewed currentId={product.id} products={allProducts} />
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-forest-900/10 bg-white/45 p-4">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-clay">
        {label}
      </p>
      <p className="mt-1 font-bold text-forest-900">{value}</p>
    </div>
  );
}

function ContentBlock({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mt-6">
      <h3 className="font-display text-2xl font-black text-forest-900">
        {title}
      </h3>
      <p className="mt-2 leading-7 text-forest-900/72">{children}</p>
    </div>
  );
}

function Notice({
  children,
  icon: Icon,
  title,
  tone,
}: {
  children: React.ReactNode;
  icon: typeof FileText;
  title: string;
  tone: "gold" | "green" | "cream";
}) {
  const colors = {
    cream: "bg-cream-50",
    gold: "bg-harvest-300",
    green: "bg-forest-700 text-cream-50",
  };

  return (
    <div className={`rounded-seed border border-forest-900/12 p-5 shadow-soft ${colors[tone]}`}>
      <Icon aria-hidden className="size-6" />
      <h3 className="mt-3 font-display text-2xl font-black">{title}</h3>
      <div className="mt-2 text-sm leading-6 opacity-80">{children}</div>
    </div>
  );
}
