import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";



import uv0 from "../assets/propiedades/uvita/casaUv/casaUv.avif";
import uv0_1 from "../assets/propiedades/uvita/casaUv/casaUv0_1.avif";
import uv0_2 from "../assets/propiedades/uvita/casaUv/casaUv0_2.avif";
import uv0_3 from "../assets/propiedades/uvita/casaUv/casaUv0_3.avif";
import uv1 from "../assets/propiedades/uvita/casaUv1.avif";
import uv2 from "../assets/propiedades/uvita/casaUv2.avif";
import uv3 from "../assets/propiedades/uvita/casaUv3.avif";
import ojA from "../assets/propiedades/ojochal/casaOJ.avif";
import oj1 from "../assets/propiedades/ojochal/casaOj1.avif";
import oj2 from "../assets/propiedades/ojochal/casaOj2.avif";
import dom2_0 from "../assets/propiedades/dominical/casaDom2/casaDom2_0.avif";
import dom2_1 from "../assets/propiedades/dominical/casaDom2/casaDom2_1.avif";
import dom2_2 from "../assets/propiedades/dominical/casaDom2/casaDom2_2.avif";
import dom2_3 from "../assets/propiedades/dominical/casaDom2/casaDom2_3.avif";
import dom3 from "../assets/propiedades/dominical/casaDom3.avif";
import dom4 from "../assets/propiedades/dominical/casaDom4.avif";


const formatUSD = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const propiedadesData = [
  {
    id: "Uv-00",
    zona: "Uvita",
    titulo: {
      es: "Villa Horizonte del Mar",
      en: "Villa Horizon of the Sea",
      fr: "Villa Horizon de la Mer",
      de: "Villa Horizont des Meeres",
      pt: "Vila Horizonte do Mar",
    },
    precioUSD: 480000,
    cover: uv0,
    galeria: [uv0, uv0_1, uv0_2, uv0_3],
    resumen: {
      es: "Arquitectura tropical moderna a minutos del Parque Marino Ballena.",
      en: "Modern tropical architecture minutes from Marino Ballena National Park.",
      fr: "Architecture tropicale moderne à quelques minutes du parc Marino Ballena.",
      de: "Moderne tropische Architektur, nur wenige Minuten vom Marino-Ballena-Nationalpark entfernt.",
      pt: "Arquitetura tropical moderna a poucos minutos do Parque Nacional Marino Ballena.",
    },
  },
  {
    id: "Uv-01",
    zona: "Uvita",
    titulo: {
      es: "Casa Bamboo Vista Verde",
      en: "Bamboo Green View House",
      fr: "Maison Bamboo Vue Verte",
      de: "Haus Bambus Grüne Aussicht",
      pt: "Casa Bambu Vista Verde",
    },
    precioUSD: 340000,
    cover: uv1,
    galeria: [uv1],
    resumen: {
      es: "Espacios abiertos, luz natural y vegetación alrededor.",
      en: "Open spaces, natural light, and lush greenery all around.",
      fr: "Espaces ouverts, lumière naturelle et verdure tout autour.",
      de: "Offene Räume, natürliches Licht und üppiges Grün überall.",
      pt: "Espaços abertos, luz natural e vegetação exuberante ao redor.",
    },
  },
  {
    id: "Uv-02",
    zona: "Uvita",
    titulo: {
      es: "Villa del Sol Marino",
      en: "Marine Sun Villa",
      fr: "Villa du Soleil Marin",
      de: "Villa Sonnenschein am Meer",
      pt: "Vila Sol do Mar",
    },
    precioUSD: 395000,
    cover: uv2,
    galeria: [uv2],
    resumen: {
      es: "Piscina y áreas sociales para disfrutar en familia.",
      en: "Pool and social areas to enjoy with family.",
      fr: "Piscine et espaces sociaux pour profiter en famille.",
      de: "Pool und Gemeinschaftsbereiche für die Familie.",
      pt: "Piscina e áreas sociais para curtir em família.",
    },
  },
  {
    id: "Uv-03",
    zona: "Uvita",
    titulo: {
      es: "Casa Coral Bahía",
      en: "Bahia Coral House",
      fr: "Maison Corail Bahia",
      de: "Korallenhaus Bahia",
      pt: "Casa Coral Bahia",
    },
    precioUSD: 360000,
    cover: uv3,
    galeria: [uv3],
    resumen: {
      es: "Diseño contemporáneo a pasos de la naturaleza.",
      en: "Contemporary design just steps from nature.",
      fr: "Design contemporain à deux pas de la nature.",
      de: "Zeitgenössisches Design nur wenige Schritte von der Natur entfernt.",
      pt: "Design contemporâneo a poucos passos da natureza.",
    },
  },
  {
    id: "Oj-01",
    zona: "Ojochal",
    titulo: {
      es: "Villa Escondida",
      en: "Hidden Villa",
      fr: "Villa Cachée",
      de: "Versteckte Villa",
      pt: "Vila Escondida",
    },
    precioUSD: 620000,
    cover: ojA,
    galeria: [ojA],
    resumen: {
      es: "Privacidad total cerca de Playa Ventanas y escena gourmet.",
      en: "Complete privacy near Playa Ventanas and gourmet restaurants.",
      fr: "Intimité totale près de Playa Ventanas et des restaurants gastronomiques.",
      de: "Völlige Privatsphäre in der Nähe von Playa Ventanas und Gourmetrestaurants.",
      pt: "Privacidade total perto da Playa Ventanas e de restaurantes gourmet.",
    },
  },
  {
    id: "Oj-02",
    zona: "Ojochal",
    titulo: {
      es: "Casa del Río",
      en: "River House",
      fr: "Maison du Fleuve",
      de: "Flusshaus",
      pt: "Casa do Rio",
    },
    precioUSD: 410000,
    cover: oj1,
    galeria: [oj1],
    resumen: {
      es: "Materiales naturales y confort con sonido de río cercano.",
      en: "Natural materials and comfort with the sound of a nearby river.",
      fr: "Matériaux naturels et confort avec le son de la rivière proche.",
      de: "Natürliche Materialien und Komfort mit dem Klang des nahen Flusses.",
      pt: "Materiais naturais e conforto com o som do rio próximo.",
    },
  },
  {
    id: "Oj-03",
    zona: "Ojochal",
    titulo: {
      es: "Villa Gourmet",
      en: "Gourmet Villa",
      fr: "Villa Gastronomique",
      de: "Gourmetvilla",
      pt: "Vila Gourmet",
    },
    precioUSD: 465000,
    cover: oj2,
    galeria: [oj2],
    resumen: {
      es: "Perfecta para renta vacacional de alto perfil.",
      en: "Perfect for high-end vacation rentals.",
      fr: "Parfaite pour les locations de vacances haut de gamme.",
      de: "Perfekt für hochwertige Ferienvermietungen.",
      pt: "Perfeita para aluguel de temporada de alto padrão.",
    },
  },
  {
    id: "Dom-02",
    zona: "Dominical",
    titulo: {
      es: "Casa del Sol Pacífico",
      en: "Pacific Sun House",
      fr: "Maison du Soleil Pacifique",
      de: "Haus Pazifiksonne",
      pt: "Casa Sol do Pacífico",
    },
    precioUSD: 530000,
    cover: dom2_1,
    galeria: [dom2_1, dom2_0, dom2_2, dom2_3],
    resumen: {
      es: "Vista al mar y ambientes surferos a minutos del centro.",
      en: "Ocean view and surf vibes just minutes from downtown.",
      fr: "Vue sur l'océan et ambiance surf à quelques minutes du centre.",
      de: "Meerblick und Surfer-Atmosphäre nur wenige Minuten vom Zentrum entfernt.",
      pt: "Vista para o mar e clima surfista a poucos minutos do centro.",
    },
  },
  {
    id: "Dom-03",
    zona: "Dominical",
    titulo: {
      es: "Jardines del Horizonte",
      en: "Horizon Gardens",
      fr: "Jardins de l’Horizon",
      de: "Horizontgärten",
      pt: "Jardins do Horizonte",
    },
    precioUSD: 360000,
    cover: dom3,
    galeria: [dom3],
    resumen: {
      es: "Residencia ecológica con jardines y energía solar.",
      en: "Eco-friendly residence with gardens and solar energy.",
      fr: "Résidence écologique avec jardins et énergie solaire.",
      de: "Umweltfreundliches Haus mit Gärten und Solarenergie.",
      pt: "Residência ecológica com jardins e energia solar.",
    },
  },
  {
    id: "Dom-04",
    zona: "Dominical",
    titulo: {
      es: "Casa Vista Mar",
      en: "Sea View House",
      fr: "Maison Vue sur Mer",
      de: "Haus Meerblick",
      pt: "Casa Vista Mar",
    },
    precioUSD: 575000,
    cover: dom4,
    galeria: [dom4],
    resumen: {
      es: "Terraza panorámica y acabados premium.",
      en: "Panoramic terrace and premium finishes.",
      fr: "Terrasse panoramique et finitions haut de gamme.",
      de: "Panoramaterrasse und hochwertige Ausstattung.",
      pt: "Terraço panorâmico e acabamentos premium.",
    },
  },
];

export default function Propiedades({ language }) {
  const q = useQuery();
  const [zona, setZona] = useState(q.get("zona") || "Todas");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [open, setOpen] = useState(false);
  const [activeProp, setActiveProp] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const textos = {
    es: {
      title: "Propiedades en Bahía Ballena",
      subtitle: "Explora, filtra y encuentra el lugar ideal. Vive el lujo natural.",
      zone: "Zona",
      all: "Todas",
      minPrice: "Precio mínimo (USD)",
      maxPrice: "Precio máximo (USD)",
      placeholderMin: "Ej: 250000",
      placeholderMax: "Ej: 600000",
      noResults: "No hay propiedades en este rango.",
      btnInfo: "WhatsApp",
    },
    en: {
      title: "Properties in Bahía Ballena",
      subtitle: "Explore, filter and find your ideal place. Experience natural luxury.",
      zone: "Area",
      all: "All",
      minPrice: "Minimum price (USD)",
      maxPrice: "Maximum price (USD)",
      placeholderMin: "Ex: 250000",
      placeholderMax: "Ex: 600000",
      noResults: "No properties found in this range.",
      btnInfo: "WhatsApp",
    },
    fr: {
      title: "Propriétés à Bahía Ballena",
      subtitle: "Vivez le luxe naturel. Filtrez par zone ou prix et explorez chaque espace.",
      zone: "Zone",
      all: "Toutes",
      minPrice: "Prix minimum (USD)",
      maxPrice: "Prix maximum (USD)",
      placeholderMin: "Ex : 250000",
      placeholderMax: "Ex : 600000",
      noResults: "Aucune propriété dans cette gamme.",
      btnInfo: "WhatsApp",
    },
    de: {
      title: "Immobilien in Bahía Ballena",
      subtitle: "Erleben Sie natürlichen Luxus. Filtern Sie nach Gebiet oder Preis und entdecken Sie jedes Objekt.",
      zone: "Gebiet",
      all: "Alle",
      minPrice: "Mindestpreis (USD)",
      maxPrice: "Höchstpreis (USD)",
      placeholderMin: "z. B.: 250000",
      placeholderMax: "z. B.: 600000",
      noResults: "Keine Immobilien in diesem Bereich gefunden.",
      btnInfo: "WhatsApp",
    },
    pt: {
      title: "Propriedades em Bahía Ballena",
      subtitle: "Viva o luxo natural. Filtre por zona ou preço e explore cada espaço.",
      zone: "Zona",
      all: "Todas",
      minPrice: "Preço mínimo (USD)",
      maxPrice: "Preço máximo (USD)",
      placeholderMin: "Ex: 250000",
      placeholderMax: "Ex: 600000",
      noResults: "Nenhuma propriedade neste intervalo.",
      btnInfo: "WhatsApp",
    },
  }[language];

  const filtradas = useMemo(() => {
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : 999999999;
    return propiedadesData.filter(
      (p) => (zona === "Todas" || zona === textos.all || p.zona === zona) && p.precioUSD >= min && p.precioUSD <= max
    );
  }, [zona, minPrice, maxPrice, language]);

  const abrirModal = (prop) => {
    setActiveProp(prop);
    setImgIndex(0);
    setOpen(true);
  };
  const nextImg = () => setImgIndex((i) => (i + 1) % (activeProp?.galeria?.length || 1));
  const prevImg = () => setImgIndex((i) => (i === 0 ? (activeProp?.galeria?.length || 1) - 1 : i - 1));

  return (
    <motion.section
      id="propiedades"
      className="bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO MINIMALISTA */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 md:py-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-4">
          {textos.title}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {textos.subtitle}
        </p>
        <div className="w-20 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-300 mx-auto mt-6 rounded-full" />
      </motion.div>

      {/* FILTROS CENTRALIZADOS */}
      <div className="max-w-5xl mx-auto mb-16 px-6 py-8 bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-lg border border-gray-800">
        <h2 className="text-xl font-semibold text-white mb-6 text-center tracking-wide">
          🔎 {language === "es" ? "Filtra tu búsqueda" : "Refine your search"}
        </h2>
        <div className="flex flex-col md:flex-row items-end gap-6">
          {["zone", "minPrice", "maxPrice"].map((field, i) => (
            <div key={i} className="flex-1">
              {field === "zone" ? (
                <>
                  <label className="block text-sm font-medium mb-1 text-gray-400">{textos.zone}</label>
                  <select
                    value={zona}
                    onChange={(e) => setZona(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
                  >
                    <option value="Todas">{textos.all}</option>
                    <option value="Uvita">Uvita</option>
                    <option value="Ojochal">Ojochal</option>
                    <option value="Dominical">Dominical</option>
                  </select>
                </>
              ) : (
                <>
                  <label className="block text-sm font-medium mb-1 text-gray-400">
                    {field === "minPrice" ? textos.minPrice : textos.maxPrice}
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={field === "minPrice" ? minPrice : maxPrice}
                    onChange={(e) =>
                      field === "minPrice"
                        ? setMinPrice(e.target.value.replace(/\D/g, ""))
                        : setMaxPrice(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder={field === "minPrice" ? textos.placeholderMin : textos.placeholderMax}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* GRID DE PROPIEDADES */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtradas.length ? (
          filtradas.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group bg-gray-900 border border-gray-800"
              onClick={() => abrirModal(p)}
            >
              <img
                src={p.cover}
                alt={p.titulo[language] || p.titulo.es}
                loading="lazy"
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold truncate">{p.titulo[language] || p.titulo.es}</h3>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>{p.zona}</span>
                  <span className="font-semibold text-teal-400">{formatUSD(p.precioUSD)}</span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-16 text-gray-400 text-lg">{textos.noResults}</div>
        )}
      </div>

      {/* MODAL (sin cambios visuales) */}
   <AnimatePresence>
  {open && activeProp && (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-950 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl border border-gray-800 relative"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-2">
          {/* 📸 Imagen con X integrada */}
          <div className="relative">
            {/* Botón de cerrar, fijo dentro de la imagen */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-20 bg-black/60 text-white text-2xl md:text-xl rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition duration-200"
            >
              ✕
            </button>

            <img
              src={activeProp.galeria[imgIndex]}
              alt={activeProp.titulo[language] || activeProp.titulo.es}
              className="w-full h-[380px] md:h-[500px] object-cover"
            />

            {/* Flechas de navegación */}
            {activeProp.galeria.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setImgIndex((i) =>
                      i === 0 ? activeProp.galeria.length - 1 : i - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full px-3 py-1 hover:bg-black transition"
                >
                  ❮
                </button>
                <button
                  onClick={() =>
                    setImgIndex((i) => (i + 1) % activeProp.galeria.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full px-3 py-1 hover:bg-black transition"
                >
                  ❯
                </button>
              </>
            )}
          </div>

          {/* 🏡 Información de la propiedad */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              {activeProp.titulo[language] || activeProp.titulo.es}
            </h2>
            <p className="text-gray-400 mb-3">{activeProp.zona}</p>
            <p className="text-gray-300 mb-5 leading-relaxed">
              {activeProp.resumen[language] || activeProp.resumen.es}
            </p>
            <p className="text-teal-400 font-semibold text-xl mb-6">
              {formatUSD(activeProp.precioUSD)}
            </p>

            <a
              href={`https://wa.me/50688888888?text=${encodeURIComponent(
                `Hola! Estoy interesado en ${activeProp.titulo[language] ||
                  activeProp.titulo.es
                } en ${activeProp.zona}. Presupuesto hasta ${formatUSD(
                  activeProp.precioUSD
                )}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-full font-medium hover:shadow-teal-400/40 transition-all text-sm md:text-base active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.205-.242-.58-.487-.502-.67-.512l-.57-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.078 4.487.709.306 1.262.489 1.693.625.711.227 1.357.195 1.868.118.57-.085 1.758-.718 2.006-1.41.248-.694.248-1.289.173-1.411-.074-.123-.272-.198-.57-.347zM12.04 2.002c-5.514 0-9.98 4.465-9.98 9.967 0 1.757.46 3.467 1.337 4.972L2 22l5.184-1.357c1.46.799 3.1 1.22 4.856 1.22 5.513 0 9.979-4.466 9.979-9.969 0-2.665-1.037-5.175-2.918-7.056A9.94 9.94 0 0 0 12.04 2.002z" />
              </svg>
              {textos.btnInfo}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </motion.section>
  );
}