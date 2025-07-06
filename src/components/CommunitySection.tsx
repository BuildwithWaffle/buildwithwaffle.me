"use client";
import React from 'react';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';

const CommunitySection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-4">
          <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">
            WE'VE GOT A LOT GOING ON - LET'S RECAP
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
        A place for Misfits Like You! {' '}
          <br className="hidden md:block" />
          {' '}
          <span className="bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: `linear-gradient(to right, var(--primary-accent), var(--primary-accent-hover))` 
                }}>
            Build with Waffle
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Discord Card */}
          <div className="group relative overflow-hidden rounded-2xl p-8 text-white transition-all duration-300 hover:scale-105 flex flex-col"
               style={{ 
                 background: 'linear-gradient(135deg, #5865F2 0%, #4752C4 100%)',
                 boxShadow: '0 20px 40px -12px rgba(88, 101, 242, 0.4)'
               }}>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <FaDiscord className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Join Our Discord</h3>
              <p className="text-white/90 leading-relaxed mb-6 flex-grow">
                Connect with other technical teenagers on Discord and collaborate on projects together.
              </p>
              
              <a
                href="https://discord.gg/FryPg2xj3E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-all duration-200 justify-center"
              >
                Join Discord
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full"></div>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="group relative overflow-hidden rounded-2xl p-8 text-white transition-all duration-300 hover:scale-105 flex flex-col"
               style={{ 
                 background: 'linear-gradient(135deg, #24292e 0%, #1a1e22 100%)',
                 boxShadow: '0 20px 40px -12px rgba(36, 41, 46, 0.4)'
               }}>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <FaGithub className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Explore Our GitHub</h3>
              <p className="text-white/90 leading-relaxed mb-6 flex-grow">
                Discover open source projects, contribute to our tools, and build amazing things together.
              </p>
              
              <a
                href="https://github.com/buildwithwaffle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-all duration-200 justify-center"
              >
                View GitHub
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full"></div>
            </div>
          </div>

          {/* Start a Chapter Card */}
          <div className="group relative overflow-hidden rounded-2xl p-8 text-white transition-all duration-300 hover:scale-105 flex flex-col"
               style={{ 
                 background: `linear-gradient(135deg, var(--primary-accent) 0%, var(--primary-accent-hover) 100%)`,
                 boxShadow: '0 20px 40px -12px var(--primary-accent-shadow)'
               }}>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <HiUserGroup className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Start A Chapter</h3>
              <p className="text-white/90 leading-relaxed mb-6 flex-grow">
                Build an in-person community of high school builders, and we're here to help.
              </p>
              
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfCH69gkopLdBQB7OQFPpU3bJ90-dM4IsHB281SIAs9VYdgjg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold transition-all duration-200 justify-center"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
