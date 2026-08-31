import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Financial workflows and business support solutions tailored to growing businesses.",
  openGraph: {
    title: "Solutions | 24MAGIC",
    description:
      "Financial workflows and business support solutions tailored to growing businesses.",
    url: "https://24magic.in/solutions",
    siteName: "24MAGIC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24MAGIC — Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions | 24MAGIC",
    description:
      "Financial workflows and business support solutions tailored to growing businesses.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://24magic.in/solutions",
  },
};

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return children;
}
