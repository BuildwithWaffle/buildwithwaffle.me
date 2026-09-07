import type { Metadata } from "next";

// The page in this route is a client component and so cannot export metadata;
// Next reads it from the route layout instead.
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real projects shipped by student builders in the Build with Waffle community — code, demos and the people behind them.",
  openGraph: {
    title: "Projects | Build with Waffle",
    description:
      "Real projects shipped by student builders in the Build with Waffle community — code, demos and the people behind them.",
    url: "/projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
