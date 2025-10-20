import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ballena from "../assets/ballena.avif";
import ballena1 from "../assets/ballena1.avif";
import playa from "../assets/playa.avif";
import palm1 from "../assets/palm1.avif";
import nauyaca from "../assets/nauyaca.avif";
import osa from "../assets/osa.avif";

export default function Home({ language }) {
  const navigate = useNavigate();
  const fondos = [ballena, ballena1, playa, palm1, nauyaca, osa];
  const [index, setIndex] = useState(0);

  // 🌐 Traducciones
  const t = {
    es: {
      heroTitle: "Vive la experiencia",
      heroHighlight: "Bahía Ballena",
      heroText: "Donde el océano abraza la montaña 🌴 — naturaleza, inversión y estilo de vida.",
      heroBtn: "Explorar Propiedades",
      discoverTitle: "Descubre por qué todos eligen Bahía Ballena",
      features: [
        { title: "Clima Tropical Perfecto", text: "Más de 300 días soleados al año con brisa del Pacífico.", icon: "☀️" },
        { title: "Inversión Inteligente", text: "Rentabilidad turística en crecimiento constante.", icon: "💼" },
        { title: "Estilo de Vida Natural", text: "Playas, cataratas y biodiversidad en cada esquina.", icon: "🌊" },
      ],
      statsTitle: "Un destino con propósito 🌎",
      stats: [
        { number: "500+", text: "Especies protegidas" },
        { number: "30%", text: "Crecimiento anual turístico" },
        { number: "10/10", text: "Índice de bienestar local" },
      ],
      ctaTitle: "Vive el sueño costarricense con Bahía Ballena Real Estate",
      ctaBtn: "Contáctanos por WhatsApp",
    },
    en: {
      heroTitle: "Experience the magic of",
      heroHighlight: "Bahía Ballena",
      heroText: "Where the ocean meets the mountains 🌴 — nature, investment, and lifestyle.",
      heroBtn: "Explore Properties",
      discoverTitle: "Discover why everyone chooses Bahía Ballena",
      features: [
        { title: "Perfect Tropical Climate", text: "Over 300 sunny days a year with a Pacific breeze.", icon: "☀️" },
        { title: "Smart Investment", text: "Tourism profitability constantly growing.", icon: "💼" },
        { title: "Natural Lifestyle", text: "Beaches, waterfalls, and wildlife everywhere.", icon: "🌊" },
      ],
      statsTitle: "A destination with purpose 🌎",
      stats: [
        { number: "500+", text: "Protected species" },
        { number: "30%", text: "Annual tourism growth" },
        { number: "10/10", text: "Local well-being index" },
      ],
      ctaTitle: "Live the Costa Rican dream with Bahía Ballena Real Estate",
      ctaBtn: "Contact us on WhatsApp",
    },
    fr: {
      heroTitle: "Vivez l’expérience",
      heroHighlight: "Bahía Ballena",
      heroText: "Où l’océan rencontre la montagne 🌴 — nature, investissement et style de vie.",
      heroBtn: "Explorer les propriétés",
      discoverTitle: "Découvrez pourquoi tout le monde choisit Bahía Ballena",
      features: [
        { title: "Climat tropical parfait", text: "Plus de 300 jours de soleil par an avec la brise du Pacifique.", icon: "☀️" },
        { title: "Investissement intelligent", text: "Rentabilité touristique en croissance constante.", icon: "💼" },
        { title: "Style de vie naturel", text: "Plages, cascades et biodiversité à chaque coin.", icon: "🌊" },
      ],
      statsTitle: "Une destination avec un but 🌎",
      stats: [
        { number: "500+", text: "Espèces protégées" },
        { number: "30%", text: "Croissance touristique annuelle" },
        { number: "10/10", text: "Indice de bien-être local" },
      ],
      ctaTitle: "Vivez le rêve costaricien avec Bahía Ballena Real Estate",
      ctaBtn: "Contactez-nous sur WhatsApp",
    },
    de: {
      heroTitle: "Erlebe die Magie von",
      heroHighlight: "Bahía Ballena",
      heroText: "Wo der Ozean die Berge trifft 🌴 — Natur, Investition und Lebensstil.",
      heroBtn: "Immobilien erkunden",
      discoverTitle: "Entdecke, warum alle Bahía Ballena wählen",
      features: [
        { title: "Perfektes tropisches Klima", text: "Über 300 Sonnentage im Jahr mit Pazifikbrise.", icon: "☀️" },
        { title: "Kluge Investition", text: "Wachsende touristische Rentabilität.", icon: "💼" },
        { title: "Natürlicher Lebensstil", text: "Strände, Wasserfälle und Wildtiere überall.", icon: "🌊" },
      ],
      statsTitle: "Ein Ziel mit Sinn 🌎",
      stats: [
        { number: "500+", text: "Geschützte Arten" },
        { number: "30%", text: "Jährliches Tourismuswachstum" },
        { number: "10/10", text: "Lokaler Wohlstandsindex" },
      ],
      ctaTitle: "Lebe den costa-ricanischen Traum mit Bahía Ballena Real Estate",
      ctaBtn: "Kontaktiere uns auf WhatsApp",
    },
    pt: {
      heroTitle: "Viva a experiência de",
      heroHighlight: "Bahía Ballena",
      heroText: "Onde o oceano encontra as montanhas 🌴 — natureza, investimento e estilo de vida.",
      heroBtn: "Explorar Propriedades",
      discoverTitle: "Descubra por que todos escolhem Bahía Ballena",
      features: [
        { title: "Clima tropical perfeito", text: "Mais de 300 dias de sol por ano com brisa do Pacífico.", icon: "☀️" },
        { title: "Investimento inteligente", text: "Rentabilidade turística em constante crescimento.", icon: "💼" },
        { title: "Estilo de vida natural", text: "Praias, cachoeiras e biodiversidade por toda parte.", icon: "🌊" },
      ],
      statsTitle: "Um destino com propósito 🌎",
      stats: [
        { number: "500+", text: "Espécies protegidas" },
        { number: "30%", text: "Crescimento anual do turismo" },
        { number: "10/10", text: "Índice de bem-estar local" },
      ],
      ctaTitle: "Viva o sonho costa-riquenho com Bahía Ballena Real Estate",
      ctaBtn: "Fale conosco no WhatsApp",
    },
  }[language];

  // Preload + fondo rotativo
  useEffect(() => {
    fondos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % fondos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-white text-gray-800">
      {/* HERO CINEMÁTICO */}
      <div className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${fondos[index]})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
            {t.heroTitle}{" "}
            <span className="text-teal-400">{t.heroHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            {t.heroText}
          </p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #14b8a6" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/propiedades")}
            className="px-10 py-3 bg-teal-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-teal-600 transition-all duration-300"
          >
            {t.heroBtn}
          </motion.button>
        </motion.div>
      </div>

      {/* DESCUBRE */}
      <div className="max-w-7xl mx-auto py-24 px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.discoverTitle}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {t.features.map((card, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-2xl transition-transform hover:-translate-y-2 border border-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DATOS */}
      <div
        className="relative py-24 text-center text-white"
        style={{ backgroundImage: `url(${nauyaca})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {t.statsTitle}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {t.stats.map((dato, i) => (
              <motion.div
                key={i}
                className="bg-white/10 rounded-2xl p-8 backdrop-blur-md border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-5xl font-bold text-teal-400 mb-2">
                  {dato.number}
                </h3>
                <p className="text-gray-200 text-lg">{dato.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MAPA + CTA */}
      <div className="w-full h-[500px] border-t border-gray-200">
        <iframe
          title="Mapa Bahía Ballena"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62915.22917179089!2d-83.7698705187635!3d9.155132385296713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa3ec6f19dfb2d3%3A0xd1b8f4f1f4b0d5f9!2sBah%C3%ADa%20Ballena%2C%20Puntarenas!5e0!3m2!1sen!2scr!4v1709756077921!5m2!1sen!2scr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </div>

      <div className="text-center py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          {t.ctaTitle}
        </h2>
        <a
          href="https://wa.me/50688888888"
          target="_blank"
          className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-all duration-300 shadow-lg"
        >
          {t.ctaBtn}
        </a>
      </div>
    </section>
  );
}
