import { Metadata } from "next";
import Image from "next/image";
import { lifeSections } from "@/data/life";

export const metadata: Metadata = {
  title: "Beyond Work — Life & Archive",
  description:
    "Personal archive of Suraj Prakash Patel. Travel in Chhattisgarh, physical discipline in the gym, motorcycling, books, and thoughts outside of code.",
};

export default function LifePage() {
  return (
    <div className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="space-y-4 border-b border-neutral-200/70 pb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Beyond the Terminal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Life, discipline & <br />
            <span className="text-neutral-500 font-normal">the world outside work.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal max-w-2xl leading-relaxed">
            There is much more to life than writing software and running companies. This page is an evolving personal journal of the things that ground me, test my limits, and give life depth.
          </p>
        </div>

        {/* Narrative Anchor Quote */}
        <div className="p-8 md:p-10 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-center space-y-3 shadow-xs">
          <p className="italic text-xl sm:text-2xl text-neutral-900 font-normal max-w-2xl mx-auto leading-relaxed">
            &ldquo;Physical discipline mirrors mental stamina. You cannot negotiate with gravity, and you cannot fake a heavy squat.&rdquo;
          </p>
          <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium block">
            — On Consistency & Focus
          </span>
        </div>

        {/* Photo-Led Sections */}
        <div className="space-y-20">
          {lifeSections.map((section, idx) => (
            <div key={section.id} className="space-y-8 border-b border-neutral-200/70 pb-16 last:border-b-0">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  {`0${idx + 1}`}
                </span>
                <span className="text-xs text-neutral-400 uppercase tracking-wider font-medium">
                  Personal Journal
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
                  {section.title}
                </h2>
                <p className="text-base sm:text-lg text-neutral-500 font-normal mt-1">
                  {section.subtitle}
                </p>
              </div>

              {/* Image if available */}
              {section.image && (
                <div className="rounded-3xl bg-white border border-neutral-200/80 p-3 shadow-md">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover hover:scale-103 transition-all duration-700"
                    />
                  </div>
                  {section.imageCaption && (
                    <p className="text-xs text-neutral-500 italic pt-3 px-2">
                      {section.imageCaption}
                    </p>
                  )}
                </div>
              )}

              {/* Lead & Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
                <p className="font-semibold text-neutral-900 text-lg sm:text-xl">
                  {section.lead}
                </p>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-neutral-600">
                    {para}
                  </p>
                ))}
              </div>

              {/* Bullet Points */}
              {section.bulletPoints && (
                <div className="rounded-2xl p-6 bg-neutral-50 border border-neutral-200/80 space-y-3">
                  <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                    Personal Notes & Rules:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {section.bulletPoints.map((bp) => (
                      <div key={bp.label} className="space-y-1">
                        <span className="text-xs font-semibold text-neutral-900 block">
                          {bp.label}
                        </span>
                        <p className="text-xs text-neutral-600 font-normal leading-relaxed">
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
      </div>
    </div>
  );
}
