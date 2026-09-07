import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import PageWrapper from "@/components/PageWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_CONFIG } from "@/config";
import { THEME_INIT_SCRIPT } from "@/lib/theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display face for headings; body copy stays on Inter.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: "Build with Waffle Team" }],
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
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Build with Waffle | Student-Led Creator Movement",
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Build with Waffle | Student-Led Creator Movement",
    description: SITE_CONFIG.description,
    creator: "@buildwithwaffle",
    site: "@buildwithwaffle",
  },
  alternates: {
    canonical: "/",
  },
  category: "Education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Zoom must not be capped; capping it fails WCAG 1.4.4.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline theme script sets data-theme on this
    // element before React hydrates, so the server and client markup differ here
    // by design.
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Runs before first paint to avoid a light-theme flash for dark users.
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <link rel="dns-prefetch" href="//docs.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_CONFIG.name,
              description: "India's first student-led creator movement",
              url: SITE_CONFIG.url,
              foundingDate: "2024",
              sameAs: [
                "https://x.com/Buildwithwaffle",
                "https://linkedin.com/company/buildwithwaffle",
                "https://github.com/buildwithwaffle",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: SITE_CONFIG.email,
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body
        className="min-h-screen overflow-x-hidden bg-surface text-ink antialiased"
      >
        <a
          href="#main-content"
          className="sr-only rounded-full bg-brand px-4 py-2 text-brand-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to main content
        </a>

        {/* Page-wide backdrop. Theme-aware, and hidden from assistive tech. */}
        <div
          className="pointer-events-none fixed inset-0 z-[-1] bg-surface"
          aria-hidden="true"
        >
          <div className="dot-grid absolute inset-0 text-accent opacity-[0.07]" />
          <div className="absolute inset-x-0 top-0 h-[45rem] bg-[radial-gradient(60rem_28rem_at_50%_-8rem,var(--brand-glow),transparent_70%)]" />
        </div>

        <Navbar />

        <PageWrapper>
          <main id="main-content">{children}</main>
        </PageWrapper>

        <Footer />
      </body>
    </html>
  );
}
