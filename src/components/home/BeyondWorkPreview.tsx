import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const previewItems = [
  {
    title: "Fitness & Physical Discipline",
    tag: "The Iron Mirror",
    image: "/images/gym_discipline.png",
    description: "Daily compound training in the gym: Mental stamina is built under the barbell.",
  },
  {
    title: "The Textures of Chhattisgarh",
    tag: "Nature & Exploration",
    image: "/images/chhattisgarh_nature.png",
    description: "Quiet riverbeds and monsoon hills: Exploring the raw landscapes of Central India.",
  },
  {
    title: "Motorcycling & Highway Solitude",
    tag: "Two Wheels",
    image: "/images/motorcycle_exploration.png",
    description: "Solitary highway rides before sunrise: Pure presence and mental reset.",
  },
];

export default function BeyondWorkPreview() {
  return (
    <section className="py-20 px-6 border-b border-[#E4E1D8]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              05 // Life & Perspective
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#202328] tracking-tight mt-1">
              Beyond Work
            </h2>
          </div>
          <Link
            href="/life"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-[#202328] hover:text-[#2B536E] transition-colors"
          >
            <span>Explore Personal Archive</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewItems.map((item) => (
            <Link
              key={item.title}
              href="/life"
              className="editorial-card p-4 group block hover:translate-y-[-2px]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFECE6] mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-1">
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#B86B2F] font-medium">
                  {item.tag}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#202328] mt-1 mb-2 group-hover:text-[#2B536E] transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[#5A626A] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
