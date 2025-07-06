"use client";
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate newsletter signup (replace with actual implementation)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 1000);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-16"
             style={{
               background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 50%, #2E5B8A 100%)',
               boxShadow: '0 25px 50px -12px rgba(74, 144, 226, 0.4)'
             }}>
          
          {/* World Map Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-400 rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-red-400 rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-red-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-red-400 rounded-full animate-pulse delay-500"></div>
            
            {/* Abstract continent shapes */}
            <div className="absolute top-12 right-12 w-24 h-16 bg-white/5 rounded-full transform rotate-12"></div>
            <div className="absolute bottom-12 left-12 w-32 h-20 bg-white/5 rounded-full transform -rotate-12"></div>
            <div className="absolute top-1/2 right-1/4 w-20 h-12 bg-white/5 rounded-full transform rotate-45"></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Newsletter Form */}
            <div className="text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Join the newsletter
              </h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                We'll send you an email no more than once a month, when we work on something cool for you. 
                <a href="#" className="text-red-300 hover:text-red-200 underline ml-1">
                  Check out our previous issues
                </a>.
              </p>
              
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                  </button>
                </form>
              ) : (
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h4 className="text-xl font-bold mb-2">Welcome to the Waffle family!</h4>
                  <p className="text-white/90">You'll hear from us soon with cool updates and opportunities.</p>
                </div>
              )}
            </div>

            {/* Newsletter Preview Cards */}
            <div className="space-y-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-gray-900 border-t-4 border-red-500">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600 mb-2">January 15, 2025— From Build with Waffle, to You</div>
                <p className="text-gray-900 font-medium">
                  WOW!! Look at all the new builders that have joined Build with Waffle since last time: 
                  🧇 Arjun and Priya from Mumbai, India 🎮 ⚡ 🛠️...
                </p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-gray-900 border-t-4 border-blue-500">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600 mb-2">December 20, 2024— From Build with Waffle, to You</div>
                <p className="text-gray-900 font-medium">
                  WOW!! Look at all the new builders that have joined Build with Waffle since last time: 
                  🏗️ Ravi from Delhi, India 🏫 Sneha and Karan...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
