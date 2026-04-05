import { motion } from "framer-motion";
import { useRef } from "react";
import { FaWordpressSimple } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { BsRocketTakeoff } from "react-icons/bs";
import { VscRobot } from "react-icons/vsc";

const servicesData = [
  {
    icon: <FaWordpressSimple />,
    title: "WordPress Development",
    description:
      "Custom WordPress websites with responsive design, plugin integration, and client-ready delivery. Fast, clean, and easy to manage.",
    tags: [
      "WordPress",
      "E-commerce",
      "Elementor Pro",
      "Responsive",
      "Custom Themes",
    ],
    color: "border-b-[#088395]",
    textColor: "text-[#088395]",
    bgColor: "bg-[#088395]/5",
  },
  {
    icon: <GrReactjs />,
    title: "React Development",
    description:
      "Modern, fast, and interactive web interfaces built with React.js and Tailwind CSS. Pixel-perfect designs with smooth animations.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "Landing Pages",
      "Poerfolio Web",
      "Framer Motion",
    ],
    color: "border-b-[#0a2342]",
    textColor: "text-[#0a2342]",
    bgColor: "bg-[#0a2342]/5",
  },
  {
    icon: <BsRocketTakeoff />,
    title: "Full Stack Development",
    description:
      "End-to-end web applications using MERN stack. From database design to REST APIs to responsive frontend — fully deployed and production ready.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    color: "border-b-[#0e7490]",
    textColor: "text-[#0e7490]",
    bgColor: "bg-[#0e7490]/5",
  },
  {
    icon: <VscRobot />,
    title: "AI Integration",
    description:
      "Integrate powerful AI features into your web app. Custom chatbots, OpenAI API integration, RAG-based assistants, and smart automation.",
    tags: ["OpenAI API", "Chatbase", "RAG", "Chatbot"],
    color: "border-b-[#088395]",
    textColor: "text-[#088395]",
    bgColor: "bg-[#088395]/5",
  },
];

// Duplicate for infinite loop
const doubled = [...servicesData, ...servicesData];

const ServiceCard = ({ service }) => (
  <div
    className={`min-w-[320px] max-w-[320px] p-8 rounded-3xl border border-gray-100 border-b-4 ${service.color} shadow-sm bg-white mx-4 hover:shadow-xl transition-shadow duration-300 group`}
  >
    <div
      className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center text-2xl mb-6`}
    >
      {service.icon}
    </div>
    <h3 className={`text-xl font-bold mb-3 ${service.textColor}`}>
      {service.title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">
      {service.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {service.tags.map((tag) => (
        <span
          key={tag}
          className={`px-3 py-1 rounded-full text-xs font-semibold ${service.bgColor} ${service.textColor}`}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Services = () => {
  const trackRef = useRef(null);

  return (
    <section className="py-24 bg-gray-50/50 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Offer</h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          From simple websites to AI-powered full stack applications — I build
          it all.
        </p>
      </div>

      {/* Sliding Track */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => {
          if (trackRef.current) {
            trackRef.current.style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={() => {
          if (trackRef.current) {
            trackRef.current.style.animationPlayState = "running";
          }
        }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex"
          style={{
            animation: "scrollLeft 20s linear infinite",
          }}
        >
          {doubled.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* Inline keyframe */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Services;
