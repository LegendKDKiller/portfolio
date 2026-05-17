"use client";

import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-primary" />
          <span className="font-mono text-xs tracking-widest text-muted-foreground">KD_</span>
        </div>
        <p className="font-mono text-[11px] text-muted-foreground/60 tracking-widest">
          KARIM DAABOUL · BEIRUT · {new Date().getFullYear()}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground/40">
          Built with Next.js · Framer Motion · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
