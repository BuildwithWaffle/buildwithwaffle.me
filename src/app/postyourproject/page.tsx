"use client";

import { useState } from "react";
import { CheckCircle2, TriangleAlert } from "lucide-react";

const PROJECT_TYPES = [
  { value: "web-development", label: "Web Development" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "desktop-app", label: "Desktop Application" },
  { value: "ai-ml", label: "AI/ML Project" },
  { value: "blockchain", label: "Blockchain/Web3" },
  { value: "iot", label: "IoT Project" },
  { value: "game-development", label: "Game Development" },
  { value: "api-backend", label: "API/Backend" },
  { value: "other", label: "Other" },
];

const EMPTY_FORM = {
  name: "",
  email: "",
  projectTitle: "",
  projectType: "",
  projectDetails: "",
  githubUrl: "",
  liveUrl: "",
  tags: "",
};

export default function PostYourProject() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Web3Forms access keys are public by design; they only permit
          // posting to this form's own inbox.
          access_key: "254485ab-0966-4ec0-bdf6-e79855bebfe4",
          subject: `New Project Submission: ${formData.projectTitle}`,
          ...formData,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        setFormData(EMPTY_FORM);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section pt-32">
      <div className="container-prose">
        <header className="text-center">
          <span className="chip">Share your build</span>
          <h1 className="mt-5 font-display text-4xl font-bold text-ink md:text-5xl">
            Post your <span className="text-gradient-brand">project</span>
          </h1>
          <p className="mt-4 text-lg text-ink-2">
            Showcase what you&apos;ve built to the Build with Waffle community.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="card mt-10 grid grid-cols-1 gap-5 p-6 sm:p-8 md:grid-cols-2"
        >
          <div>
            <label htmlFor="name" className="field-label">
              Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="David Johnson"
              className="field-input"
              autoComplete="name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="field-label">
              Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="field-input"
              autoComplete="email"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="projectTitle" className="field-label">
              Project title <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
              placeholder="My awesome project"
              className="field-input"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="projectType" className="field-label">
              Project type <span className="text-accent">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="field-input"
              required
            >
              <option value="" disabled>
                Select project type
              </option>
              {PROJECT_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="projectDetails" className="field-label">
              Project details
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Tell us more about your project."
              rows={5}
              className="field-input resize-y"
            />
          </div>

          <div>
            <label htmlFor="githubUrl" className="field-label">
              GitHub URL
            </label>
            <input
              type="url"
              id="githubUrl"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              placeholder="https://github.com/username/project"
              className="field-input"
            />
          </div>

          <div>
            <label htmlFor="liveUrl" className="field-label">
              Live URL
            </label>
            <input
              type="url"
              id="liveUrl"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              placeholder="https://yourproject.com"
              className="field-input"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="tags" className="field-label">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="React, TypeScript, Node.js (separate with commas)"
              className="field-input"
            />
            <p className="mt-1.5 text-xs text-ink-3">
              Comma-separated. These help people find your project.
            </p>
          </div>

          <div className="md:col-span-2 mt-2 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? "Submitting…" : "Submit project"}
            </button>

            {/* role="status" so the outcome is announced, not just shown. */}
            <p
              role="status"
              aria-live="polite"
              className="flex items-center gap-2 text-sm text-ink-2"
            >
              {submitStatus === "success" && (
                <>
                  <CheckCircle2 className="size-4 text-accent" aria-hidden />
                  Submitted. We&apos;ll be in touch within 24 business hours.
                </>
              )}
              {submitStatus === "error" && (
                <>
                  <TriangleAlert className="size-4 text-accent" aria-hidden />
                  Something went wrong. Please try again.
                </>
              )}
              {submitStatus === "idle" &&
                "We will contact you within 24 business hours."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
