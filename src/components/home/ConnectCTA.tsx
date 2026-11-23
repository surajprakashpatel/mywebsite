import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function ConnectCTA() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto rounded-3xl bg-neutral-900 text-white p-10 sm:p-14 md:p-16 text-center shadow-xl space-y-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Open Channels
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Have an idea? Let&apos;s talk.
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 font-normal max-w-xl mx-auto leading-relaxed">
          I&apos;m always interested in meeting curious people, exchanging ideas, exploring collaborations, and discussing opportunities in GovTech, software architecture, and entrepreneurship.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-900 font-sans text-sm font-semibold hover:bg-neutral-100 transition-all shadow-sm group"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:suraj@curiositylab.in"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neutral-800 border border-neutral-700 text-white font-sans text-sm font-medium hover:bg-neutral-700 transition-all"
          >
            <Mail size={15} className="text-neutral-400" />
            <span>suraj@curiositylab.in</span>
          </a>
        </div>

        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-neutral-400">
          <MapPin size={13} />
          <span>Raigarh & Bhilai, Chhattisgarh, India • Replies typically within 24 hours</span>
        </div>
      </div>
    </section>
  );
}
