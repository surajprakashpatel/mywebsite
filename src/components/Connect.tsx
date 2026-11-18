"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check, Send } from "lucide-react";

export default function Connect() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    category: "Invest/Partner",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", category: "Invest/Partner", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="connect" className="relative py-24 md:py-32 px-6 bg-obsidian-950 border-t border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Context & Direct Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[11px] tracking-widest uppercase text-neutral-500 font-sans font-medium">
                  05 // Connect
                </span>
                <div className="h-[1px] w-12 bg-white/[0.06]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight mb-6">
                Let's align on <span className="italic">what matters.</span>
              </h2>
              <p className="text-sm md:text-base text-neutral-400 font-sans font-light leading-relaxed max-w-sm">
                If you are looking to deploy high-trust software in traditional industries, invest in civic infrastructure projects, or discuss architecture—reach out directly.
              </p>
            </div>

            {/* Outreach Info Categories */}
            <div className="space-y-4">
              <div className="p-4 border border-white/[0.04] bg-white/[0.01] space-y-1">
                <h4 className="text-xs font-mono text-white uppercase tracking-wider">Invest / Partner</h4>
                <p className="text-xs text-neutral-400 font-sans font-light">
                  Discuss strategic capital, joint ventures, and municipal rollouts.
                </p>
              </div>

              <div className="p-4 border border-white/[0.04] bg-white/[0.01] space-y-1">
                <h4 className="text-xs font-mono text-white uppercase tracking-wider">Technical Collaboration</h4>
                <p className="text-xs text-neutral-400 font-sans font-light">
                  Explore integrations, IoT controller firmware, or low-latency architecture.
                </p>
              </div>

              <div className="p-4 border border-white/[0.04] bg-white/[0.01] space-y-1">
                <h4 className="text-xs font-mono text-white uppercase tracking-wider">Speaking & Advisory</h4>
                <p className="text-xs text-neutral-400 font-sans font-light">
                  Consultation on GovTech transparency frameworks and industrial safety models.
                </p>
              </div>
            </div>

            {/* Direct Email Link */}
            <div className="pt-4">
              <a
                href="mailto:hello@surajpatel.com"
                className="inline-flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors group font-sans tracking-wide"
              >
                <div className="p-2 border border-white/[0.06] bg-white/[0.01]">
                  <Mail size={16} />
                </div>
                <span>hello@surajpatel.com</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0" />
              </a>
            </div>
          </div>

          {/* Right Column - Minimalist Form */}
          <div className="lg:col-span-7">
            <div className="p-8 border border-white/[0.04] bg-white/[0.01] relative overflow-hidden bento-glow">
              <div className="absolute inset-0 bg-radial from-white/[0.005] to-transparent pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] tracking-widest uppercase text-neutral-400 font-sans">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-obsidian-950 border border-white/[0.06] focus:border-white/30 text-white placeholder-neutral-600 px-4 py-3 text-sm rounded-none focus:outline-none transition-all font-sans"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] tracking-widest uppercase text-neutral-400 font-sans">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-obsidian-950 border border-white/[0.06] focus:border-white/30 text-white placeholder-neutral-600 px-4 py-3 text-sm rounded-none focus:outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div className="space-y-2">
                  <label htmlFor="category" className="text-[10px] tracking-widest uppercase text-neutral-400 font-sans">
                    Collaboration Focus
                  </label>
                  <select
                    id="category"
                    value={formState.category}
                    onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                    className="w-full bg-obsidian-950 border border-white/[0.06] focus:border-white/30 text-white px-4 py-3 text-sm rounded-none focus:outline-none transition-all font-sans"
                  >
                    <option value="Invest/Partner">Invest / Partner</option>
                    <option value="Technical Collaboration">Technical Collaboration</option>
                    <option value="Speaking/Advisory">Speaking / Advisory</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] tracking-widest uppercase text-neutral-400 font-sans">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly state your thesis, timeline, or project inquiry..."
                    className="w-full bg-obsidian-950 border border-white/[0.06] focus:border-white/30 text-white placeholder-neutral-600 px-4 py-3 text-sm rounded-none focus:outline-none transition-all font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full group flex items-center justify-center gap-2 py-3 bg-white text-black font-sans text-sm font-medium tracking-wide hover:bg-neutral-200 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed transition-all duration-300 rounded-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span>Transmitting...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check size={16} />
                      <span>Message Received</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Transmission</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Monogram & Copyright */}
        <div className="mt-24 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-sans tracking-widest text-neutral-500 uppercase">
            © {new Date().getFullYear()} SURAJ PRAKASH PATEL. BUILD HARDWARE, SCALE SOFTWARE.
          </p>
          <div className="flex gap-6 text-[10px] font-sans tracking-wider text-neutral-500 uppercase">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-white transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
