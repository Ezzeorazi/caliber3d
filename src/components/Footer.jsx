const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border text-muted text-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-2">
          <span>
            © {new Date().getFullYear()}
          </span>

          <span className="hidden sm:inline">·</span>

          <span>
            Desarrollado por{" "}
            <a
              href="https://ezequiel-orazi.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition font-medium"
            >
              Ezequiel Orazi
            </a>
          </span>

          <span className="hidden sm:inline">·</span>

          <span>Fabricación bajo demanda</span>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
