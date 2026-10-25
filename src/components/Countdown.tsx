import { useEffect, useState } from "react";

function getRemaining(target: Date) {
  const now = new Date().getTime();
  const diff = target.getTime() - now;

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isOver: true,
    };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    ),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isOver: false,
  };
}

export default function Countdown({
  targetISO,
  compact = false,
}: {
  targetISO: string;
  compact?: boolean;
}) {
  const target = new Date(targetISO);
  const [time, setTime] = useState(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  if (time.isOver) {
    return (
      <div className="text-center">
        <p className="font-display text-2xl text-violet-200 md:text-3xl">
          The countdown is over — RPM 26 Germany is here!
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="flex items-center gap-3 text-sm">
        {units.map((u) => (
          <div key={u.label} className="flex items-center gap-1.5">
            <span className="font-display text-lg font-bold tabular-nums text-violet-200">
              {String(u.value).padStart(2, "0")}
            </span>
            <span className="text-xs uppercase tracking-wider text-violet-300/70">
              {u.label.slice(0, 3)}
            </span>
            {u.label !== "Seconds" && (
              <span className="text-violet-300/40">·</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
      {units.map((u, i) => (
        <div
          key={u.label}
          className="glass-card relative animate-fade-in-up overflow-hidden px-4 py-5 text-center sm:px-6 sm:py-6"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-400/10 to-transparent" />

          <div className="relative">
            <div className="font-display text-3xl font-bold tabular-nums text-white sm:text-4xl md:text-5xl">
              {String(u.value).padStart(2, "0")}
            </div>

            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-violet-200/80 sm:text-sm">
              {u.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}