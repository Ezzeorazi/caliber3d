import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import SobreNosotros from "../pages/SobreNosotros";
import Contacto from "../pages/Contacto";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
