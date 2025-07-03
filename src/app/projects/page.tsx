"use client";
import Image from "next/image";
import projectsData from "../../data/projects.json";

export default function ProjectsPage() {
  const featuredProject = projectsData.projectOfTheWeek;
  const allProjects = projectsData.recentProjects;

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">🚀 Student Projects</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Raw, real projects built by students who stopped waiting for permission. 
            These aren't perfect — they're honest. From AI tools to blockchain systems, 
            these are the builds that matter.
          </p>
        </div>

        {/* Featured Project of the Week */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#7736F8] px-4 py-2 rounded-full text-lg font-semibold">🏆 Project of the Week</span>
            <span className="text-gray-400">Featured Build</span>
          </div>
          
          <div className="bg-[#7736F8] rounded-3xl p-8 border border-gray-800">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-800 mb-6">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {featuredProject.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-800 px-3 py-2 rounded-full text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{featuredProject.title}</h2>
                  <p className="text-gray-300 leading-relaxed text-lg">{featuredProject.description}</p>
                </div>

                {/* Builders */}
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <p className="text-sm font-semibold text-white mb-4">Built by:</p>
                  <div className="space-y-3">
                    {featuredProject.builders.map((builder, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-gray-700 overflow-hidden border-2 border-gray-900">
                            <Image
                              src={builder.image}
                              alt={builder.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-semibold text-white text-sm md:text-base lg:text-lg">{builder.name}</span>
                        </div>
                        <div className="flex gap-3">
                          {builder.github && (
                            <a
                              href={builder.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors"
                              title={`${builder.name} GitHub`}
                            >
                              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          {builder.linkedin && (
                            <a
                              href={builder.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-[#0077B5] transition-colors"
                              title={`${builder.name} LinkedIn`}
                            >
                              <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 text-sm flex-1 justify-center"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      View Source Code
                    </a>
                  )}
                  {featuredProject.liveLink && (
                    <a
                      href={featuredProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#7736F8] hover:bg-[#7736F8]/80 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 text-sm flex-1 justify-center"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">All Student Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <div key={index} className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105">
                {/* Project Image */}
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-800 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 text-sm flex-1 justify-center"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#7736F8] hover:bg-[#7736F8]/80 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 text-sm flex-1 justify-center"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>

                  {/* Builders */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-400">Built by:</p>
                    </div>
                    
                    {/* All Builder Names and Links */}
                    <div className="bg-gray-800/30 rounded-lg p-3">
                      <div className="space-y-2">
                        {project.builders.map((builder, builderIndex) => (
                          <div key={builderIndex} className="flex items-center justify-between">
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-gray-700 overflow-hidden border border-gray-600">
                                <Image
                                  src={builder.image}
                                  alt={builder.name}
                                  width={40}
                                  height={40}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span className="text-sm md:text-base lg:text-lg font-medium text-gray-300">{builder.name}</span>
                            </div>
                            <div className="flex gap-2 md:gap-3">
                              {builder.github && (
                                <a
                                  href={builder.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-white transition-colors"
                                  title={`${builder.name} GitHub`}
                                >
                                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                  </svg>
                                </a>
                              )}
                              {builder.linkedin && (
                                <a
                                  href={builder.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-[#0077B5] transition-colors"
                                  title={`${builder.name} LinkedIn`}
                                >
                                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900/50 rounded-3xl p-12 border border-gray-800">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            Join our community of student builders and showcase your projects to the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/postyourproject"
              className="bg-[#7736F8] hover:bg-[#7736F8]/80 px-8 py-3 rounded-xl font-semibold text-lg transition-colors duration-200"
            >
              Submit Your Project
            </a>
            <a
              href="/about"
              className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-xl font-semibold text-lg transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}