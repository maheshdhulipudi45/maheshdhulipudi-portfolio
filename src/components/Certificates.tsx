// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Award, X } from "lucide-react";

// const certificates = [
//   {
//     title: "Full Stack Development Internship",
//     issuer: "Technical Hub Pvt Ltd",
//     image: "/thubps.jpg",
//     description:
//       "Completed a summer internship focusing on HTML, CSS, JavaScript, React, Node.js, and MongoDB. Built a real-world project titled CampusFix.",
//   },
// //   {
// //     title: "Web Development Internship",
// //     issuer: "SkillDzire (JNTUK, Kakinada)",
// //     image: "/SkillDzire.jpg",
// //     description:
// //       "Successfully completed a short-term internship on Web Development organized by SkillDzire.",
// //   },
//   {
//     title: "JavaScript Essentials 2",
//     issuer: "Cisco Networking Academy",
//     image: "/ciscojs1.jpg",
//     description:
//       "Focused on advanced JavaScript concepts and programming techniques.",
//   },
//   {
//     title: "JavaScript Essentials 1",
//     issuer: "Cisco Networking Academy",
//     image: "/ciscojs2.jpg",
//     description:
//       "Mastered foundational JavaScript concepts for frontend development.",
//   },
// ];

// export default function Certificates() {
//   const [activeCert, setActiveCert] = useState<any>(null);

//   return (
//     <section id="certificates" className="max-w-6xl mx-auto px-4 py-28">
      
//       {/* HEADING */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ type: "spring", stiffness: 160 }}
//         className="mb-16 text-center"
//       >
//         <span className="text-sm uppercase tracking-widest text-purple-400">
//           Certifications 
//         </span>

//         <h2 className="mt-3 text-3xl md:text-4xl font-bold">
//           My{" "}
//           <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500">
//             Achievements
//           </span>
//         </h2>

//         <p className="mt-4 text-gray-400 max-w-xl mx-auto">
//           Professional certifications and internships that strengthened my
//           full-stack development skills.
//         </p>
//       </motion.div>

//       {/* GRID */}
//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//         {certificates.map((cert, i) => (
//           <motion.div
//             key={cert.title}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover={{ y: -6 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1, type: "spring", stiffness: 160 }}
//             onClick={() => setActiveCert(cert)}
//             className="cursor-pointer rounded-3xl border border-purple-500/20
//             bg-gradient-to-b from-[#1a1333] to-[#120c24]
//             backdrop-blur-xl overflow-hidden
//             hover:shadow-xl hover:shadow-purple-600/25 transition"
//           >
//             {/* IMAGE */}
//             <div className="h-36 overflow-hidden">
//               <img
//                 src={cert.image}
//                 alt={cert.title}
//                 className="w-full h-full object-cover group-hover:scale-105 transition"
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="p-6 text-center">
//               <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full
//               bg-gradient-to-tr from-purple-500 to-pink-500">
//                 <Award size={18} className="text-white" />
//               </div>

//               <h3 className="text-lg font-semibold text-white mb-1">
//                 {cert.title}
//               </h3>
//               <p className="text-sm text-purple-300">
//                 {cert.issuer}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {activeCert && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
//             onClick={() => setActiveCert(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 160 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative max-w-xl w-full rounded-2xl
//               bg-gradient-to-b from-[#1a1333] to-[#120c24]
//               border border-purple-500/20 p-6"
//             >
//               <button
//                 onClick={() => setActiveCert(null)}
//                 className="absolute right-3 top-3 p-2 rounded-full
//                 bg-white/10 hover:bg-white/20 transition"
//               >
//                 <X size={18} />
//               </button>

//               <h3 className="text-xl font-semibold text-white mb-1">
//                 {activeCert.title}
//               </h3>
//               <p className="text-sm text-purple-300 mb-4">
//                 {activeCert.issuer}
//               </p>

//               <div className="rounded-xl overflow-hidden border border-purple-500/20 mb-4">
//                 <img
//                   src={activeCert.image}
//                   alt={activeCert.title}
//                   className="w-full h-auto"
//                 />
//               </div>

//               <p className="text-sm text-gray-300 leading-relaxed">
//                 {activeCert.description}
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Award, X } from "lucide-react";

// const certificates = [
//   {
//     title: "Full Stack Development Internship",
//     issuer: "Technical Hub Pvt Ltd",
//     image: "/thubps.jpg",
//     description:
//       "Completed a summer internship focusing on HTML, CSS, JavaScript, React, Node.js, and MongoDB. Built a real-world project titled CampusFix.",
//   },
//   {
//     title: "JavaScript Essentials 2",
//     issuer: "Cisco Networking Academy",
//     image: "/ciscojs1.jpg",
//     description:
//       "Focused on advanced JavaScript concepts and programming techniques.",
//   },
//   {
//     title: "JavaScript Essentials 1",
//     issuer: "Cisco Networking Academy",
//     image: "/ciscojs2.jpg",
//     description:
//       "Mastered foundational JavaScript concepts for frontend development.",
//   },
// ];

// export default function Certificates() {
//   const [activeCert, setActiveCert] = useState<any>(null);

//   return (
//     <section id="certificates" className="max-w-6xl mx-auto px-4 py-28">

//       {/* HEADING */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ type: "spring", stiffness: 160 }}
//         className="mb-16 text-center"
//       >
//         <span className="text-sm uppercase tracking-widest text-purple-400">
//           Certifications
//         </span>

//         <h2 className="mt-3 text-3xl md:text-4xl font-bold">
//           My{" "}
//           <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500">
//             Achievements
//           </span>
//         </h2>

//         <p className="mt-4 text-gray-400 max-w-xl mx-auto">
//           Professional certifications and internships that strengthened my
//           full-stack development skills.
//         </p>
//       </motion.div>

//       {/* GRID */}
//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//         {certificates.map((cert, i) => (
//           <motion.div
//             key={cert.title}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover={{ y: -6 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.1, type: "spring", stiffness: 160 }}
//             onClick={() => setActiveCert(cert)}
//             className="cursor-pointer h-[380px]  /* 🔥 SAME HEIGHT */
//             rounded-3xl border border-purple-500/20
//             bg-gradient-to-b from-[#1a1333] to-[#120c24]
//             backdrop-blur-xl overflow-hidden
//             hover:shadow-xl hover:shadow-purple-600/25 transition"
//           >
//             {/* IMAGE */}
//             <div className="h-44 w-full overflow-hidden">
//               <img
//                 src={cert.image}
//                 alt={cert.title}
//                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="p-6 text-center flex flex-col justify-center h-[calc(100%-11rem)]">
//               <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full
//               bg-gradient-to-tr from-purple-500 to-pink-500">
//                 <Award size={18} className="text-white" />
//               </div>

//               <h3 className="text-lg font-semibold text-white mb-1">
//                 {cert.title}
//               </h3>
//               <p className="text-sm text-purple-300">
//                 {cert.issuer}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {activeCert && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
//             onClick={() => setActiveCert(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 160 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-3xl   /* 🔥 BIGGER MODAL */
//               rounded-2xl bg-gradient-to-b from-[#1a1333] to-[#120c24]
//               border border-purple-500/20 p-6"
//             >
//               <button
//                 onClick={() => setActiveCert(null)}
//                 className="absolute right-4 top-4 p-2 rounded-full
//                 bg-white/10 hover:bg-white/20 transition"
//               >
//                 <X size={18} />
//               </button>

//               <h3 className="text-xl font-semibold text-white mb-1">
//                 {activeCert.title}
//               </h3>
//               <p className="text-sm text-purple-300 mb-4">
//                 {activeCert.issuer}
//               </p>

//               {/* 🔥 FULL IMAGE VIEW */}
//               <div className="rounded-xl overflow-hidden border border-purple-500/20 mb-4
//               max-h-[70vh]">
//                 <img
//                   src={activeCert.image}
//                   alt={activeCert.title}
//                   className="w-full h-full object-contain bg-black"
//                 />
//               </div>

//               <p className="text-sm text-gray-300 leading-relaxed">
//                 {activeCert.description}
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";

const certificates = [
  {
    title: "Full Stack Development Internship",
    issuer: "Technical Hub Pvt Ltd",
    image: "/thubps.jpg",
    description:
      "Completed a summer internship focusing on HTML, CSS, JavaScript, React, Node.js, and MongoDB. Built a real-world project titled CampusFix.",
  },
  {
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    image: "/ciscojs1.jpg",
    description:
      "Focused on advanced JavaScript concepts and programming techniques.",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    image: "/ciscojs2.jpg",
    description:
      "Mastered foundational JavaScript concepts for frontend development.",
  },
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<any>(null);

  return (
    <section id="certificates" className="max-w-6xl mx-auto px-4 py-28">

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 160 }}
        className="mb-16 text-center"
      >
        <span className="text-sm uppercase tracking-widest text-purple-400">
          Certifications
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          My{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-pink-500">
            Achievements
          </span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Certifications and internships that validate my real-world development skills.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 160 }}
            onClick={() => setActiveCert(cert)}
            className="cursor-pointer h-[420px]
            rounded-3xl border border-purple-500/20
            bg-gradient-to-b from-[#1a1333] to-[#120c24]
            backdrop-blur-xl overflow-hidden
            hover:shadow-xl hover:shadow-purple-600/25 transition"
          >
            {/* IMAGE PREVIEW */}
            <div className="h-52 w-full bg-black flex items-center justify-center">
              <img
                src={cert.image}
                alt={cert.title}
                className="max-h-full max-w-full object-contain p-3"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full
              bg-gradient-to-tr from-purple-500 to-pink-500">
                <Award size={18} className="text-white" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-purple-300">
                {cert.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center px-4"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh]
              rounded-2xl bg-gradient-to-b from-[#1a1333] to-[#120c24]
              border border-purple-500/20 overflow-hidden"
            >
              {/* CLOSE */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute right-4 top-4 z-10 p-2 rounded-full
                bg-black/40 hover:bg-black/60 transition"
              >
                <X size={18} />
              </button>

              {/* SCROLLABLE CONTENT */}
              <div className="overflow-y-auto max-h-[90vh] p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {activeCert.title}
                </h3>
                <p className="text-sm text-purple-300 mb-4">
                  {activeCert.issuer}
                </p>

                {/* FULL CERTIFICATE VIEW */}
                <div className="rounded-xl bg-black p-4 mb-4">
                  <img
                    src={activeCert.image}
                    alt={activeCert.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {activeCert.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
