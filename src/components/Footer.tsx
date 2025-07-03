"use client";
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaYoutube, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-gray-800/50 text-white px-6 md:px-20 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🧇</span>
              <h3 className="text-xl font-bold">Build with Waffle</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's first student-led creator movement. For the misfits, the quiet builders, 
              the kids with half-finished dreams.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://discord.gg/buildwithwaffle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#7736F8] transition-colors duration-200"
                aria-label="Join our Discord"
              >
                <FaDiscord className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/buildwithwaffle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#7736F8] transition-colors duration-200"
                aria-label="Follow us on Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/buildwithwaffle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#7736F8] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/buildwithwaffle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#7736F8] transition-colors duration-200"
                aria-label="Connect on LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@buildwithwaffle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#7736F8] transition-colors duration-200"
                aria-label="Subscribe to our YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
            <nav>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/AboutUs" className="text-gray-400 hover:text-white transition-colors duration-200">
                    About Waffle
                  </Link>
                </li>
                <li>
                  <Link href="/Letter" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Our Letter
                  </Link>
                </li>
                <li>
                  <Link href="/Events" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/PostYourProject" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Post Your Project
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <nav>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/Projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Projects
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://docs.buildwithwaffle.me" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a 
                    href="https://blog.buildwithwaffle.me" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:hello@buildwithwaffle.me"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <nav>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/Terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/Privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/CodeOfConduct" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Build with Waffle. All rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              Made with ❤️ by the Waffle community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
