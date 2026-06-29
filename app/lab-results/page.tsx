import type { Metadata } from "next";
import Link from "next/link";
import { FileText, FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProducts } from "@/lib/products/repository";

export const metadata: Metadata = {
  title: "Lab Results / COA",
  description:
    "Lab result and COA placeholders for The Funni Farm non-intoxicating CBG hemp wellness products.",
};

export default async function LabResultsPage() {
  const products = await getProducts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="COA / lab testing" title="Lab Results">
        <p>
          Lab transparency is part of the Funni Farm promise. Each product
          should be batch-tested, batch-labeled, and linked to a Certificate of
          Analysis so customers can review cannabinoid content, federal hemp
          compliance details, and safety testing status before use.
        </p>
      </SectionHeading>

      <div className="mt-8 rounded-seed border border-forest-900/12 bg-forest-900 p-5 text-cream-50 shadow-farm">
        <div className="flex items-start gap-3">
          <FlaskConical
            aria-hidden
            className="mt-1 size-6 shrink-0 text-harvest-300"
          />
          <p className="text-sm leading-6 text-cream-100/78">
            COA files must match product names, batch numbers, and labels.
            Replace every sample row with real batch numbers, lab names, tested
            dates, cannabinoid summaries, safety testing results, and PDF links
            before live sales.
          </p>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-seed border border-forest-900/12 bg-cream-50 shadow-soft">
        <div className="overflow-x-auto">
          <table className="min-w-[980px] w-full text-left text-sm">
            <thead className="bg-forest-700 text-cream-50">
              <tr>
                <Th>Product</Th>
                <Th>Batch</Th>
                <Th>Date Tested</Th>
                <Th>Lab</Th>
                <Th>PDF</Th>
                <Th>Cannabinoid Summary</Th>
                <Th>Safety Testing</Th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  className="border-b border-forest-900/10 last:border-b-0"
                  key={product.id}
                >
                  <Td>
                    <div className="font-black text-forest-900">
                      {product.name}
                    </div>
                    <div className="mt-1 flex gap-2">
                      {product.labTested ? (
                        <Badge tone="green">Lab tested</Badge>
                      ) : (
                        <Badge tone="cream">Pending</Badge>
                      )}
                    </div>
                  </Td>
                  <Td>{product.batchNumber || "Pending"}</Td>
                  <Td>{`2026-0${Math.min(index + 1, 6)}-15 placeholder`}</Td>
                  <Td>Independent lab placeholder</Td>
                  <Td>
                    <Link
                      className="focus-ring inline-flex items-center gap-2 rounded-full font-black text-clay underline decoration-clay/40 underline-offset-4"
                      href="/lab-results"
                    >
                      <FileText aria-hidden className="size-4" />
                      PDF pending
                    </Link>
                  </Td>
                  <Td>{product.cannabinoidInfo || "Pending COA summary."}</Td>
                  <Td>
                    Pass/fail safety testing placeholder. Replace with pesticide,
                    heavy metal, residual solvent, microbe, and mycotoxin status
                    where applicable.
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-4 text-xs font-black uppercase tracking-[0.14em]">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="align-top px-4 py-5 leading-6 text-forest-900/72">{children}</td>;
}
