import type { Metadata } from "next";

// The page in this route is a client component and so cannot export metadata;
// Next reads it from the route layout instead.
export const metadata: Metadata = {
  title: "Events",
  description:
    "Workshops, meetups and build sessions from Build with Waffle — hands-on events where students learn, build and ship together.",
  openGraph: {
    title: "Events | Build with Waffle",
    description:
      "Workshops, meetups and build sessions from Build with Waffle — hands-on events where students learn, build and ship together.",
    url: "/Events",
  },
  alternates: {
    canonical: "/Events",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
