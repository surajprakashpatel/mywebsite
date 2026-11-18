export interface JourneyMilestone {
  period: string;
  year: string;
  title: string;
  phase: string;
  story: string;
  learning: string;
  category: "Foundations" | "Education" | "Exploration" | "Venture" | "Impact";
  highlight?: boolean;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    period: "Early Years",
    year: "Before 2018",
    title: "Growing up in Raigarh, Chhattisgarh",
    phase: "Roots of Curiosity",
    story:
      "Raigarh is an industrial and cultural heartland of Chhattisgarh—flanked by heavy steel plants, sponge iron kilns, and dense forests. Growing up here gave me an innate exposure to traditional industries and the realities of small-city life. From an early age, I was mesmerized by machines, electronics, and figuring out how things work under the hood. Whether taking apart gadgets or reading whatever I could get my hands on, curiosity was my primary compass.",
    learning:
      "Curiosity is not just a personality trait; it is a way of seeing the world. The best problems are often found not in tech capitals, but in traditional towns where technology has barely scratched the surface.",
    category: "Foundations",
  },
  {
    period: "School Leadership",
    year: "2020",
    title: "Headboy, Academic Topper & First Principles",
    phase: "Discipline & Responsibility",
    story:
      "Serving as School Headboy and finishing as the academic topper instilled a profound respect for discipline, communication, and leading from the front. Managing assemblies, student councils, and academic deadlines forced me to learn how to communicate with people of different mindsets and take responsibility for collective outcomes.",
    learning:
      "Leadership isn't about authority or a title; it is about accountability, consistency, and having the courage to show up every single day even when no one is watching.",
    category: "Foundations",
  },
  {
    period: "Higher Education",
    year: "2021 — 2022",
    title: "Discovering Computer Science & Systems Thinking",
    phase: "B.Tech in Computer Science and Engineering",
    story:
      "Stepping into a formal Computer Science engineering curriculum was like being handed the keys to an infinite sandbox. Writing code wasn't just homework—it was magic. I quickly realized that building software allows an individual with a laptop and internet connection to build leverage previously reserved for large corporations.",
    learning:
      "Understanding algorithms and systems architecture gives you the superpower to deconstruct immense real-world complexity into modular, deterministic, automated software routines.",
    category: "Education",
  },
  {
    period: "First Experiments",
    year: "2022 — 2023",
    title: "Building Early Tools, Prototypes & Freelance Solutions",
    phase: "Testing the Waters",
    story:
      "I started taking on freelance software development, building small web applications, and experimenting with APIs and databases. My first client meetings taught me a quick and sobering lesson: clients do not care about your code stack; they care whether their operational headache goes away.",
    learning:
      "Software is meaningless without empathy. Building what people actually need requires listening ten times more than speaking.",
    category: "Exploration",
  },
  {
    period: "The Leap",
    year: "2023",
    title: "Founding Curiosity Lab",
    phase: "The Venture Studio",
    story:
      "Rather than following the standard campus placement playbook of moving to an IT metropolis to work on legacy codebases, I chose the harder, exhilarating path of building my own venture. I established Curiosity Lab in Chhattisgarh to serve as a digital product lab. We began shipping web applications, internal tools, and rapid prototypes for businesses and institutions.",
    learning:
      "Starting an independent venture forces you to learn sales, architecture, client relations, and financial prudence simultaneously. The risk is high, but the learning curve is unbeatable.",
    category: "Venture",
    highlight: true,
  },
  {
    period: "Product Building",
    year: "2024",
    title: "Conceiving & Deploying Kartavya",
    phase: "GovTech in the Real World",
    story:
      "I spent days observing municipal sanitation workers and administrative officers in urban local bodies. The systemic inefficiency and payroll disputes were palpable. I architected Kartavya—an offline-capable, biometric, and GPS-verified workforce governance app. Seeing ground workers get verified in seconds and administrators review transparent audits in real time was a transformative moment.",
    learning:
      "The hardest part of GovTech isn't building the backend; it's designing software simple enough for someone who has never touched a smartphone app before, and robust enough to resist institutional friction.",
    category: "Impact",
    highlight: true,
  },
  {
    period: "State Recognition & Incubation",
    year: "2025",
    title: "TISS Incube Foundation (Cohort 3) & State Ideathon",
    phase: "Institutional Validation",
    story:
      "Kartavya's civic impact earned selection for incubation under the Tata Institute of Social Sciences (TISS) Incube Foundation (Cohort 3). Soon after, our work received formal honors at the Chhattisgarh State Ideathon for introducing digital transparency in public sector workforce management. These milestones validated that high-impact innovation can emerge right out of Chhattisgarh.",
    learning:
      "Institutional validation provides credibility and strategic mentorship, but real validation comes when everyday users rely on your system to run their daily livelihood.",
    category: "Impact",
  },
  {
    period: "Scaling & Enterprise",
    year: "2025 — 2026",
    title: "IIT Bhilai GENESIS & Cosmobyte Technologies",
    phase: "Industrial Solutions & Growth",
    story:
      "Pitched Kartavya at the IIT Bhilai GENESIS incubation cohort, securing advanced technical mentorship. In parallel, founded Cosmobyte Technologies to tackle enterprise industrial automation, deploying real-time reverse auction procurement engines and IoT telemetry for manufacturing units.",
    learning:
      "Building a sustainable enterprise requires transitioning from a solo builder mindset to a systems architect who builds repeatable organizations, documented processes, and trusted partnerships.",
    category: "Venture",
    highlight: true,
  },
  {
    period: "Today & Next",
    year: "2026 — Beyond",
    title: "Defining the Next Chapter",
    phase: "Building for the Decades",
    story:
      "Today, I continue to build software companies, explore emerging technology paradigms (such as autonomous AI workflows and industrial IoT), and document the journey transparently. My focus remains grounded: turning deep curiosity into durable, real-world value.",
    learning:
      "Success isn't reaching a final destination; it's having the freedom to wake up every morning and work on challenging, meaningful problems alongside curious people.",
    category: "Impact",
    highlight: true,
  },
];
