export default function Topbar({ nav }) {
  return (
    <header className="topbar">
      <span className="brand">Marco Dalprato</span>
      <nav className="nav-links">
        <a href="#about">{nav.about}</a>
        <a href="#portfolio">{nav.portfolio}</a>
        <a href="#cv">{nav.cv}</a>
        <a href="#contact">{nav.contact}</a>
      </nav>
    </header>
  );
}
