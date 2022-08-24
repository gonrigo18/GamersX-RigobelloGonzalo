import React from "react"
import "../Nav/NavBar.css"
import CartWidget from "../Cart/CartWidget"

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
          <li className="cartIcon2">
            <a className="cartIcon" href="/#"><CartWidget/></a>
          </li>
        </ul>
      </nav>
    </div>
  );
}