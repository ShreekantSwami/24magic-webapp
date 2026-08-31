import type { ReactNode } from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff8f8] text-[#1f1a1b]">
      <div className="text-center">
        <div className="inline-flex rounded-full bg-[#830036] px-8 py-4">
          <span className="material-symbols-outlined text-3xl text-white animate-spin">
            autofps
          </span>
        </div>
        <p className="mt-4 text-base text-[#6b5c5d]">
          Loading page...
        </p>
      </div>
    </div>
  );
}