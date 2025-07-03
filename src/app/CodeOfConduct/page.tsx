import Link from "next/link";

export default function CodeOfConduct() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Code of Conduct</h1>
            <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Commitment</h2>
              <p className="text-gray-300 leading-relaxed">
                Build with Waffle is committed to providing a welcoming, inclusive, and harassment-free environment for all members of our community. We value diversity and believe that everyone deserves to be treated with respect and dignity, regardless of their background, identity, or experience level.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Standards</h2>
              
              <h3 className="text-xl font-medium mb-3 text-white">Expected Behavior</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We expect all community members to:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside mb-6">
                <li>Be respectful and considerate in all interactions</li>
                <li>Use inclusive language and avoid discriminatory comments</li>
                <li>Show empathy and kindness toward others</li>
                <li>Provide constructive feedback and accept it gracefully</li>
                <li>Focus on collaboration and learning</li>
                <li>Support and encourage fellow members</li>
                <li>Respect different perspectives and experiences</li>
                <li>Follow platform-specific guidelines (Discord, events, etc.)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-white">Unacceptable Behavior</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The following behaviors are considered harassment and are unacceptable:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
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
              <h2 className="text-2xl font-semibold mb-4 text-white">Community Guidelines</h2>
              
              <h3 className="text-xl font-medium mb-3 text-white">Discord Server</h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside mb-6">
                <li>Keep conversations relevant to the channel topic</li>
                <li>Use appropriate channels for different types of discussions</li>
                <li>Avoid excessive self-promotion or spam</li>
                <li>Be patient with newcomers and help them get oriented</li>
                <li>Use @mentions responsibly and avoid unnecessary pings</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-white">Events and Hackathons</h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside mb-6">
                <li>Participate in good faith and follow event-specific rules</li>
                <li>Respect judges, organizers, and fellow participants</li>
                <li>Submit original work and properly attribute collaborators</li>
                <li>Help create an inclusive environment for all skill levels</li>
                <li>Follow submission deadlines and guidelines</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-white">Project Sharing</h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Share projects that are appropriate for all audiences</li>
                <li>Provide proper attribution for any code, assets, or ideas used</li>
                <li>Be open to feedback and questions about your work</li>
                <li>Help others learn from your projects and experiences</li>
                <li>Respect others&apos; intellectual property and privacy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Reporting Violations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you experience or witness behavior that violates this Code of Conduct, please report it immediately:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside mb-6">
                <li>Contact our moderators directly through Discord</li>
                <li>Use the report function on relevant platforms</li>
                <li>Reach out to our leadership team privately</li>
                <li>Email us with details of the incident</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                All reports will be handled confidentially and taken seriously. We are committed to creating a safe space for everyone to report concerns without fear of retaliation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Enforcement</h2>
              
              <h3 className="text-xl font-medium mb-3 text-white">Investigation Process</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When a violation is reported, we will:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside mb-6">
                <li>Acknowledge the report within 24 hours</li>
                <li>Investigate the matter thoroughly and fairly</li>
                <li>Interview relevant parties and gather evidence</li>
                <li>Make a decision based on the facts and this Code of Conduct</li>
                <li>Take appropriate action to address the violation</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-white">Consequences</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Violations may result in:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li><strong>Warning:</strong> A private conversation about the behavior</li>
                <li><strong>Temporary suspension:</strong> Loss of privileges for a specified period</li>
                <li><strong>Permanent ban:</strong> Removal from all Waffle platforms and events</li>
                <li><strong>Legal action:</strong> For severe violations involving illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Appeals Process</h2>
              <p className="text-gray-300 leading-relaxed">
                If you believe you have been unfairly penalized, you may appeal the decision by contacting our leadership team within 30 days. Appeals will be reviewed by a different set of moderators to ensure fairness.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Scope</h2>
              <p className="text-gray-300 leading-relaxed">
                This Code of Conduct applies to all Waffle community spaces, including but not limited to Discord servers, events, hackathons, social media, and any other platforms where Waffle members interact in connection with the community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Acknowledgment</h2>
              <p className="text-gray-300 leading-relaxed">
                By participating in the Waffle community, you agree to abide by this Code of Conduct. We reserve the right to update this document as needed to better serve our community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                For questions about this Code of Conduct, reporting violations, or appeals, please contact us through our Discord server or reach out to our leadership team. You can also review our <Link href="/Terms" className="text-blue-400 hover:underline">Terms &amp; Conditions</Link> and <Link href="/Privacy" className="text-blue-400 hover:underline">Privacy Policy</Link> for additional information.
              </p>
            </section>
          </div>

          <div className="border-t border-black pt-8 mt-12">
            <p className="text-gray-400 text-sm">
              This Code of Conduct is effective as of {new Date().toLocaleDateString()} and applies to all members of the Build with Waffle community.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
