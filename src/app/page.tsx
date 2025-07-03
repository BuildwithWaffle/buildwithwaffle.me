"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Event from "@/components/Event";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <About />
      <Event />
      <RecentProjects />
    </main>
  );
}