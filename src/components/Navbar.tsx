// import { MenuIcon, XIcon } from 'lucide-react';
// import { PrimaryButton } from './Buttons';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const navLinks = [
//         { name: 'Home', href: '/#home' },
//         { name: 'About', href: '/#about' },
//         { name: 'Skills', href: '/#skills' },
//         { name: 'Projects', href: '/#projects' },
//         { name: 'Contact', href: '/#contact' },
//     ];

//     return (
//         <motion.nav
//             className='fixed top-5 left-0 right-0 z-50 px-4'
//             initial={{ y: -100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
//         >
//             <div className='max-w-6xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3'>
                
//                 {/* LOGO / NAME */}
//                 <a href='/#home' className="flex items-center gap-2">
//                     <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
//                         MD
//                     </div>
//                     <span className="text-sm font-semibold text-white hidden sm:block">
//                         Mahesh
//                     </span>
//                 </a>

//                 {/* DESKTOP LINKS */}
//                 <div className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-300'>
//                     {navLinks.map((link) => (
//                         <a
//                             href={link.href}
//                             key={link.name}
//                             className="hover:text-white transition"
//                         >
//                             {link.name}
//                         </a>
//                     ))}
//                 </div>

//                 {/* DESKTOP CTA */}
//                 <div className='hidden md:flex items-center gap-3'>
//                     <PrimaryButton>
//                     <a
//                         href="/Mahesh_Resume.pdf"
//                         download
//                         className='text-sm font-medium text-gray-300 hover:text-white transition'
//                     >
//                         Resume
//                     </a>
//                     </PrimaryButton>
//                     {/* <PrimaryButton className='max-sm:text-xs hidden sm:inline-block'>
//                         Hire Me
//                     </PrimaryButton> */}
//                 </div>

//                 {/* MOBILE TOGGLE */}
//                 <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
//                     <MenuIcon className='size-6' />
//                 </button>
//             </div>

//             {/* MOBILE MENU */}
//             <div
//                 className={`flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 ${
//                     isOpen ? "translate-x-0" : "translate-x-full"
//                 }`}
//             >
//                 {navLinks.map((link) => (
//                     <a
//                         key={link.name}
//                         href={link.href}
//                         onClick={() => setIsOpen(false)}
//                     >
//                         {link.name}
//                     </a>
//                 ))}

// <PrimaryButton>
//                 <a
//                     href="/Mahesh_Resume.pdf"
//                     download
//                     onClick={() => setIsOpen(false)}
//                     className='font-medium text-gray-300 hover:text-white transition'
//                 >
//                     Download Resume
//                 </a>
//                 </PrimaryButton>

//                 {/* <PrimaryButton onClick={() => setIsOpen(false)}>
//                     Hire Me
//                 </PrimaryButton> */}

//                 <button
//                     onClick={() => setIsOpen(false)}
//                     className="rounded-md bg-white p-2 text-gray-800 ring-white active:ring-2"
//                 >
//                     <XIcon />
//                 </button>
//             </div>
//         </motion.nav>
//     );
// }


import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButton } from "./Buttons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <motion.nav
      className="fixed top-5 left-0 right-0 z-50 px-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      {/* NAV BAR */}
      <div
        className="max-w-6xl mx-auto flex items-center justify-between
        rounded-2xl border border-purple-500/20
        bg-black/50 backdrop-blur-xl px-4 py-3"
      >
        {/* LOGO */}
        <a href="/#home" className="flex items-center gap-2">
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center
            bg-gradient-to-tr from-purple-500 to-pink-500
            text-xs font-bold text-white shadow-lg"
          >
            MD
          </div>
          <span className="hidden sm:block text-sm font-semibold text-white">
            Mahesh
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative hover:text-white transition
              after:absolute after:-bottom-1 after:left-0 after:h-[2px]
              after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500
              hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-3">
          <PrimaryButton>
            <a href="/maheshdhulipudi_fullstack.pdf" download>
              Resume
            </a>
          </PrimaryButton>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
          <MenuIcon className="size-6" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl
            flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium text-gray-300 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}

            <PrimaryButton onClick={() => setIsOpen(false)}>
              <a href="/Mahesh_Resume.pdf" download>
                Download Resume
              </a>
            </PrimaryButton>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-full bg-white p-3 text-black"
            >
              <XIcon />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
