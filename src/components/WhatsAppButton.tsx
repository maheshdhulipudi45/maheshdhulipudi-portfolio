import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  // Direct Link to WhatsApp Chat
  const whatsappUrl = "https://wa.me/917658956116";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full
      bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 backdrop-blur-md shadow-2xl
      hover:text-white hover:border-emerald-500/50 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact Mahesh on WhatsApp"
    >
      {/* Floating pulsing rings behind the button */}
      <motion.span
        className="absolute inset-0 rounded-full border border-emerald-500/40"
        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="absolute inset-0 rounded-full border border-emerald-500/30"
        animate={{ scale: [1, 2.2, 1], opacity: [0.4, 0, 0.4] }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />
      
      {/* Glow Backdrop */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* WhatsApp Icon */}
      <FaWhatsapp size={28} className="relative z-10" />
    </motion.a>
  );
}
