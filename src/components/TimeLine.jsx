import React from "react";

const timelineData = [
  {
    title: "MERN Stack Developer",
    period: "Jan 2026 - Present",
    company: "Remote — Freelance",
    description:
      "Built a full-stack Job Board platform with multi-role system and automated email notifications using Nodemailer. Developed a Course Management System (LMS) with AI Study Assistant integrated via Chatbase. Created an AI Resume Improver using OpenAI API with ATS scoring and PDF/DOCX support.",
    active: true,
  },
  {
    title: "React Developer",
    period: "Jun 2025 - Nov 2025",
    company: "Freelance360 — Remote",
    description:
      "Built multi-page websites, SPAs and landing pages using React.js and Tailwind CSS. Converted Figma & Dribbble designs into pixel-perfect responsive React components.",
    active: false,
  },
  {
    title: "WordPress Developer",
    period: "Aug 2025 - Nov 2025",
    company: "Freelance360 — Remote",
    description:
      "Developed and maintained WordPress-based websites for clients. Worked both independently and in team collaboration.",
    active: true,
  },
  {
    title: "Frontend React Developer",
    period: "Apr 2024 - Jun 2025",
    company: "Independent Freelance",
    description:
      "Built responsive React.js web interfaces using Tailwind CSS for multiple client projects. Handled client requirements and delivered with feedback.",
    active: false,
  },
];

const WorkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-white"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20 6h-2.18c.07-.44.18-.88.18-1.34C18 2.99 16.01 1 13.66 1c-1.4 0-2.6.72-3.34 1.8L10 3.62l-.32-.84C8.94 1.72 7.74 1 6.34 1 4 1 2 2.99 2 5.34c0 .46.11.9.18 1.34H0v2h1v13h22V8h1V6h-3zm-6-3c1.1 0 2 .9 2 2 0 .46-.18.86-.43 1.2L14 8H11.62l1.03-3.08C12.88 3.38 13.37 3 14 3zM6.34 3C7.44 3 8.34 3.9 8.34 5c0 .46-.18.86-.43 1.2L6.34 8 4.77 6.2C4.52 5.86 4.34 5.46 4.34 5c0-1.1.9-2 2-2z" />
  </svg>
);

const TimeLine = () => {
  return (
    <section className="py-24 bg-white" id="experience">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          The Professional Timeline
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-400/40 before:to-transparent">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                item.active ? "is-active" : ""
              }`}
            >
              {/* Timeline Circle */}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300 ${
                  item.active ? "bg-cyan-500" : "bg-slate-300"
                }`}
              >
                <WorkIcon />
              </div>

              {/* Timeline Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-cyan-100 transition-all duration-300">
                {/* Title + Date */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-gray-900 text-xl">
                    {item.title}
                  </h3>
                  <time className="font-semibold text-cyan-600 text-sm whitespace-nowrap bg-cyan-50 px-3 py-1 rounded-full">
                    {item.period}
                  </time>
                </div>

                {/* Company */}
                <div className="text-gray-400 font-semibold text-sm mb-4">
                  {item.company}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
