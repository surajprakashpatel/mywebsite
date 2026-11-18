import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { journeyMilestones } from "@/data/journey";

export default function JourneyPreview() {
  const highlights = journeyMilestones.filter((m) => m.highlight).slice(0, 4);

  return (
    <section className="py-20 px-6 border-b border-[#E4E1D8] bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              04 // Life & Career Timeline
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#202328] tracking-tight mt-1">
              My Journey
            </h2>
          </div>
          <Link
            href="/journey"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-[#202328] hover:text-[#2B536E] transition-colors"
          >
            <span>Explore Full Timeline</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {highlights.map((milestone) => (
            <div
              key={milestone.year}
              className="editorial-card p-6 flex flex-col justify-between space-y-4 relative"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-sans text-[#717A84] mb-2">
                  <span className="font-mono text-[#2B536E] font-medium">{milestone.year}</span>
                  <span className="text-[10px] uppercase tracking-wider bg-[#F6F5F1] px-2 py-0.5 border border-[#E4E1D8]">
                    {milestone.category}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-normal text-[#202328] mb-1">
                  {milestone.title}
                </h3>
                <p className="text-xs font-sans text-[#B86B2F] font-medium mb-3">
                  {milestone.phase}
                </p>
                <p className="font-sans text-xs text-[#5A626A] font-light leading-relaxed line-clamp-4">
                  {milestone.story}
                </p>
              </div>

              <div className="pt-3 border-t border-[#ECEAE3]">
                <p className="font-sans text-[11px] text-[#717A84] italic">
                  &ldquo;{milestone.learning}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
