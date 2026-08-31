import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing the use of 24MAGIC bookkeeping and business support services.",
  openGraph: {
    title: "Terms of Service | 24MAGIC",
    description:
      "The terms governing the use of 24MAGIC bookkeeping and business support services.",
    url: "https://24magic.in/terms-of-service",
    siteName: "24MAGIC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24MAGIC — Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | 24MAGIC",
    description:
      "The terms governing the use of 24MAGIC bookkeeping and business support services.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://24magic.in/terms-of-service",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
