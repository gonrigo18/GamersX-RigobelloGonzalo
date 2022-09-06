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
                                <DropdownItem href="/category/ram">Memorias Ram</DropdownItem>
                                <DropdownItem href="/category/mothers">Mothers</DropdownItem>
                                <DropdownItem href="/category/notebooks ">Notebooks</DropdownItem>
                                <DropdownItem href="/category/audio">Audio</DropdownItem>
                                <DropdownItem href="/category/muebles">Muebles</DropdownItem>
                                <DropdownItem href="/category/notebooks">Notebooks</DropdownItem>
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
