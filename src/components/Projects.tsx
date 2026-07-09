

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
import { GithubIcon, ExternalLinkIcon, MonitorSmartphone } from "lucide-react";
import type { ReactNode } from "react";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiCss3,
  SiOpenai,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";

/* TECHNOLOGY ICON MAP */
const techIcons: Record<string, ReactNode> = {
  React: <SiReact color="#61DAFB" />,
  "Node.js": <SiNodedotjs color="#3C873A" />,
  Express: <SiExpress color="#ffffff" />,
  MongoDB: <SiMongodb color="#47A248" />,
  JavaScript: <SiJavascript color="#F7DF1E" />,
  CSS: <SiCss3 color="#1572B6" />,
  "Tailwind CSS": <SiTailwindcss color="#38BDF8" />,
  OpenAI: <SiOpenai color="#ffffff" />,
  HTML5: <SiHtml5 color="#E34F26" />,
  CSS3: <SiCss3 color="#1572B6" />,
  HTML: <SiHtml5 color="#E34F26" />,
  "Responsive Design": <MonitorSmartphone size={14} className="text-cyan-400" />,
};

/* PROJECT DATA */
const projects = [
  {
    category: "FULL-STACK",
    title: "CampusFix",
    subtitle: "Campus Electrical Issue Management System",
    description:
      "A MERN stack application for reporting and tracking campus electrical issues with authentication and role-based access.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/maheshdhulipudi45/CampusFix-Main",
    live: "https://campus-fix-main.vercel.app/",
  },
  {
  category: "FULL-STACK • EDTECH PLATFORM",
  title: "AcadVault",
  subtitle: "Academic Resource Sharing Platform",
  description:
    "A modern MERN stack platform that enables students to upload, discover, and download academic resources such as notes, previous question papers, lab records, PDFs, and study materials. Features secure JWT authentication, role-based access, advanced search, trending resources, latest uploads, bookmarks, and a responsive user interface designed to simplify academic resource sharing.",
  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Tailwind CSS",
    "Multer"
  ],
  github: "https://github.com/maheshdhulipudi45/Acadvaultsite",
  live: "https://acadvaultsites.vercel.app/",
},
  {
    category: "BUSINESS • CORPORATE WEBSITE",
    title: "SVGK",
    subtitle: "Business & Services Website",
    description:
      "A responsive business website designed to showcase company services, organizational information, and customer-focused solutions. Built with a modern UI and smooth navigation to provide a professional digital presence.",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/maheshdhulipudi45/svgk",
    live: "https://svgk-wuxg.vercel.app/",
  },
  {
    category: "BUSINESS • SWEETS SHOP",
    title: "Sri Bharath Sweets",
    subtitle: "Traditional Sweets Business Website",
    description:
      "A modern business website developed for a traditional sweets shop to showcase products, special sweets, snacks, and business information. Designed to improve online visibility and customer engagement through an attractive and responsive user interface.",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/maheshdhulipudi45/sribharathsweets",
    live: "https://sribharathsweets.vercel.app/",
  },
  {
    category: "BUSINESS • EVENT SERVICES",
    title: "Bharath Events",
    subtitle: "Tent House & Event Rental Platform",
    description:
      "A professional event management and tent house rental website that showcases wedding, party, and event services. Customers can explore tent setups, decorations, seating arrangements, lighting solutions, and contact the business for bookings through a modern and responsive web experience.",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    github: "https://github.com/maheshdhulipudi45/Bharath-Events",
    live: "https://bharath-th.vercel.app/",
  },
  
  {
    category: "AI • FULL-STACK",
    title: "ThumblifyAI",
    subtitle: "AI Thumbnail Generator",
    description:
      "An AI-powered application that generates high-quality YouTube thumbnails using prompts with OpenAI integration and a modern full-stack architecture.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI", "Tailwind CSS"],
    github: "https://github.com/maheshdhulipudi45/Thumblify-AI.git",
    live: "https://thumblify-ai-murex.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-28">

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120 }}
        className="mb-16 text-center"
      >
        <span className="text-sm uppercase tracking-widest text-purple-400 font-semibold">
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

      {/* GRID 2x2 / 3x3 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-10 md:grid-cols-2 items-stretch"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative p-[1.5px] rounded-3xl bg-gradient-to-b from-purple-500/20 to-pink-500/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)] group flex flex-col"
          >
            {/* Inner Content Container */}
            <div className="rounded-[23px] bg-gradient-to-b from-[#150f29] to-[#0c0818] backdrop-blur-xl p-7 flex flex-col h-full">
              <span className="mb-4 inline-block w-fit rounded-full bg-purple-500/10 px-4 py-1 text-xs font-bold text-purple-300 border border-purple-500/20">
                {project.category}
              </span>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-purple-400 mb-4 font-medium">
                {project.subtitle}
              </p>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* TECH ICONS */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {project.tech.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full
                    bg-purple-500/5 border border-purple-500/10 text-xs text-purple-200/90
                    hover:bg-purple-500/25 hover:text-white hover:border-purple-500/30 hover:scale-105 transition-all cursor-default"
                  >
                    {techIcons[tech]}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="mt-auto flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 rounded-xl bg-white/5 border border-white/10 py-2.5 text-sm font-semibold text-white
                  hover:bg-white/10 hover:border-purple-500/30 transition-all inline-flex items-center justify-center gap-2"
                >
                  <GithubIcon size={16} className="text-gray-300" />
                  Code
                </motion.a>

                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, boxShadow: "0px 0px 12px rgba(168,85,247,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 rounded-xl bg-gradient-to-r
                  from-purple-500 to-pink-500 py-2.5 text-sm font-semibold text-white
                  hover:from-purple-600 hover:to-pink-600 transition-all inline-flex items-center justify-center gap-2"
                >
                  <ExternalLinkIcon size={16} />
                  Live
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
