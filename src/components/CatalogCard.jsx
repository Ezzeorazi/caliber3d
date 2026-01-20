export default function CatalogCard({ item }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-orange-500 transition">
      
      {/* Imagen */}
      <div className="h-48 bg-slate-900 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="object-contain h-full"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-slate-100">
          {item.title}
        </h3>

        <p className="text-sm text-slate-400">
          Material: <span className="text-slate-200">{item.material}</span>
        </p>

        <p className="text-sm text-slate-400">
          Tiempo: <span className="text-slate-200">{item.time}</span>
        </p>

        <div className="flex items-center justify-between pt-3">
          <span className="text-orange-500 font-bold">
            ${item.price}
          </span>

          <button className="px-4 py-2 text-sm font-medium bg-orange-600 hover:bg-orange-700 text-white rounded">
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
}
