
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
//           Certifications and internships that validate my real-world development skills.
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
//             className="cursor-pointer h-[420px]
//             rounded-3xl border border-purple-500/20
//             bg-gradient-to-b from-[#1a1333] to-[#120c24]
//             backdrop-blur-xl overflow-hidden
//             hover:shadow-xl hover:shadow-purple-600/25 transition"
//           >
//             {/* IMAGE PREVIEW */}
//             <div className="h-52 w-full flex items-center justify-center
//             bg-gradient-to-br from-purple-500/10 to-pink-500/10
//             backdrop-blur-sm">
//               <img
//                 src={cert.image}
//                 alt={cert.title}
//                 className="max-h-full max-w-full object-contain p-4"
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
//             className="fixed inset-0 z-50
//             bg-gradient-to-b from-black/70 via-purple-900/40 to-black/70
//             backdrop-blur-sm flex justify-center items-center px-4"
//             onClick={() => setActiveCert(null)}
//           >
//             <motion.div
//               initial={{ y: 40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 40, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 140 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-4xl max-h-[90vh]
//               rounded-2xl bg-gradient-to-b from-[#1a1333] to-[#120c24]
//               border border-purple-500/20 overflow-hidden"
//             >
//               {/* CLOSE */}
//               <button
//                 onClick={() => setActiveCert(null)}
//                 className="absolute right-4 top-4 z-10 p-2 rounded-full
//                 bg-white/10 hover:bg-white/20 transition"
//               >
//                 <X size={18} />
//               </button>

//               {/* SCROLLABLE CONTENT */}
//               <div className="overflow-y-auto max-h-[90vh] p-6">
//                 <h3 className="text-xl font-semibold text-white mb-1">
//                   {activeCert.title}
//                 </h3>
//                 <p className="text-sm text-purple-300 mb-4">
//                   {activeCert.issuer}
//                 </p>

//                 {/* FULL CERTIFICATE VIEW */}
//                 <div className="rounded-xl p-4 mb-4
//                 bg-gradient-to-br from-purple-500/10 to-pink-500/10
//                 border border-purple-500/20 backdrop-blur-md">
//                   <img
//                     src={activeCert.image}
//                     alt={activeCert.title}
//                     className="w-full h-auto object-contain"
//                   />
//                 </div>

//                 <p className="text-sm text-gray-300 leading-relaxed">
//                   {activeCert.description}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// const certificates = [
//   {
//     title: "Information Technology Specialist – JavaScript",
//     issuer: "Certiport (Pearson VUE)",
//     image: "/javascript_it.png",
//     description:
//       "Earned IT Specialist – JavaScript certification validating proficiency in ES6, DOM manipulation, debugging, and modern web development concepts. Credential ID: Loua-s4qR | Issued: Feb 2026 | Valid till 2031.",
//     badgeColor: "from-blue-500 to-cyan-500",
//   },
//   {
//     title: "Oracle Certified Foundations Associate – Database",
//     issuer: "Oracle University",
//     image: "/oracle_db.png",
//     description:
//       "Recognized by Oracle Corporation for foundational knowledge in SQL, relational database concepts, and Oracle database architecture. Credential ID: 103349099ODB12COJA | Issued: Dec 2025.",
//     badgeColor: "from-orange-500 to-red-500",
//   },
// ];

// export default function Certificates() {
//   const [activeCert, setActiveCert] = useState<any>(null);

//   return (
//     <section
//       id="certificates"
//       className="max-w-6xl mx-auto px-4 py-28"
//     >
//       {/* HEADING */}
//       <div className="text-center mb-20">
//         <span className="text-sm uppercase tracking-widest text-purple-400">
//           Certifications
//         </span>

//         <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
//           My{" "}
//           <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Achievements
//           </span>
//         </h2>

//         <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
//           Professional certifications that validate my technical expertise and
//           real-world development skills.
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="grid gap-12 sm:grid-cols-2">
//         {certificates.map((cert, i) => (
//           <motion.div
//             key={cert.title}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.15, type: "spring", stiffness: 120 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.05 }}
//             onClick={() => setActiveCert(cert)}
//             className="relative cursor-pointer group rounded-3xl overflow-hidden
//             bg-white/5 backdrop-blur-xl border border-white/10
//             shadow-lg hover:shadow-2xl hover:shadow-purple-500/20
//             transition-all duration-500"
//           >
//             {/* Shine Hover Effect */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100
//             bg-gradient-to-tr from-white/10 to-transparent
//             transition duration-500" />

//             {/* IMAGE */}
//             <div className="h-60 flex items-center justify-center bg-black/30">
//               <img
//                 src={cert.image}
//                 alt={cert.title}
//                 className="max-h-full max-w-full object-contain p-6
//                 group-hover:scale-105 transition duration-500"
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="p-6 text-center space-y-3">
//               <div
//                 className={`mx-auto w-fit px-4 py-1 text-xs rounded-full text-white bg-gradient-to-r ${cert.badgeColor}`}
//               >
//                 Certified
//               </div>

//               <h3 className="text-lg font-semibold text-white">
//                 {cert.title}
//               </h3>

//               <p className="text-sm text-gray-400">
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
//             className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-center items-center px-4"
//             onClick={() => setActiveCert(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 120 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-4xl max-h-[90vh]
//               rounded-2xl bg-[#111]
//               border border-white/10 overflow-hidden shadow-2xl"
//             >
//               {/* CLOSE BUTTON */}
//               <button
//                 onClick={() => setActiveCert(null)}
//                 className="absolute right-4 top-4 p-2 rounded-full
//                 bg-white/10 hover:bg-white/20 transition"
//               >
//                 <X size={18} className="text-white" />
//               </button>

//               <div className="overflow-y-auto max-h-[90vh] p-8">
//                 <h3 className="text-2xl font-semibold text-white mb-2">
//                   {activeCert.title}
//                 </h3>

//                 <p className="text-sm text-purple-400 mb-6">
//                   {activeCert.issuer}
//                 </p>

//                 <div className="rounded-xl p-6 mb-6 bg-white/5 border border-white/10">
//                   <img
//                     src={activeCert.image}
//                     alt={activeCert.title}
//                     className="w-full h-auto object-contain"
//                   />
//                 </div>

//                 <p className="text-gray-300 leading-relaxed">
//                   {activeCert.description}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }





// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X } from "lucide-react";

// const certificates = [
//   {
//     title: "Information Technology Specialist – JavaScript",
//     issuer: "Certiport (Pearson VUE)",
//     image: "/javascript_it.png",
//     description:
//       "Earned IT Specialist – JavaScript certification validating proficiency in ES6, DOM manipulation, debugging, and modern web development concepts. Credential ID: Loua-s4qR | Issued: Feb 2026 | Valid till 2031.",
//     badgeColor: "from-blue-500 to-cyan-500",
//   },
//   {
//     title: "Oracle Certified Foundations Associate – Database",
//     issuer: "Oracle University",
//     image: "/oracle_db.png",
//     description:
//       "Recognized by Oracle Corporation for foundational knowledge in SQL, relational database concepts, and Oracle database architecture. Credential ID: 103349099ODB12COJA | Issued: Dec 2025.",
//     badgeColor: "from-orange-500 to-red-500",
//   },
// ];

// export default function Certificates() {
//   const [activeCert, setActiveCert] = useState<any>(null);

//   return (
//     <section id="certificates" className="max-w-6xl mx-auto px-4 py-28">

//       {/* HEADING */}
//       <div className="text-center mb-16">
//         <h2 className="text-3xl md:text-5xl font-bold text-white">
//           Certifications
//         </h2>
//         <p className="mt-4 text-gray-400 max-w-xl mx-auto">
//           Verified credentials showcasing my technical expertise.
//         </p>
//       </div>

//       {/* GRID */}
//       <div className="grid gap-10 sm:grid-cols-2">

//         {certificates.map((cert, i) => (
//          <motion.div
//   key={cert.title}
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ delay: i * 0.15 }}
//   viewport={{ once: true }}
//   whileHover={{ y: -6 }}
//   onClick={() => setActiveCert(cert)}
//   className="group cursor-pointer rounded-2xl
//   bg-transparent backdrop-blur-xl
//   border border-white/10
//   hover:border-purple-400/40
//   transition-all duration-300"
// >
//   {/* IMAGE */}
//   <div className="relative w-full aspect-[4/3]
//   flex items-center justify-center
//   bg-white/5 backdrop-blur-md
//   rounded-t-2xl overflow-hidden">
//     <img
//       src={cert.image}
//       alt={cert.title}
//       className="max-h-full max-w-full object-contain p-4
//       transition duration-300 group-hover:scale-105"
//     />
//   </div>

//   {/* CONTENT */}
//   <div className="p-5 text-center space-y-2">
//     <div
//       className={`mx-auto w-fit px-3 py-1 text-xs rounded-full text-white bg-gradient-to-r ${cert.badgeColor}`}
//     >
//       Certified
//     </div>

//     <h3 className="text-md font-semibold text-white leading-snug">
//       {cert.title}
//     </h3>

//     <p className="text-sm text-gray-400">
//       {cert.issuer}
//     </p>
//   </div>
// </motion.div>

//         ))}

//       </div>

//       {/* MODAL */}
//       <AnimatePresence>
//         {activeCert && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
//             onClick={() => setActiveCert(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.95 }}
//               transition={{ type: "spring", stiffness: 120 }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative w-full max-w-5xl
//               bg-[#111] border border-white/10
//               rounded-2xl shadow-2xl p-6"
//             >
//               {/* CLOSE */}
//               <button
//                 onClick={() => setActiveCert(null)}
//                 className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
//               >
//                 <X size={18} className="text-white" />
//               </button>

//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {activeCert.title}
//               </h3>

//               <p className="text-sm text-purple-400 mb-4">
//                 {activeCert.issuer}
//               </p>

//               {/* FULL IMAGE FIT */}
//               <div className="w-full flex items-center justify-center bg-black/40 rounded-xl p-4 mb-6">
//                 <img
//                   src={activeCert.image}
//                   alt={activeCert.title}
//                   className="max-h-[70vh] w-auto object-contain"
//                 />
//               </div>

//               <p className="text-gray-300 text-sm leading-relaxed">
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
import { X } from "lucide-react";

const certificates = [
  {
    title: "IT Specialist – JavaScript",
    issuer: "Certiport (Pearson VUE)",
    image: "/javascript_it.png",
    description:
      "Earned Information Technology Specialist – JavaScript certification. Credential ID: Loua-s4qR | Issued: Feb 2026 | Valid till 2031.",
    badgeColor: "from-blue-500 to-cyan-500",
  },
  {
    title: "Oracle Foundations Associate – Database",
    issuer: "Oracle University",
    image: "/oracle_db.png",
    description:
      "Oracle Certified Foundations Associate – Database. Credential ID: 103349099ODB12COJA | Issued: Dec 2025.",
    badgeColor: "from-orange-500 to-red-500",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    image: "/ciscojs1.jpg",
    description:
      "Successfully completed JavaScript Essentials 1 offered by Cisco Networking Academy. Issued: May 06, 2025.",
    badgeColor: "from-indigo-500 to-blue-500",
  },
  {
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    image: "/ciscojs2.jpg",
    description:
      "Successfully completed JavaScript Essentials 2 offered by Cisco Networking Academy. Issued: June 05, 2025.",
    badgeColor: "from-indigo-500 to-purple-500",
  },
];

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<any>(null);

  return (
    <section id="certificates" className="max-w-6xl mx-auto px-4 py-24">

      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Certifications
        </h2>
        <p className="mt-3 text-gray-400 max-w-lg mx-auto text-sm">
          Professional credentials validating my development skills.
        </p>
      </div>

      {/* GRID */}
<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">

  {certificates.map((cert, i) => (
    <motion.div
      key={cert.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      onClick={() => setActiveCert(cert)}
      className="group cursor-pointer
      w-full max-w-[340px]        /* Bigger width */
      rounded-2xl
      border border-white/10
      hover:border-purple-400/50
      transition-all duration-300"
    >
      {/* IMAGE */}
      <div className="w-full h-[220px]     /* Bigger height */
      flex items-center justify-center
      overflow-hidden rounded-t-2xl">
        <img
          src={cert.image}
          alt={cert.title}
          className="max-h-[200px] w-auto object-contain
          transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center space-y-2">
        <div
          className={`mx-auto w-fit px-3 py-1 text-xs rounded-full text-white bg-gradient-to-r ${cert.badgeColor}`}
        >
          Certified
        </div>

        <h3 className="text-base font-semibold text-white leading-snug">
          {cert.title}
        </h3>

        <p className="text-sm text-gray-400">
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl
              bg-[#111] border border-white/10
              rounded-xl shadow-2xl p-6"
            >
              {/* CLOSE */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <X size={18} className="text-white" />
              </button>

              <h3 className="text-lg font-semibold text-white mb-1">
                {activeCert.title}
              </h3>

              <p className="text-xs text-purple-400 mb-4">
                {activeCert.issuer}
              </p>

              {/* FULL IMAGE */}
              <div className="w-full flex items-center justify-center bg-black/40 rounded-lg p-4 mb-5">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {activeCert.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
