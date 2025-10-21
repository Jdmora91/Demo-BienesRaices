import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function ChatBox({ language = "es" }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  // Detecta el scroll para mover suavemente el botón
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌍 Traducciones base
  const translations = {
    es: {
      name: "Ana",
      title: "Ana – Asistente Virtual",
      placeholder: "Escribe algo...",
      send: "Enviar",
      welcome:
        "👋 ¡Hola! Soy Ana, tu asistente virtual inmobiliaria. ¿Buscas una propiedad en Bahía Ballena, Uvita o Dominical?",
    },
    en: {
      name: "Ana",
      title: "Ana – Virtual Assistant",
      placeholder: "Type something...",
      send: "Send",
      welcome:
        "👋 Hi! I'm Ana, your real estate assistant. Looking for a property in Bahía Ballena, Uvita, or Dominical?",
    },
    fr: {
      name: "Ana",
      title: "Ana – Assistante Virtuelle",
      placeholder: "Écrivez un message...",
      send: "Envoyer",
      welcome:
        "👋 Bonjour ! Je suis Ana, votre assistante immobilière. Vous cherchez une propriété à Bahía Ballena, Uvita ou Dominical ?",
    },
    de: {
      name: "Ana",
      title: "Ana – Virtuelle Assistentin",
      placeholder: "Nachricht eingeben...",
      send: "Senden",
      welcome:
        "👋 Hallo! Ich bin Ana, deine Immobilienassistentin. Suchst du eine Immobilie in Bahía Ballena, Uvita oder Dominical?",
    },
    pt: {
      name: "Ana",
      title: "Ana – Assistente Virtual",
      placeholder: "Digite sua mensagem...",
      send: "Enviar",
      welcome:
        "👋 Olá! Eu sou Ana, sua assistente imobiliária virtual. Procura uma propriedade em Bahía Ballena, Uvita ou Dominical?",
    },
  };

  const t = translations[language] || translations.es;

  const handleSend = async () => {
    if (!message.trim()) return;
    const newMsg = { text: message, sender: "user" };
    setMessages([...messages, newMsg]);
    setMessage("");
    setTyping(true);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `
              Eres Ana, una asistente virtual profesional de bienes raíces de Pura Vida Tech,
              experta en Bahía Ballena, Uvita, Ojochal y Dominical.
              Responde SIEMPRE en el idioma del usuario (${language}).
              Sé amable, útil, clara y con tono humano.
              `,
            },
            ...messages.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
            { role: "user", content: message },
          ],
          temperature: 0.8,
          max_tokens: 250,
        }),
      });

      const data = await res.json();
      const reply =
        data.choices?.[0]?.message?.content?.trim() ||
        "Lo siento, no pude responder en este momento.";

      setTyping(false);
      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
    } catch {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Error de conexión. Inténtalo más tarde.", sender: "bot" },
      ]);
    }
  };

  return (
    <>
      {/* BOTÓN FLOTANTE ADAPTATIVO */}
      <motion.button
        onClick={() => setOpen(!open)}
        style={{
          transform: `translateY(${offsetY * 0.05}px)`, // movimiento suave
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          fixed 
          right-5 sm:right-8 
          bottom-20 sm:bottom-12 
          z-[9999]
          p-5 
          rounded-full 
          bg-gradient-to-r from-[#0ea5e9] via-[#14b8a6] to-[#06b6d4]
          shadow-[0_0_25px_rgba(6,182,212,0.6)]
          hover:shadow-[0_0_40px_rgba(6,182,212,0.8)]
          transition-all duration-300 ease-out
          overflow-hidden
        "
      >
        {/* Halo animado */}
        <motion.span
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.3, 0.6] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute inset-0 bg-cyan-400/40 blur-2xl rounded-full"
        />
        <div className="relative z-10 flex items-center justify-center text-white">
          {open ? <X size={24} /> : <MessageCircle size={26} />}
        </div>
      </motion.button>

      {/* CHATBOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            className="
              fixed 
              right-4 sm:right-8 
              bottom-36 sm:bottom-24 
              w-[90%] sm:w-80 md:w-96
              bg-gray-900/80 
              backdrop-blur-xl 
              border border-white/10 
              rounded-3xl 
              shadow-[0_8px_40px_rgba(0,0,0,0.4)]
              overflow-hidden 
              z-[9999]
            "
          >
            <div className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-5 py-3 flex justify-between items-center">
              <h3 className="font-semibold tracking-wide text-sm md:text-base">
                {t.title}
              </h3>
              <button onClick={() => setOpen(false)} className="hover:text-gray-200 text-lg">
                ✕
              </button>
            </div>

            <div className="p-4 h-72 overflow-y-auto space-y-3">
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

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-gray-800/60 rounded-full px-3 py-2 text-gray-400 flex items-center gap-1">
                    {[0, 0.3, 0.6].map((d, i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 1, delay: d }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              )}
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
