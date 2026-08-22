import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for 24MAGIC bookkeeping and financial back-office support plans.",
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return children;
}
