import { useState } from "react";
import { motion, Reorder } from "framer-motion";

const initialSkills = {
  frontend: [
    "React.js",
    "Tailwind CSS",
    "GSAP",
    "Locomotive Scroll",
    "Axios",
    "Responsive Design",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "Express-Session",
    "Multer",
    "Nodemailer",
    "Cloudinary",
  ],
  ai: ["Chatbase", "RAG", "Stitch UI"],
};

const Skills = () => {
  const [skills, setSkills] = useState(initialSkills);

  return (
    <section className="py-24 bg-gray-50/50" id="skills">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-heading font-bold mb-16">
          My Digital Toolbox
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="glass-card p-8 rounded-3xl border-b-4 border-b-brand-cyan hover:shadow-xl transition-transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-6 text-brand-cyan">
              Frontend
            </h3>
            <Reorder.Group
              axis="y"
              values={skills.frontend}
              onReorder={(newOrder) =>
                setSkills((prev) => ({ ...prev, frontend: newOrder }))
              }
              className="flex flex-wrap justify-center gap-2"
            >
              {skills.frontend.map((skill) => (
                <Reorder.Item
                  key={skill}
                  value={skill}
                  whileDrag={{ scale: 1.2 }}
                  className="px-3 py-1 bg-gray-100 rounded text-sm font-medium cursor-grab hover:bg-brand-cyan/10"
                >
                  {skill}
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>

          {/* Backend */}
          <div className="glass-card p-8 rounded-3xl border-b-4 border-b-brand-navy hover:shadow-xl transition-transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-6 text-brand-navy">
              Backend & Cloud
            </h3>
            <Reorder.Group
              axis="y"
              values={skills.backend}
              onReorder={(newOrder) =>
                setSkills((prev) => ({ ...prev, backend: newOrder }))
              }
              className="flex flex-wrap justify-center gap-2"
            >
              {skills.backend.map((skill) => (
                <Reorder.Item
                  key={skill}
                  value={skill}
                  whileDrag={{ scale: 1.2 }}
                  className="px-3 py-1 bg-gray-100 rounded text-sm font-medium cursor-grab hover:bg-brand-navy/10"
                >
                  {skill}
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>

          {/* AI / Tools */}
          <div className="glass-card p-8 rounded-3xl border-b-4 border-b-brand-teal hover:shadow-xl transition-transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-6 text-brand-teal">
              AI & Tools
            </h3>
            <Reorder.Group
              axis="y"
              values={skills.ai}
              onReorder={(newOrder) =>
                setSkills((prev) => ({ ...prev, ai: newOrder }))
              }
              className="flex flex-wrap justify-center gap-2"
            >
              {skills.ai.map((skill) => (
                <Reorder.Item
                  key={skill}
                  value={skill}
                  whileDrag={{ scale: 1.2 }}
                  className="px-3 py-1 bg-gray-100 rounded text-sm font-medium cursor-grab  hover:bg-brand-teal/10"
                >
                  {skill}
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
