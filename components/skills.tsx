"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";

const categories = [
  {
    title: "Cybersecurity & SOC",
    items: ["ELK Stack", "Kibana", "Suricata IDS", "Security Onion", "Fail2Ban", "SIEM Monitoring", "Threat Intelligence", "Network Traffic Analysis"],
  },
  {
    title: "Offensive Security",
    items: ["Black-box Pen Testing", "OWASP Top 10", "OSINT", "Nmap", "Nessus", "Burp Suite", "Metasploit", "Hydra", "Nuclei", "FFUF"],
  },
  {
    title: "AI & Machine Learning",
    items: ["Federated Learning", "Supervised Classification", "Anomaly Detection", "LLM-Assisted Analysis", "Feature Engineering", "Model Evaluation", "TF-IDF"],
  },
  {
    title: "Programming",
    items: ["Python", "Java", "JavaScript", "SQL", "C++", "C#"],
  },
  {
    title: "Backend & Databases",
    items: ["Spring Boot", "Flask", "RESTful APIs", "MySQL", "PostgreSQL", "JPA", "Hibernate ORM"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Git", "GitHub", "Linux", "Jupyter", "Google Colab"],
  },
  {
    title: "Research & Reporting",
    items: ["Technical Writing", "Experiment Design", "Security Reporting", "Data Preprocessing", "Automated Report Generation"],
  },
  {
    title: "Product & Engineering",
    items: ["Secure System Design", "Mobile App Development", "UI/UX Prototyping", "Full Stack Development"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills" subtitle="// technologies & competencies" num="05">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="card-border group rounded border border-border bg-card p-5 transition-all hover:border-primary/20"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">{cat.title}</p>

            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded bg-secondary/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground border border-border/50 transition-colors group-hover:border-primary/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
