import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing the use of 24MAGIC bookkeeping and financial back-office services.",
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
