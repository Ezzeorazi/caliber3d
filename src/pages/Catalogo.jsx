import CatalogCard from "../components/CatalogCard";

const items = [
  {
    id: 1,
    title: "Labubu llavero",
    material: "PLA",
    time: "4h 30m",
    price: "300",
    images: [
      "src/assets/Labubu.svg",
      "src/assets/Labubu-2.svg",
    ],
  },
  {
    id: 2,
    title: "Llavero Copa del mundo",
    material: "PLA Silk",
    time: "1h 20m",
    price: "150",
    images: [
      "src/assets/Copa-del-mundo.svg",
      "src/assets/Copa-del-mundo-2.svg",
    ],
  },
  {
    id: 3,
    title: "Lagartija articulada",
    material: "PLA Silk",
    time: "4h 55m",
    price: "450",
    images: [
      "src/assets/Lagartija.svg",
      "src/assets/Lagartija-2.svg",
    ],
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
