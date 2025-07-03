'use client';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    service: '',
    projectDetails: '',
  });

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
    const submissionData = {
      access_key: "254485ab-0966-4ec0-bdf6-e79855bebfe4",
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
        alert("Form submitted successfully! We will contact you within 24 business hours.");
        setFormData({
          name: '',
          email: '',
          companyName: '',
          service: '',
          projectDetails: '',
        });
      } else {
        alert("There was an error submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen mt-20 text-white flex flex-col items-center justify-center p-4 font-sans text-sm md:text-base">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="inline-block text-sm md:text-base font-medium px-5 py-2 md:px-6 md:py-2.5 text-white rounded-full bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 backdrop-blur-md hover:bg-white/10 transition duration-300 shadow-md">
          Let's build
        </span>
        <h1 className="text-4xl md:text-6xl font-semibold mt-8 leading-tight">
          We're Here To <span className="inline-block px-2 bg-white/10 rounded-md">Help</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base mt-4">
          Empower your team to complete projects with excellence.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-black p-4 sm:p-6 md:p-8 rounded-xl shadow-md w-full max-w-xl my-8 md:my-12">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="David Johnson"
              className="w-full px-3 py-1.5 rounded-none bg-black border-b border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-3 py-1.5 rounded-none bg-black border-b border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Company Name */}
          <div className="md:col-span-2">
            <label htmlFor="companyName" className="block text-gray-300 text-sm font-medium mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Ex. StaticMania"
              className="w-full px-3 py-1.5 rounded-none bg-black border-b border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Service Select */}
          <div className="md:col-span-2">
            <label htmlFor="service" className="block text-gray-300 text-sm font-medium mb-2">
              Select Service <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-1.5 rounded-none bg-black border-b border-neutral-700 focus:outline-none focus:border-white text-white appearance-none pr-8"
                required
              >
                <option value="" disabled hidden>Select Your Service</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app-development">Mobile App Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="digital-marketing">Digital Marketing</option>
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
            <label htmlFor="projectDetails" className="block text-gray-300 text-sm font-medium mb-2">
              Project Details
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Tell us more about your project."
              rows={5}
              className="w-full px-3 py-1.5 rounded-none bg-black border-b border-neutral-700 focus:outline-none focus:border-white text-white placeholder-gray-400 resize-y"
            />
          </div>

          {/* Submit Button & Message */}
          <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between mt-4">
            <button
              type="submit"
              className="bg-white hover:bg-gray-200 text-black font-bold py-1.5 px-4 text-sm rounded-lg transition duration-300 ease-in-out w-full sm:w-auto mb-4 sm:mb-0"
            >
              Submit
            </button>
            <p className="text-gray-400 text-sm text-center sm:text-right">
              We will contact you within 24 business hours.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;