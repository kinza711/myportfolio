import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="hero"
    >
      <div className="blob bg-brand-cyan  w-[500px] h-[500px] top-[-100px] right-[-100px] animate-pulse"></div>
      <div className="blob bg-brand-navy w-[400px] h-[400px] bottom-[-100px] left-[-100px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-[#088395] text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            AVAILABLE FOR REMOTE MERN PROJECTS
          </div>

          <h1 className="text-5xl lg:text-7xl font-heading font-serif font-bold leading-tight mb-6">
            Hi, I'm <span className="text-gradient">Kinza</span>
          </h1>

          <h2 className="text-2xl lg:text-3xl font-semibold text-brand-navy mb-6">
            MERN Stack & React Developer
          </h2>

          <p className="text-xl text-brand-muted mb-8 max-w-xl leading-relaxed">
            I build modern full-stack web applications using MongoDB, Express,
            React, and Node.js. I specialize in creating responsive interfaces,
            interactive animations, and scalable backend systems while
            integrating AI tools and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              className="px-8 py-4 bg-brand-navy text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-brand-navy/20 transition-all flex items-center gap-2 group"
              href="#projects"
            >
              View My Projects
              <svg
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>

            <a
              className="px-8 py-4 border-2 border-brand-navy/10 hover:border-brand-cyan transition-colors font-semibold rounded-lg"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square flex items-center justify-center animate-float">
            <div className="absolute w-40 h-40 rounded-3xl bg-gradient-to-tr from-brand-navy to-brand-cyan rotate-45 opacity-40 blur-sm"></div>

            <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-tr from-brand-navy to-brand-teal shadow-2xl flex items-center justify-center border border-white/20">
              <div className="w-16 h-16 rounded-full border-16 border-dashed border-brand-cyan/50 animate-spin"></div>
            </div>

            <div className="absolute animate-bounce w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center top-20 right-10 border border-brand-cyan/30">
              <span className="text-xs font-bold text-brand-teal">AI</span>
            </div>

            <div className="absolute animate-bounce w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center bottom-20 left-10 border border-brand-navy/30">
              <span className="text-xs font-bold text-brand-navy">MERN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
