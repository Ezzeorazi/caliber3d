import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductoDetalle() {
  const { id } = useParams();

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

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">

      {/* Imagen */}
      <img
        src={producto.images?.[0]}
        alt={producto.title}
        onError={(e) => e.currentTarget.src = "src/assets/placeholder.png"}
        className="w-full bg-slate-900 rounded-lg"
      />


      {/* Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{producto.title}</h1>

        <p className="text-slate-400">
          {producto.description}
        </p>

        <ul className="text-sm text-slate-300 space-y-1">
          <li>
            Material: <span className="text-slate-100">{producto.material}</span>
          </li>
          <li>
            Tiempo de impresión: <span className="text-slate-100">{producto.time}</span>
          </li>
        </ul>

        <p className="text-2xl text-orange-500 font-bold">
          ${producto.price}
        </p>

        <a
          href={`https://wa.me/5493415957226?text=Hola! Quiero cotizar el producto: ${producto.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded"
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </section>
  );
}
