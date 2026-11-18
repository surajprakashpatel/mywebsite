import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { thoughts } from "@/data/thoughts";

export default function ThoughtsPreview() {
  const recentThoughts = thoughts.slice(0, 3);

  return (
    <section className="py-20 px-6 border-b border-[#E4E1D8] bg-[#FAF9F5]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              06 // Public Notebook
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#202328] tracking-tight mt-1">
              Recent Thoughts
            </h2>
          </div>
          <Link
            href="/thoughts"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-[#202328] hover:text-[#2B536E] transition-colors"
          >
            <span>Read All Reflections</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentThoughts.map((thought) => (
            <Link
              key={thought.slug}
              href={`/thoughts/${thought.slug}`}
              className="editorial-card p-7 flex flex-col justify-between group block"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#717A84] font-sans mb-3">
                  <span className="text-[#2B536E] font-medium">{thought.category}</span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <Clock size={12} />
                    <span>{thought.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-normal text-[#202328] group-hover:text-[#2B536E] transition-colors leading-snug mb-3">
                  {thought.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#5A626A] font-light leading-relaxed line-clamp-3">
                  {thought.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#ECEAE3] flex items-center justify-between text-xs font-sans text-[#717A84]">
                <span>{thought.date}</span>
                <span className="inline-flex items-center gap-1 text-[#202328] font-medium group-hover:translate-x-0.5 transition-transform">
                  Read Essay <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
