import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedVentures() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20 px-6 border-b border-[#E4E1D8]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              03 // Selected Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#202328] tracking-tight mt-1">
              Things I&apos;ve Built
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-[#202328] hover:text-[#2B536E] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="editorial-card p-7 flex flex-col justify-between group block"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#717A84] font-sans mb-4">
                  <span className="uppercase tracking-wider font-medium text-[#2B536E]">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-2xl font-light text-[#202328] group-hover:text-[#2B536E] transition-colors flex items-center justify-between mb-1">
                  <span>{project.title}</span>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </h3>
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
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 bg-[#F6F5F1] text-[#717A84] border border-[#E4E1D8]"
                    >
                      {tag}
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
