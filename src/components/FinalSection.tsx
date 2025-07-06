'use client'

export default function FinalSection() {
  return (
    <section className="relative text-gray-900 py-24 px-6 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 pointer-events-none z-0" 
           style={{
             backgroundImage: `radial-gradient(var(--primary-accent) 1px, transparent 1px)`,
             backgroundSize: '50px 50px',
             opacity: 0.05
           }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 text-left space-y-8">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          <span className="text-gray-600">This Isn't the End — </span>
          <span className="text-gray-900">It's Day Zero</span>
        </h2>
        <p className="text-lg text-gray-600">
          Waffle isn't a platform. It's a starting point. A call to build before you feel ready. To try messy things with real people — not LinkedIn titles.
          This is where students stop waiting and start moving.
        </p>
        <p className="text-sm mt-6 text-gray-600">
          Wanna start something weird, bold, or fun? <a href="https://docs.google.com/forms/d/e/1FAIpQLScqckW5RAs5GVeMNpAzFZF2Ro5TNmVgtOZGc68ifDAxDn_VlA/viewform?usp=sharing&ouid=100170810435940346187" target="_blank" rel="noopener noreferrer" className="underline transition-colors cursor-pointer"
          style={{ color: `var(--primary-accent)` }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = `var(--primary-accent-hover)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = `var(--primary-accent)`;
          }}
        >Join Waffle — we saved you a seat</a>.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />
    </section>
  );
}
