export default function CatalogFilters({
  search,
  setSearch,
  category,
  setCategory,
  categories,
}) {
  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Search */}
      <input
        type="text"
        placeholder="Buscar producto, material o etiqueta…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full px-4 py-2 rounded-md
          bg-bg border border-border text-text
          focus:outline-none focus:ring-2 focus:ring-accent/40
        "
      />

      {/* Categorías */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setCategory("all")}
          className={`px-3 py-1 rounded-full text-sm transition
            ${
              category === "all"
                ? "bg-accent text-bg"
                : "bg-surface text-muted hover:text-text"
            }`}
        >
          Todas
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded-full text-sm capitalize transition
              ${
                category === cat
                  ? "bg-accent text-bg"
                  : "bg-surface text-muted hover:text-text"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
