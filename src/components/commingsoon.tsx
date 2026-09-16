import { CalendarDays, Rocket, Sparkles, Users } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#171513] px-6 py-10 shadow-[0_20px_60px_rgba(255,94,0,0.18)] sm:px-10 lg:px-14 lg:py-14">
      
      {/* Orange glow */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

      {/* Decorative circuit lines */}
      <div className="pointer-events-none absolute left-0 top-12 hidden opacity-60 lg:block">
        <div className="h-px w-28 bg-orange-500/70" />
        <div className="mt-3 h-px w-40 bg-orange-500/50" />
        <div className="mt-3 h-px w-24 bg-orange-500/40" />
      </div>

      <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* LEFT — Rocket */}
        <div className="relative flex min-h-[300px] items-center justify-center">
          
          {/* Rocket glow */}
          <div className="absolute h-56 w-56 rounded-full bg-orange-500/10 blur-2xl" />

          {/* Rocket circle */}
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/[0.04] shadow-[0_0_50px_rgba(249,115,22,0.12)]">
            
            <div className="absolute inset-5 rounded-full border border-orange-500/10" />

            <Rocket
              size={110}
              strokeWidth={1.5}
              className="-rotate-45 text-orange-500 drop-shadow-[0_0_18px_rgba(249,115,22,0.7)]"
            />

            {/* Small stars */}
            <Sparkles
              size={24}
              className="absolute left-7 top-20 text-orange-500"
            />

            <Sparkles
              size={18}
              className="absolute right-10 top-10 text-orange-400"
            />

            <Sparkles
              size={20}
              className="absolute bottom-16 right-4 text-orange-500"
            />
          </div>

          {/* Rocket smoke */}
          <div className="absolute bottom-4 flex gap-2">
            <span className="h-8 w-16 rounded-full bg-orange-500/10 blur-md" />
            <span className="h-10 w-20 rounded-full bg-orange-500/10 blur-md" />
            <span className="h-7 w-14 rounded-full bg-orange-500/10 blur-md" />
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="relative">

          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/5 px-4 py-2 text-sm font-medium text-orange-400">
            <CalendarDays size={16} />
            Upcoming Event
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
            COMING
            <span className="block text-orange-500">
              SOON
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            Something exciting is on the way.
            <br className="hidden sm:block" />
            Stay tuned for our next event!
          </p>

          {/* Highlights */}
          <div className="mt-8 flex flex-wrap gap-3">

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 px-4 py-2 text-sm text-white/80">
              <Rocket size={16} className="text-orange-500" />
              New Ideas
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 px-4 py-2 text-sm text-white/80">
              <Users size={16} className="text-orange-500" />
              Great People
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 px-4 py-2 text-sm text-white/80">
              <Sparkles size={16} className="text-orange-500" />
              Bigger Impact
            </div>

          </div>

        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />
    </section>
  );
}