"use client";
import { useRef } from "react";
import Link from "next/link";

export default function Hero() {
    const heroRef = useRef(null);
    return (
        <section className="relative">
        {/* HERO SECTION */}
        <div id="home" ref={heroRef} className="relative min-h-screen overflow-hidden">
          <section className="relative z-10 px-6 md:px-20 pt-32 pb-16 min-h-screen flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <p className="text-gray-400">by Students, for Everyone.</p>
              <h1 className="text-4xl md:text-6xl font-bold mt-4">Hi, Build</h1>
              <h1 className="text-4xl md:text-6xl font-bold mt-4">with Waffle</h1>
              <p className="mt-4 max-w-xl text-sm md:text-base text-gray-300">
                We aren’t a club. We are a call to action. For the misfits, the quiet
                builders, the kids with half-finished dreams. Thanks for giving this a shot.
              </p>
              <div className="mt-6 flex gap-4 flex-wrap">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition duration-200">
                  JOIN US
                </a>
                <Link
                  href="/letter"
                  className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition duration-200">
                  Letter
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-400">200+ Students</p>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-[480px] relative">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-lg">
                {/* <source src="/videos/bg_video.mp4" type="video/mp4" /> */}
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        </div>
      </section>
  );
};