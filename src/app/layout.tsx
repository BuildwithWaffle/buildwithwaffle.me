import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageWrapper from "@/components/PageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Optimized font loading with display swap
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Comprehensive SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://buildwithwaffle.me"),
  title: {
    default: "Build with Waffle | Student-Led Creator Movement",
    template: "%s | Build with Waffle",
  },
  description: "Join Build with Waffle - India's first student-led creator movement. A community for misfits, builders, hackers, designers, and dreamers who ship real products.",
  keywords: [
    "build with waffle",
    "student community",
    "creator movement",
    "builders",
    "hackers",
    "designers",
    "startup community",
    "india student community",
    "young entrepreneurs",
    "college projects",
    "student developers"
  ],
  authors: [{ name: "Build with Waffle Team", url: "https://buildwithwaffle.me" }],
  creator: "Build with Waffle",
  publisher: "Build with Waffle",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildwithwaffle.me",
    siteName: "Build with Waffle",
    title: "Build with Waffle | Student-Led Creator Movement",
    description: "Join Build with Waffle - India's first student-led creator movement. A community for misfits, builders, hackers, designers, and dreamers who ship real products.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Build with Waffle - Student Creator Movement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build with Waffle | Student-Led Creator Movement",
    description: "Join Build with Waffle - India's first student-led creator movement. A community for misfits, builders, hackers, designers, and dreamers who ship real products.",
    images: ["/images/og-image.jpg"],
    creator: "@buildwithwaffle",
    site: "@buildwithwaffle",
  },
  alternates: {
    canonical: "https://buildwithwaffle.me",
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
  category: "Education",
};

// Viewport configuration for performance
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7736F8" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/videos/bg_video.mp4" as="video" type="video/mp4" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//docs.google.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Build with Waffle",
              description: "India's first student-led creator movement",
              url: "https://buildwithwaffle.me",
              logo: "https://buildwithwaffle.me/images/logo.png",
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "Build with Waffle Team",
                }
              ],
              sameAs: [
                "https://twitter.com/buildwithwaffle",
                "https://linkedin.com/company/buildwithwaffle",
                "https://github.com/buildwithwaffle"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@buildwithwaffle.me",
                contactType: "Customer Service"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-black text-white overflow-x-hidden min-h-screen`}>
        {/* Skip to content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#7736F8] text-white px-4 py-2 rounded-md z-50 transition-all"
        >
          Skip to main content
        </a>
        
        {/* Optimized Background Layers */}
        <div className="fixed inset-0 pointer-events-none z-[-1]" aria-hidden="true">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          {/* Grid pattern for texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:50px_50px]"></div>
          {/* Purple accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7736F8]/5 to-transparent"></div>
        </div>
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <PageWrapper>
          <main id="main-content">
            {children}
          </main>
        </PageWrapper>
        
        {/* Footer */}
        <Footer />
        
        {/* Performance monitoring (add your analytics script here) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics or other analytics */}
            {/* <Script src="..." strategy="afterInteractive" /> */}
          </>
        )}
      </body>
    </html>
  );
}
