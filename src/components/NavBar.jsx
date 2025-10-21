import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "../assets/pvT.png";
import LanguageToggle from "./LanguageToggle";

export default function NavBar({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌍 Traducciones
  const translations = {
    es: {
      home: "Inicio",
      zones: "Zonas",
      properties: "Propiedades",
      gallery: "Galería",
      contact: "Contáctenos",
      demo: "Demo",
      brand: "Bienes y Raíces",
      whatsapp: "WhatsApp",
    },
    en: {
      home: "Home",
      zones: "Zones",
      properties: "Properties",
      gallery: "Gallery",
      contact: "Contact",
      demo: "Real Estate",
      brand: "Demo",
      whatsapp: "WhatsApp",
    },
    fr: {
      home: "Accueil",
      zones: "Zones",
      properties: "Propriétés",
      gallery: "Galerie",
      contact: "Contactez-nous",
      demo: "Démo",
      brand: "Immobilier",
      whatsapp: "WhatsApp",
    },
    de: {
      home: "Startseite",
      zones: "Regionen",
      properties: "Immobilien",
      gallery: "Galerie",
      contact: "Kontakt",
      demo: "Demo",
      brand: "Immobilien",
      whatsapp: "WhatsApp",
    },
    pt: {
      home: "Início",
      zones: "Zonas",
      properties: "Propriedades",
      gallery: "Galeria",
      contact: "Contato",
      demo: "Demo",
      brand: "Imobiliária",
      whatsapp: "WhatsApp",
    },
  };

  const t = translations[language];

  const navItems = [
    { name: t.home, path: "/" },
    { name: t.properties, path: "/propiedades" },
    { name: t.zones, path: "/zonas" },
    { name: t.gallery, path: "/galeria" },
    { name: t.contact, path: "/contactenos" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-lg bg-black/70 shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <img src={Logo} alt="Pura Vida Tech" className="h-9 w-auto" />
            <span className="text-white font-semibold text-lg tracking-tight">
              {t.demo} <span className="text-teal-400">{t.brand}</span>
            </span>
          </motion.div>
        </Link>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`relative text-gray-200 hover:text-white font-medium transition-all ${
                  location.pathname === item.path ? "text-teal-400" : ""
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ICONOS + SELECTOR DE IDIOMA */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="https://wa.me/50688888888"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-teal-500 hover:bg-teal-600 transition"
          >
            <MessageCircle className="text-white h-4 w-4" />
          </motion.a>
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>

        {/* MENU MOBILE */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 rounded-md hover:bg-white/10 transition"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MENÚ DESLIZANTE MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-white text-lg font-medium transition ${
                    location.pathname === item.path ? "text-teal-400" : "hover:text-teal-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/50688888888"
                target="_blank"
                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 mt-2"
              >
                <MessageCircle className="w-4 h-4" /> {t.whatsapp}
              </a>
              <LanguageToggle language={language} setLanguage={setLanguage} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
