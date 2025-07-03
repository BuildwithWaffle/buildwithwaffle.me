"use client";
import { useRef } from "react";
import Link from "next/link";

export default function Event() {
  const heroRef = useRef(null);

  // Only the single upcoming event from events.json
  const upcomingEvents = [
    {
      date: "Date to be announced",
      location: "Amity University Lucknow, Uttar Pradesh",
      image: "/events/EventPic-1.jpg",
      time: "TBD",
      venue: "Campus",
      action: "Register Now",
      link: "#",
      title: "Build with Waffle: Student Innovation Workshop",
      description: "Join us for an exciting workshop focused on student innovation and project building. Learn from industry experts, connect with fellow builders, and bring your ideas to life.",
    },
  ];

  return (
    <section
      className="text-white py-14 px-4 relative z-0 overflow-hidden"
      id="events"
      ref={heroRef}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">🔥 Next Event</h2>
      <div className="relative w-full max-w-4xl mx-auto">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-gray-600/40 transition-all duration-300 ease-in-out relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Event Image */}
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-800/50">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Event Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{event.description}</p>
                </div>
                
                {/* Event Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#7736F8]">📅</span>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#7736F8]">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                
                {/* Register Button */}
                <div className="pt-4">
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#7736F8] hover:bg-[#7736F8]/80 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    {event.action}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Check out more events button */}
      <div className="text-center mt-8">
        <Link href="/Events">
          <button className="bg-gradient-to-r from-[#7736F8] to-[#9333EA] hover:from-[#9333EA] hover:to-[#7736F8] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Check out more events →
          </button>
        </Link>
      </div>
    </section>
  );
}
