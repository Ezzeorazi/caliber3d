const SobreNosotros = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <header className="space-y-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text">
          Sobre Nosotros
        </h2>
        <p className="text-muted max-w-3xl mx-auto">
          Somos un emprendimiento especializado en manufactura aditiva (sí,
          impresión 3D, pero bien hecha), enfocado en calidad, resistencia y
          terminaciones profesionales. No imprimimos “cosas”, fabricamos
          soluciones.
        </p>
      </header>

      {/* Qué hacemos */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
          <h3 className="text-xl font-semibold text-text">
            🔧 Qué hacemos
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            Diseñamos y fabricamos piezas en impresión 3D para prototipos,
            repuestos, piezas técnicas y productos personalizados. Desde una
            idea en tu cabeza hasta una pieza funcional en tu mano.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
          <h3 className="text-xl font-semibold text-text">
            🎯 Nuestro enfoque
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            Nos obsesiona el equilibrio entre resistencia, estética y
            funcionalidad. No creemos en el “rápido y barato” si eso implica
            sacrificar calidad (las piezas frágiles también nos dan bronca).
          </p>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
          <h3 className="text-xl font-semibold text-text">
            🧪 Materiales y pruebas
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            Trabajamos con distintos materiales según el uso real de la pieza.
            Probamos configuraciones, ajustes y refuerzos hasta que la pieza
            haga lo que tiene que hacer… y un poco más.
          </p>
        </div>
      </div>

      {/* Cómo trabajamos */}
      <div className="bg-gradient-to-br from-surface to-bg border border-border rounded-2xl p-8 space-y-6">
        <h3 className="text-2xl font-semibold text-text text-center">
          Cómo trabajamos
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <span className="text-accent font-bold">01</span>
            <h4 className="font-semibold text-text">Escuchamos</h4>
            <p className="text-sm text-muted">
              Nos contás qué necesitás, para qué se usa y qué problema querés
              resolver. Cuanto más claro, mejor.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-accent font-bold">02</span>
            <h4 className="font-semibold text-text">Analizamos</h4>
            <p className="text-sm text-muted">
              Definimos material, refuerzos, tiempo de impresión y terminación.
              Acá es donde evitamos errores caros.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-accent font-bold">03</span>
            <h4 className="font-semibold text-text">Fabricamos</h4>
            <p className="text-sm text-muted">
              Imprimimos con parámetros optimizados, cuidando cada capa como si
              fuera la última (porque rehacer piezas no es divertido).
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-accent font-bold">04</span>
            <h4 className="font-semibold text-text">Entregamos</h4>
            <p className="text-sm text-muted">
              Revisamos la pieza, verificamos calidad y coordinamos la entrega.
              Sin sorpresas raras.
            </p>
          </div>
        </div>
      </div>

      {/* Por qué elegirnos */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
          <h3 className="text-xl font-semibold text-text">
            💡 Por qué elegirnos
          </h3>
          <ul className="list-disc list-inside text-sm text-muted space-y-1">
            <li>Piezas pensadas para uso real, no solo para verse lindas</li>
            <li>Asesoramiento técnico honesto</li>
            <li>Producción en baja escala sin perder calidad</li>
            <li>Comunicación clara (hablamos humano, no solo técnico)</li>
          </ul>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
          <h3 className="text-xl font-semibold text-text">
            😄 Bonus honesto
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            Si algo no conviene imprimirse en 3D, te lo decimos. Preferimos
            perder una venta antes que entregarte algo que no funcione.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
