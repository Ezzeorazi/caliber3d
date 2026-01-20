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
        className="relative w-full overflow-hidden rounded-xl border border-slate-800
                   aspect-video max-h-[420px]"
      >
        {/* Images */}
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt="Impresión 3D Caliber"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
              ${index === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-transparent from-slate-950/80 via-slate-900/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-4 sm:px-6 pb-4 sm:pb-6">
          <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white max-w-xs sm:max-w-xl leading-tight">
            Impresión 3D de alta precisión
          </h1>

          <p className="mt-2 text-slate-300 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-lg">
            Prototipos funcionales, piezas técnicas y producción en baja escala con
            acabado profesional.
          </p>

          <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3">
            <Link
              to="/catalogo"
              className="bg-orange-500 hover:bg-orange-600 text-slate-900 px-4 py-2 text-xs sm:text-sm rounded-md font-medium transition"
            >
              Ver catálogo
            </Link>

            <Link
              to="/contacto"
              className="border border-slate-400 text-slate-200 hover:bg-slate-800 px-4 py-2 text-xs sm:text-sm rounded-md transition"
            >
              Cotizar pieza
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
