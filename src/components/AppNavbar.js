import React, { useState, useContext } from 'react';
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
import { Logo, NavbarButton } from "./styled/StyledComponents"
import { userStateContext } from './utility/userContext';

function AppNavbar() {


	const userState = useContext(userStateContext).userState

	// Local state
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
							{userState.name ==="" ?
								<a href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=711007651880-qtfh4lfqkt13jl0tu1i3fb9dm49p3q7c.apps.googleusercontent.com&prompt=consent&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauthenticate%2Fgoogle&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile">
									<NavbarButton Small White>Login/Signup
                                    </NavbarButton>
								</a>
								: <a href="/"><NavbarButton Small White>Logout
                                    </NavbarButton>
								</a>
							}
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</Container>
	)
}

export default AppNavbar
