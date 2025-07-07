"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Philosophy", href: "/Philosophy" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/Events" },
  { label: "Start a Chapter", href: "https://docs.google.com/forms/d/e/1FAIpQLSfCH69gkopLdBQB7OQFPpU3bJ90-dM4IsHB281SIAs9VYdgjg/viewform?usp=header" },
  { label: "Join Waffle", href: "https://docs.google.com/forms/d/e/1FAIpQLScqckW5RAs5GVeMNpAzFZF2Ro5TNmVgtOZGc68ifDAxDn_VlA/viewform?usp=sharing&ouid=100170810435940346187", isCTA: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Permanent Floating Background */}
          <div className="absolute inset-0 backdrop-blur-md border rounded-2xl shadow-xl"
               style={{
                 backgroundColor: 'var(--background-secondary)',
                 borderColor: 'var(--border)'
               }}></div>
          
          {/* Content */}
          <div className="relative flex justify-between items-center px-6 py-3">
            {/* Logo with W Icon */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                   style={{
                     background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                   }}>
                W
              </div>
              <span className="font-bold text-xl text-gray-900">Waffle</span>
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
                        : `transition-colors duration-200 relative group text-gray-600 hover:text-gray-900`
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
              className="md:hidden p-2 rounded-lg transition-all duration-300 bg-white/10 backdrop-blur-sm border"
              style={{
                backgroundColor: 'var(--primary-accent-light)',
                borderColor: 'var(--primary-accent)'
              }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`h-0.5 w-6 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}
                      style={{ backgroundColor: 'var(--primary-accent)' }}></span>
                <span className={`h-0.5 w-6 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : 'my-1'}`}
                      style={{ backgroundColor: 'var(--primary-accent)' }}></span>
                <span className={`h-0.5 w-6 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}
                      style={{ backgroundColor: 'var(--primary-accent)' }}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-md border overflow-hidden transition-all duration-300 bg-white/90 border-gray-200 rounded-2xl shadow-xl"
                 style={{
                   backgroundColor: 'var(--background-secondary)',
                   borderColor: 'var(--border)'
                 }}>
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