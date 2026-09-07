import type { Metadata } from "next";

// The page in this route is a client component and so cannot export metadata;
// Next reads it from the route layout instead.
export const metadata: Metadata = {
  title: "A Letter to Builders",
  description:
    "An open letter from Build with Waffle to the students who are done waiting for permission.",
  openGraph: {
    title: "A Letter to Builders | Build with Waffle",
    description:
      "An open letter from Build with Waffle to the students who are done waiting for permission.",
    url: "/letter",
  },
  alternates: {
    canonical: "/letter",
  },
};

export default function LetterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
