"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { BookkeepingShowcase } from "@/components/BookkeepingShowcase";
import { ArticlesSection } from "@/components/ArticlesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ServicesFaq } from "@/components/ServicesFaq";
import { ConsultationCta } from "@/components/ConsultationCta";
import { ArticleItem, ServiceItem } from "@/types";
import { ServiceDetailModal } from "@/components/ServiceDetailModal";
import { ArticleDetailModal } from "@/components/ArticleDetailModal";
import { useRouter } from "next/navigation";

const LAUNCH_DATE = new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE!);

export default function Home() {
  const [phase, setPhase] = useState<'loading' | 'countdown' | 'revealed'>(
    'loading',
  );
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(
    null,
  );

  const handleOpenEstimator = () => {
    router.push("/solutions");
  };

  const handleViewCaseStudies = () => {
    router.push("/resources");
  };

  useEffect(() => {
    // Initial check - determine phase immediately without interval
    const checkInitialPhase = () => {
      const now = new Date();
      if (now >= LAUNCH_DATE) {
        setPhase('revealed');
      } else {
        setPhase('countdown');
      }
    };

    checkInitialPhase();

    // Then start the interval for countdown updates
    const checkLaunch = () => {
      const now = new Date();
      const isAfterLaunch = now >= LAUNCH_DATE;

      if (isAfterLaunch) {
        setPhase('revealed');
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        let diff = Math.max(
          0,
          Math.floor((LAUNCH_DATE.getTime() - now.getTime()) / 1000),
        );
        const days = Math.floor(diff / 86400);
        diff %= 86400;
        const hours = Math.floor(diff / 3600);
        diff %= 3600;
        const minutes = Math.floor(diff / 60);
        const seconds = diff % 60;
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    checkLaunch();
    const interval = setInterval(checkLaunch, 1000);
    return () => clearInterval(interval);
  }, []);

  // Render based on phase with proper fallback
  if (phase === 'loading') {
    // During initial SSR, show countdown immediately to avoid flicker
    // This prevents the "blank screen" then "countdown" then "website" sequence
    setPhase('countdown');
  }

  if (phase === 'countdown') {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#830036] via-[#a61d4c] to-[#1f1a1b]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#ffb55b] rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 py-16 flex flex-col items-center text-center">
          {/* Logo */}
          <Image
            src="/24magic-logo.jpg"
            alt="24MAGIC"
            width={180}
            height={52}
            className="h-14 md:h-16 w-auto object-contain mb-16 rounded-2xl"
            priority
          />

          {/* Coming soon badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15! backdrop-blur-sm px-6! py-2! text-xs font-semibold text-white! border border-white/20! mb-6 mt-5!">
            <div className="p-3 flex gap-2">
              <div className="relative flex items-center justify-center">
                <div className="absolute -left-3 aspect-square size-4  rounded-full bg-[#830036] mb-1"></div>
                <div className="absolute -left-3 aspect-square size-4 animate-ping  rounded-full bg-[#830036] mb-1"></div>
              </div>
              Coming Soon
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3">
            We&apos;re launching something exciting
          </h1>
          <p className="text-base sm:text-lg text-white/70 font-medium mb-10">
            {LAUNCH_DATE.toLocaleDateString("en-GB", { month: "short", day: "numeric" })} &
nbsp;&middot;&nbsp;
            {LAUNCH_DATE.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: false })} IST
          </p>

          {/* Countdown */}
          <div className="units">
            <div className="unit">
              <div className="box">
                <span className="num">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
              </div>
              <span className="lbl">Days</span>
            </div>
            <div className="sep">:</div>
            <div className="unit">
              <div className="box">
                <span className="num">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
              </div>
              <span className="lbl">Hours</span>
            </div>
            <div className="sep">:</div>
            <div className="unit">
              <div className="box">
                <span className="num">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
              </div>
              <span className="lbl">Minutes</span>
            </div>
            <div className="sep">:</div>
            <div className="unit">
              <div className="box">
                <span className="num">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
              <span className="lbl">Seconds</span>
            </div>
          </div>

          {/* Refresh Button - visible on counter section only */}
          <div className="mt-8 text-center">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#830036] text-white font-medium text-sm hover:bg-[#a61d4c] transition-colors shadow-md shadow-[#830036]/20"
              aria-label="Refresh page"
            >
              <span className="material-symbols-outlined">
                refresh
              </span>
              Refresh Page
            </button>
            <p className="mt-2 text-xs text-white/60">
              Click above to reload
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'revealed') {
    return (
      <div className="min-h-screen bg-[#fff8f8] text-[#1f1a1b] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between selection:bg-[#a61d4c] selection:text-white">
        {/* Navigation Bar */}
        <Header />

        {/* Main Dynamic View Content */}
        <main className="flex-1">
          <HeroSection
            onViewCaseStudies={handleViewCaseStudies}
            onOpenEstimator={handleOpenEstimator}
            onExploreServices={() => router.push("/services")}
          />
          <BookkeepingShowcase />
          <ArticlesSection
            onSelectArticle={(art) => setSelectedArticle(art)}
            onViewAllResources={() => router.push("/resources")}
          />
          <TestimonialsSection />
          <ServicesFaq />
          <ConsultationCta />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals & Popups */}
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />

        <ArticleDetailModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      </div>
    );
  }

  // Fallback - should never reach here
  return null;
}