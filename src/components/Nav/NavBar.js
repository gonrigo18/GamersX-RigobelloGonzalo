import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Nav/NavBar.css"
import { Navbar, NavItem, NavbarToggler, Collapse, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="navbar"style={{ display: 'block', }}>
            <Navbar color="dark" light expand="md">
                <Link to="/"><h2>GAMERSX</h2></Link>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link to="/">Productos</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Categorias
                            </DropdownToggle>
                            <DropdownMenu>
                                <Link to="/productos/ram"><DropdownItem>Memorias Ram</DropdownItem></Link>
                                <Link to="/productos/mothers"><DropdownItem>Mothers</DropdownItem></Link>
                                <Link to="/productos/notebooks"><DropdownItem>Notebooks</DropdownItem></Link>
                                <Link to="/productos/audio"><DropdownItem>Audio</DropdownItem></Link>
                                <Link to="/productos/muebles"><DropdownItem>Muebles</DropdownItem></Link>
                                <Link to="/productos/notebooks"><DropdownItem>Notebooks</DropdownItem></Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <Link to="/Contacto" className="contacto">Contacto</Link>
                        </NavItem>
                    </Nav>
                    <CartWidget />
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
