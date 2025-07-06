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
      className="text-gray-900 py-16 px-6 bg-white"
      id="events"
      ref={heroRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">🔥 Next Event</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Join us for hands-on workshops, networking, and collaborative building. 
            These aren't just talks — they're real opportunities to build, learn, and connect.
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-white px-4 py-2 rounded-full text-lg font-semibold"
                  style={{ 
                    backgroundColor: `var(--primary-accent)`,
                    boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                  }}>
              🎯 Upcoming Event
            </span>
            <span className="text-gray-500">Don't miss out</span>
          </div>

          {upcomingEvents.map((event, index) => (
            <div key={index} className="rounded-3xl p-8 border border-gray-200 shadow-lg bg-white"
                 style={{ 
                   backgroundColor: `var(--primary-accent-light)`,
                   borderColor: `var(--primary-accent)`,
                   borderWidth: '2px'
                 }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Event Image */}
                <div className="order-2 lg:order-1">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-6">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{event.description}</p>
                  </div>
                  
                  {/* Event Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="text-2xl">📅</span>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="text-2xl">📍</span>
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                  
                  {/* Register Button */}
                  <div className="pt-4">
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{ 
                        backgroundColor: `var(--primary-accent)`,
                        boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                      }}
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
        <div className="text-center">
          <Link href="/Events">
            <button className="text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, var(--primary-accent) 0%, var(--secondary-accent) 100%)`,
                      boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                    }}>
              Check out more events →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
