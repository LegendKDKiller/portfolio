"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";

const experiences = [
  {
    title: "AI Security Engineering Intern – Intelligent SOC Automation",
    company: "Potech Global",
    period: "Aug 2025 – May 2026",
    tags: ["ELK Stack", "Suricata IDS", "LLM Triage", "Fail2Ban", "ML"],
    description: "Engineered an AI-enhanced SOC monitoring pipeline combining ELK Stack, Suricata IDS, Groq LLM alert triage, Fail2Ban automated response, and endpoint ML detection to transform raw security logs into actionable threat intelligence.",
  },
  {
    title: "AI-Powered Black-Box Penetration Testing Intern",
    company: "Potech Global",
    period: "Dec 2025",
    tags: ["Nmap", "Nuclei", "FFUF", "LLMs", "AI Security"],
    description: "Designed and operated an AI-powered black-box penetration testing pipeline that automatically discovers, prioritizes, and reports real-world security vulnerabilities.",
  },
  {
    title: "Cybersecurity Intern – Offensive Security & Threat Intelligence",
    company: "Potech Global",
    period: "Dec 2025",
    tags: ["OSINT", "Metasploit", "Burp Suite", "Nessus", "Dark Web"],
    description: "Conducted end-to-end offensive security and threat intelligence tasks including OSINT reconnaissance, metadata and dark web analysis, vulnerability scanning, OWASP Top 10 testing, and controlled exploitation.",
  },
  {
    title: "Founder and President",
    company: "AUB Cybersecurity Community",
    period: "March 2025 – Present",
    tags: ["IEEE", "ACM", "GDG", "WIE", "Leadership"],
    description: "Led a multi-club cybersecurity community across IEEE, ACM, GDG, and WIE cyber branches, organizing talks, workshops, and hands-on labs for students.",
  },
  {
    title: "Cyber Threat Intelligence Intern – SOC Detection & Telecom Security",
    company: "Touch",
    period: "July – August 2025",
    tags: ["ELK SIEM", "Security Onion", "Kali Linux", "Phishing Analysis"],
    description: "Enhanced SOC detection for telecom environments by building a 3-node ELK SIEM, investigating phishing threats, applying awareness frameworks, and using Kali Linux to support vulnerability discovery.",
  },
  {
    title: "Cybersecurity Team Lead",
    company: "Google Developer Group",
    period: "Sept 2025 – Present",
    tags: ["CTF", "Mentorship", "Workshops"],
    description: "Led the GDG cybersecurity team, designing technical sessions, CTF-style challenges, and mentoring students in practical security skills.",
  },
  {
    title: "Technical Ambassador",
    company: "Semicolon Security",
    period: "Oct 2025 – Present",
    tags: ["Offensive Security", "Community"],
    description: "Represented Semicolon Security at AUB, promoting training programs and guiding students interested in offensive security.",
  },
  {
    title: "Full Stack Engineer Intern",
    company: "Monty Mobile",
    period: "May 2025",
    tags: ["Full Stack", "Frontend", "Backend"],
    description: "Completed an end-to-end web application project covering frontend and backend development from design to deployment.",
  },
  {
    title: "Training and Development Intern",
    company: "Banque du Liban – Central Bank of Lebanon",
    period: "June 2025",
    tags: ["Banking", "Operations"],
    description: "Assisted bank staff, learned core banking operations, and supported daily reporting and documentation tasks.",
  },
  {
    title: "App Developer and Designer",
    company: "Launch Co",
    period: "March 2024",
    tags: ["Mobile", "UI/UX", "Design"],
    description: "Designed and developed mobile app screens and flows, combining clean UI/UX with working app functionality.",
  },
  {
    title: "Backend Developer (AWS)",
    company: "Time Management Web App",
    period: "May – Sept 2023",
    tags: ["AWS", "REST APIs", "Authentication"],
    description: "Developed and deployed backend services on AWS, focusing on REST APIs, authentication, and reliable cloud data handling.",
  },
  {
    title: "Backend Developer Intern",
    company: "Scopsis",
    period: "June – Aug 2023",
    tags: ["APIs", "Database", "Backend"],
    description: "Implemented and tested backend APIs and database models for web applications and internal tools.",
  },
  {
    title: "Research Assistant",
    company: "American University of Beirut",
    period: "Feb – May 2023",
    tags: ["Research", "Data Analysis"],
    description: "Supported faculty research by implementing experiments, analyzing data, and organizing technical material.",
  },
  {
    title: "Private Tutor",
    company: "AUB",
    period: "Sept 2023 – Present",
    tags: ["Ethical Hacking", "Networking", "Teaching"],
    description: "Tutoring students in Ethical Hacking, Penetration Testing, and Computer Networking.",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="// professional journey" num="02">
      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:block" />

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="group relative md:pl-14"
            >
              {/* Timeline dot — all equal */}
              <div className="absolute left-0 top-5 hidden md:flex h-10 w-10 items-center justify-center">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-border bg-background transition-colors group-hover:border-primary/60 group-hover:bg-primary/10" />
              </div>

              <div className="card-border relative overflow-hidden rounded border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-bold text-foreground leading-snug">{exp.title}</h3>
                    <p className="text-xs font-semibold mt-0.5 text-primary">{exp.company}</p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] tracking-widest text-muted-foreground bg-secondary/50 rounded px-2 py-1 h-fit">{exp.period}</span>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground mb-3">{exp.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="rounded bg-secondary/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
