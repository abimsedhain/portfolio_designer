import React, { useState } from 'react';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';

import logo from '../assets/capos.png'

function AppNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Navbar light expand="md" fixed="top">
                <NavbarBrand href="/">CAPOS</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-links" to="/about">Get Started</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-links" to="/about">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-links" to="/contact">Contact</Link>
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
