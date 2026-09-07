"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Route-change fade.
 *
 * This used to be a motion.div, which server-rendered as
 * `<div style="opacity:0">` wrapping the whole page — so until the animation
 * library loaded and hydrated, the entire site was invisible, and it stayed
 * invisible for anyone without JavaScript.
 *
 * A CSS animation degrades the right way instead: if it never runs, opacity is
 * simply its default of 1. Remounting on `key` restarts it on each navigation,
 * and the global prefers-reduced-motion rule shortens it to nothing.
 */
export default function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-fade">
      {children}
    </div>
  );
}
