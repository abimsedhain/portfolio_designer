import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import './style.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

import logo from '../assets/logo.png'

function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Navbar light expand="md" fixed="top">
                <NavbarBrand href="/">
                <img className="mainLogo" src={logo} alt="logo"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-links" to="main" spy={true} smooth={true} offset={-100} duration={1000}>Get Started</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-links" to="about" spy={true} smooth={true} offset={-80} duration={1000}>About</Link>
                        </NavItem>
                        <NavItem>
                            {/* <Link className="nav-links" to="/contact">Contact</Link> */}
                            <Link className="nav-links" to="contact" spy={true} smooth={true} offset={-100} duration={1000}>Contact</Link>
                        </NavItem>
                        <NavItem>
                        
                            <Link className="nav-links" to="/login">Login/Signup</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default AppNavbar
