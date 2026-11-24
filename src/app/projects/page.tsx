"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
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
    <div className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-200/70 pb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Living Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Projects, Systems & <br />
            <span className="text-neutral-500 font-normal">digital experiments.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal max-w-2xl leading-relaxed">
            A comprehensive archive of software I&apos;ve built—ranging from venture-backed GovTech platforms and industrial reverse auction engines to applied hardware experiments and web architectures.
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-2 border-b border-neutral-200/70">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "text-neutral-900 border-b-2 border-neutral-900 font-semibold"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-neutral-200/80 bg-neutral-50/60 focus:bg-white focus:outline-hidden focus:border-neutral-900 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-2xl bg-white border border-neutral-200/80 p-7 flex flex-col justify-between group shadow-xs hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                  <span className="font-medium text-neutral-600">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors flex items-center justify-between mb-1 tracking-tight">
                  <span>{project.title}</span>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </h3>
                <p className="text-xs font-medium text-neutral-500 mb-3">{project.subtitle}</p>

                <p className="text-sm text-neutral-600 font-normal leading-relaxed line-clamp-3">
                  {project.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 space-y-3">
                {project.stats && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-500">{project.stats.label}</span>
                    <span className="font-semibold text-neutral-900">{project.stats.value}</span>
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500">
                  {project.tags.map((tag, idx) => (
                    <span key={tag} className="flex items-center gap-2">
                      {idx > 0 && <span className="text-neutral-300">•</span>}
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
