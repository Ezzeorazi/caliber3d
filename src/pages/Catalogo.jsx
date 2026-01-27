import CatalogCard from "../components/CatalogCard";
import products from "../data/products";

export default function Catalogo() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Catálogo</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <CatalogCard key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
}
