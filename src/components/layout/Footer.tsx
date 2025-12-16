export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stroke-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-0">
          <p className="text-normal-text text-xs sm:text-sm text-center md:text-left">
            © {currentYear} made by Nick with love ❤️
          </p>
          <div className="flex gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
            <a
              href="https://github.com/Nmilien34"
              target="_blank"
              rel="noopener noreferrer"
              className="text-normal-text hover:text-text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nmilien/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-normal-text hover:text-text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:Nicksonn.milien@gmail.com"
              className="text-normal-text hover:text-text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
