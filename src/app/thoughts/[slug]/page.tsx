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
    <article className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-[#717A84]">
          <Link href="/thoughts" className="hover:text-[#202328] transition-colors flex items-center gap-1">
            <ArrowLeft size={13} />
            <span>Public Notebook</span>
          </Link>
          <span>/</span>
          <span className="text-[#202328] font-medium truncate max-w-[200px] sm:max-w-none">
            {thought.category}
          </span>
        </div>

        {/* Article Header */}
        <div className="space-y-6 border-b border-[#E4E1D8] pb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-[#717A84]">
            <span className="uppercase tracking-wider font-semibold text-[#B86B2F]">
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

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#202328] leading-[1.18] tracking-tight">
            {thought.title}
          </h1>

          <p className="font-serif italic text-xl text-[#5A626A] font-light leading-relaxed">
            {thought.subtitle}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#ECEAE3]">
            <div className="w-9 h-9 rounded-full bg-[#EFECE6] border border-[#E4E1D8] flex items-center justify-center font-serif text-sm font-medium text-[#202328]">
              SP
            </div>
            <div className="text-xs font-sans">
              <p className="font-medium text-[#202328]">Suraj Prakash Patel</p>
              <p className="text-[#717A84]">Founder & Builder • Raigarh, India</p>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-10 text-[#202328] font-sans font-light leading-relaxed text-base sm:text-lg">
          {thought.content.map((section, idx) => (
            <div key={idx} className="space-y-6">
              {section.sectionHeading && (
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#202328] pt-4 tracking-tight">
                  {section.sectionHeading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-[#202328] font-light leading-relaxed">
                  {para}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-8 pl-6 border-l-2 border-[#202328] py-2 bg-[#FAF9F5] p-4 font-serif italic text-lg sm:text-xl text-[#202328] leading-snug">
                  &ldquo;{section.quote}&rdquo;
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Key Takeaways Box */}
        {thought.keyTakeaways && thought.keyTakeaways.length > 0 && (
          <div className="editorial-card p-8 bg-[#FAF9F5] border border-[#E4E1D8] space-y-4 my-10">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              Summary & Reflection
            </span>
            <h3 className="font-serif text-2xl font-light text-[#202328]">
              Key Takeaways
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base font-sans text-[#5A626A] font-light">
              {thought.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-[#2B536E] font-bold mt-0.5">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Essay Footer */}
        <div className="pt-12 border-t border-[#E4E1D8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/thoughts"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-[#717A84] hover:text-[#202328] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to All Essays</span>
          </Link>

          <Link
            href={`/thoughts/${nextThought.slug}`}
            className="editorial-card p-4 sm:px-6 flex items-center gap-4 bg-white hover:border-[#202328] group max-w-sm"
          >
            <div className="text-right">
              <span className="text-[10px] font-sans text-[#717A84] uppercase tracking-wider block">
                Next Essay
              </span>
              <span className="font-serif text-base font-normal text-[#202328] group-hover:text-[#2B536E] transition-colors truncate block max-w-[240px]">
                {nextThought.title}
              </span>
            </div>
            <ChevronRight size={18} className="text-[#202328] group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </div>
      </div>
    </article>
  );
}
