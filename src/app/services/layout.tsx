import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bookkeeping & reconciliation, e-commerce accounting, books cleanup, catch-up, and white-label agency support.",
  openGraph: {
    title: "Services | 24MAGIC",
    description:
      "Bookkeeping & reconciliation, e-commerce accounting, books cleanup, catch-up, and white-label agency support.",
    url: "https://24magic.in/services",
    siteName: "24MAGIC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24MAGIC — Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | 24MAGIC",
    description:
      "Bookkeeping & reconciliation, e-commerce accounting, books cleanup, catch-up, and white-label agency support.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://24magic.in/services",
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
