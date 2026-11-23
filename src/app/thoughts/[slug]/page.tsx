import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ChevronRight } from "lucide-react";
import { thoughts } from "@/data/thoughts";

export async function generateStaticParams() {
  return thoughts.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const thought = thoughts.find((t) => t.slug === slug);

  if (!thought) {
    return {
      title: "Thought Not Found",
    };
  }

  return {
    title: `${thought.title} — Suraj Prakash Patel`,
    description: thought.excerpt,
  };
}

export default async function ThoughtDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const thought = thoughts.find((t) => t.slug === slug);

  if (!thought) {
    notFound();
  }

  const currentIndex = thoughts.findIndex((t) => t.slug === slug);
  const nextThought = thoughts[(currentIndex + 1) % thoughts.length];

  return (
    <article className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <Link href="/thoughts" className="hover:text-neutral-900 transition-colors flex items-center gap-1">
            <ArrowLeft size={13} />
            <span>Public Notebook</span>
          </Link>
          <span>/</span>
          <span className="text-neutral-900 font-medium truncate max-w-[200px] sm:max-w-none">
            {thought.category}
          </span>
        </div>

        {/* Article Header */}
        <div className="space-y-6 border-b border-neutral-200/70 pb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
            <span className="uppercase tracking-wider font-semibold text-blue-600">
              {thought.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar size={13} />
              {thought.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {thought.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight tracking-tight">
            {thought.title}
          </h1>

          <p className="text-xl text-neutral-600 font-normal leading-relaxed">
            {thought.subtitle}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
            <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold tracking-wide">
              SP
            </div>
            <div className="text-xs">
              <p className="font-semibold text-neutral-900">Suraj Prakash Patel</p>
              <p className="text-neutral-500">Founder & Builder • Raigarh, India</p>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-neutral-700 font-normal leading-relaxed text-base sm:text-lg">
          {thought.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.sectionHeading && (
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 pt-4 tracking-tight">
                  {section.sectionHeading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-neutral-600 leading-relaxed">
                  {para}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-8 rounded-2xl bg-neutral-50 border-l-4 border-neutral-900 p-6 italic text-lg sm:text-xl text-neutral-900 leading-snug">
                  &ldquo;{section.quote}&rdquo;
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Key Takeaways Box */}
        {thought.keyTakeaways && thought.keyTakeaways.length > 0 && (
          <div className="rounded-2xl p-8 bg-neutral-50 border border-neutral-200/80 space-y-4 my-10 shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Summary & Reflection
            </span>
            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Key Takeaways
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base text-neutral-600 font-normal">
              {thought.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Essay Footer */}
        <div className="pt-12 border-t border-neutral-200/70 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/thoughts"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to All Essays</span>
          </Link>

          <Link
            href={`/thoughts/${nextThought.slug}`}
            className="rounded-2xl p-4 sm:px-6 flex items-center gap-4 bg-white border border-neutral-200/80 hover:border-neutral-300 hover:shadow-md transition-all group max-w-sm"
          >
            <div className="text-right">
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-semibold">
                Next Essay
              </span>
              <span className="text-base font-bold text-neutral-900 group-hover:text-blue-600 transition-colors truncate block max-w-[240px]">
                {nextThought.title}
              </span>
            </div>
            <ChevronRight size={18} className="text-neutral-900 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </div>
      </div>
    </article>
  );
}
