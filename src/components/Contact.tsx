
// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import type { FormEvent } from "react";
// import {
//   Send,
//   Mail,
//   Phone,
//   MapPin,
//   Github,
//   Linkedin,
// } from "lucide-react";

// export default function ContactSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [sending, setSending] = useState(false);

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setSending(true);

//     setTimeout(() => {
//       alert("Message sent successfully!");
//       setFormData({ name: "", email: "", message: "" });
//       setSending(false);
//     }, 1000);
//   };

//   return (
//     <section id="contact" className="relative py-28 overflow-hidden">
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
//             Contact
//           </span>
//           <h2 className="mt-3 text-3xl md:text-4xl font-bold">
//             Get In{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
//               Touch
//             </span>
//           </h2>
//           <p className="mt-4 text-gray-400 max-w-md mx-auto">
//             Feel free to reach out for collaborations, projects, or opportunities.
//           </p>
//         </motion.div>

//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
//           {/* LEFT – CONTACT INFO */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.1, type: "spring", stiffness: 180 }}
//             className="rounded-3xl border border-purple-500/20 
//             bg-gradient-to-b from-[#1a1333] to-[#120c24] 
//             p-8 backdrop-blur-xl"
//           >
//             <h3 className="text-xl font-semibold text-white mb-6">
//               Contact Information
//             </h3>

//             <div className="space-y-5 text-sm text-gray-300">
//               <div className="flex items-start gap-4">
//                 <Mail className="text-purple-400 mt-1" size={18} />
//                 <div>
//                   <p className="font-medium text-white">Email</p>
//                   maheshdhulipudi45@gmail.com
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <Phone className="text-purple-400 mt-1" size={18} />
//                 <div>
//                   <p className="font-medium text-white">Phone</p>
//                   +91 76589 56116
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <MapPin className="text-purple-400 mt-1" size={18} />
//                 <div>
//                   <p className="font-medium text-white">Location</p>
//                   Amalapuram, Andhra Pradesh
//                 </div>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-8">
//               <a
//                 href="https://github.com/maheshdhulipudi"
//                 target="_blank"
//                 className="p-3 rounded-full bg-white/5 hover:bg-purple-500/20 transition"
//               >
//                 <Github size={18} />
//               </a>
//               <a
//                 href="https://linkedin.com/in/maheshdhulipudi"
//                 target="_blank"
//                 className="p-3 rounded-full bg-white/5 hover:bg-purple-500/20 transition"
//               >
//                 <Linkedin size={18} />
//               </a>
//               <a
//                 href="mailto:maheshdhulipudi45@gmail.com"
//                 className="p-3 rounded-full bg-white/5 hover:bg-purple-500/20 transition"
//               >
//                 <Mail size={18} />
//               </a>
//             </div>
//           </motion.div>

//           {/* RIGHT – FORM */}
//           <motion.form
//             initial={{ opacity: 0, x: 40 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
//             onSubmit={handleSubmit}
//             className="rounded-3xl border border-purple-500/20 
//             bg-gradient-to-b from-[#1a1333] to-[#120c24] 
//             p-8 backdrop-blur-xl space-y-5"
//           >
//             <h3 className="text-xl font-semibold text-white mb-2">
//               Send a Message
//             </h3>

//             <div>
//               <label className="text-sm text-gray-300">Name</label>
//               <input
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 className="mt-2 w-full rounded-lg bg-purple-900/40 
//                 border border-purple-500/20 px-4 py-3 text-sm 
//                 focus:outline-none focus:border-purple-400"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-300">Email</label>
//               <input
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 className="mt-2 w-full rounded-lg bg-purple-900/40 
//                 border border-purple-500/20 px-4 py-3 text-sm 
//                 focus:outline-none focus:border-purple-400"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-300">Message</label>
//               <textarea
//                 rows={5}
//                 value={formData.message}
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//                 className="mt-2 w-full rounded-lg bg-purple-900/40 
//                 border border-purple-500/20 px-4 py-3 text-sm resize-none 
//                 focus:outline-none focus:border-purple-400"
//               />
//             </div>

//             <button
//               disabled={sending}
//               className="w-full mt-2 rounded-lg 
//               bg-gradient-to-r from-purple-500 to-pink-500 
//               py-3 text-sm font-medium text-white 
//               hover:opacity-90 transition"
//             >
//               <span className="inline-flex items-center gap-2 justify-center">
//                 <Send size={16} />
//                 {sending ? "Sending..." : "Send Message"}
//               </span>
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { FormEvent } from "react";

import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      
      {/* Soft Glow Background */}
      <div className="absolute inset-0 -z-10 " />

      <div ref={ref} className="max-w-6xl mx-auto px-4">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 180 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-purple-400">
            Contact
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Touch
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-md mx-auto">
            Feel free to reach out for collaborations, projects, or opportunities.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, type: "spring", stiffness: 180 }}
            className="rounded-3xl border border-purple-500/20
            bg-gradient-to-b from-[#1a1333] to-[#120c24]
            p-8 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-sm text-gray-300">

              {/* EMAIL */}
              <div className="flex items-start gap-4 group">
                <Mail size={20} color="#EA4335" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  maheshdhulipudi45@gmail.com
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <Phone size={20} color="#22C55E" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  +91 76589 56116
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <MapPin size={20} color="#F43F5E" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  Amalapuram, Andhra Pradesh
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-10">

              {/* GITHUB */}
              <a
                href="https://github.com/maheshdhulipudi45"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5
                hover:bg-white/10 transition transform hover:scale-110"
              >
                <Github size={20} color="#ffffff" />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/maheshdhulipudi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5
                hover:bg-[#0A66C2]/20 transition transform hover:scale-110"
              >
                <Linkedin size={20} color="#0A66C2" />
              </a>

              {/* MAIL */}
              <a
                href="mailto:maheshdhulipudi45@gmail.com"
                className="p-3 rounded-full bg-white/5
                hover:bg-[#EA4335]/20 transition transform hover:scale-110"
              >
                <Mail size={20} color="#EA4335" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-purple-500/20
            bg-gradient-to-b from-[#1a1333] to-[#120c24]
            p-8 backdrop-blur-xl space-y-5"
          >
            <h3 className="text-xl font-semibold text-white">
              Send a Message
            </h3>

            <input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-lg bg-purple-900/40
              border border-purple-500/20 px-4 py-3 text-sm
              focus:outline-none focus:border-purple-400"
            />

            <input
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-lg bg-purple-900/40
              border border-purple-500/20 px-4 py-3 text-sm
              focus:outline-none focus:border-purple-400"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full rounded-lg bg-purple-900/40
              border border-purple-500/20 px-4 py-3 text-sm resize-none
              focus:outline-none focus:border-purple-400"
            />

            <button
              disabled={sending}
              className="w-full rounded-lg
              bg-gradient-to-r from-purple-500 to-pink-500
              py-3 text-sm font-medium text-white
              hover:opacity-90 transition"
            >
              <span className="inline-flex items-center gap-2 justify-center">
                <Send size={16} />
                {sending ? "Sending..." : "Send Message"}
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

