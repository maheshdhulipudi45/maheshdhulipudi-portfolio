import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-white/6 border-t border-white/6 pt-10 text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-white/10">
          
          {/* LEFT */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              Mahesh Dhulipudi
            </h2>
            <p className="mt-1 text-sm text-purple-400">
              MERN Stack Developer & Freelance Web Developer
            </p>

            <p className="max-w-[420px] mt-5 text-sm leading-relaxed text-gray-300">
              MCA graduate, MERN Stack Developer, and Freelance Web Developer passionate about building modern, responsive, and scalable web applications. Focused on clean code, performance, and delivering custom digital solutions.
            </p>
          </div>

          {/* RIGHT LINKS */}
          <div className="flex flex-wrap justify-between w-full md:w-[55%] gap-8">
            
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-base text-white mb-3">
                Quick Links
              </h3>
              <ul className="text-sm space-y-2">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                <li><a href="#experience" className="hover:text-white transition">Internships</a></li>
                <li><a href="#certificates" className="hover:text-white transition">Certifications</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h3 className="font-semibold text-base text-white mb-3">
                Featured Projects
              </h3>
              <ul className="text-sm space-y-2 text-gray-400">
                <li><a href="#projects" className="hover:text-white transition">ThumblifyAI</a></li>
                <li><a href="#projects" className="hover:text-white transition">Bharath Events</a></li>
                <li><a href="#projects" className="hover:text-white transition">Sri Bharath Sweets</a></li>
                <li><a href="#projects" className="hover:text-white transition">SVGK</a></li>
                <li><a href="#projects" className="hover:text-white transition">CampusFix</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold text-base text-white mb-3">
                Connect
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a
                    href="mailto:maheshdhulipudi45@gmail.com"
                    className="hover:text-white transition"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/maheshdhulipudi45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/maheshdhulipudi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/917658956116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <p className="py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Mahesh Dhulipudi.
        </p>
      </div>
    </motion.footer>
  );
}
