

//   import {
//   ArrowRightIcon,
//   DownloadIcon,
//   CheckIcon,
// } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center overflow-hidden"
//     >
//       {/* Background gradient */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]" />

//       <div className="max-w-6xl mx-auto px-4 pt-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT CONTENT */}
//         <div>
//           {/* Top small text */}
//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", stiffness: 180 }}
//             className="text-xs tracking-widest text-purple-400 mb-4 uppercase"
//           >
//             Welcome to my portfolio
//           </motion.p>

//           {/* Heading */}
//           <motion.h1
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1, type: "spring", stiffness: 180 }}
//             className="text-4xl md:text-5xl font-bold leading-tight mb-3"
//           >
//             Hi, I’m{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
//               Mahesh
//             </span>
//           </motion.h1>

//           {/* Role */}
//           <motion.h2
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
//             className="text-lg md:text-xl font-semibold text-pink-400 mb-6"
//           >
//             Full Stack Developer
//           </motion.h2>

//           {/* Description */}
//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
//             className="text-gray-300 max-w-lg mb-8"
//           >
//             Crafting modern, responsive, and scalable web applications using the
//             MERN stack. Passionate about clean code and exceptional user
//             experiences.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, type: "spring", stiffness: 180 }}
//             className="flex flex-col sm:flex-row gap-4"
//           >
//             <a
//               href="/Mahesh_Resume.pdf"
//               download
//               className="inline-flex items-center justify-center gap-2 rounded-full 
//               bg-gradient-to-r from-purple-500 to-pink-500 
//               px-7 py-3 text-sm font-medium text-white shadow-lg hover:opacity-90 transition"
//             >
//               <DownloadIcon size={16} />
//               Download Resume
//             </a>

//             <a
//               href="#contact"
//               className="inline-flex items-center justify-center gap-2 rounded-full 
//               border border-white/15 bg-white/5 px-7 py-3 text-sm text-white 
//               backdrop-blur hover:bg-white/10 transition"
//             >
//               Contact Me
//               <ArrowRightIcon size={16} />
//             </a>
//           </motion.div>

//           {/* Highlights */}
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, type: "spring", stiffness: 180 }}
//             className="mt-10 flex gap-6 text-sm text-gray-300"
//           >
//             <div className="flex items-center gap-2">
//               <CheckIcon size={16} className="text-green-400" />
//               MERN Stack
//             </div>
//             <div className="flex items-center gap-2">
//               <CheckIcon size={16} className="text-green-400" />
//               Scalable Apps
//             </div>
//           </motion.div>
//         </div>

//         {/* RIGHT PROFILE IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, type: "spring", stiffness: 180 }}
//           className="relative flex justify-center"
//         >
//           {/* Glow ring */}
//           <div className="relative">
//             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-xl opacity-70" />

//             {/* Image wrapper */}
//             <div className="relative rounded-full p-1 bg-gradient-to-tr from-purple-500 to-pink-500">
//               <img
//                 src="/mahesh.png"   // 🔴 replace with your image path
//                 alt="Mahesh"
//                 className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover bg-black"
//               />
//             </div>

//             {/* Floating dots */}
//             <span className="absolute -top-4 right-6 w-4 h-4 rounded-full bg-purple-500" />
//             <span className="absolute bottom-8 -left-6 w-3 h-3 rounded-full bg-pink-500" />
//             <span className="absolute top-1/2 -right-8 w-2.5 h-2.5 rounded-full bg-cyan-400" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import {
  ArrowRightIcon,
  DownloadIcon,
} from "lucide-react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-4 pt-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* 🔥 IMAGE FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative flex justify-center md:order-2"
        >
          <div className="relative">

            {/* 🔄 Rotating gradient border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute inset-0 rounded-full 
              bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 blur-xl opacity-60"
            />

            {/* Floating image wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="relative rounded-full p-1.5 bg-gradient-to-tr from-purple-500 to-pink-500 shadow-2xl"
            >
              <img
                src="/mahesh.png" // 🔴 your professional image
                alt="Mahesh Dhulipudi"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover bg-black relative z-10"
              />
            </motion.div>

            {/* 🔵 Floating dots with 2D motion and glow */}
            <motion.span
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 right-6 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
            />

            <motion.span
              animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-6 -left-6 w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]"
            />

            <motion.span
              animate={{ x: [0, 12, 0], y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-1/2 -right-8 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="md:order-1 text-center md:text-left">

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="text-xs tracking-widest text-purple-400 mb-4 uppercase font-semibold"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight"
          >
            Hi, I’m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 font-extrabold">
              Mahesh Dhulipudi
            </span>
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, type: "spring", stiffness: 120 }}
            className="text-lg md:text-2xl font-bold tracking-tight mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
          >
            MERN Stack Developer & Freelance Web Developer
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-gray-300 max-w-lg mb-8 mx-auto md:mx-0 text-base md:text-[17px] leading-relaxed font-normal"
          >
            Passionate about building modern, responsive, and scalable web applications. I specialize in React.js, Node.js, Express.js, MongoDB, JavaScript, Java, and SQL, helping businesses and individuals transform ideas into digital solutions.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, type: "spring", stiffness: 120 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="/maheshdhulipudi_fullstack.pdf"
              download
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(168,85,247,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-full 
              bg-gradient-to-r from-purple-500 to-pink-500 
              px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all"
            >
              <DownloadIcon size={16} />
              Download Resume
            </motion.a>

            <motion.a
              href="tel:+917658956116"
              whileHover={{ scale: 1.05, border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-full 
              border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white 
              backdrop-blur transition-all"
            >
              <Phone size={16} className="text-pink-400" />
              Contact Me
              <ArrowRightIcon size={16} />
            </motion.a>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex gap-6 text-sm text-gray-300 justify-center md:justify-start"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
}
