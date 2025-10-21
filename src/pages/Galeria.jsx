import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ballena from "../assets/ballena.avif";
import ballena1 from "../assets/ballena1.avif";
import osa from "../assets/osa.avif";
import nauyaca from "../assets/nauyaca.avif";
import palm from "../assets/palm.avif";
import playa from "../assets/playa.avif";
import atar from "../assets/atar.avif";
import atard from "../assets/atard.avif";
import atardecer from "../assets/atardecer.avif";
import mono from "../assets/mono.avif";
import mont from "../assets/mont.avif";
import oso from "../assets/oso.avif";
import osa2 from "../assets/osa.avif";
import pla from "../assets/pla.avif";
import rana from "../assets/rana.avif";
import tuc from "../assets/tuc.avif";

export default function Galeria({ language }) {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const t = {
    es: {
      title: "Galería Bahía Ballena",
      subtitle:
        "Donde el Pacífico abraza la selva tropical 🌴  Un viaje visual por los paisajes más puros de Costa Rica.",
      alt: "Paisaje de Bahía Ballena",
      discover: "Descubre la magia del Pacífico Sur 🌅",
      contact: "Contáctanos por WhatsApp",
    },
    en: {
      title: "Bahía Ballena Gallery",
      subtitle:
        "Where the Pacific embraces the rainforest 🌴  A visual journey through Costa Rica’s purest landscapes.",
      alt: "Bahía Ballena landscape",
      discover: "Discover the magic of the South Pacific 🌅",
      contact: "Contact us via WhatsApp",
    },
    fr: {
      title: "Galerie Bahía Ballena",
      subtitle:
        "Là où le Pacifique embrasse la forêt tropicale 🌴  Un voyage visuel à travers les paysages les plus purs du Costa Rica.",
      alt: "Paysage de Bahía Ballena",
      discover: "Découvrez la magie du Pacifique Sud 🌅",
      contact: "Contactez-nous sur WhatsApp",
    },
    de: {
      title: "Galerie Bahía Ballena",
      subtitle:
        "Wo der Pazifik den Regenwald umarmt 🌴  Eine visuelle Reise durch die reinsten Landschaften Costa Ricas.",
      alt: "Landschaft von Bahía Ballena",
      discover: "Entdecken Sie die Magie des Südpazifiks 🌅",
      contact: "Kontaktieren Sie uns über WhatsApp",
    },
    pt: {
      title: "Galeria Bahía Ballena",
      subtitle:
        "Onde o Pacífico abraça a floresta tropical 🌴  Uma jornada visual pelas paisagens mais puras da Costa Rica.",
      alt: "Paisagem de Bahía Ballena",
      discover: "Descubra a magia do Pacífico Sul 🌅",
      contact: "Contate-nos pelo WhatsApp",
    },
  }[language];

  const imagenes = [
    { src: ballena, alt: t.alt },
    { src: ballena1, alt: t.alt },
    { src: osa, alt: t.alt },
    { src: nauyaca, alt: t.alt },
    { src: palm, alt: t.alt },
    { src: playa, alt: t.alt },
    { src: atar, alt: t.alt },
    { src: atard, alt: t.alt },
    { src: atardecer, alt: t.alt },
    { src: mono, alt: t.alt },
    { src: mont, alt: t.alt },
    { src: oso, alt: t.alt },
    { src: osa2, alt: t.alt },
    { src: pla, alt: t.alt },
    { src: rana, alt: t.alt },
    { src: tuc, alt: t.alt },
  ];

  const carrusel = [ballena1, nauyaca, palm, playa, osa, atardecer, mono, mont];

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % carrusel.length),
      4000
    );
    return () => clearInterval(interval);
  }, [autoSlide, carrusel.length]);

  const handleOpen = (index) => {
    setSelected(imagenes[index]);
    setCurrentIndex(index);
    setAutoSlide(false);
  };

  const handleClose = () => {
    setSelected(null);
    setAutoSlide(true);
  };

  const next = () => setCurrentIndex((prev) => (prev + 1) % imagenes.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));

  return (
    <motion.section
      id="galeria"
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HEADER */}
      <motion.div
        className="text-center py-20 md:py-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-3">
          {t.title}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
        <div className="w-24 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-300 mx-auto mt-6 rounded-full animate-pulse" />
      </motion.div>


      {/* GALERÍA */}
      <motion.div
        className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {imagenes.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleOpen(index)}
            className="cursor-pointer relative overflow-hidden rounded-3xl group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
              <p className="text-sm text-white font-semibold mb-3 drop-shadow-lg">
                {img.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full bg-gray-950 rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={prev}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black"
              >
                ❮
              </button>
              <button
                onClick={next}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black"
              >
                ❯
              </button>
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 bg-black/70 text-white rounded-full px-3 py-1 hover:bg-black transition"
              >
                ✕
              </button>
              <img
                src={imagenes[currentIndex].src}
                alt={imagenes[currentIndex].alt}
                loading="lazy"
                className="w-full h-[80vh] object-cover"
              />
              <p className="text-center py-4 text-gray-300 font-medium text-lg bg-gray-900">
                {imagenes[currentIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAPA */}
      <motion.div
        className="relative w-full h-[500px] border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          title="Mapa Bahía Ballena"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62915.22917179089!2d-83.7698705187635!3d9.155132385296713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa3ec6f19dfb2d3%3A0xd1b8f4f1f4b0d5f9!2sBah%C3%ADa%20Ballena%2C%20Puntarenas!5e0!3m2!1sen!2scr!4v1709756077921!5m2!1sen!2scr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* CTA FINAL */}
      <motion.div
        className="text-center py-20 bg-gradient-to-b from-gray-900 to-black"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6">{t.discover}</h2>
        <a
          href="https://wa.me/50688888888"
          target="_blank"
          className="px-10 py-4 bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-semibold rounded-full hover:shadow-teal-400/40 transition-all duration-300"
        >
          {t.contact}
        </a>
      </motion.div>
    </motion.section>
  );
}
