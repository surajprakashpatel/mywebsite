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
      setScrolled(window.scrollY > 15);
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
            ? "py-3 bg-white/80 backdrop-blur-xl border-b border-neutral-200/70 shadow-[0_1px_10px_rgba(0,0,0,0.03)]"
            : "py-4 bg-white/60 backdrop-blur-md border-b border-neutral-100"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-sans text-sm sm:text-base font-semibold tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors">
              SURAJ PRAKASH PATEL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
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
                    "px-3 py-1.5 text-xs font-sans font-medium tracking-normal transition-all rounded-full",
                    isActive
                      ? "text-neutral-900 bg-neutral-100"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-xs font-sans font-medium px-4 py-1.5 bg-neutral-900 text-white hover:bg-neutral-800 rounded-full transition-all shadow-xs"
            >
              <span>Connect</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:bg-neutral-100 rounded-full transition-colors focus:outline-hidden"
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white/95 backdrop-blur-xl border-b border-neutral-200 shadow-xl lg:hidden px-6 py-6"
          >
            <div className="flex flex-col space-y-1">
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
                      "px-3.5 py-2.5 text-sm font-sans tracking-normal transition-colors rounded-xl flex items-center justify-between",
                      isActive
                        ? "text-neutral-900 font-semibold bg-neutral-100"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-neutral-100 flex items-center justify-end">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-1.5 text-xs font-sans font-medium bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors"
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
