"use client";

import React from "react";
import Link from "next/link";

export default function WaffleChapterIntro() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-10 flex flex-col items-center">
      <section className="max-w-3xl text-left self-start">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          What Is a <span className="text-orange-400">Waffle</span>{" "}
          <span className="text-white">Chapter?</span>
        </h1>
        <p className="text-gray-300 mb-4">
          A Waffle Chapter is a student-led creator circle — where coders, writers, designers,
          marketers, and dreamers build real things together.
        </p>
        <p className="text-gray-300 mb-2">
          It's not a club. It's not a society. It's a movement.
        </p>
        <p className="text-gray-300 mb-8">
          A movement you start — to give your college a real playground.
        </p>

        <Link href="#apply" className="text-blue-400 underline font-medium block mb-2">
          Apply Now
        </Link>
        <Link href="#chapters" className="text-blue-400 underline font-medium mb-10 block">
          Check out Existing Chapters
        </Link>
      </section>

      <section className="relative w-[500px] h-[500px] mb-16 flex items-center justify-center">
        {/* Outer ring */}
        <div className="absolute w-[25vw] h-[50vh] rounded-full border-[12px] border-orange-500"></div>
        {/* Inner circle */}
        <div className="absolute w-64 h-64 rounded-full bg-gray-700 flex items-center justify-center text-xl font-semibold text-white text-center p-4 z-10">
          Who can start one..
        </div>
        {/* Surrounding text bubbles */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {[
              "You're in a college",
              "You've built something (or want to)",
              "You are ready to bring 10 misfits together",
              "No CGPA filters",
              "Just real energy",
              "No titles",
              "You don’t wait for permission",
            ].map((text, idx) => {
              const angle = (idx / 7) * 2 * Math.PI;
              const radius = 260;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              return (
                <div
                  key={idx}
                  className="absolute bg-gray-800 px-5 py-3 rounded-full text-sm text-white border border-gray-600 max-w-[160px] text-center"
                  style={{
                    top: `calc(50% + ${y}px - 24px)`,
                    left: `calc(50% + ${x}px - 80px)`
                  }}
                >
                  {text}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-xl w-full text-center mt-20 mb-16" id="apply">
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 text-white rounded-full font-semibold mb-6 transition duration-200">
          Apply For Opening
        </button>
        <ol className="space-y-6 text-left text-gray-300">
          <li>
            <strong className="text-white">01.</strong> Tell us who you are, what you care about,
            why you're doing this.
          </li>
          <li>
            <strong className="text-white">02.</strong> Get a call from us. We’ll vibe-check, answer
            your questions, and figure out how to map.
          </li>
          <li>
            <strong className="text-white">03.</strong> Get onboarded. You’ll get access to the
            Waffle starter kit + our infamous Discord + early support.
          </li>
        </ol>
      </section>

      <section className="text-center text-gray-400">
        <p className="mb-2">Host your first event and start it off 🎉</p>
        <p className="mb-8">Don't forget to share it with us!</p>
        <Link href="#start" className="text-blue-400 underline">
          Ready to start your chapter?
        </Link>
        <p className="text-sm mt-1">*We don’t care about perfect. We care about passionate.*</p>
      </section>
    </main>
  );
}