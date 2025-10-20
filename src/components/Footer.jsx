import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGlobeAmericas } from "react-icons/fa";
import logo from "../assets/pvT.png";

export default function Footer({ language }) {
  const navigate = useNavigate();
  const go = (p) => {
    navigate(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 🌐 Traducciones
  const t = {
    es: {
      description:
        "Sitio demo de bienes raíces desarrollado por Pura Vida Tech. Inspirado en la naturaleza, la innovación y el espíritu “Pura Vida”.",
      navigation: "Navegación",
      contact: "Contacto",
      developedBy: "Desarrollado por",
      address: "📍 Bahía Ballena, Osa, Puntarenas",
      phone: "📞 +506 8888-8888",
      email: "info@puravidatech.com",
      links: { home: "Inicio", zones: "Zonas", properties: "Propiedades", contact: "Contacto" },
      rights: "Todos los derechos reservados.",
      by: "Desarrollado por",
      tagline: "Soluciones digitales con identidad costarricense.",
    },
    en: {
      description:
        "Demo real estate website developed by Pura Vida Tech. Inspired by nature, innovation, and the ‘Pura Vida’ spirit.",
      navigation: "Navigation",
      contact: "Contact",
      developedBy: "Developed by",
      address: "📍 Bahía Ballena, Osa, Puntarenas, Costa Rica",
      phone: "📞 +506 8888-8888",
      email: "info@puravidatech.com",
      links: { home: "Home", zones: "Zones", properties: "Properties", contact: "Contact" },
      rights: "All rights reserved.",
      by: "Developed by",
      tagline: "Digital solutions with Costa Rican identity.",
    },
    fr: {
      description:
        "Site de démonstration immobilière développé par Pura Vida Tech. Inspiré par la nature, l'innovation et l'esprit « Pura Vida ».",
      navigation: "Navigation",
      contact: "Contact",
      developedBy: "Développé par",
      address: "📍 Bahía Ballena, Osa, Puntarenas, Costa Rica",
      phone: "📞 +506 8888-8888",
      email: "info@puravidatech.com",
      links: { home: "Accueil", zones: "Zones", properties: "Propriétés", contact: "Contact" },
      rights: "Tous droits réservés.",
      by: "Développé par",
      tagline: "Solutions numériques avec une identité costaricienne.",
    },
    de: {
      description:
        "Demo-Website für Immobilien, entwickelt von Pura Vida Tech. Inspiriert von Natur, Innovation und dem „Pura Vida“-Geist.",
      navigation: "Navigation",
      contact: "Kontakt",
      developedBy: "Entwickelt von",
      address: "📍 Bahía Ballena, Osa, Puntarenas, Costa Rica",
      phone: "📞 +506 8888-8888",
      email: "info@puravidatech.com",
      links: { home: "Startseite", zones: "Regionen", properties: "Immobilien", contact: "Kontakt" },
      rights: "Alle Rechte vorbehalten.",
      by: "Entwickelt von",
      tagline: "Digitale Lösungen mit costa-ricanischer Identität.",
    },
    pt: {
      description:
        "Site demo de imóveis desenvolvido pela Pura Vida Tech. Inspirado na natureza, inovação e no espírito 'Pura Vida'.",
      navigation: "Navegação",
      contact: "Contato",
      developedBy: "Desenvolvido por",
      address: "📍 Bahía Ballena, Osa, Puntarenas, Costa Rica",
      phone: "📞 +506 8888-8888",
      email: "info@puravidatech.com",
      links: { home: "Início", zones: "Zonas", properties: "Propriedades", contact: "Contato" },
      rights: "Todos os direitos reservados.",
      by: "Desenvolvido por",
      tagline: "Soluções digitais com identidade costarriquenha.",
    },
  }[language];

  return (
    <motion.footer
      className="bg-[#0b2538] text-gray-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        {/* LOGO Y DESCRIPCIÓN */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <img
            src={logo}
            alt="Pura Vida Tech"
            className="h-12 w-auto mb-4 cursor-pointer"
            onClick={() => go("/")}
          />
          <p className="text-sm text-gray-400 leading-relaxed">{t.description}</p>
        </motion.div>

        {/* NAVEGACIÓN */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t.navigation}</h3>
          <ul className="space-y-2 text-sm">
            <li onClick={() => go("/")} className="hover:text-[#14b8a6] cursor-pointer transition">
              {t.links.home}
            </li>
            <li onClick={() => go("/zonas")} className="hover:text-[#14b8a6] cursor-pointer transition">
              {t.links.zones}
            </li>
            <li
              onClick={() => go("/propiedades")}
              className="hover:text-[#14b8a6] cursor-pointer transition"
            >
              {t.links.properties}
            </li>
            <li>
              <a
                href="https://wa.me/50688888888"
                target="_blank"
                className="hover:text-[#14b8a6] transition"
              >
                {t.links.contact}
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t.contact}</h3>
          <ul className="space-y-2 text-sm">
            <li>{t.address}</li>
            <li>{t.phone}</li>
            <li>
              <a href={`mailto:${t.email}`} className="hover:text-[#14b8a6] transition">
                {t.email}
              </a>
            </li>
          </ul>
        </div>

        {/* DESARROLLADOR */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t.developedBy}</h3>
          <div className="flex items-center gap-2 mb-2">
            <FaGlobeAmericas className="text-[#14b8a6]" />
            <p className="font-semibold text-white">Pura Vida Tech</p>
          </div>
          <p className="text-sm text-gray-400 mb-3">{t.tagline}</p>
          <div className="flex gap-4 text-xl text-gray-400">
            <motion.a
              href="https://facebook.com/"
              target="_blank"
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="hover:text-[#14b8a6] transition"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="https://instagram.com/"
              target="_blank"
              whileHover={{ scale: 1.15, rotate: -5 }}
              className="hover:text-[#14b8a6] transition"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://wa.me/50688888888"
              target="_blank"
              whileHover={{ scale: 1.15 }}
              className="hover:text-[#14b8a6] transition"
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </div>
      </div>

      {/* LÍNEA DIVISORIA */}
      <div className="border-t border-gray-700/60"></div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Demo Bienes Raíces. {t.rights}</p>
        <p>
          {t.by}{" "}
          <a
            href="https://pura-vida-tech.vercel.app/"
            target="_blank"
            className="text-[#14b8a6] hover:underline font-medium"
          >
            Pura Vida Tech
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
