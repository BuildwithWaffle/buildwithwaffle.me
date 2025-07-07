"use client";
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaYoutube, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Build with Waffle Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Build with Waffle</h3>
            <nav>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/Philosophy" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link href="/Events" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Projects
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfCH69gkopLdBQB7OQFPpU3bJ90-dM4IsHB281SIAs9VYdgjg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Start a Chapter
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:buildwithwaffle@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
            <nav>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/CodeOfConduct" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Brand and Social Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🧇</span>
              <h3 className="text-lg font-semibold text-white">Build with Waffle</h3>
            </div>
            
            {/* Essential Social Media Icons */}
            <div className="flex gap-3 mb-6">
              <a 
                href="https://discord.gg/FryPg2xj3E" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                aria-label="Discord"
              >
                <FaDiscord className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://x.com/Buildwithwaffle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/buildwithwaffle/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/company/buildwithwaffle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.youtube.com/@buildwithwaffle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5 text-white" />
              </a>
              <a 
                href="mailto:buildwithwaffle@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-gray-300">
              <p>buildwithwaffle@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Build with Waffle. Student-led movement.
            </div>
            <div className="text-sm text-gray-400">
              Made with  Love by the Waffle community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
