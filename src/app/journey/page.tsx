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
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-[#E4E1D8] pb-12">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Life & Career Timeline
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#202328] tracking-tight">
            Tracing the path of <br />
            <span className="italic font-normal">curiosity, convictions & growth.</span>
          </h1>
          <p className="font-sans text-lg text-[#5A626A] font-light max-w-2xl leading-relaxed">
            Instead of a dry list of qualifications and corporate titles, this page tells my story chronologically. Every milestone represents a shift in thinking, a failure absorbed, or a foundation laid.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-4 sm:pl-8 space-y-12 before:absolute before:left-0 before:top-4 before:bottom-4 before:w-[1px] before:bg-[#E4E1D8]">
          {journeyMilestones.map((milestone) => (
            <div key={milestone.title} className="relative group">
              {/* Dot on line */}
              <div className="absolute -left-[21px] sm:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-[#FFFFFF] border-2 border-[#202328] group-hover:bg-[#B86B2F] group-hover:border-[#B86B2F] transition-colors" />

              <div className="editorial-card p-6 sm:p-8 space-y-4 bg-white">
                {/* Milestone Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ECEAE3] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm sm:text-base font-semibold text-[#202328]">
                      {milestone.year}
                    </span>
                    <span className="text-[#E4E1D8]">•</span>
                    <span className="text-xs font-sans text-[#717A84] uppercase tracking-wider">
                      {milestone.period}
                    </span>
                  </div>

                  <span className="text-[11px] font-sans font-medium uppercase tracking-wider px-2.5 py-0.5 bg-[#F6F5F1] text-[#2B536E] border border-[#E4E1D8]">
                    {milestone.category}
                  </span>
                </div>

                {/* Title and Phase */}
                <div>
                  <span className="text-xs font-sans text-[#B86B2F] font-semibold tracking-wide uppercase">
                    {milestone.phase}
                  </span>
                  <h2 className="font-serif text-2xl font-normal text-[#202328] mt-0.5">
                    {milestone.title}
                  </h2>
                </div>

                {/* Story */}
                <p className="font-sans text-sm sm:text-base text-[#5A626A] font-light leading-relaxed">
                  {milestone.story}
                </p>

                {/* Takeaway / Lesson */}
                <div className="pt-3 border-t border-[#ECEAE3] bg-[#FAF9F5] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 sm:px-8 border-b-0 rounded-b-none">
                  <p className="text-xs sm:text-sm font-sans text-[#202328] font-light leading-relaxed">
                    <strong className="font-semibold text-[#2B536E] mr-1.5">Key Learning:</strong>
                    &ldquo;{milestone.learning}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="editorial-card p-8 text-center space-y-4 bg-[#FAF9F5]">
          <h3 className="font-serif text-2xl font-light text-[#202328]">
            Curious about the systems I&apos;ve built along this path?
          </h3>
          <p className="text-sm font-sans text-[#5A626A] max-w-md mx-auto font-light">
            Explore dedicated profiles of my companies, products, and technical case studies.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#202328] text-white font-sans text-xs font-medium hover:bg-[#2B536E] transition-colors"
            >
              <span>Explore My Work</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFFFFF] border border-[#E4E1D8] text-[#202328] font-sans text-xs font-medium hover:bg-[#EFECE6] transition-colors"
            >
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
