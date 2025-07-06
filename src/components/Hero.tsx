"use client";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden"
             style={{ 
               background: 'linear-gradient(135deg, #fb923c, #f97316, #ea580c)',
               backgroundSize: '100% 100%'
             }}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/20"></div>
        <div className="absolute top-40 right-32 w-48 h-48 rounded-full bg-white/10"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 rounded-full bg-white/15"></div>
        <div className="absolute bottom-48 right-20 w-40 h-40 rounded-full bg-white/20"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-white/25"></div>
        <div className="absolute top-2/3 right-1/4 w-28 h-28 rounded-full bg-white/15"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 sm:pt-16 md:pt-0">
        <div className="text-center px-6 md:px-12 max-w-6xl mx-auto">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-8">
            Build with{" "}
            <span className="relative">
              <span className="relative z-10 bg-white text-orange-600 px-4 py-2 rounded-2xl font-black shadow-2xl">
                Waffle
              </span>
            </span>
            <br />
            Start movements.
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto font-medium">
            Where students lead, create, and start movements.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScqckW5RAs5GVeMNpAzFZF2Ro5TNmVgtOZGc68ifDAxDn_VlA/viewform?usp=sharing&ouid=100170810435940346187"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 font-black px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-full transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl hover:scale-105 transform shadow-2xl hover:shadow-3xl border-2 border-white/20"
            >
              Join the Movement
            </a>
            <a
              href="https://discord.gg/FryPg2xj3E"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-full transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl hover:scale-105 transform border-2 border-white text-white hover:bg-white hover:text-orange-600 shadow-xl hover:shadow-2xl"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
