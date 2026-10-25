
import { useState } from "react";
import {
  Users,
  Music,
  Trophy,
  Globe2,
  Shirt,
  Utensils,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { images } from "@/content";

const specialEvents = [
  {
    day: "THURSDAY",
    date: "5 November",
    title: "G2K Europe",
    tagline: "Reconnect. Meet. Get to know each other.",
    description:
      "After the first day of RPM, it's time to warm things up. This evening is all about getting to know each other, reconnecting and easing into the conference together before the bigger nights ahead.",
    image: "/g2k.png",
    imageAlt: "People connecting at an international conference",
    icon: Users,
    accent: "text-violet-300",
    border: "border-violet-400/30",
    background: "bg-violet-400/10",
    highlights: [
      "Challenges and activities to break the ice.",
      "Time to get to know each other and reconnect as a region.",
      "Music and drinks available on site to get into the mood.",
    ],
  },
  {
    day: "FRIDAY",
    date: "6 November",
    title: "German Night",
    tagline: "Oktoberfest edition",
    description:
      "Oktoberfest is the world's largest folk festival, originating in Munich, Bavaria, in 1810. While Germany is much more than Bavaria, Oktoberfest has become an iconic part of German culture worldwide and the inspiration for our German Night.",
    image: images.oktoberfestCrowd,
    imageAlt: "Oktoberfest-inspired celebration",
    icon: Music,
    accent: "text-amber-200",
    border: "border-amber-400/30",
    background: "bg-amber-400/10",
    highlights: [
      "Enjoy a beer, a pretzel and some German traditions.",
      "Join drinking games and other activities.",
      "Dance and sing along to German music.",
    ],
    preparation: {
      title: "Dress to impress — Bavarian style!",
      description: "Come in a Dirndl or Lederhosen and embrace the Oktoberfest spirit.",
      icon: Shirt,
    },
  },
  {
    day: "SATURDAY",
    date: "7 November",
    title: "Gala Night",
    tagline: "An evening worth celebrating",
    description:
      "Gala Night is our most elegant evening of RPM, bringing everyone together to celebrate the people, moments and achievements that shaped our region. Inspired by the atmosphere of the opera, expect a night of recognition, celebration and a little bit of show.",
    image: "/gala.png",
    imageAlt: "Conference delegates celebrating together",
    icon: Trophy,
    accent: "text-fuchsia-200",
    border: "border-fuchsia-400/30",
    background: "bg-fuchsia-400/10",
    highlights: [
      "Awards and recognition celebrating achievements across our region.",
      "Intermezzos between the different parts of the evening.",
      "A chance to celebrate the people and moments that made our region special.",
    ],
    preparation: {
      title: "Dress code: Gala",
      description: "Bring your best gala outfit for our most elegant evening.",
      icon: Sparkles,
    },
  },
  {
    day: "SUNDAY",
    date: "8 November",
    title: "Global Village",
    tagline: "Bring your country to RPM",
    description:
      "Global Village is your chance to bring your country to RPM and let others experience a little piece of your culture. Each entity will have one or two tables to create its own stand and share what makes its country special. And of course, you'll have time to explore and experience the other entities' stands too!",
    image: "/gv.jpeg",
    imageAlt: "International delegates sharing cultures",
    icon: Globe2,
    accent: "text-cyan-200",
    border: "border-cyan-400/30",
    background: "bg-cyan-400/10",
    highlights: [
      "Bring food, drinks, souvenirs and decorations that represent your country.",
      "Prepare games or activities that let others experience your culture.",
      "Please do not bring national flags.",
    ],
    preparation: {
      title: "Prepare your country's stand",
      description:
        "Coordinate with your entity and bring something that represents your culture.",
      icon: Utensils,
    },
    challenge: {
      title: "The Euro Tunnel Challenge",
      description:
        "Take the challenge and try drinks from different entities, one after another, as you make your way through the Euro Tunnel!",
    },
  },
];

export default function GermanNight() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  return (
    <section id="special-events" className="relative scroll-mt-20">
      {/* Hero */}
      <div className="relative overflow-hidden bg-navy-950 px-5 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/60 via-navy-950 to-fuchsia-950/20" />
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">
              <Sparkles className="h-4 w-4" />
              Beyond the sessions
            </div>

            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Special <span className="ice-text">Events</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-frost-300 sm:text-lg">
              Four evenings. Four different experiences. From reconnecting as
              a region to celebrating cultures and achievements, there's more
              to RPM than what happens in the sessions.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {specialEvents.map((event, index) => (
                <a
                  key={event.day}
                  href={`#special-event-${index}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-frost-200 transition-colors hover:border-violet-300/40 hover:bg-violet-400/10 hover:text-white"
                >
                  {event.day.charAt(0) + event.day.slice(1).toLowerCase()}
                  <span className="ml-2 text-frost-400">
                    {event.date.split(" ")[0]}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Event overview */}
      <Section className="bg-navy-950">
        <SectionHeader
          eyebrow="Make every evening count"
          title={
            <>
              Four nights, <span className="ice-text">one region</span>
            </>
          }
          subtitle="Explore what's planned for each evening and find out what you should bring, wear or prepare."
        />

        <div className="mx-auto max-w-5xl space-y-6 sm:space-y-8">
          {specialEvents.map((event, index) => {
            const Icon = event.icon;
            const isExpanded = expandedEvent === index;

            return (
              <Reveal key={event.title} delay={index * 60}>
                <article
                  id={`special-event-${index}`}
                  className={`glass-card scroll-mt-24 overflow-hidden rounded-2xl border ${event.border}`}
                >
                  <div className="grid md:grid-cols-5">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden md:col-span-2 md:h-full md:min-h-[340px]">
                      <img
                        src={event.image}
                        alt={event.imageAlt}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-navy-950/10 md:to-navy-950/30" />

                      <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-navy-950/75 px-3 py-1.5 text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
                        {event.day} · {event.date}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-7 md:col-span-3 md:p-8">
                      <div className="mb-4 flex items-start gap-3">
                        <div
                          className={`rounded-xl ${event.background} p-3`}
                        >
                          <Icon className={`h-6 w-6 ${event.accent}`} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                            {event.title}
                          </h3>
                          <p className={`mt-1 text-sm font-medium ${event.accent}`}>
                            {event.tagline}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-frost-300 sm:text-base">
                        {event.description}
                      </p>

                      <div className="mt-6">
                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-frost-400">
                          What to expect
                        </h4>

                        <ul className="space-y-3">
                          {event.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3 text-sm leading-relaxed text-frost-200"
                            >
                              <span
                                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${event.background}`}
                              />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Preparation details */}
                      {event.preparation && (
                        <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                          <div className="flex items-start gap-3">
                            <event.preparation.icon
                              className={`mt-0.5 h-5 w-5 shrink-0 ${event.accent}`}
                            />
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {event.preparation.title}
                              </p>
                              <p className="mt-1 text-sm leading-relaxed text-frost-300">
                                {event.preparation.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Global Village challenge */}
                      {event.challenge && (
                        <div className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-300/5 p-4">
                          <p className="text-sm font-bold text-cyan-200">
                            ✨ {event.challenge.title}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-frost-200">
                            {event.challenge.description}
                          </p>
                        </div>
                      )}

                      {/* Optional extra details */}
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedEvent(isExpanded ? null : index)
                        }
                        aria-expanded={isExpanded}
                        className="mt-5 flex min-h-11 w-full items-center justify-between gap-3 border-t border-white/10 pt-4 text-left text-sm font-medium text-frost-300 transition-colors hover:text-white"
                      >
                        <span>
                          {isExpanded ? "Show less" : "A little more about this evening"}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <p className="pt-3 text-sm leading-relaxed text-frost-400">
                          {index === 0 &&
                            "Use this evening to meet people outside your usual circle, catch up with friends and start building connections across the region."}
                          {index === 1 &&
                            "Germany is much more than Bavaria, but Oktoberfest is a recognizable tradition that gives us a fun way to share one part of German culture with the region."}
                          {index === 2 &&
                            "Come ready to celebrate the effort, progress and achievements of people across our AIESEC region. Make the evening a moment to remember together."}
                          {index === 3 &&
                            "Coordinate with your entity before arriving so your stand is ready to share. Remember: no national flags."}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </section>
  );
}
