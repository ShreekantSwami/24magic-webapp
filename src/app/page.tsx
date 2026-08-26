"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-09-01T07:00:00+05:30");
    const tick = () => {
      const now = new Date();
      let diff = Math.max(
        0,
        Math.floor((target.getTime() - now.getTime()) / 1000),
      );
      const days = Math.floor(diff / 86400);
      diff %= 86400;
      const hours = Math.floor(diff / 3600);
      diff %= 3600;
      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;
      setTimeLeft({ days, hours, minutes, seconds });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

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
          September 1, 2026 &nbsp;&middot;&nbsp; 7:00 AM IST
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
      </div>
    </div>
  );
}
