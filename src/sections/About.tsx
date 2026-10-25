import { Users, Target, Globe, TrendingUp, Sparkles } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { images } from "@/content";

const pillars = [
  {
    icon: Users,
    title: "Connect",
    desc: "Connect with fellow presidents who share your challenges, ambitions, and responsibility for growing AIESEC.",
  },
  {
    icon: Target,
    title: "Connect with Your Role",
    desc: "Gain a clearer perspective on your role and the opportunities you have to make an impact in your entity.",
  },
  {
    icon: Globe,
    title: "Learn from the Region",
    desc: "Exchange perspectives, learn from GCPs, and discover approaches you can bring back to your own entity.",
  },
  {
    icon: TrendingUp,
    title: "Upscale Your Exchanges",
    desc: "Turn insights, sessions, and shared experiences into actions that help you upscale your exchanges.",
  },
];

export default function About() {
  return (
    <div id="about">
      {/* Introduction */}
      <Section className="bg-navy-950">
        <SectionHeader
          eyebrow="About RPM 26"
          title={
            <>
              The STARFISH:{" "}
              <span className="ice-text">What AIESEC Can Be</span>
            </>
          }
          subtitle="A space for presidents to connect with their role, their region, and each other — and explore what AIESEC can become."
        />

        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          {/* Replace this image with your new RPM photo */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/about.png"
                alt="AIESEC leaders coming together at a conference"
                className="h-[320px] w-full rounded-2xl object-cover sm:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10091f]/60 to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-5">
              <h3 className="font-display text-2xl font-bold text-white">
                More than a meeting
              </h3>

              <p className="leading-relaxed text-frost-300">
                RPM brings together MCPs, LCPc, and LCPe to connect with their
                role, learn from the region, and exchange experiences with
                fellow presidents. It is an opportunity to step back from
                day-to-day responsibilities, gain new perspectives, and
                explore how we can strengthen AIESEC together.
              </p>

              <div className="flex items-start gap-3 rounded-xl border border-violet-300/20 bg-violet-500/5 p-4">
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-violet-300" />
                <p className="text-sm leading-relaxed text-violet-100/90">
                  The STARFISH is an invitation to rethink what AIESEC can be
                  and how each of us can contribute to that future.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      

      {/* What delegates can take away */}
      <Section className="bg-navy-950">
        <SectionHeader
          eyebrow="The RPM experience"
          title={
            <>
              Connect. Learn.{" "}
              <span className="ice-text">Take action.</span>
            </>
          }
          centered={false}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;

            return (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="glass-card group h-full p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-3 ring-1 ring-violet-400/20 transition-all duration-300 group-hover:bg-violet-500/20 group-hover:ring-violet-400/40">
                    <Icon className="h-6 w-6 text-violet-300" />
                  </div>

                  <h3 className="mb-2 font-display text-xl font-bold text-white">
                    {pillar.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-frost-300">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </div>
  );
}