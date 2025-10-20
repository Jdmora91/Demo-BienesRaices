import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import hero from "../assets/ballena1.avif";
import uv0_1 from "../assets/propiedades/uvita/casaUv/casaUv0.1.avif";
import uv0_2 from "../assets/propiedades/uvita/casaUv/casaUv0.2.avif";
import uv0_3 from "../assets/propiedades/uvita/casaUv/casaUv0.3.avif";
import uv1 from "../assets/propiedades/uvita/casaUv1.avif";
import uv2 from "../assets/propiedades/uvita/casaUv2.avif";
import uv3 from "../assets/propiedades/uvita/casaUv3.avif";
import ojA from "../assets/propiedades/ojochal/casaOJ.avif";
import oj1 from "../assets/propiedades/ojochal/casaOj1.avif";
import oj2 from "../assets/propiedades/ojochal/casaOj2.avif";
import dom2_0 from "../assets/propiedades/dominical/casaDom2/casaDom2.0.avif";
import dom2_1 from "../assets/propiedades/dominical/casaDom2/casaDom2.1.avif";
import dom2_2 from "../assets/propiedades/dominical/casaDom2/casaDom2.2.avif";
import dom2_3 from "../assets/propiedades/dominical/casaDom2/casaDom2.3.avif";
import dom3 from "../assets/propiedades/dominical/casaDom3.avif";
import dom4 from "../assets/propiedades/dominical/casaDom4.avif";

const formatUSD = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Propiedades({ language }) {
  const q = useQuery();
  const [zona, setZona] = useState(q.get("zona") || "Todas");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [open, setOpen] = useState(false);
  const [activeProp, setActiveProp] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const t = {
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

  const catalogo = [
    { id: "Uv-00", zona: "Uvita", titulo: "Villa Horizonte del Mar", precioUSD: 480000, cover: uv0_1, galeria: [uv0_1, uv0_2, uv0_3], resumen: "Arquitectura tropical moderna a minutos del Parque Marino Ballena." },
    { id: "Uv-01", zona: "Uvita", titulo: "Casa Bamboo Vista Verde", precioUSD: 340000, cover: uv1, galeria: [uv1], resumen: "Espacios abiertos, luz natural y vegetación alrededor." },
    { id: "Uv-02", zona: "Uvita", titulo: "Villa del Sol Marino", precioUSD: 395000, cover: uv2, galeria: [uv2], resumen: "Piscina y áreas sociales para disfrutar en familia." },
    { id: "Uv-03", zona: "Uvita", titulo: "Casa Coral Bahía", precioUSD: 360000, cover: uv3, galeria: [uv3], resumen: "Diseño contemporáneo a pasos de la naturaleza." },
    { id: "Oj-01", zona: "Ojochal", titulo: "Villa Escondida", precioUSD: 620000, cover: ojA, galeria: [ojA], resumen: "Privacidad total cerca de Playa Ventanas y escena gourmet." },
    { id: "Oj-02", zona: "Ojochal", titulo: "Casa del Río", precioUSD: 410000, cover: oj1, galeria: [oj1], resumen: "Materiales naturales y confort con sonido de río cercano." },
    { id: "Oj-03", zona: "Ojochal", titulo: "Villa Gourmet", precioUSD: 465000, cover: oj2, galeria: [oj2], resumen: "Perfecta para renta vacacional de alto perfil." },
    { id: "Dom-02", zona: "Dominical", titulo: "Casa del Sol Pacífico", precioUSD: 530000, cover: dom2_0, galeria: [dom2_0, dom2_1, dom2_2, dom2_3], resumen: "Vista al mar y ambientes surferos a minutos del centro." },
    { id: "Dom-03", zona: "Dominical", titulo: "Jardines del Horizonte", precioUSD: 360000, cover: dom3, galeria: [dom3], resumen: "Residencia ecológica con jardines y energía solar." },
    { id: "Dom-04", zona: "Dominical", titulo: "Casa Vista Mar", precioUSD: 575000, cover: dom4, galeria: [dom4], resumen: "Terraza panorámica y acabados premium." },
  ];

  const filtradas = useMemo(() => {
    const min = minPrice === "" ? 0 : Number(minPrice);
    const max = maxPrice === "" ? 999999999 : Number(maxPrice);
    return catalogo.filter((p) => {
      const zonaOk = zona === "Todas" || zona === t.all ? true : p.zona === zona;
      const priceOk = p.precioUSD >= min && p.precioUSD <= max;
      return zonaOk && priceOk;
    });
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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-400 to-cyan-200 bg-clip-text text-transparent drop-shadow-lg">
            {t.title}
          </h1>
          <p className="mt-3 text-lg text-gray-200">{t.subtitle}</p>
        </motion.div>
      </div>

      {/* FILTROS */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-end gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-400">{t.zone}</label>
          <select
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none transition"
          >
            <option value="Todas">{t.all}</option>
            <option value="Uvita">Uvita</option>
            <option value="Ojochal">Ojochal</option>
            <option value="Dominical">Dominical</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-400">{t.minPrice}</label>
          <input
            type="text"
            inputMode="numeric"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value.replace(/\D/g, ""))}
            placeholder={t.placeholderMin}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none transition"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-400">{t.maxPrice}</label>
          <input
            type="text"
            inputMode="numeric"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value.replace(/\D/g, ""))}
            placeholder={t.placeholderMax}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-teal-400 outline-none transition"
          />
        </div>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtradas.length > 0 ? (
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
                alt={p.titulo}
                loading="lazy"
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold truncate">{p.titulo}</h3>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>{p.zona}</span>
                  <span className="font-semibold text-teal-400">{formatUSD(p.precioUSD)}</span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            className="col-span-full text-center py-16 text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {t.noResults}
          </motion.div>
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
                    alt={activeProp.titulo}
                    className="w-full h-[380px] md:h-[500px] object-cover"
                  />
                  {activeProp.galeria.length > 1 && (
                    <>
                      <button
                        onClick={() => setImgIndex(prevImg)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full px-3 py-1 hover:bg-black transition"
                      >
                        ❮
                      </button>
                      <button
                        onClick={() => setImgIndex(nextImg)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full px-3 py-1 hover:bg-black transition"
                      >
                        ❯
                      </button>
                    </>
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-white mb-2">{activeProp.titulo}</h2>
                  <p className="text-gray-400 mb-3">{activeProp.zona}</p>
                  <p className="text-gray-300 mb-5 leading-relaxed">{activeProp.resumen}</p>
                  <p className="text-teal-400 font-semibold text-xl mb-6">
                    {formatUSD(activeProp.precioUSD)}
                  </p>
                  <a
                    href={`https://wa.me/50688888888?text=${encodeURIComponent(
                      `Hola! Estoy interesado en ${activeProp.titulo} en ${activeProp.zona}. Presupuesto hasta ${formatUSD(
                        activeProp.precioUSD
                      )}.`
                    )}`}
                    target="_blank"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-full font-semibold hover:shadow-teal-400/30 transition-all"
                  >
                    {t.btnInfo}
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
