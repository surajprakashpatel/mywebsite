"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 0.85,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const handleReadVision = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById("manifesto");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-obsidian-950">
      {/* Background glow overlay */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Side Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] tracking-widest uppercase text-neutral-400 font-medium">
              Active Builder & Architect
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-white leading-[1.1] mb-6"
          >
            Building the intelligence <br className="hidden md:inline" />
            behind tomorrow's <br className="hidden md:inline" />
            <span className="italic font-normal text-neutral-200">infrastructure.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-400 font-sans font-light max-w-xl leading-relaxed mb-8"
          >
            SURAJ PRAKASH PATEL — Entrepreneur, Systems Architect, and Builder of GovTech & Smart Automation.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
            {/* Primary Action Button */}
            <button
              onClick={handleReadVision}
              className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-sans text-sm font-medium tracking-wide hover:bg-neutral-200 transition-all duration-300 rounded-none cursor-pointer"
            >
              Read the Vision
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-neutral-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all duration-300 bg-white/[0.01] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all duration-300 bg-white/[0.01] flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all duration-300 bg-white/[0.01] flex items-center justify-center"
                aria-label="GitHub"
              >
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Portrait */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[400px] aspect-square lg:aspect-[4/5] bg-neutral-900 border border-white/[0.08] overflow-hidden group">
            {/* Soft grid lines inside the image container to enhance technical aesthetic */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-10" />

            <Image
              src="/images/founder_portrait.png"
              alt="SURAJ PRAKASH PATEL Portrait"
              fill
              priority
              sizes="(max-w-768px) 100vw, 400px"
              className="object-cover grayscale brightness-95 contrast-105 transition-all duration-700 group-hover:scale-102"
            />

            {/* Elegant corner highlights */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 z-20" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 z-20" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 z-20" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 z-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
