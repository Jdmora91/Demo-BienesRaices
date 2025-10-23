import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * Restaura el scroll al inicio cada vez que cambia la ruta.
 * Compatible con AnimatePresence (espera a que termine la animación).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🔹 Espera unos milisegundos para permitir que la transición termine
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // cambia a "auto" si prefieres instantáneo
      });
    }, 600); // Ajusta según la duración de tu PageTransition (500–800 ms)

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
