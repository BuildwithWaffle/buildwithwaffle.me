import Link from "next/link";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
  title: "Terms & Conditions | Build with Waffle",
  description: "Terms and conditions for Build with Waffle - A student-led creator movement for builders, hackers, designers, and innovators.",
  keywords: ["terms and conditions", "build with waffle", "student community", "creator movement", "legal terms"],
  authors: [{ name: "Build with Waffle Team" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms & Conditions | Build with Waffle",
    description: "Terms and conditions for Build with Waffle - A student-led creator movement for builders, hackers, designers, and innovators.",
    url: "https://buildwithwaffle.me/terms",
    siteName: "Build with Waffle",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Build with Waffle",
    description: "Terms and conditions for Build with Waffle - A student-led creator movement for builders, hackers, designers, and innovators.",
  },
  alternates: {
    canonical: "https://buildwithwaffle.me/terms",
  },
};

// Constants for better maintainability
const LAST_UPDATED = "July 3, 2025";
const EFFECTIVE_DATE = "July 3, 2025";

export default function TermsAndConditions() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms & Conditions",
            description: "Terms and conditions for Build with Waffle",
            url: "https://buildwithwaffle.me/terms",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              name: "Build with Waffle",
              url: "https://buildwithwaffle.me",
            },
            dateModified: LAST_UPDATED,
            datePublished: EFFECTIVE_DATE,
          }),
        }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
      
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm group"
              aria-label="Back to Home"
            >
              <svg 
                className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </nav>
          
          {/* Header */}
          <header className="space-y-8 mb-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Terms & Conditions
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400">
                <time dateTime={LAST_UPDATED}>Last updated: {LAST_UPDATED}</time>
                <span className="hidden sm:inline">•</span>
                <time dateTime={EFFECTIVE_DATE}>Effective: {EFFECTIVE_DATE}</time>
              </div>
            </div>
            
            {/* Introduction */}
            <div className="bg-gradient-to-r from-[#7736F8]/10 to-transparent border-l-4 border-[#7736F8] p-6 rounded-r-lg">
              <p className="text-gray-300 leading-relaxed text-lg">
                Welcome to Build with Waffle! These terms govern your use of our platform and participation in our community. 
                By joining us, you&apos;re agreeing to be part of a movement that celebrates builders, creators, and innovators.
              </p>
            </div>
          </header>

          {/* Table of Contents */}
          <aside className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-12">
            <h2 className="text-lg font-semibold mb-4 text-white">Table of Contents</h2>
            <nav>
              <ol className="space-y-2 text-sm">
                {[
                  "Acceptance of Terms",
                  "About Waffle", 
                  "User Conduct",
                  "Content and Projects",
                  "Events and Activities",
                  "Chapter Leadership",
                  "Privacy and Data",
                  "Disclaimers",
                  "Limitation of Liability",
                  "Changes to Terms",
                  "Contact Information"
                ].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#section-${index + 1}`}
                      className="text-gray-400 hover:text-[#7736F8] transition-colors duration-200"
                    >
                      {index + 1}. {item}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none space-y-12">
            <section id="section-1" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">1</span>
                Acceptance of Terms
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  By accessing and using Build with Waffle (&quot;Waffle,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </section>

            <section id="section-2" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">2</span>
                About Waffle
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Waffle is a student-led creator movement that provides a platform for students to build, ship, and showcase their projects. We are not a traditional club or institution but a community of builders and creators who believe in the power of shipping real products.
                </p>
              </div>
            </section>

            <section id="section-3" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">3</span>
                User Conduct
              </h2>
              <div className="pl-12 space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  As a member of the Waffle community, you agree to:
                </p>
                <ul className="text-gray-300 space-y-3 text-lg">
                  {[
                    "Respect all community members regardless of their background, skill level, or experience",
                    "Share your work authentically and give proper credit to collaborators",
                    "Provide constructive feedback and support to fellow builders",
                    "Not engage in harassment, discrimination, or harmful behavior",
                    "Not spam or promote unrelated content in our community spaces",
                    "Follow the specific guidelines of each platform we operate on (Discord, social media, etc.)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#7736F8] mr-3 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="section-4" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">4</span>
                Content and Projects
              </h2>
              <div className="pl-12 space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  When you share projects or content through Waffle:
                </p>
                <ul className="text-gray-300 space-y-3 text-lg">
                  {[
                    "You retain ownership of your intellectual property",
                    "You grant Waffle permission to showcase your work on our platforms",
                    "You are responsible for ensuring your content doesn't violate others' rights",
                    "We reserve the right to remove content that violates our community guidelines"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#7736F8] mr-3 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="section-5" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">5</span>
                Events and Activities
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Participation in Waffle events, hackathons, and activities is voluntary. We strive to create safe and inclusive environments, but participants engage at their own risk. We are not liable for any injuries, damages, or losses during events.
                </p>
              </div>
            </section>

            <section id="section-6" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">6</span>
                Chapter Leadership
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  College chapter leaders agree to uphold Waffle&apos;s values and maintain active, supportive communities. Leadership positions may be revoked if responsibilities are not met or community guidelines are violated.
                </p>
              </div>
            </section>

            <section id="section-7" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">7</span>
                Privacy and Data
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Your privacy is important to us. Please refer to our{" "}
                  <Link 
                    href="/Privacy" 
                    className="text-[#7736F8] hover:text-[#7736F8]/80 underline underline-offset-4 transition-colors"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for information on how we collect, use, and protect your data.
                </p>
              </div>
            </section>

            <section id="section-8" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">8</span>
                Disclaimers
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Waffle is provided &quot;as is&quot; without warranties of any kind. We do not guarantee continuous availability of our services or platforms. We are not responsible for external links or third-party content shared within our community.
                </p>
              </div>
            </section>

            <section id="section-9" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">9</span>
                Limitation of Liability
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Waffle shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our platform or participation in our community.
                </p>
              </div>
            </section>

            <section id="section-10" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">10</span>
                Changes to Terms
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  We reserve the right to modify these terms at any time. Changes will be posted on this page, and your continued use of Waffle constitutes acceptance of any modifications.
                </p>
              </div>
            </section>

            <section id="section-11" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">11</span>
                Contact Information
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  If you have questions about these Terms & Conditions, please contact us through our community Discord or reach out to our team directly at{" "}
                  <a 
                    href="mailto:buildwithwaffle@gmail.com" 
                    className="text-[#7736F8] hover:text-[#7736F8]/80 underline underline-offset-4 transition-colors"
                  >
                    buildwithwaffle@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </article>

          {/* Footer */}
          <footer className="border-t border-gray-800 pt-8 mt-16">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <p className="text-gray-400 text-sm">
                  These terms are effective as of <time dateTime={EFFECTIVE_DATE}>{EFFECTIVE_DATE}</time> and govern your use of Build with Waffle.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="/Privacy" 
                    className="text-[#7736F8] hover:text-[#7736F8]/80 text-sm transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/CodeOfConduct" 
                    className="text-[#7736F8] hover:text-[#7736F8]/80 text-sm transition-colors"
                  >
                    Code of Conduct
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
