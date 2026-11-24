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
    <div className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-200/70 pb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block">
            The /now Movement
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            What I&apos;m doing <span className="text-neutral-500 font-normal">these days.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 font-normal max-w-2xl leading-relaxed">
            Inspired by Derek Sivers&apos; /now page initiative, this is a public dashboard of my active focus, current projects, books on my desk, and what I&apos;m prioritizing right now.
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs text-neutral-500">
            <MapPin size={13} />
            <span>Currently stationed in: {nowData.location}</span>
          </div>
        </div>

        {/* Core Statement Banner */}
        <div className="rounded-2xl p-8 bg-neutral-50 border border-neutral-200/80 space-y-3 shadow-xs">
          <h2 className="text-lg font-bold text-neutral-900 tracking-tight">
            Current Life Thesis
          </h2>
          <p className="text-base text-neutral-700 font-normal leading-relaxed">
            {nowData.statement}
          </p>
          <p className="text-sm text-neutral-500 font-normal">
            I am also actively working on becoming better at enterprise business development, distribution, public speaking, and understanding how to transition early software prototypes into enduring, profitable institutions.
          </p>
        </div>

        {/* Section 1: Building */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <Hammer size={15} />
            <span>01 • What I&apos;m Building</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Active Ventures & Codebases
          </h2>

          <div className="space-y-4">
            {nowData.building.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-2 shadow-xs hover:border-neutral-300 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                    {item.title}
                  </h3>
                  {item.link && (
                    <Link
                      href={item.link}
                      className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <span>View Project</span>
                      <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Learning */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <Compass size={15} />
            <span>02 • What I&apos;m Learning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Skills & Disciplines in Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nowData.learning.map((item) => (
              <div key={item.skill} className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-2 shadow-xs hover:border-neutral-300 hover:shadow-sm transition-all">
                <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                  {item.skill}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Exploring */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <Sparkles size={15} />
            <span>03 • What I&apos;m Exploring</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Ideas on My Radar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nowData.exploring.map((item) => (
              <div key={item.topic} className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-2 shadow-xs hover:border-neutral-300 hover:shadow-sm transition-all">
                <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                  {item.topic}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Reading */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <BookOpen size={15} />
            <span>04 • Current Bookshelf</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            What I&apos;m Reading
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nowData.reading.map((book) => (
              <div key={book.title} className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-3 flex flex-col justify-between shadow-xs hover:border-neutral-300 hover:shadow-sm transition-all">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                    {book.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-3">by {book.author}</p>
                  <p className="text-xs text-neutral-600 font-normal leading-relaxed italic">
                    &ldquo;{book.takeaway}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Personal Goals */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <Target size={15} />
            <span>05 • Goals & Metrics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Personal Goals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nowData.personalGoals.map((g) => (
              <div key={g.goal} className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-2 shadow-xs hover:border-neutral-300 hover:shadow-sm transition-all">
                <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                  {g.goal}
                </h3>
                <p className="text-xs text-neutral-600 font-normal leading-relaxed">
                  {g.progress}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-8 border-t border-neutral-200/70 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>This page is maintained manually and updated every month or quarter.</p>
          <Link href="/contact" className="text-neutral-900 font-medium hover:text-blue-600 transition-colors">
            Have thoughts or a book recommendation? Get in touch →
          </Link>
        </div>
      </div>
    </div>
  );
}
