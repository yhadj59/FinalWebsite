import { Bell, AlertTriangle, Info } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { announcements } from "@/content";

const priorityStyles = {
  important: {
    border: "border-amber-400/30",
    bg: "bg-amber-500/5",
    badge: "bg-amber-500/15 text-amber-300 border-amber-400/30",
    icon: AlertTriangle,
    iconColor: "text-amber-400",
  },
  info: {
    border: "border-ice-400/20",
    bg: "bg-ice-500/5",
    badge: "bg-ice-500/15 text-ice-300 border-ice-400/30",
    icon: Info,
    iconColor: "text-ice-400",
  },
};

export default function Announcements() {
  return (
    <Section id="announcements" className="bg-navy-950">
      <SectionHeader
        eyebrow="Announcements"
        title={<>Latest <span className="ice-text">updates</span></>}
        subtitle="Conference reminders and important information for delegates. Check back regularly for the latest news."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {announcements.map((a, i) => {
          const style = priorityStyles[a.priority];
          const Icon = style.icon;
          return (
            <Reveal key={i} delay={i * 80}>
              <div className={`glass-card h-full p-5 border ${style.border} ${style.bg}`}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${style.iconColor}`} />
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${style.badge}`}>
                      {a.tag}
                    </span>
                  </div>
                  <span className="text-xs text-frost-400">{a.date}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{a.title}</h3>
                <p className="text-sm text-frost-300 leading-relaxed">{a.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-frost-400">
          <Bell className="h-4 w-4 text-ice-400/70" />
          More updates will be posted as we approach the conference date.
        </div>
      </Reveal>
    </Section>
  );
}
