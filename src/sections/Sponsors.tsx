
import Section from "@/components/Section";
import { SectionHeader } from "@/components/Section";

const sponsors = [
  { name: "Mondelez", logo: "/sponsors/Mondelez_International.svg.webp" },
  { name: "Allied", logo: "/sponsors/Allied.webp" },
  { name: "Breitsamer Honig", logo: "/sponsors/breitsamer.png" },
  { name: "Dr. Oetker", logo: "/sponsors/Dr._Oetker-Logo.svg.webp" },
  { name: "Zetti", logo: "/sponsors/Zetti_Logo_2024.svg" },
  { name: "Bohlsner Mühle", logo: "/sponsors/Bohlsener.png" },
  { name: "Flash U", logo: "/sponsors/FlashU.jpg" },
  { name: "Stadt Bielefeld", logo: "/sponsors/Logo_BI_Stadt_Bielefeld_sRGB.png" },
  { name: "Mizaru", logo: "/sponsors/mizaru_Logo.webp" },
  { name: "Pur Ya!", logo: "/sponsors/PURYA_Logo_R_pos.webp" },
  { name: "Fair Squared", logo: "/sponsors/logo-fair-squared.png" },
  { name: "HK Hotel Düsseldorf City", logo: "/sponsors/Google-Logo-HK-Hotel-Duesseldorf.png" },
  { name: "Deutssches Jugendherbergswerk", logo: "/sponsors/Deutsches_Jugendherbergswerk_logo.svg" },
  { name: "Grafschaftler Karnevalsgesellschaft Reitberg e.V.", logo: "/sponsors/LogoGK_Vektor_RGB-216x300.png" },
  { name: "Malnut", logo: "/sponsors/logo_Malunt-02.webp" },
  { name: "Laziz food", logo: "/sponsors/logo.webp" },
  { name: "Jake's Beverages", logo: "/sponsors/images (1).png" },
  { name: "Detmolder Pilsener", logo: "/sponsors/images.jpg" },
  { name: "Plant for the Planet", logo: "/sponsors/images.png" },
  { name: "Limoment", logo: "/sponsors/Logo_Limoment.webp" },
  { name: "Gönrgy", logo: "/sponsors/Gönrgy.webp" },
  { name: "Hans Stockmar", logo: "/sponsors/Hans_Stockmar_Logo.svg" },
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
