import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 24MAGIC and how we help small businesses keep clean, accurate, decision-ready books.",
  openGraph: {
    title: "About Us | 24MAGIC",
    description:
      "Learn about 24MAGIC and how we help small businesses keep clean, accurate, decision-ready books.",
    url: "https://24magic.in/about",
    siteName: "24MAGIC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24MAGIC — About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | 24MAGIC",
    description:
      "Learn about 24MAGIC and how we help small businesses keep clean, accurate, decision-ready books.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://24magic.in/about",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
