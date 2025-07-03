import Link from 'next/link';

const projects = [
  {
    title: "Smart Attendance System using Face Recognition and Deep Learning",
    github: "https://github.com/waffle/Smart-Attendance-System",
    creator: "Waffle Devs",
  },
  {
    title: "AI-Powered Resume Scanner and Job Matcher using NLP",
    github: "https://github.com/waffle/AI-Resume-Scanner",
    creator: "Waffle Devs",
  },
  {
    title: "Blockchain-Based Secure Voting System",
    github: "https://github.com/waffle/Blockchain-Voting-System",
    creator: "Waffle Devs",
  },
  {
    title: "Remote Patient Tracker",
    github: "https://github.com/waffle/patient-tracker",
    creator: "Waffle Devs",
  },
  {
    title: "Smart Medicine Dispenser",
    github: "https://github.com/waffle/med-dispenser",
    creator: "Waffle Devs",
  },
  {
    title: "Fall Detection System",
    github: "https://github.com/waffle/fall-detection",
    creator: "Waffle Devs",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white py-16 px-26 md:px-24">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl p-6 flex flex-col justify-between h-56 bg-black text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>

            <div className="mt-auto">
              <p className="mb-2">
                <span className="font-medium">GitHub: </span>
                <Link
                  href={project.github}
                  className="text-blue-500 underline hover:text-blue-400"
                  target="_blank"
                >
                  {project.github}
                </Link>
              </p>
              <p className="text-sm text-gray-400 text-right">
                <span className="font-medium">Created by:</span> {project.creator}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-xl font-medium italic text-gray-800 underline">
          Ready to start your chapter? We don’t care about perfect. We care about passionate.
        </p>
      </div>
      <div>
        
      </div>
    </section>
  );
}