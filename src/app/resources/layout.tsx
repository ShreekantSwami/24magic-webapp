import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides and articles on bookkeeping, accounting, and small-business financial management.",
};

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return children;
}
