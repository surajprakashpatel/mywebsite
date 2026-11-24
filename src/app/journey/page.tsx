import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { journeyMilestones } from "@/data/journey";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "Life and career timeline of Suraj Prakash Patel. From growing up in Raigarh, Chhattisgarh to founding Curiosity Lab, Kartavya, and Cosmobyte Technologies.",
};

export default function JourneyPage() {
  return (
    <div className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-200/70 pb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Life & Career Timeline
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Tracing the path of <br />
            <span className="text-neutral-500 font-normal">curiosity, convictions & growth.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal max-w-2xl leading-relaxed">
            Instead of a dry list of qualifications and corporate titles, this page tells my story chronologically. Every milestone represents a shift in thinking, a failure absorbed, or a foundation laid.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-10 space-y-10 before:absolute before:left-2 sm:before:left-3 before:top-4 before:bottom-4 before:w-[2px] before:bg-neutral-200">
          {journeyMilestones.map((milestone) => (
            <div key={milestone.title} className="relative group">
              {/* Dot on line */}
              <div className="absolute -left-[27px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full bg-white border-2 border-neutral-900 group-hover:border-blue-600 group-hover:scale-125 transition-all shadow-xs" />

              <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 sm:p-8 space-y-4 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all">
                {/* Milestone Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm sm:text-base font-bold text-neutral-900">
                      {milestone.year}
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
                      {milestone.period}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-neutral-500">
                    {milestone.category}
                  </span>
                </div>

                {/* Title and Phase */}
                <div>
                  <span className="text-xs text-blue-600 font-semibold tracking-wide uppercase">
                    {milestone.phase}
                  </span>
                  <h2 className="text-2xl font-bold text-neutral-900 mt-1 tracking-tight">
                    {milestone.title}
                  </h2>
                </div>

                {/* Narrative */}
                <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                  {milestone.story}
                </p>

                {/* Key Learning */}
                <div className="pt-3 border-t border-neutral-100 flex items-start gap-2 text-xs sm:text-sm text-neutral-500 italic">
                  <span className="font-semibold text-neutral-900 not-italic">Core Takeaway:</span>
                  <span>&ldquo;{milestone.learning}&rdquo;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-8 text-center border-t border-neutral-200/70 space-y-4">
          <p className="text-neutral-600 text-sm">
            Curious to see what these experiences turned into?
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors shadow-xs"
            >
              <span>Explore My Ventures & Work</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
