"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Event from "@/components/Event";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const aboutOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Event />
      <RecentProjects />
    </main>
  );
}