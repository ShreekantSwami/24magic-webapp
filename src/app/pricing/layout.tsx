import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for 24MAGIC bookkeeping and business support services plans.",
  openGraph: {
    title: "Pricing | 24MAGIC",
    description:
      "Simple, transparent pricing for 24MAGIC bookkeeping and business support services plans.",
    url: "https://24magic.in/pricing",
    siteName: "24MAGIC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24MAGIC — Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | 24MAGIC",
    description:
      "Simple, transparent pricing for 24MAGIC bookkeeping and business support services plans.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://24magic.in/pricing",
  },
};

export default function PricingLayout({ children }: { children: ReactNode }) {
  return children;
}
