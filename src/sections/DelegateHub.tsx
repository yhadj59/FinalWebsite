
import { useEffect, useState } from "react";
import {
  ShieldAlert,
  Link2,
  CheckCircle2,
  Circle,
  HelpCircle,
  ChevronDown,
  RotateCcw,
  ListChecks,
} from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";
import Reveal from "@/components/Reveal";
import {
  packingChecklist,
  faqs,
  emergencyContacts,
  importantLinks,
  type ChecklistItem,
} from "@/content";

const STORAGE_KEY = "rpm26-delegate-checklist-v1";

function loadChecklistProgress(): Set<string> {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return new Set();

    const parsed: unknown = JSON.parse(saved);

    if (!Array.isArray(parsed)) return new Set();

    const validIds = new Set(packingChecklist.map((item) => item.id));

    return new Set(
      parsed.filter(
        (id): id is string =>
          typeof id === "string" && validIds.has(id)
      )
    );
  } catch {
    return new Set();
  }
}

export default function DelegateHub() {
  const [checked, setChecked] = useState<Set<string>>(
    loadChecklistProgress
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
    } catch {
      // The checklist still works if browser storage is unavailable.
    }
  }, [checked]);

  const toggleItem = (id: string) => {
    setChecked((previous) => {
      const next = new Set(previous);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const resetChecklist = () => {
    setChecked(new Set());
  };

  const totalItems = packingChecklist.length;
  const completedItems = packingChecklist.filter((item) =>
    checked.has(item.id)
  ).length;

  const progress =
    totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <div id="delegate-hub" className="scroll-mt-20">
      {/* Welcome */}
      <Section className="bg-navy-950">
        <SectionHeader
          eyebrow="RPM 26 Germany"
          title={
            <>
              Your Delegate <span className="ice-text">Hub</span>
            </>
          }
          subtitle="Everything you need for the next few days, all in one place. Check your essentials, find answers, and keep important contacts close."
        />

        {/* Quick navigation */}
        <div className="mx-auto mb-10 grid max-w-3xl grid-cols-3 gap-2 sm:gap-4">
          {[
            { label: "Checklist", href: "#delegate-checklist", icon: ListChecks },
            { label: "FAQs", href: "#delegate-faqs", icon: HelpCircle },
            { label: "Contacts", href: "#delegate-contacts", icon: ShieldAlert },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="glass-card flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl p-3 text-center transition-colors hover:border-ice-400/40 hover:bg-ice-500/10 sm:min-h-24 sm:p-4"
            >
              <Icon className="h-5 w-5 text-ice-300 sm:h-6 sm:w-6" />
              <span className="text-xs font-medium text-white sm:text-sm">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Packing checklist */}
        <div id="delegate-checklist" className="scroll-mt-24">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ice-300">
                Before you go
              </p>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Your checklist
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-frost-300">
                Tap an item when it is ready. Your progress is saved on this
                device.
              </p>
            </div>

            {completedItems > 0 && (
              <button
                type="button"
                onClick={resetChecklist}
                className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-frost-300 transition-colors hover:border-ice-400/30 hover:text-white"
              >
                <RotateCcw className="h-4 w-4" />
                Reset checklist
              </button>
            )}
          </div>

          {/* Overall progress */}
          <div className="glass-card mb-5 rounded-xl p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">
                  {completedItems === totalItems && totalItems > 0
                    ? "You're all set!"
                    : "Your progress"}
                </p>
                <p className="mt-1 text-xs text-frost-400">
                  {completedItems} of {totalItems} items completed
                </p>
              </div>

              <span className="font-display text-xl font-bold text-ice-300">
                {progress}%
              </span>
            </div>

            <div
              className="h-2.5 overflow-hidden rounded-full bg-white/10"
              role="progressbar"
              aria-label="Packing checklist progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-300 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Checklist categories */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from(new Set(packingChecklist.map((item) => item.category))).map(
              (category, index) => {
                const items = packingChecklist.filter(
                  (item) => item.category === category
                );
                const categoryCompleted = items.filter((item) =>
                  checked.has(item.id)
                ).length;

                return (
                  <Reveal key={category} delay={index * 60}>
                    <div className="glass-card h-full rounded-xl p-4 sm:p-5">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <h4 className="font-display text-base font-bold text-white">
                          {category}
                        </h4>
                        <span className="shrink-0 rounded-full bg-ice-500/10 px-2.5 py-1 text-xs font-medium text-ice-300">
                          {categoryCompleted}/{items.length}
                        </span>
                      </div>

                      <div className="space-y-1">
                        {items.map((item: ChecklistItem) => {
                          const isChecked = checked.has(item.id);

                          return (
                            <label
                              key={item.id}
                              className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-lg px-2.5 py-2 transition-colors hover:bg-white/5 ${
                                isChecked ? "bg-white/[0.03]" : ""
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleItem(item.id)}
                                className="peer sr-only"
                              />

                              {isChecked ? (
                                <CheckCircle2
                                  aria-hidden="true"
                                  className="h-5 w-5 shrink-0 text-ice-300"
                                />
                              ) : (
                                <Circle
                                  aria-hidden="true"
                                  className="h-5 w-5 shrink-0 text-frost-400/70"
                                />
                              )}

                              <span
                                className={`text-sm leading-relaxed ${
                                  isChecked
                                    ? "text-frost-400 line-through"
                                    : "text-frost-200"
                                }`}
                              >
                                {item.label}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </Reveal>
                );
              }
            )}
          </div>

          <p className="mt-4 text-center text-xs leading-relaxed text-frost-400">
            Checklist progress is stored in this browser on this device. It
            will not automatically sync across different devices or browsers.
          </p>
        </div>
      </Section>

      {/* FAQs */}
      <Section className="bg-navy-900/50">
        <div id="delegate-faqs" className="scroll-mt-24">
          <SectionHeader
            eyebrow="Good to know"
            title={
              <>
                Frequently asked <span className="ice-text">questions</span>
              </>
            }
            subtitle="Looking for a quick answer? Open a question below."
          />

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Contacts and links */}
      <Section className="bg-navy-950">
        <div id="delegate-contacts" className="scroll-mt-24">
          <SectionHeader
            eyebrow="Keep these close"
            title={
              <>
                Important <span className="ice-text">information</span>
              </>
            }
            subtitle="Save the details you might need during RPM. If something is unclear, reach out to the organizing team."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {/* Emergency contacts */}
            <Reveal>
              <div className="glass-card h-full rounded-xl p-4 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg bg-red-400/10 p-2.5">
                    <ShieldAlert className="h-5 w-5 text-red-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Emergency Contacts
                    </h3>
                    <p className="text-xs text-frost-400">
                      Who to reach if you need help
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {emergencyContacts.map((contact, index) => (
                    <div
                      key={`${contact.label}-${index}`}
                      className="rounded-lg border border-white/5 bg-white/[0.02] p-3.5 sm:p-4"
                    >
                      <p className="text-xs font-medium text-frost-400">
                        {contact.label}
                      </p>
                      <p className="mt-1 break-words text-base font-semibold text-white">
                        {contact.value}
                      </p>
                      {contact.note && (
                        <p className="mt-1.5 text-sm leading-relaxed text-frost-300">
                          {contact.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Important links */}
            <Reveal delay={100}>
              <div className="glass-card h-full rounded-xl p-4 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg bg-ice-500/10 p-2.5">
                    <Link2 className="h-5 w-5 text-ice-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Important Links
                    </h3>
                    <p className="text-xs text-frost-400">
                      Useful resources in one place
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {importantLinks.map((link, index) => {
                    const isExternal = /^https?:\/\//i.test(link.url);

                    return (
                      <a
                        key={`${link.label}-${index}`}
                        href={link.url}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="group flex min-h-16 items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3.5 transition-colors hover:border-ice-400/30 hover:bg-ice-500/5 sm:p-4"
                      >
                        <div className="min-w-0">
                          <span className="text-sm font-semibold text-white transition-colors group-hover:text-ice-300">
                            {link.label}
                          </span>
                          {link.note && (
                            <p className="mt-1 text-xs leading-relaxed text-frost-400">
                              {link.note}
                            </p>
                          )}
                        </div>
                        <Link2 className="h-4 w-4 shrink-0 text-frost-400 transition-colors group-hover:text-ice-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
}

function FAQItem({
  faq,
  index,
}: {
  faq: { question: string; answer: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const answerId = `delegate-faq-answer-${index}`;

  return (
    <Reveal delay={Math.min(index * 40, 200)}>
      <div
        className={`glass-card overflow-hidden rounded-xl transition-colors ${
          open ? "border-ice-400/30" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-expanded={open}
          aria-controls={answerId}
          className="flex min-h-14 w-full items-center justify-between gap-3 p-4 text-left sm:gap-4 sm:p-5"
        >
          <span className="flex min-w-0 items-start gap-3">
            <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-ice-300/80" />
            <span className="font-display text-sm font-semibold leading-relaxed text-white sm:text-base">
              {faq.question}
            </span>
          </span>

          <ChevronDown
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-frost-400 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div id={answerId} className="px-4 pb-5 pl-12 sm:px-5 sm:pl-14">
            <p className="whitespace-pre-line text-sm leading-relaxed text-frost-300">
              {faq.answer}
            </p>
          </div>
        )}
      </div>
    </Reveal>
  );
}
