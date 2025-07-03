'use client'

export default function FinalSection() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 text-left space-y-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          <span className="text-gray-300">This Isn't the End — </span>
          <span className="text-white">It's Day Zero</span>
        </h2>
        <p className="text-lg text-gray-300">
          Waffle isn't a platform. It's a starting point. A call to build before you feel ready. To try messy things with real people — not LinkedIn titles.
          This is where students stop waiting and start moving.
        </p>
        <p className="text-sm mt-6 text-gray-400">
          Wanna start something weird, bold, or fun? <a href="https://docs.google.com/forms/d/e/1FAIpQLScqckW5RAs5GVeMNpAzFZF2Ro5TNmVgtOZGc68ifDAxDn_VlA/viewform?usp=sharing&ouid=100170810435940346187" target="_blank" rel="noopener noreferrer" className="underline hover:text-white text-[#7736F8]">Join Waffle — we saved you a seat</a>.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-800" />
    </section>
  );
}
