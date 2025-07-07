'use client'

import React from 'react';
import Image from 'next/image';
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
      <style 
        dangerouslySetInnerHTML={{
          __html: `:root {
            --primary-accent: #f97316;
            --primary-accent-hover: #ea580c;
            --primary-accent-pressed: #c2410c;
            --primary-accent-light: #fed7aa;
            --primary-accent-shadow: rgba(249, 115, 22, 0.4);
            --primary-accent-shadow-hover: rgba(249, 115, 22, 0.6);
          }`
        }}
      />
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
          <header className="text-center mt-12 mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-200 flex items-center gap-2"
                    style={{ 
                      boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                    }}>
                <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
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
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8z"/>
              </svg>
              Next Event
            </h2>
            <span className="px-3 py-1 text-white rounded-full text-sm font-semibold animate-pulse"
                  style={{ 
                    backgroundColor: `var(--primary-accent)`,
                    boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                  }}>
              Registration Open
            </span>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
               style={{ 
                 boxShadow: `0 20px 40px -10px var(--primary-accent-shadow), 0 8px 16px -4px var(--primary-accent-shadow)` 
               }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Event Image */}
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200">
                <Image
                  src={upcomingEvent.image}
                  alt={upcomingEvent.title}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                         style={{ backgroundColor: 'var(--primary-accent-light)' }}>
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">
                      {formatDate(upcomingEvent.date)}
                      {upcomingEvent.time !== "TBD" && ` at ${upcomingEvent.time}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                         style={{ backgroundColor: 'var(--primary-accent-light)' }}>
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{upcomingEvent.location}</span>
                    {upcomingEvent.isVirtual && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">Virtual</span>
                    )}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {upcomingEvent.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs text-orange-700 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Speakers */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm text-gray-900 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                         style={{ backgroundColor: 'var(--primary-accent-light)' }}>
                      <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    Featured Speakers:
                  </h4>
                  <div className="flex gap-4">
                    {upcomingEvent.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
                          {speaker.name === "Build with Waffle Team" ? (
                            <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                                 style={{
                                   background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                                 }}>
                              W
                            </div>
                          ) : (
                            <Image
                              src={speaker.image}
                              alt={speaker.name}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          )}
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
                    className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 transform"
                    style={{ 
                      backgroundColor: 'var(--primary-accent)',
                      boxShadow: `0 10px 25px -5px var(--primary-accent-shadow), 0 4px 6px -2px var(--primary-accent-shadow)` 
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-accent-hover)';
                      e.currentTarget.style.boxShadow = `0 15px 35px -5px var(--primary-accent-shadow-hover), 0 6px 10px -2px var(--primary-accent-shadow-hover)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
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
        </div>

        {/* Past Events Section - Full Width Orange */}
        <section className="mb-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 py-12" 
                 style={{ 
                   background: `linear-gradient(135deg, var(--primary-accent), var(--primary-accent-hover))`,
                   boxShadow: `0 20px 40px -10px var(--primary-accent-shadow), 0 8px 16px -4px var(--primary-accent-shadow)` 
                 }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Past Events
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-300 group"
                     style={{ 
                       boxShadow: `0 10px 25px -5px rgba(255, 255, 255, 0.2), 0 4px 6px -2px rgba(255, 255, 255, 0.2)` 
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.boxShadow = `0 20px 40px -10px rgba(255, 255, 255, 0.3), 0 8px 16px -4px rgba(255, 255, 255, 0.3)`;
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.boxShadow = `0 10px 25px -5px rgba(255, 255, 255, 0.2), 0 4px 6px -2px rgba(255, 255, 255, 0.2)`;
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
                  <div className="p-6 text-gray-900">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm text-gray-600">{formatDate(event.date)}</span>
                      {event.isVirtual && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">Virtual</span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 transition-colors group-hover:text-orange-600">
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
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {event.attendees} attendees
                      </span>
                      {event.galleryLink && (
                        <a
                          href={event.galleryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors cursor-pointer flex items-center gap-1">
                          View Images
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto">
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
               Become a Waffle Builder
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