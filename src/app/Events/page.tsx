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
      <div className="fixed inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:50px_50px] pointer-events-none z-0" />
      
      <main className="relative z-10 min-h-screen py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <header className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-700/30 flex items-center gap-2">
                <span role="img" aria-label="celebration">🎉</span>
                Events & Workshops
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Build Together,{' '}
              <span className="bg-gradient-to-r from-[#7736F8] to-[#9333EA] bg-clip-text text-transparent">
                Learn Together
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Join our community events, workshops, and hackathons. Connect with fellow builders, 
              learn from industry experts, and turn your ideas into reality.
            </p>
            
            {/* Enhanced Event Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-[#7736F8]/30 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#7736F8] to-[#9333EA] bg-clip-text text-transparent">
                  {eventStats.totalEvents}
                </div>
                <div className="text-sm text-gray-400 font-medium">Events Hosted</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-[#7736F8]/30 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#7736F8] to-[#9333EA] bg-clip-text text-transparent">
                  {eventStats.totalAttendees}+
                </div>
                <div className="text-sm text-gray-400 font-medium">Attendees</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-[#7736F8]/30 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#7736F8] to-[#9333EA] bg-clip-text text-transparent">
                  {eventStats.upcomingEvents}
                </div>
                <div className="text-sm text-gray-400 font-medium">Upcoming</div>
              </div>
            </div>
          </header>

        {/* Upcoming Event Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold">🔥 Next Event</h2>
            <span className="px-3 py-1 bg-[#7736F8] rounded-full text-sm font-semibold animate-pulse">
              Registration Open
            </span>
          </div>
          
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Event Image */}
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-800/50">
                <Image
                  src={upcomingEvent.image}
                  alt={upcomingEvent.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Event Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">{upcomingEvent.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{upcomingEvent.description}</p>
                </div>
                
                {/* Event Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#7736F8]">📅</span>
                    <span>
                      {formatDate(upcomingEvent.date)}
                      {upcomingEvent.time !== "TBD" && ` at ${upcomingEvent.time}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#7736F8]">📍</span>
                    <span>{upcomingEvent.location}</span>
                    {upcomingEvent.isVirtual && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Virtual</span>
                    )}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {upcomingEvent.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800/60 backdrop-blur-sm rounded-full text-xs border border-gray-700/30">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Speakers */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Featured Speakers:</h4>
                  <div className="flex gap-4">
                    {upcomingEvent.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{speaker.name}</div>
                          <div className="text-xs text-gray-400">{speaker.role}</div>
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
                    className="inline-flex items-center gap-2 bg-[#7736F8] hover:bg-[#7736F8]/80 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
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
            <h2 className="text-3xl font-bold">📚 Past Events</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/20 hover:border-gray-600/40 transition-colors group">
                {/* Event Image */}
                <div className="aspect-video bg-gray-800/40 overflow-hidden">
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
                    <span className="text-sm text-gray-400">{formatDate(event.date)}</span>
                    {event.isVirtual && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Virtual</span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-[#7736F8] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Attendees and View Images Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      👥 {event.attendees} attendees
                    </span>
                    <span className="text-[#7736F8] hover:text-[#9333EA] text-sm font-medium transition-colors cursor-pointer">
                      View Images →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Don't miss out on upcoming events, workshops, and opportunities to connect with fellow builders. 
              Subscribe to our newsletter and be the first to know about new events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/PostYourProject"
                className="px-6 py-3 bg-[#7736F8] hover:bg-[#7736F8]/80 rounded-lg font-semibold transition-colors"
              >
                Submit Your Project
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-gray-800/50 hover:bg-gray-700/60 backdrop-blur-sm rounded-lg border border-gray-700/30 transition-colors"
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