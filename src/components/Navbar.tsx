"use client";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/waffelevents" },
  { label: "Start a Chapter", href: "#about" },
  { label: "Socials", href: "#socials" },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="text-center text-sm text-white mt-2">
        Waffle : <span className="italic">Build. Share. Connect.</span>
      </div>

      <nav className="w-fit mx-auto px-8 py-3 bg-black text-white rounded-full border border-white shadow-md mt-5">
        <ul className="flex items-center justify-center gap-13 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-orange-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="#join"
              className="ml-4 bg-white text-black px-4 py-1.5 rounded-full font-semibold shadow hover:bg-orange-400 hover:text-white transition-colors duration-200"
            >
              JOIN US
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
