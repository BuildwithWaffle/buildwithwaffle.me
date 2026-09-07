import Link from "next/link";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
  title: "Code of Conduct | Build with Waffle",
  description: "Code of conduct for Build with Waffle community - Learn about our standards, expectations, and guidelines for creating a welcoming environment for all student builders.",
  keywords: ["code of conduct", "community guidelines", "build with waffle", "student community", "inclusive environment"],
  authors: [{ name: "Build with Waffle Team" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Code of Conduct | Build with Waffle",
    description: "Code of conduct for Build with Waffle community - Learn about our standards, expectations, and guidelines for creating a welcoming environment for all student builders.",
    url: "https://buildwithwaffle.me/CodeOfConduct",
    siteName: "Build with Waffle",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Code of Conduct | Build with Waffle",
    description: "Code of conduct for Build with Waffle community - Learn about our standards, expectations, and guidelines for creating a welcoming environment for all student builders.",
  },
  alternates: {
    canonical: "https://buildwithwaffle.me/CodeOfConduct",
  },
};

const LAST_UPDATED = "July 3, 2025";
const EFFECTIVE_DATE = "July 3, 2025";

export default function CodeOfConduct() {
  return (
    <main className="min-h-screen bg-surface">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Code of Conduct",
            description: "Code of conduct for Build with Waffle community",
            url: "https://buildwithwaffle.me/CodeOfConduct",
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
      <div className="absolute inset-0 dot-grid text-accent opacity-[0.06] pointer-events-none" />
      
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto mt-10">
          {/* Navigation */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link 
              href="/" 
              className="inline-flex items-center text-ink-2 hover:text-accent transition-colors duration-200 text-sm group"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink">
                Code of Conduct
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-ink-2">
                <time dateTime={LAST_UPDATED}>Last updated: {LAST_UPDATED}</time>
                <span className="hidden sm:inline">•</span>
                <time dateTime={EFFECTIVE_DATE}>Effective: {EFFECTIVE_DATE}</time>
              </div>
            </div>
            
            {/* Introduction */}
            <div className="bg-brand-soft border-l-4 border-brand p-6 rounded-r-lg">
              <p className="text-ink-2 leading-relaxed text-lg">
                Build with Waffle is committed to providing a welcoming, inclusive, and harassment-free environment for all members of our community. We value diversity and believe that everyone deserves to be treated with respect and dignity.
              </p>
            </div>
          </header>

          {/* Main Content */}
          <article className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-ink">Our Commitment</h2>
              <p className="text-ink-2 leading-relaxed">
                Build with Waffle is committed to providing a welcoming, inclusive, and harassment-free environment for all members of our community. We value diversity and believe that everyone deserves to be treated with respect and dignity, regardless of their background, identity, or experience level.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-ink">Our Standards</h2>
              
              <h3 className="text-xl font-medium mb-3 text-ink">Expected Behavior</h3>
              <p className="text-ink-2 leading-relaxed mb-4">
                We expect all community members to:
              </p>
              <ul className="text-ink-2 space-y-2 list-disc list-inside mb-6">
                <li>Be respectful and considerate in all interactions</li>
                <li>Use inclusive language and avoid discriminatory comments</li>
                <li>Show empathy and kindness toward others</li>
                <li>Provide constructive feedback and accept it gracefully</li>
                <li>Focus on collaboration and learning</li>
                <li>Support and encourage fellow members</li>
                <li>Respect different perspectives and experiences</li>
                <li>Follow platform-specific guidelines (Discord, events, etc.)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-ink">Unacceptable Behavior</h3>
              <p className="text-ink-2 leading-relaxed mb-4">
                The following behaviors are considered harassment and are unacceptable:
              </p>
              <ul className="text-ink-2 space-y-2 list-disc list-inside">
                <li>Discriminatory language or actions based on race, gender, religion, sexual orientation, disability, or other protected characteristics</li>
                <li>Harassment, intimidation, or threats toward any individual</li>
                <li>Sexual harassment or unwelcome sexual attention</li>
                <li>Sharing inappropriate content or images</li>
                <li>Doxxing or sharing personal information without consent</li>
                <li>Spam, trolling, or deliberately disruptive behavior</li>
                <li>Plagiarism or taking credit for others&apos; work</li>
                <li>Violating intellectual property rights</li>
                <li>Any illegal activities or encouraging others to break the law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-ink">Community Guidelines</h2>
              
              <h3 className="text-xl font-medium mb-3 text-ink">Discord Server</h3>
              <ul className="text-ink-2 space-y-2 list-disc list-inside mb-6">
                <li>Keep conversations relevant to the channel topic</li>
                <li>Use appropriate channels for different types of discussions</li>
                <li>Avoid excessive self-promotion or spam</li>
                <li>Be patient with newcomers and help them get oriented</li>
                <li>Use @mentions responsibly and avoid unnecessary pings</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-ink">Events and Hackathons</h3>
              <ul className="text-ink-2 space-y-2 list-disc list-inside mb-6">
                <li>Participate in good faith and follow event-specific rules</li>
                <li>Respect judges, organizers, and fellow participants</li>
                <li>Submit original work and properly attribute collaborators</li>
                <li>Help create an inclusive environment for all skill levels</li>
                <li>Follow submission deadlines and guidelines</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-ink">Project Sharing</h3>
              <ul className="text-ink-2 space-y-2 list-disc list-inside">
                <li>Share projects that are appropriate for all audiences</li>
                <li>Provide proper attribution for any code, assets, or ideas used</li>
                <li>Be open to feedback and questions about your work</li>
                <li>Help others learn from your projects and experiences</li>
                <li>Respect others&apos; intellectual property and privacy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-ink">Reporting Violations</h2>
              <p className="text-ink-2 leading-relaxed mb-4">
                If you experience or witness behavior that violates this Code of Conduct, please report it immediately:
              </p>
              <ul className="text-ink-2 space-y-2 list-disc list-inside mb-6">
                <li>Contact our moderators directly through Discord</li>
                <li>Use the report function on relevant platforms</li>
                <li>Email us at <a href="mailto:buildwithwaffle@gmail.com" className="text-accent hover:text-accent underline">buildwithwaffle@gmail.com</a></li>
              </ul>
              <p className="text-ink-2 leading-relaxed">
                All reports will be handled confidentially and investigated promptly. We are committed to creating a safe space for everyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-ink">Enforcement</h2>
              <p className="text-ink-2 leading-relaxed mb-4">
                Violations of this Code of Conduct may result in:
              </p>
              <ul className="text-ink-2 space-y-2 list-disc list-inside mb-6">
                <li>Warning and guidance about appropriate behavior</li>
                <li>Temporary suspension from community activities</li>
                <li>Permanent removal from the community</li>
                <li>Reporting to relevant authorities if illegal activities are involved</li>
              </ul>
              <p className="text-ink-2 leading-relaxed">
                We reserve the right to take appropriate action to maintain a safe and welcoming environment for all community members.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-ink">Contact Information</h2>
              <p className="text-ink-2 leading-relaxed">
                If you have questions about this Code of Conduct or need to report a violation, please contact us:
              </p>
              <ul className="text-ink-2 space-y-2 list-disc list-inside mt-4">
                <li>Email: <a href="mailto:buildwithwaffle@gmail.com" className="text-accent hover:text-accent underline">buildwithwaffle@gmail.com</a></li>
                <li>Discord: Contact any moderator or admin</li>
                <li>Social Media: Reach out through our official channels</li>
              </ul>
            </section>
          </article>

          {/* Footer */}
          <footer className="border-t border-line pt-8 mt-16">
            <div className="bg-card/70 backdrop-blur-sm border border-line rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <p className="text-ink-2 text-sm">
                  This Code of Conduct is effective as of <time dateTime={EFFECTIVE_DATE}>{EFFECTIVE_DATE}</time> and applies to all Build with Waffle community members.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="/terms" 
                    className="text-accent hover:text-accent text-sm transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                  <Link 
                    href="/privacy" 
                    className="text-accent hover:text-accent text-sm transition-colors"
                  >
                    Privacy Policy
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
