"use client";

import SectionWrapper from "./section-wrapper";
import { Users, Flag, Award, Heart, Lightbulb } from "lucide-react";

const activities = [
  {
    icon: Flag,
    title: "Founder & President",
    org: "AUB Cybersecurity Community",
    description:
      "Built and led a multi-club cybersecurity initiative spanning IEEE, ACM, GDG, and WIE chapters.",
  },
  {
    icon: Users,
    title: "Cybersecurity Team Lead",
    org: "Google Developer Group",
    description:
      "Designed workshops, CTF challenges, and mentored students in hands-on security skills.",
  },
  {
    icon: Award,
    title: "Technical Ambassador",
    org: "Semicolon Security",
    description:
      "Promoted offensive security training programs and guided aspiring security professionals.",
  },
  {
    icon: Heart,
    title: "Volunteer",
    org: "UNICEF",
    description:
      "Contributed to community outreach and support initiatives through volunteer work.",
  },
  {
    icon: Lightbulb,
    title: "Participant",
    org: "IEEE Beyond Engineering Program",
    description:
      "Engaged in cross-disciplinary engineering development and professional growth activities.",
  },
];

export default function Leadership() {
  return (
    <SectionWrapper
      id="leadership"
      title="Leadership & Activities"
      subtitle="Community involvement and extracurricular impact"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mb-2 text-sm font-medium text-primary">{item.org}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
