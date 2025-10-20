import React from "react";
import { motion } from "framer-motion";

export default function LanguageToggle({ language, setLanguage }) {
  const langs = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "pt", label: "Português", flag: "🇧🇷" },
  ];

  return (
    <div className="flex items-center gap-3">
      {langs.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          whileHover={{
            scale: 1.2,
            rotate: 3,
            boxShadow: "0 0 10px rgba(20,184,166,0.6)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className={`relative group p-2 rounded-full text-lg transition-all duration-300 border-2 ${
            language === lang.code
              ? "border-teal-400 bg-white/10 shadow-[0_0_12px_rgba(20,184,166,0.7)]"
              : "border-transparent hover:border-white/20 hover:bg-white/5"
          }`}
        >
          <span className="text-xl">{lang.flag}</span>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.7rem] text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {lang.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
