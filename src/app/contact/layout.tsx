import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the 24MAGIC team. Book a free consultation and get your quote within one business day.",
  openGraph: {
    title: "Contact Us | 24MAGIC",
    description:
      "Get in touch with the 24MAGIC team. Book a free consultation and get your quote within one business day.",
    url: "https://24magic.in/contact",
    siteName: "24MAGIC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24MAGIC — Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | 24MAGIC",
    description:
      "Get in touch with the 24MAGIC team. Book a free consultation and get your quote within one business day.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://24magic.in/contact",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
