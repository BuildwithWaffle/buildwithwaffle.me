import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <main
        className="bg-black text-white min-h-screen">
      {/* Main Intro */}
      <Navbar />
     <section
        className="relative px-6 md:px-40 pt-32 pb-20 h-[1408px] bg-no-repeat bg-right-top"
        style={{
          backgroundImage: `url("/images/LandingBackground.png")`,
          backgroundSize: "auto 100%",
        }}
      >
        <p className="text-gray-400">by Students, for Everyone.</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-4">Hi, Build</h1>
        <h1 className="text-4xl md:text-6xl font-bold mt-4">with Waffle</h1>
        <p className="mt-4 max-w-xl text-sm md:text-base text-gray-300">
          We aren’t a club. we are a call to action.for the misfits, the quiet builders, the kids with half-finished dreams.thanks for giving this a shot.
        </p>
        <div className="mt-6 flex gap-4">
        <Link
          href="/join"
          className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition duration-200"
        >
          JOIN US
        </Link>
        <Link
          href="/later"
          className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition duration-200"
        >
          Later
        </Link>
      </div>

        <p className="mt-4 px-20 text-sm text-gray-400">200+ Students</p>
      </section>


      {/* Start a Chapter */}
      <section
  className="relative min-h-screen px-6 py-24 overflow-hidden -mt-100"
  style={{
    backgroundImage: 'url("/images/Startchapter.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

  {/* Content */}
  <div className="relative z-10 max-w-3xl ml-auto text-right pr-10">
    <h2 className="text-4xl md:text-5xl font-bold text-white">Start a Chapter</h2>
    <p className="italic text-sm mt-2 text-white">you're the main character</p>
    <div className="mt-4 max-w-md text-sm text-right ml-auto pr-2 leading-relaxed space-y-2">
      <p>You don’t need permission to start something unforgettable.</p>
      <p>Waffle chapters are run by students who got tired of waiting.</p>
      <p>Tired of boring fests. Tired of “innovation” that’s just filler.</p>
      <p>They wanted a space to actually build, share,</p>
      <p> and connect — so they created it.</p>
</div>
<Link
  href="/about"
  className="mt-8 inline-block text-white underline underline-offset-4 hover:text-gray-300 transition duration-200"
>
  Know more
</Link>

  </div>
</section>


      {/* Events Section */}
      <section className="bg-black text-white py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-zinc-900 rounded-xl p-4 border border-zinc-700">
              <div className="bg-orange-500 h-48 rounded-md mb-4"></div>
              <p className="text-sm">Sunday, April 12, 2025</p>
              <p className="text-xs text-gray-400">Location: Amity Lucknow | Time: 12PM–5PM</p>
              <p className="text-xs text-gray-400">Venue: Auditorium</p>
              <button className="mt-2 bg-orange-500 text-black px-4 py-1 rounded-full text-sm">
                {n % 2 === 0 ? "View Gallery" : "Register Now"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="bg-black text-white py-12 px-4">
        <h2 className="text-3xl font-bold mb-6">Recent Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-zinc-900 p-4 rounded-xl">
              <div className="bg-white h-32 rounded-md mb-3 overflow-hidden">
                {/* Replace with your <Image /> if using next/image */}
                <img src={`/images/project${n}.jpg`} alt="project" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-semibold mb-1">
                IoT & ML Based Diagnosis System
              </p>
              <p className="text-xs text-gray-400">Link: www.github.com/soumesh/IOT</p>
              <p className="text-xs mt-1">Made by - Soumesh Nanda</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 underline">Check Out More.</p>
      </section>
    </main>
  );
}
