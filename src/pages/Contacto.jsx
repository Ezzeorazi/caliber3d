import { useState } from "react";

const Contacto = () => {
  const [focused, setFocused] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-text">
          Contacto
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          ¿Tenés una idea, un proyecto o necesitás una pieza específica?
          Escribinos y lo vemos juntos.
        </p>
      </header>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-2">
        {/* Formulario */}
        <form
          className="
            bg-surface border border-border rounded-2xl
            p-6 space-y-5
            shadow-lg
          "
        >
          <h2 className="text-xl font-semibold text-text">
            Enviá tu consulta
          </h2>

          {/* Nombre */}
          <div className="space-y-1">
            <label className="text-sm text-muted">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              onFocus={() => setFocused("nombre")}
              onBlur={() => setFocused(null)}
              className={`
                w-full px-4 py-2 rounded-md
                bg-bg border text-text
                transition
                ${
                  focused === "nombre"
                    ? "border-accent ring-2 ring-accent/30"
                    : "border-border"
                }
                focus:outline-none
              `}
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm text-muted">Email</label>
            <input
              type="email"
              placeholder="tu@email.com"
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className={`
                w-full px-4 py-2 rounded-md
                bg-bg border text-text
                transition
                ${
                  focused === "email"
                    ? "border-accent ring-2 ring-accent/30"
                    : "border-border"
                }
                focus:outline-none
              `}
            />
          </div>

          {/* Mensaje */}
          <div className="space-y-1">
            <label className="text-sm text-muted">Mensaje</label>
            <textarea
              rows="4"
              placeholder="Contanos qué necesitás imprimir, para qué se usa, cantidad aproximada, etc."
              onFocus={() => setFocused("mensaje")}
              onBlur={() => setFocused(null)}
              className={`
                w-full px-4 py-2 rounded-md
                bg-bg border text-text
                resize-none transition
                ${
                  focused === "mensaje"
                    ? "border-accent ring-2 ring-accent/30"
                    : "border-border"
                }
                focus:outline-none
              `}
            />
          </div>

          {/* Botón */}
          <button
            type="button"
            className="
              w-full mt-4
              bg-accent hover:bg-accent-hover
              text-bg font-semibold
              py-3 rounded-md
              transition transform
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Enviar consulta
          </button>

          <p className="text-xs text-muted text-center">
            Respondemos lo antes posible. 
          </p>
        </form>

        {/* Info lateral */}
        <div className="space-y-6">
          {/* WhatsApp */}
          <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
            <h3 className="text-lg font-semibold text-text">
              📱 WhatsApp directo
            </h3>
            <p className="text-sm text-muted">
              Si preferís algo rápido, escribinos directo por WhatsApp.
            </p>
            <a
              href="https://wa.me/529982017863"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-4 py-2
                bg-green-500 hover:bg-green-600
                text-white rounded-md
                font-medium transition
              "
            >
              +52 998 201 7863
            </a>
          </div>

          {/* Calendly */}
          <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
            <h3 className="text-lg font-semibold text-text">
              📅 Agendar reunión
            </h3>
            <p className="text-sm text-muted">
              ¿Proyecto más grande o necesitás hablarlo tranquilo?
              Agendá una reunión de 30 minutos.
            </p>
            <a
              href="https://calendly.com/ezequiel-orazi90/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-4 py-2
                border border-accent
                text-accent
                hover:bg-accent hover:text-bg
                rounded-md
                font-medium transition
              "
            >
              Agendar reunión
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

