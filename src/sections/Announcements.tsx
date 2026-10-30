
import { useEffect, useState } from "react";
import {
  Bell,
  AlertTriangle,
  Info,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import Section, { SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { announcements as localAnnouncements } from "@/content";

type Announcement = {
  id: string;
  title: string;
  body: string;
  date: string;
  category: string;
  priority?: "important" | "info";
  featured?: boolean;
  link?: string;
  status?: string;
};

const API_URL = import.meta.env.VITE_ANNOUNCEMENTS_API_URL;

const fallbackAnnouncements: Announcement[] = localAnnouncements.map(
  (item, index) => ({
    id: String(index),
    title: item.title,
    body: item.body,
    date: item.date,
    category: item.tag,
    priority: item.priority,
    featured: false,
  })
);

function getCategoryStyle(category: string, priority?: string) {
  if (priority === "important" || category.toLowerCase() === "important") {
    return {
      badge: "bg-amber-500/15 text-amber-300 border-amber-400/30",
      icon: AlertTriangle,
      iconColor: "text-amber-400",
    };
  }

  if (category.toLowerCase() === "info" || priority === "info") {
    return {
      badge: "bg-ice-500/15 text-ice-300 border-ice-400/30",
      icon: Info,
      iconColor: "text-ice-400",
    };
  }

  return {
    badge: "bg-purple-500/15 text-purple-300 border-purple-400/30",
    icon: Bell,
    iconColor: "text-purple-300",
  };
}

function AnnouncementCard({
  announcement,
  featured = false,
}: {
  announcement: Announcement;
  featured?: boolean;
}) {
  const style = getCategoryStyle(
    announcement.category,
    announcement.priority
  );
  const Icon = style.icon;

  return (
    <div
      className={`glass-card h-full border border-ice-400/20 bg-ice-500/5 ${
        featured ? "p-7 md:p-8" : "p-5"
      }`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Icon className={`h-4 w-4 ${style.iconColor}`} />
          <span
            className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${style.badge}`}
          >
            {announcement.category}
          </span>

          {featured && (
            <span className="flex items-center gap-1 rounded-full border border-purple-400/30 bg-purple-500/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-purple-300">
              <Sparkles className="h-3 w-3" />
              Featured
            </span>
          )}
        </div>

        <span className="text-xs text-frost-400">
          {announcement.date}
        </span>
      </div>

      <h3
        className={`mb-3 font-display font-bold text-white ${
          featured ? "text-2xl md:text-3xl" : "text-lg"
        }`}
      >
        {announcement.title}
      </h3>

      <p
        className={`leading-relaxed text-frost-300 ${
          featured ? "text-base" : "text-sm"
        }`}
      >
        {announcement.body}
      </p>

      {announcement.link && (
        <a
          href={announcement.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ice-300 transition-colors hover:text-white"
        >
          Learn more
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

export default function Announcements() {
  const [items, setItems] = useState<Announcement[]>(
    fallbackAnnouncements
  );

  
useEffect(() => {
  if (!API_URL) return;

  const callbackName = "rpmAnnouncementsCallback";
  const browserWindow = window as Window & {
    rpmAnnouncementsCallback?: (data: Announcement[]) => void;
  };

  const script = document.createElement("script");

  browserWindow[callbackName] = (data) => {
    setItems(data);
    delete browserWindow[callbackName];
    script.remove();
  };

  script.src = `${API_URL}?callback=${callbackName}`;

  script.onerror = () => {
    console.error("Could not load announcements from Google Sheets.");
    delete browserWindow[callbackName];
    script.remove();
  };

  document.body.appendChild(script);

  return () => {
    delete browserWindow[callbackName];
    script.remove();
  };
}, []);


  const featuredAnnouncement = items.find((item) => item.featured);
  const otherAnnouncements = items.filter(
    (item) => item.id !== featuredAnnouncement?.id
  );

  return (
    <Section id="announcements" className="bg-navy-950">
      <SectionHeader
        eyebrow="Announcements"
        title={
          <>
            Latest <span className="ice-text">updates</span>
          </>
        }
        subtitle="The latest news, important reminders and updates for RPM 2026. Stay informed and check back regularly."
      />

      <div className="space-y-5">
  {items.map((announcement, index) => (
    <Reveal key={announcement.id} delay={index * 80}>
      <AnnouncementCard
        announcement={announcement}
        featured={announcement.featured}
      />
    </Reveal>
  ))}
</div>

      {items.length === 0 && (
        <div className="py-8 text-center text-sm text-frost-400">
          No announcements at the moment. Check back soon!
        </div>
      )}

      <Reveal>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-frost-400">
          <Bell className="h-4 w-4 text-ice-400/70" />
          More updates will be posted as we approach the conference.
        </div>
      </Reveal>
    </Section>
  );
}
