export interface Thought {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Entrepreneurship & Startups" | "Business & Strategy" | "Technology & AI" | "Lessons from Failure" | "Personal Reflections";
  languageNote?: string;
  content: {
    sectionHeading?: string;
    paragraphs: string[];
    quote?: string;
  }[];
  keyTakeaways: string[];
}

export const thoughts: Thought[] = [
  {
    slug: "why-i-chose-entrepreneurship",
    title: "Why I Chose Entrepreneurship After Computer Science",
    subtitle: "Code is 10% of the game. The remaining 90% is human trust, distribution, and resilience.",
    excerpt:
      "A degree in computer science teaches you how to write code. Building an independent venture teaches you that code without purpose or distribution is merely expensive text.",
    date: "January 14, 2026",
    readTime: "5 min read",
    category: "Entrepreneurship & Startups",
    content: [
      {
        sectionHeading: "The Comfortable Default vs. The Uncharted Trail",
        paragraphs: [
          "When you graduate with a degree in Computer Science and Engineering in India, there is a well-paved, heavily trodden conveyor belt waiting for you. You prepare Data Structures & Algorithms, practice LeetCode patterns, interview with IT consulting giants or venture-backed unicorns in Bengaluru or Hyderabad, and settle into a structured corporate cycle.",
          "It is safe, respectable, and predictable. But during my final years of college, every time I sat down to write code for theoretical assignments, a deeper restlessness kicked in. I didn't want to become a cog tuning someone else's legacy codebase in a cubicle 1,500 kilometers away from home.",
          "I wanted to build things from scratch. I wanted to look at a broken, chaotic, offline process in the real world, sit down with the people suffering from it, and write software that makes their burden lighter.",
        ],
        quote: "Real leverage comes not from writing endless lines of code, but from owning the problems you solve and seeing them through to the finish line.",
      },
      {
        sectionHeading: "The Sobering Shock of Reality",
        paragraphs: [
          "When I founded Curiosity Lab, I quickly realized how sheltered academic programming really is. In university, if your code compiles and passes test cases, you get an 'A'. In business, your code can be an architectural masterpiece—clean TypeScript, normalized schemas, sub-second latency—and yet if nobody knows about it, or if it doesn't solve an urgent headache, its business value is exactly zero.",
          "Entrepreneurship forced me to shed intellectual arrogance. I had to learn how to walk into municipal offices, pitch to skeptical factory owners, negotiate payment terms, manage cash flows, and handle the emotional turbulence of deals falling apart.",
          "It taught me that writing software is actually the easy part. Building trust, establishing distribution, and persisting through weeks of silence is where companies are actually made.",
        ],
      },
      {
        sectionHeading: "The Freedom of the Blank Canvas",
        paragraphs: [
          "Looking back, choosing entrepreneurship right out of computer science was the steepest learning curve I could have asked for. It stripped away theoretical illusions and replaced them with raw, practical competence.",
          "There is no thrill quite like shipping a product that people rely on every single day to do their jobs. That feeling of agency—the knowledge that whatever happens next is directly a function of your curiosity, grit, and execution—is worth every ounce of uncertainty.",
        ],
      },
    ],
    keyTakeaways: [
      "Technical skill is a multiplier, not the whole equation. Distribution and trust matter just as much as architecture.",
      "Building from first principles teaches you more in six months than years of repetitive maintenance.",
      "The true measure of software is not how clever the algorithm is, but how effectively it eliminates human friction.",
    ],
  },
  {
    slug: "building-in-a-small-city",
    title: "The Reality of Building a Tech Startup in a Tier-2/Tier-3 City",
    subtitle: "Raigarh, Chhattisgarh: The challenges of isolation versus the immense advantage of real-world problems.",
    excerpt:
      "Conventional startup wisdom says you must be in Bangalore or San Francisco. Here is what actually happens when you build software companies in the industrial heartland of Central India.",
    date: "December 08, 2025",
    readTime: "6 min read",
    category: "Business & Strategy",
    content: [
      {
        sectionHeading: "The Geography of Innovation",
        paragraphs: [
          "If you consume startup Twitter or tech media, you would believe that nothing meaningful can be created outside a handful of metropolitan zip codes. You are told you need venture capital meetups, third-wave coffee shops, and an echo chamber of other founders building another productivity SaaS for other SaaS founders.",
          "I chose to base my work in Raigarh, Chhattisgarh. Raigarh is known for steel, power, coal, and rich cultural traditions—not venture capital rounds. When people asked why I didn't move away, my answer was simple: the real world lives here.",
        ],
        quote: "Metros build software for software companies. Small cities and industrial belts run the physical world—and they are crying out for modern tools.",
      },
      {
        sectionHeading: "The Genuine Friction Points",
        paragraphs: [
          "Let's not romanticize it: building a tech company in a tier-2 or tier-3 city comes with real friction. First, talent acquisition is difficult. Most top engineering graduates leave for Tier-1 cities. You cannot easily hire a specialized senior distributed systems engineer on a two-week notice; you have to train and mentor promising young minds from scratch.",
          "Second, local clients often lack digital maturity. When you propose a modern SaaS or subscription workflow, they often ask for a one-time CD-ROM installation or wonder why software requires recurring hosting and maintenance fees.",
          "Third, there are no spontaneous investor coffee chats. You are entirely on your own to prove customer traction and cash-flow viability from Day 1.",
        ],
      },
      {
        sectionHeading: "The Unfair Advantages",
        paragraphs: [
          "Yet, the advantages are profound. Your operational burn rate is a fraction of a metro startup, giving you an almost infinite runway to experiment and survive without desperate external fundraising.",
          "More importantly, you have direct, unmediated access to massive traditional industries—sponge iron plants, transport fleet operators, municipal bodies, and agricultural trading markets. These domains have immense economic turnover, yet they operate on paper registers and WhatsApp groups.",
          "When you build a product like Kartavya that solves ghost workers for a municipality, or a reverse auction platform that saves a steel manufacturer crores in procurement, they don't care where your office is located. They care that the system works.",
        ],
      },
    ],
    keyTakeaways: [
      "Low burn rate gives you the supreme superpower of time and endurance.",
      "Traditional industries outside tech hubs represent massive, underserved software opportunities.",
      "Proximity to real-world friction beats proximity to investor cocktail parties every single time.",
    ],
  },
  {
    slug: "what-nobody-tells-you-about-selling-software",
    title: "What Nobody Tells You About Selling Software: Products Are Easy, Trust Is Hard",
    subtitle: "You cannot sell a digital solution to an offline business with a shiny pitch deck.",
    excerpt:
      "Engineers fall in love with features, dark mode, and tech stacks. Real customers only buy when they believe you won't vanish tomorrow. How to bridge the trust deficit.",
    date: "November 21, 2025",
    readTime: "5 min read",
    category: "Lessons from Failure",
    content: [
      {
        sectionHeading: "The Engineer's Naivety",
        paragraphs: [
          "In my early days, I would walk into business meetings armed with my laptop, eager to show off modern UI components, smooth Framer Motion micro-interactions, and lightning-fast database responses.",
          "The decision-maker across the table—often a 50-year-old factory owner or a seasoned municipal superintendent—would look at my screen blankly. Finally, they would ask: 'If my internet drops at 6:00 AM, will my gate stop working? And if your server crashes, who comes to fix it?'",
          "That was a slap of cold water. What I viewed as 'modern software,' they viewed as a potential point of failure in their daily livelihood.",
        ],
        quote: "Clients don't buy your architecture; they buy insurance against chaos and operational failure.",
      },
      {
        sectionHeading: "Building Ground-Level Credibility",
        paragraphs: [
          "I had to completely change my approach. I stopped talking about React, Node, and Postgres. Instead, I started talking about their balance sheets, their overtime disputes, their leakages, and how our system guarantees their operations won't halt.",
          "I began showing up on the ground at 6:30 in the morning to stand alongside municipal sanitation supervisors during roll call. I observed where their thumbs got sweaty on fingerprint scanners, where sunlight made screens unreadable, and why field workers hesitated.",
          "When clients see that the founder is willing to stand in the dust and fix a configuration on-site, the trust barrier evaporates. Software sales in the real economy is relational before it is transactional.",
        ],
      },
    ],
    keyTakeaways: [
      "Never explain technology when you can explain outcomes.",
      "Show up where the software is actually used—not just where the contract is signed.",
      "Reliability and human responsiveness always beat cutting-edge feature bloat.",
    ],
  },
  {
    slug: "lessons-from-government-tech",
    title: "Lessons from Building Technology for Government Organizations",
    subtitle: "Architecting software for high-friction civic administration, biometric accountability, and real public impact.",
    excerpt:
      "GovTech requires a completely different mindset. If your software cannot survive bureaucratic scrutiny, user hesitation, and harsh edge cases, it will not survive a single week.",
    date: "October 18, 2025",
    readTime: "7 min read",
    category: "Technology & AI",
    content: [
      {
        sectionHeading: "The Scale of Public Responsibility",
        paragraphs: [
          "Building software for consumer apps or private SaaS is forgiving: users opt in, explore, and churn quietly. Building software for municipal governance—such as our workforce governance system Kartavya—is an entirely different playing field.",
          "Here, your software directly influences the livelihoods of thousands of sanitation workers, ward supervisors, and public utilities. If a biometric timestamp fails or an offline sync drops an attendance log, an honest laborer might not receive their rightful wage at the end of the month.",
          "The responsibility weighs heavily on your code. You cannot treat bugs casually.",
        ],
        quote: "In civic technology, simplicity is not an aesthetic preference; it is a moral requirement.",
      },
      {
        sectionHeading: "The Principles of Civic Architecture",
        paragraphs: [
          "Over two years of deploying systems in urban local bodies, I developed core tenets for civic software:",
          "1. **Offline is Not an Exception, It is the Baseline**: Assume mobile towers will fail, batteries will deplete, and data packs will expire. Your client must queue transactions deterministically and sync flawlessly without data loss.",
          "2. **Zero-Training Interfaces**: If a system requires a 50-page manual or multi-day training workshops, it has failed. The UI must use massive tap targets, high-contrast typography, and intuitive visual cues that anyone can master in three minutes.",
          "3. **Incorruptible Audit Logs**: Every administrative override, time adjustment, or supervisor approval must have an immutable, timestamped audit trail. Transparency protects both the worker and the administrator.",
        ],
      },
    ],
    keyTakeaways: [
      "Offline-first architecture is mandatory for civic field software.",
      "Empathy for the least tech-literate user dictates the entire UX hierarchy.",
      "Transparency builds respect between citizens, staff, and leadership.",
    ],
  },
  {
    slug: "ideas-vs-execution",
    title: "The Brutal Difference Between Having Ideas and Executing Them",
    subtitle: "Ideas are cheap and seductive. Execution is quiet, lonely, and requires an obsessive tolerance for routine problems.",
    excerpt:
      "Everyone has brilliant ideas in shower thoughts and late-night tea stalls. Turning an idea into an enduring, operational reality is where 99% of people quietly quit.",
    date: "September 12, 2025",
    readTime: "4 min read",
    category: "Personal Reflections",
    content: [
      {
        sectionHeading: "The Mirage of the 'Great Idea'",
        paragraphs: [
          "How many times have you heard someone say: 'I had that startup idea three years ago before they made millions'? We venerate the inception of ideas because ideation is fun, effortless, and flattering to our ego.",
          "In your head, your product has no bugs, your customers love you instantly, the servers never crash, and regulatory obstacles simply do not exist. But the moment you transition from daydreaming to writing the first line of code, opening the legal entity, or cold-calling the first prospect, reality hits with tremendous force.",
        ],
        quote: "Ideas are merely a multiplier of execution. A brilliant idea with zero execution equals zero. An ordinary idea executed with relentless consistency is an unstoppable force.",
      },
      {
        sectionHeading: "The Discipline of the Routine",
        paragraphs: [
          "True execution is deeply unglamorous. It is fixing an SSL certificate expiration at 2:00 AM. It is sitting through two hours of government meetings to clarify one form field. It is listening to user complaints without getting defensive and sitting down to refactor code you thought was already finished.",
          "The difference between builders and spectators is an obsessive tolerance for these unglamorous routines. When you embrace the mundane discipline of building day after day, curiosity turns into genuine momentum.",
        ],
      },
    ],
    keyTakeaways: [
      "Fall in love with the operational grind, not the initial flash of inspiration.",
      "Speed of iteration always beats perfection in planning.",
      "The only validation that matters is what survives in the hands of real users.",
    ],
  },
];
