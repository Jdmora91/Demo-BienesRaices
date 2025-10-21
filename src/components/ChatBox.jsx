import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function ChatBox({ language = "es" }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // 🌍 Traducciones y personalidad de Ana
  const translations = {
    es: {
      name: "Ana",
      title: "Asistente Virtual Ana",
      placeholder: "Escribe tu mensaje...",
      send: "Enviar",
      welcome:
        "👋 ¡Hola! Soy Ana, tu asistente virtual de bienes raíces. ¿Te gustaría conocer propiedades, precios o información sobre la zona de Bahía Ballena y Osa?",
      responses: {
        saludo: "¡Hola! Soy Ana 😊 ¿Buscas una casa, terreno o negocio en la zona?",
        propiedades: "Tenemos hermosas propiedades en Uvita, Ojochal y Dominical. ¿Deseas ver opciones frente al mar o en la montaña?",
        zona: "Bahía Ballena es una zona increíble 🌴, famosa por el avistamiento de ballenas, playas vírgenes y una comunidad tranquila.",
        contacto: "Puedo ponerte en contacto directo por WhatsApp con un agente local 📱.",
        default: "Gracias por tu mensaje, pronto te responderemos 😊",
      },
    },
    en: {
      name: "Ana",
      title: "Virtual Assistant Ana",
      placeholder: "Type your message...",
      send: "Send",
      welcome:
        "👋 Hi! I'm Ana, your virtual real estate assistant. Would you like to learn about properties or the Bahía Ballena & Osa area?",
      responses: {
        saludo: "Hi there! I'm Ana 😊 Are you looking for a home, land, or business property?",
        propiedades: "We have beautiful listings in Uvita, Ojochal, and Dominical. Would you prefer ocean-view or mountain homes?",
        zona: "Bahía Ballena is a stunning area 🌴, famous for whale watching, pristine beaches, and a peaceful lifestyle.",
        contacto: "I can connect you directly with a local agent via WhatsApp 📱.",
        default: "Thanks for your message! I’ll get back to you soon 😊",
      },
    },
    fr: {
      name: "Ana",
      title: "Assistante Virtuelle Ana",
      placeholder: "Écrivez votre message...",
      send: "Envoyer",
      welcome:
        "👋 Bonjour ! Je suis Ana, votre assistante immobilière virtuelle. Souhaitez-vous connaître les propriétés ou la région de Bahía Ballena et Osa ?",
      responses: {
        saludo: "Bonjour ! Je suis Ana 😊 Vous cherchez une maison, un terrain ou un commerce ?",
        propiedades: "Nous avons de magnifiques propriétés à Uvita, Ojochal et Dominical. Préférez-vous la mer ou la montagne ?",
        zona: "Bahía Ballena est une région splendide 🌴, célèbre pour l’observation des baleines et ses plages naturelles.",
        contacto: "Je peux vous mettre en contact avec un agent local via WhatsApp 📱.",
        default: "Merci pour votre message, je vous répondrai bientôt 😊",
      },
    },
    de: {
      name: "Ana",
      title: "Virtuelle Assistentin Ana",
      placeholder: "Schreibe deine Nachricht...",
      send: "Senden",
      welcome:
        "👋 Hallo! Ich bin Ana, deine virtuelle Immobilienassistentin. Möchtest du mehr über Immobilien oder die Region Bahía Ballena & Osa erfahren?",
      responses: {
        saludo: "Hallo! Ich bin Ana 😊 Suchst du ein Haus, Grundstück oder Geschäft?",
        propiedades: "Wir haben wunderschöne Immobilien in Uvita, Ojochal und Dominical. Bevorzugst du Meerblick oder Berglage?",
        zona: "Bahía Ballena ist eine herrliche Gegend 🌴, bekannt für Wale, Strände und Ruhe.",
        contacto: "Ich kann dich direkt mit einem lokalen Agenten über WhatsApp 📱 verbinden.",
        default: "Danke für deine Nachricht, ich melde mich bald 😊",
      },
    },
    pt: {
      name: "Ana",
      title: "Assistente Virtual Ana",
      placeholder: "Digite sua mensagem...",
      send: "Enviar",
      welcome:
        "👋 Olá! Eu sou Ana, sua assistente virtual imobiliária. Gostaria de saber sobre propriedades ou a região de Bahía Ballena e Osa?",
      responses: {
        saludo: "Olá! Sou Ana 😊 Você procura uma casa, terreno ou negócio?",
        propiedades: "Temos belas propriedades em Uvita, Ojochal e Dominical. Prefere vista para o mar ou montanha?",
        zona: "Bahía Ballena é uma região incrível 🌴, famosa pelas baleias e praias paradisíacas.",
        contacto: "Posso te conectar com um agente local via WhatsApp 📱.",
        default: "Obrigada pela mensagem! Em breve entraremos em contato 😊",
      },
    },
  };

  const t = translations[language] || translations.es;

  const handleSend = () => {
    if (!message.trim()) return;
    const newMsg = { text: message, sender: "user" };
    setMessages([...messages, newMsg]);
    setMessage("");

    const lower = message.toLowerCase();
    let reply = t.responses.default;

    if (lower.includes("hola") || lower.includes("hi")) reply = t.responses.saludo;
    else if (lower.includes("propiedad") || lower.includes("house") || lower.includes("home")) reply = t.responses.propiedades;
    else if (lower.includes("zona") || lower.includes("area") || lower.includes("bahía") || lower.includes("region")) reply = t.responses.zona;
    else if (lower.includes("contacto") || lower.includes("whatsapp") || lower.includes("agent")) reply = t.responses.contacto;

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
    }, 700);
  };

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 text-white shadow-lg hover:shadow-teal-400/40 transition-all"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* CHAT */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 md:w-96 bg-gray-950 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden z-50 backdrop-blur-md"
          >
            {/* Encabezado */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-4 py-3 flex justify-between items-center">
              <h3 className="font-semibold">{t.title}</h3>
              <button onClick={() => setOpen(false)} className="hover:text-gray-200">
                ✕
              </button>
            </div>

            {/* Mensajes */}
            <div className="p-4 h-64 overflow-y-auto text-sm space-y-3">
              <div className="text-gray-300 bg-gray-800/40 p-3 rounded-lg w-fit max-w-[90%]">
                {t.welcome}
              </div>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`px-3 py-2 rounded-xl max-w-[80%] ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-teal-500 to-cyan-400 text-white"
                        : "bg-gray-800 text-gray-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center border-t border-gray-800 p-3 bg-gray-900/70">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.placeholder}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-2 bg-gray-800 text-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button
                onClick={handleSend}
                className="ml-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-lg text-sm font-medium hover:shadow-teal-400/30 transition-all"
              >
                {t.send}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
