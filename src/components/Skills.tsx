
// import { motion } from "framer-motion";
// import { Code2, Server, Database, Wrench } from "lucide-react";

// const skillGroups = [
//   {
//     title: "Frontend",
//     icon: Code2,
//     skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
//   },
//   {
//     title: "Backend",
//     icon: Server,
//     skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
//   },
//   {
//     title: "Database",
//     icon: Database,
//     skills: ["MongoDB", "MySQL"],
//   },
//   {
//     title: "Tools",
//     icon: Wrench,
//     skills: ["Git", "GitHub", "VS Code", "Postman"],
//   },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="max-w-7xl mx-auto px-4 py-28">
      
//       {/* Heading */}
//       <motion.div
//         initial={{ y: 40, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ type: "spring", stiffness: 180 }}
//         className="mb-16 text-center"
//       >
//         <span className="text-sm uppercase tracking-widest text-purple-400">
//           Skills
//         </span>
//         <h2 className="mt-3 text-3xl md:text-4xl font-bold">
  
//     Technical <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500"> Skills
//   </span>
// </h2>

//         <p className="mt-4 text-gray-400 max-w-xl mx-auto">
//           Technologies I use to build modern, scalable web applications.
//         </p>
//       </motion.div>

//       {/* SAME ROW GRID */}
//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//         {skillGroups.map((group, i) => (
//           <motion.div
//             key={group.title}
//             initial={{ y: 40, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1, type: "spring", stiffness: 180 }}
//             className="rounded-3xl border border-purple-500/20 
//             bg-gradient-to-b from-[#1a1333] to-[#120c24] 
//             backdrop-blur-xl p-6 hover:shadow-xl 
//             hover:shadow-purple-600/20 transition"
//           >
//             {/* Header */}
//             <div className="flex items-center gap-3 mb-5">
//               <div className="flex h-9 w-9 items-center justify-center rounded-full 
//               bg-gradient-to-tr from-purple-500 to-pink-500">
//                 <group.icon size={16} className="text-white" />
//               </div>
//               <h3 className="text-lg font-semibold text-white">
//                 {group.title}
//               </h3>
//             </div>

//             {/* Skills */}
//             <div className="flex flex-wrap gap-2">
//               {group.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="px-3 py-1.5 rounded-full text-xs font-medium
//                   bg-purple-500/10 text-purple-200
//                   border border-purple-500/20
//                   hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
//                   hover:text-white transition cursor-default"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiReactrouter,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { Terminal, Monitor, Server, Database, Wrench, MonitorSmartphone, Cpu } from "lucide-react";

/* SKILLS DATA DEFINITIONS */
const skillGroups = [
  {
    title: "Languages",
    icon: Terminal,
    skills: [
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL", icon: Database, color: "#4479A1" },
    ],
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Responsive Web Design", icon: MonitorSmartphone, color: "#38BDF8" },
      { name: "React Router DOM", icon: SiReactrouter, color: "#CA4245" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "REST API Development", icon: Cpu, color: "#A855F7" },
      { name: "JWT Authentication", icon: SiJsonwebtokens, color: "#F00000" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
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

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-28">
      
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120 }}
        className="mb-16 text-center"
      >
        <span className="text-sm uppercase tracking-widest text-purple-400 font-semibold">
          Skills
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
          Technical Skills
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
          Technologies and tools I use to build modern, scalable, and responsive web applications.
        </p>
      </motion.div>

      {/* GRID (Responsive layout matching SaaS and freelance standards) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch"
      >
        {skillGroups.map((group) => {
          const CategoryIcon = group.icon;
          return (
            <motion.div
              key={group.title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative p-[1.5px] rounded-3xl bg-gradient-to-b from-purple-500/20 to-pink-500/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)] group"
            >
              {/* Inner Content Wrapper */}
              <div className="rounded-[23px] bg-gradient-to-b from-[#150f29] to-[#0c0818] backdrop-blur-xl p-6 h-full flex flex-col justify-start">
                
                {/* Card Header: Category Icon & Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300">
                    <CategoryIcon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {group.title}
                  </h3>
                </div>

                {/* Skills Badges List */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group/badge flex items-center gap-2 px-3.5 py-2 rounded-xl
                        bg-white/5 border border-white/10
                        hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                        hover:border-transparent transition-all duration-300 cursor-default"
                      >
                        <SkillIcon
                          size={16}
                          style={{ color: skill.color }}
                          className="group-hover/badge:scale-110 group-hover/badge:rotate-6 transition-all"
                        />
                        <span className="text-xs font-semibold text-gray-200 group-hover/badge:text-white transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
