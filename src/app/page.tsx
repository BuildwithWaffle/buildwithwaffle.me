import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import RecentProjects from "@/components/RecentProjects";
import FinalSection from "@/components/FinalSection";

// SEO Metadata for home page
export const metadata: Metadata = {
  title: "Build with Waffle | India's First Student-Led Creator Movement",
  description: "Join 200+ student builders, hackers, designers, and creators at Build with Waffle. We're not a club - we're a call to action for misfits who ship real products.",
  keywords: [
    "build with waffle",
    "student community india",
    "creator movement",
    "young entrepreneurs",
    "student builders",
    "hackathon community",
    "college projects",
    "startup community india",
    "student developers",
    "tech community"
  ],
  openGraph: {
    title: "Build with Waffle | India's First Student-Led Creator Movement",
    description: "Join 200+ student builders, hackers, designers, and creators at Build with Waffle. We're not a club - we're a call to action for misfits who ship real products.",
    url: "https://buildwithwaffle.me",
    siteName: "Build with Waffle",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Build with Waffle - Home",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build with Waffle | India's First Student-Led Creator Movement",
    description: "Join 200+ student builders, hackers, designers, and creators at Build with Waffle. We're not a club - we're a call to action for misfits who ship real products.",
    images: ["/images/og-home.jpg"],
  },
  alternates: {
    canonical: "https://buildwithwaffle.me",
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Build with Waffle",
            description: "India's first student-led creator movement",
            url: "https://buildwithwaffle.me",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://buildwithwaffle.me/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            author: {
              "@type": "Organization",
              name: "Build with Waffle"
            }
          }),
        }}
      />

      {/* Main page sections */}
      <Hero />
      <About />
      <Events />
      <RecentProjects />
      <FinalSection />
    </>
  );
}