import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FOOTER_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/config";

const SOCIAL_ICONS: Record<string, IconType> = {
  discord: FaDiscord,
  twitter: FaXTwitter,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-panel text-panel-ink"
      role="contentinfo"
    >
      <div className="container-page px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <span
                className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-hover text-lg font-extrabold text-brand-ink"
                aria-hidden
              >
                W
              </span>
              <span className="font-display text-lg font-bold">Waffle</span>
            </Link>

            <p className="mt-5 max-w-sm leading-relaxed text-panel-ink-2">
              {SITE_CONFIG.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                if (!Icon) return null;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="grid size-10 place-items-center rounded-full border border-panel-line bg-panel-2 text-panel-ink-2 transition-colors hover:border-brand hover:bg-brand hover:text-brand-ink"
                    >
                      <Icon className="size-[1.1rem]" aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-panel-ink">
                {heading}
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {links.map((link) => {
                  const external =
                    "external" in link || link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      {external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-panel-ink-2 transition-colors hover:text-panel-ink"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-panel-ink-2 transition-colors hover:text-panel-ink"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-panel-line pt-8 text-sm text-panel-ink-2 sm:flex-row">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Built by students, for students.
          </p>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="transition-colors hover:text-panel-ink"
          >
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
