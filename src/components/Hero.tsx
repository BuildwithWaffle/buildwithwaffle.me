import { ArrowRight } from "lucide-react";
import { EXTERNAL_LINKS } from "@/config";
import eventsData from "@/data/events.json";
import projectsData from "@/data/projects.json";

// Derived from the content files so the numbers cannot drift out of date.
const uniqueProjects = new Set(
  [...projectsData.projectOfTheMonth, ...projectsData.recentProjects].map(
    (project) => project.title,
  ),
).size;

const stats = [
  { value: `${eventsData.pastEvents.length}`, label: "events run" },
  { value: `${eventsData.eventStats.totalAttendees}+`, label: "attendees" },
  { value: `${uniqueProjects}`, label: "projects shipped" },
];

/**
 * Server component: this section had a "use client" directive and a useRef that
 * was never read, so it was shipping JS to do nothing.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[linear-gradient(150deg,#fb923c_0%,#ea580c_45%,#b03d09_100%)]"
    >
      {/* Texture: a soft light source plus the dot grid, instead of the six
          hand-placed circles this had before. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="dot-grid absolute inset-0 text-white opacity-[0.12]" />
        <div className="absolute left-1/2 top-0 h-[38rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.28),transparent)]" />
      </div>

      <div className="container-page relative px-6 pb-20 pt-36 text-center sm:pb-24 sm:pt-40 lg:pb-32 lg:pt-44">
        <p className="mx-auto mb-6 w-fit rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
          India&apos;s first student-led creator movement
        </p>

        <h1 className="mx-auto max-w-5xl font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Build with{" "}
          <span className="inline-block rounded-2xl bg-white px-3 py-0.5 text-[#9a3412] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)]">
            Waffle
          </span>
          <br className="hidden sm:block" /> Start movements.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
          We&apos;re not a club. We&apos;re a call to action for misfits,
          builders, hackers and designers who ship real things — before they feel
          ready.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={EXTERNAL_LINKS.forms.joinCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-on-brand btn-lg w-full sm:w-auto"
          >
            Join the Movement
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href={EXTERNAL_LINKS.social.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost-on-brand btn-lg w-full sm:w-auto"
          >
            Join Discord
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/25 pt-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-extrabold text-white sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-wider text-white/80 sm:text-sm sm:normal-case sm:tracking-normal">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
