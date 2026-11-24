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

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <Link href="/projects" className="hover:text-neutral-900 transition-colors flex items-center gap-1">
            <ArrowLeft size={13} />
            <span>All Projects</span>
          </Link>
          <span>/</span>
          <span className="text-neutral-900 font-medium">{project.title}</span>
        </div>

        {/* Project Header */}
        <div className="space-y-6 border-b border-neutral-200/70 pb-12">
          <div>
            <span className="text-xs font-mono text-neutral-500">{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-600 font-normal">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-3xl">
            {project.excerpt}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-100">
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Role</p>
              <p className="text-sm font-semibold text-neutral-900 mt-1">{project.role}</p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Timeline</p>
              <p className="text-sm font-semibold text-neutral-900 mt-1">{project.year}</p>
            </div>
            {project.stats && (
              <div className="col-span-2 sm:col-span-2">
                <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">{project.stats.label}</p>
                <p className="text-sm sm:text-base font-bold text-blue-600 mt-1">
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
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors shadow-xs"
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
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            The Status Quo
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            The Problem
          </h2>
          <div className="rounded-2xl p-6 sm:p-8 bg-neutral-50 border border-neutral-200/80 shadow-xs">
            <p className="text-base text-neutral-700 font-normal leading-relaxed">
              {project.problem}
            </p>
          </div>
        </div>

        {/* Section 2: Why I Built It */}
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Founder Motivation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Why I Started Building It
          </h2>
          <p className="text-base text-neutral-600 font-normal leading-relaxed">
            {project.whyBuilt}
          </p>
        </div>

        {/* Section 3: Technical Architecture */}
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            System Design
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Technical Architecture & Blueprint
          </h2>

          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-neutral-200/80 space-y-5 shadow-xs">
            <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
              Key Architectural Decisions:
            </h3>
            <ul className="space-y-3">
              {project.architecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-600 font-normal">
                  <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold text-neutral-900">
                    {i + 1}
                  </div>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>


          </div>
        </div>

        {/* Section 4: Challenges Faced */}
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Friction & Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Engineering Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.challenges.map((challenge, i) => (
              <div key={i} className="rounded-2xl p-6 bg-white border border-neutral-200/80 space-y-2 shadow-xs">
                <span className="text-xs font-semibold text-blue-600">
                  Challenge #{i + 1}
                </span>
                <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Outcomes & Learnings */}
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Real-World Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Outcomes & Learnings
          </h2>
          <div className="rounded-2xl p-6 sm:p-8 bg-neutral-50 border border-neutral-200/80 space-y-4 shadow-xs">
            <ul className="space-y-3">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-800 font-normal">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Project Footer */}
        <div className="pt-12 border-t border-neutral-200/70 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to All Projects</span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="rounded-2xl p-4 sm:px-6 flex items-center gap-4 bg-white border border-neutral-200/80 hover:border-neutral-300 hover:shadow-md transition-all group"
          >
            <div className="text-right">
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-semibold">
                Next Case Study
              </span>
              <span className="text-base font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ChevronRight size={18} className="text-neutral-900 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
