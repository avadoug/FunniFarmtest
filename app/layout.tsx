import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AgeGate } from "@/components/layout/AgeGate";
import { CartProvider } from "@/components/cart/CartProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: "The Funni Farm | Non-Intoxicating CBG Hemp Wellness",
    template: "%s | The Funni Farm",
  },
  description:
    "Small-batch, non-intoxicating CBG-rich hemp wellness products with lab-tested transparency and farm-crafted care.",
  metadataBase: new URL("https://thefunnifarm.example"),
  openGraph: {
    title: "The Funni Farm",
    description:
      "Non-intoxicating CBG-rich hemp wellness goods made with care.",
    images: ["/brand/funni-farm-official-logo.png"],
    siteName: "The Funni Farm",
    type: "website",
  },
  icons: {
    apple: "/brand/funni-farm-official-logo.png",
    icon: "/brand/funni-farm-official-logo.png",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#26351f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AgeGate />
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
