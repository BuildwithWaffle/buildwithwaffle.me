"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main
    className="bg-repeat-y bg-right-top"
          style={{
            backgroundImage: `url("/images/AboutWaffel.png")`,
            backgroundSize: "auto",
            // backgroundRepeat:"repeat-y"
          }}
>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-2 rounded-full text-sm md:text-base font-semibold shadow-md">
          Waffle : Build. Share. Connect.
    </div>
      <section className="px-6 md:px-20 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What Is a</h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4"> <span className="text-orange-500">Waffle</span> Chapter?</h1>
        <p className="max-w-2xl text-sm md:text-base text-gray-300">
          A Waffle Chapter is a student-led creator circle — where coders, writers,
          designers, marketers, and dreamers build real things together.
          It’s not a club. It’s not a society.
          It’s a movement you start — to give your college a real playground.
        </p>
        <div className="mt-4 space-x-4 text-sm underline text-gray-400 hover:text-white">
          <Link href="#">Apply Now</Link>
        </div>
        <div className="mt-4 space-x-4 text-sm underline text-gray-400 hover:text-white">
          <Link href="/projects">Check out Existing Chapters</Link>
        </div>
      </section>

      <section className="relative px-6 md:px-20 py-32 flex flex-col items-center text-center">
  {/* Center Ring + Text */}
  <div className="relative w-60 h-60 mb-24">
    {/* Orange Ring - 270 degrees */}
    <div
  className="absolute inset-0 rounded-full"
  style={{
    background: "conic-gradient(orange 0deg 360deg)",
    maskImage: "radial-gradient(circle at center, transparent 50%, black 51%)",
    WebkitMaskImage: "radial-gradient(circle at center, transparent 50%, black 51%)",
  }}
/>
<div className="absolute inset-[12px] bg-zinc-700 rounded-full flex items-center justify-center">
  <p className="text-white font-semibold text-center px-4">
    Who can start one..
  </p>
</div>


    {/* 7 Grey Circles around the ring

{[
  { text: "You're in a college", style: { top: "-2.5rem", left: "50%", transform: "translateX(-50%)" } },
  { text: "You’ve built something (or want to)", style: { top: "2.5rem", right: "-8rem" } },
  { text: "You are ready to bring 10 misfits together", style: { bottom: "4rem", right: "-6rem" } },
  { text: "No CGPA filters", style: { bottom: "-5rem", left: "50%", transform: "translateX(-50%)" } },
  { text: "Just real energy", style: { bottom: "4rem", left: "-6rem" } },
  { text: "No titles", style: { top: "2.5rem", left: "-8rem" } },
  { text: "You don’t wait for permission", style: { top: "50%", left: "-10rem", transform: "translateY(-50%)" } },
].map((item, index) => (
  <div
    key={index}
    className="absolute w-28 h-28 bg-zinc-700 rounded-full text-xs text-white flex items-center justify-center text-center p-2"
    style={item.style}
  >
    {item.text}
  </div>
))} */}
</div>

        <Link
          href="#"
          className="mt-8 bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition"
        >
          Apply For Opening
        </Link>
      </section>

      {/* Timeline Section */}
      <section className="px-6 md:px-20 py-20 relative">
        <div className="max-w-2xl mx-auto">
          <div className="relative pl-6 border-l-2 border-gray-600 space-y-12">
            <div className="relative">
              <div className="absolute -left-[11px] top-1 w-4 h-4 bg-white rounded-full" />
              <p className="font-semibold text-white mb-1">01</p>
              <p className="text-sm text-gray-300">
                Tell us who you are<br />
                What you care about<br />
                Why you’re doing this
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[11px] top-1 w-4 h-4 bg-white rounded-full" />
              <p className="font-semibold text-white mb-1">02</p>
              <p className="text-sm text-gray-300">
                We’ll vibe-check,<br />
                answer your questions,<br />
                and figure out how to map
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[11px] top-1 w-4 h-4 bg-white rounded-full" />
              <p className="font-semibold text-white mb-1">03</p>
              <p className="text-sm text-gray-300">
                Get onboarded<br />
                Get access to the Waffle Starter Kit,<br />
                our informal Discord + early support
              </p>
            </div>
          </div>
          <p className="mt-12 text-sm text-center text-gray-400">
            Host Your First Event →<br />
            Don’t forget to share it with us
          </p>
        </div>
      </section>

      <footer className="px-6 md:px-20 pb-20 text-sm text-gray-400 text-center">
        <p>
          Ready to start your chapter? <br />
          <span className="text-white font-semibold">We don’t care about perfect. We care about passionate.</span>
        </p>
      </footer>
    </main>
  );
}

