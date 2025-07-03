"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Builds", href: "/projects" },
  { label: "Events", href: "/waffleevents" },
  { label: "Letter", href: "/letter" },
  { label: "Join Us", href: "#join", isCTA: true },
];

export default function GlassmorphismNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Glass Background */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl"></div>
          
          {/* Content */}
          <div className="relative flex justify-between items-center px-6 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Waffle"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-white font-bold text-xl">Waffle</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${
                    item.isCTA
                      ? "px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                      : "text-white/80 hover:text-white transition-colors duration-200 relative group"
                  }`}
                >
                  {item.label}
                  {!item.isCTA && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0' : 'my-1'}`}></span>
                <span className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      item.isCTA
                        ? "block w-full text-center py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white hover:text-black transition-all duration-300"
                        : "block py-2 text-white/80 hover:text-white transition-colors duration-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
