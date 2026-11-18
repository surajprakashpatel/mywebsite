import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Globe } from "lucide-react";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study & Architecture`,
    description: project.excerpt,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans text-[#717A84]">
          <Link href="/projects" className="hover:text-[#202328] transition-colors flex items-center gap-1">
            <ArrowLeft size={13} />
            <span>All Projects</span>
          </Link>
          <span>/</span>
          <span className="text-[#202328] font-medium">{project.title}</span>
        </div>

        {/* Project Header */}
        <div className="space-y-6 border-b border-[#E4E1D8] pb-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              {project.category}
            </span>
            <span className="text-[#E4E1D8]">•</span>
            <span className="text-xs font-mono text-[#717A84]">{project.year}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#202328] tracking-tight">
            {project.title}
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#5A626A] font-light">
            {project.subtitle}
          </p>

          <p className="font-sans text-base sm:text-lg text-[#202328] font-light leading-relaxed max-w-3xl">
            {project.excerpt}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#ECEAE3]">
            <div>
              <p className="text-[11px] font-sans text-[#717A84] uppercase tracking-wider">Role</p>
              <p className="font-serif text-sm font-medium text-[#202328] mt-0.5">{project.role}</p>
            </div>
            <div>
              <p className="text-[11px] font-sans text-[#717A84] uppercase tracking-wider">Timeline</p>
              <p className="font-serif text-sm font-medium text-[#202328] mt-0.5">{project.year}</p>
            </div>
            {project.stats && (
              <div className="col-span-2 sm:col-span-2">
                <p className="text-[11px] font-sans text-[#717A84] uppercase tracking-wider">{project.stats.label}</p>
                <p className="font-serif text-sm sm:text-base font-semibold text-[#2B536E] mt-0.5">
                  {project.stats.value}
                </p>
              </div>
            )}
          </div>

          {/* Links */}
          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#202328] text-white text-xs font-sans font-medium hover:bg-[#2B536E] transition-colors"
              >
                <Globe size={14} />
                <span>Visit Live Platform</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          )}
        </div>

        {/* Section 1: The Problem */}
        <div className="space-y-4">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            The Status Quo
          </span>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            The Problem
          </h2>
          <div className="editorial-card p-6 sm:p-8 bg-white border-l-4 border-l-[#202328]">
            <p className="font-sans text-base text-[#5A626A] font-light leading-relaxed">
              {project.problem}
            </p>
          </div>
        </div>

        {/* Section 2: Why I Built It */}
        <div className="space-y-4">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Founder Motivation
          </span>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            Why I Started Building It
          </h2>
          <p className="font-sans text-base text-[#5A626A] font-light leading-relaxed">
            {project.whyBuilt}
          </p>
        </div>

        {/* Section 3: Technical Architecture */}
        <div className="space-y-4">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            System Design
          </span>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            Technical Architecture & Blueprint
          </h2>

          <div className="editorial-card p-6 sm:p-8 bg-white space-y-4">
            <h3 className="font-serif text-lg font-normal text-[#202328]">
              Key Architectural Decisions:
            </h3>
            <ul className="space-y-3">
              {project.architecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-sans text-[#5A626A] font-light">
                  <div className="w-5 h-5 rounded-full bg-[#F6F5F1] border border-[#E4E1D8] flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono text-[#202328]">
                    {i + 1}
                  </div>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#ECEAE3]">
              <p className="text-xs font-sans font-semibold uppercase tracking-wider text-[#717A84] mb-2">
                Technology Stack:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 bg-[#F6F5F1] text-[#202328] border border-[#E4E1D8]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Challenges Faced */}
        <div className="space-y-4">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Friction & Solutions
          </span>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            Engineering Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.challenges.map((challenge, i) => (
              <div key={i} className="editorial-card p-6 bg-white space-y-2">
                <span className="text-xs font-mono text-[#B86B2F] font-semibold">
                  Challenge #{i + 1}
                </span>
                <p className="font-sans text-sm text-[#5A626A] font-light leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Outcomes & Learnings */}
        <div className="space-y-4">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Real-World Impact
          </span>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            Outcomes & Learnings
          </h2>
          <div className="editorial-card p-6 sm:p-8 bg-[#FAF9F5] border border-[#E4E1D8] space-y-4">
            <ul className="space-y-3">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-sans text-[#202328] font-light">
                  <CheckCircle2 size={18} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Project Footer */}
        <div className="pt-12 border-t border-[#E4E1D8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-[#717A84] hover:text-[#202328] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to All Projects</span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="editorial-card p-4 sm:px-6 flex items-center gap-4 bg-white hover:border-[#202328] group"
          >
            <div className="text-right">
              <span className="text-[10px] font-sans text-[#717A84] uppercase tracking-wider block">
                Next Case Study
              </span>
              <span className="font-serif text-base font-normal text-[#202328] group-hover:text-[#2B536E] transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ChevronRight size={18} className="text-[#202328] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
