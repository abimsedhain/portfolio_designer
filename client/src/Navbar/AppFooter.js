import React, { useState } from 'react'
import { Navbar, NavItem } from 'react-bootstrap';
import './footerStyle.css';

import { Link } from 'react-router-dom';

import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'

function AppFooter() {

    return (
        <React.Fragment>
           
            <Navbar className="footerNav" collapseOnSelect expand="sm" sticky="bottom">
                <Navbar.Brand>
                    <NavItem>
                        <Navbar.Text className="footHead">
                            Feel free to reach out to us for feedback or any suggestions for new features, or just say hello!  </Navbar.Text>
                    </NavItem>

                    <a target="_blank" href="https://www.google.com"><img src={github} alt="github link"/></a>
                    <a target="_blank" href="https://www.google.com"><img src={twitter} alt="twitter link"/></a>
                    <a target="_blank" href="https://www.google.com"><img src={linkedin} alt="linkedin link"/></a>

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
