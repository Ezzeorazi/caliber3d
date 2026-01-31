import { useMemo, useState } from "react";
import CatalogCard from "../components/CatalogCard";
import CatalogFilters from "../components/CatalogFilters";
import products from "../data/products";

export default function Catalogo() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    return [...new Set(products.map(p => p.category))];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;

      const searchText = search.toLowerCase();

      const matchesSearch =
        product.title.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText) ||
        product.material.toLowerCase().includes(searchText) ||
        product.tags.some(tag => tag.includes(searchText));

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Catálogo</h1>

      <CatalogFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      {filteredProducts.length === 0 ? (
        <p className="text-muted text-center py-10">
          No se encontraron productos con esos filtros.
        </p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map(product => (
            <CatalogCard key={product.id} item={product} />
          ))}
        </div>
      )}
    </section>
  );
}
