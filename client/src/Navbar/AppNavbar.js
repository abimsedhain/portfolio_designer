import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';


function AppNavbar() {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" sticky="top">
                <Navbar.Brand>
                    <NavItem>
                        <Link className="nav-logo" to="/">PORTFOLIO DESIGNER</Link>
                    </NavItem>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavItem>
                            <Link className="nav-links" to="/">Get Started</Link>
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
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}

export default AppNavbar
