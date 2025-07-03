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

    const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div id="about" className="relative overflow-hidden" ref={aboutRef}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />
            
            {/* Image Section in Container */}
            <div className="px-6 py-8">
                <motion.div
                    className="relative h-[50vh] max-w-5xl mx-auto overflow-hidden rounded-2xl"
                    style={{ y: imageY }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url("/images/Startchapter.png")`,
                        }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>
            </div>
            
            {/* Content Section */}
            <section className="relative z-30 px-6 py-12 bg-black">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    
                    {/* Title */}
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-4xl">🧇</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">About Waffle</h2>
                    </div>

                    {/* Brief Description */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                        We're not here to chase unicorns or polish pitch decks. We're here to build. 
                        <span className="text-white font-semibold"> Raw. Messy. Real.</span>
                    </p>

                    {/* Call to Action */}
                    <div className="space-y-4">
                        <p className="text-xl font-bold text-[#7736F8]">We're here to move.</p>

                        <Link
                            href="/AboutUs"
                            className="inline-flex items-center bg-[#7736F8] hover:bg-[#7736F8]/80 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
                        >
                            Learn More About Us
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}