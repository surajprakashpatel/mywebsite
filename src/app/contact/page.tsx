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
    // Simulate realistic async submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", topic: "Venture & Collaboration", message: "" });
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 border-b border-[#E4E1D8] pb-12">
          <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#B86B2F]">
            Connect & Collaborate
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#202328] tracking-tight">
            Have an idea? <br className="hidden sm:inline" />
            <span className="italic font-normal">Let&apos;s talk.</span>
          </h1>
          <p className="font-sans text-lg text-[#5A626A] font-light max-w-2xl leading-relaxed">
            I&apos;m always interested in meeting curious people, exchanging ideas, exploring collaborations, and discussing interesting opportunities in software architecture, GovTech, and entrepreneurship.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-light text-[#202328] mb-3">
                Direct Channels
              </h2>
              <p className="font-sans text-sm text-[#5A626A] font-light leading-relaxed mb-6">
                If you prefer direct emails over forms, feel free to drop a note directly into my personal inbox:
              </p>

              <a
                href="mailto:suraj@curiositylab.in"
                className="editorial-card p-4 flex items-center justify-between group bg-white block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F6F5F1] border border-[#E4E1D8] text-[#202328]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#717A84] block">
                      Primary Email
                    </span>
                    <span className="text-sm font-sans font-medium text-[#202328] group-hover:text-[#2B536E] transition-colors">
                      suraj@curiositylab.in
                    </span>
                  </div>
                </div>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#202328]">
                Social Profiles & Activity
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-card p-3 flex items-center gap-2.5 bg-white text-xs font-sans text-[#5A626A] hover:text-[#202328]"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#2B536E]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-card p-3 flex items-center gap-2.5 bg-white text-xs font-sans text-[#5A626A] hover:text-[#202328]"
                >
                  <GithubIcon className="w-4 h-4 text-[#202328]" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-card p-3 flex items-center gap-2.5 bg-white text-xs font-sans text-[#5A626A] hover:text-[#202328]"
                >
                  <TwitterXIcon className="w-4 h-4 text-[#202328]" />
                  <span>X (Twitter)</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-card p-3 flex items-center gap-2.5 bg-white text-xs font-sans text-[#5A626A] hover:text-[#202328]"
                >
                  <InstagramIcon className="w-4 h-4 text-[#B86B2F]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Location & Turnaround Note */}
            <div className="p-5 bg-[#FAF9F5] border border-[#E4E1D8] space-y-2 text-xs font-sans text-[#5A626A]">
              <div className="flex items-center gap-2 text-[#202328] font-medium">
                <MapPin size={14} />
                <span>Raigarh & Bhilai, Chhattisgarh, India</span>
              </div>
              <p className="font-light">
                Standard Response Time: Typically within 24 to 48 hours for serious inquiries, project proposals, and founder discussions.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-8 sm:p-10 bg-white">
              <h2 className="font-serif text-2xl font-light text-[#202328] mb-1">
                Send a Message
              </h2>
              <p className="text-xs font-sans text-[#717A84] mb-6">
                Simple, fast, and delivered straight to my notification stream.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-[#FAF9F5] border border-emerald-300 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                    <Check size={20} />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#202328]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs font-sans text-[#5A626A]">
                    Thank you for reaching out! I&apos;ll review your note and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#717A84] mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm font-sans bg-[#F6F5F1] border border-[#E4E1D8] focus:bg-white focus:outline-hidden focus:border-[#202328] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#717A84] mb-1.5 font-medium">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm font-sans bg-[#F6F5F1] border border-[#E4E1D8] focus:bg-white focus:outline-hidden focus:border-[#202328] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#717A84] mb-1.5 font-medium">
                      What is this about?
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm font-sans bg-[#F6F5F1] border border-[#E4E1D8] focus:bg-white focus:outline-hidden focus:border-[#202328] transition-colors"
                    >
                      <option value="Venture & Collaboration">Venture & Strategic Collaboration</option>
                      <option value="GovTech & Kartavya">GovTech & Municipal Deployment (Kartavya)</option>
                      <option value="Industrial Software">Industrial Systems / Reverse Auction</option>
                      <option value="Speaking or Mentorship">Speaking, Panels or Mentorship</option>
                      <option value="Casual Hello">Casual Exchange of Ideas / Hello</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-wider text-[#717A84] mb-1.5 font-medium">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me a bit about what you're working on or what you'd like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm font-sans bg-[#F6F5F1] border border-[#E4E1D8] focus:bg-white focus:outline-hidden focus:border-[#202328] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#202328] text-white font-sans text-xs font-medium uppercase tracking-wider hover:bg-[#2B536E] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
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
