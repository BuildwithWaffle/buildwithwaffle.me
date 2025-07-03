import Link from "next/link";

export default function TermsAndConditions() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Build with Waffle (&quot;Waffle,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. About Waffle</h2>
              <p className="text-gray-300 leading-relaxed">
                Waffle is a student-led creator movement that provides a platform for students to build, ship, and showcase their projects. We are not a traditional club or institution but a community of builders and creators.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. User Conduct</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a member of the Waffle community, you agree to:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Respect all community members regardless of their background, skill level, or experience</li>
                <li>Share your work authentically and give proper credit to collaborators</li>
                <li>Provide constructive feedback and support to fellow builders</li>
                <li>Not engage in harassment, discrimination, or harmful behavior</li>
                <li>Not spam or promote unrelated content in our community spaces</li>
                <li>Follow the specific guidelines of each platform we operate on (Discord, social media, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Content and Projects</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you share projects or content through Waffle:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>You retain ownership of your intellectual property</li>
                <li>You grant Waffle permission to showcase your work on our platforms</li>
                <li>You are responsible for ensuring your content doesn&apos;t violate others&apos; rights</li>
                <li>We reserve the right to remove content that violates our community guidelines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Events and Activities</h2>
              <p className="text-gray-300 leading-relaxed">
                Participation in Waffle events, hackathons, and activities is voluntary. We strive to create safe and inclusive environments, but participants engage at their own risk. We are not liable for any injuries, damages, or losses during events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Chapter Leadership</h2>
              <p className="text-gray-300 leading-relaxed">
                College chapter leaders agree to uphold Waffle&apos;s values and maintain active, supportive communities. Leadership positions may be revoked if responsibilities are not met or community guidelines are violated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Privacy and Data</h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please refer to our <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link> for information on how we collect, use, and protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Disclaimers</h2>
              <p className="text-gray-300 leading-relaxed">
                Waffle is provided &quot;as is&quot; without warranties of any kind. We do not guarantee continuous availability of our services or platforms. We are not responsible for external links or third-party content shared within our community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                Waffle shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our platform or participation in our community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page, and your continued use of Waffle constitutes acceptance of any modifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have questions about these Terms & Conditions, please contact us through our community Discord or reach out to our team directly.
              </p>
            </section>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12">
            <p className="text-gray-400 text-sm">
              These terms are effective as of {new Date().toLocaleDateString()} and govern your use of Build with Waffle.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
