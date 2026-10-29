
import { useState } from "react";
import { Clock, MapPin, Sparkles } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";

type Session = {
  time: string;
  title: string;
  type?: "session" | "break" | "meal" | "social";
  tracks?: {
    label: string;
    title: string;
    color: "green" | "purple" | "blue";
  }[];
};

type AgendaDay = {
  day: string;
  date: string;
  weekday: string;
  theme: string;
  goal: string;
  sessions: Session[];
};

const room = "Room: To be announced";

const day1: AgendaDay = {
  day: "Day 1",
  date: "5 November",
  weekday: "Thursday",
  theme: "True to Our Essence",
  goal:
  "A starfish that has no head: what holds it together is shared DNA. That's what we want to strengthen, as staying true to our essence is what makes us strong as AIESEC.",
  sessions: [
    { time: "Until 11:45", title: "Arrival", type: "social" },
    { time: "11:45–14:00", title: "Delegates Check in", type: "session" },
    { time: "14:00–16:45", title: "Opening ceremony", type: "session" },
    { time: "16:45–17:00", title: "15-minute break", type: "break" },
    { time: "17:00–18:15", title: "Essence", type: "session" },
    { time: "18:15–19:30", title: "Dinner", type: "meal" },
    {
      time: "19:30–20:00",
      title: "Parallel tracks",
      tracks: [
        { label: "LCPe", title: "STARFISH LCPe Opening", color: "green" },
        { label: "LCPc", title: "STARFISH LCPc Opening", color: "purple" },
        { label: "MCPs", title: "STARFISH MCPs Opening", color: "blue" },
      ],
    },
    {
      time: "20:00–20:45",
      title: "Parallel tracks",
      tracks: [
        { label: "LCPe", title: "Who are you growing?", color: "green" },
        { label: "LCPc", title: "Who are you growing?", color: "purple" },
        { label: "MCPs", title: "Who are you growing?", color: "blue" },
      ],
    },
    { time: "20:45–21:00", title: "15-minute break", type: "break" },
    { time: "21:00–21:15", title: "How far can we go?", type: "session" },
    { time: "21:15–22:15", title: "Evening plenary", type: "session" },
    { time: "22:15–22:45", title: "Delegation time", type: "session" },
    { time: "22:45–open end", title: "Get to know europe", type: "social" },
  ],
};

const day2: AgendaDay = {
  day: "Day 2",
  date: "6 November",
  weekday: "Friday",
  theme: "Spot the Spider",
  goal:
  "We own our reality fully because it starts with us. When we own something, we always think about what we can do about it.",
  sessions: [
    { time: "Until 09:30", title: "Breakfast", type: "meal" },
    { time: "09:30–10:15", title: "Morning Plenary", type: "session" },
    { time: "10:15–10:30", title: "15-minute break", type: "break" },
    { time: "10:30–13:30", title: "Partner Space", type: "session" },
    { time: "13:30–14:45", title: "Lunch", type: "meal" },
    { time: "14:45–15:30", title: "A2030 Current context", type: "session" },
    { time: "15:30–15:45", title: "15-minute break", type: "break" },
    {
      time: "15:45–16:15",
      title: "Keynote: Spot the Spider",
      type: "session",
    },
    { time: "16:15–16:30", title: "15-minute break", type: "break" },
    {
      time: "16:30–17:30",
      title: "Parallel tracks",
      tracks: [
        {
          label: "LCPe + LCPc",
          title: "Who are we competing with?",
          color: "green",
        },
        {
          label: "MCPs",
          title: "Who are we competing with?",
          color: "blue",
        },
      ],
    },
    { time: "17:30–17:45", title: "15-minute break", type: "break" },
    {
      time: "17:45–18:45",
      title: "Parallel tracks",
      tracks: [
        {
          label: "LCPe + LCPc",
          title: "How do I grow people?",
          color: "green",
        },
        {
          label: "MCPs",
          title: "How do I grow people?",
          color: "blue",
        },
      ],
    },
    { time: "18:45–20:00", title: "Dinner", type: "meal" },
    { time: "20:00–20:15", title: "How far can we go?", type: "session" },
    { time: "20:15–21:15", title: "Evening Plenary", type: "session" },
    { time: "21:15–21:45", title: "Delegation time", type: "session" },
    { time: "21:45–22:30", title: "Bonfire chats", type: "social" },
    {
      time: "22:30–open end",
      title: "German night: Oktoberfest",
      type: "social",
    },
  ],
};


const day3: AgendaDay = {
  day: "Day 3",
  date: "7 November",
  weekday: "Saturday",
  theme: "Grow An Arm 💪🏻",
  goal:
    "x10 is easier than x2. We must design an AIESEC that can move faster than the environment.",
  sessions: [
    { time: "Until 09:30", title: "Breakfast", type: "meal" },
    { time: "09:30–10:30", title: "Morning Plenary 🌞", type: "session" },
    { time: "10:30–10:45", title: "15-minute break", type: "break" },
    {
      time: "10:45–11:45",
      title: "A2030 Regional Next Steps",
      type: "session",
    },
    { time: "11:45–12:00", title: "15-minute break", type: "break" },
    {
      time: "12:00–12:30",
      title: "Keynote: Grow an Arm",
      type: "session",
    },
    {
      time: "12:30–13:30",
      title: "Parallel tracks",
      tracks: [
        {
          label: "LCPs · Backoffice",
          title: "Growing an Arm",
          color: "green",
        },
        {
          label: "LCPs · OPS & ER",
          title: "Growing an Arm",
          color: "purple",
        },
        {
          label: "LCPs · No LCVP Experience",
          title: "Growing an Arm",
          color: "blue",
        },
        {
          label: "MCPs",
          title: "OD Model Understanding",
          color: "green",
        },
      ],
    },
    { time: "13:30–14:45", title: "Lunch", type: "meal" },
    {
      time: "14:45–15:45",
      title: "Parallel tracks",
      tracks: [
        {
          label: "LCPe · Clusters 3–5",
          title: "The Catalyst of Performance",
          color: "green",
        },
        {
          label: "LCPe · Clusters 1–2",
          title: "The Catalyst of Performance",
          color: "purple",
        },
        {
          label: "LCPc · OPS Clusters 5–3",
          title: "The Catalyst of Exchange",
          color: "blue",
        },
        {
          label: "LCPc · OPS Clusters 5–3 (confirm)",
          title: "The Catalyst of Exchange",
          color: "green",
        },
        {
          label: "MCPs",
          title: "Stakeholder Management",
          color: "purple",
        },
      ],
    },
    { time: "15:45–16:00", title: "15-minute break", type: "break" },
    {
      time: "16:00–17:15",
      title: "Parallel tracks",
      tracks: [
        {
          label: "LCPe",
          title: "SnD for Operations Timeline Understanding and Alignment",
          color: "green",
        },
        {
          label: "LCPc",
          title: "Performance Management in Double Power",
          color: "purple",
        },
        {
          label: "MCPs",
          title: "Building the Disruptive Peak",
          color: "blue",
        },
      ],
    },
    { time: "17:15–17:45", title: "30-minute break", type: "break" },
    {
      time: "17:45–18:45",
      title: "Parallel tracks",
      tracks: [
        {
          label: "LCPs",
          title: "10X Growing Europe – The Catalyst Leader",
          color: "green",
        },
        {
          label: "MCPs",
          title: "RPM Legislation",
          color: "blue",
        },
      ],
    },
    { time: "18:45–20:00", title: "Dinner", type: "meal" },
    {
      time: "20:00–20:15",
      title: "How far can we go?",
      type: "session",
    },
    {
      time: "20:15–21:15",
      title: "Evening Plenary ✨",
      type: "session",
    },
    {
      time: "21:15–22:00",
      title: "Dress to Impress: Get Ready for Gala",
      type: "session",
    },
    {
      time: "22:00–00:00",
      title: "Gala Night",
      type: "social",
    },
  ],
};

const day4: AgendaDay = {
  day: "Day 4",
  date: "8 November",
  weekday: "Sunday",
  theme: "Be The Catalyst",
  goal:
    "A disruptive leader doesn't hold all the answers, yet builds the environment for others to get their own answers. A catalyst sparks the change, then lets others lead it.",
  sessions: [
    { time: "Until 09:30", title: "Breakfast", type: "meal" },
    { time: "09:30 – 10:30", title: "Morning Plenary 🌞" },
    { time: "10:30 – 10:45", title: "15 min break", type: "break" },

    {
      time: "10:45 – 11:45",
      title: "Split Tracks",
      tracks: [
        {
          label: "LCPs",
          title: "Resources Management in My LC",
          color: "green",
        },
        {
          label: "MCPs",
          title: "Self Leadership",
          color: "purple",
        },
      ],
    },

    { time: "11:45 – 12:00", title: "15 min break", type: "break" },

    {
      time: "12:00 – 13:00",
      title: "Split Tracks",
      tracks: [
        {
          label: "LCPe · No EBe",
          title: "How to Build Pipeline & Select My EB",
          color: "green",
        },
        {
          label: "LCPc",
          title: "Choose Your Battles",
          color: "purple",
        },
        {
          label: "MCPs",
          title: "BoP Building & Management",
          color: "blue",
        },
      ],
    },

    { time: "13:00 – 14:15", title: "Lunch", type: "meal" },

    {
      time: "14:15 – 15:15",
      title: "Split Tracks",
      tracks: [
        {
          label: "LCPs",
          title: "Culture for Exchange",
          color: "green",
        },
        {
          label: "MCPs",
          title: "MCPs Secret Space",
          color: "purple",
        },
      ],
    },

    { time: "15:15 – 15:30", title: "15 min break", type: "break" },

    {
      time: "15:30 – 16:30",
      title: "Split Tracks",
      tracks: [
        {
          label: "LCP · Low Cluster · No Predecessor",
          title: "Transition Management",
          color: "green",
        },
        {
          label: "LCP · Low Cluster · With Predecessor",
          title: "Transition Management",
          color: "purple",
        },
        {
          label: "LCP · Higher Cluster",
          title: "How to Maximize Your Transition",
          color: "blue",
        },
        {
          label: "MCPs",
          title: "Replanning Management",
          color: "green",
        },
      ],
    },

    { time: "16:30 – 16:45", title: "15 min break", type: "break" },

    {
      time: "16:45 – 17:15",
      title: "Keynote: Be the Catalyst",
    },

    { time: "17:15 – 17:45", title: "30 min break", type: "break" },

    { time: "17:45 – 18:00", title: "How Far Can We Go?" },
    { time: "18:00 – 19:00", title: "Evening Plenary ✨" },

    { time: "19:00 – 20:15", title: "Dinner", type: "meal" },

    {
      time: "20:15 – 21:30",
      title: "10X Growing Europe – 10X Growth",
      type: "social",
    },

    { time: "21:30 – 22:00", title: "Delegation Time", type: "social" },

    {
      time: "22:00 – Open End",
      title: "Global Village",
      type: "social",
    },
  ],
};


const day5: AgendaDay = {
  day: "Day 5",
  date: "9 November",
  weekday: "Monday",
  theme: "Become the Starfish",
  goal: "The biggest question we need to imagine: What AIESEC can be...",
  sessions: [
    { time: "Until 10:00", title: "Breakfast", type: "meal" },
    { time: "10:00 – 11:00", title: "Morning Plenary 🌞" },
    { time: "11:00 – 11:15", title: "15 min break", type: "break" },

    {
      time: "11:15 – 12:15",
      title: "Split Tracks",
      tracks: [
        {
          label: "LCPe",
          title: "Design What Comes Next",
          color: "green",
        },
        {
          label: "LCPc",
          title: "Design What Comes Next",
          color: "purple",
        },
        {
          label: "MCPs",
          title: "RD 2027 Talks",
          color: "blue",
        },
      ],
    },

    { time: "12:15 – 12:30", title: "15 min break", type: "break" },

    {
      time: "12:30 – 13:30",
      title: "Split Tracks",
      tracks: [
        {
          label: "LCPe",
          title: "Track Closing: Becoming the Starfish",
          color: "green",
        },
        {
          label: "LCPc",
          title: "Track Closing: Keep the Starfish Growing",
          color: "purple",
        },
        {
          label: "MCPs",
          title: "2 MCPs, 1 Entity: Elections & Team Dynamics",
          color: "blue",
        },
      ],
    },

    { time: "13:30 – 14:45", title: "Lunch", type: "meal" },

    { time: "14:45 – 15:30", title: "What AIESEC Can Be..." },

    { time: "15:30 – 15:45", title: "15 min break", type: "break" },

    { time: "15:45 – 16:00", title: "How Far Can We Go?" },

    { time: "16:00 – 17:15", title: "Closing Plenary 💜" },
  ],
};



const days = [day1, day2, day3, day4, day5];

const trackColors = {
  green: {
    border: "border-emerald-400/30",
    background: "bg-emerald-500/10",
    label: "text-emerald-300",
    dot: "bg-emerald-400",
  },
  purple: {
    border: "border-purple-400/30",
    background: "bg-purple-500/10",
    label: "text-purple-300",
    dot: "bg-purple-400",
  },
  blue: {
    border: "border-sky-400/30",
    background: "bg-sky-500/10",
    label: "text-sky-300",
    dot: "bg-sky-400",
  },
};

function SessionCard({ session }: { session: Session }) {
  const isBreak = session.type === "break";
  const isMeal = session.type === "meal";
  const isSocial = session.type === "social";

  if (isBreak) {
    return (
      <div className="flex items-center gap-4 py-2 pl-1">
        <div className="w-32 flex-shrink-0 font-display text-sm tabular-nums text-frost-300">
          {session.time}
        </div>
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-xs text-frost-400">{session.title}</span>
      </div>
    );
  }

  return (
    <div
      className={`glass-card rounded-2xl border p-4 transition-all duration-200 hover:border-purple-400/30 sm:p-5 ${
        isMeal
          ? "border-amber-300/15"
          : isSocial
            ? "border-pink-400/20"
            : "border-white/10"
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex items-center gap-2 sm:w-32 sm:flex-shrink-0">
          <Clock className="h-4 w-4 flex-shrink-0 text-purple-300" />
          <span className="font-display text-sm font-bold tabular-nums text-white sm:text-base">
            {session.time}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-bold leading-snug text-white sm:text-lg">
            {session.title}
          </h3>

          <div className="mt-2 flex items-center gap-1.5 text-xs text-frost-400">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
            {session.type === "social" &&
            session.title === "Get to know europe"
              ? "Location: To be announced"
              : session.type === "social" &&
                  session.title === "Bonfire chats"
                ? "Location: To be announced"
                : session.type === "social" &&
                    session.title === "German night: Oktoberfest"
                  ? "Location: To be announced"
                  : room}
          </div>
        </div>
      </div>
    </div>
  );
}

function ParallelSessionCard({ session }: { session: Session }) {
  return (
    <div className="glass-card rounded-2xl border border-purple-400/20 p-4 sm:p-5">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 sm:w-32 sm:flex-shrink-0">
          <Clock className="h-4 w-4 flex-shrink-0 text-purple-300" />
          <span className="font-display text-sm font-bold tabular-nums text-white sm:text-base">
            {session.time}
          </span>
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-300">
          Parallel sessions
        </span>
      </div>

      <div
        className={`grid gap-3 ${
          session.tracks!.length === 3
            ? "grid-cols-1 md:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {session.tracks!.map((track) => {
          const colors = trackColors[track.color];

          return (
            <div
              key={track.label}
              className={`flex min-h-36 flex-col rounded-xl border p-4 ${colors.border} ${colors.background}`}
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${colors.dot}`}
                />
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${colors.label}`}
                >
                  {track.label}
                </span>
              </div>

              <h4 className="font-display text-sm font-bold leading-relaxed text-white sm:text-base">
                {track.title}
              </h4>

              <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs text-frost-400">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                Room: To be announced
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  const day = days[activeDay];

  return (
    <Section id="agenda" className="bg-navy-950">
      <SectionHeader
        eyebrow="The Programme"
        title={
          <>
            Five days of <span className="ice-text">impact</span>
          </>
        }
        subtitle="Explore the programme of RPM 2026. More daily schedules will be added soon."
      />

      {/* Day selector */}
      <Reveal>
        <div className="mb-8 flex gap-3 overflow-x-auto pb-3 sm:justify-center">
          {days.map((item, index) => (
            <button
              key={item.day}
              type="button"
              onClick={() => setActiveDay(index)}
              aria-pressed={activeDay === index}
              className={`min-w-36 flex-shrink-0 rounded-2xl border px-5 py-4 text-left transition-all duration-300 sm:min-w-44 ${
                activeDay === index
                  ? "border-purple-400/50 bg-purple-500/15 ring-1 ring-purple-400/20"
                  : "glass-card border-white/10 hover:border-purple-400/30"
              }`}
            >
              <div
                className={`font-display text-sm font-bold ${
                  activeDay === index ? "text-purple-300" : "text-white"
                }`}
              >
                {item.day}
              </div>
              <div className="mt-1 text-xs text-frost-300">
                {item.date}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-frost-400">
                {item.weekday}
              </div>
            </button>
          ))}
        </div>
      </Reveal>

      
    {/* Selected day heading and goal */}
    <Reveal key={day.day}>
      <div className="mb-7 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
          {day.day} · {day.date}
        </p>

        <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
          {day.theme}
        </h3>

        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-violet-300/20 bg-violet-500/5 p-5 text-left sm:p-7">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-violet-300" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              Goal of the Day
            </p>
          </div>

          <p className="text-base leading-relaxed text-frost-300 sm:text-lg">
            {day.goal}
          </p>
        </div>
      </div>

      {/* Chronological timeline */}
      <div className="space-y-3">
        {day.sessions.map((session, index) => (
          <Reveal
            key={`${day.day}-${index}`}
            delay={Math.min(index * 25, 200)}
          >
            {session.tracks ? (
              <ParallelSessionCard session={session} />
            ) : (
              <SessionCard session={session} />
            )}
          </Reveal>
        ))}
      </div>
    </Reveal>


      
    </Section>
  );
}
