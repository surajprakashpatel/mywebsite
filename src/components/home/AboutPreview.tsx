import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-24 px-6 border-b border-neutral-200/70 bg-neutral-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Section Label */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              01 • About Me
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              The person behind the work.
            </h2>
          </div>

          {/* Intro Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-xl md:text-2xl font-normal text-neutral-900 leading-relaxed tracking-tight">
              I&apos;m a computer science graduate, entrepreneur, and lifelong explorer of ideas based in Chhattisgarh, India.
            </p>
            <p className="text-base text-neutral-600 font-normal leading-relaxed">
              My professional journey revolves around building software products, tackling real-world challenges in civic governance and heavy industry, and experimenting with ideas that can make a genuine difference. But I don&apos;t want my life to be defined only by my work. I am equally passionate about understanding people, exploring nature, maintaining physical discipline in the gym, and figuring out what makes life meaningful.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-blue-600 transition-colors group"
              >
                <span>Read my full story, values & background</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
