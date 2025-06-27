"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
    const aboutOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const projects = [
    {
      image: "/images/project1.jpg",
      title: "IoT & ML Diagnosis System",
      maker: "Soumesh Nanda",
      description: "Smart health system using IoT & ML for diagnosis and urgency-based classification.",
      github: "https://github.com/soumesh/IOT",
    },
    {
      image: "/images/project2.jpg",
      title: "AI Code Generator",
      maker: "Animesh Pandey",
      description: "A tool to convert prompts into frontend code using AI models.",
      github: "https://github.com/animesh/codegen",
    },
    {
      image: "/images/project3.jpg",
      title: "Crypto Tracker",
      maker: "Aarambh Vaish",
      description: "Track live crypto prices and market trends in real-time.",
      github: "https://github.com/aarambh/crypto-tracker",
    },
    {
      image: "/images/project4.jpg",
      title: "Personal Finance App",
      maker: "Madhav Mishra",
      description: "Expense tracking and savings management tool for students.",
      github: "https://github.com/Mishramadhav/finapp",
    },
    {
      image: "/images/project5.jpg",
      title: "Waffle Chapter Portal",
      maker: "Team Waffle",
      description: "Manage student chapters, events, and members with ease.",
      github: "https://github.com/waffle/chapter-portal",
    },
    {
      image: "/images/project6.jpg",
      title: "Climate Visualizer",
      maker: "Amritansh Mishra",
      description: "Globe-based visualizer for global temperature changes.",
      github: "https://github.com/amritansh/climate-viz",
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-4" ref={heroRef}>
      <h2 className="text-3xl font-bold mb-6 text-center">Recent Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
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
        className="text-center block mt-6 underline cursor-pointer transition duration-200"
      >
        Check Out More.
      </Link>
    </section>
  );
}
