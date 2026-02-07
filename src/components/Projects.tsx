


// import { motion } from "framer-motion";
// import { GithubIcon, ExternalLinkIcon } from "lucide-react";

// const projects = [
//   {
//     category: "FULL-STACK",
//     title: "CampusFix",
//     subtitle: "Campus Electrical Issue Management System",
//     description:
//       "Full-stack web application for reporting and tracking campus electrical issues. Built with MERN stack featuring JWT authentication, RESTful APIs, and MongoDB integration with responsive React.js UI.",
//     tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
//     github: "https://github.com/yourusername/campusfix",
//     live: "https://github.com/yourusername/restropoint",
//   },
//   {
//     category: "FRONTEND • REACTJS",
//     title: "SportsInfo",
//     subtitle: "Sports Updates Website",
//     description:
//       "Frontend application providing live scores, player statistics, and sports updates. Integrated third-party sports API for real-time match data with responsive design and advanced search & filter features.",
//     tech: ["React.js", "CSS3", "REST APIs", "Responsive Design"],
//     github: "https://github.com/yourusername/sportsinfo",
//     live: "https://github.com/yourusername/restropoint",
//   },
//   {
//     category: "FRONTEND",
//     title: "RestroPoint",
//     subtitle: "Restaurant Website",
//     description:
//       "A visually appealing restaurant website to showcase menu items, reservations, and services. Developed using modern frontend technologies with responsive and user-friendly UI.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     github: "https://github.com/yourusername/restropoint",
//     live: "https://github.com/yourusername/restropoint",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="max-w-6xl mx-auto px-4 py-28">
      
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ type: "spring", stiffness: 200 }}
//         className="mb-16 text-center"
//       >
//         <span className="text-sm uppercase tracking-widest text-indigo-400">
//           Projects
//         </span>
//         <h2 className="mt-3 text-3xl md:text-4xl font-bold">
//           Featured Work
//         </h2>
//         <p className="mt-4 text-gray-400 max-w-xl mx-auto">
//           A selection of projects showcasing my skills in full-stack and frontend
//           development.
//         </p>
//       </motion.div>

//       {/* Cards */}
//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, i) => (
//           <motion.div
//             key={project.title}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
//             className="rounded-3xl border border-purple-500/20 
//             bg-gradient-to-b from-[#1a1333] to-[#120c24] 
//             p-7 backdrop-blur-xl hover:shadow-xl 
//             hover:shadow-purple-600/20 transition"
//           >
//             {/* Category Badge */}
//             <span className="inline-block mb-4 rounded-full 
//             bg-purple-500/10 px-4 py-1 text-xs 
//             font-semibold text-purple-300">
//               {project.category}
//             </span>

//             {/* Title */}
//             <h3 className="text-xl font-semibold text-white mb-1">
//               {project.title}
//             </h3>

//             <p className="text-sm text-purple-300 mb-4">
//               {project.subtitle}
//             </p>

//             {/* Description */}
//             <p className="text-gray-300 text-sm leading-relaxed mb-6 text-justify [hyphens:auto]">

//               {project.description}
//             </p>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {project.tech.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 rounded-full text-xs 
//                   bg-purple-500/10 text-purple-200"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Actions */}
//             <div className="flex gap-3">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 className="flex-1 rounded-lg bg-black 
//                 py-2 text-sm text-center text-white 
//                 hover:bg-black/80 transition inline-flex 
//                 items-center justify-center gap-2"
//               >
//                 <GithubIcon size={16} />
//                 View Code
//               </a>

//               {project.live && (
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   className="flex-1 rounded-lg 
//                   bg-indigo-600 py-2 text-sm 
//                   text-center text-white 
//                   hover:bg-indigo-500 transition 
//                   inline-flex items-center justify-center gap-2"
//                 >
//                   <ExternalLinkIcon size={16} />
//                   Live Demo
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import { motion } from "framer-motion";
// import { GithubIcon, ExternalLinkIcon } from "lucide-react";

// const projects = [
//   {
//     category: "FULL-STACK",
//     title: "CampusFix",
//     subtitle: "Campus Electrical Issue Management System",
//     description:
//       "A full-stack MERN application for reporting and tracking campus electrical issues, featuring JWT authentication, RESTful APIs, and MongoDB with a responsive React UI.",
//     tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
//     github: "https://github.com/yourusername/campusfix",
//     live: "https://github.com/yourusername/restropoint",
//   },
//   {
//     category: "FRONTEND • REACT",
//     title: "SportsInfo",
//     subtitle: "Sports Updates Website",
//     description:
//       "A frontend application delivering live scores and player statistics using third-party sports APIs with a responsive and intuitive UI.",
//     tech: ["React.js", "CSS3", "REST APIs", "Responsive Design"],
//     github: "https://github.com/yourusername/sportsinfo",
//     live: "https://github.com/yourusername/restropoint",
//   },
//   {
//     category: "FRONTEND",
//     title: "RestroPoint",
//     subtitle: "Restaurant Website",
//     description:
//       "A modern restaurant website showcasing menus, services, and reservations with a clean, responsive user interface.",
//     tech: ["HTML", "CSS", "JavaScript"],
//     github: "https://github.com/yourusername/restropoint",
//     live: "https://github.com/yourusername/restropoint",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="max-w-6xl mx-auto px-4 py-28">

//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ type: "spring", stiffness: 180 }}
//         className="mb-16 text-center"
//       >
//         <span className="text-sm uppercase tracking-widest text-purple-400">
//           Projects
//         </span>

//        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
//   My{" "}
//   <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500">
//     Projects
//   </span>
// </h2>


//         <p className="mt-4 text-gray-400 max-w-xl mx-auto">
//           A selection of real-world projects showcasing my skills in full-stack
//           and frontend development.
//         </p>
//       </motion.div>

//       {/* Project Cards */}
//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, i) => (
//           <motion.div
//             key={project.title}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1, type: "spring", stiffness: 180 }}
//             className="group rounded-3xl border border-purple-500/20 
//             bg-gradient-to-b from-[#1a1333] to-[#120c24] 
//             p-7 backdrop-blur-xl 
//             hover:-translate-y-1 hover:shadow-xl 
//             hover:shadow-purple-600/20 transition"
//           >
//             {/* Category */}
//             <span className="inline-block mb-4 rounded-full 
//             bg-purple-500/10 px-4 py-1 text-xs 
//             font-semibold text-purple-300">
//               {project.category}
//             </span>

//             {/* Title */}
//             <h3 className="text-xl font-semibold text-white mb-1">
//               {project.title}
//             </h3>

//             <p className="text-sm text-purple-300 mb-4">
//               {project.subtitle}
//             </p>

//             {/* Description */}
//             <p className="text-gray-300 text-sm leading-relaxed mb-6 text-justify [hyphens:auto]">
//               {project.description}
//             </p>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {project.tech.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 rounded-full text-xs 
//                   bg-purple-500/10 text-purple-200
//                   border border-purple-500/20"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Actions */}
//             <div className="flex gap-3">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1 rounded-lg bg-black 
//                 py-2 text-sm text-white 
//                 hover:bg-black/80 transition 
//                 inline-flex items-center justify-center gap-2"
//               >
//                 <GithubIcon size={16} />
//                 Code
//               </a>

//               {project.live && (
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 rounded-lg 
//                   bg-gradient-to-r from-purple-500 to-pink-500 
//                   py-2 text-sm text-white 
//                   hover:opacity-90 transition 
//                   inline-flex items-center justify-center gap-2"
//                 >
//                   <ExternalLinkIcon size={16} />
//                   Live
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

const projects = [
  {
    category: "FULL-STACK",
    title: "CampusFix",
    subtitle: "Campus Electrical Issue Management System",
    description:
      "A full-stack MERN application for reporting and tracking campus electrical issues, featuring JWT authentication, RESTful APIs, and MongoDB with a responsive React UI.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/yourusername/campusfix",
    live: "https://github.com/yourusername/restropoint",
  },
  {
    category: "FRONTEND • REACT",
    title: "SportsInfo",
    subtitle: "Sports Updates Website",
    description:
      "A frontend application delivering live scores and player statistics using third-party sports APIs with a responsive and intuitive UI.",
    tech: ["React.js", "CSS3", "REST APIs", "Responsive Design"],
    github: "https://github.com/yourusername/sportsinfo",
    live: "https://github.com/yourusername/restropoint",
  },
  {
    category: "FRONTEND",
    title: "RestroPoint",
    subtitle: "Restaurant Website",
    description:
      "A modern restaurant website showcasing menus, services, and reservations with a clean, responsive user interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/restropoint",
    live: "https://github.com/yourusername/restropoint",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-28">

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 160 }}
        className="mb-16 text-center"
      >
        <span className="text-sm uppercase tracking-widest text-purple-400">
          Projects
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          My{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500">
            Projects
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          A selection of real-world projects showcasing my skills in full-stack
          and frontend development.
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.12,
              type: "spring",
              stiffness: 160,
            }}
            className="group rounded-3xl border border-purple-500/20
            bg-gradient-to-b from-[#1a1333] to-[#120c24]
            backdrop-blur-xl p-7
            shadow-lg hover:shadow-purple-600/25
            transition flex flex-col h-full"
          >
            {/* CATEGORY */}
            <span className="inline-block mb-4 rounded-full 
            bg-purple-500/10 px-4 py-1 text-xs 
            font-semibold text-purple-300">
              {project.category}
            </span>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-white mb-1">
              {project.title}
            </h3>

            <p className="text-sm text-purple-300 mb-4">
              {project.subtitle}
            </p>

            {/* MAIN CONTENT (EXPANDS) */}
            <div className="flex-1">
              <p className="text-gray-300 text-sm leading-relaxed mb-6 text-justify [hyphens:auto]">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs
                    bg-purple-500/10 text-purple-200
                    border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS (BOTTOM ALIGNED) */}
            <div className="flex gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg bg-black
                py-2 text-sm text-white
                hover:bg-black/80 transition
                inline-flex items-center justify-center gap-2"
              >
                <GithubIcon size={16} />
                Code
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg
                  bg-gradient-to-r from-purple-500 to-pink-500
                  py-2 text-sm text-white
                  hover:opacity-90 transition
                  inline-flex items-center justify-center gap-2"
                >
                  <ExternalLinkIcon size={16} />
                  Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
