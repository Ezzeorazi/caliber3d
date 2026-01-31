import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import placeholder from "../assets/placeholder.svg";

export default function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = products.find(p => p.id === id);

  if (!producto) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Producto no encontrado</h2>
        <p className="text-slate-400 mt-2">
          El producto que buscás no existe o fue eliminado.
        </p>
      </section>
    );
  }

  const images =
    producto.images && producto.images.length
      ? producto.images
      : [placeholder];

  const [activeImage, setActiveImage] = useState(images[0]);
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${activeImage})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "200%",
    });
  };

  const resetZoom = () => setZoomStyle({});

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">

      {/* Galería */}
      <div className="space-y-4">

        {/* Imagen principal con zoom (desktop) */}
        <div
          className="relative w-full h-96 bg-slate-900 rounded-lg overflow-hidden hidden md:block"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetZoom}
          style={
            zoomStyle.backgroundImage
              ? zoomStyle
              : {
                  backgroundImage: `url(${activeImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }
          }
        >
          {!zoomStyle.backgroundImage && (
            <img
              src={activeImage}
              alt={producto.title}
              className="w-full h-full object-contain"
            />
          )}

          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            🔍 Zoom
          </div>
        </div>

        {/* Imagen mobile */}
        <img
          src={activeImage}
          alt={producto.title}
          className="md:hidden w-full bg-slate-900 rounded-lg"
        />

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto pt-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(img)}
              className={`border rounded-md p-1 min-w-[70px] h-16 bg-slate-900 transition
                ${
                  activeImage === img
                    ? "border-orange-500"
                    : "border-slate-700 hover:border-orange-400"
                }
              `}
            >
              <img
                src={img}
                alt={`Vista ${i + 1}`}
                onError={(e) => (e.currentTarget.src = placeholder)}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{producto.title}</h1>

        <p className="text-slate-400">{producto.description}</p>

        <ul className="text-sm text-slate-300 space-y-1">
          <li>
            Material:{" "}
            <span className="text-slate-100">{producto.material}</span>
          </li>
          <li>
            Tiempo de impresión:{" "}
            <span className="text-slate-100">{producto.time}</span>
          </li>
        </ul>

        <p className="text-2xl text-orange-500 font-bold">
          ${producto.price}
        </p>

        <a
          href={`https://wa.me/529982017863?text=Hola! Quiero cotizar el producto: ${producto.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded transition"
        >
          Cotizar por WhatsApp
        </a>

        
      </div>
      {/* Botón volver */}
        <button
          onClick={() =>
            window.history.length > 1
              ? navigate(-1)
              : navigate("/catalogo")
          }
          className="
            mt-6
            inline-flex items-center gap-2
            text-sm font-medium
            text-slate-300
            hover:text-orange-400
            transition
          "
        >
          ← Volver
        </button>
    </section>
  );
}
