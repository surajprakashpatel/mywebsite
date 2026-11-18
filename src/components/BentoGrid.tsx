"use client";

import { motion } from "framer-motion";
import { Building2, Landmark, Truck, Activity, ArrowUpRight, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  className?: string;
  metrics?: { label: string; value: string };
}

function ProjectCard({ title, subtitle, description, tags, icon, className, metrics }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className={cn(
        "group relative flex flex-col justify-between p-6 bg-obsidian-900 border border-white/[0.04] hover:border-white/[0.1] transition-all duration-500 overflow-hidden bento-glow",
        className
      )}
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-white/[0.02] border border-white/[0.04] text-neutral-300 group-hover:text-white transition-colors">
            {icon}
          </div>
          <span className="text-[10px] tracking-widest uppercase text-neutral-500 group-hover:text-neutral-300 transition-colors font-sans">
            Shipped System
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-serif text-white font-light group-hover:text-white flex items-center gap-1">
            {title}
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0.5 -translate-x-0.5 group-hover:translate-y-0 group-hover:translate-x-0" />
          </h3>
          <p className="text-xs text-gold-accent/80 font-sans tracking-wide uppercase">{subtitle}</p>
        </div>

        <p className="text-sm text-neutral-400 font-sans font-light leading-relaxed mt-4">
          {description}
        </p>
      </div>

      {/* Footer Metrics or Tags */}
      <div className="mt-8 space-y-4">
        {metrics && (
          <div className="py-3 border-y border-white/[0.04] flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-sans">{metrics.label}</span>
            <span className="text-sm font-serif text-white tracking-wide">{metrics.value}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] tracking-wider font-mono bg-white/[0.02] text-neutral-400 border border-white/[0.04]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section id="shipped" className="relative py-24 md:py-32 px-6 bg-obsidian-950">
      <div className="max-w-6xl mx-auto z-10 relative">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[11px] tracking-widest uppercase text-neutral-500 font-sans font-medium">
              02 // Impact & Shipped Systems
            </span>
            <div className="h-[1px] flex-1 bg-white/[0.06]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight">
            Digital architecture deployed in <span className="italic">traditional domains.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Kartavya (Large) */}
          <ProjectCard
            title="Kartavya"
            subtitle="GovTech Transparency Rails"
            description="An enterprise-grade government attendance and payroll coordination ecosystem. Engineered to eliminate leakages, enforce transparency, and automate field worker validation using location intelligence and cryptographically secure logs."
            tags={["Android Studio", "GCP", "Next.js", "AI Studio"]}
            icon={<Building2 size={20} />}
            metrics={{ label: "Municipal Deployment", value: "Raigarh & Durg Corporations" }}
            className="md:col-span-2"
          />

          {/* Card 2: Reverse Auction (Medium) */}
          <ProjectCard
            title="Reverse Auction Engine"
            subtitle="Industrial Procurement Architecture"
            description="A high-throughput, sub-second bidding engine engineered for heavy industry. Standardizes supplier bidding patterns for power and steel plants, securing multi-million rupee trade auctions against concurrency issues and collusions."
            tags={["Next.js", "GCP", "Razorpay", "WebSockets"]}
            icon={<Cpu size={20} />}
            metrics={{ label: "Performance", value: "<150ms Bidding Latency" }}
            className="md:col-span-1"
          />

          {/* Card 3: Fleet Stack (Medium) */}
          <ProjectCard
            title="Fleet Stack"
            subtitle="Logistics & Fleet Intelligence"
            description="Advanced GPS tracking and spatial intelligence pipeline. Streamlines complex route logs, monitors speed variance, and predicts fuel optimizations for commercial and industrial supply chains."
            tags={["Next.js", "GCP", "Android Studio", "PostgreSQL"]}
            icon={<Truck size={20} />}
            metrics={{ label: "Live Telemetry", value: "Real-time Spatial Tracking" }}
            className="md:col-span-1"
          />

          {/* Card 4: R&D Dashboards (Large) */}
          <ProjectCard
            title="Active R&D Projects"
            subtitle="IoT & Computer Vision Pipelines"
            description="Pioneering smart automation workflows: implementing remote agricultural pump controllers (IoT) for automated water management, alongside real-time computer vision deviance dashboards monitoring safety gear compliance in steel works."
            tags={["AI Studio", "GCP", "IoT Microcontrollers", "TensorFlow"]}
            icon={<Activity size={20} />}
            metrics={{ label: "Current Focus", value: "AgriTech IoT & Industrial Vision" }}
            className="md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
