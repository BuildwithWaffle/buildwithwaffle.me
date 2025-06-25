"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
  <div className="text-center text-sm text-white mt-6 mb-9">
    Waffle : <span className="italic">Build. Share. Connect.</span>
  </div>

  <nav className="w-fit mx-auto px-8 py-4 bg-black text-white rounded-full border border-white shadow-md">
    <ul className="flex items-center justify-center gap-13 text-sm font-medium">
      {["Home", "About", "Projects", "Events", "Chapters", "Socials"].map((item) => (
        <li key={item}>
          <Link
            href={`#${item.toLowerCase()}`}
            className="hover:text-orange-400 transition-colors duration-200"
          >
            {item}
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
</>
  );
}
