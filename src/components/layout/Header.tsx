const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background-color/95 backdrop-blur-sm border-b border-stroke-border z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-text-white hover:text-white-smoke transition-colors"
        >
          Nick
        </a>
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-normal-text hover:text-text-white transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
