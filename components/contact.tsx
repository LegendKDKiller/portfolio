"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";
import { Mail, Linkedin, Github, Send, Terminal } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:daaboulkarim37@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    setSent(true);
  };

  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="// let's build something together" num="06">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            Whether it's a cybersecurity research opportunity, AI security collaboration,
            or you just want to talk about federated learning and offensive tooling — my inbox is open.
          </p>

          <div className="flex flex-col gap-3">
            {[
              { icon: Mail, label: "Email", value: "daaboulkarim37@gmail.com", href: "mailto:daaboulkarim37@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "karim-daaboul", href: "https://linkedin.com/in/karim-daaboul" },
              { icon: Github, label: "GitHub", value: "karim-daaboul", href: "https://github.com/karim-daaboul" },
            ].map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="card-border flex items-center gap-4 rounded border border-border bg-card/50 p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-primary/20 bg-primary/10">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
                <div className="ml-auto font-mono text-xs text-muted-foreground/50">→</div>
              </motion.a>
            ))}
          </div>

          {/* Status — no "currently at Potech" */}
          <div className="rounded border border-border bg-card/50 p-4 font-mono text-xs">
            <div className="flex items-center gap-2 mb-3 text-muted-foreground/60">
              <Terminal size={12} /> <span>availability.sh</span>
            </div>
            <div className="space-y-1.5 text-muted-foreground">
              <p><span className="text-primary">✓</span> Open to Research Internships</p>
              <p><span className="text-primary">✓</span> Available for Cybersecurity Collaborations</p>
              <p><span className="text-primary">✓</span> Available for Full-Time Roles</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="card-border flex flex-col gap-4 rounded border border-border bg-card p-8"
        >
          <div className="flex items-center gap-2 mb-2 pb-4 border-b border-border">
            <div className="h-2 w-2 rounded-full bg-destructive/60" />
            <div className="h-2 w-2 rounded-full bg-accent/60" />
            <div className="h-2 w-2 rounded-full bg-chart-4/60" />
            <span className="ml-2 font-mono text-[10px] text-muted-foreground/50">message.sh</span>
          </div>

          {[
            { id: "name", label: "Name", type: "text", placeholder: "Your name" },
            { id: "email", label: "Email", type: "email", placeholder: "you@domain.com" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="mb-1.5 block font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                {label}
              </label>
              <input
                id={id}
                type={type}
                required
                value={formData[id as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                className="w-full rounded border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
                placeholder={placeholder}
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>

          <button
            type="submit"
            className="glow-red mt-2 flex items-center justify-center gap-2 rounded bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
          >
            <Send size={14} />
            {sent ? "Opening Mail Client..." : "Send Message"}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
