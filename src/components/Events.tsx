import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import eventsData from "@/data/events.json";

function formatDate(dateString: string) {
  if (!dateString || dateString === "TBD") return "Date to be announced";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Events() {
  const { upcomingEvent } = eventsData;

  const details = [
    { icon: CalendarDays, value: formatDate(upcomingEvent.date) },
    { icon: Clock, value: upcomingEvent.time },
    { icon: MapPin, value: upcomingEvent.location },
  ].filter((detail) => Boolean(detail.value));

  return (
    <section id="events" className="section bg-surface">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What&apos;s next</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-5xl">
            Next <span className="text-gradient-brand">event</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-2">
            Hands-on workshops, networking, and collaborative building. These
            aren&apos;t just talks — they&apos;re real opportunities to build,
            learn and connect.
          </p>
        </div>

        <article className="card card-interactive mt-14 overflow-hidden p-4 sm:p-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="order-2 overflow-hidden rounded-xl border border-line bg-surface-2 lg:order-1">
              <Image
                src={upcomingEvent.image}
                alt={upcomingEvent.title}
                width={600}
                height={338}
                className="aspect-video w-full object-cover"
                sizes="(min-width: 1024px) 40rem, 100vw"
              />
            </div>

            <div className="order-1 lg:order-2 lg:pr-4">
              <span className="chip">Upcoming</span>

              <h3 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
                {upcomingEvent.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-2">
                {upcomingEvent.description}
              </p>

              <ul className="mt-6 space-y-2.5 rounded-xl border border-line bg-surface-2 p-4">
                {details.map(({ icon: Icon, value }) => (
                  <li key={value} className="flex items-center gap-3 text-ink-2">
                    <Icon className="size-4 shrink-0 text-accent" aria-hidden />
                    <span className="text-sm font-medium">{value}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={upcomingEvent.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Register now
                  <ArrowRight className="size-4" aria-hidden />
                </a>
                <Link href="/Events" className="btn btn-secondary">
                  View all events
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
