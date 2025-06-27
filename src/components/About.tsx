"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function About() {
    const aboutRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: ["start end", "end start"],
    });

    const aboutOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div id="about" className="relative min-h-screen overflow-hidden" ref={aboutRef}>
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url("/images/Startchapter.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: aboutOpacity,
                }}
            />
            <div className="absolute inset-0 bg-black/20 z-10" />
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />
            <section className="relative z-30 px-6 py-24 min-h-screen flex items-center">
                <div className="max-w-3xl ml-auto text-right pr-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">About waffle</h2>
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
                    <Link
                        href="/about"
                        className="mt-8 inline-block text-white underline underline-offset-4 hover:text-gray-300 transition duration-200"
                    >
                        Know more
                    </Link>
                </div>
            </section>
        </div>
    );
}