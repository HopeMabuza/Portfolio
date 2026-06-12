import { useState, useEffect } from 'react';

const links = [
  { label: 'work', href: '#projects' },
  { label: 'stack', href: '#stack' },
  { label: 'journal', href: '#journal' },
  { label: 'github', href: 'https://github.com/HopeMabuza', external: true },
  { label: 'contact', href: 'mailto:hopemabuzadev@gmail.com', external: true },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''}>
        <span className="nav-name">Hope <span>Mabuza</span></span>

        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener' : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button className="nav-burger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.external ? '_blank' : undefined}
            rel={l.external ? 'noopener' : undefined}
            onClick={handleLinkClick}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
