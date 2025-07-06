"use client";
import React from 'react';

const ChapterSection = () => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
              WANT TO START SOMETHING FROM SCRATCH?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Help us build{' '}
            <span className="bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, var(--primary-accent), var(--primary-accent-hover))` 
                  }}>
              IRL communities
            </span>
            .
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're dreaming of local chapters where misfits gather, build weird projects, 
            and turn ideas into reality. Want to be the first in your city?
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfCH69gkopLdBQB7OQFPpU3bJ90-dM4IsHB281SIAs9VYdgjg/viewform"
            className="inline-flex items-center gap-3 text-white font-bold px-24 py-4 text-xl rounded-lg transition-all duration-200 transform hover:scale-105"
            style={{ 
              backgroundColor: 'var(--primary-accent)',
              boxShadow: '0 10px 25px -5px var(--primary-accent-shadow)' 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-accent-hover)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px var(--primary-accent-shadow-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px var(--primary-accent-shadow)';
            }}
          >
            Start a Chapter
          </a>
        </div>

       
      </div>
    </section>
  );
};

export default ChapterSection;
