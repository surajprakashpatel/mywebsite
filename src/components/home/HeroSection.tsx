"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6 overflow-hidden border-b border-neutral-200/70 bg-gradient-to-b from-white via-neutral-50/40 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Minimalist Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/80 border border-neutral-200/70 text-xs font-sans text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Building & Exploring • Raigarh, India</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                Suraj Prakash Patel
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-neutral-600 font-normal tracking-tight leading-snug">
                Building software. Solving real-world problems. Guided by curiosity.
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg font-sans text-neutral-600 font-normal leading-relaxed max-w-xl">
              Founder of Curiosity Lab & Kartavya. Turning curiosity into practical software, civic systems, and durable institutions in Central India.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/journey"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-sans text-sm font-medium hover:bg-neutral-800 transition-all shadow-xs group"
              >
                <span>Explore My Journey</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 text-neutral-800 font-sans text-sm font-medium hover:bg-neutral-200/70 transition-all border border-neutral-200/70"
              >
                <span>View Selected Work</span>
              </Link>
            </div>

            {/* Fast Credentials / Key Pillars */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-neutral-200/80 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">1,200+</p>
                <p className="text-xs font-sans text-neutral-500 font-medium mt-1">Civic Workers</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">10+</p>
                <p className="text-xs font-sans text-neutral-500 font-medium mt-1">Shipped Systems</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">TISS & IIT</p>
                <p className="text-xs font-sans text-neutral-500 font-medium mt-1">Incubation Rails</p>
              </div>
            </div>
          </motion.div>

          {/* Right Portrait & Card Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl border border-neutral-200/80 p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-100/70 flex items-end justify-center">
                  <Image
                    src="/images/photo.png"
                    alt="Suraj Prakash Patel"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-contain object-bottom pt-3 hover:scale-102 transition-transform duration-700"
                  />
                </div>

                {/* Minimalist Caption Below Photo */}
                <div className="pt-3.5 pb-1 px-2 flex items-center justify-between text-xs text-neutral-600 font-sans">
                  <div className="flex items-center gap-1.5 font-medium text-neutral-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>Suraj Prakash Patel</span>
                  </div>
                  <span className="text-neutral-500">Raigarh, CG, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
