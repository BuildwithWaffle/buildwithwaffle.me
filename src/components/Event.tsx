"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Event() {
  const heroRef = useRef(null);

  return (
    <section
      className="text-white py-14 px-4 relative z-0 overflow-hidden"
      id="events"
      ref={heroRef}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Events</h2>
      <div className="relative w-full">
        <Swiper
          className="!overflow-visible"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          {[
            {
              date: "Sunday, April 12, 2025",
              location: "Amity Lucknow",
              image: "/events/EventPic-1.jpg",
              time: "12PM–5PM",
              venue: "Auditorium",
              action: "Register Now",
              link: "#",
            },
            {
              date: "Monday, May 5, 2025",
              location: "IIT Kanpur",
              image: "/events/EventPic-2.jpg",
              time: "2PM–6PM",
              venue: "Main Hall",
              action: "View Gallery",
              link: "/waffleevents",
            },
            {
              date: "Wednesday, June 18, 2025",
              location: "BITS Pilani",
              image: "/events/EventPic-3.jpg",
              time: "11AM–4PM",
              venue: "Innovation Lab",
              action: "Register Now",
              link: "#",
            },
            {
              date: "Friday, July 7, 2025",
              location: "NIT Trichy",
              image: "/events/EventPic-4.jpg",
              time: "1PM–6PM",
              venue: "Auditorium",
              action: "View Gallery",
              link: "#",
            },
            {
              date: "Saturday, August 15, 2025",
              location: "IIT Delhi",
              image: "/events/EventPic-5.jpg",
              time: "10AM–3PM",
              venue: "Startup Hall",
              action: "Register Now",
              link: "#",
            },
            {
              date: "Sunday, September 10, 2025",
              location: "Amity Noida",
              image: "/events/EventPic-6.jpg",
              time: "12PM–5PM",
              venue: "Auditorium",
              action: "View Gallery",
              link: "#",
            },
          ].map((event, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-700 h-full hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out relative z-10">
                <img
                  src={event.image}
                  alt={`Event at ${event.location}`}
                  className="h-48 w-full object-contain rounded-md mb-4 bg-black"
                />
                <p className="text-sm">{event.date}</p>
                <p className="text-xs text-gray-400">
                  Location: {event.location} | Time: {event.time}
                </p>
                <p className="text-xs text-gray-400">Venue: {event.venue}</p>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  <button className="cursor-pointer hover:scale-110 hover:shadow-xl transition duration-300 mt-2 bg-orange-500 text-black px-4 py-1 rounded-full text-sm">
                    {event.action}
                  </button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
