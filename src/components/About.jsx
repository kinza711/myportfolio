const About = () => {
  return (
    <section className="py-24 bg-gray-50/50" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-44 h-44 bg-brand-cyan/20 rounded-full z-0 animate-pulse"></div>

              <h2 className="text-4xl font-heading font-bold mb-8 relative z-10">
                Building Modern <br />
                Web Applications
              </h2>
            </div>

            <div className="space-y-6 text-lg text-brand-muted leading-relaxed">
              <p>
                I am a{" "}
                <span className="text-brand-navy font-semibold">
                  MERN Stack Developer
                </span>{" "}
                passionate about building modern web applications that combine
                clean UI, scalable backend systems, and real-world
                functionality. My work focuses on creating responsive interfaces
                and seamless user experiences using React, Tailwind CSS, and
                modern JavaScript.
              </p>

              <p>
                I have experience developing full-stack projects including
                learning management systems, job portals, and task management
                applications using MongoDB, Express.js, React.js, and Node.js. I
                also enjoy enhancing applications with interactive animations
                using GSAP and integrating AI tools such as custom chatbots
                based on the RAG concept.
              </p>

              <p>
                I enjoy learning new technologies, solving real-world problems,
                and continuously improving my development skills while building
                scalable and user-friendly web applications.
              </p>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-heading font-bold text-brand-teal"></h3>
              <p className="text-3xl font-bold uppercase tracking-widest text-brand-teal">
                Full-Stack Projects
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center mt-8">
              <h3 className="text-3xl font-heading font-bold text-brand-teal">
                MERN
              </h3>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-muted">
                Core Stack
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-heading font-bold text-brand-teal">
                React
              </h3>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-muted">
                Frontend Focus
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center mt-8">
              <h3 className="text-3xl font-heading font-bold text-brand-teal">
                AI
              </h3>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-muted">
                Chatbot Integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
