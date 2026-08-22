import Link from "next/link";
import type React from "react";
import { FOOTER_LOGO_URL } from "../data/mockData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full rounded-t-2xl border-t border-[#dfbfc3]/30 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-6 md:px-12 py-16 w-full max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col items-start">
          {/* biome-ignore lint/performance/noImgElement: Remote CDN logo kept as plain img to match source design */}
          <img
            src={FOOTER_LOGO_URL}
            alt="24MAGIC Logo"
            className="h-10 w-auto object-contain mb-4 block"
          />
          <p className="text-sm text-[#584145] leading-relaxed">
            Precision in every digit. Magic in every insight.
          </p>
        </div>

        {/* Links Column */}
        <div className="col-span-1 md:col-span-3 flex flex-wrap justify-start md:justify-end gap-x-8 gap-y-4 items-center">
          <Link
            href="/services"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Services
          </Link>
          <Link
            href="/solutions"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Solutions
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Contact Support
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy#data-security"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Security
          </Link>
        </div>

        {/* Legal Disclaimer */}
        <div className="col-span-1 md:col-span-4 mt-4 p-5 bg-[#fff8f8] rounded-2xl border border-[#dfbfc3]/40 text-xs text-[#584145] space-y-2 leading-relaxed">
          <p className="font-bold text-[#1f1a1b] uppercase tracking-wider text-[11px]">
            Legal Disclaimer
          </p>
          <p>
            24MAGIC provides bookkeeping, transaction reconciliation, and
            financial back-office support services for businesses utilizing
            U.S.-based financial institutions and U.S. dollar (USD) accounts.
            24MAGIC is not a Certified Public Accounting (CPA) firm and does
            not provide licensed public accounting services, including audits,
            attestations, examinations, reviews, certifications, or any other
            services requiring CPA licensure.
          </p>
          <p>
            Our services are designed to support your everyday bookkeeping and
            financial operations and are not a replacement for professional
            accounting, tax, financial, or legal advice. 24MAGIC is not
            affiliated with or governed by the American Institute of Certified
            Public Accountants (AICPA).
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-[#dfbfc3]/30 text-center">
          <p className="text-xs text-[#584145]/80">
            © 2026 24MAGIC Financial Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
