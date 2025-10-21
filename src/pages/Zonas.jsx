import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import playa from "../assets/playa.avif";
import palm1 from "../assets/palm1.avif";
import palm from "../assets/palm.avif";
import ballena1 from "../assets/ballena1.avif";

export default function Zonas({ language }) {
  const navigate = useNavigate();

  // 🌐 Traducciones
  const t = {
    es: {
      heroTitle: "Zonas de Bahía Ballena",
      heroText:
        "Tres joyas del Pacífico Sur. Cada una con su encanto, energía y oportunidades únicas.",
      zones: [
        {
          name: "Uvita",
          desc: "Centro vibrante del Pacífico Sur y puerta de entrada al Parque Nacional Marino Ballena. El equilibrio perfecto entre inversión, naturaleza y estilo de vida costero.",
          color: "from-teal-500/80 to-transparent",
          img: playa,
        },
        {
          name: "Ojochal",
          desc: "Destino gourmet de lujo rodeado por selva y montañas. Villas exclusivas, privacidad y gastronomía internacional en un entorno paradisíaco.",
          color: "from-emerald-600/80 to-transparent",
          img: palm1,
        },
        {
          name: "Dominical",
          desc: "Ambiente surfero y artístico con vistas panorámicas al océano Pacífico. Un enclave internacional donde la aventura se mezcla con el confort.",
          color: "from-cyan-600/80 to-transparent",
          img: palm,
        },
      ],
      ctaTitle: "Osa, donde el océano abraza la montaña 🌊",
      ctaText:
        "Bahía Ballena es más que un destino. Es un equilibrio entre lujo, naturaleza y autenticidad. Encuentra el lugar perfecto para tu próxima historia.",
      ctaBtn: "Ver todas las propiedades",
    },
    en: {
      heroTitle: "Bahía Ballena Regions",
      heroText:
        "Three gems of the South Pacific. Each with its own charm, energy, and unique opportunities.",
      zones: [
        {
          name: "Uvita",
          desc: "A vibrant hub of the South Pacific and gateway to Marino Ballena National Park. The perfect balance between investment, nature, and coastal living.",
          color: "from-teal-500/80 to-transparent",
          img: playa,
        },
        {
          name: "Ojochal",
          desc: "A gourmet luxury destination surrounded by jungle and mountains. Exclusive villas, privacy, and international cuisine in a paradise setting.",
          color: "from-emerald-600/80 to-transparent",
          img: palm1,
        },
        {
          name: "Dominical",
          desc: "A surfer and artistic town with panoramic views of the Pacific Ocean. An international enclave where adventure meets comfort.",
          color: "from-cyan-600/80 to-transparent",
          img: palm,
        },
      ],
      ctaTitle: "Osa — where the ocean embraces the mountains 🌊",
      ctaText:
        "Bahía Ballena is more than a destination. It’s a balance of luxury, nature, and authenticity. Find the perfect place for your next story.",
      ctaBtn: "View all properties",
    },
    fr: {
      heroTitle: "Régions de Bahía Ballena",
      heroText:
        "Trois joyaux du Pacifique Sud. Chacun avec son charme, son énergie et ses opportunités uniques.",
      zones: [
        {
          name: "Uvita",
          desc: "Centre dynamique du Pacifique Sud et porte d’entrée du Parc National Marino Ballena. Un équilibre parfait entre investissement, nature et vie côtière.",
          color: "from-teal-500/80 to-transparent",
          img: playa,
        },
        {
          name: "Ojochal",
          desc: "Destination gastronomique de luxe entourée de jungle et de montagnes. Villas exclusives, intimité et cuisine internationale dans un cadre paradisiaque.",
          color: "from-emerald-600/80 to-transparent",
          img: palm1,
        },
        {
          name: "Dominical",
          desc: "Village de surf et d’art avec vue panoramique sur l’océan Pacifique. Un lieu international où l’aventure rencontre le confort.",
          color: "from-cyan-600/80 to-transparent",
          img: palm,
        },
      ],
      ctaTitle: "Osa — là où l’océan embrasse la montagne 🌊",
      ctaText:
        "Bahía Ballena est bien plus qu’une destination. C’est un équilibre entre luxe, nature et authenticité. Trouvez l’endroit parfait pour votre prochaine histoire.",
      ctaBtn: "Voir toutes les propriétés",
    },
    de: {
      heroTitle: "Regionen von Bahía Ballena",
      heroText:
        "Drei Juwelen des Südpazifiks. Jede mit ihrem eigenen Charme, ihrer Energie und ihren einzigartigen Möglichkeiten.",
      zones: [
        {
          name: "Uvita",
          desc: "Ein lebendiges Zentrum des Südpazifiks und Tor zum Marino-Ballena-Nationalpark. Die perfekte Balance zwischen Investition, Natur und Küstenleben.",
          color: "from-teal-500/80 to-transparent",
          img: playa,
        },
        {
          name: "Ojochal",
          desc: "Luxuriöses Gourmetziel, umgeben von Dschungel und Bergen. Exklusive Villen, Privatsphäre und internationale Küche in paradiesischer Umgebung.",
          color: "from-emerald-600/80 to-transparent",
          img: palm1,
        },
        {
          name: "Dominical",
          desc: "Ein Surfer- und Künstlerdorf mit Panoramablick auf den Pazifik. Ein internationaler Ort, an dem Abenteuer auf Komfort trifft.",
          color: "from-cyan-600/80 to-transparent",
          img: palm,
        },
      ],
      ctaTitle: "Osa — wo der Ozean die Berge umarmt 🌊",
      ctaText:
        "Bahía Ballena ist mehr als ein Reiseziel. Es ist ein Gleichgewicht zwischen Luxus, Natur und Authentizität. Finde den perfekten Ort für deine nächste Geschichte.",
      ctaBtn: "Alle Immobilien ansehen",
    },
    pt: {
      heroTitle: "Zonas de Bahía Ballena",
      heroText:
        "Três joias do Pacífico Sul. Cada uma com seu charme, energia e oportunidades únicas.",
      zones: [
        {
          name: "Uvita",
          desc: "Centro vibrante do Pacífico Sul e porta de entrada para o Parque Nacional Marino Ballena. O equilíbrio perfeito entre investimento, natureza e vida costeira.",
          color: "from-teal-500/80 to-transparent",
          img: playa,
        },
        {
          name: "Ojochal",
          desc: "Destino gastronômico de luxo cercado por selva e montanhas. Vilas exclusivas, privacidade e culinária internacional em um cenário paradisíaco.",
          color: "from-emerald-600/80 to-transparent",
          img: palm1,
        },
        {
          name: "Dominical",
          desc: "Ambiente de surf e arte com vistas panorâmicas do oceano Pacífico. Um enclave internacional onde aventura e conforto se encontram.",
          color: "from-cyan-600/80 to-transparent",
          img: palm,
        },
      ],
      ctaTitle: "Osa — onde o oceano abraça a montanha 🌊",
      ctaText:
        "Bahía Ballena é mais do que um destino. É um equilíbrio entre luxo, natureza e autenticidade. Encontre o lugar perfeito para a sua próxima história.",
      ctaBtn: "Ver todas as propriedades",
    },
  }[language];

  return (
    <section id="zonas" className="bg-gray-950 text-white overflow-hidden">
      {/* HERO */}
      <div
        className="relative h-[20vh] flex flex-col justify-center items-center bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-8xl md:text-7xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-200 drop-shadow-lg">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t.heroText}
          </p>
        </motion.div>
      </div>

      {/* BLOQUES DE ZONAS */}
      <div className="max-w-7xl mx-auto py-24 space-y-32">
        {t.zones.map((zona, i) => (
          <motion.div
            key={i}
            className={`relative grid md:grid-cols-2 items-center gap-10 ${
              i % 2 !== 0 ? "md:grid-flow-col-dense" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* IMAGEN */}
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 60 }}
            >
              <img
                src={zona.img}
                alt={zona.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${zona.color} opacity-90 group-hover:opacity-70 transition duration-500`}
              ></div>
              <motion.h2
                className="absolute bottom-6 left-6 text-4xl font-bold drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {zona.name}
              </motion.h2>
            </motion.div>

            {/* TEXTO */}
            <div className="px-6 md:px-10 space-y-6">
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-teal-400"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {zona.name}
              </motion.h3>
              <motion.p
                className="text-gray-300 leading-relaxed text-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {zona.desc}
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/propiedades?zona=${zona.name}`)}
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-semibold rounded-full shadow-lg hover:shadow-teal-500/30 transition-all"
              >
                {language === "es"
                  ? `Explorar ${zona.name}`
                  : language === "fr"
                  ? `Explorer ${zona.name}`
                  : language === "de"
                  ? `Entdecken ${zona.name}`
                  : language === "pt"
                  ? `Explorar ${zona.name}`
                  : `Explore ${zona.name}`}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA FINAL */}
      <motion.div
        className="text-center py-20 bg-gradient-to-b from-gray-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">{t.ctaText}</p>
        <button
          onClick={() => navigate("/propiedades")}
          className="px-10 py-3 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-all"
        >
          {t.ctaBtn}
        </button>
      </motion.div>
    </section>
  );
}
