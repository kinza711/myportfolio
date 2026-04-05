import { useState } from "react";

const slides = [
  {
    backgroundImage: 'url("/lms.png")',
    title: "Course Management System (LMS)",
    description:
      "Full-stack learning platform with Admin, Student, and Instructor roles. Features include quiz creation, difficulty filters, timer-based exams, result tracking, and an AI Study Assistant for students.",
    link: "https://lms-system-frontend-1gk5.onrender.com/",
    linkText: "View Live Project",
  },
  {
    backgroundImage: 'url("/taskmaster.png")',
    title: "TaskMaster – Task Management App",
    description:
      "Secure login-based task manager where users can organize tasks by priority and category. Built with session authentication and clean CRUD operations using Node.js, Express, and MongoDB.",
    link: "https://taskmaster-app-soz2.onrender.com/",
    linkText: "Explore Project",
  },
  {
    backgroundImage: 'url("/jobnest.png")',
    title: "JobNest – Job Portal System",
    description:
      "Multi-role job platform for Admin, HR, and Job Seekers. Includes job posting, applications, resume upload and preview, dashboards, and automated email notifications.",
    link: "https://jobnest-frontend-i8eq.onrender.com/",
    linkText: "See Project",
  },
  {
    backgroundImage: 'url("/resumeai.png")',
    title: "AI Resume Improver",
    description:
      "Upload your resume and let AI analyze, score, and improve it. Supports PDF and DOCX formats with ATS scoring and smart suggestions powered by OpenAI API.",
    link: "https://ai-resume-4not.onrender.com",
    linkText: "See Project",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div
      id="projects"
      className="relative w-[90%] md:w-[85%] lg:w-[80%] mx-auto bg-[#FAFAFA] py-10 overflow-hidden"
    >
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute  top-1/2 left-2 md:left-6 lg:left-10 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-30"
      >
        <div className="dot  bg-brand-cyan w-4 h-4 rounded-md"></div>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute  top-1/2 right-2 md:right-6 lg:right-10 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-30"
      >
        <div className="dot  bg-brand-cyan w-4 h-4 rounded-md"></div>
      </button>

      <div className="relative flex items-center justify-center min-h-[500px] md:h-[70vh]">
        {slides.map((slide, index) => {
          const isCurrent = index === currentIndex;
          const isPrev =
            index === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = index === (currentIndex + 1) % slides.length;

          let positionClasses = "opacity-0 scale-75";

          if (isCurrent) {
            positionClasses = "z-20 scale-100 opacity-100";
          } else if (isPrev) {
            positionClasses = "z-10 scale-90 -translate-x-1/2 opacity-70";
          } else if (isNext) {
            positionClasses = "z-10 scale-90 translate-x-1/2 opacity-70";
          }

          return (
            <figure
              key={index}
              className={`absolute transition-all duration-500 ease-in-out bg-cover bg-center rounded-3xl shadow-lg overflow-hidden w-full md:w-[90%] h-[400px] md:h-[500px] lg:h-[600px] ${positionClasses}`}
              style={{ backgroundImage: slide.backgroundImage }}
            >
              <figcaption className="flex items-center h-full p-4 md:p-6">
                <div className="bg-white rounded-2xl p-4 md:p-6 w-full md:w-[60%] lg:w-[40%]">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                    {slide.title}
                  </h2>

                  <p className="mt-2 text-sm md:text-base text-gray-700">
                    {slide.description}
                  </p>

                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-600 text-sm md:text-base hover:underline"
                  >
                    {slide.linkText}
                  </a>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
