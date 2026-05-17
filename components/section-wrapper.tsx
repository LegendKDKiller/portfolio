"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  num?: string;
}

export default function SectionWrapper({ id, title, subtitle, children, num }: SectionWrapperProps) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            {num && <span className="font-mono text-xs tracking-widest text-primary/40 uppercase">{num}</span>}
            <div className="h-px flex-1 bg-border max-w-[60px]" />
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 font-mono text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {children}
      </motion.div>
    </section>
  );
}
