"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Builds", href: "/projects" },
  { label: "Events", href: "/waffleevents" },
  { label: "Letter", href: "/letter" },
  { label: "Join Us", href: "https://docs.google.com/forms/d/e/1FAIpQLScqckW5RAs5GVeMNpAzFZF2Ro5TNmVgtOZGc68ifDAxDn_VlA/viewform?usp=sharing&ouid=100170810435940346187", isCTA: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? 'px-4 py-3' : 'px-0 py-0'
    }`}>
      <div className={`${isScrolled ? 'max-w-7xl mx-auto' : 'w-full'}`}>
        <div className="relative">
          {/* Dynamic Background */}
          <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl' 
              : 'bg-black/80 backdrop-blur-md border-b border-black'
          }`}></div>
          
          {/* Content */}
          <div className={`relative flex justify-between items-center transition-all duration-500 ease-in-out ${
            isScrolled ? 'px-6 py-3' : 'px-6 py-2'
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Waffle"
                width={32}
                height={32}
                className="rounded-lg hover:scale-105 transition-transform duration-200"
              />
              <span className="text-white font-bold text-xl">Waffle</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isExternal = item.href.startsWith('http');
                const Component = isExternal ? 'a' : Link;
                const linkProps = isExternal 
                  ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                  : { href: item.href };
                
                return (
                  <Component
                    key={item.label}
                    {...linkProps}
                    className={`${
                      item.isCTA
                        ? `px-4 py-2 backdrop-blur-sm border rounded-full transition-all duration-300 hover:scale-105 ${
                            isScrolled 
                              ? 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-black' 
                              : 'bg-white text-black border-white hover:bg-gray-200 hover:text-black'
                          }`
                        : "text-white/80 hover:text-white transition-colors duration-200 relative group"
                    }`}
                  >
                    {item.label}
                    {!item.isCTA && (
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                        isScrolled ? 'bg-white' : 'bg-[#7736F8]'
                      }`}></span>
                    )}
                  </Component>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                isScrolled 
                  ? 'bg-white/10 border border-white/20' 
                  : 'bg-white/10'
              }`}
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
            <div className={`md:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-md border overflow-hidden transition-all duration-300 ${
              isScrolled 
                ? 'bg-black/20 border-white/10 rounded-2xl' 
                : 'bg-black/95 border-black rounded-lg'
            }`}>
              <div className="p-4 space-y-2">
                {navItems.map((item) => {
                  const isExternal = item.href.startsWith('http');
                  const Component = isExternal ? 'a' : Link;
                  const linkProps = isExternal 
                    ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                    : { href: item.href };
                  
                  return (
                    <Component
                      key={item.label}
                      {...linkProps}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-center transition-all duration-300 ${
                        item.isCTA
                          ? `w-full py-3 backdrop-blur-sm border rounded-lg text-white ${
                              isScrolled 
                                ? 'bg-white/10 border-white/20 hover:bg-white hover:text-black' 
                                : 'bg-white text-black hover:bg-gray-200'
                            }`
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Component>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}