import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 24MAGIC and how we help small businesses keep clean, accurate, decision-ready books.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
