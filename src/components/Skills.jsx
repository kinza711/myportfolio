
import { useState } from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    borderColor: "border-b-[#088395]",
    bgHover: "hover:bg-[#088395]/10",
    textColor: "text-[#088395]",
    dotColor: "bg-[#088395]",
    skills: [
      "React.js",
      "JavaScript ES6+",
      "Tailwind CSS",
      "Axios",
      "Responsive Design",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    category: "Backend",
    borderColor: "border-b-[#0a2342]",
    bgHover: "hover:bg-[#0a2342]/10",
    textColor: "text-[#0a2342]",
    dotColor: "bg-[#0a2342]",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT Auth",
      "Multer",
      "Nodemailer",
      "Cloudinary",
      "Express-Session",
    ],
  },
  {
    category: "AI & Integrations",
    borderColor: "border-b-[#0e7490]",
    bgHover: "hover:bg-[#0e7490]/10",
    textColor: "text-[#0e7490]",
    dotColor: "bg-[#0e7490]",
    skills: [
      "OpenAI API",
      "Chatbase",
      "RAG Concept",
      "Embeddings",
      "Custom AI Chatbot",
      "AI Integration",
    ],
  },
];

// Random float animation per skill
const getFloatAnimation = (index) => ({
  y: [0, -10 - (index % 3) * 5, 0],
  x: [0, (index % 2 === 0 ? 6 : -6), 0],
  rotate: [0, index % 2 === 0 ? 2 : -2, 0],
  transition: {
    duration: 3 + (index % 4) * 0.7,
    repeat: Infinity,
    ease: "easeInOut",
    delay: index * 0.15,
  },
});

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const active = skillsData.find((s) => s.category === activeCategory);

  return (
    <section className="py-24 bg-gray-50/50" id="skills">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My Digital Toolbox
          </h2>
          <p className="text-gray-500 text-lg">
            Technologies I work with to build modern web applications
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {skillsData.map((item) => (
            <button
              key={item.category}
              onClick={() => setActiveCategory(item.category)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
                activeCategory === item.category
                  ? `${item.textColor} border-current bg-white shadow-md`
                  : "text-gray-400 border-gray-200 hover:border-gray-300"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Floating Skills Box */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 min-h-[220px] flex flex-wrap gap-4 justify-center items-center"
        >
          {active.skills.map((skill, index) => (
            <motion.span
              key={skill}
              animate={getFloatAnimation(index)}
              whileHover={{ scale: 1.15, zIndex: 10 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-gray-700 font-medium text-sm shadow-sm cursor-default transition-colors duration-300 ${active.bgHover}`}
            >
              <span className={`w-2 h-2 rounded-full animate-pulse ${active.dotColor}`} />
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-6 mt-10">
          {skillsData.map((item) => (
            <div
              key={item.category}
              onClick={() => setActiveCategory(item.category)}
              className={`cursor-pointer text-center p-6 bg-white rounded-2xl border-b-4 ${item.borderColor} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`text-3xl font-bold mb-1 ${item.textColor}`}>
                {item.skills.length}+
              </div>
              <div className="text-gray-500 text-sm font-medium">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;