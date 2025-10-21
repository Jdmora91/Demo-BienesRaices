import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function ChatBox({ language = "es" }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  // 🌍 Traducciones base
  const translations = {
    es: {
      name: "Ana",
      title: "Ana – Asistente Virtual",
      placeholder: "Escribe algo...",
      send: "Enviar",
      welcome:
        "👋 ¡Hola! Soy Ana, tu asistente virtual inmobiliaria. ¿Buscas una propiedad o información sobre Bahía Ballena, Uvita o Dominical?",
      responses: {
        hola: "¡Hola! 😊 ¿Cómo puedo ayudarte hoy?",
        propiedades:
          "Tenemos propiedades en Uvita, Ojochal y Dominical 🏝️ ¿Prefieres casa frente al mar o en la montaña?",
        zonas:
          "Bahía Ballena y sus alrededores son perfectos para invertir. 🌴 Hay playas, selva y tranquilidad pura.",
        contacto:
          "Puedes contactarnos por WhatsApp o correo a info@puravidatech.com 📩",
        empresa:
          "Pura Vida Tech es una empresa costarricense que crea sitios web y soluciones digitales con identidad local 🇨🇷",
        default:
          "No estoy segura de eso 😅, pero puedo ayudarte con Propiedades, Zonas, Contacto o la Empresa.",
      },
    },
    en: {
      name: "Ana",
      title: "Ana – Virtual Assistant",
      placeholder: "Type something...",
      send: "Send",
      welcome:
        "👋 Hi! I'm Ana, your virtual real estate assistant. Want to know about properties or the Bahía Ballena area?",
      responses: {
        hola: "Hi there! 😊 How can I help you today?",
        propiedades:
          "We have listings in Uvita, Ojochal, and Dominical 🏖️ Would you prefer ocean view or mountain homes?",
        zonas:
          "Bahía Ballena and nearby areas are ideal for investing 🌿 Beautiful beaches and peaceful lifestyle.",
        contacto:
          "You can reach us on WhatsApp or email info@puravidatech.com 📬",
        empresa:
          "Pura Vida Tech is a Costa Rican company building websites and digital solutions with identity 🇨🇷",
        default:
          "I'm not sure about that 😅, but I can help with Properties, Zones, Contact, or Company info.",
      },
    },
    fr: {
      name: "Ana",
      title: "Ana – Assistante Virtuelle",
      placeholder: "Écrivez un message...",
      send: "Envoyer",
      welcome:
        "👋 Bonjour ! Je suis Ana, votre assistante virtuelle. Voulez-vous connaître nos propriétés ou la région de Bahía Ballena ?",
      responses: {
        hola: "Bonjour ! 😊 Comment puis-je vous aider aujourd’hui ?",
        propiedades:
          "Nous avons des maisons à Uvita, Ojochal et Dominical 🏡 Préférez-vous la mer ou la montagne ?",
        zonas:
          "Bahía Ballena est une belle région 🌴, parfaite pour investir et se détendre.",
        contacto:
          "Contactez-nous via WhatsApp ou par e-mail à info@puravidatech.com 📩",
        empresa:
          "Pura Vida Tech est une entreprise costaricienne de solutions numériques locales 🇨🇷",
        default:
          "Je ne suis pas sûre 😅, mais je peux vous aider avec Propriétés, Zones ou Contact.",
      },
    },
    de: {
      name: "Ana",
      title: "Ana – Virtuelle Assistentin",
      placeholder: "Schreibe deine Nachricht...",
      send: "Senden",
      welcome:
        "👋 Hallo! Ich bin Ana, deine virtuelle Immobilienassistentin. Möchtest du mehr über Immobilien in Bahía Ballena erfahren?",
      responses: {
        hola: "Hallo! 😊 Wie kann ich dir helfen?",
        propiedades:
          "Wir haben Immobilien in Uvita, Ojochal und Dominical 🏠 Bevorzugst du Meerblick oder Berge?",
        zonas:
          "Bahía Ballena ist perfekt für Investitionen 🌴 – Natur, Ruhe und Meer.",
        contacto:
          "Kontaktiere uns über WhatsApp oder per E-Mail: info@puravidatech.com 📧",
        empresa:
          "Pura Vida Tech ist ein costaricanisches Unternehmen mit Fokus auf digitale Lösungen 🇨🇷",
        default:
          "Ich bin mir nicht sicher 😅, aber ich kann dir mit Immobilien, Zonen oder Kontakt helfen.",
      },
    },
    pt: {
      name: "Ana",
      title: "Ana – Assistente Virtual",
      placeholder: "Digite sua mensagem...",
      send: "Enviar",
      welcome:
        "👋 Olá! Sou Ana, sua assistente virtual imobiliária. Quer saber sobre imóveis ou a região de Bahía Ballena?",
      responses: {
        hola: "Olá! 😊 Como posso ajudar você hoje?",
        propiedades:
          "Temos casas em Uvita, Ojochal e Dominical 🏖️ Prefere vista para o mar ou montanha?",
        zonas:
          "Bahía Ballena é uma região incrível 🌴 – natureza, praias e tranquilidade pura.",
        contacto:
          "Entre em contato pelo WhatsApp ou email info@puravidatech.com 📩",
        empresa:
          "Pura Vida Tech é uma empresa costarriquenha que cria sites e soluções digitais 🇨🇷",
        default:
          "Não tenho certeza 😅, mas posso ajudar com Imóveis, Zonas ou Contato.",
      },
    },
  };

  const t = translations[language] || translations.es;

  // 🌀 Movimiento suave con el scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 💬 Lógica de respuestas locales
  const handleSend = () => {
    if (!message.trim()) return;

    const lower = message.toLowerCase();
    let reply = t.responses.default;

    if (lower.includes("hola") || lower.includes("hi")) reply = t.responses.hola;
    else if (lower.includes("propiedad") || lower.includes("house")) reply = t.responses.propiedades;
    else if (lower.includes("zona") || lower.includes("uvita") || lower.includes("dominical"))
      reply = t.responses.zonas;
    else if (lower.includes("contacto") || lower.includes("email") || lower.includes("whatsapp"))
      reply = t.responses.contacto;
    else if (lower.includes("empresa") || lower.includes("pura vida") || lower.includes("tech"))
      reply = t.responses.empresa;

    setMessages([
      ...messages,
      { text: message, sender: "user" },
      { text: reply, sender: "bot" },
    ]);
    setMessage("");
  };

  return (
    <>
      {/* 🌊 BOTÓN FLOTANTE */}
      <motion.button
        onClick={() => setOpen(!open)}
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          fixed right-5 sm:right-8 
          bottom-20 sm:bottom-12 
          z-[9999] p-5 rounded-full 
          bg-gradient-to-r from-[#0ea5e9] via-[#14b8a6] to-[#06b6d4]
          shadow-[0_0_25px_rgba(6,182,212,0.6)]
          hover:shadow-[0_0_40px_rgba(6,182,212,0.8)]
          transition-all duration-300 ease-out overflow-hidden
        "
      >
        <motion.span
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.3, 0.6] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute inset-0 bg-cyan-400/40 blur-2xl rounded-full"
        />
        <div className="relative z-10 text-white">
          {open ? <X size={24} /> : <MessageCircle size={26} />}
        </div>
      </motion.button>

      {/* 💬 CHATBOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            className="
              fixed right-4 sm:right-8 
              bottom-36 sm:bottom-24 
              w-[90%] sm:w-80 md:w-96 
              bg-gray-900/80 backdrop-blur-xl 
              border border-white/10 rounded-3xl 
              shadow-[0_8px_40px_rgba(0,0,0,0.4)]
              overflow-hidden z-[9999]
            "
          >
            <div className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-5 py-3 flex justify-between items-center">
              <h3 className="font-semibold tracking-wide text-sm md:text-base">{t.title}</h3>
              <button onClick={() => setOpen(false)} className="hover:text-gray-200 text-lg">
                ✕
              </button>
            </div>

            <div className="p-4 h-72 overflow-y-auto space-y-3 scroll-smooth">
              <div className="text-gray-300 bg-gray-800/50 p-3 rounded-2xl w-fit max-w-[90%] shadow-sm border border-white/5">
                {t.welcome}
              </div>

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`px-4 py-2.5 rounded-2xl max-w-[80%] text-sm shadow-md ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-teal-500 to-cyan-400 text-white"
                        : "bg-gray-800/70 text-gray-200 border border-white/10"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 border-t border-white/10 p-3 bg-gray-900/60">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.placeholder}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-4 py-2 bg-gray-800/80 text-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 border border-white/10"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleSend}
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-full text-sm font-medium hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
              >
                {t.send}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
