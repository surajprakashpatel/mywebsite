import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedVentures() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 md:py-24 px-6 border-b border-neutral-200/70 bg-neutral-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              03 • Selected Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-1">
              Things I&apos;ve Built
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-900 hover:text-blue-600 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-2xl bg-white border border-neutral-200/80 p-7 flex flex-col justify-between group shadow-xs hover:border-neutral-300 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 font-sans mb-3">
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
                  {project.tags.slice(0, 3).map((tag, idx) => (
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
    </section>
  );
}
