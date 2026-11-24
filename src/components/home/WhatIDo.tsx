import { Building2, Code, Cpu, Target } from "lucide-react";

const pillars = [
  {
    icon: <Building2 className="w-5 h-5 text-neutral-900" />,
    title: "Entrepreneurship",
    description:
      "Identifying underserved markets, conceptualizing practical products, assembling teams, and navigating the messy reality of customer adoption.",
    tags: ["Market Discovery", "Operations", "Venture Building"],
  },
  {
    icon: <Code className="w-5 h-5 text-neutral-900" />,
    title: "Software Engineering",
    description:
      "Architecting full-stack applications with TypeScript, Next.js, Go, and relational databases. Prioritizing performance, offline resilience, and clean code.",
    tags: ["Full-Stack", "Distributed Systems", "Offline-First"],
  },
  {
    icon: <Cpu className="w-5 h-5 text-neutral-900" />,
    title: "Applied Technology",
    description:
      "Experimenting with IoT sensors, biometric protocols, and modern developer tooling. Applying technology to eliminate manual friction in the real world.",
    tags: ["Biometrics", "IoT Gateways", "Modern Web"],
  },
  {
    icon: <Target className="w-5 h-5 text-neutral-900" />,
    title: "Real-World Problem Solving",
    description:
      "Bridging the gap between software and non-technical stakeholders in municipal corporations, public works, and industrial manufacturing belts.",
    tags: ["GovTech", "Industrial Procurement", "Accountability"],
  },
];

export default function WhatIDo() {
  return (
    <section className="py-20 md:py-24 px-6 border-b border-neutral-200/70 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              02 • Focus & Disciplines
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-1">
              What I Do
            </h2>
          </div>
          <p className="text-sm font-normal text-neutral-600 max-w-md">
            Combining engineering rigor with entrepreneurial empathy to build durable systems in domains where technology was historically ignored.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl bg-white border border-neutral-200/80 p-6 flex flex-col justify-between space-y-6 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center mb-5 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
