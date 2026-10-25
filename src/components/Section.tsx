
import { type ReactNode } from "react";
import Reveal from "@/components/Reveal";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: Props) {
  return (
    <section
      id={id}
      className={`section-padding scroll-mt-20 ${className}`}
    >
      <div className={`mx-auto max-w-7xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

type HeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: HeaderProps) {
  return (
    <Reveal className={centered ? "mb-12 text-center md:mb-16" : "mb-12 md:mb-16"}>
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-purple-300/80 ${
            centered ? "" : "block"
          }`}
        >
          <span className="h-px w-6 bg-purple-400/50" />
          {eyebrow}
        </div>
      )}

      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-purple-100/70 md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
