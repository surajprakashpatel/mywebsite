import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Code2, Target } from "lucide-react";
import { ventures } from "@/data/ventures";

export const metadata: Metadata = {
  title: "My Work & Ventures",
  description:
    "Companies, ventures, and engineering pillars of Suraj Prakash Patel. Founder of Curiosity Lab, Cosmobyte Technologies, and Kartavya.",
};

const workCategories = [
  {
    title: "Entrepreneurship",
    icon: <Building2 className="w-5 h-5 text-neutral-900" />,
    description:
      "Identifying unaddressed market bottlenecks, understanding grassroots business dynamics, managing unit economics, and executing with extreme capital efficiency in non-metro ecosystems.",
    capabilities: [
      "Grassroots Customer Discovery & Validation",
      "Venture Capital & Public Incubation Strategy",
      "End-to-End Product Roadmapping",
      "Lean Team Assembly & Engineering Leadership",
    ],
  },
  {
    title: "Technology & Software",
    icon: <Code2 className="w-5 h-5 text-neutral-900" />,
    description:
      "Designing distributed cloud backends, resilient mobile clients, and low-latency bidding architectures. Prioritizing deterministic data guarantees, offline sync, and maintainable systems.",
    capabilities: [
      "Full-Stack TypeScript & Next.js Ecosystems",
      "High-Concurrency Go Services & WebSockets",
      "Relational Modeling (PostgreSQL, SQLite Edge)",
      "Biometric Hardware & IoT Telemetry Protocols",
    ],
  },
  {
    title: "Problem Solving",
    icon: <Target className="w-5 h-5 text-neutral-900" />,
    description:
      "Applying software where paper registers and opacity created massive friction: municipal ghost-worker fraud, property tax revenue leakages, and opaque industrial raw material procurement.",
    capabilities: [
      "Civic Workforce Transparency (GovTech)",
      "Industrial Procurement Reverse Auctions",
      "Automated Municipal Tax Assessments",
      "Incorruptible Audit Logs & Field Accountability",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-200/70 pb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Professional Identity
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Companies, systems & <br />
            <span className="text-neutral-500 font-normal">engineering disciplines.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal max-w-2xl leading-relaxed">
            I build software where technology has historically been missing: municipal corporations, local government offices, and heavy industrial supply chains in Central India.
          </p>
        </div>

        {/* 3 Pillars of Work */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Disciplinary Focus
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mt-1">
              Core Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workCategories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-2xl bg-white border border-neutral-200/80 p-7 flex flex-col justify-between space-y-6 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center mb-5 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-900 block">
                    Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {cat.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ventures List */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Ventures & Companies
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mt-1">
              Organizations I&apos;ve Founded
            </h2>
          </div>

          <div className="space-y-8">
            {ventures.map((venture) => (
              <div
                key={venture.name}
                className="rounded-2xl bg-white border border-neutral-200/80 p-8 space-y-6 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100 pb-4">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {venture.role} • {venture.period}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-1">
                      {venture.name}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-neutral-500">
                    {venture.category}
                  </span>
                </div>

                <p className="text-base text-neutral-600 font-normal leading-relaxed">
                  {venture.longDescription}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  {venture.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                        {metric.label}
                      </p>
                      <p className="text-xl font-bold text-neutral-900 mt-1">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Milestones & Focus */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                      Key Milestones
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                      {venture.milestones.map((milestone) => (
                        <li key={milestone} className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-600">
                      {venture.focus.map((f, idx) => (
                        <span key={f} className="flex items-center gap-2">
                          {idx > 0 && <span className="text-neutral-300">•</span>}
                          <span>{f}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Link */}
                {venture.websiteUrl && (
                  <div className="pt-4 border-t border-neutral-100 flex justify-end">
                    <Link
                      href={venture.websiteUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-900 hover:text-blue-600 transition-colors"
                    >
                      <span>Explore Related Projects & Architecture</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-neutral-900 text-white p-8 md:p-12 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Want to review the code and case studies?
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto font-normal">
            Check out the live portfolio of products, experiments, and technical systems I&apos;ve built.
          </p>
          <div className="pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-900 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-sm"
            >
              <span>View Projects & Case Studies</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
