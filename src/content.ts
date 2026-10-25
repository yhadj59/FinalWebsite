// ============================================================
// CENTRALIZED CONTENT — AIESEC European Regional Conference 2026
// ============================================================
// Edit everything here. No need to touch component code to update
// dates, sessions, links, announcements, FAQ entries, or images.
// ============================================================


export const conference = {
  name: "Regional Presidents Meeting Germany 2026",
  shortName: "RPM 2026",
  theme: "THE STARFISH: What AIESEC Can Be",
  startDateISO: "2026-11-05T17:00:00+01:00",
  datesDisplay: "5–9 November 2026",
  venue: "Haus Neuland",
  city: "Bielefeld",
  country: "Germany",

  fullAddress:
    "Haus Neuland e.V., Senner Hellweg 493, 33689 Bielefeld, Germany",

  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Senner+Hellweg+493%2C+33689+Bielefeld%2C+Germany",

  mapsEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=8.62%2C51.94%2C8.65%2C51.96&layer=mapnik&marker=51.95017%2C8.63461",
};


export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Agenda", id: "agenda" },
  { label: "Delegate Hub", id: "delegate-hub" },
  { label: "Special Events", id: "special-events" },
  { label: "Conference Team", id: "conference-team" },
  { label: "Venue & Travel", id: "venue-travel" },
];

export const images = {
  heroMountain:
    "https://images.pexels.com/photos/33085583/pexels-photo-33085583.jpeg?auto=compress&cs=tinysrgb&w=1920",
  heroForest:
    "https://images.pexels.com/photos/30114541/pexels-photo-30114541.jpeg?auto=compress&cs=tinysrgb&w=1920",
  aurora:
    "https://images.pexels.com/photos/1663376/pexels-photo-1663376.jpeg?auto=compress&cs=tinysrgb&w=1920",
  iceTexture:
    "https://images.pexels.com/photos/27269655/pexels-photo-27269655.jpeg?auto=compress&cs=tinysrgb&w=1920",
  glacier:
    "https://images.pexels.com/photos/28129919/pexels-photo-28129919.jpeg?auto=compress&cs=tinysrgb&w=1920",
  conferenceAudience:
    "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&w=1920",
  conferenceCrowd:
    "https://images.pexels.com/photos/14373426/pexels-photo-14373426.jpeg?auto=compress&cs=tinysrgb&w=1920",
  conferenceAuditorium:
    "https://images.pexels.com/photos/11329863/pexels-photo-11329863.jpeg?auto=compress&cs=tinysrgb&w=1920",
  snowForest:
    "https://images.pexels.com/photos/35791157/pexels-photo-35791157.jpeg?auto=compress&cs=tinysrgb&w=1920",
  // German Night
  oktoberfestCrowd:
    "https://images.pexels.com/photos/1467807/pexels-photo-1467807.jpeg?auto=compress&cs=tinysrgb&w=1920",
  oktoberfestDance:
    "https://images.pexels.com/photos/1574217/pexels-photo-1574217.jpeg?auto=compress&cs=tinysrgb&w=1920",
  oktoberfestBeer:
    "https://images.pexels.com/photos/1533864/pexels-photo-1533864.jpeg?auto=compress&cs=tinysrgb&w=1920",
  oktoberfestSteins:
    "https://images.pexels.com/photos/28702296/pexels-photo-28702296.jpeg?auto=compress&cs=tinysrgb&w=1920",
  oktoberfestFood:
    "https://images.pexels.com/photos/30146115/pexels-photo-30146115.jpeg?auto=compress&cs=tinysrgb&w=1920",
  oktoberfestLager:
    "https://images.pexels.com/photos/16814456/pexels-photo-16814456.jpeg?auto=compress&cs=tinysrgb&w=1920",
};

export type AgendaSession = {
  time: string;
  title: string;
  description: string;
  type: "plenary" | "workshop" | "break" | "social" | "ceremony" | "meal";
  location?: string;
};

export type AgendaDay = {
  day: string;
  date: string;
  weekday: string;
  summary: string;
  sessions: AgendaSession[];
};

export const agenda: AgendaDay[] = [
  {
    day: "Day 0",
    date: "5 November",
    weekday: "Thursday",
    summary: "Arrivals, registration and opening celebrations.",
    sessions: [
      { time: "15:00", title: "Arrivals & Registration", description: "Delegates arrive and check in at Haus Neuland. Collect your badge, welcome pack and accommodation details.", type: "ceremony", location: "Main Lobby" },
      { time: "17:00", title: "Welcome Address", description: "Official opening of ERC 2026 — meet the Chair team and get an overview of the conference journey ahead.", type: "plenary", location: "Main Hall" },
      { time: "19:00", title: "Welcome Dinner", description: "A first taste of German hospitality — dinner buffet featuring regional specialties.", type: "meal", location: "Dining Hall" },
      { time: "20:30", title: "Icebreaker Night", description: "Break the ice with delegates from across Europe through interactive team-building games.", type: "social", location: "Main Hall" },
    ],
  },
  {
    day: "Day 1",
    date: "6 November",
    weekday: "Friday",
    summary: "Strategic plenaries, leadership tracks and Global Village prep.",
    sessions: [
      { time: "08:00", title: "Breakfast", description: "Continental breakfast with fresh German breads, cheeses and coffee.", type: "meal" },
      { time: "09:00", title: "Opening Plenary: Starfish — What AIESEC Can Be", description: "Keynote session exploring the conference theme and the role of young leaders in shaping Europe's future.", type: "plenary", location: "Main Hall" },
      { time: "10:30", title: "Leadership Track I", description: "Parallel leadership development workshops. Track selection will be confirmed at registration.", type: "workshop", location: "Breakout Rooms" },
      { time: "12:30", title: "Lunch", description: "Lunch buffet with vegetarian and vegan options.", type: "meal" },
      { time: "13:30", title: "Leadership Track II", description: "Continuation of morning leadership workshops with deeper dives into organisational strategy.", type: "workshop", location: "Breakout Rooms" },
      { time: "15:30", title: "Coffee Break", description: "Networking break with refreshments.", type: "break" },
      { time: "16:00", title: "Panel Discussion — Youth Leadership in Europe", description: "Panellists share perspectives on the challenges and opportunities for youth leadership across the continent. [Panellists TBC]", type: "plenary", location: "Main Hall" },
      { time: "18:00", title: "Global Village Preparation", description: "Set up your country booth and prepare cultural presentations for the evening.", type: "ceremony", location: "Main Hall" },
      { time: "20:00", title: "Global Village", description: "Travel the world in one night! Each delegation showcases food, drinks, music and culture from their country.", type: "social", location: "Main Hall" },
    ],
  },
  {
    day: "Day 2",
    date: "7 November",
    weekday: "Saturday",
    summary: "Skills labs, external partners and the legendary German Night.",
    sessions: [
      { time: "08:00", title: "Breakfast", description: "Continental breakfast.", type: "meal" },
      { time: "09:00", title: "Skills Lab I", description: "Choose from a range of skill-building sessions: facilitation, project management, digital marketing, and more.", type: "workshop", location: "Breakout Rooms" },
      { time: "10:45", title: "Skills Lab II", description: "Second round of skills labs — pick a different session from the morning.", type: "workshop", location: "Breakout Rooms" },
      { time: "12:30", title: "Lunch", description: "Lunch buffet.", type: "meal" },
      { time: "13:30", title: "Partner & Alumni Exchange", description: "Meet AIESEC partners and alumni. Learn about career pathways and internship opportunities. [Partners TBC]", type: "plenary", location: "Main Hall" },
      { time: "15:30", title: "Coffee Break", description: "Networking break.", type: "break" },
      { time: "16:00", title: "Strategy Forum", description: "Region-wide discussion on AIESEC's strategic direction and goals for the coming year.", type: "plenary", location: "Main Hall" },
      { time: "18:00", title: "Dinner", description: "Early dinner before the evening festivities.", type: "meal" },
      { time: "20:00", title: "German Night — Oktoberfest Edition", description: "The conference highlight! A Bavarian-themed celebration with traditional food, music, beer and cultural activities. See the German Night page for details.", type: "social", location: "Main Hall" },
    ],
  },
  {
    day: "Day 3",
    date: "8 November",
    weekday: "Sunday",
    summary: "Elections, awards and reflection.",
    sessions: [
      { time: "09:00", title: "Breakfast", description: "Late breakfast — recovery morning after German Night.", type: "meal" },
      { time: "10:00", title: "Regional Elections", description: "Election of the regional leadership team for the upcoming term. Voting procedures will be shared in advance.", type: "ceremony", location: "Main Hall" },
      { time: "12:30", title: "Lunch", description: "Lunch buffet.", type: "meal" },
      { time: "13:30", title: "Awards Ceremony", description: "Recognising outstanding contributions from entities and individuals across the region.", type: "ceremony", location: "Main Hall" },
      { time: "15:00", title: "Closing Plenary", description: "Reflections, key takeaways and handover to the next conference host.", type: "plenary", location: "Main Hall" },
      { time: "17:00", title: "Free Time & Networking", description: "Relax, connect with fellow delegates and enjoy the venue surroundings.", type: "break" },
      { time: "19:00", title: "Gala Dinner", description: "A formal dinner to celebrate the conference and the connections made. Dress to impress!", type: "meal", location: "Dining Hall" },
      { time: "21:00", title: "Closing Party", description: "Final night celebration — dance, music and unforgettable memories.", type: "social", location: "Main Hall" },
    ],
  },
  {
    day: "Day 4",
    date: "9 November",
    weekday: "Monday",
    summary: "Farewells and departures.",
    sessions: [
      { time: "08:00", title: "Breakfast & Checkout", description: "Final breakfast. Please check out of your room and return keys before 10:00.", type: "meal" },
      { time: "09:00", title: "Farewell Gathering", description: "A moment to say goodbye, exchange contacts and reflect on the week.", type: "ceremony", location: "Main Lobby" },
      { time: "10:00", title: "Departures", description: "Buses and carpools depart for Bielefeld Hauptbahnhof and onward travel.", type: "break" },
    ],
  },
];

export type ChecklistItem = {
  id: string;
  label: string;
  category: string;
};

export const packingChecklist: ChecklistItem[] = [
  { id: "passport", label: "Passport or national ID card", category: "Essentials" },
  { id: "ticket", label: "Conference registration confirmation (printed or digital)", category: "Essentials" },
  { id: "insurance", label: "Travel / health insurance document", category: "Essentials" },
  { id: "phone-charger", label: "Phone charger and EU power adapter", category: "Essentials" },
  { id: "medications", label: "Any personal medications", category: "Essentials" },
  { id: "warm-jacket", label: "Warm winter jacket", category: "Clothing" },
  { id: "layers", label: "Layerable clothing for indoor/outdoor transitions", category: "Clothing" },
  { id: "comfortable-shoes", label: "Comfortable shoes for walking", category: "Clothing" },
  { id: "formal-wear", label: "Smart-casual outfit for the Gala Dinner", category: "Clothing" },
  { id: "german-night-outfit", label: "Bavarian or traditional national outfit for German Night", category: "Clothing" },
  { id: "global-village-items", label: "Country items for Global Village (snacks, flags, decor)", category: "Global Village" },
  { id: "presentation", label: "Presentation materials if you are facilitating a session", category: "Global Village" },
  { id: "laptop", label: "Laptop or tablet (optional, for workshops)", category: "Optional" },
  { id: "reusable-bottle", label: "Reusable water bottle", category: "Optional" },
  { id: "power-bank", label: "Portable power bank", category: "Optional" },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "How do I register for ERC 2026?",
    answer: "Registration is managed through your local AIESEC entity. Contact your entity leadership or check your internal AIESEC communication channels for the registration link and deadlines.",
  },
  {
    question: "Is accommodation included in the conference fee?",
    answer: "Yes, accommodation at Haus Neuland is included for the duration of the conference (5–9 November). You will be assigned a shared room. If you require a single room for medical or other reasons, please contact the organising team in advance.",
  },
  {
    question: "Are meals provided?",
    answer: "All meals from Thursday dinner through Monday breakfast are included. Vegetarian, vegan and halal options are available at every meal. Please indicate dietary requirements during registration.",
  },
  {
    question: "How do I get to Haus Neuland from the airport?",
    answer: "The nearest major airports are Hannover (HAJ) and Dortmund (DTM). From either airport, take a train to Bielefeld Hauptbahnhof, then a shuttle bus or taxi to Haus Neuland. See the Venue & Travel page for detailed directions.",
  },
  {
    question: "What is the dress code?",
    answer: "Daytime sessions are smart-casual. The Gala Dinner on Sunday is formal (dress to impress!). German Night on Saturday is Bavarian or traditional national dress — or anything festive and comfortable.",
  },
  {
    question: "Can I arrive early or stay late?",
    answer: "Haus Neuland accommodation is available only for the conference dates. If you wish to extend your stay in Bielefeld, please book a hotel independently. The organising team can recommend options.",
  },
  {
    question: "Will there be Wi-Fi?",
    answer: "Yes, complimentary Wi-Fi is available throughout the venue. The network name and password will be provided at registration.",
  },
  {
    question: "I have a question not listed here. Who do I contact?",
    answer: "Email the organising team at the address listed in the Emergency Contacts section of the Delegate Hub, or ask your entity leadership to reach out through official AIESEC channels.",
  },
];



export const emergencyContacts = [
  { label: "European Emergency Number", value: "112", note: "Free, pan-European emergency number (police, fire, ambulance)" },
  { label: "German Police (non-urgent)", value: "110", note: "Non-emergency police assistance" },
  { label: "Conference Organising Team", value: "[Email TBC]", note: "For conference-related issues during the event" },
  { label: "Haus Neuland Reception", value: "[Phone TBC]", note: "On-site venue reception, available 24/7 during the conference" },
  { label: "AIESEC Regional Office", value: "[Contact TBC]", note: "For pre-conference questions via official AIESEC channels" },
];

export const importantLinks = [
  { label: "Register for ERC 2026 [Link TBC]", url: "#", note: "Registration portal (via your AIESEC entity)" },
  { label: "Conference Info Pack [TBC]", url: "#", note: "Detailed delegate guide (published closer to the event)" },
  { label: "Haus Neuland Website", url: "https://www.haus-neuland.de", note: "Venue information and facilities" },
  { label: "Deutsche Bahn Journey Planner", url: "https://www.bahn.com/en", note: "Plan train journeys across Germany" },
  { label: "Bielefeld Public Transport (moBiel)", url: "https://www.mobiel.de", note: "Local buses and trams in Bielefeld" },
];

export const announcements = [
  
  
  {
    date: "23 Oct 2026",
    tag: "German Night",
    priority: "info" as const,
    title: "Start planning your German Night outfit!",
    body: "German Night is the social highlight of the conference. Bring Bavarian or traditional national dress, or anything festive. Pretzels, traditional food and great company await!",
  },
  {
    date: "23 Oct 2026",
    tag: "Global Village",
    priority: "important" as const,
    title: "Global Village — bring your country booth",
    body: "Each delegation will host a country booth with food, drinks, music and culture. Please coordinate with your entity and bring items from home. Booth spaces will be assigned at the venue.",
  },
  {
    date: "23 Oct 2026",
    tag: "Programme",
    priority: "info" as const,
    title: "Full programme coming soon",
    body: "The agenda shown on this site is a placeholder. The final programme with confirmed session times, facilitators and locations will be published approximately 2 weeks before the conference. [Programme TBC]",
  },
];



export const venueInfo = {
  name: "Haus Neuland",
  description:
    "Haus Neuland is a well-equipped conference and seminar centre in Bielefeld, Germany. Set in a peaceful natural setting on the edge of the Teutoburg Forest, it provides the perfect atmosphere for focused discussions, team-building and celebration. The venue offers modern meeting rooms, a large plenary hall, comfortable accommodation, full catering and ample outdoor space.",
  features: [
    "Large plenary hall seating up to 300 delegates",
    "Multiple breakout rooms for parallel sessions",
    "On-site accommodation with shared rooms",
    "Full-board catering with vegetarian and vegan options",
    "Free on-site parking",
    "Outdoor spaces for breaks and activities",
  
  ],
  address: "Senner Hellweg 493, 33689 Bielefeld",
};
