import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How 24MAGIC collects, uses, and protects your personal and business information.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
