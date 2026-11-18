import { Building2, Code, Cpu, Target } from "lucide-react";

const pillars = [
  {
    icon: <Building2 className="w-6 h-6 text-[#2B536E]" />,
    title: "Entrepreneurship",
    description:
      "Identifying underserved markets, conceptualizing practical products, assembling teams, and navigating the messy reality of customer adoption.",
    tags: ["Market Opportunity", "Operations", "Venture Building"],
  },
  {
    icon: <Code className="w-6 h-6 text-[#2B536E]" />,
    title: "Software Development",
    description:
      "Architecting full-stack applications with TypeScript, Next.js, Go, and relational databases. Prioritizing performance, offline resilience, and clean systems.",
    tags: ["Full-Stack", "Distributed Systems", "Offline-First"],
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#2B536E]" />,
    title: "Applied Technology",
    description:
      "Experimenting with IoT sensors, biometric protocols, and modern developer tooling. Applying technology to eliminate manual friction.",
    tags: ["Biometrics", "IoT Gate Telemetry", "Modern Web"],
  },
  {
    icon: <Target className="w-6 h-6 text-[#2B536E]" />,
    title: "Real-World Problem Solving",
    description:
      "Bridging the gap between software and non-technical stakeholders in municipal corporations, public works, and industrial manufacturing belts.",
    tags: ["GovTech", "Industrial Procurement", "Accountability"],
  },
];

export default function WhatIDo() {
  return (
    <section className="py-20 px-6 border-b border-[#E4E1D8] bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              02 // Focus & Disciplines
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#202328] tracking-tight mt-1">
              What I Do
            </h2>
          </div>
          <p className="text-sm font-sans text-[#5A626A] max-w-md font-light">
            Combining engineering rigor with entrepreneurial empathy to build durable systems in domains where software was historically ignored.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="editorial-card p-6 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="p-3 w-fit bg-[#F6F5F1] border border-[#E4E1D8] mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl font-normal text-[#202328] mb-2">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#5A626A] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#ECEAE3] flex flex-wrap gap-1.5">
                {pillar.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#F6F5F1] text-[#717A84] border border-[#E4E1D8]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
