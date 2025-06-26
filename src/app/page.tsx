"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="bg-black text-white">
      <Navbar />
      {/* HERO SECTION */}
      <div id="home" ref={heroRef} className="relative min-h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0 bg-no-repeat bg-right-top"
          style={{
            backgroundImage: `url("/images/LandingBackground.png")`,
            backgroundSize: "auto 1408px",
            opacity: heroOpacity,
          }}
        />
        <section className="relative z-10 px-6 md:px-40 pt-32 pb-16 min-h-screen flex flex-col justify-center">
          <p className="text-gray-400">by Students, for Everyone.</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">Hi, Build</h1>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">with Waffle</h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-gray-300">
            We aren’t a club. We are a call to action. For the misfits, the quiet
            builders, the kids with half-finished dreams. Thanks for giving this a shot.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/join" className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition duration-200">JOIN US</Link>
            <Link href="/later" className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition duration-200">Letter</Link>
          </div>
          <p className="mt-4 px-20 text-sm text-gray-400">200+ Students</p>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
        </section>
      </div>

      {/* ABOUT SECTION */}
      <div id="about" className="relative min-h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("/images/Startchapter.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: aboutOpacity,
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />
        <section className="relative z-30 px-6 py-24 min-h-screen flex items-center">
          <div className="max-w-3xl ml-auto text-right pr-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">About Waffel</h2>
            <p className="italic text-sm mt-2 text-white">You're the main character</p>
            <div className="mt-4 max-w-md text-sm text-right ml-auto pr-2 leading-relaxed space-y-2 text-white">
              <p>Ever felt like you didn’t belong?</p>
              <p>
                We did too. Like you had ideas, but no place to start? That’s why we’re building this.
                Not a tech cult. Not a startup grindset. Just a space to build whatever the hell you want.
                Day zero begins July.
              </p>
              <p>🧇#wafflespace</p>
            </div>
            <Link href="/about" className="mt-8 inline-block text-white underline underline-offset-4 hover:text-gray-300 transition duration-200">Know more</Link>
          </div>
        </section>
      </div>
      
{/* Events Section */}
<section className="bg-black text-white py-12 px-4">
  <h2 className="text-3xl font-bold mb-6 text-center">Events</h2>

  <Swiper
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    loop={true}
    modules={[Autoplay]}
  >
    {[
      {
        date: "Sunday, April 12, 2025",
        location: "Amity Lucknow",
        time: "12PM–5PM",
        venue: "Auditorium",
        action: "Register Now",
      },
      {
        date: "Monday, May 5, 2025",
        location: "IIT Kanpur",
        time: "2PM–6PM",
        venue: "Main Hall",
        action: "View Gallery",
      },
      {
        date: "Wednesday, June 18, 2025",
        location: "BITS Pilani",
        time: "11AM–4PM",
        venue: "Innovation Lab",
        action: "Register Now",
      },
      {
        date: "Friday, July 7, 2025",
        location: "NIT Trichy",
        time: "1PM–6PM",
        venue: "Auditorium",
        action: "View Gallery",
      },
      {
        date: "Saturday, August 15, 2025",
        location: "IIT Delhi",
        time: "10AM–3PM",
        venue: "Startup Hall",
        action: "Register Now",
      },
      {
        date: "Sunday, September 10, 2025",
        location: "Amity Noida",
        time: "12PM–5PM",
        venue: "Auditorium",
        action: "View Gallery",
      },
    ].map((event, index) => (
      <SwiperSlide key={index}>
        <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-700 h-full">
          <div className="bg-orange-500 h-48 rounded-md mb-4"></div>
          <p className="text-sm">{event.date}</p>
          <p className="text-xs text-gray-400">
            Location: {event.location} | Time: {event.time}
          </p>
          <p className="text-xs text-gray-400">Venue: {event.venue}</p>
          <button className="mt-2 bg-orange-500 text-black px-4 py-1 rounded-full text-sm">
            {event.action}
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