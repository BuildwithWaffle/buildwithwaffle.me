"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const LABEL = {
  light: "Light",
  dark: "Dark",
  system: "System",
} as const;

const NEXT_LABEL = {
  light: "dark",
  dark: "system",
  system: "light",
} as const;

/**
 * One button that cycles light -> dark -> system. The icon shows the current
 * preference, so "system" is visibly distinct from an explicit choice that
 * happens to match the OS.
 */
export default function ThemeToggle({ className }: { className?: string }) {
  const { preference, cycleTheme, mounted } = useTheme();

  const Icon =
    preference === "light" ? Sun : preference === "dark" ? Moon : Monitor;

  return (
    <button
      type="button"
      onClick={cycleTheme}
      // Before hydration the preference is a guess, so keep the accessible name
      // neutral rather than announcing something that may be wrong.
      aria-label={
        mounted
          ? `Theme: ${LABEL[preference]}. Switch to ${NEXT_LABEL[preference]}.`
          : "Change theme"
      }
      title={mounted ? `Theme: ${LABEL[preference]}` : "Change theme"}
      className={cn(
        "relative grid size-9 place-items-center rounded-full border border-line",
        "bg-surface-2 text-ink-2 transition-colors",
        "hover:border-line-strong hover:text-accent",
        className,
      )}
    >
      <Icon className="size-[1.05rem]" strokeWidth={2} aria-hidden />
    </button>
  );
}
