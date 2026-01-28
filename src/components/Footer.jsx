const Footer = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 text-slate-300 text-center py-4 text-sm">
      © {new Date().getFullYear()} {" "}
        Desarrollado por {" "}
      <a
            href="http://ezequiel-orazi.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition"
          >
            Ezequiel Orazi
          </a>{" "}
       · Fabricación bajo demanda
    </footer>
  );
};

export default Footer;
