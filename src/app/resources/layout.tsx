import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides and articles on bookkeeping, accounting, and small-business financial management.",
  openGraph: {
    title: "Resources | 24MAGIC",
    description:
      "Guides and articles on bookkeeping, accounting, and small-business financial management.",
    url: "https://24magic.in/resources",
    siteName: "24MAGIC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24MAGIC — Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | 24MAGIC",
    description:
      "Guides and articles on bookkeeping, accounting, and small-business financial management.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://24magic.in/resources",
  },
};

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return children;
}
