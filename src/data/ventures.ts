export interface Venture {
  id: string;
  name: string;
  tagline: string;
  category: "Venture Studio" | "Enterprise Company" | "GovTech Product";
  period: string;
  role: string;
  description: string;
  longDescription: string;
  focus: string[];
  metrics: { label: string; value: string }[];
  milestones: string[];
  websiteUrl?: string;
}

export const ventures: Venture[] = [
  {
    id: "curiosity-lab",
    name: "Curiosity Lab",
    tagline: "Software Venture & Digital Product Studio",
    category: "Venture Studio",
    period: "2023 — Present",
    role: "Founder & Lead Builder",
    description:
      "An independent software venture focused on building digital products, experimenting with practical technology, and developing solutions for real-world operational challenges.",
    longDescription:
      "Curiosity Lab is the experimental engine behind my work. Started with the belief that practical curiosity beats passive observation, it operates as both an incubator for proprietary software products (like Kartavya) and an engineering studio that partners with organizations to architect bespoke digital solutions.",
    focus: [
      "Digital Product Incubation",
      "SaaS Architecture & Full-Stack Development",
      "Operational Automation & APIs",
      "Applied AI & Developer Tooling",
    ],
    metrics: [
      { label: "Shipped Prototypes", value: "10+" },
      { label: "Domain Reach", value: "GovTech, Industry, Trade" },
      { label: "Core Philosophy", value: "Curiosity in Action" },
    ],
    milestones: [
      "Founded in Chhattisgarh as an independent creative technology venture",
      "Conceived, prototyped, and launched the initial version of Kartavya",
      "Architected specialized platforms for industrial procurement and local governance",
      "Built a collaborative network of local developers, designers, and domain specialists",
    ],
    websiteUrl: "/projects",
  },
  {
    id: "cosmobyte",
    name: "Cosmobyte Technologies",
    tagline: "Independent Technology & Industrial Systems Company",
    category: "Enterprise Company",
    period: "2024 — Present",
    role: "Founder & Director",
    description:
      "An independent technology company delivering robust enterprise software, industrial systems architecture, and specialized technology consulting for manufacturing and municipal clients.",
    longDescription:
      "Cosmobyte Technologies was established to address the acute technology deficits found in traditional industrial manufacturing and public utility domains. By applying modern software design, IoT telemetry, and real-time data architectures to heavy industries—such as sponge iron, power, and cement plants—Cosmobyte creates digital rails that replace legacy paperwork with reliable automation.",
    focus: [
      "Heavy Industry Software",
      "Real-time Reverse Auction Engines",
      "Municipal Enterprise Solutions",
      "IoT Gate & Weighbridge Automation",
    ],
    metrics: [
      { label: "Auction Volume", value: "₹40M+" },
      { label: "System Availability", value: "99.9%" },
      { label: "Sector Focus", value: "Manufacturing & Infrastructure" },
    ],
    milestones: [
      "Incorporated to provide formal enterprise rails for mission-critical client deployments",
      "Engineered a high-concurrency real-time reverse auction bidding platform for industrial plants",
      "Delivered weighbridge IoT telemetry integrations and dispatch management solutions",
      "Established long-term enterprise partnerships across regional industrial manufacturing belts",
    ],
    websiteUrl: "/projects",
  },
  {
    id: "kartavya",
    name: "Kartavya",
    tagline: "Civic Workforce Governance & Smart HRMS",
    category: "GovTech Product",
    period: "2024 — Present",
    role: "Founder & Product Lead",
    description:
      "A workforce management and HRMS product purpose-built for civic bodies, municipalities, and field staff to ensure transparent attendance and payroll honesty.",
    longDescription:
      "Kartavya is a dedicated GovTech product that directly addresses one of civic administration's most persistent headaches: monitoring distributed ground workers without friction. By utilizing geotagged verification, facial biometric matching, and automated municipal payroll rules, Kartavya empowers honest ground workers while giving municipal commissioners unprecedented transparency.",
    focus: [
      "Municipal Sanitation & Field Staff",
      "Biometric & Geotagged Verification",
      "Automated Payroll Compliance",
      "Civic Governance Transparency",
    ],
    metrics: [
      { label: "Active Field Workers", value: "1,200+" },
      { label: "Incubation", value: "TISS Incube & IIT Bhilai" },
      { label: "Payroll Turnaround", value: "< 4 Hours" },
    ],
    milestones: [
      "Pitched and selected for TISS Incube Foundation Incubation (Cohort 3)",
      "Received State Recognition at the Chhattisgarh State Ideathon",
      "Selected for the IIT Bhilai GENESIS incubation cohort for technical mentoring",
      "Live production deployment across urban local bodies tracking municipal workforces",
    ],
    websiteUrl: "/projects/kartavya",
  },
];
