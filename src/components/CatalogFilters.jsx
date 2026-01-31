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
          placeholder:text-muted
          focus:outline-none focus:ring-2 focus:ring-accent/40
          transition
        "
      />

      {/* Categorías */}
      <div className="flex flex-wrap gap-2">
        {/* Todas */}
        <button
          onClick={() => setCategory("all")}
          className={`
            px-4 py-1.5 rounded-full text-sm font-medium
            border
            cursor-pointer select-none
            transition-all duration-200

            ${
              category === "all"
                ? "bg-accent text-bg border-accent shadow-md scale-[1.03]"
                : "bg-surface text-muted border-border hover:text-text hover:border-accent"
            }
          `}
        >
          Todas
        </button>

        {/* Categorías dinámicas */}
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`
              px-4 py-1.5 rounded-full text-sm font-medium capitalize
              border
              cursor-pointer select-none
              transition-all duration-200

              ${
                category === cat
                  ? "bg-accent text-bg border-accent shadow-md scale-[1.03]"
                  : "bg-surface text-muted border-border hover:text-text hover:border-accent"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
