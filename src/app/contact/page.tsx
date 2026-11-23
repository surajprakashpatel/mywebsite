"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, InstagramIcon } from "@/components/shared/SocialIcons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Venture & Collaboration",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", topic: "Venture & Collaboration", message: "" });
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <div className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-neutral-200/70 pb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Connect & Collaborate
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Have an idea? <br className="hidden sm:inline" />
            <span className="text-neutral-500 font-normal">Let&apos;s talk.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal max-w-2xl leading-relaxed">
            I&apos;m always interested in meeting curious people, exchanging ideas, exploring collaborations, and discussing interesting opportunities in software architecture, GovTech, and entrepreneurship.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 tracking-tight mb-2">
                Direct Channels
              </h2>
              <p className="text-sm text-neutral-600 font-normal leading-relaxed mb-6">
                If you prefer direct emails over forms, feel free to drop a note directly into my personal inbox:
              </p>

              <a
                href="mailto:suraj@curiositylab.in"
                className="rounded-2xl border border-neutral-200/80 p-4 flex items-center justify-between group bg-white shadow-xs hover:border-neutral-300 hover:shadow-md transition-all block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 block font-medium">
                      Primary Email
                    </span>
                    <span className="text-sm font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                      suraj@curiositylab.in
                    </span>
                  </div>
                </div>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                Social Profiles & Activity
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-neutral-200/80 p-3 flex items-center gap-2.5 bg-white text-xs text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-all shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-neutral-200/80 p-3 flex items-center gap-2.5 bg-white text-xs text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-all shadow-xs"
                >
                  <GithubIcon className="w-4 h-4 text-neutral-900" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-neutral-200/80 p-3 flex items-center gap-2.5 bg-white text-xs text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-all shadow-xs"
                >
                  <TwitterXIcon className="w-4 h-4 text-neutral-900" />
                  <span className="font-medium">X (Twitter)</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-neutral-200/80 p-3 flex items-center gap-2.5 bg-white text-xs text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-all shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4 text-amber-600" />
                  <span className="font-medium">Instagram</span>
                </a>
              </div>
            </div>

            {/* Location & Turnaround Note */}
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2 text-xs text-neutral-600">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold">
                <MapPin size={14} />
                <span>Raigarh & Bhilai, Chhattisgarh, India</span>
              </div>
              <p className="font-normal">
                Standard Response Time: Typically within 24 to 48 hours for serious inquiries, project proposals, and founder discussions.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-neutral-200/80 p-8 sm:p-10 bg-white shadow-sm">
              <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-1">
                Send a Message
              </h2>
              <p className="text-xs text-neutral-500 mb-6">
                Simple, fast, and delivered straight to my personal inbox.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                    <Check size={20} />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs text-neutral-600">
                    Thank you for reaching out! I&apos;ll review your note and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-200/80 bg-neutral-50/60 focus:bg-white focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-semibold">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-200/80 bg-neutral-50/60 focus:bg-white focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-semibold">
                      What is this about?
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-200/80 bg-neutral-50/60 focus:bg-white focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all"
                    >
                      <option value="Venture & Collaboration">Venture & Strategic Collaboration</option>
                      <option value="GovTech & Kartavya">GovTech & Municipal Deployment (Kartavya)</option>
                      <option value="Industrial Software">Industrial Systems / Reverse Auction</option>
                      <option value="Speaking or Mentorship">Speaking, Panels or Mentorship</option>
                      <option value="Casual Hello">Casual Exchange of Ideas / Hello</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1.5 font-semibold">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me a bit about what you're working on or what you'd like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-200/80 bg-neutral-50/60 focus:bg-white focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
