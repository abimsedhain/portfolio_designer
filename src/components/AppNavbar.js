import React, { useState, useContext } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
} from "reactstrap";
import {scroller} from "react-scroll"
import { Logo, NavbarButton } from "./styled/StyledComponents";
import {
	userStateContext,
	userDispatchContext,
} from "../state management/userContext";
import types from "../state management/types";

function AppNavbar({ setShowLoginCard }) {
	const userState = useContext(userStateContext).userState;
	const dispatch = useContext(userDispatchContext);
	// Local state
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Container fluid className="text-right">
			<Navbar light navbar-inverse="true" expand="md">
				<NavbarBrand href="/">
					<Logo>Capos</Logo>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink>
								<Logo Small>
									{userState.name === ""
										? "Get Started"
										: `Hi, ${userState.name}`}
								</Logo>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Logo Small>About</Logo>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Logo Small>Contact</Logo>
							</NavLink>
						</NavItem>
						<NavItem>
							{userState.name === "" ? (
								<NavbarButton
									Small
									White
									onClick={() => {
										setShowLoginCard(true);
										scroller.scrollTo("LoginCard", {
											duration: 1000,
											spy: true,
											smooth: true
										})
									}}
								>
									Login/Signup
								</NavbarButton>
							) : (
								<NavbarButton
									Small
									White
									onClick={async () => {
										try {
											await fetch(
												`${process.env.REACT_APP_BACKEND_URL}/user/logout`,
												{
													method: "GET",
													credentials: "include",
												}
											);
										} catch (error) {
											console.log(error);
										} finally {
											dispatch({
												type: types.REMOVE_USER,
											});
										}
									}}
								>
									Logout
								</NavbarButton>
							)}
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</Container>
	);
}

export default AppNavbar;
