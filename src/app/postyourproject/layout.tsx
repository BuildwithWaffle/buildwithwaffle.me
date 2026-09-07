import type { Metadata } from "next";

// The page in this route is a client component and so cannot export metadata;
// Next reads it from the route layout instead.
export const metadata: Metadata = {
  title: "Post Your Project",
  description:
    "Share what you've built with the Build with Waffle community and get your project featured.",
  openGraph: {
    title: "Post Your Project | Build with Waffle",
    description:
      "Share what you've built with the Build with Waffle community and get your project featured.",
    url: "/postyourproject",
  },
  alternates: {
    canonical: "/postyourproject",
  },
};

export default function PostyourprojectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
