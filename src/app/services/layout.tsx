import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bookkeeping & reconciliation, e-commerce accounting, books cleanup, catch-up, and white-label agency support.",
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
