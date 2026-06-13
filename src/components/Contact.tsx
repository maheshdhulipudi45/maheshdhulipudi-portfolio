
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


import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";

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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setSending(true);

    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setSending(false);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      
      {/* Soft Glow Background */}
      <div className="absolute inset-0 -z-10" />

      <div ref={ref} className="max-w-6xl mx-auto px-4">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-purple-400 font-semibold">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          {/* LEFT SIDE - CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 15 }}
            className="relative p-[1.5px] rounded-3xl bg-gradient-to-b from-purple-500/20 to-pink-500/10 shadow-lg hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-all duration-300"
          >
            <div className="rounded-[23px] bg-gradient-to-b from-[#150f29] to-[#0c0818] backdrop-blur-xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6 text-sm text-gray-300">

                  {/* EMAIL */}
                  <a
                    href="mailto:maheshdhulipudi45@gmail.com"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 group-hover:bg-red-500 group-hover:text-white transition-all">
                      <Mail size={18} className="text-red-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-red-400 transition-colors">Email</p>
                      maheshdhulipudi45@gmail.com
                    </div>
                  </a>

                  {/* PHONE */}
                  <a
                    href="tel:+917658956116"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 group-hover:bg-green-500 group-hover:text-white transition-all">
                      <Phone size={18} className="text-green-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-green-400 transition-colors">Phone</p>
                      +91 76589 56116
                    </div>
                  </a>

                  {/* WHATSAPP */}
                  <a
                    href="https://wa.me/917658956116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <FaWhatsapp size={18} className="text-emerald-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-white group-hover:text-emerald-400 transition-colors">WhatsApp</p>
                      +91 76589 56116 (Direct Chat)
                    </div>
                  </a>

                  {/* LOCATION */}
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20">
                      <MapPin size={18} className="text-rose-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Location</p>
                      Amalapuram, Andhra Pradesh
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex gap-4 mt-10">

                {/* GITHUB */}
                <motion.a
                  href="https://github.com/maheshdhulipudi45"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3.5 rounded-full bg-white/5 border border-white/10
                  transition shadow-md hover:shadow-white/10"
                >
                  <Github size={20} className="text-white" />
                </motion.a>

                {/* LINKEDIN */}
                <motion.a
                  href="https://linkedin.com/in/maheshdhulipudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(10,102,194,0.2)", borderColor: "rgba(10,102,194,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3.5 rounded-full bg-white/5 border border-white/10
                  transition shadow-md hover:shadow-[#0A66C2]/20"
                >
                  <Linkedin size={20} className="text-[#0A66C2]" />
                </motion.a>

                {/* MAIL */}
                <motion.a
                  href="mailto:maheshdhulipudi45@gmail.com"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(234,67,53,0.2)", borderColor: "rgba(234,67,53,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3.5 rounded-full bg-white/5 border border-white/10
                  transition shadow-md hover:shadow-[#EA4335]/20"
                >
                  <Mail size={20} className="text-[#EA4335]" />
                </motion.a>

                {/* WHATSAPP */}
                <motion.a
                  href="https://wa.me/917658956116"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(37,211,102,0.2)", borderColor: "rgba(37,211,102,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3.5 rounded-full bg-white/5 border border-white/10
                  transition shadow-md hover:shadow-[#25D366]/30"
                >
                  <FaWhatsapp size={20} className="text-[#25D366]" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM CONTAINER */}
          <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-b from-purple-500/20 to-pink-500/10 shadow-lg hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-all duration-300">
            <div className="rounded-[23px] bg-gradient-to-b from-[#150f29] to-[#0c0818] backdrop-blur-xl p-8 h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 flex flex-col justify-between h-full"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      Send a Message
                    </h3>

                    <div>
                      <input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-lg bg-purple-950/20 hover:bg-purple-900/10
                        border border-purple-500/20 px-4 py-3.5 text-sm text-white placeholder-gray-500
                        focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-lg bg-purple-950/20 hover:bg-purple-900/10
                        border border-purple-500/20 px-4 py-3.5 text-sm text-white placeholder-gray-500
                        focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <textarea
                        rows={5}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full rounded-lg bg-purple-950/20 hover:bg-purple-900/10
                        border border-purple-500/20 px-4 py-3.5 text-sm text-white placeholder-gray-500 resize-none
                        focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10 transition-all duration-300"
                        required
                      />
                    </div>

                    <motion.button
                      disabled={sending}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500
                      py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20
                      hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer disabled:opacity-50"
                    >
                      <span className="inline-flex items-center gap-2 justify-center">
                        <Send size={16} />
                        {sending ? "Sending..." : "Send Message"}
                      </span>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="flex flex-col items-center justify-center text-center space-y-6 py-6"
                  >
                    {/* Glowing Checkmark Wrapper */}
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.15, type: "spring", stiffness: 150, damping: 12 }}
                      className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-10 h-10"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.35, duration: 0.6, ease: "easeInOut" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </motion.svg>
                    </motion.div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white tracking-tight">Message Sent!</h3>
                      <p className="text-gray-300 text-[14px] max-w-xs leading-relaxed mx-auto">
                        Thank you for reaching out! Mahesh will get back to you as soon as possible.
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSubmitted(false)}
                      className="rounded-lg bg-purple-500/10 border border-purple-500/30 px-6 py-2.5 text-xs font-bold text-purple-300 hover:bg-purple-500 hover:text-white hover:border-transparent transition-all cursor-pointer"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

