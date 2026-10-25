import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Agenda from "@/sections/Agenda";
import DelegateHub from "@/sections/DelegateHub";
import GermanNight from "@/sections/GermanNight";
import VenueTravel from "@/sections/VenueTravel";
import Announcements from "@/sections/Announcements";
import ConferenceTeam from "@/sections/ConferenceTeam";
import type { SectionId } from "@/types";

const sectionIds: SectionId[] = [
  "home",
  "about",
  "agenda",
  "delegate-hub",
  "special-events",
  "conference-team",
  "venue-travel",
  "announcements",
];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const navigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-navy-950">
      <Navbar activeSection={activeSection} onNavigate={navigate} />
      <main>
        <Home onNavigate={navigate} />
        <About />
        <Agenda />
        <DelegateHub />
        <GermanNight />
        <ConferenceTeam />
        <VenueTravel />
        <Announcements />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
