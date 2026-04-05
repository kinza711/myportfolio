// import { HiMenu } from "react-icons/hi";
// import Logo from "/logo.png";

// const Navbar = () => {
//   return (
//     <nav
//       className="fixed top-0 w-full bg-brand-white/80 z-50 glass-card"
//       data-purpose="main-nav"
//     >
//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <div className=" bg-brand-navy rounded-full flex items-center justify-center text-brand-cyan font-heading font-bold text-xl">
//             <img src={Logo} alt="logo" className="h-20  w-20" />
//           </div>
//           <span className="font-heading text-xl text-brand-teal font-bold tracking-wider hidden sm:flex items-center gap-1">
//             <span className="inline-block w-2.5 h-2.5 bg-brand-teal rounded-full animate-pulse"></span>
//             DEV
//           </span>
//         </div>
//         <div className="hidden md:flex items-center gap-8 font-medium">
//           <a className="hover:text-brand-cyan transition-colors" href="#about">
//             About
//           </a>
//           <a className="hover:text-brand-cyan transition-colors" href="#skills">
//             Stack
//           </a>
//           <a
//             className="hover:text-brand-cyan transition-colors"
//             href="#projects"
//           >
//             Portfolio
//           </a>
//           <a
//             className="px-5 py-2 bg-brand-navy text-white rounded-full hover:bg-brand-teal transition-all"
//             href="#contact"
//           >
//             Contact
//           </a>
//         </div>

//         <button className="md:hidden text-brand-navy">
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M4 6h16M4 12h16m-7 6h7"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//             ></path>
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-brand-white/80 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="h-12 w-12 bg-brand-navy rounded-full sm:h-16 sm:w-16"
          />

          <span className="font-heading text-lg sm:text-xl text-brand-teal font-bold tracking-wider sm:flex items-center gap-1">
            <span className="inline-block w-2.5 h-2.5 bg-brand-teal rounded-full animate-pulse"></span>
            DEV
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#about" className="hover:text-brand-cyan transition">
            About
          </a>
          <a href="#skills" className="hover:text-brand-cyan transition">
            Stack
          </a>
          <a href="#projects" className="hover:text-brand-cyan transition">
            Portfolio
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-brand-navy text-white rounded-full hover:bg-brand-teal transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-brand-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-6 pb-6 space-y-4">
          <a
            href="#about"
            className="block hover:text-brand-cyan"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="block hover:text-brand-cyan"
            onClick={() => setIsOpen(false)}
          >
            Stack
          </a>
          <a
            href="#projects"
            className="block hover:text-brand-cyan"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 bg-brand-navy text-white rounded-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
