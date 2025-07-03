"use client";
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaYoutube, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="text-white px-6 md:px-20 py-12">
      
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Community</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-white transition">About Waffle</a></li>
            <li><a href="/letter" className="hover:text-white transition">Our Letter</a></li>
            <li><a href="/waffleevents" className="hover:text-white transition">Events</a></li>
            <li><a href="/postyourproject" className="hover:text-white transition">Post Your Project</a></li>
          </ul>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Team</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/founders" className="hover:text-white transition">Founders</a></li>
            <li><a href="/mentors" className="hover:text-white transition">Mentors</a></li>
            <li><a href="/contributors" className="hover:text-white transition">Contributors</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScqckW5RAs5GVeMNpAzFZF2Ro5TNmVgtOZGc68ifDAxDn_VlA/viewform?usp=sharing&ouid=100170810435940346187" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Join Our Team</a></li>
          </ul>
        </div>

        {/* Build */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Build</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/projects" className="hover:text-white transition">Student Projects</a></li>
            <li><a href="/chapters" className="hover:text-white transition">Start a Chapter</a></li>
            <li><a href="/resources" className="hover:text-white transition">Resources</a></li>
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-400">
            Ready to build something amazing? Join our community of student creators and builders.{" "}
            <a
              href="mailto:buildwithwaffle@gmail.com"
              className="text-[#7736F8] hover:underline"
            >
              buildwithwaffle@gmail.com
            </a>
          </p>
          <div className="flex items-center gap-4 mt-4 text-white">
            <a href="https://discord.gg/FryPg2xj3E" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <FaDiscord className="hover:text-[#7736F8] text-lg transition" />
            </a>
            <a href="https://www.instagram.com/buildwithwaffle/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-[#7736F8] text-lg transition" />
            </a>
            <a href="https://x.com/buildwithwaffle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaXTwitter className="hover:text-[#7736F8] text-lg transition" />
            </a>
            <a href="https://www.linkedin.com/company/buildwithwaffle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-[#7736F8] text-lg transition" />
            </a>
            <a href="https://www.youtube.com/@buildwithwaffle" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="hover:text-[#7736F8] text-lg transition" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright and Legal Links */}
      <div className="mt-10 border-t border-gray-700/20 pt-6 text-center text-sm text-gray-400 space-y-2">
        <div>
          <a href="/terms" className="hover:text-white transition">Terms and Conditions</a>
          <span className="mx-2 text-gray-600">•</span>
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          <span className="mx-2 text-gray-600">•</span>
          <a href="/code-of-conduct" className="hover:text-white transition">Code of Conduct</a>
        </div>
        <div className="text-gray-500">
          © {new Date().getFullYear()} Build with Waffle. Made with 🧇 by students, for students.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
