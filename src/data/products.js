const products = [
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
];

export default products;
