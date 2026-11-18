"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="manifesto" className="relative py-24 md:py-32 px-6 bg-obsidian-950 manifesto-gradient">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-radial from-white/[0.015] to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col gap-8"
        >
          {/* Section Marker */}
          <motion.div variants={textVariants} className="flex items-center gap-4">
            <span className="text-[11px] tracking-widest uppercase text-neutral-500 font-sans font-medium">
              01 // The Vision
            </span>
            <div className="h-[1px] flex-1 bg-white/[0.06]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={textVariants}
            className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight leading-tight"
          >
            Technology should be invisible.
          </motion.h2>

          {/* Body paragraphs */}
          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-neutral-400 font-sans font-light leading-relaxed first-letter:text-3xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-white"
          >
            For too long, the critical backbones of society—our municipal governance and heavy industrial sectors—have operated with heavy friction. Manual processes, administrative gaps, and paper logs slow down progress and erode trust.
          </motion.p>

          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-neutral-400 font-sans font-light leading-relaxed"
          >
            I believe software should act as a silent coordinator. By translating complex operational bottlenecks into automated, high-assurance digital platforms, we can establish absolute transparency in public sectors and unyielding efficiency in heavy industries.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="border-l border-neutral-850 pl-6 my-4 italic text-neutral-300 font-serif text-lg leading-relaxed"
          >
            "The goal is simple: Create systems that run with absolute precision, eliminate human variance, and establish ironclad trust."
          </motion.div>

          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-neutral-400 font-sans font-light leading-relaxed"
          >
            Whether it is deploying automated attendance systems that secure payroll honesty for municipal sanitation workers, or engineering real-time reverse auction architectures that handle millions in trade for power and steel plants—the thesis remains identical.
          </motion.p>

          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-neutral-400 font-sans font-light leading-relaxed"
          >
            We are not building generic agency templates or temporary patches. We are writing the software that will serve as the stable digital rails for tomorrow.
          </motion.p>

          {/* Signature */}
          <motion.div variants={textVariants} className="mt-8 pt-6 border-t border-white/[0.04]">
            <p className="text-sm font-serif text-white tracking-wide">SURAJ PRAKASH PATEL</p>
            <p className="text-[11px] font-sans text-neutral-500 tracking-wider uppercase mt-1">
              Systems Architect & Builder
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
