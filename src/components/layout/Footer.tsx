export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stroke-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <p className="text-normal-text text-sm">
            © {currentYear} made by Nick with love ❤️
          </p>
          <div className="flex gap-6">
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
