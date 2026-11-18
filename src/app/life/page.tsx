import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { lifeSections } from "@/data/life";

export const metadata: Metadata = {
  title: "Beyond Work — Life & Archive",
  description:
    "Personal archive of Suraj Prakash Patel. Travel in Chhattisgarh, physical discipline in the gym, motorcycling, books, and thoughts outside of code.",
};

export default function LifePage() {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="space-y-4 border-b border-[#E4E1D8] pb-12">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Beyond the Terminal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#202328] tracking-tight">
            Life, discipline & <br />
            <span className="italic font-normal">the world outside work.</span>
          </h1>
          <p className="font-sans text-lg text-[#5A626A] font-light max-w-2xl leading-relaxed">
            There is much more to life than writing software and running companies. This page is an evolving personal journal of the things that ground me, test my limits, and give life depth.
          </p>
        </div>

        {/* Narrative Anchor Quote */}
        <div className="p-8 md:p-10 bg-[#FAF9F5] border border-[#E4E1D8] text-center space-y-3">
          <p className="font-serif italic text-xl sm:text-2xl text-[#202328] font-light max-w-2xl mx-auto leading-relaxed">
            &ldquo;Physical discipline mirrors mental stamina. You cannot negotiate with gravity, and you cannot fake a heavy squat.&rdquo;
          </p>
          <span className="text-xs font-sans text-[#717A84] uppercase tracking-wider block">
            — On Consistency & Focus
          </span>
        </div>

        {/* Photo-Led Sections */}
        <div className="space-y-20">
          {lifeSections.map((section, idx) => (
            <div key={section.id} className="space-y-8 border-b border-[#E4E1D8] pb-16 last:border-b-0">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
                  {`0${idx + 1} // ${section.tag}`}
                </span>
                <span className="text-xs font-sans text-[#717A84] uppercase tracking-wider">
                  Personal Journal
                </span>
              </div>

              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#202328]">
                  {section.title}
                </h2>
                <p className="font-serif italic text-lg text-[#5A626A] mt-1">
                  {section.subtitle}
                </p>
              </div>

              {/* Image if available */}
              {section.image && (
                <div className="editorial-card p-3 bg-white">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EFECE6]">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-102"
                    />
                  </div>
                  {section.imageCaption && (
                    <p className="text-xs font-sans text-[#717A84] italic pt-3 px-1">
                      {section.imageCaption}
                    </p>
                  )}
                </div>
              )}

              {/* Lead & Paragraphs */}
              <div className="space-y-4 font-sans text-base sm:text-lg text-[#202328] font-light leading-relaxed">
                <p className="font-medium text-[#202328] text-lg sm:text-xl font-serif">
                  {section.lead}
                </p>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-[#5A626A]">
                    {para}
                  </p>
                ))}
              </div>

              {/* Bullet Points */}
              {section.bulletPoints && (
                <div className="editorial-card p-6 bg-[#FAF9F5] border border-[#E4E1D8] space-y-3">
                  <h3 className="font-serif text-lg font-normal text-[#202328]">
                    Personal Notes & Rules:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {section.bulletPoints.map((bp) => (
                      <div key={bp.label} className="space-y-1">
                        <span className="text-xs font-mono font-semibold uppercase text-[#2B536E]">
                          {bp.label}
                        </span>
                        <p className="text-xs font-sans text-[#5A626A] font-light leading-relaxed">
                          {bp.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="editorial-card p-8 bg-[#FAF9F5] border border-[#E4E1D8] text-center space-y-4">
          <h3 className="font-serif text-2xl font-light text-[#202328]">
            Curious about what I&apos;m doing right now?
          </h3>
          <p className="text-sm font-sans text-[#5A626A] max-w-md mx-auto font-light">
            Check out my live /now page for an updated log of current projects, books, and goals.
          </p>
          <div className="pt-2">
            <Link
              href="/now"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#202328] text-white font-sans text-xs font-medium hover:bg-[#2B536E] transition-colors"
            >
              <span>Visit the /now Page</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
