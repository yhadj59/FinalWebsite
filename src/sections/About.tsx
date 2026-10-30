import { Users, Target, Globe, TrendingUp, Sparkles, GitBranch, RefreshCw } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { images } from "@/content";

const pillars = [
  {
    icon: Users,
    title: "Engage",
    desc: "Engage with fellow presidents who share your challenges, ambitions, and responsibility for growing AIESEC.",
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

      {/* The Starfish Concept */}
      <Section className="bg-navy-950">
        <SectionHeader
          eyebrow="The idea behind the theme"
          title={
            <>
              Why the <span className="ice-text">Starfish?</span>
            </>
          }
          subtitle="Two ways of growing. One choice for the future of AIESEC in Europe."
          centered={false}
        />

        <Reveal>
          <div className="mb-10 rounded-2xl border border-violet-300/20 bg-violet-500/5 p-6 sm:p-8">
            <p className="text-center font-display text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              Cut off a spider's head, and it dies.
              <br />
              <span className="ice-text">
                Cut off a starfish's arm, and it grows a new one.
              </span>
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full p-6 sm:p-8">
              <div className="mb-5 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                <GitBranch className="h-7 w-7 text-frost-300" />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-frost-300">
                The challenge
              </p>

              <h3 className="mb-3 font-display text-2xl font-bold text-white">
                The Spider
              </h3>

              <p className="leading-relaxed text-frost-300">
                Today, AIESEC in Europe risks growing too much like a spider:
                depending on a few entities, waiting for answers from top
                leaders, and relying on the center to create momentum.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="glass-card h-full border border-violet-300/20 p-6 sm:p-8">
              <div className="mb-5 inline-flex rounded-xl bg-violet-500/10 p-3 ring-1 ring-violet-400/20">
                <RefreshCw className="h-7 w-7 text-violet-300" />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                The possibility
              </p>

              <h3 className="mb-3 font-display text-2xl font-bold text-white">
                The Starfish
              </h3>

              <p className="leading-relaxed text-frost-300">
                At RPM 2026, we want to become a starfish movement: a region
                that grows from every entity, every Local Committee, and every
                leader. A movement held together not by a head, but by a shared
                essence and culture.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 space-y-5 text-center">
            <p className="mx-auto max-w-3xl leading-relaxed text-frost-300">
              In a starfish movement, every leader is an arm — able to take
              initiative, create impact, and grow from the culture and essence
              we share. When every part can grow, the entire movement becomes
              stronger.
            </p>

            <p className="font-display text-2xl font-bold text-white sm:text-3xl">
              Are you ready to become a{" "}
              <span className="ice-text">starfish?</span>
            </p>
          </div>
        </Reveal>
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