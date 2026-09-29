const items = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Journal', href: '#journal' },
];

export default function Nav() {
  return (
    <header className="site-header">
      <a href="#top" className="brand">Hope Mabuza</a>
      <nav className="nav-pills" aria-label="Main">
        {items.map((i) => (
          <a key={i.href} href={i.href} className="nav-pill">{i.label}</a>
        ))}
        <a href="#contact" className="nav-pill nav-pill-cta">Contact</a>
      </nav>
    </header>
  );
}
