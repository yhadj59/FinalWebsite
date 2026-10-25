
import { MapPin, Calendar } from "lucide-react";
import { conference } from "@/content";

export default function Footer({
  onNavigate,
}: {
  onNavigate: (id: string) => void;
}) {
  const links: { label: string; id: string }[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Agenda", id: "agenda" },
    { label: "Delegate Hub", id: "delegate-hub" },
    { label: "Special Events", id: "special-events" },
    { label: "Venue & Travel", id: "venue-travel" },
    { label: "Announcements", id: "announcements" },
  ];

  return (
    <footer className="border-t border-violet-400/20 bg-[#0c0618] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Branding */}
          <div>
            <button
              onClick={() => onNavigate("home")}
              className="group flex items-center gap-3 text-left"
              aria-label="Go to homepage"
            >
              <img
                src="/rpm-logo.png"
                alt="RPM 26 Germany logo"
                className="h-12 w-auto max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="border-l border-violet-300/25 pl-3">
                <div className="font-display text-base font-bold text-white">
                  RPM 26 GERMANY
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-violet-200/75">
                  {conference.theme}
                </div>
              </div>
            </button>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-violet-100/65">
              AIESEC Regional Presidents Meeting 2026 in Germany — bringing
              together AIESEC leaders to connect, exchange perspectives, and
              shape the future of the network.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-white">
              Navigate
            </h4>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-sm text-violet-100/65 transition-colors hover:text-violet-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Meeting information */}
          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-white">
              Meeting Details
            </h4>

            <div className="space-y-4 text-sm text-violet-100/70">
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                <span>{conference.datesDisplay}</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                <span>
                  {conference.venue}, {conference.city}, {conference.country}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-violet-300/15 pt-6 sm:flex-row">
          <p className="text-center text-xs text-violet-100/45 sm:text-left">
            © 2026 AIESEC Regional Presidents Meeting. All rights reserved.
          </p>

          <p className="text-center text-xs text-violet-100/40 sm:text-right">
            Website created for RPM 26 Germany. Information marked [TBC] is
            pending confirmation.
          </p>
        </div>
      </div>
    </footer>
  );
}
