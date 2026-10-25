
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/content";

export default function Navbar({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (id: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-violet-400/20 bg-[#10091f]/90 py-3 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "border-transparent bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* RPM branding */}
          <button
            onClick={() => handleClick("home")}
            className="group flex items-center gap-3"
            aria-label="Go to homepage"
          >
            <img
              src="/rpm-logo.png"
              alt="RPM 26 Germany logo"
              className="h-10 w-auto max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12"
            />

            <div className="hidden border-l border-violet-300/25 pl-3 text-left leading-none sm:block">
              <div className="font-display text-sm font-bold tracking-wide text-white">
                RPM 26 GERMANY
              </div>
              <div className="mt-1.5 text-[9px] uppercase tracking-[0.16em] text-violet-200/75">
                Regional Presidents Meeting
              </div>
            </div>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`nav-link transition-colors ${
                  activeSection === item.id
                    ? "text-violet-200 after:w-full"
                    : "hover:text-violet-200"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleClick("announcements")}
              className={`rounded-full border border-violet-400/35 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-200 transition-all duration-300 hover:border-violet-300/60 hover:bg-violet-500/20 ${
                activeSection === "announcements"
                  ? "ring-1 ring-violet-400/40"
                  : ""
              }`}
            >
              Updates
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-violet-300/20 p-2 text-violet-100 transition-colors hover:bg-violet-500/15 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-[#10091f]/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        <nav className="relative flex h-full flex-col items-center justify-center gap-5 px-6">
          {[...navItems, { label: "Announcements", id: "announcements" }].map(
            (item, i) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                tabIndex={menuOpen ? 0 : -1}
                className={`font-display text-2xl font-medium transition-colors ${
                  menuOpen ? "animate-fade-in-up" : ""
                } ${
                  activeSection === item.id
                    ? "text-violet-200"
                    : "text-violet-100/80 hover:text-white"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {item.label}
              </button>
            ),
          )}
        </nav>
      </div>
    </>
  );
}
