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
      { time: "17:00", title: "Welcome Address", description: "Official opening of RPM 2026 — meet the Chair team and get an overview of the conference journey ahead.", type: "plenary", location: "Main Hall" },
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
  // Essentials
  {
    id: "passport",
    label: "Passport or national ID card",
    category: "Essentials",
  },
  {
    id: "registration",
    label: "Conference registration confirmation",
    category: "Essentials",
  },
  {
    id: "insurance",
    label: "Travel and health insurance documents",
    category: "Essentials",
  },
  {
    id: "phone-charger",
    label: "Phone charger and suitable power adapter",
    category: "Essentials",
  },
  {
    id: "medication",
    label: "Personal medication and other personal essentials",
    category: "Essentials",
  },

  // Clothing & Accommodation
  {
    id: "warm-jacket",
    label: "Warm jacket for November weather",
    category: "Clothing & Accommodation",
  },
  {
    id: "layers",
    label: "Clothing you can layer for indoor and outdoor activities",
    category: "Clothing & Accommodation",
  },
  {
    id: "comfortable-shoes",
    label: "Comfortable walking shoes",
    category: "Clothing & Accommodation",
  },
  {
    id: "gala-outfit",
    label: "Gala Night outfit",
    category: "Clothing & Accommodation",
  },
  {
    id: "german-night-outfit",
    label: "German Night outfit (Dirndl, Lederhosen, or festive clothing)",
    category: "Clothing & Accommodation",
  },
  {
    id: "towels",
    label: "Personal towels (bed linen is provided)",
    category: "Clothing & Accommodation",
  },

  // Sessions
  {
    id: "laptop",
    label: "Laptop or tablet (if useful for sessions)",
    category: "Sessions",
  },
  {
    id: "notebook",
    label: "Notebook and pens",
    category: "Sessions",
  },
  {
    id: "power-bank",
    label: "Portable power bank",
    category: "Sessions",
  },

  // Global Village
  {
    id: "global-village",
    label: "Food, drinks, souvenirs, or decorations representing your country",
    category: "Global Village",
  },
  {
    id: "global-village-games",
    label: "Games or activities to share your culture",
    category: "Global Village",
  },

  // Optional Extras
  {
    id: "water-bottle",
    label: "Reusable water bottle",
    category: "Optional Extras",
  },
];


export type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export const faqs: FAQItem[] = [
  // Before You Arrive
  {
    category: "Before You Arrive",
    question: "What should I do before arriving at the conference?",
    answer:
      "Please prepare your travel documents and travel insurance. Pack the essentials listed in the Delegate Booklet and plan your route to Haus Neuland.",
  },
  {
    category: "Before You Arrive",
    question: "Where can I find the latest conference updates?",
    answer:
      "Join the official RPM Telegram group, follow @aiesecineuropeconferences on Instagram (https://www.instagram.com/aiesecineuropeconferences/), check your AIESEC email regularly, and keep an eye on the announcements posted here on the website.",
  },
  {
    category: "Before You Arrive",
    question: "Who should I contact if I have a question or need help?",
    answer:
      "You can reach out to the relevant team member depending on your question:\n\nLogistics (venue, food, etc.): Akın — @a40kyay\nMerch & Social Media: Niki — @nikisarafidou\nTransportation & Visa: Oussama — @ouss_mes\nFinances: rpm@aiesec.de\n\nNot sure whom to contact? Reach out to Jonny (@jonny_becker997), and he'll direct you to the right person.",
  },

  // Travel & Arrival
  {
    category: "Travel & Arrival",
    question: "How do I get to Haus Neuland?",
    answer:
      "Haus Neuland is located at Senner Hellweg 493, 33689 Bielefeld, Germany. Check the Shuttle channel on Telegram for transportation information and choose one of the available shuttle options. If you're travelling by car, free parking is available on-site.",
  },
  {
    category: "Travel & Arrival",
    question: "Where can I find shuttle schedules and pickup locations?",
    answer:
      "Check the Shuttle channel on Telegram for the latest information.\n\nDüsseldorf shuttle: Pickup on 5 November at 10:00 at Konrad-Adenauer-Platz 14, 40210 Düsseldorf. Please arrive by 09:45. The return shuttle departs on 9 November at 17:30. Approximate round-trip price: €45.\n\nOerlinghausen shuttle: Pickup at Oerlinghausen railway station on 5 November, with bookable slots every 30 minutes. Approximate round-trip price: €20, subject to availability.",
  },
  {
    category: "Travel & Arrival",
    question: "When should I arrive, and when can I leave?",
    answer:
      "RPM 2026 takes place from 5–9 November 2026. If you've booked the Düsseldorf shuttle, pickup is on 5 November at 10:00, and the return shuttle departs the venue on 9 November at 17:30. If you're travelling independently or using the Oerlinghausen shuttle, plan according to your booked slot and the conference schedule.",
  },
  {
    category: "Travel & Arrival",
    question: "What should I do if my train or flight is delayed?",
    answer:
      "If your journey is delayed, contact the person responsible for transportation as soon as possible. For shuttle-related questions, contact Oussama Messadi via email at oussama.messadi@aiesec.de or on Instagram at @ouss_mes. Please don't assume the shuttle can wait.",
  },
  {
    category: "Travel & Arrival",
    question: "Can I travel to the venue by car, and is parking available?",
    answer:
      "Yes, free on-site parking is available at Haus Neuland, Senner Hellweg 493, 33689 Bielefeld, Germany.",
  },

  // Accommodation & Essentials
  {
    category: "Accommodation & Essentials",
    question: "Will I share a room with other delegates?",
    answer:
      "Yes. Room allocation depends on the accommodation options you selected in the registration form.",
  },
  {
    category: "Accommodation & Essentials",
    question: "Are bed linen and towels provided?",
    answer:
      "Bed linen is provided. Please bring your own towels.",
  },
  {
    category: "Accommodation & Essentials",
    question: "What should I pack for the conference?",
    answer:
      "Check the Delegate Hub on this website for the recommended packing list and everything you need to prepare for RPM 2026.",
  },
  {
    category: "Accommodation & Essentials",
    question: "Should I bring cash, or can I pay by card?",
    answer:
      "Please bring cash or make sure you can pay via PayPal. Only cash and PayPal will be accepted.",
  },
  {
    category: "Accommodation & Essentials",
    question: "Is Wi-Fi available at Haus Neuland?",
    answer:
      "Wi-Fi should theoretically be available at Haus Neuland, but we cannot guarantee its reliability or quality. We recommend having mobile data available if possible.",
  },

  // Conference & Activities
  {
    category: "Conference & Activities",
    question: "Do I need to prepare anything for the sessions?",
    answer:
      "Bring a laptop and charger, notebook and pens, and a power bank. And, of course, bring plenty of excitement and motivation! If you're participating in Global Village, coordinate with your delegation and bring items that represent your country.",
  },
  {
    category: "Conference & Activities",
    question:
      "Is there a dress code for plenaries, workshops, and evening activities?",
    answer:
      "Daytime sessions: Comfortable clothing.\n\nPartner Space: Business-casual clothing.\n\nGala Night: A gala outfit.\n\nOktoberfest / German Night: A Dirndl or Lederhosen if you own one.\n\nBring warm layers and comfortable shoes, and follow any additional instructions from the OC.",
  },
  {
    category: "Conference & Activities",
    question:
      "Can I participate in evening activities if I do not drink alcohol?",
    answer:
      "Of course! You're welcome to enjoy the social activities regardless of whether you drink alcohol. Check the event information for details about activities and non-alcoholic options.",
  },

  // Safety & Wellbeing
  {
    category: "Safety & Wellbeing",
    question: "Who can I contact in case of an emergency?",
    answer:
      "In any emergency or urgent situation during the conference, please approach the CC Team for assistance.",
  },
  {
    category: "Safety & Wellbeing",
    question: "What should I do if I feel unwell during the conference?",
    answer:
      "If you feel unwell, inform a member of the organizing team so they can help you find appropriate assistance.",
  },
];



export const emergencyContacts = [
  
  {
    label: "Conference Organising Team",
    value: "rpm@aiesec.de",
    note: "For conference-related issues during the event",
  },
  {
    label: "Transportation Questions — Oussama",
    value: "@ouss_mes",
    note: "Contact Oussama on Telegram for shuttle bookings and transportation questions",
  },
  {
    label: "Overall Logistics — Akin",
    value: "@a40kyay",
    note: "Contact Akin on Telegram for venue and general logistics questions",
  },
  {
    label: "European Emergency Number",
    value: "112",
    note: "Free, pan-European emergency number for police, fire, and ambulance services",
  },
  {
    label: "German Police",
    value: "110",
    note: "Emergency police assistance in Germany",
  },
];

export const importantLinks = [

{
label: "Book Shuttle: Oerlinghausen → Haus Neuland",
url: "https://calendly.com/oussama-messadi-aiesec/rpm-shuttle-oerlinghausen-haus-neuland",
note: "Book your shuttle from Oerlinghausen station to the conference venue",
},
{
label: "Book Return Shuttle: Haus Neuland → Oerlinghausen",
url: "https://calendly.com/oussama-messadi-aiesec/rpm-shuttle-haus-neuland-oerlinghausen",
note: "Book your return shuttle from the conference venue to Oerlinghausen station",
},
{
label: "RPM 2026 Conference Booklet",
url: "https://go.aiesec.de/rpm-delegate-booklet",
note: "Find important conference information and prepare for your experience",
},
{
label: "Deutsche Bahn Journey Planner",
url: "https://www.bahn.com/en",
note: "Plan train journeys across Germany",
},
{
label: "Bielefeld Public Transport (moBiel)",
url: "https://www.mobiel.de",
note: "Local buses and trams in Bielefeld",
},
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
