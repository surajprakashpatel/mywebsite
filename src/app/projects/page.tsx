"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "SaaS Products",
  "Civic Technology",
  "Business Software",
  "Experiments",
  "Web Development",
] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-[#E4E1D8] pb-12">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Living Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#202328] tracking-tight">
            Projects, Systems & <br />
            <span className="italic font-normal">digital experiments.</span>
          </h1>
          <p className="font-sans text-lg text-[#5A626A] font-light max-w-2xl leading-relaxed">
            A comprehensive archive of software I&apos;ve built—ranging from venture-backed GovTech platforms and industrial reverse auction engines to applied hardware experiments and web architectures.
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
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

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#717A84]"
            />
            <input
              type="text"
              placeholder="Filter by keyword or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs font-sans bg-[#FFFFFF] border border-[#E4E1D8] placeholder-[#939CA6] focus:outline-hidden focus:border-[#202328] transition-colors"
            />
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="editorial-card p-12 text-center text-[#717A84] space-y-2">
            <p className="font-serif text-lg text-[#202328]">No projects matched your criteria.</p>
            <p className="text-xs font-sans">Try selecting &ldquo;All&rdquo; or clearing your search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="editorial-card p-7 flex flex-col justify-between group block bg-white hover:translate-y-[-2px]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#717A84] font-sans mb-3">
                    <span className="uppercase tracking-wider font-medium text-[#2B536E]">
                      {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h2 className="font-serif text-2xl font-normal text-[#202328] group-hover:text-[#2B536E] transition-colors flex items-center justify-between mb-1">
                    <span>{project.title}</span>
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </h2>
                  <p className="text-xs font-sans text-[#717A84] mb-4">{project.subtitle}</p>

                  <p className="text-sm font-sans text-[#5A626A] font-light leading-relaxed line-clamp-3">
                    {project.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#ECEAE3] space-y-3">
                  {project.stats && (
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="text-[#717A84]">{project.stats.label}</span>
                      <span className="font-serif font-medium text-[#202328]">{project.stats.value}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 bg-[#F6F5F1] text-[#717A84] border border-[#E4E1D8]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-sans font-medium text-[#202328] group-hover:text-[#2B536E]">
                    <span>Read Case Study</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="editorial-card p-8 bg-[#FAF9F5] border border-[#E4E1D8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl font-normal text-[#202328]">
              Have a problem in need of systems architecture?
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#5A626A] font-light">
              I collaborate with municipalities, factories, and founders on high-stakes software engineering.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#202328] text-white font-sans text-xs font-medium hover:bg-[#2B536E] transition-colors whitespace-nowrap"
          >
            Start a Collaboration
          </Link>
        </div>
      </div>
    </div>
  );
}
