export interface NowData {
  lastUpdated: string;
  location: string;
  status: string;
  statement: string;
  building: {
    title: string;
    description: string;
    link?: string;
  }[];
  learning: {
    skill: string;
    context: string;
  }[];
  exploring: {
    topic: string;
    notes: string;
  }[];
  reading: {
    title: string;
    author: string;
    status: "Currently Reading" | "Recently Finished";
    takeaway: string;
  }[];
  personalGoals: {
    goal: string;
    category: "Physical" | "Intellectual" | "Professional";
    progress: string;
  }[];
}

export const nowData: NowData = {
  lastUpdated: "November 2026",
  location: "Raigarh & Bhilai, Chhattisgarh, India",
  status: "Active Building & Scaling Phase",
  statement:
    "Currently focused on scaling our civic governance and workforce product Kartavya, executing specialized software systems for industrial manufacturing through Cosmobyte Technologies, and constantly testing new software paradigms at Curiosity Lab.",
  building: [
    {
      title: "Kartavya Civic Scale",
      description:
        "Expanding our biometric attendance and municipal workforce tracking system to new urban local bodies and municipal departments, improving edge sync and offline biometric reliability.",
      link: "/projects/kartavya",
    },
    {
      title: "Industrial Reverse Auction v2",
      description:
        "Upgrading our high-concurrency real-time bidding engine for manufacturing plants, introducing dynamic multi-currency and multi-lot auction rules with sub-second WebSocket synchronization.",
      link: "/projects/reverse-auction",
    },
    {
      title: "Curiosity Lab Studio & Tooling",
      description:
        "Building reusable open-source component blocks and internal workflow automations to accelerate prototyping cycles for upcoming SaaS products.",
      link: "/work",
    },
  ],
  learning: [
    {
      skill: "High-Concurrency Go & Distributed Systems",
      context:
        "Deepening understanding of Raft consensus, concurrent memory safety, and low-latency network protocols for industrial telemetry streams.",
    },
    {
      skill: "Enterprise Sales & Civic Procurement Negotiations",
      context:
        "Refining long-cycle sales frameworks for working with public sector leadership and industrial manufacturing executives.",
    },
    {
      skill: "Applied AI Agents for Operational Workflows",
      context:
        "Investigating deterministic tool-calling agents to automate routine administrative reconciliation and anomaly detection in municipal data.",
    },
  ],
  exploring: [
    {
      topic: "Decentralized Energy & Solar Telemetry",
      notes:
        "Exploring how small-scale industrial power plants in Central India monitor rooftop solar arrays and diesel generator fuel efficiency in real time.",
    },
    {
      topic: "Regional Tech Ecosystems in Tier-2 India",
      notes:
        "Figuring out sustainable models to nurture high-caliber developer and design talent locally without requiring relocation to metros.",
    },
  ],
  reading: [
    {
      title: "Principles: Life and Work",
      author: "Ray Dalio",
      status: "Currently Reading",
      takeaway:
        "Radical open-mindedness and operating an organization as an idea meritocracy through algorithmic decision rules.",
    },
    {
      title: "Antifragile: Things That Gain from Disorder",
      author: "Nassim Nicholas Taleb",
      status: "Recently Finished",
      takeaway:
        "How to architect systems—both in software and in life—that become stronger when subjected to volatility, stressors, and random shocks.",
    },
    {
      title: "Zero to One",
      author: "Peter Thiel & Blake Masters",
      status: "Recently Finished",
      takeaway:
        "The value of building unique, proprietary monopolies in uncrowded, non-consensus verticals rather than competing in zero-sum commodity markets.",
    },
  ],
  personalGoals: [
    {
      goal: "Heavy Compound Strength (140kg Clean Squat)",
      category: "Physical",
      progress: "Training consistently 4-5 days/week with progressive overload.",
    },
    {
      goal: "Publishing Regular Public Reflections & Case Studies",
      category: "Intellectual",
      progress: "Writing monthly long-form articles in this public digital notebook.",
    },
    {
      goal: "Institutional Scale for Kartavya",
      category: "Professional",
      progress: "Leveraging our IIT Bhilai and TISS Incube incubation rails to onboard major municipal corporations.",
    },
  ],
};
