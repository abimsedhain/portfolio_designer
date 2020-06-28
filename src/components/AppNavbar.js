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
import { userStateContext, userDispatchContext } from '../state management/userContext';
import types from '../state management/types';

function AppNavbar() {


	const userState = useContext(userStateContext).userState
	const dispatch = useContext(userDispatchContext)
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
									<Logo Small>{userState.name===""? "Get Started":`Hi, ${userState.name}`}</Logo>
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
							{userState.name === "" ?
								<a href={`${process.env.REACT_APP_GOOGLE_AUTH_URL}`}>
									<NavbarButton Small White>Login/Signup
                                    </NavbarButton>
								</a>
								: <NavbarButton Small White onClick={async () => {
									try {
										await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/logout`, {
											method: "GET",
											credentials: "include"
										})

									} catch (error) {
										console.log(error)
									} finally {
										dispatch({ type: types.REMOVE_USER })
									}
								}}>Logout
                                    </NavbarButton>
							}
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</Container>
	)
}

export default AppNavbar
