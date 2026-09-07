import type { Metadata } from "next";

// The page in this route is a client component and so cannot export metadata;
// Next reads it from the route layout instead.
export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "Why Build with Waffle exists: a call to action for students who build before they feel ready, and ship in public.",
  openGraph: {
    title: "Philosophy | Build with Waffle",
    description:
      "Why Build with Waffle exists: a call to action for students who build before they feel ready, and ship in public.",
    url: "/Philosophy",
  },
  alternates: {
    canonical: "/Philosophy",
  },
};

export default function PhilosophyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
