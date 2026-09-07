import { EXTERNAL_LINKS } from "@/config";

export default function FinalSection() {
  return (
    <section className="section relative overflow-hidden border-t border-line bg-surface-2">
      <div
        className="dot-grid pointer-events-none absolute inset-0 text-accent opacity-[0.06]"
        aria-hidden="true"
      />

      <div className="container-prose relative text-center">
        <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
          <span className="text-accent">This isn&apos;t the end —</span>
          <br className="hidden sm:block" />{" "}
          <span className="text-ink">it&apos;s day zero</span>
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-ink-2 sm:text-xl">
          Waffle isn&apos;t a platform. It&apos;s a starting point. A call to
          build before you feel ready. To try messy things with real people — not
          LinkedIn titles.
        </p>

        <p className="mt-4 text-lg leading-relaxed text-ink">
          This is where students stop waiting and start moving.
        </p>

        <p className="mt-10 text-base text-ink-2">
          Wanna start something weird, bold, or fun?{" "}
          <a
            href={EXTERNAL_LINKS.forms.joinCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent underline underline-offset-4"
          >
            Join Waffle — we saved you a seat
          </a>
          .
        </p>
      </div>
    </section>
  );
}
