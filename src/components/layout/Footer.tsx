import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, InstagramIcon } from "@/components/shared/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#EFECE6] border-t border-[#E4E1D8] pt-16 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E4E1D8]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-light tracking-tight text-[#202328]">
                Suraj Prakash Patel
              </span>
            </Link>
            <p className="text-sm font-sans text-[#5A626A] font-light max-w-sm leading-relaxed">
              Entrepreneur. Technologist. Curious by nature. Building software, exploring ideas, and figuring out the world along the way.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#717A84]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
              <span>Based in Raigarh & Bhilai, Chhattisgarh, India</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#202328]">
              Main Pages
            </h4>
            <ul className="space-y-2 text-sm text-[#5A626A]">
              <li>
                <Link href="/" className="hover:text-[#202328] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#202328] transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/journey" className="hover:text-[#202328] transition-colors">
                  My Journey
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#202328] transition-colors">
                  My Work & Ventures
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#202328] transition-colors">
                  Projects & Portfolio
                </Link>
              </li>
              <li>
                <Link href="/thoughts" className="hover:text-[#202328] transition-colors">
                  Thoughts & Notebook
                </Link>
              </li>
              <li>
                <Link href="/life" className="hover:text-[#202328] transition-colors">
                  Beyond Work (Life)
                </Link>
              </li>
              <li>
                <Link href="/now" className="hover:text-[#202328] transition-colors">
                  Now Page
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#202328] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ventures & Creations Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#202328]">
              Ventures & Initiatives
            </h4>
            <ul className="space-y-2 text-sm text-[#5A626A]">
              <li>
                <Link
                  href="/projects/kartavya"
                  className="hover:text-[#202328] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Kartavya (GovTech HRMS)</span>
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="hover:text-[#202328] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Curiosity Lab (Product Studio)</span>
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="hover:text-[#202328] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Cosmobyte Technologies</span>
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/reverse-auction"
                  className="hover:text-[#202328] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Industrial Reverse Auction Engine</span>
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/saral-kar"
                  className="hover:text-[#202328] transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Saral Kar (Civic Tax Platform)</span>
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>

            <div className="pt-4">
              <h5 className="text-xs font-sans font-semibold uppercase tracking-widest text-[#202328] mb-2">
                Connect Directly
              </h5>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:suraj@curiositylab.in"
                  className="p-2 bg-[#FFFFFF] border border-[#E4E1D8] text-[#5A626A] hover:text-[#202328] hover:border-[#202328] transition-colors"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#FFFFFF] border border-[#E4E1D8] text-[#5A626A] hover:text-[#202328] hover:border-[#202328] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#FFFFFF] border border-[#E4E1D8] text-[#5A626A] hover:text-[#202328] hover:border-[#202328] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#FFFFFF] border border-[#E4E1D8] text-[#5A626A] hover:text-[#202328] hover:border-[#202328] transition-colors"
                  aria-label="X (Twitter)"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#FFFFFF] border border-[#E4E1D8] text-[#5A626A] hover:text-[#202328] hover:border-[#202328] transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#717A84] gap-4">
          <p>© {currentYear} Suraj Prakash Patel. All rights reserved.</p>
          <p className="font-serif italic text-neutral-500">
            &ldquo;Building things with curiosity, exploring ideas, and figuring out the world along the way.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
