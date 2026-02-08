

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

//       {/* HEADING */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ type: "spring", stiffness: 160 }}
//         className="mb-16 text-center"
//       >
//         <span className="text-sm uppercase tracking-widest text-purple-400">
//           Projects
//         </span>

//         <h2 className="mt-3 text-3xl md:text-4xl font-bold">
//           My{" "}
//           <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500">
//             Projects
//           </span>
//         </h2>

//         <p className="mt-4 text-gray-400 max-w-xl mx-auto">
//           A selection of real-world projects showcasing my skills in full-stack
//           and frontend development.
//         </p>
//       </motion.div>

//       {/* PROJECT GRID */}
//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-stretch">
//         {projects.map((project, i) => (
//           <motion.div
//             key={project.title}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover={{ y: -6 }}
//             viewport={{ once: true }}
//             transition={{
//               delay: i * 0.12,
//               type: "spring",
//               stiffness: 160,
//             }}
//             className="group rounded-3xl border border-purple-500/20
//             bg-gradient-to-b from-[#1a1333] to-[#120c24]
//             backdrop-blur-xl p-7
//             shadow-lg hover:shadow-purple-600/25
//             transition flex flex-col h-full"
//           >
//             {/* CATEGORY */}
//             <span className="inline-block mb-4 rounded-full 
//             bg-purple-500/10 px-4 py-1 text-xs 
//             font-semibold text-purple-300">
//               {project.category}
//             </span>

//             {/* TITLE */}
//             <h3 className="text-xl font-semibold text-white mb-1">
//               {project.title}
//             </h3>

//             <p className="text-sm text-purple-300 mb-4">
//               {project.subtitle}
//             </p>

//             {/* MAIN CONTENT (EXPANDS) */}
//             <div className="flex-1">
//               <p className="text-gray-300 text-sm leading-relaxed mb-6 text-justify [hyphens:auto]">
//                 {project.description}
//               </p>

//               {/* TECH STACK */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-3 py-1 rounded-full text-xs
//                     bg-purple-500/10 text-purple-200
//                     border border-purple-500/20"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* ACTION BUTTONS (BOTTOM ALIGNED) */}
//             <div className="flex gap-3 mt-auto">
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
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiCss3,
  SiOpenai,
  SiTailwindcss,
} from "react-icons/si";

/* TECHNOLOGY ICON MAP */
const techIcons: Record<string, JSX.Element> = {
  React: <SiReact color="#61DAFB" />,
  "Node.js": <SiNodedotjs color="#3C873A" />,
  Express: <SiExpress color="#ffffff" />,
  MongoDB: <SiMongodb color="#47A248" />,
  JavaScript: <SiJavascript color="#F7DF1E" />,
  CSS: <SiCss3 color="#1572B6" />,
  "Tailwind CSS": <SiTailwindcss color="#38BDF8" />,
  OpenAI: <SiOpenai color="#ffffff" />,
};

/* PROJECT DATA */
const projects = [
  {
    category: "AI • FULL-STACK",
    title: "ThumblifyAI",
    subtitle: "AI Thumbnail Generator",
    description:
      "An AI-powered application that generates high-quality YouTube thumbnails using prompts. Built with OpenAI integration, responsive UI, and modern full-stack architecture.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI", "Tailwind CSS"],
    github: "https://github.com/maheshdhulipudi45/Thumblify-AI.git",
    live: "https://thumblify-ai-murex.vercel.app/",
  },
  {
    category: "FULL-STACK",
    title: "CampusFix",
    subtitle: "Campus Electrical Issue Management System",
    description:
      "A MERN stack application for reporting and tracking campus electrical issues with JWT authentication and role-based access.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/maheshdhulipudi45/CampusFix-Project.git",
    live: "https://campus-fix-project.vercel.app/",
  },
  {
    category: "FRONTEND • REACT",
    title: "SportsInfo",
    subtitle: "Live Sports Updates Platform",
    description:
      "Frontend application providing real-time sports scores and player statistics using third-party APIs.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/maheshdhulipudi45/SportsInfo.git",
    live: "https://sports-info.vercel.app/",
  },
  {
    category: "FRONTEND",
    title: "RestroPoint",
    subtitle: "Restaurant Website",
    description:
      "A modern restaurant website showcasing menu items, reservations, and services with a clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/maheshdhulipudi45/RestroPointWebsite.git",
    live: "https://restro-point-website.vercel.app/",
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
          Real-world applications built using modern web technologies.
        </p>
      </motion.div>

      {/* GRID → 2 x 2 */}
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 160 }}
            className="group rounded-3xl border border-purple-500/20
            bg-gradient-to-b from-[#1a1333] to-[#120c24]
            backdrop-blur-xl p-7
            shadow-lg hover:shadow-purple-600/25
            transition flex flex-col h-full"
          >
            {/* CATEGORY */}
            <span className="inline-block mb-4 rounded-full
            bg-purple-500/10 px-4 py-1 text-xs font-semibold text-purple-300">
              {project.category}
            </span>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-white mb-1">
              {project.title}
            </h3>

            <p className="text-sm text-purple-300 mb-4">
              {project.subtitle}
            </p>

            {/* CONTENT */}
            <div className="flex-1">
              <p className="text-gray-300 text-sm leading-relaxed mb-6 text-justify">
                {project.description}
              </p>

              {/* TECH ICONS */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full
                    bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200"
                  >
                    {techIcons[tech]}
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                className="flex-1 rounded-lg bg-black
                py-2 text-sm text-white hover:bg-black/80
                transition inline-flex items-center justify-center gap-2"
              >
                <GithubIcon size={16} />
                Code
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="flex-1 rounded-lg
                  bg-gradient-to-r from-purple-500 to-pink-500
                  py-2 text-sm text-white hover:opacity-90
                  transition inline-flex items-center justify-center gap-2"
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
