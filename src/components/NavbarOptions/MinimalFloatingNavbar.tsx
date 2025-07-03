"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Builds", href: "/Projects" },
  { label: "Events", href: "/Events" },
  { label: "Letter", href: "/Letter" },
  { label: "Join Us", href: "#join", isCTA: true },
];

export default function MinimalFloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/90 backdrop-blur-lg border border-black rounded-full px-6 py-3 shadow-xl">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Waffle"
              width={24}
              height={24}
              className="rounded"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  item.isCTA
                    ? "px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
                    : "text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span className={`h-0.5 w-5 bg-white rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`h-0.5 w-5 bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0' : 'my-0.5'}`}></span>
              <span className={`h-0.5 w-5 bg-white rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  item.isCTA
                    ? "block w-full text-center py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
                    : "block py-2 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
