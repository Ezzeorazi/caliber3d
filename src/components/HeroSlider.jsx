import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "/banner-1.svg",
  "/banner-2.svg",
  "/banner-3.svg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      <div
        className="
          relative w-full overflow-hidden rounded-xl
          border border-border bg-surface
          aspect-video max-h-[420px]
        "
      >
        {/* Imágenes */}
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt="Caliber 3D Printing"
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-opacity duration-1000
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* Overlay general (más sutil) */}
        <div className="absolute inset-0 bg-gradient-to-transparent from-black/30 via-transparent to-transparent" />

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-center sm:items-end justify-center sm:justify-start px-4 sm:px-6 py-6 sm:pb-6">

          {/* Click overlay (todo el slider lleva a catálogo) */}
          <Link to="/catalogo" aria-label="Ver catálogo" className="absolute inset-0 z-20 cursor-pointer" />
          
          {/* Caja técnica minimal y sutil */}
          <div className="w-full sm:w-auto max-w-lg space-y-2 bg-transparent sm:bg-bg/30 backdrop-blur-none sm:backdrop-blur-sm border border-transparent sm:border-accent/20 rounded-lg p-3 sm:p-5 shadow-none sm:shadow-md text-center sm:text-left relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white drop-shadow-md leading-snug">
              Impresión 3D de alta precisión
            </h1>

            <p className="hidden sm:block text-white/85 text-sm sm:text-base max-w-prose leading-relaxed">
              Prototipos funcionales, piezas técnicas y producción en baja escala con acabado profesional.
            </p>

          </div>

          {/* CTA visible (toca cualquiera parte del slider gracias al overlay) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
            <span className="bg-black/50 text-white text-sm sm:text-base px-3 py-1 rounded-full backdrop-blur-sm">
              Ver Productos
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
