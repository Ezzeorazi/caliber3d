import CatalogCard from "../components/CatalogCard";

const items = [
  {
    id: 1,
    title: "Soporte Técnico Industrial",
    material: "PLA+",
    time: "4h 30m",
    price: "4500",
    image: "/assets/soporte.png",
  },
  {
    id: 2,
    title: "Llavero Personalizado",
    material: "PLA Silk",
    time: "1h 20m",
    price: "1500",
    image: "/assets/llavero.png",
  },
];

export default function Catalogo() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Catálogo</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(item => (
          <CatalogCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
