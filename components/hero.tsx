"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, ArrowDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const roles = [
  "Cybersecurity Engineer",
  "AI Security Researcher",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2400);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section className="grid-bg relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute left-[15%] top-[20%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="animate-float-delay absolute right-[10%] bottom-[15%] h-[400px] w-[400px] rounded-full bg-accent/4 blur-[100px]" />
      </div>

      {/* Corner accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-6 h-16 w-16 border-t border-l border-primary/20" />
        <div className="absolute top-24 right-6 h-16 w-16 border-t border-r border-primary/20" />
        <div className="absolute bottom-8 left-6 h-16 w-16 border-b border-l border-primary/20" />
        <div className="absolute bottom-8 right-6 h-16 w-16 border-b border-r border-primary/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl pt-28">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-20">

          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                Open to Research & Internships
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="mb-2 text-6xl font-extrabold leading-none tracking-tight text-foreground md:text-8xl">
                Karim
              </h1>
              <h1 className="mb-8 text-6xl font-extrabold leading-none tracking-tight md:text-8xl">
                <span className="text-primary text-glow glitch" data-text="Daaboul">Daaboul</span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6 flex items-center gap-2 justify-center lg:justify-start"
            >
              <span className="font-mono text-xs text-primary/50 tracking-widest uppercase">~/role</span>
              <span className="font-mono text-sm text-accent">{displayed}<span className="blink text-primary">▊</span></span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0 mx-auto"
            >
              Computer Engineering student at AUB building AI-driven security systems,
              federated learning pipelines, and offensive security platforms.
              Research contributor and community founder.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="/Karim-Daaboul-CV.pdf"
                className="glow-red inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/5"
              >
                View Projects <ChevronRight size={14} />
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: Mail, href: "mailto:kmd21@mail.aub.edu", label: "Email" },
                { icon: Linkedin, href: "https://linkedin.com/in/karim-daaboul", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/karim-daaboul", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono tracking-widest text-muted-foreground transition-colors hover:text-primary uppercase"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-xl" />
              <div className="relative h-52 w-52 overflow-hidden rounded-full border border-primary/30 md:h-64 md:w-64">
                <Image
                  src="/images/karim.jpeg"
                  alt="Karim Daaboul"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -inset-3 rounded-full border border-dashed border-primary/15 animate-spin" style={{ animationDuration: "20s" }} />
            </div>

            {/* Simple stat cards — no percentages, no Potech count */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "10+", label: "Experiences" },
                { val: "5+", label: "Research Projects" },
              ].map(({ val, label }) => (
                <div key={label} className="flex flex-col items-center rounded border border-border bg-card/50 px-5 py-3 text-center">
                  <span className="text-xl font-extrabold text-primary">{val}</span>
                  <span className="mt-0.5 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground/50 uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ArrowDown size={14} className="text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
