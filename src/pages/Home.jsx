import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <section className="space-y-10">
      <HeroSlider />

      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold">
          Fabricación aditiva profesional
        </h2>

        <p className="mt-3 text-slate-300">
          Diseñamos y fabricamos piezas funcionales mediante impresión 3D,
          optimizando materiales, tiempos y costos para cada proyecto.
        </p>
      </div>
    </section>
  );
};

export default Home;
