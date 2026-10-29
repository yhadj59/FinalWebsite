
import {
  Users,
  HeartHandshake,
  GraduationCap,
  Sparkles,
  Send,
  ExternalLink,
} from "lucide-react";


const teams = [
  {
    id: "cc-team",
    number: "01",
    title: "CC Team",
    subtitle: "Conference Committee",
    description:
      "The people behind the planning, coordination, and delivery of RPM 26 Germany.",
    icon: Users,
    members: [
      {
        name: "Jonny",
        function: "CCP",
        telegram: "jonny_becker997",
        photo: "/team/cc-team/Jonny.jpeg",
      },
      {
        name: "Cui",
        function: "CCVP Finance",
        telegram: "jiaxun_cui",
        photo: "/team/cc-team/Cui.jpeg",
      },
      {
        name: "Akin",
        function: "CCVP Logistics",
        telegram: "a40kyay",
        photo: "/team/cc-team/Akin.jpeg",
      },
      {
        name: "Diana",
        function: "CCVP BD",
        telegram: "dianach_t",
        photo: "/team/cc-team/Diana.png",
      },
      {
        name: "Yousri",
        function: "CC Raising & PR",
        telegram: "yousri25",
        photo: "/team/cc-team/Yousri.png",
      },
      {
        name: "Lucia",
        function: "CCVP DXP",
        telegram: "luciacgb",
        photo: "/team/cc-team/Lucia.jpeg",
      },
      {
        name: "Niki",
        function: "CC Marketing",
        telegram: "nikisarafidou",
        photo: "/team/cc-team/Niki.jpg",
      },
      {
        name: "Oussama",
        function: "CC Travel Logistics",
        telegram: "ouss_mes",
        photo: "/team/cc-team/Oussama.jpeg",
      },
    ],
  },
  {
    id: "core-team",
    number: "02",
    title: "Core Team",
    subtitle: "Core Organizing Team",
    description:
      "The people supporting the key functions that bring the conference experience together.",
    icon: HeartHandshake,
    members: [
      {
        name: "Helene",
        function: "Conference Manager",
        telegram: "HeleneTysk",
        photo: "/team/core-team/Helene.jpeg",
      },
      {
        name: "Lithium",
        function: "Europe RD",
        telegram: "ahmedellithyyy",
        photo: "/team/core-team/Lithium.jpeg",
      },
      {
        name: "Christina",
        function: "Agenda Manager",
        telegram: "chtoliou",
        photo: "/team/core-team/Christina.JPG",
      },
      {
        name: "Anastasia",
        function: "Agenda Manager",
        telegram: "anastasiia_shykera",
        photo: "/team/core-team/Anastasia.jpeg",
      },
    ],
  },
    
  {
    id: "chair",
    number: "03",
    title: "Chair",
    subtitle: "Conference Chair",
    description:
      "The Chair guiding the conference experience and supporting the team in bringing RPM 26 Germany to life.",
    icon: Sparkles,
    members: [
      {
        name: "Surprise",
        function: "Chair",
        telegram: "",
        photo: "/team/chair/chair.png",
      },
    ],
  },

    {
    id: "facis",
    number: "04",
    title: "Facis",
    subtitle: "Facilitators",
    description:
      "The facilitators creating learning experiences, meaningful conversations, and new perspectives.",
    icon: GraduationCap,
    members: [
      {
        name: "Aleyna",
        function: "PAI / Faci",
        telegram: "Aleyloy",
        photo: "/team/facis-team/Aleyna.jpeg",
      },
      {
        name: "Anson",
        function: "AI 2026 / Faci",
        telegram: "ansoncyh",
        photo: "/team/facis-team/Anson.JPG",
      },
      {
        name: "Yana",
        function: "Regional Team / Faci",
        telegram: "yana_osmachko",
        photo: "/team/facis-team/Yana.jpg",
      },
      {
        name: "Firas",
        function: "Regional Team / Faci",
        telegram: "FirasAtigui",
        photo: "/team/facis-team/Firas.png",
      },
      {
        name: "George",
        function: "Regional Team / Faci",
        telegram: "Georgio_Pap",
        photo: "/team/facis-team/George.jpeg",
      },
      {
        name: "Katerina",
        function: "Regional Team / Faci",
        telegram: "ToKelepouriSou",
        photo: "/team/facis-team/Katerinaa.JPG",
      },
      {
        name: "Katerina",
        function: "Regional Team / Faci",
        telegram: "katerinatasopoulou",
        photo: "/team/facis-team/Katerina.jpg",
      },
      {
        name: "Aziz",
        function: "MCP Tunisia / Faci",
        telegram: "azizbecher",
        photo: "/team/facis-team/Aziz.png",
      },
      {
        name: "Celos",
        function: "MCP Portugal / Faci",
        telegram: "diogofv1",
        photo: "/team/facis-team/Diogo.jpeg",
      },
      {
        name: "Sofi",
        function: "MCP Hungary / Faci",
        telegram: "sofipp6",
        photo: "/team/facis-team/Sofi.jpg",
      },
      {
        name: "Rozhan",
        function: "MCVP iCX Germany / Faci",
        telegram: "rzhn_kh",
        photo: "/team/facis-team/Rozhan.jpeg",
      },
      {
        name: "Olti",
        function: "MCVP OD Romania / Faci",
        telegram: "ioanaoltean",
        photo: "/team/facis-team/Olti.jpeg",
      },
      {
        name: "Gülfidan",
        function: "MCVP OPS Turkey / Faci",
        telegram: "gulfidanhanli",
        photo: "/team/facis-team/Gülfidan.jpeg",
      },
      {
        name: "Sofia",
        function: "MCVP MKT Netherlands / Faci",
        telegram: "sofiahdalmeida",
        photo: "/team/facis-team/Sofia.jpeg",
      },
      {
        name: "Ioanna",
        function: "MCVP OD Greece / Faci",
        telegram: "Ioanna_Evangeli",
        photo: "/team/facis-team/Ioanna.jpg",
      },
    ],
  },
];





function TeamGroup({ team }: { team: (typeof teams)[number] }) {
  const Icon = team.icon;

  return (
    <div id={team.id} className="scroll-mt-28">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Icon className="h-5 w-5 text-violet-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              {team.subtitle}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            {team.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">
            {team.description}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
          {team.members.length} members
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {team.members.map((member, index) => (
          <article
            key={`${team.id}-${member.name}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/[0.07]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-violet-950/40">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <Icon className="h-12 w-12 text-violet-200/70" />
                </div>
              )}

              <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/30 px-2 py-1 text-[10px] font-medium text-white/80 backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="p-3 sm:p-4">
              <h4 className="text-base font-bold text-white sm:text-lg">
                {member.name}
              </h4>

              <p className="mt-1 min-h-5 text-xs font-medium leading-relaxed text-violet-200 sm:text-sm">
                {member.function}
              </p>

              {member.telegram && (
                <a
                  href={`https://t.me/${member.telegram.replace(/^@/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-lg border border-violet-300/20 bg-violet-400/10 px-3 py-2 text-xs font-medium text-violet-200 transition-colors hover:border-violet-300/50 hover:bg-violet-400/20 hover:text-white"
                  aria-label={`Contact ${member.name} on Telegram`}
                >
                  <Send className="h-3.5 w-3.5" />
                  Telegram
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}



export default function ConferenceTeam() {
  return (
    <section
      id="conference-team"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-violet-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
              The people behind RPM 26
            </span>
          </div>

          <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Meet the{" "}
            <span className="bg-gradient-to-r from-violet-300 via-purple-200 to-fuchsia-300 bg-clip-text text-transparent">
              Conference Team
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-violet-100/70 sm:text-lg">
            Different roles, different perspectives, one shared experience.
            Meet the people bringing RPM 26 Germany to life.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {teams.map((team) => (
              <a
                key={team.id}
                href={`#${team.id}`}
                className="rounded-full border border-violet-300/20 bg-white/[0.03] px-4 py-2 text-sm text-violet-100 transition-colors hover:border-violet-300/50 hover:bg-violet-400/10"
              >
                {team.title}
              </a>
            ))}
          </div>

          <p className="mt-5 text-sm text-violet-200/50">
            29 people · One conference · One team
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {teams.map((team) => (
            <TeamGroup key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
}
