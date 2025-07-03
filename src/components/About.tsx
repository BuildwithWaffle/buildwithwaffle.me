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
        <div id="about" className="relative min-h-screen overflow-hidden bg-black" ref={aboutRef}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />
            
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 z-5"
                style={{
                    backgroundImage: `url("/images/Startchapter.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: aboutOpacity,
                }}
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            
            <section className="relative z-30 px-6 py-24 min-h-screen flex items-center">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side - Main Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl">🧇</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-white">About Waffle</h2>
                            </div>
                            <p className="text-xl text-gray-300 font-medium">
                                Waffle isn't a startup club. It's a spark.
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-300">
                            <p className="text-lg leading-relaxed">
                                We're not here to chase unicorns or polish pitch decks. We're here to build. <span className="text-white font-semibold">Raw. Messy. Real.</span>
                            </p>
                            
                            <p className="leading-relaxed">
                                Build with Waffle is India's first student-led creator movement — a launchpad for misfits, hackers, designers, writers, filmmakers, and anyone who's ever felt like they didn't fit the mold.
                            </p>
                            
                            <p className="leading-relaxed">
                                Whether you're shipping your first webpage or recording your first lo-fi beat in a dorm room — <span className="text-[#7736F8] font-medium">this is your place.</span>
                            </p>
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center bg-[#7736F8] hover:bg-[#7736F8]/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
                        >
                            Know more
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Side - Key Points */}
                    <div className="space-y-8">
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                            <h3 className="text-xl font-semibold text-white mb-6">What Makes Us Different</h3>
                            <div className="space-y-4">
                                <p className="text-gray-300 leading-relaxed">
                                    We're tired of "innovation" that starts with suits and ends with swag bags.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Waffle is different. <span className="text-[#7736F8] font-medium">No applications. No gatekeepers.</span> Just people who give a damn.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                            <h3 className="text-xl font-semibold text-white mb-6">What We Do</h3>
                            <div className="space-y-3 text-gray-300">
                                <p>• We host build nights</p>
                                <p>• Jam on dumb ideas</p>
                                <p>• Turn unfinished notes into real projects</p>
                                <p>• We don't wait for permission. We just show up — together.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#7736F8]/10 to-transparent rounded-2xl p-8 border border-[#7736F8]/20">
                            <h3 className="text-xl font-semibold text-white mb-6">Waffle is for you if:</h3>
                            <div className="space-y-3 text-gray-300">
                                <p>• You've got an idea but don't know where to start</p>
                                <p>• You've never "belonged" in tech clubs or smart chats</p>
                                <p>• You're tired of being talked over and just want to build</p>
                                <p>• You believe creativity isn't about being perfect — it's about being honest</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-2xl font-bold text-white mb-2">We're not here to go viral.</p>
                            <p className="text-2xl font-bold text-[#7736F8]">We're here to move.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}