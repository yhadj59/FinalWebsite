import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { agenda, type AgendaSession } from "@/content";

const typeStyles: Record<AgendaSession["type"], { badge: string; dot: string; label: string }> = {
  plenary: { badge: "bg-ice-500/15 text-ice-300 border-ice-400/30", dot: "bg-ice-400", label: "Plenary" },
  workshop: { badge: "bg-blue-500/15 text-blue-300 border-blue-400/30", dot: "bg-blue-400", label: "Workshop" },
  break: { badge: "bg-frost-500/15 text-frost-300 border-frost-400/30", dot: "bg-frost-400", label: "Break" },
  social: { badge: "bg-pink-500/15 text-pink-300 border-pink-400/30", dot: "bg-pink-400", label: "Social" },
  ceremony: { badge: "bg-amber-500/15 text-amber-300 border-amber-400/30", dot: "bg-amber-400", label: "Ceremony" },
  meal: { badge: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30", dot: "bg-emerald-400", label: "Meal" },
};

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  const day = agenda[activeDay];

  return (
    <Section id="agenda" className="bg-navy-950">
      <SectionHeader
        eyebrow="Agenda"
        title={<>Five days of <span className="ice-text">impact</span></>}
        subtitle="A day-by-day programme for 5–9 November 2026. Session times and facilitators are placeholders and will be confirmed closer to the conference date."
      />

      {/* Day selector */}
      <Reveal>
        <div className="mb-8 flex gap-2 overflow-x-auto pb-3 scrollbar-hide sm:justify-center">
          {agenda.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(i)}
              className={`flex-shrink-0 rounded-2xl px-4 py-3 text-left transition-all duration-300 sm:px-5 sm:py-4 ${
                activeDay === i
                  ? "bg-ice-500/15 border-ice-400/40 ring-1 ring-ice-400/30"
                  : "glass-card border-white/10 hover:border-ice-400/20"
              }`}
            >
              <div className={`font-display text-sm font-bold ${activeDay === i ? "text-ice-300" : "text-white"}`}>
                {d.day}
              </div>
              <div className="text-xs text-frost-300 mt-0.5">{d.date}</div>
              <div className="text-[10px] uppercase tracking-wider text-frost-400 mt-0.5">{d.weekday}</div>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Day summary */}
      <Reveal key={activeDay}>
        <div className="mb-6 text-center">
          <p className="text-frost-300 text-sm md:text-base">{day.summary}</p>
        </div>

        {/* Sessions */}
        <div className="space-y-3">
          {day.sessions.map((session, i) => {
            const style = typeStyles[session.type];
            return (
              <Reveal key={`${activeDay}-${i}`} delay={i * 50}>
                <div className="glass-card group p-4 sm:p-5 hover:translate-x-1">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                    {/* Time */}
                    <div className="flex items-center gap-2 sm:w-24 sm:flex-shrink-0">
                      <Clock className="h-4 w-4 text-ice-400/70" />
                      <span className="font-display text-lg font-bold text-white tabular-nums">{session.time}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-base font-bold text-white">{session.title}</h3>
                        <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${style.badge}`}>
                          {style.label}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm text-frost-300 leading-relaxed">{session.description}</p>
                      {session.location && (
                        <div className="mt-2 flex items-center gap-1.5 text-xs text-frost-400">
                          <MapPin className="h-3 w-3" />
                          {session.location}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10 rounded-xl border border-amber-400/20 bg-amber-500/5 px-5 py-4 text-center">
          <p className="text-sm text-amber-200/90">
            This is a placeholder programme. Final session times, facilitators and locations will be confirmed
            approximately 2 weeks before the conference. [Programme TBC]
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
