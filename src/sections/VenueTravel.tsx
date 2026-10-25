import { MapPin, Check } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { venueInfo, conference, images } from "@/content";

export default function VenueTravel() {
  return (
    <section id="venue-travel" className="scroll-mt-20">
      <Section className="bg-navy-950">
        <SectionHeader
          eyebrow="Venue & Travel"
          title={<>Haus Neuland, <span className="ice-text">Bielefeld</span></>}
          subtitle="Your home for five days — a modern conference centre set in the peaceful countryside on the edge of the Teutoburg Forest."
        />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Venue image */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/haus-neuland.jpg"
                alt="Haus Neuland conference centre in Bielefeld"
                className="h-[280px] w-full rounded-2xl object-cover sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5">
                <h3 className="font-display text-xl font-bold text-white">{venueInfo.name}</h3>
                <p className="text-sm text-frost-200 mt-0.5 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-ice-400" />
                  {venueInfo.address}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Venue features */}
          <Reveal delay={150}>
            <div>
              <p className="text-frost-300 leading-relaxed mb-6">{venueInfo.description}</p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {venueInfo.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-frost-200">
                    <Check className="h-4 w-4 flex-shrink-0 text-ice-400 mt-0.5" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Map */}
      <Section className="bg-navy-900/50">
        <SectionHeader
          eyebrow="Directions"
          title={<>How to <span className="ice-text">find us</span></>}
    
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src={conference.mapsEmbed}
              title="Map of Haus Neuland, Bielefeld"
              className="h-[300px] w-full sm:h-[420px]"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-sm text-frost-300">{conference.fullAddress}</p>
            <a
              href={conference.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ice-500/15 border border-ice-400/30 px-5 py-2 text-sm font-medium text-ice-200 transition-all hover:bg-ice-500/25 hover:border-ice-400/50"
            >
              <MapPin className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
        </Reveal>
      </Section>
    </section>
  );
}
