import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-20 px-6 border-b border-[#E4E1D8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Section Label */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              01 // The Person Behind the Work
            </span>
            <h2 className="font-serif text-3xl font-light text-[#202328] tracking-tight">
              A Little About Me
            </h2>
          </div>

          {/* Intro Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <p className="font-serif text-xl md:text-2xl font-light text-[#202328] leading-relaxed">
              I&apos;m a computer science graduate, entrepreneur, and lifelong explorer of ideas based in Chhattisgarh, India.
            </p>
            <p className="font-sans text-base text-[#5A626A] font-light leading-relaxed">
              My professional journey revolves around building software products, tackling real-world challenges in civic governance and heavy industry, and experimenting with ideas that can make a genuine difference. But I don&apos;t want my life to be defined only by my work. I am equally passionate about understanding people, exploring nature, maintaining physical discipline, and figuring out what makes life meaningful.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#202328] hover:text-[#2B536E] transition-colors group"
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
