import Link from "next/link";
import { ArrowRight, BookOpen, Hammer, Compass } from "lucide-react";

export default function CurrentlyExploring() {
  return (
    <section className="py-20 md:py-24 px-6 border-b border-neutral-200/70 bg-neutral-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                07 • Live Status
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
              Currently Exploring
            </h2>
          </div>
          <Link
            href="/now"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-900 hover:text-blue-600 transition-colors"
          >
            <span>Read My /now Page</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Building */}
          <div className="rounded-2xl bg-white border border-neutral-200/80 p-7 flex flex-col justify-between shadow-xs hover:border-neutral-300 hover:shadow-md transition-all">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
                <Hammer size={15} />
                <span>What I&apos;m Building</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2 tracking-tight">
                Kartavya Civic Scale & Bidding Engine
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                Deploying biometric attendance to new municipal wards and upgrading our Go/WebSocket industrial reverse auction engine.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-100 text-xs font-medium text-neutral-500">
              Status: Active Engineering
            </div>
          </div>

          {/* Card 2: Learning */}
          <div className="rounded-2xl bg-white border border-neutral-200/80 p-7 flex flex-col justify-between shadow-xs hover:border-neutral-300 hover:shadow-md transition-all">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
                <Compass size={15} />
                <span>What I&apos;m Learning</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2 tracking-tight">
                Distributed Systems & Public Procurement
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                Raft consensus algorithms, Go microservices, and deep-dive negotiation strategies for multi-year public sector contracts.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-100 text-xs font-medium text-neutral-500">
              Focus: High-concurrency systems
            </div>
          </div>

          {/* Card 3: Reading */}
          <div className="rounded-2xl bg-white border border-neutral-200/80 p-7 flex flex-col justify-between shadow-xs hover:border-neutral-300 hover:shadow-md transition-all">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
                <BookOpen size={15} />
                <span>What I&apos;m Reading</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2 tracking-tight">
                Principles by Ray Dalio
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                Studying algorithmic decision systems, radical truth, and designing organizations as clear, self-correcting machines.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-neutral-100 text-xs font-medium text-neutral-500">
              Format: Hardcover & Margin Notes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
