const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-100" dataPurpose="footer">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-brand-muted">
          © 2026 Kinza Shahzadi. MERN Stack & React Developer.
        </div>

        <div className="flex z-10 gap-8 text-sm font-medium">
          <a className="hover:text-brand-cyan transition-colors" href="#hero">
            Back to top
          </a>
          <a className="hover:text-brand-cyan transition-colors" href="#about">
            About
          </a>
          <a className="hover:text-brand-cyan transition-colors" href="#skills">
            Skills
          </a>
          <a
            className="hover:text-brand-cyan transition-colors"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="hover:text-brand-cyan transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
