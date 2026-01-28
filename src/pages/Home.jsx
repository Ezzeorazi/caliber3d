import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <section className="space-y-20">
      {/* HERO */}
      <HeroSlider />

      {/* INTRO */}
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold">
          Fabricación de piezas profesionales
        </h2>

        <p className="mt-4 text-muted leading-relaxed font-body">
          Diseñamos y fabricamos piezas funcionales mediante impresión 3D,
          optimizando materiales, tiempos y costos según cada necesidad.
          Trabajamos tanto con proyectos únicos como con producción en serie.
        </p>
      </div>

      {/* MAYORISTA / MINORISTA */}
      <div className="bg-surface border border-border rounded-2xl max-w-6xl mx-auto p-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-heading font-semibold text-accent">
            Venta minorista
          </h3>
          <p className="mt-3 text-muted font-body leading-relaxed">
            Producción de piezas individuales o pequeñas cantidades.
            Ideal para prototipos, repuestos, regalos personalizados,
            decoración, soportes técnicos y soluciones a medida.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-heading font-semibold text-cyan">
            Venta mayorista
          </h3>
          <p className="mt-3 text-muted font-body leading-relaxed">
            Fabricación en serie para comercios, emprendimientos y empresas.
            Todos los productos del catálogo pueden producirse por volumen,
            sujetos a tiempos de fabricación acordados previamente.
          </p>
        </div>

        <div className="md:col-span-2 border-t border-border pt-6">
          <p className="text-sm text-muted font-body">
            💬 Los precios se acuerdan según cantidad, complejidad, material
            y plazos, buscando siempre un beneficio mutuo.
          </p>
        </div>
      </div>

      {/* PREGUNTAS FRECUENTES */}
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-heading font-semibold mb-6">
          Preguntas frecuentes
        </h3>

        <div className="space-y-4">
          <details className="group bg-surface border border-border rounded-xl p-4">
            <summary className="cursor-pointer font-heading font-medium text-accent">
              ¿Qué tipo de piezas fabrican?
            </summary>
            <p className="mt-3 text-muted font-body">
              Fabricamos piezas funcionales, técnicas y decorativas.
              Desde prototipos y repuestos hasta productos listos para venta.
            </p>
          </details>

          <details className="group bg-surface border border-border rounded-xl p-4">
            <summary className="cursor-pointer font-heading font-medium text-accent">
              ¿Trabajan con producción en serie?
            </summary>
            <p className="mt-3 text-muted font-body">
              Sí. Todo el catálogo puede producirse en serie, dependiendo
              del volumen solicitado y los tiempos de fabricación acordados.
            </p>
          </details>

          <details className="group bg-surface border border-border rounded-xl p-4">
            <summary className="cursor-pointer font-heading font-medium text-accent">
              ¿Qué materiales utilizan?
            </summary>
            <p className="mt-3 text-muted font-body">
              Utilizamos principalmente PLA, PLA+, PETG y otros materiales
              técnicos según el uso requerido.
            </p>
          </details>

          <details className="group bg-surface border border-border rounded-xl p-4">
            <summary className="cursor-pointer font-heading font-medium text-accent">
              ¿Cómo se definen los precios?
            </summary>
            <p className="mt-3 text-muted font-body">
              Los precios se calculan según cantidad, material, complejidad
              y tiempo de producción. Siempre buscamos una solución justa
              para ambas partes.
            </p>
          </details>
        </div>
      </div>

      {/* UBICACIÓN */}
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h3 className="text-2xl font-heading font-semibold">
            Estamos en Playa del Carmen
          </h3>

          <p className="mt-4 text-muted font-body leading-relaxed">
            Operamos desde Playa del Carmen, Quintana Roo.
            Atendemos pedidos locales y coordinamos entregas
            dentro de la zona.
          </p>

          <p className="mt-2 text-sm text-muted font-body">
            📍 Zona Quinta Avenida / Portal Maya
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border">
          {/* Reemplazá la imagen por la que prefieras */}
          <img
            src="/src/assets/PORTAL-MAYA.webp"
            alt="Playa del Carmen - Quinta Avenida"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
