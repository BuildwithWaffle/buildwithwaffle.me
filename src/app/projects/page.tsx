"use client";
import { useState } from "react";
import Image from "next/image";
import projectsData from "../../data/projects.json";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Software", "Hardware", "Design"];
  const featuredProject = projectsData.projectOfTheWeek;
  const allProjects = projectsData.recentProjects;

  const filteredProjects = allProjects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category?.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-white py-12 px-6 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Student Projects
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover amazing projects built by student developers in our community.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto py-3 mb-2 hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${selectedCategory === category
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="border-b border-gray-200 mb-8"></div>

        {/* Featured Project */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Featured Project
            </span>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Project Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-4">
                  {featuredProject.image ? (
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      width={600}
                      height={338}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900">
                    {featuredProject.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Builders */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Built by:</p>
                  <div className="space-y-3">
                    {featuredProject.builders.map((builder, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-gray-900">{builder.name}</span>
                        </div>
                        <div className="flex gap-2">
                          {builder.github && (
                            <a
                              href={builder.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                            >
                              {/* GitHub Icon */}
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12
    c0 5.3 3.438 9.8 8.207 11.388.6.113.793-.258.793-.577 0-.285-.012-1.233-.018-2.425
    -3.338.726-4.042-1.614-4.042-1.614-.546-1.384-1.333-1.753-1.333-1.753-1.09-.745.084-.729.084-.729
    1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.606
    -2.665-.3-5.466-1.334-5.466-5.931 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176
    0 0 1.008-.322 3.301 1.23a11.524 11.524 0 0 1 3.003-.404c1.019.004 2.047.138 3.003.404
    2.291-1.553 3.297-1.23 3.297-1.23.654 1.653.243 2.873.119 3.176.77.84 1.234 1.91 1.234
    3.22 0 4.609-2.804 5.628-5.476 5.923.43.372.817 1.104.817 2.226 0 1.606-.014 2.898-.014
    3.292 0 .321.192.694.801.576C20.565 21.797 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          {builder.linkedin && (
                            <a
                              href={builder.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                            >
                              {/* LinkedIn Icon */}
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037
    -1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414
    v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 
    4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065
    0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 
    0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z
    M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24
    1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 
    .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {featuredProject.category === "Software" && featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      Code
                    </a>
                  )}
                  {featuredProject.liveLink && (
                    <a
                      href={featuredProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length === 0 ? (
              <p className="text-gray-500 text-center col-span-full">
                No projects found in this category.
              </p>
            ) : (
              filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2">Built by:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.builders.map((builder, builderIndex) => (
                          <div key={builderIndex} className="flex items-center gap-2">
                            {builder.linkedin ? (
                              <a
                                href={builder.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer group"
                              >
                                <span className="text-xs text-gray-700 group-hover:text-blue-600 transition-colors">
                                  {builder.name}
                                </span>
                              </a>
                            ) : (
                              <span className="text-xs text-gray-700">{builder.name}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      {project.category === "Software" && project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                        >
                          Code
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-xl p-12 border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of student builders and showcase your projects to the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/postyourproject"
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition-colors"
            >
              Submit Your Project
            </a>

            <a
              href="/Philosophy"
              className="inline-flex items-center justify-center px-6 py-3 text-gray-900 bg-white hover:bg-gray-50 rounded-lg font-medium transition-colors border border-gray-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}