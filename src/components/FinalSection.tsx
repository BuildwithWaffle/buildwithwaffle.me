'use client'

export default function FinalSection() {
  return (
    <section className="relative text-gray-900 py-20 px-6 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 pointer-events-none z-0" 
           style={{
             backgroundImage: `radial-gradient(var(--primary-accent) 1px, transparent 1px)`,
             backgroundSize: '50px 50px',
             opacity: 0.05
           }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 text-center space-y-8">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span style={{ color: `var(--primary-accent)` }}>This Isn't the End — </span>
            <br className="hidden sm:block" />
            <span className="text-gray-900">It's Day Zero</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
              Waffle isn't a platform. It's a starting point. A call to build before you feel ready. 
              To try messy things with real people — not LinkedIn titles.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              This is where students stop waiting and start moving.
            </p>
          </div>
        </div>
        
        <div className="pt-4">
          <p className="text-lg text-gray-600 mb-2">
            Wanna start something weird, bold, or fun?{' '}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScqckW5RAs5GVeMNpAzFZF2Ro5TNmVgtOZGc68ifDAxDn_VlA/viewform?usp=sharing&ouid=100170810435940346187" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline transition-colors cursor-pointer font-medium"
              style={{ color: `var(--primary-accent)` }}
            >
              Join Waffle — we saved you a seat
            </a>.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />
    </section>
  );
}
