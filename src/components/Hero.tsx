"use client";
import { useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Group1.jpeg"
          alt="Build with Waffle Community"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-purple-900/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6 md:px-12 max-w-6xl mx-auto">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
            Build with{" "}
            <span className="relative">
              <span className="text-[#7736F8] relative z-10">Waffle</span>
              <div className="absolute inset-0 border-4 border-white rounded-lg transform rotate-1"></div>
            </span>
            <br />
            Start movements.
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-12 max-w-4xl mx-auto font-medium">
            Where students lead, create, and start movements.{" "}
           
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 w-full">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScqckW5RAs5GVeMNpAzFZF2Ro5TNmVgtOZGc68ifDAxDn_VlA/viewform?usp=sharing&ouid=100170810435940346187"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#7736F8] hover:bg-[#6429d1] text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full transition duration-300 text-base sm:text-lg hover:scale-105 transform shadow-lg hover:shadow-[#7736F8]/25 text-center"
            >
              Join the Movement
            </a>
            <a
              href="https://discord.gg/mxgAD6sT4D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 sm:border-3 border-[#7736F8] text-[#7736F8] hover:bg-[#7736F8] hover:text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full transition duration-300 text-base sm:text-lg hover:scale-105 transform shadow-lg backdrop-blur-sm bg-white/10 text-center"
            >
              Join Discord
            </a>
          </div>

          {/* Stats Badge */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-[#7736F8]/30 rounded-full px-8 py-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#7736F8] rounded-full animate-pulse"></div>
                <p className="text-white font-semibold text-lg">200+ Students Building Together</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    
    </section>
  );
}
