import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.svg";

export default function CatalogCard({ item }) {
  const [current, setCurrent] = useState(0);
  const images = item.images && item.images.length ? item.images : [placeholder];

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-orange-500 transition group">

      {/* Slider */}
      <div className="relative h-56 bg-slate-900 overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={item.title}
            className={`
              absolute inset-0 w-full h-full object-contain
              transition-all duration-700
              ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              group-hover:scale-110
            `}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <Link
            to={`/catalogo/${item.id}`}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm rounded"
          >
            Ver detalle
          </Link>
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i === current ? "bg-orange-500" : "bg-slate-500"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{item.title}</h3>

        <p className="text-sm text-slate-400">
          Material: <span className="text-slate-200">{item.material}</span>
        </p>

        <p className="text-sm text-slate-400">
          Tiempo: <span className="text-slate-200">{item.time}</span>
        </p>

        <div className="flex items-center justify-between pt-3">
          <span className="text-orange-500 font-bold">${item.price}</span>

          <a
            href={`https://wa.me/529982017863?text=Hola! Quiero cotizar el producto: ${item.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm bg-orange-600 hover:bg-orange-700 text-white rounded"
          >
            Consultar por Whatsapp
          </a>
        </div>
      

      <div className="flex flex-wrap pt-4 gap-2">
        {item.tags?.map(tag => (
          <span
            key={tag}
            className="
        text-xs px-2 py-0.5 rounded-full
        bg-bg border border-border text-muted
      "
          >
            #{tag}
          </span>
        ))}
      </div>
        </div>
    </div>

  );
}
