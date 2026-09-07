"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { EXTERNAL_LINKS } from "@/config";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Philosophy", href: "/Philosophy" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/Events" },
  { label: "Start a Chapter", href: EXTERNAL_LINKS.forms.startChapter },
];

const isExternal = (href: string) => href.startsWith("http");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [renderedPath, setRenderedPath] = useState("");
  const pathname = usePathname();

  // Close the mobile sheet on navigation by adjusting state during render,
  // which React prefers over a setState-in-effect (no extra render pass).
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setIsOpen(false);
  }

  // Lock scroll and allow Escape to dismiss while the sheet is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main"
        className="container-page rounded-2xl border border-line bg-surface/80 shadow-e2 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Build with Waffle, home"
          >
            <span
              className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-hover text-lg font-extrabold text-brand-ink shadow-brand"
              aria-hidden
            >
              W
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              Waffle
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const external = isExternal(item.href);
              const active = !external && pathname === item.href;
              const Tag = external ? "a" : Link;

              return (
                <Tag
                  key={item.label}
                  href={item.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-brand-soft text-brand-soft-ink"
                      : "text-ink-2 hover:bg-surface-2 hover:text-ink",
                  )}
                >
                  {item.label}
                </Tag>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={EXTERNAL_LINKS.forms.joinCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              Join Waffle
            </a>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="grid size-9 place-items-center rounded-full border border-line bg-surface-2 text-ink transition-colors hover:border-line-strong md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="size-[1.05rem]" aria-hidden />
              ) : (
                <Menu className="size-[1.05rem]" aria-hidden />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="border-t border-line px-3 py-3 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const external = isExternal(item.href);
                const active = !external && pathname === item.href;
                const Tag = external ? "a" : Link;

                return (
                  <li key={item.label}>
                    <Tag
                      href={item.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-base font-medium transition-colors",
                        active
                          ? "bg-brand-soft text-brand-soft-ink"
                          : "text-ink-2 hover:bg-surface-2 hover:text-ink",
                      )}
                    >
                      {item.label}
                    </Tag>
                  </li>
                );
              })}
              <li className="pt-2">
                <a
                  href={EXTERNAL_LINKS.forms.joinCommunity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  Join Waffle
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
