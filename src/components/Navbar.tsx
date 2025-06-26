"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Builds", href: "/projects" },
  { label: "Events", href: "/waffelevents" },
  { label: "Socials", href: "#socials" },
  { label: "Join Us", href: "#join", isCTA: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-black/80 text-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo (top-left) */}
        <Link href="/">
          <Image
            src="/images/Logo1.png"
            alt="Logo"
            width={50}
            height={50}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Animated Hamburger Icon (top-right) */}
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex flex-col justify-center items-center gap-1 group z-50"
        >
          {/* Line 1 */}
          <span
            className={`h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          {/* Line 2 */}
          <span
            className={`h-0.5 w-6 bg-white rounded transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          {/* Line 3 */}
          <span
            className={`h-0.5 w-6 bg-white rounded transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Dropdown menu with fade/slide */}
      {/* Dropdown menu with drop-down & pull-up animation */}
<div
  className={`absolute right-4 top-20 w-48 bg-black rounded-md shadow-lg px-6 py-4 overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none"
  }`}
>
  <div className="space-y-4 transition-opacity duration-300">
    {navItems.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        onClick={closeMenu}
        className={`${
          item.isCTA
            ? "flex items-center justify-center bg-white text-black px-4 py-2 rounded-full hover:bg-[#7736F8] hover:text-white transition w-full"
            : "block text-center text-sm font-medium hover:text-[#7736F8] transition-colors duration-200"
        }`}
      >
        {item.label}
      </Link>
    ))}
  </div>
</div>
    </nav>
  );
}