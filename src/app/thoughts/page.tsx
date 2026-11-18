"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search } from "lucide-react";
import { thoughts } from "@/data/thoughts";

const thoughtCategories = [
  "All",
  "Entrepreneurship & Startups",
  "Business & Strategy",
  "Technology & AI",
  "Lessons from Failure",
  "Personal Reflections",
] as const;

export default function ThoughtsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredThoughts = thoughts.filter((thought) => {
    const matchesCategory =
      activeCategory === "All" || thought.category === activeCategory;
    const matchesSearch =
      thought.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thought.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thought.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-[#E4E1D8] pb-12">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Public Notebook
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#202328] tracking-tight">
            Thoughts, Essays & <br />
            <span className="italic font-normal">reflections on building.</span>
          </h1>
          <p className="font-sans text-lg text-[#5A626A] font-light max-w-2xl leading-relaxed">
            I don&apos;t write to sound academic or corporate. This is my public notebook—documenting lessons from running startups in small cities, working with civic bureaucracies, and learning how the world actually works.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {thoughtCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-sans tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-[#202328] text-white font-medium"
                    : "bg-[#FFFFFF] border border-[#E4E1D8] text-[#5A626A] hover:text-[#202328] hover:bg-[#EFECE6]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-60">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717A84]"
            />
            <input
              type="text"
              placeholder="Search essays..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs font-sans bg-[#FFFFFF] border border-[#E4E1D8] placeholder-[#939CA6] focus:outline-hidden focus:border-[#202328]"
            />
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-8">
          {filteredThoughts.map((thought) => (
            <Link
              key={thought.slug}
              href={`/thoughts/${thought.slug}`}
              className="editorial-card p-7 sm:p-9 block bg-white group hover:border-[#202328]"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-[#717A84]">
                  <span className="uppercase tracking-wider font-medium text-[#2B536E]">
                    {thought.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span>{thought.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {thought.readTime}
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#202328] group-hover:text-[#2B536E] transition-colors leading-tight">
                    {thought.title}
                  </h2>
                  <p className="font-serif italic text-base text-[#5A626A] mt-1 font-light">
                    {thought.subtitle}
                  </p>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#5A626A] font-light leading-relaxed">
                  {thought.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-sans font-medium text-[#202328] group-hover:text-[#2B536E]">
                  <span>Read full essay</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Note on Language & Voice */}
        <div className="editorial-card p-6 bg-[#FAF9F5] border border-[#E4E1D8] text-xs font-sans text-[#5A626A] space-y-1">
          <p className="font-medium text-[#202328]">Editorial Note on Voice & Language:</p>
          <p>
            My writing reflects my natural conversational tone. Some upcoming articles and notes will be written in Hindi and Hinglish alongside English, because authentic ideas resonate best in the language you think in.
          </p>
        </div>
      </div>
    </div>
  );
}
