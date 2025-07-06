"use client";
import Image from "next/image";
import projectsData from "../../data/projects.json";

export default function ProjectsPage() {
  const featuredProject = projectsData.projectOfTheWeek;
  const allProjects = projectsData.recentProjects;

  return (
    <div className="text-gray-900 min-h-screen py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-20">
          <div className="inline-block p-4 mb-8 rounded-2xl bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              🚀 Student Projects
            </h1>
          </div>
          <p className="text-gray-700 max-w-4xl mx-auto text-xl leading-relaxed font-medium">
            Raw, real projects built by students who stopped waiting for permission. 
            These aren't perfect — they're <span className="text-orange-600 font-bold">honest</span>. 
            From AI tools to blockchain systems, these are the builds that <span className="text-orange-600 font-bold">matter</span>.
          </p>
        </div>

        {/* Featured Project of the Week */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <span className="text-white text-xl font-bold">🏆</span>
              </div>
              <div>
                <span className="text-white px-6 py-2 rounded-full text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                  Project of the Week
                </span>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-200 to-transparent"></div>
            <span className="text-gray-500 font-medium">Featured Build</span>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-3xl p-10 bg-white shadow-2xl border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100 mb-8 shadow-xl">
                      <Image
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {featuredProject.tags.map((tag, index) => (
                      <span key={index} className="bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-full text-sm font-semibold text-orange-800 border border-orange-200 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="order-1 lg:order-2 space-y-8">
                  <div>
                    <h2 className="text-4xl font-black mb-6 text-gray-900 leading-tight">{featuredProject.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">{featuredProject.description}</p>
                  </div>

                  {/* Builders */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg">
                    <p className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="text-orange-500">👨‍�</span>
                      Built by these amazing developers:
                    </p>
                    <div className="space-y-4">
                      {featuredProject.builders.map((builder, index) => (
                        <div key={index} className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-red-400 p-0.5">
                                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                  <Image
                                    src={builder.image}
                                    alt={builder.name}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                            </div>
                            <span className="font-bold text-gray-900 text-lg">{builder.name}</span>
                          </div>
                          <div className="flex gap-3">
                            {builder.github && (
                              <a
                                href={builder.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
                                title={`${builder.name} GitHub`}
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                              </a>
                            )}
                            {builder.linkedin && (
                              <a
                                href={builder.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
                                title={`${builder.name} LinkedIn`}
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                  <div className="flex flex-wrap gap-4">
                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[180px] bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                        className="flex-1 min-w-[180px] bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        </div>

        {/* All Projects Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-gray-900">All Student Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  {/* Project Image */}
                  <div className="relative mb-6">
                    <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed overflow-hidden" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical' as const
                      }}>{project.description}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1 rounded-full text-xs font-semibold text-orange-800 border border-orange-200">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-xl"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          Code
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-xl"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo
                        </a>
                      )}
                    </div>

                    {/* Builders */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-500">Built by:</p>
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                        <div className="space-y-3">
                          {project.builders.map((builder, builderIndex) => (
                            <div key={builderIndex} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="relative">
                                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400 p-0.5">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                                      <Image
                                        src={builder.image}
                                        alt={builder.name}
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <span className="text-sm font-semibold text-gray-700">{builder.name}</span>
                              </div>
                              <div className="flex gap-2">
                                {builder.github && (
                                  <a
                                    href={builder.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                    title={`${builder.name} GitHub`}
                                  >
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                  </a>
                                )}
                                {builder.linkedin && (
                                  <a
                                    href={builder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                    title={`${builder.name} LinkedIn`}
                                  >
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
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
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur opacity-30"></div>
          <div className="relative text-center bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl p-16 border border-gray-200 shadow-2xl">
            <div className="mb-8">
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                Join our community of <span className="text-orange-600 font-bold">student builders</span> and showcase your projects to the world.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/postyourproject"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Submit Your Project
                </span>
              </a>
              
              <a
                href="/Philosophy"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-gray-900 transition-all duration-300 bg-white hover:bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-gray-200 hover:border-orange-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
