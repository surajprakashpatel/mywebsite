"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 px-6 overflow-hidden border-b border-[#E4E1D8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#E4E1D8] text-xs font-sans text-[#5A626A]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-medium tracking-wide">Building & Exploring • Raigarh, India</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal text-[#202328] leading-[1.15] tracking-tight">
              I&apos;m <span className="underline decoration-[#E4E1D8] underline-offset-8">Suraj Prakash Patel</span>.
              <br />
              <span className="italic font-light text-[#5A626A] text-2xl sm:text-3xl md:text-4xl block mt-2">
                Entrepreneur, technologist, and curious by nature.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg font-sans text-[#5A626A] font-light leading-relaxed max-w-xl">
              I build software, experiment with ideas, solve real-world problems, and explore the possibilities of technology. My journey is about turning curiosity into something meaningful — one idea, one project, and one experience at a time.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/journey"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#202328] text-white font-sans text-sm font-medium hover:bg-[#2B536E] transition-colors shadow-xs group"
              >
                <span>Explore My Journey</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFFFFF] border border-[#E4E1D8] text-[#202328] font-sans text-sm font-medium hover:bg-[#EFECE6] transition-colors"
              >
                <span>View My Work</span>
              </Link>
            </div>

            {/* Fast Credentials / Key Pillars */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#E4E1D8]/80 max-w-lg">
              <div>
                <p className="font-serif text-xl sm:text-2xl font-light text-[#202328]">1,200+</p>
                <p className="text-[11px] font-sans text-[#717A84] uppercase tracking-wider mt-0.5">Civic Workers</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl font-light text-[#202328]">10+</p>
                <p className="text-[11px] font-sans text-[#717A84] uppercase tracking-wider mt-0.5">Shipped Systems</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl font-light text-[#202328]">TISS & IIT</p>
                <p className="text-[11px] font-sans text-[#717A84] uppercase tracking-wider mt-0.5">Incubation Rails</p>
              </div>
            </div>
          </motion.div>

          {/* Right Portrait & Card Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Backing decorative frame */}
              <div className="absolute -inset-3 border border-[#E4E1D8] -rotate-1 bg-[#EFECE6]/40 -z-10" />

              {/* Main Image Container */}
              <div className="relative bg-[#FFFFFF] border border-[#E4E1D8] p-3 shadow-md">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFECE6]">
                  <Image
                    src="/images/founder_portrait.png"
                    alt="Suraj Prakash Patel"
                    fill
                    priority
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Caption below photo */}
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs text-[#717A84] font-sans">
                  <span>Suraj Prakash Patel</span>
                  <span className="italic font-serif">Raigarh, CG</span>
                </div>
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -left-6 bg-[#FFFFFF] border border-[#E4E1D8] p-4 max-w-[260px] shadow-lg hidden sm:block">
                <p className="font-serif text-xs italic text-[#202328] leading-snug">
                  &ldquo;Don&apos;t make life just a record of what you achieved. Make it a record of who you&apos;re becoming.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
