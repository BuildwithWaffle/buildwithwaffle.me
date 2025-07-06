'use client'

import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import eventsData from '../../data/events.json';

// SEO Metadata
// export const metadata: Metadata = {
//   title: "Events & Workshops | Build with Waffle",
//   description: "Join Build with Waffle events, workshops, and hackathons. Connect with 500+ student builders, learn from industry experts, and turn your ideas into reality.",
//   keywords: [
//     "build with waffle events",
//     "student workshops",
//     "hackathons",
//     "tech events",
//     "student community events",
//     "coding workshops",
//     "startup events",
//     "student meetups"
//   ],
//   authors: [{ name: "Build with Waffle Team" }],
//   openGraph: {
//     title: "Events & Workshops | Build with Waffle",
//     description: "Join Build with Waffle events, workshops, and hackathons. Connect with 500+ student builders, learn from industry experts, and turn your ideas into reality.",
//     url: "https://buildwithwaffle.me/Events",
//     siteName: "Build with Waffle",
//     images: [
//       {
//         url: "/images/og-events.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Build with Waffle Events",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Events & Workshops | Build with Waffle",
//     description: "Join Build with Waffle events, workshops, and hackathons. Connect with 500+ student builders, learn from industry experts, and turn your ideas into reality.",
//     images: ["/images/og-events.jpg"],
//   },
//   alternates: {
//     canonical: "https://buildwithwaffle.me/Events",
//   },
// };

export default function EventsPage() {
  const { upcomingEvent, pastEvents, eventStats } = eventsData;

  const formatDate = (dateString: string) => {
    if (dateString === 'TBD') return 'Date to be announced';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      {/* CSS Custom Properties for Primary Accent Color */}
      <style jsx global>{`
        :root {
          --primary-accent: #f97316; /* Orange-500 */
          --primary-accent-hover: #ea580c; /* Orange-600 */
          --primary-accent-pressed: #c2410c; /* Orange-700 */
          --primary-accent-light: #fed7aa; /* Orange-200 */
          --primary-accent-shadow: rgba(249, 115, 22, 0.4);
          --primary-accent-shadow-hover: rgba(249, 115, 22, 0.6);
        }
      `}</style>
      {/* JSON-LD Structured Data for Events */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Events & Workshops",
            description: "Build with Waffle events, workshops, and hackathons",
            url: "https://buildwithwaffle.me/Events",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              name: "Build with Waffle",
              url: "https://buildwithwaffle.me",
            },
            mainEntity: {
              "@type": "Event",
              name: upcomingEvent.title,
              description: upcomingEvent.description,
              startDate: upcomingEvent.date !== 'TBD' ? upcomingEvent.date : undefined,
              organizer: {
                "@type": "Organization",
                name: "Build with Waffle"
              }
            }
          }),
        }}
      />

      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[#FAFAFA] pointer-events-none z-0" 
           style={{
             backgroundImage: `radial-gradient(var(--primary-accent) 1px, transparent 1px)`,
             backgroundSize: '50px 50px',
             opacity: 0.1
           }} />
      
      <main className="relative z-10 min-h-screen py-20 px-6 text-gray-900 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <header className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-200 flex items-center gap-2"
                    style={{ 
                      boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                    }}>
                <span role="img" aria-label="celebration">🎉</span>
                Events & Workshops
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Build Together,{' '}
              <span className="bg-clip-text text-transparent"
                    style={{ 
                      backgroundImage: `linear-gradient(to right, var(--primary-accent), var(--primary-accent-hover))` 
                    }}>
                Learn Together
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Join our community events, workshops, and hackathons. Connect with fellow builders, 
              learn from industry experts, and turn your ideas into reality.
            </p>
            
            {/* Enhanced Event Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                   style={{ 
                     boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--primary-accent-shadow-hover), 0 4px 6px -2px var(--primary-accent-shadow-hover)`;
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)`;
                   }}>
                <div className="text-3xl font-bold bg-clip-text text-transparent"
                     style={{ 
                       backgroundImage: `linear-gradient(to right, var(--primary-accent), var(--primary-accent-hover))` 
                     }}>
                  {eventStats.totalEvents}
                </div>
                <div className="text-sm text-gray-600 font-medium">Events Hosted</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                   style={{ 
                     boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--primary-accent-shadow-hover), 0 4px 6px -2px var(--primary-accent-shadow-hover)`;
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)`;
                   }}>
                <div className="text-3xl font-bold bg-clip-text text-transparent"
                     style={{ 
                       backgroundImage: `linear-gradient(to right, var(--primary-accent), var(--primary-accent-hover))` 
                     }}>
                  {eventStats.totalAttendees}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Attendees</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                   style={{ 
                     boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--primary-accent-shadow-hover), 0 4px 6px -2px var(--primary-accent-shadow-hover)`;
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)`;
                   }}>
                <div className="text-3xl font-bold bg-clip-text text-transparent"
                     style={{ 
                       backgroundImage: `linear-gradient(to right, var(--primary-accent), var(--primary-accent-hover))` 
                     }}>
                  {eventStats.upcomingEvents}
                </div>
                <div className="text-sm text-gray-600 font-medium">Upcoming</div>
              </div>
            </div>
          </header>

        {/* Upcoming Event Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">🔥 Next Event</h2>
            <span className="px-3 py-1 text-white rounded-full text-sm font-semibold animate-pulse"
                  style={{ 
                    backgroundColor: `var(--primary-accent)`,
                    boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                  }}>
              Registration Open
            </span>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200"
               style={{ 
                 boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
               }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Event Image */}
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                <Image
                  src={upcomingEvent.image}
                  alt={upcomingEvent.title}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Event Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{upcomingEvent.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{upcomingEvent.description}</p>
                </div>
                
                {/* Event Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span style={{ color: `var(--primary-accent)` }}>📅</span>
                    <span className="text-gray-600">
                      {formatDate(upcomingEvent.date)}
                      {upcomingEvent.time !== "TBD" && ` at ${upcomingEvent.time}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span style={{ color: `var(--primary-accent)` }}>📍</span>
                    <span className="text-gray-600">{upcomingEvent.location}</span>
                    {upcomingEvent.isVirtual && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">Virtual</span>
                    )}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {upcomingEvent.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Speakers */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm text-gray-900">Featured Speakers:</h4>
                  <div className="flex gap-4">
                    {upcomingEvent.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-gray-900">{speaker.name}</div>
                          <div className="text-xs text-gray-600">{speaker.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Register Button */}
                <div className="pt-4">
                  <a
                    href={upcomingEvent.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                    style={{ 
                      backgroundColor: `var(--primary-accent)`,
                      boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `var(--primary-accent-hover)`;
                      e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--primary-accent-shadow-hover), 0 4px 6px -2px var(--primary-accent-shadow-hover)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `var(--primary-accent)`;
                      e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)`;
                    }}>
                    Register Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📚 Past Events</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                   style={{ 
                     boxShadow: `0 10px 25px -5px rgba(249, 115, 22, 0.1), 0 4px 6px -2px rgba(249, 115, 22, 0.1)` 
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)`;
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.boxShadow = `0 10px 25px -5px rgba(249, 115, 22, 0.1), 0 4px 6px -2px rgba(249, 115, 22, 0.1)`;
                   }}>
                {/* Event Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Event Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-600">{formatDate(event.date)}</span>
                    {event.isVirtual && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">Virtual</span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 transition-colors group-hover:text-[var(--primary-accent)]">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Attendees and View Images Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      👥 {event.attendees} attendees
                    </span>
                    {event.galleryLink && (
                      <a
                        href={event.galleryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium transition-colors cursor-pointer"
                        style={{ color: `var(--primary-accent)` }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = `var(--primary-accent-hover)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = `var(--primary-accent)`;
                        }}>
                        View Images →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-gray-200"
               style={{ 
                 boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
               }}>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Join Our Community?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't miss out on upcoming events, workshops, and opportunities to connect with fellow builders. 
              Subscribe to our newsletter and be the first to know about new events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/PostYourProject"
                className="px-6 py-3 text-white rounded-lg font-semibold transition-all duration-200"
                style={{ 
                  backgroundColor: `var(--primary-accent)`,
                  boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `var(--primary-accent-hover)`;
                  e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--primary-accent-shadow-hover), 0 4px 6px -2px var(--primary-accent-shadow-hover)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = `var(--primary-accent)`;
                  e.currentTarget.style.boxShadow = `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)`;
                }}>
                Submit Your Project
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg border border-gray-200 transition-colors"
              >
                Start a Chapter
              </a>
            </div>
          </div>
        </section>
        </div>
      </main>
    </>
  );
}