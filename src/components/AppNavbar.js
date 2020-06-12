import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Button
} from 'reactstrap';

function AppNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<React.Fragment>
			<Navbar light navbar-inverse expand="md" >
				<NavbarBrand href="/">
				<h2>Capos</h2>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Link className="nav-links" to="main" spy={true} smooth={true} offset={-100} duration={1000}>Get Started</Link>
						</NavItem>
						<NavItem>
							<Link className="nav-links" to="about" spy={true} smooth={true} offset={0} duration={1000}>About</Link>
						</NavItem>
						<NavItem>
							{/* <Link className="nav-links" to="/contact">Contact</Link> */}
							<Link className="nav-links" to="contact" spy={true} smooth={true} offset={0} duration={1000}>Contact</Link>
						</NavItem>

						<NavItem>
							<Button className='navBtn' size="lg">Login/Signup
                                    </Button>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</React.Fragment>
	)
}

export default AppNavbar
