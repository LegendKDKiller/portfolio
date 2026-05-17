"use client";

import { Download, FileText } from "lucide-react";

export default function CVDownload() {
  return (
    <section className="px-6 py-24">
      <div className="glow-cyan mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-card p-12 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <FileText size={32} className="text-primary" />
        </div>
        <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
          Want the full version?
        </h2>
        <p className="mb-8 text-muted-foreground">
          Download my complete CV for a detailed overview of my experience,
          skills, and achievements.
        </p>
        <a
          href="/Karim-Daaboul-CV.pdf"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all hover:brightness-110"
        >
          <Download size={18} />
          Download CV
        </a>
      </div>
    </section>
  );
}
