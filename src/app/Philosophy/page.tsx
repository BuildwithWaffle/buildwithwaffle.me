'use client'
import { FaInstagram, FaLinkedin, FaYoutube, FaDiscord, FaHeart, FaCode, FaRocket, FaUsers, FaPen, FaEye } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function AboutUs() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section - Hack Club Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br"
             style={{
               backgroundImage: `linear-gradient(135deg, var(--primary-accent), var(--primary-accent-hover))`
             }} />
        
        {/* Main Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-16">
          <div className="space-y-8">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white uppercase tracking-tight">
              <span className="block">We don't care</span>
              <span className="block">what you are —</span>
              <span className="block">dev, poet,</span>
              <span className="block">designer, dropout.</span>
            </h1>
            
            {/* Subtitle */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30 max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed">
                If you build with your{" "}
                <span className="bg-white text-black px-3 py-1 rounded-lg">
                  whole soul
                </span>
                , you belong.
              </p>
            </div>
            
            {/* Brand indicator */}
            <div className="flex justify-center items-center space-x-3 pt-6">
              
              <div className="text-white/80 text-sm font-medium uppercase tracking-wider">
                The Build with Waffle Philosophy
              </div>
            </div>
          </div>
        </div>
        
      
      </section>

      {/* Main Content - Hack Club Style Cards */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Card 1: Build with soul */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-12">
            <div className="flex items-start gap-4 lg:hidden w-full">
              <div className="w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ 
                     backgroundImage: `linear-gradient(135deg, var(--primary-accent), var(--primary-accent-hover))` 
                   }}>
                <FaHeart className="text-lg text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-black mb-2"
                    style={{ color: 'var(--primary-accent)' }}>
                  Build with soul.
                </h2>
                <p className="text-base sm:text-lg leading-relaxed"
                   style={{ color: 'var(--text-secondary)' }}>
                  Anyone can learn tools. But soul? That's rare.
                  <br />
                  At Waffle, we don't just ship projects — we pour ourselves into what we make.
                </p>
              </div>
            </div>
            <div className="hidden lg:flex flex-1 text-left">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
                    style={{ color: 'var(--primary-accent)' }}>
                  Build with soul.
                </h2>
                <p className="text-lg sm:text-xl leading-relaxed"
                   style={{ color: 'var(--text-secondary)' }}>
                  Anyone can learn tools. But soul? That's rare.
                  <br />
                  At Waffle, we don't just ship projects — we pour ourselves into what we make.
                </p>
              </div>
            </div>
            <div className="hidden lg:flex flex-1 justify-end">
              <div className="w-20 h-20 bg-gradient-to-br rounded-2xl flex items-center justify-center"
                   style={{ 
                     backgroundImage: `linear-gradient(135deg, var(--primary-accent), var(--primary-accent-hover))` 
                   }}>
                <FaHeart className="text-2xl text-white" />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-24 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
          </div>

          {/* Card 2: Make weird stuff */}
          <div className="flex flex-row items-start gap-4 lg:flex-row-reverse lg:items-center lg:gap-12">
            <div className="flex-shrink-0 lg:flex-1 lg:flex lg:justify-start">
              <div className="w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <FaCode className="text-lg lg:text-2xl text-white" />
              </div>
            </div>
            <div className="flex-1 text-left lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 lg:mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, #ec4899, #8b5cf6)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                Make weird stuff.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed"
                 style={{ color: 'var(--text-secondary)' }}>
                We don't care if it's messy, unfinished, or insane.
                <br />
                If it's yours — we want to see it. That's how real builders begin.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-24 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
          </div>

          {/* Card 3: Start before you're ready */}
          <div className="flex flex-row items-start gap-4 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex-shrink-0 lg:flex-1 lg:flex lg:justify-start">
              <div className="w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center">
                <FaRocket className="text-lg lg:text-2xl text-white" />
              </div>
            </div>
            <div className="flex-1 text-left lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 lg:mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, #8b5cf6, #3b82f6)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                Start before you're ready.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed"
                 style={{ color: 'var(--text-secondary)' }}>
                The best projects don't wait for perfection.
                <br />
                They begin with a spark and evolve in public. That's how we roll.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-24 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
          </div>

          {/* Card 4: No club. Just crew */}
          <div className="flex flex-row items-start gap-4 lg:flex-row-reverse lg:items-center lg:gap-12">
            <div className="flex-shrink-0 lg:flex-1 lg:flex lg:justify-start">
              <div className="w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <FaUsers className="text-lg lg:text-2xl text-white" />
              </div>
            </div>
            <div className="flex-1 text-left lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 lg:mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, #10b981, #06b6d4)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                No club. Just crew.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed"
                 style={{ color: 'var(--text-secondary)' }}>
                Waffle isn't about rules, applications, or titles.
                <br />
                It's about finding people who give a damn and building together.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-24 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
          </div>

          {/* Card 5: Writers, coders, dreamers, all */}
          <div className="flex flex-row items-start gap-4 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex-shrink-0 lg:flex-1 lg:flex lg:justify-start">
              <div className="w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-500 to-red-500 rounded-2xl flex items-center justify-center">
                <FaPen className="text-lg lg:text-2xl text-white" />
              </div>
            </div>
            <div className="flex-1 text-left lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 lg:mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, #f59e0b, #ef4444)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                Writers, coders, dreamers, all.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed"
                 style={{ color: 'var(--text-secondary)' }}>
                We believe creativity isn't boxed into roles.
                <br />
                If you make things — you're a builder here.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="w-24 h-px" style={{ backgroundColor: 'var(--border)' }}></div>
          </div>

          {/* Card 6: The work speaks */}
          <div className="flex flex-row items-start gap-4 lg:flex-row-reverse lg:items-center lg:gap-12">
            <div className="flex-shrink-0 lg:flex-1 lg:flex lg:justify-start">
              <div className="w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <FaEye className="text-lg lg:text-2xl text-white" />
              </div>
            </div>
            <div className="flex-1 text-left lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 lg:mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, #6366f1, #8b5cf6)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                The work speaks.
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed"
                 style={{ color: 'var(--text-secondary)' }}>
                Forget clout. Forget followers.
                <br />
                Around here, what you build says who you are.
              </p>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="text-center pt-12">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12 border-2"
                 style={{ borderColor: 'var(--border)' }}>
              <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
                Ready to build with soul?
              </h2>
              <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
                 style={{ color: 'var(--text-secondary)' }}>
                Join our crew of builders, makers, and dreamers.
                <br />
                <span className="bg-clip-text text-transparent font-bold"
                      style={{ 
                        backgroundImage: `linear-gradient(135deg, var(--primary-accent), var(--primary-accent-hover))` 
                      }}>
                  No applications. Just passion.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScqckW5RAs5GVeMNpAzFZF2Ro5TNmVgtOZGc68ifDAxDn_VlA/viewform?usp=sharing&ouid=100170810435940346187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: 'var(--primary-accent)',
                    boxShadow: `0 20px 40px -10px var(--primary-accent-shadow)` 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-accent-hover)';
                    e.currentTarget.style.boxShadow = `0 25px 50px -10px var(--primary-accent-shadow-hover)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                    e.currentTarget.style.boxShadow = `0 20px 40px -10px var(--primary-accent-shadow)`;
                  }}
                >
                  Join the Crew
                </a>
                <a
                  href="/Letter"
                  className="px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 border-2"
                  style={{ 
                    color: 'var(--text-primary)',
                    borderColor: 'var(--primary-accent)',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-accent)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  Read Our Letter
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Social Media Footer */}
      <section style={{ backgroundColor: 'var(--background-secondary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Connect with Us
            </h3>
            <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Follow our journey and join the conversation across platforms
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <a 
                href="https://discord.gg/FryPg2xj3E" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center space-y-2 sm:space-y-3 transition-all duration-300 hover:scale-110"
                aria-label="Join our Discord"
              >
                <FaDiscord className="text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300"
                          style={{ color: 'var(--text-secondary)' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-accent)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'} />
                <span className="text-xs sm:text-sm font-medium group-hover:font-bold transition-all duration-300"
                      style={{ color: 'var(--text-tertiary)' }}>
                  Discord
                </span>
              </a>
              <a 
                href="https://www.instagram.com/buildwithwaffle/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center space-y-2 sm:space-y-3 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300"
                           style={{ color: 'var(--text-secondary)' }}
                           onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-accent)'}
                           onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'} />
                <span className="text-xs sm:text-sm font-medium group-hover:font-bold transition-all duration-300"
                      style={{ color: 'var(--text-tertiary)' }}>
                  Instagram
                </span>
              </a>
              <a 
                href="https://x.com/Buildwithwaffle" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center space-y-2 sm:space-y-3 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on X"
              >
                <FaXTwitter className="text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300"
                          style={{ color: 'var(--text-secondary)' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-accent)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'} />
                <span className="text-xs sm:text-sm font-medium group-hover:font-bold transition-all duration-300"
                      style={{ color: 'var(--text-tertiary)' }}>
                  X (Twitter)
                </span>
              </a>
              <a 
                href="https://www.linkedin.com/company/buildwithwaffle" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center space-y-2 sm:space-y-3 transition-all duration-300 hover:scale-110"
                aria-label="Connect on LinkedIn"
              >
                <FaLinkedin className="text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300"
                           style={{ color: 'var(--text-secondary)' }}
                           onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-accent)'}
                           onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'} />
                <span className="text-xs sm:text-sm font-medium group-hover:font-bold transition-all duration-300"
                      style={{ color: 'var(--text-tertiary)' }}>
                  LinkedIn
                </span>
              </a>
              <a 
                href="https://www.youtube.com/@buildwithwaffle" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center space-y-2 sm:space-y-3 transition-all duration-300 hover:scale-110"
                aria-label="Subscribe on YouTube"
              >
                <FaYoutube className="text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300"
                         style={{ color: 'var(--text-secondary)' }}
                         onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-accent)'}
                         onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'} />
                <span className="text-xs sm:text-sm font-medium group-hover:font-bold transition-all duration-300"
                      style={{ color: 'var(--text-tertiary)' }}>
                  YouTube
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
