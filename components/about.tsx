"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";
import { GraduationCap, MapPin, Calendar, Zap, Target, Users } from "lucide-react";

const highlights = [
  { icon: Zap, label: "AI-Powered Security", desc: "Building LLM-driven SOC pipelines & penetration testing platforms" },
  { icon: Target, label: "Research Output", desc: "98.88% F1 on federated IDS; 92.74% transport mode accuracy" },
  { icon: Users, label: "Community Leader", desc: "Founded AUB's multi-club cybersecurity community across IEEE, ACM, GDG, WIE" },
];

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="// who I am and what I build" num="01">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Bio */}
        <div className="lg:col-span-3 space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a <span className="text-foreground font-semibold">Computer Engineering student at AUB</span>,
            at the intersection of cybersecurity and artificial intelligence.
            I don't just study security — I build the tools that enforce it.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            From orchestrating AI-driven penetration testing pipelines at Potech Global, to designing
            privacy-preserving federated learning models for cyberattack detection at AUB, I operate across the full
            stack of modern security engineering. My research achieves state-of-the-art metrics while
            reducing communication overhead by over 200×.
          </p>

          <div className="grid gap-4 pt-4">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-border flex items-start gap-4 rounded border border-border bg-card/50 p-4 transition-all hover:border-primary/20"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-primary/10 border border-primary/20">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education + terminal */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card-border rounded border border-border bg-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-primary/10 border border-primary/20">
                <GraduationCap size={16} className="text-primary" />
              </div>
              <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Education</p>
            </div>
            <h4 className="text-base font-bold text-foreground">American University of Beirut</h4>
            <p className="mt-1 font-mono text-xs text-primary">BE in Computer Engineering</p>
            <div className="mt-4 space-y-2 text-xs text-muted-foreground font-mono">
              <span className="flex items-center gap-2"><Calendar size={12} /> Sept 2022 – Present</span>
              <span className="flex items-center gap-2"><MapPin size={12} /> Beirut, Lebanon</span>
            </div>
          </div>

          <div className="rounded border border-border bg-card/50 p-5 font-mono text-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-accent/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
              <span className="ml-2 text-muted-foreground/50">profile.sh</span>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="text-primary">$</span> <span className="text-accent">name</span>=&quot;Karim Daaboul&quot;</p>
              <p><span className="text-primary">$</span> <span className="text-accent">focus</span>=&quot;AI × Cybersecurity&quot;</p>
              <p><span className="text-primary">$</span> <span className="text-accent">location</span>=&quot;Beirut, LB&quot;</p>
              <p><span className="text-primary">$</span> <span className="text-accent">status</span>=&quot;open_to_offers&quot;</p>
              <p><span className="text-primary">$</span> <span className="text-accent">languages</span>=&quot;AR / EN&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
