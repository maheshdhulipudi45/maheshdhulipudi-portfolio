
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
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";

/* BRAND COLORS */
const iconColors: Record<string, string> = {
  React: "#61DAFB",
  JavaScript: "#F7DF1E",
  HTML: "#E34F26",
  CSS: "#1572B6",
  "Tailwind CSS": "#38BDF8",
  "Node.js": "#339933",
  "Express.js": "#ffffff",
  "JWT Auth": "#F00000",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  Git: "#F05032",
  GitHub: "#ffffff",
  Postman: "#FF6C37",
  "VS Code": "#007ACC",
  Java: "#ED8B00",
};

/* SKILLS DATA */
const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "Java", icon: FaJava }, // ✅ FIXED
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscCode },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-28">
      
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 180 }}
        className="mb-16 text-center"
      >
        <span className="text-sm uppercase tracking-widest text-purple-400">
          Skills
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          Technical{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500">
            Skills
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Technologies I use to build modern, scalable web applications.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 180 }}
            className="rounded-3xl border border-purple-500/20
            bg-gradient-to-b from-[#1a1333] to-[#120c24]
            backdrop-blur-xl p-6 hover:shadow-xl
            hover:shadow-purple-600/20 transition"
          >
            <h3 className="text-lg font-semibold text-white mb-5">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 px-3 py-2 rounded-full
                    bg-white/5 border border-white/10
                    hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                    hover:border-transparent transition"
                  >
                    <Icon
                      size={16}
                      style={{ color: iconColors[skill.name] }}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-medium text-gray-200 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
