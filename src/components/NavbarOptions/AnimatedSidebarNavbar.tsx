"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about", icon: "📖" },
  { label: "Builds", href: "/projects", icon: "🚀" },
  { label: "Events", href: "/waffleevents", icon: "🎉" },
  { label: "Letter", href: "/letter", icon: "💌" },
  { label: "Join Us", href: "#join", icon: "👥", isCTA: true },
];

export default function AnimatedSidebarNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-black">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Waffle"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-white font-bold text-xl">Waffle</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  item.isCTA
                    ? "px-4 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
                    : "text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
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
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? 'opacity-0' : 'my-1'}`}></span>
              <span className={`h-0.5 w-6 bg-white rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-lg border-l border-black transform transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 pt-20">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  item.isCTA
                    ? "bg-white text-black font-medium hover:bg-gray-200"
                    : "text-white hover:bg-white/10"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-lg font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
