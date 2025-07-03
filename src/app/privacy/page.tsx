import Link from "next/link";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
  title: "Privacy Policy | Build with Waffle",
  description: "Privacy policy for Build with Waffle - Learn how we collect, use, and protect your personal information in our student creator community.",
  keywords: ["privacy policy", "data protection", "build with waffle", "student privacy", "community guidelines"],
  authors: [{ name: "Build with Waffle Team" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Build with Waffle",
    description: "Privacy policy for Build with Waffle - Learn how we collect, use, and protect your personal information in our student creator community.",
    url: "https://buildwithwaffle.me/Privacy",
    siteName: "Build with Waffle",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Build with Waffle",
    description: "Privacy policy for Build with Waffle - Learn how we collect, use, and protect your personal information in our student creator community.",
  },
  alternates: {
    canonical: "https://buildwithwaffle.me/Privacy",
  },
};

// Constants for better maintainability
const LAST_UPDATED = "July 3, 2025";
const EFFECTIVE_DATE = "July 3, 2025";

export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description: "Privacy policy for Build with Waffle",
            url: "https://buildwithwaffle.me/Privacy",
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
                Privacy Policy
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
                Your privacy matters to us. This policy explains how Build with Waffle collects, uses, and protects 
                your information when you join our community of student builders and creators.
              </p>
            </div>
          </header>

          {/* Table of Contents */}
          <aside className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-12">
            <h2 className="text-lg font-semibold mb-4 text-white">Table of Contents</h2>
            <nav>
              <ol className="space-y-2 text-sm">
                {[
                  "Introduction",
                  "Information We Collect",
                  "How We Use Your Information",
                  "Information Sharing and Disclosure",
                  "Data Security",
                  "Data Retention",
                  "Your Rights and Choices",
                  "Children's Privacy",
                  "International Data Transfers",
                  "Changes to This Policy",
                  "Contact Us"
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
                Introduction
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Build with Waffle (&quot;Waffle,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, join our community, or participate in our activities.
                </p>
              </div>
            </section>

            <section id="section-2" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">2</span>
                Information We Collect
              </h2>
              <div className="pl-12 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed text-lg mb-4">
                    We may collect personal information that you voluntarily provide, including:
                  </p>
                  <ul className="text-gray-300 space-y-3 text-lg">
                    {[
                      "Name and email address when you join our community",
                      "College/university affiliation",
                      "Project descriptions and portfolios you choose to share",
                      "Social media handles (if provided)",
                      "Messages and communications in our Discord server or other platforms"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#7736F8] mr-3 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Usage Information</h3>
                  <p className="text-gray-300 leading-relaxed text-lg mb-4">
                    We automatically collect certain information when you visit our website:
                  </p>
                  <ul className="text-gray-300 space-y-3 text-lg">
                    {[
                      "IP address and browser information",
                      "Pages visited and time spent on our site",
                      "Device information and operating system",
                      "Referral sources and search terms"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#7736F8] mr-3 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-3" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">3</span>
                How We Use Your Information
              </h2>
              <div className="pl-12 space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  We use the collected information to:
                </p>
                <ul className="text-gray-300 space-y-3 text-lg">
                  {[
                    "Operate and maintain our community platform",
                    "Communicate with you about events, updates, and opportunities",
                    "Showcase student projects and achievements (with permission)",
                    "Improve our website and community experience",
                    "Organize events, hackathons, and chapter activities",
                    "Connect you with mentors, peers, and opportunities",
                    "Analyze usage patterns to enhance our services"
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
                Information Sharing and Disclosure
              </h2>
              <div className="pl-12 space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  We do not sell, trade, or rent your personal information. We may share information in the following circumstances:
                </p>
                <ul className="text-gray-300 space-y-3 text-lg">
                  {[
                    { title: "With your consent:", desc: "When you explicitly agree to share your projects or profile" },
                    { title: "Service providers:", desc: "With trusted third parties who help us operate our platform (Discord, email services, etc.)" },
                    { title: "Legal requirements:", desc: "If required by law or to protect our rights and safety" },
                    { title: "Community showcase:", desc: "Project information and achievements you choose to make public" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#7736F8] mr-3 mt-1.5">•</span>
                      <span><strong className="text-white">{item.title}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="section-5" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">5</span>
                Data Security
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            <section id="section-6" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">6</span>
                Data Retention
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. You may request deletion of your personal information at any time.
                </p>
              </div>
            </section>

            <section id="section-7" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">7</span>
                Your Rights and Choices
              </h2>
              <div className="pl-12 space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  You have the right to:
                </p>
                <ul className="text-gray-300 space-y-3 text-lg">
                  {[
                    "Access, update, or delete your personal information",
                    "Opt out of communications from us",
                    "Request removal of your projects from our showcase",
                    "Leave our community platforms at any time",
                    "Request a copy of your data"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#7736F8] mr-3 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="section-8" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">8</span>
                Children's Privacy
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  While Waffle is primarily for college students, we do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
                </p>
              </div>
            </section>

            <section id="section-9" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">9</span>
                International Data Transfers
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Waffle operates globally with a focus on students worldwide. By using our services, you consent to the transfer and processing of your information in accordance with this policy.
                </p>
              </div>
            </section>

            <section id="section-10" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">10</span>
                Changes to This Policy
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of our services constitutes acceptance of any changes.
                </p>
              </div>
            </section>

            <section id="section-11" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white flex items-center">
                <span className="bg-[#7736F8] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">11</span>
                Contact Us
              </h2>
              <div className="pl-12 space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  If you have questions about this Privacy Policy or how we handle your information, please contact us through our community Discord or reach out to our team directly at{" "}
                  <a 
                    href="mailto:hello@buildwithwaffle.me" 
                    className="text-[#7736F8] hover:text-[#7736F8]/80 underline underline-offset-4 transition-colors"
                  >
                    hello@buildwithwaffle.me
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
                  This Privacy Policy is effective as of <time dateTime={EFFECTIVE_DATE}>{EFFECTIVE_DATE}</time> and applies to all users of Build with Waffle.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="/Terms" 
                    className="text-[#7736F8] hover:text-[#7736F8]/80 text-sm transition-colors"
                  >
                    Terms & Conditions
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
