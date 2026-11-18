import Link from "next/link";
import { ArrowRight, BookOpen, Hammer, Compass } from "lucide-react";

export default function CurrentlyExploring() {
  return (
    <section className="py-20 px-6 border-b border-[#E4E1D8]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
                07 // Live Snapshot
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#202328] tracking-tight">
              Currently Exploring
            </h2>
          </div>
          <Link
            href="/now"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-[#202328] hover:text-[#2B536E] transition-colors"
          >
            <span>Read My /now Page</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Building */}
          <div className="editorial-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#2B536E] font-medium mb-3">
                <Hammer size={15} />
                <span>What I&apos;m Building</span>
              </div>
              <h3 className="font-serif text-lg text-[#202328] mb-2">
                Kartavya Civic Scale & Bidding Engine
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5A626A] font-light leading-relaxed">
                Deploying biometric attendance to new municipal wards and upgrading our Go/WebSocket industrial reverse auction engine.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#ECEAE3] text-xs font-sans text-[#717A84]">
              Status: Active Engineering
            </div>
          </div>

          {/* Card 2: Learning */}
          <div className="editorial-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#2B536E] font-medium mb-3">
                <Compass size={15} />
                <span>What I&apos;m Learning</span>
              </div>
              <h3 className="font-serif text-lg text-[#202328] mb-2">
                Distributed Systems & Civic Procurement
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5A626A] font-light leading-relaxed">
                Raft consensus algorithms, Go microservices, and deep-dive negotiation strategies for multi-year public sector contracts.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#ECEAE3] text-xs font-sans text-[#717A84]">
              Focus: High-concurrency systems
            </div>
          </div>

          {/* Card 3: Reading */}
          <div className="editorial-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#2B536E] font-medium mb-3">
                <BookOpen size={15} />
                <span>What I&apos;m Reading</span>
              </div>
              <h3 className="font-serif text-lg text-[#202328] mb-2">
                Principles by Ray Dalio
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5A626A] font-light leading-relaxed">
                Studying algorithmic decision systems, radical truth, and designing organizations as clear machines.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#ECEAE3] text-xs font-sans text-[#717A84]">
              Format: Hardcover & Margin Notes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
