"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import projectsData from "../data/projects.json";

export default function Projects() {
  const heroRef = useRef(null);
  
  const featuredProject = projectsData.projectOfTheWeek;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden" 
             style={{ 
               background: 'linear-gradient(135deg, #fb923c, #f97316, #ea580c)',
               backgroundSize: '100% 100%'
             }}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/20"></div>
        <div className="absolute top-32 right-20 w-32 h-32 rounded-full bg-white/10"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-white/15"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 rounded-full bg-white/20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Project of the Week
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-white/90">
            Raw, real projects built by students who stopped waiting for permission.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 border-2 shadow-lg hover:shadow-xl transition-shadow duration-300" 
               style={{ borderColor: 'var(--border)' }}>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Project Image */}
              <div className="lg:w-1/2 flex-shrink-0">
                <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 border-2" 
                     style={{ borderColor: 'var(--border)' }}>
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {featuredProject.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 rounded-full text-xs font-medium border"
                          style={{ 
                            backgroundColor: 'var(--background-secondary)',
                            color: 'var(--text-secondary)',
                            borderColor: 'var(--border)'
                          }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-2" style={{ color: 'var(--text-primary)' }}>
                    {featuredProject.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {featuredProject.description}
                  </p>
                </div>

                {/* Builders Info */}
                <div className="rounded-xl p-4 border-2" 
                     style={{ 
                       backgroundColor: 'var(--background-secondary)',
                       borderColor: 'var(--border)'
                     }}>
                  <p className="text-sm font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Built by:</p>
                  <div className="space-y-2">
                    {featuredProject.builders.map((builder, index) => (
                      <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 border"
                           style={{ borderColor: 'var(--border)' }}>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border"
                               style={{ borderColor: 'var(--border)' }}>
                            <Image
                              src={builder.image}
                              alt={builder.name}
                              width={32}
                              height={32}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                            {builder.name}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {builder.github && (
                            <a
                              href={builder.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded transition-colors duration-200"
                              style={{ 
                                backgroundColor: 'var(--background-secondary)',
                                color: 'var(--primary-accent)' 
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                                e.currentTarget.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--background-secondary)';
                                e.currentTarget.style.color = 'var(--primary-accent)';
                              }}
                              title={`${builder.name} GitHub`}
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          {builder.linkedin && (
                            <a
                              href={builder.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1 rounded transition-colors duration-200"
                              style={{ 
                                backgroundColor: 'var(--background-secondary)',
                                color: '#0077B5' 
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#0077B5';
                                e.currentTarget.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--background-secondary)';
                                e.currentTarget.style.color = '#0077B5';
                              }}
                              title={`${builder.name} LinkedIn`}
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 border-2 flex-1"
                    style={{ 
                      backgroundColor: 'var(--background-secondary)',
                      color: 'var(--text-primary)',
                      borderColor: 'var(--border)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = 'var(--primary-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--background-secondary)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  {featuredProject.liveLink && (
                    <a
                      href={featuredProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex-1"
                      style={{ 
                        backgroundColor: `var(--primary-accent)`,
                        boxShadow: `0 6px 16px var(--primary-accent-shadow)` 
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `var(--primary-accent-hover)`;
                        e.currentTarget.style.boxShadow = `0 8px 24px var(--primary-accent-shadow-hover)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `var(--primary-accent)`;
                        e.currentTarget.style.boxShadow = `0 6px 16px var(--primary-accent-shadow)`;
                      }}
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

        {/* Check Out More */}
        <div className="text-center">
          <Link
            href="/Projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105 border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900"
          >
            Check Out More Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
