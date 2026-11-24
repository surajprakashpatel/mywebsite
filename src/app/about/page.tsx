import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Biography, personal philosophy, strengths, weaknesses, and what makes Suraj Prakash Patel tick. Entrepreneur, technologist, and lifelong explorer of ideas.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="space-y-4 border-b border-neutral-200/70 pb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Biography & Core Values
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Getting to know the person <br className="hidden sm:inline" />
            <span className="text-neutral-500 font-normal">behind the work.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal max-w-2xl leading-relaxed">
            I don&apos;t believe in corporate buzzwords or artificial posturing. Here is an honest account of who I am, where I come from, what drives me, and what I&apos;m trying to build.
          </p>
        </div>

        {/* Narrative & Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7 space-y-6 text-neutral-600 font-normal leading-relaxed text-base">
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Who I Am
            </h2>
            <p>
              I&apos;m Suraj Prakash Patel, a computer science graduate, entrepreneur, and lifelong explorer of ideas based in Chhattisgarh, India.
            </p>
            <p>
              From my earliest memories growing up in Raigarh—an industrial city surrounded by steel plants, rail tracks, and ancient forests—I was intensely curious about how things work. Why do machines run the way they do? How do large organizations coordinate thousands of people? And how does software transform abstract mathematical logic into physical leverage?
            </p>
            <p>
              My professional journey revolves around building software products, tackling real-world operational challenges, and experimenting with ideas that can make a genuine difference.
            </p>
            <p>
              But I don&apos;t want my life to be defined only by my work. I am equally fascinated by understanding human behavior, exploring nature, maintaining physical discipline in the gym, motorcycling along open highways, and figuring out what makes life meaningful.
            </p>
          </div>

          <div className="md:col-span-5 space-y-4">
            <div className="rounded-3xl bg-white border border-neutral-200/80 p-3 shadow-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-100 flex items-end justify-center">
                <Image
                  src="/images/photo.png"
                  alt="Suraj Prakash Patel"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain object-bottom pt-3 hover:scale-102 transition-transform duration-700"
                />
              </div>
              <p className="text-xs text-neutral-500 font-medium text-center mt-3">
                Suraj Prakash Patel — Founder, Curiosity Lab & Kartavya
              </p>
            </div>

            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200/70 text-xs text-neutral-600 space-y-1.5">
              <p className="font-semibold text-neutral-900">Quick Facts:</p>
              <p>• Location: Raigarh / Bhilai, CG, India</p>
              <p>• Degree: B.Tech in Computer Science</p>
              <p>• Ventures: Curiosity Lab, Kartavya, Cosmobyte</p>
            </div>
          </div>
        </div>

        {/* Section: Educational Background */}
        <div className="rounded-2xl bg-neutral-50/60 border border-neutral-200/80 p-8 md:p-10 space-y-4 shadow-xs">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Foundational Rigor
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Educational Background
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            <p>
              I hold a <strong className="text-neutral-900 font-semibold">B.Tech in Computer Science and Engineering</strong>. While the formal curriculum provided foundational rigor in data structures, algorithms, database normalization, and operating systems, my real education took place late at night tinkering with live servers, deploying web architectures, and reading technical RFCs.
            </p>
            <p>
              Prior to college, I served as <strong className="text-neutral-900 font-semibold">School Headboy and graduated as Academic Topper</strong> in 2020. That period taught me early on that intellectual aptitude is meaningless without discipline, organizational leadership, and the courage to take ownership of group outcomes.
            </p>
          </div>
        </div>

        {/* Section: Personality & Core Pillars */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Operating System
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mt-1">
              My Personality & Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-3 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                1. Relentless Curiosity
              </h3>
              <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                I never accept &ldquo;that&apos;s just how things are done.&rdquo; Whether dissecting how a municipal tax formula functions or why a distributed database stalls under write load, I need to know the fundamental mechanics.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-3 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                2. Bias Toward Experimentation
              </h3>
              <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                Theorizing endlessly is a trap. I prefer shipping small, practical prototypes into the real world within 48 hours to let user reality give immediate feedback.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-3 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                3. Fierce Independence
              </h3>
              <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                I chose to build independent ventures in Chhattisgarh rather than following the safe, pre-scripted corporate route to a metropolitan tech hub. Thinking independently is uncomfortable, but it creates unique perspectives.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-3 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                4. Grounded Ambition
              </h3>
              <p className="text-sm text-neutral-600 font-normal leading-relaxed">
                My ambition is not about vanity metrics or artificial hype. It is about building enduring institutions and software systems that quietly run the infrastructure of everyday life for decades.
              </p>
            </div>
          </div>
        </div>

        {/* Section: What I Believe In */}
        <div className="border-y border-neutral-200/70 py-12 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Convictions
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
            What I Believe In
          </h2>
          <div className="space-y-4 text-base text-neutral-600 font-normal leading-relaxed">
            <p>
              • <strong className="text-neutral-900 font-semibold">Technology Should Be Invisible:</strong> The best software doesn&apos;t demand attention; it quietly eliminates friction in the background, freeing people to focus on their actual work.
            </p>
            <p>
              • <strong className="text-neutral-900 font-semibold">Curiosity Over Cynicism:</strong> Cynics sound smart, but builders create the future. Staying curious keeps you open to opportunities that cynical experts dismiss.
            </p>
            <p>
              • <strong className="text-neutral-900 font-semibold">Long-Term Compounding:</strong> Everything of durable value—reputation, knowledge, relationships, fitness, and capital—compounds slowly over decades. Quick shortcuts always carry hidden, toxic debt.
            </p>
            <p>
              • <strong className="text-neutral-900 font-semibold">Empathy for the Ground User:</strong> If a field worker with no technical background struggles to use your application, it is your software that is defective, not the user.
            </p>
          </div>
        </div>

        {/* Section: Strengths and Weaknesses */}
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Honest Self-Assessment
          </span>
          <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
            Strengths & Weaknesses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-4 shadow-xs">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                My Strengths
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-600 font-normal">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-900 font-medium">High agency & speed:</strong> I don&apos;t wait for permission or perfect conditions to start building.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-900 font-medium">First-principles systems thinking:</strong> Translating chaotic offline processes into clean relational data models.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-900 font-medium">Physical & mental stamina:</strong> Relentless consistency, whether in gym compound lifts or debugging production crashes.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 space-y-4 shadow-xs">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                Areas I&apos;m Working On
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-600 font-normal">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">•</span>
                  <span><strong className="text-neutral-900 font-medium">Patience with slow bureaucracies:</strong> I naturally want things to move fast, but institutional change requires slow, diplomatic persistence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">•</span>
                  <span><strong className="text-neutral-900 font-medium">Delegation:</strong> As an architect who loves writing code, learning to trust others with critical modules is an active area of leadership growth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">•</span>
                  <span><strong className="text-neutral-900 font-medium">Self-promotion:</strong> I historically preferred letting code speak for itself, but building businesses requires storytelling and public voice.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: What I'm Trying to Become */}
        <div className="rounded-3xl bg-neutral-900 text-white p-8 md:p-12 space-y-6 shadow-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            The Horizon
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            What I&apos;m Trying to Become
          </h2>
          <div className="space-y-4 text-base text-neutral-300 font-normal leading-relaxed">
            <p>
              I am transitioning from being just an individual software engineer to becoming a thoughtful founder, systems architect, and institutional builder.
            </p>
            <p>
              I want to build software companies that solve genuine, unglamorous problems—in civic governance, healthcare, manufacturing logistics, and education—proving that world-class technology ventures can be founded, grown, and sustained right out of tier-2 India.
            </p>
            <p>
              Most of all, I want to lead an examined, curious life: one where I never lose the wonder of looking at a complex problem and asking, <em className="text-white">&ldquo;How does this work, and how can we make it better?&rdquo;</em>
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-neutral-800">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
            >
              <span>Explore my chronological journey</span>
              <ArrowRight size={15} />
            </Link>
            <span className="text-neutral-600">•</span>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
            >
              <span>Review my companies & ventures</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
