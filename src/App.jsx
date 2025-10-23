import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Zonas from "./pages/Zonas";
import Propiedades from "./pages/Propiedades";
import Galeria from "./pages/Galeria";
import PageTransition from "./components/PageTransition";
import Contactenos from "./pages/Contactenos";
import ChatBox from "./components/ChatBox"; 
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();
  const [language, setLanguage] = useState("es");

  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden">
      
      <Navbar language={language} setLanguage={setLanguage} />

      <ScrollToTop />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home language={language} />} />
              <Route path="/zonas" element={<Zonas language={language} />} />
              <Route path="/propiedades" element={<Propiedades language={language} />} />
              <Route path="/galeria" element={<Galeria language={language} />} />
              <Route path="/contactenos" element={<Contactenos language={language} />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* ⚡ Footer */}
      <Footer language={language} />

      {/* 💬 Asistente Virtual “Ana” */}
      <ChatBox language={language} />
    </div>
  );
}
