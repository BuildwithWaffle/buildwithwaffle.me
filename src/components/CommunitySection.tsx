import { ArrowUpRight } from "lucide-react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { EXTERNAL_LINKS } from "@/config";

const cards = [
  {
    icon: FaDiscord,
    title: "Join our Discord",
    body: "Connect with other student builders, find collaborators, and get unstuck fast.",
    cta: "Join Discord",
    href: EXTERNAL_LINKS.social.discord,
    // Brand surfaces stay fixed in both themes — these are the platforms' own
    // colors, and white text on them already clears AA.
    gradient: "linear-gradient(135deg, #5865F2 0%, #4752C4 100%)",
    glow: "rgba(88, 101, 242, 0.35)",
  },
  {
    icon: FaGithub,
    title: "Explore our GitHub",
    body: "Dig through open source projects, contribute to our tools, and ship together.",
    cta: "View GitHub",
    href: EXTERNAL_LINKS.social.github,
    gradient: "linear-gradient(135deg, #33383d 0%, #1a1e22 100%)",
    glow: "rgba(20, 24, 28, 0.4)",
  },
  {
    icon: HiUserGroup,
    title: "Start a chapter",
    body: "Build an in-person community of student makers in your city. We'll help.",
    cta: "Get started",
    href: EXTERNAL_LINKS.forms.startChapter,
    gradient: "linear-gradient(135deg, #ea580c 0%, #b03d09 100%)",
    glow: "var(--brand-glow)",
  },
];

export default function CommunitySection() {
  return (
    <section className="section bg-surface">
      <div className="container-page text-center">
        <span className="eyebrow">We&apos;ve got a lot going on</span>

        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold text-ink md:text-5xl">
          A place for misfits like you.{" "}
          <span className="text-gradient-brand">Build with Waffle.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map(({ icon: Icon, ...card }) => (
            <article
              key={card.title}
              className="group relative flex flex-col overflow-hidden rounded-card p-8 text-left text-white shadow-e2 transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundImage: card.gradient,
                boxShadow: `0 20px 40px -16px ${card.glow}`,
              }}
            >
              <div
                className="dot-grid pointer-events-none absolute inset-0 text-white opacity-[0.10]"
                aria-hidden="true"
              />

              <div className="relative flex h-full flex-col">
                <span
                  className="mb-6 grid size-14 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm"
                  aria-hidden
                >
                  <Icon className="size-7" />
                </span>

                <h3 className="font-display text-xl font-bold">{card.title}</h3>
                <p className="mt-3 flex-grow leading-relaxed text-white/85">
                  {card.body}
                </p>

                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-5 py-2.5 font-semibold backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  {card.cta}
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
