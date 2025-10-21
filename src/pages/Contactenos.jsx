import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import ballena1 from "../assets/ballena1.avif";

export default function Contactenos({ language }) {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const t = {
    es: {
      title: "Contáctenos",
      subtitle:
        "Estamos aquí para ayudarte a encontrar tu lugar perfecto en Bahía Ballena 🌴",
      whatsapp: "WhatsApp",
      email: "Correo",
      location: "Ubicación",
      formTitle: "Envíanos un mensaje",
      formText:
        "Cuéntanos qué estás buscando o cómo podemos ayudarte. Nuestro equipo responderá en menos de 24 horas.",
      name: "Tu nombre completo",
      mail: "Tu correo electrónico",
      message: "Escribe tu mensaje...",
      send: "Enviar mensaje",
      sent: "Mensaje enviado ✅",
      ctaTitle: "Tu nueva vida en Bahía Ballena te espera 🌅",
      contactNow: "Contáctanos ahora",
    },
    en: {
      title: "Contact Us",
      subtitle:
        "We’re here to help you find your perfect place in Bahía Ballena 🌴",
      whatsapp: "WhatsApp",
      email: "Email",
      location: "Location",
      formTitle: "Send Us a Message",
      formText:
        "Tell us what you’re looking for or how we can help. Our team will reply within 24 hours.",
      name: "Your full name",
      mail: "Your email address",
      message: "Write your message...",
      send: "Send Message",
      sent: "Message Sent ✅",
      ctaTitle: "Your new life in Bahía Ballena awaits 🌅",
      contactNow: "Contact Us Now",
    },
    fr: {
      title: "Contactez-nous",
      subtitle:
        "Nous sommes là pour vous aider à trouver votre endroit parfait à Bahía Ballena 🌴",
      whatsapp: "WhatsApp",
      email: "Courriel",
      location: "Emplacement",
      formTitle: "Envoyez-nous un message",
      formText:
        "Dites-nous ce que vous recherchez ou comment nous pouvons vous aider. Notre équipe répondra en moins de 24 heures.",
      name: "Votre nom complet",
      mail: "Votre adresse e-mail",
      message: "Écrivez votre message...",
      send: "Envoyer le message",
      sent: "Message envoyé ✅",
      ctaTitle: "Votre nouvelle vie à Bahía Ballena vous attend 🌅",
      contactNow: "Contactez-nous maintenant",
    },
    de: {
      title: "Kontaktieren Sie uns",
      subtitle:
        "Wir helfen Ihnen, Ihren perfekten Ort in Bahía Ballena zu finden 🌴",
      whatsapp: "WhatsApp",
      email: "E-Mail",
      location: "Standort",
      formTitle: "Senden Sie uns eine Nachricht",
      formText:
        "Teilen Sie uns mit, wonach Sie suchen oder wie wir helfen können. Unser Team antwortet innerhalb von 24 Stunden.",
      name: "Ihr vollständiger Name",
      mail: "Ihre E-Mail-Adresse",
      message: "Schreiben Sie Ihre Nachricht...",
      send: "Nachricht senden",
      sent: "Nachricht gesendet ✅",
      ctaTitle: "Ihr neues Leben in Bahía Ballena erwartet Sie 🌅",
      contactNow: "Jetzt kontaktieren",
    },
    pt: {
      title: "Contate-nos",
      subtitle:
        "Estamos aqui para ajudá-lo a encontrar o seu lugar perfeito em Bahía Ballena 🌴",
      whatsapp: "WhatsApp",
      email: "E-mail",
      location: "Localização",
      formTitle: "Envie-nos uma mensagem",
      formText:
        "Conte-nos o que você está procurando ou como podemos ajudar. Nossa equipe responderá em menos de 24 horas.",
      name: "Seu nome completo",
      mail: "Seu e-mail",
      message: "Escreva sua mensagem...",
      send: "Enviar mensagem",
      sent: "Mensagem enviada ✅",
      ctaTitle: "Sua nova vida em Bahía Ballena espera por você 🌅",
      contactNow: "Contate-nos agora",
    },
  }[language];

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="bg-gray-950 text-gray-800">
      <div
        className="relative h-[30vh] flex flex-col justify-center items-center bg-cover bg-center text-center"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 px-6 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl font-bold text-white drop-shadow-lg mb-4">
            {t.title}
          </h1>
          <p className="text-gray-200 text-lg md:text-xl">{t.subtitle}</p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-10 text-center">
        {[
          {
            icon: <MessageCircle className="w-8 h-8 text-teal-500" />,
            title: t.whatsapp,
            value: "+506 8888-8888",
            link: "https://wa.me/50688888888",
          },
          {
            icon: <Mail className="w-8 h-8 text-teal-500" />,
            title: t.email,
            value: "info@bahiaballenarealestate.com",
            link: "mailto:info@bahiaballenarealestate.com",
          },
          {
            icon: <MapPin className="w-8 h-8 text-teal-500" />,
            title: t.location,
            value: "Bahía Ballena, Osa, Puntarenas",
            link: "https://maps.app.goo.gl/3GvZDYKu6L9m42zS6",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.value}</p>
          </motion.a>
        ))}
      </div>

      <div className="relative bg-gray-50 py-20 px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-teal-100/40 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t.formTitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.formText}</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="relative z-10 max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-100 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder={t.name}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t.mail}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none transition"
            />
          </div>

          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder={t.message}
            rows="5"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none transition"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition"
          >
            {sent ? t.sent : t.send}
          </motion.button>
        </motion.form>
      </div>

      <div className="relative w-full h-[500px]">
        <iframe
          title="Mapa Bahía Ballena"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62915.22917179089!2d-83.7698705187635!3d9.155132385296713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa3ec6f19dfb2d3%3A0xd1b8f4f1f4b0d5f9!2sBah%C3%ADa%20Ballena%2C%20Puntarenas!5e0!3m2!1sen!2scr!4v1709756077921!5m2!1sen!2scr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text-center py-16 bg-gray-900 text-white">
        <h2 className="text-2xl font-semibold mb-4">{t.ctaTitle}</h2>
        <a
          href="https://wa.me/50688888888"
          target="_blank"
          className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-600 transition-all duration-300 shadow-lg"
        >
          {t.contactNow}
        </a>
      </div>
    </section>
  );
}
