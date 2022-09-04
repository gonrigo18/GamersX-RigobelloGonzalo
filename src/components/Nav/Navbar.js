import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../Nav/NavBar.css"
import { Navbar, NavItem, NavbarToggler, Collapse, NavLink, Nav, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NavBar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div style={{ display: 'block', }}>
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/">GAMERSX</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Productos</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Categorias
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/Category/Ram">Memorias Ram</DropdownItem>
                                <DropdownItem href="/Category/Mothers">Mothers</DropdownItem>
                                <DropdownItem href="/Category/Notebooks">Notebooks</DropdownItem>
                                <DropdownItem href="/Category/Audio">Audio</DropdownItem>
                                <DropdownItem href="/Category/Muebles">Muebles</DropdownItem>
                                <DropdownItem href="/Category/Notebooks">Notebooks</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/Contacto">Contacto</NavLink>
                        </NavItem>
                    </Nav>
                    <Link className="cart" to="/Cart"><AiOutlineShoppingCart /></Link>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;


/*
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
        </header>*/