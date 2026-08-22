import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Financial workflows and back-office solutions tailored to growing businesses.",
};

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return children;
}
