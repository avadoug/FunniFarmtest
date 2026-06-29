"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Heart, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductQuickView } from "./ProductQuickView";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/lib/products/types";
import { formatMoney } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

const WISHLIST_KEY = "funni-farm-wishlist";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [favorite, setFavorite] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const inStock = product.inventory > 0;

  useEffect(() => {
    const saved = window.localStorage.getItem(WISHLIST_KEY);
    const ids = saved ? (JSON.parse(saved) as string[]) : [];
    setFavorite(ids.includes(product.id));
  }, [product.id]);

  function toggleFavorite() {
    const saved = window.localStorage.getItem(WISHLIST_KEY);
    const ids = saved ? (JSON.parse(saved) as string[]) : [];
    const next = ids.includes(product.id)
      ? ids.filter((id) => id !== product.id)
      : [...ids, product.id];

    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(next));
    setFavorite(next.includes(product.id));
  }

  return (
    <>
      <article className="group seed-card relative flex h-full flex-col overflow-hidden rounded-seed">
        <div className="relative aspect-[1.02] overflow-hidden bg-cream-100">
          <Link href={`/product/${product.slug}`} tabIndex={-1}>
            <Image
              alt={product.name}
              className="object-cover transition duration-500 group-hover:scale-105"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              src={product.image}
            />
          </Link>
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {product.badge && <Badge tone="gold">{product.badge}</Badge>}
            {!inStock && <Badge tone="dark">Out</Badge>}
          </div>
          <div className="absolute right-3 top-3 flex gap-2">
            <button
              aria-label={favorite ? "Remove from wishlist" : "Add to wishlist"}
              className={cn(
                "focus-ring flex size-10 items-center justify-center rounded-full border border-forest-900/10 bg-cream-50/90 text-forest-900 shadow-soft backdrop-blur hover:bg-cream-50",
                favorite && "text-clay",
              )}
              onClick={toggleFavorite}
              type="button"
            >
              <Heart
                aria-hidden
                className={cn("size-5", favorite && "fill-current")}
              />
            </button>
            <button
              aria-label={`Quick view ${product.name}`}
              className="focus-ring flex size-10 items-center justify-center rounded-full border border-forest-900/10 bg-cream-50/90 text-forest-900 shadow-soft backdrop-blur hover:bg-cream-50"
              onClick={() => setQuickViewOpen(true)}
              type="button"
            >
              <Eye aria-hidden className="size-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-clay">
            {product.category}
          </p>
          <Link
            className="mt-2 font-display text-2xl font-black leading-tight text-forest-900 hover:text-clay"
            href={`/product/${product.slug}`}
          >
            {product.name}
          </Link>
          <p className="mt-3 flex-1 text-sm leading-6 text-forest-900/70">
            {product.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                tone={
                  tag === "CBG"
                    ? "purple"
                    : tag === "Non-Intoxicating" || tag === "Lab-Tested"
                      ? "green"
                      : "cream"
                }
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xl font-black text-forest-900">
                {formatMoney(product.price)}
              </p>
              {product.compareAtPrice && (
                <p className="text-xs font-bold text-forest-900/45 line-through">
                  {formatMoney(product.compareAtPrice)}
                </p>
              )}
            </div>
            <Button
              aria-label={`Add ${product.name} to cart`}
              disabled={!inStock}
              onClick={() => addItem(product)}
              size="icon"
              variant={inStock ? "primary" : "ghost"}
            >
              <ShoppingBag aria-hidden className="size-5" />
            </Button>
          </div>
        </div>
      </article>
      {quickViewOpen && (
        <ProductQuickView
          onClose={() => setQuickViewOpen(false)}
          product={product}
        />
      )}
    </>
  );
}
