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
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="space-y-4 border-b border-[#E4E1D8] pb-12">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Biography & Core Values
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#202328] tracking-tight">
            Getting to know the person <br className="hidden sm:inline" />
            <span className="italic font-normal">behind the work.</span>
          </h1>
          <p className="font-sans text-lg text-[#5A626A] font-light max-w-2xl leading-relaxed">
            I don&apos;t believe in corporate buzzwords or polished bios. Here is an honest account of who I am, where I come from, what drives me, and what I&apos;m trying to become.
          </p>
        </div>

        {/* Narrative & Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-6 text-[#202328] font-sans font-light leading-relaxed">
            <h2 className="font-serif text-2xl font-normal text-[#202328]">
              Who I Am
            </h2>
            <p>
              I&apos;m Suraj Prakash Patel, a computer science graduate, entrepreneur, and lifelong explorer of ideas based in Chhattisgarh, India.
            </p>
            <p>
              From my earliest memories growing up in Raigarh—an industrial city surrounded by steel plants, rail tracks, and ancient forests—I was intensely curious about how things work. Why do machines run the way they do? How do large organizations coordinate thousands of people? And how does software transform abstract mathematical logic into physical, everyday leverage?
            </p>
            <p>
              My professional journey revolves around building software products, working on real-world operational challenges, and experimenting with ideas that can make a genuine difference.
            </p>
            <p>
              But I don&apos;t want my life to be defined only by my work. I am equally fascinated by understanding human behavior, exploring nature, maintaining physical discipline in the gym, motorcycling along open highways, and figuring out what makes life meaningful.
            </p>
          </div>

          <div className="md:col-span-5 space-y-4">
            <div className="editorial-card p-3 bg-white">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EFECE6]">
                <Image
                  src="/images/founder_portrait.png"
                  alt="Suraj Prakash Patel"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <p className="text-xs text-[#717A84] font-sans text-center mt-3 italic">
                Suraj Prakash Patel — Founder, Curiosity Lab & Kartavya
              </p>
            </div>

            <div className="p-4 bg-[#EFECE6]/50 border border-[#E4E1D8] text-xs font-sans text-[#5A626A] space-y-1">
              <p className="font-medium text-[#202328]">Quick Facts:</p>
              <p>• Location: Raigarh / Bhilai, CG, India</p>
              <p>• Degree: B.Tech in Computer Science</p>
              <p>• Ventures: Curiosity Lab, Kartavya, Cosmobyte</p>
            </div>
          </div>
        </div>

        {/* Section: Educational Background */}
        <div className="editorial-card p-8 md:p-10 space-y-6">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Foundational Rigor
          </span>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            Educational Background
          </h2>
          <div className="space-y-4 text-sm sm:text-base font-sans text-[#5A626A] font-light leading-relaxed">
            <p>
              I hold a <strong>B.Tech in Computer Science and Engineering</strong>. While the formal curriculum provided foundational rigor in data structures, algorithms, database normalization, and operating systems, my real education took place late at night tinkering with live servers, deploying web architectures, and reading technical RFCs.
            </p>
            <p>
              Prior to college, I served as <strong>School Headboy and graduated as Academic Topper</strong> in 2020. That period taught me early on that intellectual aptitude is meaningless without discipline, organizational leadership, and the courage to take ownership of group outcomes.
            </p>
          </div>
        </div>

        {/* Section: Personality & Core Pillars */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
              Operating System
            </span>
            <h2 className="font-serif text-3xl font-light text-[#202328] mt-1">
              My Personality & Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="editorial-card p-6 space-y-3">
              <h3 className="font-serif text-xl font-normal text-[#202328]">
                1. Relentless Curiosity
              </h3>
              <p className="text-sm font-sans text-[#5A626A] font-light leading-relaxed">
                I never accept &ldquo;that&apos;s just how things are done.&rdquo; Whether dissecting how a municipal tax formula functions or why a distributed database stalls under write load, I need to know the fundamental mechanics.
              </p>
            </div>

            <div className="editorial-card p-6 space-y-3">
              <h3 className="font-serif text-xl font-normal text-[#202328]">
                2. Bias Toward Experimentation
              </h3>
              <p className="text-sm font-sans text-[#5A626A] font-light leading-relaxed">
                Theorizing endlessly is a trap. I prefer shipping small, imperfect prototypes into the real world within 48 hours to let user reality give immediate feedback.
              </p>
            </div>

            <div className="editorial-card p-6 space-y-3">
              <h3 className="font-serif text-xl font-normal text-[#202328]">
                3. Fierce Independence
              </h3>
              <p className="text-sm font-sans text-[#5A626A] font-light leading-relaxed">
                I chose to build independent ventures in Chhattisgarh rather than following the safe, pre-scripted corporate route to a metropolitan tech hub. Thinking independently is uncomfortable, but it creates unique perspectives.
              </p>
            </div>

            <div className="editorial-card p-6 space-y-3">
              <h3 className="font-serif text-xl font-normal text-[#202328]">
                4. Grounded Ambition
              </h3>
              <p className="text-sm font-sans text-[#5A626A] font-light leading-relaxed">
                My ambition is not about vanity metrics or artificial hype. It is about building enduring institutions and software systems that quietly run the infrastructure of everyday life for decades.
              </p>
            </div>
          </div>
        </div>

        {/* Section: What I Believe In */}
        <div className="border-y border-[#E4E1D8] py-12 space-y-6">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Convictions
          </span>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            What I Believe In
          </h2>
          <div className="space-y-4 font-sans text-base text-[#5A626A] font-light leading-relaxed">
            <p>
              • <strong>Technology Should Be Invisible:</strong> The best software doesn&apos;t demand attention; it quietly eliminates friction in the background, freeing people to focus on their actual work.
            </p>
            <p>
              • <strong>Curiosity Over Cynicism:</strong> Cynics sound smart, but builders create the future. Staying curious keeps you open to opportunities that cynical experts dismiss.
            </p>
            <p>
              • <strong>Long-Term Compounding:</strong> Everything of durable value—reputation, knowledge, relationships, fitness, and capital—compounds slowly over decades. Quick shortcuts always carry hidden, toxic debt.
            </p>
            <p>
              • <strong>Empathy for the Ground User:</strong> If a field worker with no technical background struggles to use your application, it is your software that is defective, not the user.
            </p>
          </div>
        </div>

        {/* Section: Strengths and Weaknesses */}
        <div className="space-y-6">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Honest Self-Assessment
          </span>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            Strengths & Weaknesses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="editorial-card p-6 space-y-4 bg-white border-l-4 border-l-[#2B536E]">
              <h3 className="font-serif text-xl text-[#202328]">My Strengths</h3>
              <ul className="space-y-2 text-sm font-sans text-[#5A626A] font-light">
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>High agency & speed:</strong> I don&apos;t wait for permission or perfect conditions to start building.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>First-principles systems thinking:</strong> Translating chaotic offline processes into clean relational data models.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Physical & mental stamina:</strong> Relentless consistency, whether in gym compound lifts or debugging production crashes.</span>
                </li>
              </ul>
            </div>

            <div className="editorial-card p-6 space-y-4 bg-white border-l-4 border-l-[#B86B2F]">
              <h3 className="font-serif text-xl text-[#202328]">Areas I&apos;m Working On</h3>
              <ul className="space-y-2 text-sm font-sans text-[#5A626A] font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#B86B2F] font-bold shrink-0 mt-0.5">•</span>
                  <span><strong>Patience with slow bureaucracies:</strong> I naturally want things to move fast, but institutional change requires slow, diplomatic persistence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B86B2F] font-bold shrink-0 mt-0.5">•</span>
                  <span><strong>Delegation:</strong> As an architect who loves writing code, learning to trust others with critical modules is an active area of leadership growth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B86B2F] font-bold shrink-0 mt-0.5">•</span>
                  <span><strong>Self-promotion:</strong> I historically preferred letting code speak for itself, but building businesses requires storytelling and public voice.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: What I'm Trying to Become */}
        <div className="editorial-card p-8 md:p-10 space-y-6 bg-[#FAF9F5]">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            The Horizon
          </span>
          <h2 className="font-serif text-3xl font-light text-[#202328]">
            What I&apos;m Trying to Become
          </h2>
          <div className="space-y-4 font-sans text-base text-[#5A626A] font-light leading-relaxed">
            <p>
              I am transitioning from being just an individual software engineer to becoming a thoughtful founder, systems architect, and institutional builder.
            </p>
            <p>
              I want to build software companies that solve genuine, unglamorous problems—in civic governance, healthcare, manufacturing logistics, and education—proving that world-class technology ventures can be founded, grown, and sustained right out of tier-2 India.
            </p>
            <p>
              Most of all, I want to lead an examined, curious life: one where I never lose the wonder of looking at a complex problem and asking, <em>&ldquo;How does this work, and how can we make it better?&rdquo;</em>
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[#ECEAE3]">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#202328] hover:text-[#2B536E] transition-colors"
            >
              <span>Explore my chronological journey</span>
              <ArrowRight size={15} />
            </Link>
            <span className="text-[#E4E1D8]">•</span>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#202328] hover:text-[#2B536E] transition-colors"
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
