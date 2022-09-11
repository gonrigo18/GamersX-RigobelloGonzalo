import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Nav/NavBar.css"
import { Navbar, NavItem, NavbarToggler, Collapse, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div style={{ display: 'block', }}>
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
                                <li><Link to="/productos/ram">Memorias Ram</Link></li>
                                <li><Link to="/productos/mothers">Mothers</Link></li>
                                <li><Link to="/productos/notebooks">Notebooks</Link></li>
                                <li><Link to="/productos/audio">Audio</Link></li>
                                <li><Link to="/productos/muebles">Muebles</Link></li>
                                <li><Link to="/productos/notebooks">Notebooks</Link></li>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <Link to="/Contacto">Contacto</Link>
                        </NavItem>
                    </Nav>
                    <CartWidget />
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
