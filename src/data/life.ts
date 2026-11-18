export interface LifeSection {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image?: string;
  imageCaption?: string;
  lead: string;
  paragraphs: string[];
  bulletPoints?: { label: string; detail: string }[];
}

export const lifeSections: LifeSection[] = [
  {
    id: "fitness",
    title: "Fitness & Physical Discipline",
    subtitle: "The Iron Mirror: Where Consistency Precedes Progress",
    tag: "Physical Training",
    image: "/images/gym_discipline.png",
    imageCaption: "Daily physical discipline in the gym: The barbell doesn't negotiate.",
    lead: "You cannot negotiate with gravity, and you cannot fake a heavy squat.",
    paragraphs: [
      "Physical training has been the anchor of my daily routine for years. When you spend 10 to 12 hours a day solving abstract software problems, debugging distributed architectures, and managing business operations, your mind can easily get trapped in endless loops of anxiety and cognitive fatigue.",
      "The gym is where abstraction ceases. The barbell does not care about your startup's valuation, your code elegance, or how busy your calendar was. It demands complete presence, rigorous posture, and progressive overload.",
      "Building physical strength translates directly into mental resilience. The grit required to push through the final rep when your muscles are screaming is the exact same grit required to stay calm when a server goes down or a critical enterprise contract stalls.",
    ],
    bulletPoints: [
      { label: "Core Philosophy", detail: "Progressive overload, clean nutrition, and unbroken consistency over years." },
      { label: "Primary Compound Lifts", detail: "Squat, Deadlift, Overhead Press, and Barbell Bench." },
      { label: "Mental Benefit", detail: "Provides a quiet, daily sanctuary of deliberate effort and stress dissipation." },
    ],
  },
  {
    id: "travel",
    title: "Travel & The Textures of Chhattisgarh",
    subtitle: "Observing Nature, Ancient Riverbeds & Raw Landscapes",
    tag: "Exploration & Roots",
    image: "/images/chhattisgarh_nature.png",
    imageCaption: "The quiet riverbanks and monsoon green of Chhattisgarh: Raw, grounded, timeless.",
    lead: "True travel isn't about collecting airport stamps; it's about seeing familiar surroundings with completely new eyes.",
    paragraphs: [
      "While many dream of exotic global getaways, I have found deep peace and awe right here in the ancient geography of Central India. Chhattisgarh is a land of dense Sal forests, red soil, quiet rocky riverbeds, and untamed monsoon beauty.",
      "Stepping away from screens to hike along quiet riverbanks, explore ancient temple ruins, and watch the mist settle over rural hills provides a profound sense of perspective. It reminds me how small our temporary worries are in the grand arc of geological time.",
      "Every excursion into the rural hinterland also grounds my work. Seeing people live close to the earth reinforces why technology should serve human dignity rather than consumer distraction.",
    ],
    bulletPoints: [
      { label: "Preferred Cadence", detail: "Solitary or small-group weekend road trips to rural forest belts." },
      { label: "Key Regions", detail: "Raigarh rural outskirts, Mahanadi river basins, and Bastar cultural corridors." },
      { label: "Takeaway", detail: "Nature is the ultimate systems architect—efficient, patient, and unyielding." },
    ],
  },
  {
    id: "motorcycling",
    title: "Motorcycling & Highway Solitude",
    subtitle: "Velocity, Focus & The Immediate Feedback of the Road",
    tag: "The Open Road",
    image: "/images/motorcycle_exploration.png",
    imageCaption: "Highway exploration on two wheels: Replacing mental noise with open road clarity.",
    lead: "On a motorcycle, there is no room for divided attention. You are entirely in the present.",
    paragraphs: [
      "There is something liberating about straddling a motorcycle, clicking into first gear, and heading out on an empty highway before sunrise. In an air-conditioned car, you are merely a spectator watching the landscape pass behind glass. On two wheels, you are immersed in the environment: the temperature shifts as you cross a river bridge, the scent of wet eucalyptus after rain, and the wind pushing against your jacket.",
      "Motorcycling demands total immersion. If your mind wanders to an unresolved email or a database migration bug, you lose your line on a curve. This forced focus resets the mental slate completely.",
    ],
    bulletPoints: [
      { label: "The Ritual", detail: "Early morning weekend rides along state highways and winding forest passes." },
      { label: "State of Mind", detail: "Solitude, hyper-awareness, and uninterrupted mental clarity." },
    ],
  },
  {
    id: "books",
    title: "Books, Philosophy & Perpetual Learning",
    subtitle: "The Mental Models That Shape How I Think",
    tag: "Intellectual Curiosity",
    lead: "Reading is a conversation across centuries with minds who wrestled with the same human struggles.",
    paragraphs: [
      "I read broadly across business strategy, stoic philosophy, evolutionary biology, systems dynamics, and history. I am less interested in fleeting social media trends and more obsessed with timeless mental models that help navigate complex decisions under uncertainty.",
      "Writers like Nassim Nicholas Taleb, Ray Dalio, Marcus Aurelius, and Naval Ravikant have profoundly shaped how I evaluate risk, structure companies, and maintain personal equilibrium.",
    ],
    bulletPoints: [
      { label: "Antifragility", detail: "Designing systems and habits that gain from disorder rather than break under stress." },
      { label: "Radical Transparency", detail: "Truth over comfort; seeking objective reality above all else." },
      { label: "Long-term Compounding", detail: "All great returns—in relationships, wealth, and knowledge—come from compound interest over decades." },
    ],
  },
];
