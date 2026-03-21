export const Footer = () => {
  return (
    <footer className="bg-bg-300 flex flex-col items-center justify-center p-4 gap-y-2 text-sm">
      <nav className="flex items-center gap-4">
        <a
          href="https://github.com/danilo-fq/wsFrontend-Fabrica26.1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          Repositório
        </a>

        <a
          href="https://rickandmortyapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          API
        </a>
      </nav>
      <p>
        Desenvolvido por{" "}
        <a
          href="https://www.linkedin.com/in/danilo-fq/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          Danilo Ferreira
        </a>
      </p>
    </footer>
  );
}