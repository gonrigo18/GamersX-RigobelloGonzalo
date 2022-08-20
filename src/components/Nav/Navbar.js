import "../Nav/NavBar.css"

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">Gamers X</div>
        <ul className="nav-links">
          <li>
            <a href="/#">CATEGORIAS</a>
          </li>
          <li>
            <a href="/#">ARMÁ TU PC</a>
          </li>
          <li>
            <a href="/#">PC ARMADAS</a>
          </li>
          <li>
            <a href="/#">MI CUENTA</a>
          </li>
          <li>
            <a href="/#">CONTACTO</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}