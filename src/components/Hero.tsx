"use client";
import { useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef(null);
  return (
    <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* VIDEO CONTAINER (SMALL SCREENS ONLY) */}
      <div className="block xl:hidden relative w-full h-[60vh] z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0">
          <source src="/videos/bg_video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex justify-center items-start pt-[50vh] h-full px-4 text-center">
          <h1 className="text-white text-4xl sm:text-5xl font-bold">Hi, Build with Waffle</h1>
        </div>
      </div>
      {/* HERO WRAPPER */}
      <section className="relative min-h-screen overflow-hidden">

        {/* VIDEO: stays inside hero only */}
        <div className="hidden xl:block absolute top-0 right-0 w-[50vw] h-full z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/videos/bg_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 flex flex-col xl:flex-row items-center min-h-screen">
          <div className="xl:w-1/2 w-full text-center xl:text-left px-6 md:px-20 pt-32 pb-16">
            <h1 className="text-4xl md:text-6xl font-bold mt-4 text-white">Hi, Build</h1>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 text-white">with Waffle</h1>
            <p className="mt-4 max-w-xl text-sm md:text-base text-gray-300 mx-auto xl:mx-0">
              We aren’t a club. We are a call to action. For the misfits, the quiet
              builders, the kids with half-finished dreams. Thanks for giving this a shot.
            </p>
            <div className="mt-6 flex gap-4 flex-wrap justify-center xl:justify-start">
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
        </div>
      </section>
    </section>
  );
};