'use client';
import React, { useState } from 'react';

const PostYourProject: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectTitle: '',
    projectType: '',
    projectDetails: '',
    githubUrl: '',
    liveUrl: '',
    tags: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const submissionData = {
      access_key: "254485ab-0966-4ec0-bdf6-e79855bebfe4",
      subject: `New Project Submission: ${formData.projectTitle}`,
      ...formData,
    };
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          projectTitle: '',
          projectType: '',
          projectDetails: '',
          githubUrl: '',
          liveUrl: '',
          tags: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 text-gray flex flex-col items-center justify-center p-4 font-sans text-sm md:text-base">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h4 className="inline-block text-sm md:text-base font-medium px-5 py-2 md:px-6 md:py-2.5 text-[#000] rounded-lg bg-gradient-to-r from-orange-500/80 via-red-500/10 to-orange-500/60 border border-orange-500/90 backdrop-blur-md hover:bg-orange-500/20 transition duration-300 shadow-md ">
          Share Your Build
        </h4>
        <h1 className="text-4xl md:text-6xl font-semibold mt-8 leading-tight">
          Post Your <span className="inline-block px-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Project</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base mt-4">
          Showcase your amazing project to the Build with Waffle community.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-orange-500/80 border-1 border-orange-400/30  p-4 sm:p-6 md:p-8 rounded-xl shadow-md w-full max-w-xl my-8 md:my-12">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="David Johnson"
              className="w-full px-3 py-1.5 rounded-sm bg-white border-b border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-3 py-1.5 rounded-sm bg-white border-b border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Project Title */}
          <div className="md:col-span-2">
            <label htmlFor="projectTitle" className="block text-white text-sm font-medium mb-2">
              Project Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
              placeholder="My Awesome Project"
              className="w-full px-3 py-1.5 rounded-sm bg-white border-b border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Project Type Select */}
          <div className="md:col-span-2">
            <label htmlFor="projectType" className="block text-white text-sm font-medium mb-2">
              Project Type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3 py-1.5 rounded-sm bg-white border-b border-neutral-700 focus:outline-none focus:border-white text-white appearance-none pr-8"
                required
              >
                <option value="" disabled hidden>Select Project Type</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App</option>
                <option value="desktop-app">Desktop Application</option>
                <option value="ai-ml">AI/ML Project</option>
                <option value="blockchain">Blockchain/Web3</option>
                <option value="iot">IoT Project</option>
                <option value="game-development">Game Development</option>
                <option value="api-backend">API/Backend</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="md:col-span-2">
            <label htmlFor="projectDetails" className="block text-white text-sm font-medium mb-2">
              Project Details
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Tell us more about your project."
              rows={5}
              className="w-full px-3 py-1.5 rounded-sm bg-white border-b border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400 resize-y"
            />
          </div>

          {/* GitHub URL */}
          <div>
            <label htmlFor="githubUrl" className="block text-white text-sm font-medium mb-2">
              GitHub URL
            </label>
            <input
              type="url"
              id="githubUrl"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              placeholder="https://github.com/username/project"
              className="w-full px-3 py-1.5 rounded-sm bg-white border-b border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
            />
          </div>

          {/* Live URL */}
          <div>
            <label htmlFor="liveUrl" className="block text-white text-sm font-medium mb-2">
              Live URL
            </label>
            <input
              type="url"
              id="liveUrl"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              placeholder="https://yourproject.com"
              className="w-full px-3 py-1.5 rounded-sm bg-white border-b border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
            />
          </div>

          {/* Tags */}
          <div className="md:col-span-2">
            <label htmlFor="tags" className="block text-white text-sm font-medium mb-2">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="React, TypeScript, Node.js (separate with commas)"
              className="w-full px-3 py-1.5 rounded-sm bg-white border-b border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
            />
          </div>

          {/* Submit Button & Message */}
          <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-white hover:bg-gray-200'
              } text-orange-500 font-bold py-3 px-6 text-sm rounded-lg transition duration-300 ease-in-out w-full sm:w-auto mb-4 sm:mb-0`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-green-500 text-sm text-center sm:text-right">
                Project submitted successfully! We'll contact you within 24 business hours.
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm text-center sm:text-right">
                Something went wrong. Please try again.
              </p>
            )}
            
            {submitStatus === 'idle' && (
              <p className="text-white text-sm text-center sm:text-right">
                We will contact you within 24 business hours.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostYourProject;