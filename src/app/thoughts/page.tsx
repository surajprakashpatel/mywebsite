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
    <div className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-200/70 pb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Public Notebook
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Thoughts, Essays & <br />
            <span className="text-neutral-500 font-normal">reflections on building.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal max-w-2xl leading-relaxed">
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
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                  activeCategory === cat
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              placeholder="Search essays..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full border border-neutral-200/80 bg-neutral-50/60 focus:bg-white focus:outline-hidden focus:border-neutral-900 transition-colors"
            />
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {filteredThoughts.map((thought) => (
            <Link
              key={thought.slug}
              href={`/thoughts/${thought.slug}`}
              className="rounded-2xl bg-white border border-neutral-200/80 p-7 md:p-8 flex flex-col justify-between group shadow-xs hover:border-neutral-300 hover:shadow-lg transition-all block"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium text-[11px]">
                    {thought.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <Clock size={12} />
                    <span>{thought.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors leading-snug mb-2 tracking-tight">
                  {thought.title}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-neutral-500 mb-3">
                  {thought.subtitle}
                </p>

                <p className="text-sm text-neutral-600 font-normal leading-relaxed line-clamp-3">
                  {thought.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span>{thought.date}</span>
                <span className="inline-flex items-center gap-1 text-neutral-900 font-semibold group-hover:translate-x-0.5 transition-transform">
                  Read Essay <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
