import ChapterCard from "@/components/ChapterCards";

export default function WaffleEventsPage() {
  const chapterData = [
    {
      name: "Amity Lucknow Chapter",
      leader: "Amritansh Mishra",
      pastEvents: ["Git and GitHub", "Javascript Juggernaut"],
      upcomingEvent: {
        name: "Build Fast 2.0 | July 28",
        link: "#", // Change to actual event link
      },
      projects: ["Project 1", "Project 2"],

      //Logo placeholder — insert path like "/images/amity-logo.png"
      logo: "",

      // Event image placeholders — insert paths like "/images/event1.png"
      eventImages: ["", "", ""],
    },
    {
      name: "Amity Lucknow Chapter",
      leader: "Animesh Kumar Pandey",
      pastEvents: ["Git and GitHub", "Python Speedrun"],
      upcomingEvent: {
        name: "Build Fast 2.0 | July 28",
        link: "#",
      },
      projects: ["Project 1", "Project 2"],
      logo: "", // INSERT COLLEGE LOGO PATH HERE
      eventImages: ["", "", ""], // INSERT EVENT IMAGE PATHS HERE
    },
    {
      name: "Amity Lucknow Chapter",
      leader: "Soumesh Nanda",
      pastEvents: ["Git and GitHub", "Free C"],
      upcomingEvent: {
        name: "Build Fast 2.0 | July 28",
        link: "#",
      },
      projects: ["Project 1", "Project 2"],
      logo: "", // INSERT COLLEGE LOGO PATH HERE
      eventImages: ["", "", ""], // INSERT EVENT IMAGE PATHS HERE
    },
  ];

  return (
    <main className="bg-zinc-950 min-h-screen py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        {chapterData.map((chapter, idx) => (
          <ChapterCard key={idx} {...chapter} />
        ))}
        <div className="text-center mt-12">
          <a
            href="#"
            className="text-lg font-semibold text-blue-400 underline hover:text-blue-300"
          >
            Start your chapter →
          </a>
        </div>
      </div>
    </main>
  );
}