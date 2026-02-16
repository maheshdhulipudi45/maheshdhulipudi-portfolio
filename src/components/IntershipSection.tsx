// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

// export default function InternshipSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section id="experience" className="relative py-28 overflow-hidden">
//       {/* Background glow */}
//       <div className="absolute inset-0 -z-10 ]" />

//       <div ref={ref} className="max-w-6xl mx-auto px-4">
        
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ type: "spring", stiffness: 180 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm uppercase tracking-widest text-purple-400">
//             Experience
//           </span>
//           <h2 className="mt-3 text-3xl md:text-4xl font-bold">
//             Internship{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
//               Experience
//             </span>
//           </h2>
//           <p className="mt-4 text-gray-400 max-w-md mx-auto">
//             Hands-on industry experience working with real-world full stack
//             applications and development workflows.
//           </p>
//         </motion.div>

//         {/* Experience Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
//           className="relative rounded-3xl border border-purple-500/20 
//           bg-gradient-to-b from-[#1a1333] to-[#120c24] 
//           backdrop-blur-xl p-8 md:p-10 shadow-xl shadow-purple-600/10"
//         >
//           {/* Icon */}
//           <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full 
//           bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg">
//             <Briefcase className="text-white" size={22} />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
            
//             {/* Left */}
//             <div>
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 Full Stack Development Intern
//               </h3>

//               <p className="text-purple-300 font-medium mb-4">
//                 Technical Hub
//               </p>

//               <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
//                 <div className="flex items-center gap-2">
//                   <Calendar size={14} />
//                   May 2025 – Jun 2025
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <MapPin size={14} />
//                   Andhra Pradesh, India
//                 </div>
//               </div>

//               <p className="text-gray-300 leading-relaxed max-w-md">
//                 Worked on real-world MERN stack applications, collaborating with
//                 a development team to design, build, and enhance scalable web
//                 solutions following industry best practices.
//               </p>
//             </div>

//             {/* Right */}
//             <div>
//               <h4 className="text-sm uppercase tracking-widest text-purple-400 mb-4">
//                 Key Contributions
//               </h4>

//               <ul className="space-y-4 text-gray-300 text-sm">
//                 <li className="flex gap-3">
//                   <CheckCircle size={16} className="text-green-400 mt-0.5" />
//                   Built and enhanced full stack features using MERN stack
//                 </li>
//                 <li className="flex gap-3">
//                   <CheckCircle size={16} className="text-green-400 mt-0.5" />
//                   Collaborated with team following SDLC practices
//                 </li>
//                 <li className="flex gap-3">
//                   <CheckCircle size={16} className="text-green-400 mt-0.5" />
//                   Assisted in debugging, testing, and performance improvements
//                 </li>
//                 <li className="flex gap-3">
//                   <CheckCircle size={16} className="text-green-400 mt-0.5" />
//                   Gained hands-on experience with real project workflows
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

// export default function InternshipSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section id="experience" className="relative py-28 overflow-hidden">
//       <div ref={ref} className="max-w-6xl mx-auto px-4">

//         {/* HEADING */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ type: "spring", stiffness: 160 }}
//           className="text-center mb-16"
//         >
//           <span className="text-sm uppercase tracking-widest text-purple-400">
//             Experience
//           </span>

//           <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
//             Internship{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
//               Experience
//             </span>
//           </h2>

//           <p className="mt-4 text-gray-400 max-w-md mx-auto">
//             Industry exposure through real-world full stack development projects.
//           </p>
//         </motion.div>

//         {/* EXPERIENCE CARD */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.15, type: "spring", stiffness: 160 }}
//           className="relative rounded-3xl 
//           border border-white/10 
//           backdrop-blur-lg 
//           p-8 md:p-12 
//           hover:border-purple-400/40
//           transition-all duration-300"
//         >
//           {/* Floating Icon */}
//           <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full 
//           bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg">
//             <Briefcase className="text-white" size={22} />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">

//             {/* LEFT SIDE */}
//             <div>
//               <h3 className="text-2xl font-semibold text-white mb-2">
//                 Full Stack Development Intern
//               </h3>

//               <p className="text-purple-300 font-medium mb-5">
//                 Technical Hub Pvt Ltd
//               </p>

//               <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-6">
//                 <div className="flex items-center gap-2">
//                   <Calendar size={15} />
//                   June 02, 2025 – July 28, 2025
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <MapPin size={15} />
//                   Andhra Pradesh, India
//                 </div>
//               </div>

//               <p className="text-gray-300 leading-relaxed">
//                 Successfully completed a summer internship in Full Stack
//                 Development. Worked on modern web applications using the MERN
//                 stack and built a project titled{" "}
//                 <span className="text-purple-400 font-medium">
//                   Campus Fix
//                 </span>{" "}
//                 demonstrating strong implementation of practical concepts.
//               </p>
//             </div>

//             {/* RIGHT SIDE */}
//             <div>
//               <h4 className="text-sm uppercase tracking-widest text-purple-400 mb-6">
//                 Technologies & Contributions
//               </h4>

//               <ul className="space-y-4 text-gray-300 text-sm">
//                 <li className="flex gap-3">
//                   <CheckCircle size={16} className="text-green-400 mt-1" />
//                   Developed frontend using HTML, CSS & JavaScript
//                 </li>

//                 <li className="flex gap-3">
//                   <CheckCircle size={16} className="text-green-400 mt-1" />
//                   Built interactive UI components with ReactJS
//                 </li>

//                 <li className="flex gap-3">
//                   <CheckCircle size={16} className="text-green-400 mt-1" />
//                   Implemented backend APIs using NodeJS & Express
//                 </li>

//                 <li className="flex gap-3">
//                   <CheckCircle size={16} className="text-green-400 mt-1" />
//                   Managed data using MongoDB database
//                 </li>

//                 <li className="flex gap-3">
//                   <CheckCircle size={16} className="text-green-400 mt-1" />
//                   Followed real-world project workflow and SDLC practices
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, X } from "lucide-react";

const internships = [
  {
    role: "Full Stack Development Intern",
    company: "Technical Hub Pvt Ltd",
    duration: "June 02, 2025 – July 28, 2025",
    location: "Andhra Pradesh, India",
    description:
      "Worked on MERN stack applications and built a project titled Campus Fix implementing real-world development practices.",
    image: "/thubps.jpg",
  },
  {
    role: "Web Development Intern (Virtual)",
    company: "ApexPlanet Software Pvt Ltd",
    duration: "May 01, 2025 – June 15, 2025",
    location: "Virtual Internship",
    description:
      "Completed a virtual internship in Web Development with HTML, CSS, and JavaScript, gaining strong frontend development experience.",
    image: "/Appex.jpg",
  },
];

export default function InternshipSection() {
  const [active, setActive] = useState<any>(null);

  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Internship  {""}
            
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500">
            Experience
            </span>
          </h2>
          <p className="mt-3 text-gray-400 max-w-md mx-auto text-sm">
            Real-world experience through industry internships.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 justify-items-center">
          {internships.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onClick={() => setActive(item)}
              className="cursor-pointer w-full max-w-[420px]
              border border-white/10
              rounded-2xl
              p-6
              hover:border-purple-400/40
              transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full 
                bg-gradient-to-tr from-purple-500 to-pink-500">
                  <Briefcase size={18} className="text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-purple-400 text-sm">
                    {item.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {item.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  {item.location}
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-5 text-xs text-purple-400">
                Click to view certificate →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4"
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 120 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl rounded-xl border border-white/10 p-6"
              >
                <button
                  onClick={() => setActive(null)}
                  className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <X size={18} className="text-white" />
                </button>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {active.role}
                </h3>
                <p className="text-sm text-purple-400 mb-4">
                  {active.company}
                </p>

                <div className="w-full flex justify-center bg-black/40 rounded-lg p-4">
                  <img
                    src={active.image}
                    alt="Certificate"
                    className="max-h-[70vh] object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
