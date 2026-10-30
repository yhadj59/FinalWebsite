import { Sparkles, Calendar, MapPin, ChevronDown } from "lucide-react";
import { conference, images } from "@/content";
import Countdown from "@/components/Countdown";
import type { SectionId } from "@/types";

type Props = {
  onNavigate: (id: SectionId) => void;
};

export default function Home({ onNavigate }: Props) {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/starfish-hero.png"
          alt="Glowing starfish and purple network ripples representing AIESEC's impact"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#10091f]/75 via-[#10091f]/65 to-[#10091f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10091f]/60 via-transparent to-[#10091f]/60" />
        <div className="absolute inset-0 bg-purple-950/10" />
      </div>

      {/* Subtle floating purple particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-snow-fall rounded-full bg-violet-200/40"
            style={{
              left: `${(i * 5 + 3) % 100}%`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${10 + (i % 7)}s`,
            }}
          />
        ))}
      </div>

      {/* Homepage content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-24 text-center">
        {/* Event label */}
        <div
          className="mb-6 flex items-center gap-3 animate-fade-in-down"
        >
          <Sparkles className="h-5 w-5 text-violet-300" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-200/90 sm:text-sm">
            Regional Presidents Meeting
          </span>

          <Sparkles className="h-5 w-5 text-violet-300" />
        </div>

        {/* Main headline */}
        <h1
          className="animate-fade-in-up font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          style={{
            textShadow: "0 4px 30px rgba(16, 9, 31, 0.8)",
          }}
        >
          THE STARFISH
          <br />
          <span className="rpm-gradient-text">
            What AIESEC Can Be
          </span>
        </h1>

        {/* Description */}
        <p
          className="mt-6 max-w-xl animate-fade-in-up text-base leading-relaxed text-violet-100/90 sm:text-lg"
          style={{ animationDelay: "200ms" }}
        >
          Five days. Hundreds of young leaders.
          <br className="hidden sm:block" />
          Are you ready to become a starfish?
        </p>

        {/* Event details */}
        <div
          className="mt-15 flex animate-fade-in-up flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "400ms" }}
        >
          <div className="glass-card flex items-center gap-2 rounded-full px-5 py-2.5">
            <Calendar className="h-4 w-4 text-violet-300" />

            <span className="text-sm font-medium text-white">
              {conference.datesDisplay}
            </span>
          </div>

          <div className="glass-card flex items-center gap-2 rounded-full px-5 py-2.5">
            <MapPin className="h-4 w-4 text-violet-300" />

            <span className="text-sm font-medium text-white">
              {conference.venue}, {conference.city}
            </span>
          </div>
        </div>

        {/* Countdown */}
        <div
          className="mt-12 w-full max-w-2xl animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-violet-200/80">
            Countdown to Opening
          </div>

          <Countdown targetISO={conference.startDateISO} />
        </div>

        {/* Call-to-action buttons */}
        <div
          className="mt-10 flex animate-fade-in-up flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "800ms" }}
        >
          <button
            onClick={() => onNavigate("agenda")}
            className="rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            View Agenda
          </button>

          <button
            onClick={() => onNavigate("about")}
            className="rounded-full border border-violet-300/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-violet-300/60 hover:bg-violet-500/10"
          >
            About RPM 26
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => onNavigate("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-slow text-violet-200/60 transition-all duration-300 hover:text-violet-200"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
