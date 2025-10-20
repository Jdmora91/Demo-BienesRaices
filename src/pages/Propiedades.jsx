import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import hero from "../assets/ballena1.avif";

// 📦 Importa todas las imágenes
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

// 💵 Formateador de precios
const formatUSD = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

// 🔎 Hook para leer parámetros URL
function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

// 🏡 Datos base (solo una vez) — cada propiedad tiene idioma completo
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
    galeria: [uv0_1, uv0_2, uv0_3],
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
    galeria: [dom2_0, dom2_1, dom2_2, dom2_3],
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
      subtitle: "Vive el lujo natural. Filtra por zona o precio y explora cada espacio.",
      zone: "Zona",
      all: "Todas",
      minPrice: "Precio mínimo (USD)",
      maxPrice: "Precio máximo (USD)",
      placeholderMin: "Ej: 250000",
      placeholderMax: "Ej: 600000",
      noResults: "No hay propiedades en este rango.",
      btnInfo: "Pedir información por WhatsApp",
    },
    en: {
      title: "Properties in Bahía Ballena",
      subtitle: "Experience natural luxury. Filter by area or price and explore each space.",
      zone: "Area",
      all: "All",
      minPrice: "Minimum price (USD)",
      maxPrice: "Maximum price (USD)",
      placeholderMin: "Ex: 250000",
      placeholderMax: "Ex: 600000",
      noResults: "No properties found in this range.",
      btnInfo: "Request information via WhatsApp",
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
      btnInfo: "Demander des informations via WhatsApp",
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
      btnInfo: "Informationen über WhatsApp anfordern",
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
      btnInfo: "Pedir informações via WhatsApp",
    },
  }[language];

  // 🎯 Filtrado
  const filtradas = useMemo(() => {
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : 999999999;
    return propiedadesData.filter(
      (p) => (zona === "Todas" || zona === textos.all || p.zona === zona) && p.precioUSD >= min && p.precioUSD <= max
    );
  }, [zona, minPrice, maxPrice, language]);

  // 🔄 Modal
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
      className="bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* HERO */}
      <div
        className="relative h-[65vh] flex flex-col justify-center items-center bg-cover bg-center text-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <motion.div
          className="relative z-10 max-w-3xl px-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-400 to-cyan-200 bg-clip-text text-transparent">
            {textos.title}
          </h1>
          <p className="mt-3 text-lg text-gray-200">{textos.subtitle}</p>
        </motion.div>
      </div>

      {/* FILTROS */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-end gap-6">
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

      {/* GRID */}
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

      {/* MODAL */}
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
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 bg-black/60 text-white rounded-full px-3 py-1 hover:bg-black transition"
              >
                ✕
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img
                    src={activeProp.galeria[imgIndex]}
                    alt={activeProp.titulo[language] || activeProp.titulo.es}
                    className="w-full h-[380px] md:h-[500px] object-cover"
                  />
                  {activeProp.galeria.length > 1 && (
                    <>
                      <button
                        onClick={prevImg}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full px-3 py-1 hover:bg-black transition"
                      >
                        ❮
                      </button>
                      <button
                        onClick={nextImg}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full px-3 py-1 hover:bg-black transition"
                      >
                        ❯
                      </button>
                    </>
                  )}
                </div>

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
                      `Hola! Estoy interesado en ${activeProp.titulo[language] || activeProp.titulo.es
                      } en ${activeProp.zona}. Presupuesto hasta ${formatUSD(activeProp.precioUSD)}.`
                    )}`}
                    target="_blank"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-full font-semibold hover:shadow-teal-400/30 transition-all"
                  >
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
