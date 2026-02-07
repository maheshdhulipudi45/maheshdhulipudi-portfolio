// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { GraduationCap, School } from "lucide-react";

// export default function EducationSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section id="education" className="relative py-28 overflow-hidden">
//       {/* Background glow */}
//       <div className="absolute inset-0 -z-10 " />

//       <div className="max-w-6xl mx-auto px-4">
//         {/* Heading */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ type: "spring", stiffness: 200 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm uppercase tracking-widest text-indigo-400">
//             Education
//           </span>
//           <h2 className="mt-3 text-3xl md:text-4xl font-bold">
//             My{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
//               Academic Journey
//             </span>
//           </h2>
//           <p className="mt-4 text-gray-400 max-w-md mx-auto">
//             A strong academic foundation that supports my journey as a Full
//             Stack Developer.
//           </p>
//         </motion.div>

//         {/* Education Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* MCA */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
//             className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
//           >
//             {/* Icon */}
//             <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-lg">
//               <GraduationCap className="size-5 text-white" />
//             </div>

//             <h3 className="mt-6 text-xl font-semibold">
//               Master of Computer Applications (MCA)
//             </h3>
//             <p className="text-sm text-gray-400 mt-1">
//               2024 – 2026
//             </p>

//             <p className="mt-4 text-gray-300">
//               Aditya College of Engineering and Technology, Surampalem
//             </p>

//             <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-300">
//               <span className="px-3 py-1 rounded-full bg-white/10">
//                 CGPA: 7.17
//               </span>
//               <span className="px-3 py-1 rounded-full bg-white/10">
//                 Computer Applications
//               </span>
//             </div>
//           </motion.div>

//           {/* BSc */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//             className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
//           >
//             {/* Icon */}
//             <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-lg">
//               <School className="size-5 text-white" />
//             </div>

//             <h3 className="mt-6 text-xl font-semibold">
//               Bachelor of Science (B.Sc.)
//             </h3>
//             <p className="text-sm text-gray-400 mt-1">
//               2021 – 2024
//             </p>

//             <p className="mt-4 text-gray-300">
//               Aditya Degree College, Amalapuram
//             </p>

//             <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-300">
//               <span className="px-3 py-1 rounded-full bg-white/10">
//                 CGPA: 7.77
//               </span>
//               <span className="px-3 py-1 rounded-full bg-white/10">
//                 Science Stream
//               </span>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="education" className="relative py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 ]" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 180 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-widest text-purple-400">
            Education
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
             Academic {""}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500">
             Journey
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            A solid academic foundation that shaped my problem-solving mindset
            and full-stack development skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative grid gap-12 md:grid-cols-2">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-purple-500/40 to-transparent" />

          {/* MCA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, type: "spring", stiffness: 180 }}
            className="relative rounded-3xl border border-purple-500/20 
            bg-gradient-to-b from-[#1a1333] to-[#120c24] 
            backdrop-blur-xl p-8 hover:shadow-xl 
            hover:shadow-purple-600/20 transition"
          >
            {/* Icon */}
            <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center 
            rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg">
              <GraduationCap className="size-6 text-white" />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-sm text-purple-300 mt-1">
                2024 – 2026
              </p>

              <p className="mt-4 text-gray-300">
                Aditya College of Engineering and Technology, Surampalem
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-200">
                  CGPA: 7.17
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-200">
                  Computer Applications
                </span>
              </div>
            </div>
          </motion.div>

          {/* BSc */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
            className="relative rounded-3xl border border-purple-500/20 
            bg-gradient-to-b from-[#1a1333] to-[#120c24] 
            backdrop-blur-xl p-8 hover:shadow-xl 
            hover:shadow-purple-600/20 transition"
          >
            {/* Icon */}
            <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center 
            rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg">
              <School className="size-6 text-white" />
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white">
                Bachelor of Science (B.Sc.)
              </h3>
              <p className="text-sm text-purple-300 mt-1">
                2021 – 2024
              </p>

              <p className="mt-4 text-gray-300">
                Aditya Degree College, Amalapuram
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-200">
                  CGPA: 7.77
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-200">
                  Science Stream
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
