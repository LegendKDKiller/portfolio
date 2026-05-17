"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-2xl border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <Terminal size={16} className="text-primary" />
          <span className="font-mono text-sm font-medium tracking-widest text-foreground">
            KD<span className="text-primary animate-pulse">_</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-xs font-mono tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              <span className="text-primary opacity-40 mr-1">{String(i + 1).padStart(2, "0")}.</span>
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="/Karim-Daaboul-CV.pdf"
            className="relative overflow-hidden rounded border border-primary/40 px-5 py-2 text-xs font-mono tracking-widest text-primary uppercase transition-all hover:border-primary hover:bg-primary/10 hover:glow-red"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-xs tracking-widest text-muted-foreground uppercase hover:text-primary transition-colors"
                >
                  <span className="text-primary/40 mr-2">{String(i + 1).padStart(2, "0")}.</span>
                  {link.label}
                </a>
              ))}
              <a
                href="/Karim-Daaboul-CV.pdf"
                className="w-fit rounded border border-primary/40 px-5 py-2 text-xs font-mono tracking-widest text-primary uppercase"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
