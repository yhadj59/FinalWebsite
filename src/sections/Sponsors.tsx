
import Section from "@/components/Section";
import { SectionHeader } from "@/components/Section";

const sponsors = [
  { name: "Sponsor One", logo: "/sponsors/sponsor-one.png" },
  { name: "Sponsor Two", logo: "/sponsors/sponsor-two.png" },
  { name: "Sponsor Three", logo: "/sponsors/sponsor-three.png" },
  { name: "Sponsor Four", logo: "/sponsors/sponsor-four.png" },
  { name: "Sponsor Five", logo: "/sponsors/sponsor-five.png" },
  { name: "Sponsor Six", logo: "/sponsors/sponsor-six.png" },
];

export default function Sponsors() {
  return (
    <Section id="sponsors">
      <SectionHeader
        eyebrow="OUR PARTNERS"
        title="Powered by Those Who Believe"
        subtitle="Behind every great conference are people and partners who make it possible. Meet the organizations supporting RPM 2026."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="glass-card flex min-h-36 flex-col items-center justify-center gap-3 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-20 w-full items-center justify-center rounded-lg bg-white p-3">
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>

            <p className="text-center text-sm font-medium text-white">
              {sponsor.name}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
