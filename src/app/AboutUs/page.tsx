'use client'
import { FaInstagram, FaLinkedin, FaYoutube, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function AboutUs() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 text-left space-y-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          <span className="text-gray-300">🧇 About </span>
          <span className="text-white">Waffle</span>
        </h2>
        <div className="space-y-6 text-lg text-gray-300">
          <p>
            <strong className="text-white">Waffle isn't a startup club. It's a spark.</strong>
          </p>
          <p>
            We're not here to chase unicorns or polish pitch decks. We're here to build. <strong className="text-[#7736F8]">Raw. Messy. Real.</strong>
          </p>
          <p>
            Build with Waffle is India's first student-led creator movement — a launchpad for misfits, hackers, designers, writers, filmmakers, and anyone who's ever felt like they didn't fit the mold. Whether you're shipping your first webpage or recording your first lo-fi beat in a dorm room — this is your place.
          </p>
          <p>
            We're tired of "innovation" that starts with suits and ends with swag bags.
            <br />
            <strong className="text-white">Waffle is different. No applications. No gatekeepers. Just people who give a damn.</strong>
          </p>
          <p>
            We host build nights, jam on dumb ideas, and turn unfinished notes into real projects.
            <br />
            We don't wait for permission. We just show up — together.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-[#7736F8]/10 to-transparent rounded-2xl p-6 border border-[#7736F8]/20">
          <h3 className="text-xl font-semibold mb-4 text-white">Waffle is for you if:</h3>
          <div className="grid md:grid-cols-2 gap-3 text-gray-300">
            <div className="flex items-start space-x-3">
              <div className="text-[#7736F8] mt-1">•</div>
              <p>You've got an idea but don't know where to start.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-[#7736F8] mt-1">•</div>
              <p>You've never "belonged" in tech clubs or smart chats.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-[#7736F8] mt-1">•</div>
              <p>You're tired of being talked over and just want to build.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-[#7736F8] mt-1">•</div>
              <p>You believe creativity isn't about being perfect — it's about being honest.</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-2xl font-semibold">
            <span className="text-gray-300">We're not here to go viral.</span>
            <br />
            <span className="text-[#7736F8]">We're here to move.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScqckW5RAs5GVeMNpAzFZF2Ro5TNmVgtOZGc68ifDAxDn_VlA/viewform?usp=sharing&ouid=100170810435940346187"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7736F8] hover:bg-[#7736F8]/80 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
            >
              Join the Movement
            </a>
            <a
              href="/letter"
              className="border border-white/20 hover:bg-white/5 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200"
            >
              Read Our Letter
            </a>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6 pt-4">
          <a href="https://discord.gg/FryPg2xj3E" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <FaDiscord className="hover:text-[#7736F8] text-2xl transition-colors duration-200" />
          </a>
          <a href="https://www.instagram.com/buildwithwaffle/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-[#7736F8] text-2xl transition-colors duration-200" />
          </a>
          <a href="https://x.com/buildwithwaffle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter className="hover:text-[#7736F8] text-2xl transition-colors duration-200" />
          </a>
          <a href="https://www.linkedin.com/company/buildwithwaffle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-[#7736F8] text-2xl transition-colors duration-200" />
          </a>
          <a href="https://www.youtube.com/@buildwithwaffle" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="hover:text-[#7736F8] text-2xl transition-colors duration-200" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-800" />
    </section>
  );
}
