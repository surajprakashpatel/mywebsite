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
    icon: <Building2 className="w-6 h-6 text-[#2B536E]" />,
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
    icon: <Code2 className="w-6 h-6 text-[#2B536E]" />,
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
    icon: <Target className="w-6 h-6 text-[#2B536E]" />,
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
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Header */}
        <div className="space-y-4 border-b border-[#E4E1D8] pb-12">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Professional Identity
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#202328] tracking-tight">
            Building companies, architectures & <br />
            <span className="italic font-normal">pragmatic solutions.</span>
          </h1>
          <p className="font-sans text-lg text-[#5A626A] font-light max-w-2xl leading-relaxed">
            I divide my professional work into three core pillars: entrepreneurial venture creation, software engineering rigor, and solving high-friction operational challenges in traditional sectors.
          </p>
        </div>

        {/* 3 Pillars Section */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              Pillars of Practice
            </span>
            <h2 className="font-serif text-3xl font-light text-[#202328] mt-1">
              How I Operate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workCategories.map((cat) => (
              <div
                key={cat.title}
                className="editorial-card p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-white"
              >
                <div>
                  <div className="p-3 w-fit bg-[#F6F5F1] border border-[#E4E1D8] mb-4">
                    {cat.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-light text-[#202328] mb-2">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#5A626A] font-light leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ECEAE3] space-y-2">
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#717A84]">
                    Core Capabilities
                  </span>
                  <ul className="space-y-1.5 text-xs font-sans text-[#202328]">
                    {cat.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-1.5">
                        <span className="text-[#B86B2F] font-bold">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Company Profiles */}
        <div className="space-y-12 pt-8 border-t border-[#E4E1D8]">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              Entities & Ventures
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#202328] mt-1">
              Companies & Flagship Ventures
            </h2>
            <p className="font-sans text-sm text-[#5A626A] max-w-xl font-light mt-2">
              Each venture serves a specific purpose in translating digital technology into tangible real-world value.
            </p>
          </div>

          <div className="space-y-10">
            {ventures.map((venture) => (
              <div
                key={venture.id}
                className="editorial-card p-8 sm:p-10 space-y-8 bg-white"
              >
                {/* Venture Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#ECEAE3] pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-sans font-medium uppercase tracking-wider text-[#B86B2F]">
                        {venture.category}
                      </span>
                      <span className="text-[#E4E1D8]">•</span>
                      <span className="text-xs font-mono text-[#717A84]">{venture.period}</span>
                    </div>
                    <h3 className="font-serif text-3xl font-normal text-[#202328]">
                      {venture.name}
                    </h3>
                    <p className="text-sm font-sans text-[#2B536E] font-medium mt-0.5">
                      {venture.tagline}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs font-sans text-[#717A84] block">Role</span>
                    <span className="font-serif text-base text-[#202328] font-normal">
                      {venture.role}
                    </span>
                  </div>
                </div>

                {/* Long Description */}
                <div className="space-y-4 text-sm sm:text-base font-sans text-[#5A626A] font-light leading-relaxed">
                  <p>{venture.longDescription}</p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#FAF9F5] border border-[#E4E1D8]">
                  {venture.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-[11px] font-sans text-[#717A84] uppercase tracking-wider">
                        {metric.label}
                      </p>
                      <p className="font-serif text-lg sm:text-xl font-normal text-[#202328] mt-0.5">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Milestones & Focus */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#202328] mb-3">
                      Key Milestones
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm font-sans text-[#5A626A] font-light">
                      {venture.milestones.map((milestone) => (
                        <li key={milestone} className="flex items-start gap-2">
                          <span className="text-[#2B536E] font-bold">✓</span>
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#202328] mb-3">
                      Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {venture.focus.map((f) => (
                        <span
                          key={f}
                          className="text-xs font-mono px-3 py-1 bg-[#F6F5F1] text-[#202328] border border-[#E4E1D8]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Link */}
                {venture.websiteUrl && (
                  <div className="pt-4 border-t border-[#ECEAE3] flex justify-end">
                    <Link
                      href={venture.websiteUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-[#202328] hover:text-[#2B536E] transition-colors"
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
        <div className="editorial-card p-8 text-center space-y-4 bg-[#FAF9F5]">
          <h3 className="font-serif text-2xl font-light text-[#202328]">
            Want to review the code and case studies?
          </h3>
          <p className="text-sm font-sans text-[#5A626A] max-w-md mx-auto font-light">
            Check out the live portfolio of products, experiments, and technical systems I&apos;ve built.
          </p>
          <div className="pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#202328] text-white font-sans text-xs font-medium hover:bg-[#2B536E] transition-colors"
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
