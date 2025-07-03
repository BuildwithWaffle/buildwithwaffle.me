"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Event from "@/components/Event";
import RecentProjects from "@/components/RecentProjects";
import FinalSection from "@/components/FinalSection";

export default function Home() {
  return (
    <main className="text-white">
      <Hero />
      <About />
      <Event />
      <RecentProjects />
      <FinalSection />
    </main>
  );
}