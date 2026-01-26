import { useEffect, useState } from "react";

export default function CatalogCard({ item }) {
  const [current, setCurrent] = useState(0);

  // Slider automático
  useEffect(() => {
    if (!item.images || item.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === item.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [item.images]);

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-orange-500 transition group">
      
      {/* Slider de imágenes */}
      <div className="relative aspect-square bg-slate-900 overflow-hidden">
        {item.images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={item.title}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-700 ease-in-out
              ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}
              group-hover:scale-110
            `}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-slate-100">
          {item.title}
        </h3>

        <p className="text-sm text-slate-400">
          Material:{" "}
          <span className="text-slate-200">{item.material}</span>
        </p>

        <p className="text-sm text-slate-400">
          Tiempo:{" "}
          <span className="text-slate-200">{item.time}</span>
        </p>

        <div className="flex items-center justify-between pt-3">
          <span className="text-orange-500 font-bold">
            ${item.price}
          </span>

          <button className="px-4 py-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 text-white rounded transition">
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
}
