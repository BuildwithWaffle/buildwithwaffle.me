"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Builds", href: "/Projects" },
  { label: "Events", href: "/Events" },
  { label: "Letter", href: "/Letter" },
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
              ? 'bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl' 
              : 'bg-transparent'
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
              <span className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-gray-900'
              }`}>Waffle</span>
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
                        ? `px-4 py-2 backdrop-blur-sm border rounded-full transition-all duration-300 hover:scale-105 text-white`
                        : `transition-colors duration-200 relative group ${
                            isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-600 hover:text-gray-900'
                          }`
                    }`}
                    style={item.isCTA ? {
                      backgroundColor: 'var(--primary-accent)',
                      borderColor: 'var(--primary-accent)',
                      boxShadow: '0 4px 6px -1px var(--primary-accent-shadow)'
                    } : {}}
                    onMouseEnter={item.isCTA ? (e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-accent-hover)';
                      e.currentTarget.style.boxShadow = '0 10px 25px -5px var(--primary-accent-shadow-hover), 0 4px 6px -2px var(--primary-accent-shadow-hover)';
                    } : undefined}
                    onMouseLeave={item.isCTA ? (e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px var(--primary-accent-shadow)';
                    } : undefined}
                  >
                    {item.label}
                    {!item.isCTA && (
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                            style={{ backgroundColor: 'var(--primary-accent)' }}></span>
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
                  ? 'bg-gray-100 border border-gray-200' 
                  : 'bg-gray-100'
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`h-0.5 w-6 bg-gray-900 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-gray-900 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : 'my-1'}`}></span>
                <span className={`h-0.5 w-6 bg-gray-900 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className={`md:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-md border overflow-hidden transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/90 border-gray-200 rounded-2xl' 
                : 'bg-white/95 border-gray-200 rounded-lg'
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
                          ? 'w-full py-3 backdrop-blur-sm border rounded-lg text-white'
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      style={item.isCTA ? {
                        backgroundColor: 'var(--primary-accent)',
                        borderColor: 'var(--primary-accent)',
                        boxShadow: '0 4px 6px -1px var(--primary-accent-shadow)'
                      } : {}}
                      onMouseEnter={item.isCTA ? (e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary-accent-hover)';
                      } : undefined}
                      onMouseLeave={item.isCTA ? (e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                      } : undefined}
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