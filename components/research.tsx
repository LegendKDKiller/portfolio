"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";
import { FlaskConical, Cpu } from "lucide-react";

const research = [
  {
    title: "AdaFed-Proto: Communication-Efficient AI for Federated Cyberattack Detection",
    venue: "AUB – Undergraduate Research",
    period: "Spring 2026",
    icon: FlaskConical,
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    metrics: [{ val: "98.88%", label: "Macro-F1" }, { val: "200×", label: "Less Overhead vs FedAvg" }],
    description: "Developed a privacy-preserving federated intrusion detection system on CICIDS2017. Achieved state-of-the-art accuracy while dramatically reducing communication overhead through adaptive prototype aggregation.",
    tags: ["Federated Learning", "CICIDS2017", "PyTorch", "Privacy-Preserving", "IDS"],
  },
  {
    title: "Federated Learning for Transport Mode Detection",
    venue: "AUB – VIP Ethical Wireless",
    period: "Spring 2026",
    icon: Cpu,
    color: "text-accent",
    bg: "bg-accent/10 border-accent/20",
    metrics: [{ val: "92.74%", label: "Accuracy (FedYogi)" }, { val: "93.98%", label: "LTE-Only Accuracy" }],
    description: "Built and evaluated federated learning models for privacy-preserving transport mode detection using LTE cellular data. Demonstrated that LTE-only sensing is a strong alternative to GPS-heavy approaches.",
    tags: ["Federated Learning", "LTE", "FedYogi", "Transport", "Privacy"],
  },
];

export default function Research() {
  return (
    <SectionWrapper id="research" title="Research" subtitle="// academic research" num="03">
      <div className="grid gap-6 md:grid-cols-2">
        {research.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-border relative flex flex-col rounded border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded border ${r.bg}`}>
                <Icon size={18} className={r.color} />
              </div>

              <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-2">{r.venue} · {r.period}</p>
              <h3 className="text-sm font-bold text-foreground leading-snug mb-3">{r.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground mb-5 flex-1">{r.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded bg-secondary/30 border border-border/50">
                {r.metrics.map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <div className={`text-lg font-extrabold ${r.color}`}>{val}</div>
                    <div className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {r.tags.map((tag) => (
                  <span key={tag} className="rounded bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
