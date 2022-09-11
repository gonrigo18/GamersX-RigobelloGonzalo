import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Nav/NavBar.css"
import { Navbar, NavItem, NavbarToggler, Collapse, NavLink, Nav, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CartWidget from "../CartWidget/CartWidget";

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
                                <DropdownItem href="/productos/ram">Memorias Ram</DropdownItem>
                                <DropdownItem href="/productos/mothers">Mothers</DropdownItem>
                                <DropdownItem href="/productos/notebooks">Notebooks</DropdownItem>
                                <DropdownItem href="/productos/audio">Audio</DropdownItem>
                                <DropdownItem href="/productos/muebles">Muebles</DropdownItem>
                                <DropdownItem href="/productos/notebooks">Notebooks</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/Contacto">Contacto</NavLink>
                        </NavItem>
                    </Nav>
                    <CartWidget/>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
