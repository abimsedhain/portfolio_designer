import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footerStyle.css';

import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

function AppFooter() {
    return (
        <React.Fragment>
            <Navbar className="footerNav" collapseOnSelect expand="lg" sticky="bottom">
                <Navbar.Brand>
                    <NavItem>
                        <Navbar.Text className="footHead">
                            Feel free to reach out to us for feedback or any suggestions for new features, or just say hello!  </Navbar.Text>
                    </NavItem>

                    <a target="_blank" href="https://www.google.com"><img src={github} /></a>
                    <a target="_blank" href="https://www.google.com"><img src={twitter} /></a>
                    <a target="_blank" href="https://www.google.com"><img src={linkedin} /></a>

                    <NavItem>
                        <Navbar.Text className="madeBy"> Created with ♡ by ... </Navbar.Text>
                    </NavItem>

                    <NavItem>
                        <Navbar.Text className="footBottom"> &copy; 2020 Portfolio Designer </Navbar.Text>
                    </NavItem>
                </Navbar.Brand>
            </Navbar>
        </React.Fragment>
    )
}

export default AppFooter
