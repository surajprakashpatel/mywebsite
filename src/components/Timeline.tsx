"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

function TimelineItem({ year, title, subtitle, description, icon, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-8 md:gap-12 group pb-12">
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-[20px] top-[40px] bottom-0 w-[1px] bg-white/[0.06] group-hover:bg-white/[0.12] transition-colors duration-500" />
      )}

      {/* Node Icon Container */}
      <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-obsidian-950 border border-white/[0.08] text-neutral-400 group-hover:text-white group-hover:border-white/20 transition-all duration-500 rounded-none shrink-0">
        <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors" />
        {icon}
        {/* Glowing aura */}
        <div className="absolute -inset-1 bg-white/5 rounded-none filter blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="flex-1"
      >
        <span className="inline-block text-2xl font-serif text-white mb-1">{year}</span>
        <h3 className="text-lg font-serif font-light text-neutral-200 mb-0.5">{title}</h3>
        <p className="text-xs text-gold-accent tracking-wider uppercase font-sans mb-3">{subtitle}</p>
        <p className="text-sm text-neutral-400 font-sans font-light leading-relaxed max-w-xl">
          {description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="journey" className="relative py-24 md:py-32 px-6 bg-obsidian-950">
      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[11px] tracking-widest uppercase text-neutral-500 font-sans font-medium">
              03 // The Founder's Journey
            </span>
            <div className="h-[1px] flex-1 bg-white/[0.06]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight">
            Tracing the path of <span className="italic">conviction and growth.</span>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="pl-2 md:pl-8">
          <TimelineItem
            year="2026"
            title="IIT Bhilai & Scaling Operations"
            subtitle="Genesis Incubation & Core Growth"
            description="Pitched Kartavya at the IIT Bhilai GENESIS incubation cohort, securing technical mentoring and advisory rails. Currently scaling deployment across new civic departments, building a core engineering team, and expanding local automation prototypes."
            icon={<Briefcase size={16} />}
          />

          <TimelineItem
            year="2025"
            title="TISS Incube Foundation & State Honors"
            subtitle="Incubation Cohort 3 & Ideathon Winner"
            description="Selected for incubation under the Tata Institute of Social Sciences (TISS) Incube Foundation (Cohort 3) to scale civic impact. Received official recognition at the Chhattisgarh State Ideathon for driving digital transparency in public sector workforce management."
            icon={<Award size={16} />}
          />

          <TimelineItem
            year="2020"
            title="The Foundations of Leadership"
            subtitle="Academic Rigor & High School Topper"
            description="Laid the groundwork for hard work and team alignment in student leadership. Appointed School Headboy and finished as the academic topper, anchoring structural values that now guide engineering team structures and execution."
            icon={<GraduationCap size={16} />}
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
}
