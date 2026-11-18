export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "SaaS Products" | "Civic Technology" | "Business Software" | "Experiments" | "Web Development";
  tags: string[];
  featured: boolean;
  role: string;
  year: string;
  stats?: {
    label: string;
    value: string;
  };
  excerpt: string;
  problem: string;
  whyBuilt: string;
  architecture: string[];
  challenges: string[];
  outcomes: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "kartavya",
    title: "Kartavya",
    subtitle: "Civic Workforce Governance & Municipal HRMS",
    category: "SaaS Products",
    tags: ["Next.js", "PostgreSQL", "Biometric/GPS", "GovTech", "TISS Incube"],
    featured: true,
    role: "Founder & Lead Architect",
    year: "2024 — Present",
    stats: {
      label: "Active Civic Workers Tracked",
      value: "1,200+",
    },
    excerpt:
      "A civic workforce governance and biometric attendance platform engineered for municipal corporations and public works to eliminate ghost workers and automate transparent payroll.",
    problem:
      "Municipal sanitation, ward management, and field operations in Indian civic bodies historically relied on manual registers, WhatsApp roll calls, and paper logs. This structural gap invited ghost-worker fraud, delayed compensation for honest field laborers, and left municipal commissioners without real-time operational visibility.",
    whyBuilt:
      "Growing up in Chhattisgarh and witnessing the daily struggles of municipal workers and civic administrators, I realized that software could introduce ironclad accountability without being punitive. Kartavya was born to bridge the trust deficit between field staff and government administration.",
    architecture: [
      "Offline-first mobile client with biometric and geotagged timestamp capture",
      "Event-driven cloud backend handling high-volume morning attendance spikes",
      "Role-based administrative dashboards with instant ghost-worker anomaly detection",
      "Automated payroll calculation engine aligned with statutory municipal regulations",
    ],
    challenges: [
      "Ensuring seamless operation in low-connectivity zones across sprawling municipal wards",
      "Designing an ultra-intuitive interface for field workers with varying literacy levels",
      "Navigating bureaucratic procurement hurdles and gaining buy-in from civil administration",
    ],
    outcomes: [
      "Successfully deployed across municipal corporations tracking 1,200+ active workers daily",
      "Selected for incubation by TISS Incube Foundation (Cohort 3) and IIT Bhilai GENESIS cohort",
      "Awarded honors at the Chhattisgarh State Ideathon for civic transparency impact",
      "Reduced monthly payroll discrepancy resolution time from 14 days to under 4 hours",
    ],
    liveUrl: "https://kartavya.gov.in",
  },
  {
    slug: "saral-kar",
    title: "Saral Kar",
    subtitle: "Municipal Property Tax & Revenue Management",
    category: "Civic Technology",
    tags: ["React", "TypeScript", "Node.js", "GIS Mapping", "Civic Gov"],
    featured: true,
    role: "Product Architect",
    year: "2024",
    stats: {
      label: "Tax Collection Efficiency",
      value: "+35%",
    },
    excerpt:
      "A simplified digital property tax assessment, GIS zone registry, and revenue collection portal designed for urban local bodies to prevent leakage and simplify citizen payments.",
    problem:
      "Urban Local Bodies (ULBs) in tier-2 and tier-3 cities suffer from unmapped property inventories, complex multi-tier tax formulas, and cumbersome physical collection counters resulting in chronic municipal revenue shortfalls.",
    whyBuilt:
      "To provide municipal councils with an affordable, modern, self-service tax assessment system that citizens can easily understand and pay via UPI, cards, or authorized ward counters.",
    architecture: [
      "GIS-integrated property registry with ward-wise zoning and commercial categorization",
      "Transparent automated formula engine factoring built-up area, road frontage, and usage",
      "Citizen portal supporting instant UPI payments and downloadable official municipal receipts",
      "Reconciliation ledger connecting bank statements with municipal treasury accounts",
    ],
    challenges: [
      "Normalizing decades-old paper property registers into normalized relational records",
      "Handling edge-case property disputes and retroactive penalty waiver policies",
    ],
    outcomes: [
      "Over 35% improvement in on-time property tax compliance during trial deployment",
      "Zero calculation discrepancies reported across 18,000+ assessed property IDs",
      "Citizen satisfaction improved drastically with line-free digital receipt generation",
    ],
  },
  {
    slug: "reverse-auction",
    title: "Industrial Reverse Auction Platform",
    subtitle: "High-Concurrency Raw Material & Freight Procurement",
    category: "Business Software",
    tags: ["Go", "WebSockets", "Redis", "Next.js", "Heavy Industry"],
    featured: true,
    role: "Systems Architect",
    year: "2024 — 2025",
    stats: {
      label: "Procurement Bids Handled",
      value: "₹40M+",
    },
    excerpt:
      "A sub-millisecond reverse auction engine engineered for heavy industry plants (steel, sponge iron, power) to conduct transparent, high-stakes supplier bidding rounds.",
    problem:
      "Industrial manufacturing plants procure raw materials (iron ore, coal, dolomite) and freight transport through opaque offline phone calls and sealed paper bids, resulting in inflated costs and cartelization.",
    whyBuilt:
      "Industrial plants in the mineral belts of Central India needed an incorruptible, dynamic real-time auction room where verified vendors compete fairly in rapid-fire dynamic price reductions.",
    architecture: [
      "Sub-50ms WebSocket broadcast layer built with Go and Redis Pub/Sub",
      "Dynamic anti-sniping clock extensions when bids land in final seconds",
      "Cryptographically verified audit trail of every bid price change and supplier action",
      "Real-time analytics comparing market baseline pricing against live auction savings",
    ],
    challenges: [
      "Handling concurrent bid submissions in the final 5 seconds without race conditions",
      "Eliminating latency variances for suppliers joining from remote industrial plant zones",
    ],
    outcomes: [
      "Successfully orchestrated multi-crore bidding rounds for manufacturing clients",
      "Delivered an average procurement cost reduction of 4.8% per auction cycle",
      "100% audit compliance with zero disputed bid disputes",
    ],
  },
  {
    slug: "fleet-stack",
    title: "Fleet Stack & Logistics IoT",
    subtitle: "Real-time Heavy Vehicle Tracking & Weighbridge Gate Automation",
    category: "Experiments",
    tags: ["IoT", "MQTT", "Python", "React", "Hardware"],
    featured: false,
    role: "Developer & Architect",
    year: "2023 — 2024",
    stats: {
      label: "Telemetry Latency",
      value: "< 2.0s",
    },
    excerpt:
      "Integrated GPS, RFID gate-automation hardware, and weighbridge telemetry with a cloud monitoring dashboard for industrial dispatch fleets.",
    problem:
      "Industrial plants experience massive vehicle congestion at in-plant weighbridges, where vehicle paperwork, gross weight tare verification, and tare fraud cause huge logistical bottlenecks.",
    whyBuilt:
      "Built as an applied IoT experiment to integrate low-cost hardware sensors directly into an administrative web dashboard for automated entry and tare capture.",
    architecture: [
      "Microcontroller edge listeners capturing serial RS-232 weighbridge outputs",
      "MQTT messaging broker pushing live axle readings to cloud database",
      "Automated RFID gate barriers triggering vehicle slip generation upon tare stabilization",
    ],
    challenges: [
      "Electrical noise and dust interference in heavy industrial weighbridge environments",
      "Handling intermittent cell network blackouts with on-device buffer caching",
    ],
    outcomes: [
      "Halved truck turnaround time at plant entry gates from 12 minutes to under 4 minutes",
      "Eliminated manual weigh slip tampering completely",
    ],
  },
  {
    slug: "curiosity-lab-platform",
    title: "Curiosity Lab Studio",
    subtitle: "Digital Product R&D & Applied Software Frameworks",
    category: "Web Development",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Architecture"],
    featured: true,
    role: "Founder",
    year: "2023 — Present",
    stats: {
      label: "Products & Prototypes",
      value: "10+ Shipped",
    },
    excerpt:
      "The experimental venture studio where ideas transition into software prototypes, serving businesses, institutions, and civic partners across Central India.",
    problem:
      "Many businesses and founders spend months theorizing without shipping tangible digital products. Curiosity Lab was structured to reduce time-to-production from months to weeks.",
    whyBuilt:
      "To serve as my personal creative laboratory—a studio where I can rapidly architect, validate, and launch real-world digital applications without corporate bureaucracy.",
    architecture: [
      "Modular design system with reusable authentication, billing, and notification blocks",
      "Modern serverless deployment pipelines optimized for speed and resilience",
      "Extensive documentation and design tokens enabling rapid cross-domain pivoting",
    ],
    challenges: [
      "Balancing client consulting deadlines with in-house product research",
      "Recruiting and training talented local developers in a non-metro ecosystem",
    ],
    outcomes: [
      "Incubated Kartavya from a weekend prototype into a venture-backed GovTech startup",
      "Delivered production applications for education, healthcare, and local trade clients",
    ],
  },
];
