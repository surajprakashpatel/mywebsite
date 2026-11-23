import { Sparkles } from "lucide-react";

export default function PhilosophyQuote() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white border-b border-neutral-200/70">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium">
          <Sparkles size={13} className="text-amber-600" />
          <span>Core Guiding Principle</span>
        </div>

        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-900 leading-snug tracking-tight max-w-3xl mx-auto">
          &ldquo;The true test of technology is simplicity. The true test of a person is living with purpose, staying curious, and doing what is right even when no one is watching.&rdquo;
        </blockquote>

        <div className="pt-2">
          <p className="text-sm font-semibold text-neutral-900 tracking-wide">
            Suraj Prakash Patel
          </p>
          <p className="text-xs text-neutral-500 font-normal mt-0.5">
            Founder of Curiosity Lab & Kartavya
          </p>
        </div>
      </div>
    </section>
  );
}
