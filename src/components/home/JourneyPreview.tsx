import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { journeyMilestones } from "@/data/journey";

export default function JourneyPreview() {
  const highlights = journeyMilestones.filter((m) => m.highlight).slice(0, 4);

  return (
    <section className="py-20 md:py-24 px-6 border-b border-neutral-200/70 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              04 • Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-1">
              My Journey
            </h2>
          </div>
          <Link
            href="/journey"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-900 hover:text-blue-600 transition-colors"
          >
            <span>Explore Full Timeline</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((milestone) => (
            <div
              key={milestone.year}
              className="rounded-2xl bg-white border border-neutral-200/80 p-6 flex flex-col justify-between space-y-4 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                  <span className="font-semibold text-neutral-900">{milestone.year}</span>
                  <span className="text-xs font-medium text-neutral-500">
                    {milestone.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1 tracking-tight">
                  {milestone.title}
                </h3>
                <p className="text-xs font-medium text-blue-600 mb-2">
                  {milestone.phase}
                </p>
                <p className="text-xs text-neutral-600 font-normal leading-relaxed line-clamp-4">
                  {milestone.story}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100">
                <p className="text-xs text-neutral-500 italic">
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
