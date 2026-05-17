"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";
import { ExternalLink, Github, Shield, Brain, Lock, Radio, Network, Flame, Server, Code } from "lucide-react";

const projects = [
  {
    title: "AI-Enhanced Security Monitoring Platform with ELK Stack",
    description: "Built a hybrid SOC platform combining ELK log ingestion, Suricata network IDS, LLM-generated 9-section alert reports, Fail2Ban IP blocking, and a two-layer endpoint ML pipeline achieving 97.92% accuracy and 98.54% F1-score.",
    tags: ["ELK Stack", "Suricata", "LLM", "Fail2Ban", "ML", "SOC"],
    icon: Server,
    venue: "Potech Global × AUB – Final Year Project · 2025–2026",
  },
  {
    title: "AI-Powered Black-Box Penetration Testing Platform",
    description: "Orchestrates Nmap, Nuclei, and FFUF; converts raw scan data into structured intelligence; uses LLMs to produce validated, evidence-based vulnerability reports automatically.",
    tags: ["AI Security", "Nmap", "Nuclei", "FFUF", "LLMs"],
    icon: Shield,
    venue: "Potech Global · 2025–Present",
  },
  {
    title: "Offensive Security Assessment & Threat Intelligence Lab",
    description: "Full security assessment workflow covering passive recon, attack surface mapping, DVWA-based OWASP exploitation, Metasploitable2 compromise with Metasploit, and structured mitigation reporting.",
    tags: ["OSINT", "Metasploit", "OWASP", "DVWA", "Threat Intel"],
    icon: Network,
    venue: "Potech Global · Dec 2025",
  },
  {
    title: "Triple-Node ELK SIEM",
    description: "Deployed and configured a three-node Elasticsearch–Logstash–Kibana cluster as a full SIEM for centralized log collection, correlation, and real-time analysis.",
    tags: ["Elasticsearch", "Logstash", "Kibana", "SIEM", "Telecom"],
    icon: Radio,
    venue: "Touch · July–Aug 2025",
  },
  {
    title: "ML for Cybersecurity Threat Detection",
    description: "Designed and trained machine learning models to classify security-related data, differentiating benign activity from malicious behavior with feature engineering and model evaluation.",
    tags: ["Python", "ML", "Threat Detection", "Feature Engineering"],
    icon: Brain,
    venue: "AUB · Spring 2025–Present",
  },
  {
    title: "Offensive Security & CTF Operations",
    description: "Executed black-box reconnaissance, exploitation, and post-exploitation against vulnerable systems using Nmap, Hydra, Metasploit, and OWASP-based attack methodologies.",
    tags: ["CTF", "Metasploit", "Nmap", "OWASP", "Hydra"],
    icon: Shield,
    venue: "AUB · Spring 2025",
  },
  {
    title: "Secure API Platform with Authentication & Access Control",
    description: "Designed secure RESTful APIs with role-based access control, input validation, and OWASP-aligned protections against common web vulnerabilities.",
    tags: ["REST API", "RBAC", "OWASP", "Security", "JWT"],
    icon: Lock,
    venue: "AUB · Fall 2024",
  },
  {
    title: "Secure Messaging App using RSA Cryptography",
    description: "Implemented a secure messaging application using RSA public-key cryptography, including key generation, encryption, and decryption workflows for protected data exchange.",
    tags: ["RSA", "Cryptography", "Java", "Security"],
    icon: Lock,
    venue: "AUB · Spring 2024",
  },
  {
    title: "UAV-IoT Wildfire Detection System",
    description: "Designed and evaluated a UAV-IoT architecture for real-time wildfire detection, optimizing energy-efficient sensor communication and 5G-based data transmission.",
    tags: ["IoT", "UAV", "5G", "Architecture", "Research"],
    icon: Flame,
    venue: "AUB · Feb–May 2023",
  },
  {
    title: "Time Management Web App (AWS Backend)",
    description: "Developed and deployed backend services on AWS focusing on REST APIs, authentication, and reliable cloud data handling.",
    tags: ["AWS", "REST APIs", "Authentication", "Cloud"],
    icon: Code,
    venue: "Personal · May–Sept 2023",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects" subtitle="// selected technical work" num="04">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card-border group relative flex flex-col rounded border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Terminal dots + icon */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-destructive/50" />
                  <div className="h-2 w-2 rounded-full bg-accent/50" />
                  <div className="h-2 w-2 rounded-full bg-chart-4/50" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded border border-primary/20 bg-primary/10">
                  <Icon size={14} className="text-primary" />
                </div>
              </div>

              {/* Venue */}
              <p className="font-mono text-[9px] tracking-widest text-muted-foreground/60 uppercase mb-2">{project.venue}</p>

              <h3 className="mb-2 text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 border-t border-border pt-4">
                <button className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground transition-colors hover:text-primary">
                  <ExternalLink size={12} /> Details
                </button>
                <button className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground transition-colors hover:text-primary">
                  <Github size={12} /> GitHub
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
