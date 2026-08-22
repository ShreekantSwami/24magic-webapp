import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the 24MAGIC team. Book a free consultation and get your quote within one business day.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
