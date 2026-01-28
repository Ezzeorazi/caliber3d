import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/CALIBER-LOGO-V2.png"; // ajustá el path

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass =
    "block py-2 text-sm hover:text-cyan transition-colors";



  return (
    <header className="bg-surface border-b border-border">
      <nav className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Caliber 3D Printing"
            className="h-20 w-auto md:h-25"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/catalogo" className={linkClass}>Catálogo</NavLink>
          <NavLink to="/sobre-nosotros" className={linkClass}>Sobre Nosotros</NavLink>
          <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-text"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-surface px-4 pb-4">

          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/catalogo" className={linkClass}>Catálogo</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/sobre-nosotros" className={linkClass}>Sobre Nosotros</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contacto" className={linkClass}>Contacto</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
