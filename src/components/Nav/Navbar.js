import React from "react"
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../Nav/NavBar.css"

const Navbar = () => {
  return (
    <header className="bg-header">
      <div className="header-container">

        <Link to="/"><h1 className="header-title">GAMERSX</h1></Link>

        <nav>
          <Link to="/" className="header-navlink">PRODUCTOS</Link>
          <Link to="/Category" className="header-navlink">CATEGORIAS</Link>
          <Link to="/Contact" className="header-navlink">CONTACTO</Link>
          <Link to="/Cart" className="header-navlink"><AiOutlineShoppingCart /></Link>
        </nav>




      </div>
    </header>
  );
};

export default Navbar;