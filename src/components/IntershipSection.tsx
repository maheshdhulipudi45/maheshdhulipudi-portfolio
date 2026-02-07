import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function InternshipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 ]" />

      <div ref={ref} className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 180 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-purple-400">
            Experience
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Internship{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Experience
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-md mx-auto">
            Hands-on industry experience working with real-world full stack
            applications and development workflows.
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
          className="relative rounded-3xl border border-purple-500/20 
          bg-gradient-to-b from-[#1a1333] to-[#120c24] 
          backdrop-blur-xl p-8 md:p-10 shadow-xl shadow-purple-600/10"
        >
          {/* Icon */}
          <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full 
          bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg">
            <Briefcase className="text-white" size={22} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
            
            {/* Left */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Full Stack Development Intern
              </h3>

              <p className="text-purple-300 font-medium mb-4">
                Technical Hub
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  May 2025 – Jun 2025
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  Andhra Pradesh, India
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-md">
                Worked on real-world MERN stack applications, collaborating with
                a development team to design, build, and enhance scalable web
                solutions following industry best practices.
              </p>
            </div>

            {/* Right */}
            <div>
              <h4 className="text-sm uppercase tracking-widest text-purple-400 mb-4">
                Key Contributions
              </h4>

              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex gap-3">
                  <CheckCircle size={16} className="text-green-400 mt-0.5" />
                  Built and enhanced full stack features using MERN stack
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={16} className="text-green-400 mt-0.5" />
                  Collaborated with team following SDLC practices
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={16} className="text-green-400 mt-0.5" />
                  Assisted in debugging, testing, and performance improvements
                </li>
                <li className="flex gap-3">
                  <CheckCircle size={16} className="text-green-400 mt-0.5" />
                  Gained hands-on experience with real project workflows
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
