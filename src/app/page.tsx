"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
export default function Home() {
  return (
    <main
        className="bg-black text-white min-h-screen pt-32">
      {/* Main Intro */}
      <Navbar />
     <section id="home"
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


      {/* About  Section*/}
      <section id="about"
  className="relative min-h-screen px-6 py-24 overflow-hidden -mt-100"
  style={{
    backgroundImage: 'url("/images/Startchapter.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="relative z-10 max-w-3xl ml-auto text-right pr-10">
    <h2 className="text-4xl md:text-5xl font-bold text-white">About Waffel</h2>
    <p className="italic text-sm mt-2 text-white">ou're the main character</p>
    <div className="mt-4 max-w-md text-sm text-right ml-auto pr-2 leading-relaxed space-y-2">
      <p>Ever felt like you didn’t belong?</p>
      <p>We did too. Like you had ideas, but no place to start? That’s why we’re building this. Not a tech cult. Not a startup grindset. Just a space to build whatever the hell you want. Day zero begins July.</p>
      <p>🧇#wafflespace</p>
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
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        autoplay={{ delay: 2200, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <SwiperSlide key={n}>
            <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-700 h-full">
              <div className="bg-orange-500 h-48 rounded-md mb-4"></div>
              <p className="text-sm">Sunday, April {n}, 2025</p>
              <p className="text-xs text-gray-400">Location: Amity Lucknow | Time: 12PM–5PM</p>
              <p className="text-xs text-gray-400">Venue: Auditorium</p>
              <button className="mt-2 bg-orange-500 text-black px-4 py-1 rounded-full text-sm">
                {n % 2 === 0 ? "View Gallery" : "Register Now"}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </section>


      {/* Recent Projects Section */}
      
      <section className="bg-black text-white py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Recent Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              image: "/images/project1.jpg",
              title: "IoT & ML Diagnosis System",
              maker: "Soumesh Nanda",
              description: "Smart health system using IoT & ML for diagnosis and urgency-based classification.",
              github: "https://github.com/soumesh/IOT"
            },
            {
              image: "/images/project2.jpg",
              title: "AI Code Generator",
              maker: "Animesh Pandey",
              description: "A tool to convert prompts into frontend code using AI models.",
              github: "https://github.com/animesh/codegen"
            },
            {
              image: "/images/project3.jpg",
              title: "Crypto Tracker",
              maker: "Aarambh Vaish",
              description: "Track live crypto prices and market trends in real-time.",
              github: "https://github.com/aarambh/crypto-tracker"
            },
            {
              image: "/images/project4.jpg",
              title: "Personal Finance App",
              maker: "Madhav Mishra",
              description: "Expense tracking and savings management tool for students.",
              github: "https://github.com/Mishramadhav/finapp"
            },
            {
              image: "/images/project5.jpg",
              title: "Waffle Chapter Portal",
              maker: "Team Waffle",
              description: "Manage student chapters, events, and members with ease.",
              github: "https://github.com/waffle/chapter-portal"
            },
            {
              image: "/images/project6.jpg",
              title: "Climate Visualizer",
              maker: "Amritansh Mishra",
              description: "Globe-based visualizer for global temperature changes.",
              github: "https://github.com/amritansh/climate-viz"
            }
          ].map((project, index) => (
            <div key={index} className="flip-card w-full h-64">
              <div className="flip-card-inner w-full h-full">
                {/* Front */}
                <div className="flip-card-front bg-zinc-900 p-4 rounded-xl flex flex-col items-center justify-center">
                  <div className="w-full h-32 mb-3 overflow-hidden rounded-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-semibold mb-1 text-center">{project.title}</p>
                  <p className="text-xs text-gray-400">Made by - {project.maker}</p>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-zinc-800 p-4 rounded-xl flex flex-col justify-center items-center text-center">
                  <p className="text-sm mb-2">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 text-xs underline mb-2"
                  >
                    {project.github}
                  </a>
                  <p className="text-xs">Made by - {project.maker}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
            href="/projects"
            className="text-center block mt-6 underline cursor-pointer transition duration-200">
            Check Out More.
        </Link>
      </section>
    </main>
  );
}