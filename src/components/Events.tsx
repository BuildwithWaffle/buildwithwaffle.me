"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Next <span style={{ color: `var(--primary-accent)` }}>Event</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Join us for hands-on workshops, networking, and collaborative building. 
            These aren't just talks — they're real opportunities to build, learn, and connect.
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-16">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                 style={{ 
                   backgroundColor: `var(--background-secondary)`,
                   borderColor: `var(--border)`
                 }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                {/* Event Image */}
                <div className="order-2 lg:order-1">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 border-2"
                       style={{ borderColor: `var(--border)` }}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={600}
                      height={338}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="order-1 lg:order-2 space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                  
                  {/* Event Info */}
                  <div className="space-y-2 bg-gray-50 p-4 rounded-xl border"
                       style={{ 
                         backgroundColor: `var(--background-secondary)`,
                         borderColor: `var(--border)`
                       }}>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      </div>
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                  
                  {/* Register Button */}
                  <div className="pt-2">
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: `var(--primary-accent)`,
                        boxShadow: `0 6px 16px var(--primary-accent-shadow)` 
                      }}
                    >
                      {event.action}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Events Button */}
        <div className="text-center">
          <Link href="/Events">
            <button className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: `var(--primary-accent)`,
                      boxShadow: `0 6px 16px var(--primary-accent-shadow)` 
                    }}>
              View More Events
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
