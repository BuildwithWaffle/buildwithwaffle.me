import { ArrowRight } from "lucide-react";
import { EXTERNAL_LINKS } from "@/config";

export default function ChapterSection() {
  return (
    <section className="section bg-panel text-panel-ink">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-panel-accent">
            Want to start something from scratch?
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            Help us build <span className="text-gradient-on-panel">IRL communities</span>.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-panel-ink-2">
            We&apos;re dreaming of local chapters where misfits gather, build
            weird projects, and turn ideas into reality. Want to be the first in
            your city?
          </p>

          <div className="mt-10">
            <a
              href={EXTERNAL_LINKS.forms.startChapter}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Start a Chapter
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
