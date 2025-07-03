"use client";

import Image from "next/image";

type ChapterProps = {
    name: string;
    leader: string;
    pastEvents: string[];
    upcomingEvent: { name: string; link: string };
    projects: string[];
    logo: string; // Path to logo image
    eventImages: string[]; // Paths to event images
};

export default function ChapterCard({
    name,
    leader,
    pastEvents,
    upcomingEvent,
    projects,
    logo,
    eventImages,
}: ChapterProps) {
    return (
        <div className="bg-black border border-white rounded-2xl p-6 text-white mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                {/* Chapter Info */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-sm">👤 <span className="font-medium">Leader:</span> {leader}</p>
                    <p className="text-sm">
                        🕑 <span className="font-medium">Past Events:</span> {pastEvents.join(", ")}
                    </p>
                    <p className="text-sm">
                        🚀 <span className="font-medium">Upcoming:</span>{" "}
                        <a
                            href={upcomingEvent.link}
                            className="text-blue-400 underline hover:text-blue-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {upcomingEvent.name}
                        </a>
                    </p>
                    <p className="text-sm">
                        🧩 <span className="font-medium">Projects:</span> {projects.join(", ")}
                    </p>
                </div>

                {/* College Logo */}
                <div className="w-24 h-24 shrink-0">
                    {logo.trim() ? (
                        <Image
                            src={logo}
                            alt={`${name} logo`}
                            width={96}
                            height={96}
                            className="object-contain rounded-xl"
                        />
                    ) : (
                        <div className="w-full h-full bg-black flex items-center justify-center text-gray-400 text-xs rounded-xl">
                            College Logo
                        </div>
                    )}
                </div>
            </div>

            {/* Event Images */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {eventImages.map((src, i) => (
                    <div
                        key={i}
                        className="w-full h-32 bg-black rounded-xl flex items-center justify-center text-gray-400 text-sm relative overflow-hidden transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl"
                    >
                        {src.trim() ? (
                            <Image
                                src={src}
                                alt={`Event ${i + 1}`}
                                fill
                                className="object-cover rounded-xl"
                            />
                        ) : (
                            `Event Image ${i + 1}`
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
