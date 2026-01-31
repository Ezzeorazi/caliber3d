const products = [
  // ======================
  // LLAVEROS
  // ======================
  {
    id: "1",
    title: "Labubu llavero",
    category: "llaveros",
    tags: ["llavero", "regalo", "souvenir", "personalizable"],
    material: "PLA",
    time: "4h 30m",
    price: "300",
    description:
      "Llavero personalizado impreso en 3D, resistente, liviano y totalmente personalizable.",
    images: [
      new URL("../assets/Labubu.svg", import.meta.url).href,
      new URL("../assets/Labubu-2.svg", import.meta.url).href,
    ],
  },
  {
    id: "2",
    title: "Llavero Copa del Mundo",
    category: "llaveros",
    tags: ["llavero", "souvenir", "regalo", "serie"],
    material: "PLA Silk",
    time: "1h 20m",
    price: "150",
    description:
      "Llavero conmemorativo impreso en PLA Silk, ideal para regalos y producción en serie.",
    images: [
      new URL("../assets/Copa-del-mundo.svg", import.meta.url).href,
      new URL("../assets/Copa-del-mundo-2.svg", import.meta.url).href,
    ],
  },

  // ======================
  // FIGURAS
  // ======================
  {
    id: "3",
    title: "Lagartija articulada",
    category: "figuras",
    tags: ["articulado", "decoracion", "regalo"],
    material: "PLA Silk",
    time: "4h 55m",
    price: "450",
    description:
      "Figura articulada impresa en 3D, flexible, resistente y de alta calidad.",
    images: [
      new URL("../assets/Lagartija.svg", import.meta.url).href,
      new URL("../assets/Lagartija-2.svg", import.meta.url).href,
    ],
  },

  // ======================
  // PÁDEL
  // ======================
  {
    id: "padel-1",
    title: "Match Hydrator – Porta Botella de Pádel",
    category: "padel",
    tags: ["padel", "porta botella", "deporte", "personalizable", "club"],
    material: "PLA",
    time: "2h 15m",
    price: "580",
    description:
      "Porta botella impreso en 3D para jugadores de pádel. Personalizable con nombre, logo de club o cancha. Ideal para uso personal o merchandising deportivo.",
    images: [
      new URL("../assets/padel-porta-botella.svg", import.meta.url).href,
    ],
  },
  {
    id: "padel-2",
    title: "Grip & Dry – Porta Botella + Toalla",
    category: "padel",
    tags: ["padel", "toalla", "accesorios", "personalizable"],
    material: "PLA",
    time: "2h 40m",
    price: "650",
    description:
      "Sistema práctico para llevar botella y toalla durante el partido. Diseño funcional, liviano y personalizable con nombre o logo.",
    images: [
      new URL("../assets/padel-toalla.svg", import.meta.url).href,
    ],
  },
  {
    id: "padel-3",
    title: "Pro Rack – Colgador de Raqueta de Pared",
    category: "padel",
    tags: ["padel", "organizador", "pared", "club"],
    material: "PLA",
    time: "1h 30m",
    price: "620",
    description:
      "Soporte de pared para raquetas de pádel. Ideal para casas, clubes o canchas. Personalizable con nombre del jugador o identidad del club.",
    images: [
      new URL("../assets/padel-colgador.svg", import.meta.url).href,
    ],
  },

  // ======================
  // SAN VALENTÍN
  // ======================
  {
    id: "sv-1",
    title: "Love Stand 3D – Porta Celular Personalizado",
    category: "san-valentin",
    tags: ["san valentin", "porta celular", "regalo", "personalizable"],
    material: "PLA",
    time: "3h 00m",
    price: "750",
    description:
      "Soporte para celular con diseño romántico. Personalizable con nombres, fecha o mensaje corto. Ideal para regalos especiales.",
    images: [
      new URL("../assets/sv-porta-celu.svg", import.meta.url).href,
    ],
  },
  {
    id: "sv-2",
    title: "Eternal Bloom – Rosa Decorativa 3D",
    category: "san-valentin",
    tags: ["san valentin", "decoracion", "regalo", "edicion especial"],
    material: "PLA",
    time: "2h 40m",
    price: "680",
    description:
      "Rosa decorativa impresa en 3D, pensada como detalle duradero para San Valentín. Posibilidad de base con grabado personalizado.",
    images: [
      new URL("../assets/sv-rosa.svg", import.meta.url).href,
    ],
  },
];

export default products;
