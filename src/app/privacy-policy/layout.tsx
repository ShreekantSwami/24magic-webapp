import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How 24MAGIC collects, uses, and protects your personal and business information.",
  openGraph: {
    title: "Privacy Policy | 24MAGIC",
    description:
      "How 24MAGIC collects, uses, and protects your personal and business information.",
    url: "https://24magic.in/privacy-policy",
    siteName: "24MAGIC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24MAGIC — Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | 24MAGIC",
    description:
      "How 24MAGIC collects, uses, and protects your personal and business information.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://24magic.in/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
