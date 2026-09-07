"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
// lucide-react v1 dropped brand marks, so these come from react-icons.
import { FaGithub, FaLinkedin } from "react-icons/fa";
import projectsData from "@/data/projects.json";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6000;
const projects = projectsData.projectOfTheMonth;

export default function RecentProjects() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % projects.length) + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (paused || projects.length < 2) return;

    // Honour the OS reduce-motion setting: no unattended movement.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const id = window.setInterval(
      () => setCurrent((prev) => (prev + 1) % projects.length),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  const project = projects[current];

  return (
    <section
      className="section relative overflow-hidden bg-[linear-gradient(150deg,#fb923c_0%,#ea580c_50%,#b03d09_100%)]"
      aria-labelledby="builds-heading"
    >
      <div
        className="dot-grid pointer-events-none absolute inset-0 text-white opacity-[0.12]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="builds-heading"
            className="font-display text-3xl font-bold text-white md:text-5xl"
          >
            Builds of the month
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            Raw, real projects built by students who stopped waiting for
            permission.
          </p>
        </div>

        <div
          ref={regionRef}
          role="group"
          aria-roledescription="carousel"
          aria-label="Featured student projects"
          className="mx-auto mt-12 max-w-5xl rounded-card border border-line bg-card p-4 shadow-e3 sm:p-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!regionRef.current?.contains(event.relatedTarget as Node)) {
              setPaused(false);
            }
          }}
        >
          {/* aria-live keeps screen readers informed as slides advance. */}
          <div
            aria-live="polite"
            aria-atomic="true"
            className="grid gap-6 lg:grid-cols-2 lg:gap-8"
          >
            <div>
              <div className="overflow-hidden rounded-xl border border-line bg-surface-2">
                <Image
                  key={project.image}
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={338}
                  className="aspect-video w-full animate-[fadeIn_.4s_ease] object-cover"
                  sizes="(min-width: 1024px) 32rem, 100vw"
                />
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-2">
                {project.description}
              </p>

              <div className="mt-5 rounded-xl border border-line bg-surface-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-3">
                  Built by
                </p>
                <ul className="mt-3 space-y-2">
                  {project.builders.map((builder) => (
                    <li
                      key={builder.name}
                      className="flex items-center justify-between gap-3 rounded-lg border border-line bg-card px-3 py-2"
                    >
                      <span className="text-sm font-semibold text-ink">
                        {builder.name}
                      </span>
                      <span className="flex gap-1">
                        {builder.github && (
                          <a
                            href={builder.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grid size-7 place-items-center rounded-md text-ink-2 transition-colors hover:bg-brand-soft hover:text-brand-soft-ink"
                            aria-label={`${builder.name} on GitHub`}
                          >
                            <FaGithub className="size-4" aria-hidden />
                          </a>
                        )}
                        {builder.linkedin && (
                          <a
                            href={builder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="grid size-7 place-items-center rounded-md text-ink-2 transition-colors hover:bg-brand-soft hover:text-brand-soft-ink"
                            aria-label={`${builder.name} on LinkedIn`}
                          >
                            <FaLinkedin className="size-4" aria-hidden />
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm flex-1"
                  >
                    <FaGithub className="size-4" aria-hidden />
                    View code
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm flex-1"
                  >
                    <ExternalLink className="size-4" aria-hidden />
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {projects.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {projects.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Show project ${index + 1}: ${item.title}`}
                  aria-current={index === current}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === current
                      ? "w-6 bg-brand"
                      : "w-2 bg-line-strong hover:bg-ink-3",
                  )}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link href="/projects" className="btn btn-ghost-on-brand">
            Check out more projects
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
