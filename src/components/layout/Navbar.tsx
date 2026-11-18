"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Journey", href: "/journey" },
  { name: "Work", href: "/work" },
  { name: "Projects", href: "/projects" },
  { name: "Thoughts", href: "/thoughts" },
  { name: "Life", href: "/life" },
  { name: "Now", href: "/now" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 bg-[#F6F5F1]/90 backdrop-blur-md border-b border-[#E4E1D8]/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "py-5 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-normal tracking-tight text-[#202328] group-hover:text-[#2B536E] transition-colors">
              SURaj<span className="font-serif italic text-[#B86B2F]">.</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] font-sans uppercase tracking-widest text-[#717A84] border-l border-[#E4E1D8] pl-2.5 ml-1">
              Curious by Nature
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 text-xs font-sans tracking-wide transition-all rounded-sm",
                    isActive
                      ? "text-[#202328] font-medium bg-[#EFECE6]"
                      : "text-[#5A626A] hover:text-[#202328] hover:bg-[#EFECE6]/50"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action / Status */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/now"
              className="inline-flex items-center gap-1.5 text-[11px] font-sans tracking-wider uppercase text-[#5A626A] hover:text-[#202328] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Now</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-xs font-sans font-medium px-3.5 py-1.5 bg-[#202328] text-white hover:bg-[#2B536E] transition-colors shadow-xs"
            >
              <span>Connect</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#202328] hover:bg-[#EFECE6] transition-colors focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#F6F5F1] border-b border-[#E4E1D8] shadow-lg lg:hidden px-6 py-6"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-3 py-2 text-sm font-sans tracking-wide transition-colors flex items-center justify-between",
                      isActive
                        ? "text-[#202328] font-medium bg-[#EFECE6]"
                        : "text-[#5A626A] hover:text-[#202328]"
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B86B2F]" />}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-[#E4E1D8] flex items-center justify-between">
                <Link
                  href="/now"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 text-xs text-[#5A626A]"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>See what I&apos;m doing now</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-1.5 text-xs font-sans font-medium bg-[#202328] text-white"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
