import { NextResponse, type NextRequest } from "next/server";
import products from "./data/products.json";

const activeProductSlugs = new Set(
  products
    .filter((product) => product.isActive)
    .map((product) => product.slug),
);

export function middleware(request: NextRequest) {
  const productMatch = request.nextUrl.pathname.match(/^\/product\/([^/]+)\/?$/);

  if (!productMatch) {
    return NextResponse.next();
  }

  const slug = decodeURIComponent(productMatch[1]);

  if (activeProductSlugs.has(slug)) {
    return NextResponse.next();
  }

  const shopUrl = request.nextUrl.clone();
  shopUrl.pathname = "/shop";
  shopUrl.search = "";

  return NextResponse.redirect(shopUrl);
}

export const config = {
  matcher: "/product/:path*",
};
