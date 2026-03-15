import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 w-full bg-brand-white/80 z-50 glass-card"
      data-purpose="main-nav"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center text-brand-cyan font-heading font-bold text-xl">
            K
          </div>
          <span className="font-heading text-xl text-brand-teal  font-bold tracking-wider hidden sm:block">
            KINZA.DEV
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a className="hover:text-brand-cyan transition-colors" href="#about">
            About
          </a>
          <a className="hover:text-brand-cyan transition-colors" href="#skills">
            Stack
          </a>
          <a
            className="hover:text-brand-cyan transition-colors"
            href="#projects"
          >
            Portfolio
          </a>
          <a
            className="px-5 py-2 bg-brand-navy text-white rounded-full hover:bg-brand-teal transition-all"
            href="#contact"
          >
            Contact
          </a>
        </div>

        <button className="md:hidden text-brand-navy">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16m-7 6h7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
