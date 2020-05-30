import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

import logo from '../assets/capos.png'

function AppNavbar() {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" sticky="top">
                <Navbar.Brand>
                    <NavItem>
                        {/* <Link className="nav-logo" to="/">PORTFOLIO DESIGNER</Link> */}
                        <a target="_blank" href="https://www.google.com"><img className="logoo" src={logo} alt="github link"/></a>
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
