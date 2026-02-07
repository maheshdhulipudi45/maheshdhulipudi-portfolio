// import { motion } from "framer-motion";

// const skillGroups = [
//   {
//     title: "Frontend",
//     skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
//   },
//   {
//     title: "Backend",
//     skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
//   },
//   {
//     title: "Database",
//     skills: ["MongoDB", "MySQL"],
//   },
//   {
//     title: "Tools & Others",
//     skills: ["Git", "GitHub", "VS Code", "Postman"],
//   },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="max-w-6xl mx-auto px-4 py-28">
      
//       {/* Heading */}
//       <motion.div
//         initial={{ y: 40, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ type: "spring", stiffness: 200 }}
//         className="mb-16 text-center"
//       >
//         <span className="text-sm uppercase tracking-widest text-indigo-400">
//           Skills
//         </span>
//         <h2 className="mt-3 text-3xl md:text-4xl font-bold">
//           Technologies I work with
//         </h2>
//         <p className="mt-4 text-gray-400 max-w-xl mx-auto">
//           A practical skill set focused on building real-world, scalable web
//           applications.
//         </p>
//       </motion.div>

//       {/* Skill Cards */}
//       <div className="grid gap-8 md:grid-cols-2">
//         {skillGroups.map((group, i) => (
//           <motion.div
//             key={group.title}
//             initial={{ y: 40, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
//             className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:shadow-xl hover:shadow-indigo-500/10 transition"
//           >
//             <h3 className="text-xl font-semibold mb-6 text-white">
//               {group.title}
//             </h3>

//             <div className="flex flex-wrap gap-3">
//               {group.skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="px-4 py-2 rounded-full text-sm 
//                   bg-white/10 text-gray-200
//                   hover:bg-indigo-500/20 hover:text-white
//                   transition cursor-default"
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
import { Code2, Server, Database, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-28">
      
      {/* Heading */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 180 }}
        className="mb-16 text-center"
      >
        <span className="text-sm uppercase tracking-widest text-purple-400">
          Skills
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
  
    Technical <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500"> Skills
  </span>
</h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Technologies I use to build modern, scalable web applications.
        </p>
      </motion.div>

      {/* SAME ROW GRID */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 180 }}
            className="rounded-3xl border border-purple-500/20 
            bg-gradient-to-b from-[#1a1333] to-[#120c24] 
            backdrop-blur-xl p-6 hover:shadow-xl 
            hover:shadow-purple-600/20 transition"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full 
              bg-gradient-to-tr from-purple-500 to-pink-500">
                <group.icon size={16} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-medium
                  bg-purple-500/10 text-purple-200
                  border border-purple-500/20
                  hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500
                  hover:text-white transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
