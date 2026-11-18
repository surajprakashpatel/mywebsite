import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Hammer, MapPin, Sparkles, Target } from "lucide-react";
import { nowData } from "@/data/now";

export const metadata: Metadata = {
  title: "Now — What I'm Doing Currently",
  description:
    "What Suraj Prakash Patel is doing these days. Current building initiatives, learning focus, reading list, and personal goals.",
};

export default function NowPage() {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-[#E4E1D8] pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              The /now Movement
            </span>
            <span className="text-[#E4E1D8]">•</span>
            <div className="inline-flex items-center gap-1.5 text-xs font-sans text-emerald-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Updated {nowData.lastUpdated}</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#202328] tracking-tight">
            What I&apos;m doing <span className="italic font-normal">these days.</span>
          </h1>

          <p className="font-sans text-lg text-[#5A626A] font-light max-w-2xl leading-relaxed">
            Inspired by Derek Sivers&apos; /now page initiative, this is a public dashboard of my active focus, current projects, books on my desk, and what I&apos;m prioritizing right now.
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs font-sans text-[#717A84]">
            <MapPin size={13} />
            <span>Currently stationed in: {nowData.location}</span>
          </div>
        </div>

        {/* Core Statement Banner */}
        <div className="editorial-card p-8 bg-[#FAF9F5] border-l-4 border-l-[#202328] space-y-3">
          <h2 className="font-serif text-xl font-normal text-[#202328]">
            Current Life Thesis
          </h2>
          <p className="font-sans text-base text-[#5A626A] font-light leading-relaxed">
            {nowData.statement}
          </p>
          <p className="font-sans text-sm text-[#717A84] font-light">
            I am also actively working on becoming better at enterprise business development, distribution, public speaking, and understanding how to transition early software prototypes into enduring, profitable institutions.
          </p>
        </div>

        {/* Section 1: Building */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            <Hammer size={15} />
            <span>01 // What I&apos;m Building</span>
          </div>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            Active Ventures & Codebases
          </h2>

          <div className="space-y-4">
            {nowData.building.map((item) => (
              <div key={item.title} className="editorial-card p-6 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-normal text-[#202328]">
                    {item.title}
                  </h3>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="text-xs font-sans font-medium text-[#2B536E] hover:underline flex items-center gap-1"
                    >
                      <span>View Project</span>
                      <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
                <p className="font-sans text-sm text-[#5A626A] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Learning */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            <Compass size={15} />
            <span>02 // What I&apos;m Learning</span>
          </div>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            Skills & Disciplines in Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nowData.learning.map((item) => (
              <div key={item.skill} className="editorial-card p-6 bg-white space-y-2">
                <h3 className="font-serif text-lg font-normal text-[#202328]">
                  {item.skill}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#5A626A] font-light leading-relaxed">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Exploring */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            <Sparkles size={15} />
            <span>03 // What I&apos;m Exploring</span>
          </div>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            Ideas on My Radar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nowData.exploring.map((item) => (
              <div key={item.topic} className="editorial-card p-6 bg-white space-y-2">
                <h3 className="font-serif text-lg font-normal text-[#202328]">
                  {item.topic}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#5A626A] font-light leading-relaxed">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Reading */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            <BookOpen size={15} />
            <span>04 // Current Bookshelf</span>
          </div>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            What I&apos;m Reading
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nowData.reading.map((book) => (
              <div key={book.title} className="editorial-card p-6 bg-white space-y-3 flex flex-col justify-between">
                <div>
                  <span
                    className={`text-[10px] font-sans uppercase tracking-wider px-2 py-0.5 border ${
                      book.status === "Currently Reading"
                        ? "bg-[#EBF2F6] text-[#2B536E] border-[#2B536E]/20"
                        : "bg-[#F6F5F1] text-[#717A84] border-[#E4E1D8]"
                    }`}
                  >
                    {book.status}
                  </span>
                  <h3 className="font-serif text-lg font-normal text-[#202328] mt-2">
                    {book.title}
                  </h3>
                  <p className="text-xs font-sans text-[#717A84] mb-3">by {book.author}</p>
                  <p className="font-sans text-xs text-[#5A626A] font-light leading-relaxed">
                    &ldquo;{book.takeaway}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Personal Goals */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            <Target size={15} />
            <span>05 // Goals & Metrics</span>
          </div>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            Personal Goals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nowData.personalGoals.map((g) => (
              <div key={g.goal} className="editorial-card p-6 bg-white space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#B86B2F]">
                  {g.category}
                </span>
                <h3 className="font-serif text-base font-normal text-[#202328]">
                  {g.goal}
                </h3>
                <p className="font-sans text-xs text-[#5A626A] font-light leading-relaxed">
                  {g.progress}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-8 border-t border-[#E4E1D8] text-xs font-sans text-[#717A84] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>This page is maintained manually and updated every month or quarter.</p>
          <Link href="/contact" className="text-[#202328] font-medium hover:underline">
            Have thoughts or a book recommendation? Get in touch →
          </Link>
        </div>
      </div>
    </div>
  );
}
