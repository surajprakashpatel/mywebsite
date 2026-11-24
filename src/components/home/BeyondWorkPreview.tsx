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
    <section className="py-20 md:py-24 px-6 border-b border-neutral-200/70 bg-neutral-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              05 • Life & Perspective
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-1">
              Beyond Work
            </h2>
          </div>
          <Link
            href="/life"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-900 hover:text-blue-600 transition-colors"
          >
            <span>Explore Personal Archive</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewItems.map((item) => (
            <Link
              key={item.title}
              href="/life"
              className="rounded-2xl bg-white border border-neutral-200/80 overflow-hidden group block shadow-xs hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {item.tag}
                </p>
                <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
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
