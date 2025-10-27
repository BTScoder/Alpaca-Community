const Footer = () => {
  return (
    <footer className="mt-auto bg-blue-950 py-8 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-heading mb-2 text-2xl tracking-widest">
              ALPACA GENERATOR
            </h3>
            <p className="text-sm text-gray-300">
              Create your unique alpaca avatar
            </p>
          </div>

          {/* Links Section */}
          <div className="flex gap-8 text-sm">
            <a
              href="https://github.com/BTScoder/Alpaca-Generator"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-150 hover:scale-105 hover:text-gray-300"
            >
              GitHub
            </a>
            <a
              href="#"
              className="transition duration-150 hover:scale-105 hover:text-gray-300"
            >
              About
            </a>
            <a
              href="#"
              className="transition duration-150 hover:scale-105 hover:text-gray-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Alpaca Generator. Created with ❤️
            by{" "}
            <a
              href="https://github.com/BTScoder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-gray-300"
            >
              BTScoder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
