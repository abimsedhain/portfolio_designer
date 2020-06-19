import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';
import { Logo, NavbarButton} from "./styled/StyledComponents"

function AppNavbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Container fluid className="text-right">
			<Navbar light navbar-inverse="true" expand="md" >
				<NavbarBrand href="/">
					<Logo>Capos</Logo>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Link className="nav-links" to="instruction" spy={true} smooth={true} offset={0} duration={1000}>
								<NavLink>
									<Logo Small>Get Started</Logo>
								</NavLink>
							</Link>
						</NavItem>
						<NavItem>

							<Link className="nav-links" to="about" spy={true} smooth={true} offset={0} duration={1000}>
								<NavLink><Logo Small>
									About
								</Logo>
								</NavLink>
							</Link>
						</NavItem>
						<NavItem>

							<Link className="nav-links" to="contact" spy={true} smooth={true} offset={0} duration={1000}>
								<NavLink>
									<Logo Small>
										Contact
									</Logo>
								</NavLink>
							</Link>
						</NavItem>

						<NavItem>
								<NavbarButton Small White>Login/Signup
                                    </NavbarButton>

						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</Container>
	)
}

export default AppNavbar
