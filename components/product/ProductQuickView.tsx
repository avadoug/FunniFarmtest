"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/lib/products/types";
import { formatMoney } from "@/lib/utils/format";

export function ProductQuickView({
  onClose,
  product,
}: {
  onClose: () => void;
  product: Product;
}) {
  const { addItem } = useCart();
  const inStock = product.inventory > 0;

  return (
    <div
      aria-labelledby={`quick-view-${product.id}`}
      aria-modal="true"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
      role="dialog"
    >
      <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.5rem] border border-harvest-300 bg-cream-50 shadow-farm">
        <div className="flex justify-end p-3">
          <Button aria-label="Close quick view" onClick={onClose} size="icon" variant="ghost">
            <X aria-hidden className="size-5" />
          </Button>
        </div>
        <div className="grid gap-6 px-5 pb-6 md:grid-cols-2 md:px-8 md:pb-8">
          <div className="relative aspect-square overflow-hidden rounded-seed border border-forest-900/10 bg-cream-100">
            <Image
              alt={product.name}
              className="object-cover"
              fill
              sizes="(min-width: 768px) 420px, 90vw"
              src={product.image}
            />
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              {product.badge && <Badge tone="gold">{product.badge}</Badge>}
              <Badge tone="green">Non-Intoxicating</Badge>
              {product.category.includes("CBG") || product.tags.includes("CBG") ? (
                <Badge tone="cream">CBG Rich</Badge>
              ) : null}
              {product.labTested && <Badge tone="green">Lab Tested</Badge>}
              {product.ageRestricted && <Badge tone="dark">Adult Use</Badge>}
            </div>
            <h2
              className="mt-4 font-display text-3xl font-black text-forest-900"
              id={`quick-view-${product.id}`}
            >
              {product.name}
            </h2>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-clay">
              {product.category}
            </p>
            <p className="mt-4 text-2xl font-black text-forest-900">
              {formatMoney(product.price)}
            </p>
            <p className="mt-4 leading-7 text-forest-900/72">
              {product.shortDescription}
            </p>
            <p className="mt-4 rounded-2xl border border-forest-900/10 bg-white/45 p-3 text-sm leading-6 text-forest-900/70">
              {product.shippingRestrictions}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button disabled={!inStock} onClick={() => addItem(product)}>
                {inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Link
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-forest-700/20 px-4 py-2.5 text-sm font-bold text-forest-900 hover:bg-forest-700/10"
                href={`/product/${product.slug}`}
                onClick={onClose}
              >
                Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
