import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-white min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
            ← Back to Home
          </Link>
        </div>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Build with Waffle (&quot;Waffle,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, join our community, or participate in our activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3 text-white">Personal Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide, including:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside mb-6">
                <li>Name and email address when you join our community</li>
                <li>College/university affiliation</li>
                <li>Project descriptions and portfolios you choose to share</li>
                <li>Social media handles (if provided)</li>
                <li>Messages and communications in our Discord server or other platforms</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-white">Usage Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We automatically collect certain information when you visit our website:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Device information and operating system</li>
                <li>Referral sources and search terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the collected information to:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Operate and maintain our community platform</li>
                <li>Communicate with you about events, updates, and opportunities</li>
                <li>Showcase student projects and achievements (with permission)</li>
                <li>Improve our website and community experience</li>
                <li>Organize events, hackathons, and chapter activities</li>
                <li>Connect you with mentors, peers, and opportunities</li>
                <li>Analyze usage patterns to enhance our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may share information in the following circumstances:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li><strong>With your consent:</strong> When you explicitly agree to share your projects or profile</li>
                <li><strong>Service providers:</strong> With trusted third parties who help us operate our platform (Discord, email services, etc.)</li>
                <li><strong>Legal requirements:</strong> If required by law or to protect our rights and safety</li>
                <li><strong>Community showcase:</strong> Project information and achievements you choose to make public</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use various third-party services to operate our community:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li><strong>Discord:</strong> For community chat and events</li>
                <li><strong>Social Media Platforms:</strong> For sharing updates and showcasing projects</li>
                <li><strong>Analytics Tools:</strong> To understand website usage</li>
                <li><strong>Email Services:</strong> For communication and newsletters</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. You may request deletion of your personal information at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Your Rights and Choices</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of communications from us</li>
                <li>Request removal of your projects from our showcase</li>
                <li>Leave our community platforms at any time</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Cookies and Tracking</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Children&apos;s Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                While Waffle is primarily for college students, we do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. International Users</h2>
              <p className="text-gray-300 leading-relaxed">
                Waffle operates globally with a focus on students worldwide. By using our services, you consent to the transfer and processing of your information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">13. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about this Privacy Policy or how we handle your information, please contact us through our community Discord or reach out to our team directly. You can also review our <Link href="/terms" className="text-blue-400 hover:underline">Terms & Conditions</Link> for additional information.
              </p>
            </section>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12">
            <p className="text-gray-400 text-sm">
              This Privacy Policy is effective as of {new Date().toLocaleDateString()} and applies to all users of Build with Waffle.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
