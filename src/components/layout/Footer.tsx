import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, InstagramIcon } from "@/components/shared/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50/70 border-t border-neutral-200/80 pt-16 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-200">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-bold text-xl tracking-tight text-neutral-900">
                Suraj Prakash Patel
              </span>
            </Link>
            <p className="text-sm font-normal text-neutral-600 max-w-sm leading-relaxed">
              Entrepreneur. Technologist. Curious by nature. Building software, solving grassroots problems, and figuring out the world along the way.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>Based in Raigarh & Bhilai, Chhattisgarh, India</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link href="/" className="hover:text-neutral-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-neutral-900 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/journey" className="hover:text-neutral-900 transition-colors">
                  My Journey
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-neutral-900 transition-colors">
                  My Work & Ventures
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-neutral-900 transition-colors">
                  Projects & Portfolio
                </Link>
              </li>
              <li>
                <Link href="/thoughts" className="hover:text-neutral-900 transition-colors">
                  Thoughts & Notebook
                </Link>
              </li>
              <li>
                <Link href="/life" className="hover:text-neutral-900 transition-colors">
                  Beyond Work (Life)
                </Link>
              </li>
              <li>
                <Link href="/now" className="hover:text-neutral-900 transition-colors">
                  Now Page
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-neutral-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ventures & Social Column */}
          <div className="md:col-span-4 space-y-5">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                Ventures & Initiatives
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>
                  <Link
                    href="/projects/kartavya"
                    className="hover:text-neutral-900 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Kartavya (GovTech HRMS)</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="hover:text-neutral-900 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Curiosity Lab (Venture Studio)</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/reverse-auction"
                    className="hover:text-neutral-900 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Industrial B2B Auction Engine</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                Channels & Presence
              </h4>
              <div className="flex items-center gap-3 text-neutral-600">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-neutral-200 hover:text-neutral-900 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-neutral-200 hover:text-neutral-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-neutral-200 hover:text-neutral-900 transition-colors"
                  aria-label="Twitter / X"
                >
                  <TwitterXIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-neutral-200 hover:text-neutral-900 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {currentYear} Suraj Prakash Patel. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed with clarity, simplicity, and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
