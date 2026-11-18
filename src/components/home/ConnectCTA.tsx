import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function ConnectCTA() {
  return (
    <section className="py-24 px-6 bg-[#FAF9F5]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
          08 // Open Channels
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#202328] tracking-tight">
          Have an idea? Let&apos;s talk.
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#5A626A] font-light max-w-xl mx-auto leading-relaxed">
          I&apos;m always interested in meeting curious people, exchanging ideas, exploring collaborations, and discussing opportunities in GovTech, software architecture, and entrepreneurship.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#202328] text-white font-sans text-sm font-medium hover:bg-[#2B536E] transition-colors shadow-xs group"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:suraj@curiositylab.in"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FFFFFF] border border-[#E4E1D8] text-[#202328] font-sans text-sm font-medium hover:bg-[#EFECE6] transition-colors"
          >
            <Mail size={15} className="text-[#5A626A]" />
            <span>suraj@curiositylab.in</span>
          </a>
        </div>

        <div className="pt-6 flex items-center justify-center gap-2 text-xs font-sans text-[#717A84]">
          <MapPin size={13} />
          <span>Raigarh & Bhilai, Chhattisgarh, India • Replies typically within 24 hours</span>
        </div>
      </div>
    </section>
  );
}
