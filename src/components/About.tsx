// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section id="about" className="max-w-6xl mx-auto px-4 py-28">

//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ type: "spring", stiffness: 160 }}
//         className="mb-16 text-center"
//       >
//         <span className="text-sm uppercase tracking-widest text-purple-400">
//           About Me
//         </span>

//         <h2 className="mt-3 text-3xl md:text-4xl font-bold">
//           Who{" "}
//           <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500">
//             I Am
//           </span>
//         </h2>

//         <p className="mt-4 text-gray-400 max-w-xl mx-auto">
//           A passionate Full Stack Developer who loves building modern,
//           scalable, and user-friendly web applications.
//         </p>
//       </motion.div>

//       {/* Content Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.1, type: "spring", stiffness: 160 }}
//         className="rounded-3xl border border-purple-500/20
//         bg-gradient-to-b from-[#1a1333] to-[#120c24]
//         backdrop-blur-xl p-8 md:p-10
//         hover:shadow-xl hover:shadow-purple-600/20 transition"
//       >
//         <p className="text-gray-300 leading-relaxed text-justify [hyphens:auto]">
//           I’m <span className="text-white font-medium">Mahesh</span>, a Full Stack
//           Developer specializing in the MERN stack. I enjoy turning ideas into
//           real-world applications with clean UI, efficient backend logic, and
//           scalable architecture.
//         </p>

//         <p className="mt-4 text-gray-300 leading-relaxed text-justify [hyphens:auto]">
//           I focus on writing maintainable code, building responsive interfaces,
//           and continuously learning new technologies to improve performance and
//           user experience.
//         </p>

//         {/* Highlights */}
//         <div className="mt-6 flex flex-wrap gap-4 text-sm">
//           {[
//             "MERN Stack",
//             "Clean UI & UX",
//             "Scalable Apps",
//             "Problem Solver",
//           ].map((item) => (
//             <span
//               key={item}
//               className="px-4 py-2 rounded-full
//               bg-purple-500/10 text-purple-200
//               border border-purple-500/20"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-28">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 160 }}
        className="mb-16 text-center"
      >
        <span className="text-sm uppercase tracking-widest text-purple-400">
          About Me
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          Who{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500">
            I Am
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          A passionate Full Stack Developer focused on building scalable,
          efficient, and user-centric web applications.
        </p>
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: "spring", stiffness: 160 }}
        className="rounded-3xl border border-purple-500/20
        bg-gradient-to-b from-[#1a1333] to-[#120c24]
        backdrop-blur-xl p-8 md:p-10
        hover:shadow-xl hover:shadow-purple-600/20 transition"
      >
        {/* Paragraph 1 */}
        <p className="text-gray-300 leading-relaxed text-justify [hyphens:auto]">
          I’m <span className="text-white font-medium">Mahesh Dhulipudi</span>, 
          a Full Stack Developer specializing in the MERN stack, with a strong 
          foundation in building scalable and performance-driven web applications. 
          I transform ideas into fully functional digital solutions by combining 
          intuitive user interfaces with robust backend architecture.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-4 text-gray-300 leading-relaxed text-justify [hyphens:auto]">
          My expertise includes developing RESTful APIs, implementing secure 
          authentication systems, integrating third-party services, and designing 
          responsive front-end experiences. I focus on writing clean, maintainable 
          code while ensuring performance optimization and seamless user interaction.
        </p>

        {/* Paragraph 3 */}
        <p className="mt-4 text-gray-300 leading-relaxed text-justify [hyphens:auto]">
          I continuously explore emerging technologies and modern development 
          practices to enhance product quality and efficiency. My goal is to 
          contribute to impactful projects where technology solves real-world 
          problems through innovation and precision.
        </p>

        {/* Highlights */}
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          {[
            "MERN Stack Development",
            "REST API Design",
            "Responsive UI/UX",
            "Performance Optimization",
            "Authentication & Security",
          ].map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 rounded-full
              bg-purple-500/10 text-purple-200
              border border-purple-500/20
              hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
              hover:text-white transition"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
